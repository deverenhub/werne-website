import { LRUCache } from 'lru-cache'

export interface RateLimitResult {
  success: boolean
  limit: number
  remaining: number
  reset: number
  retryAfter?: number
}

export interface RateLimitOptions {
  interval: number // Time window in milliseconds
  uniqueTokenPerInterval: number // Maximum unique tokens per interval
  tokensPerInterval: number // Maximum requests per token per interval
}

/**
 * Create a rate limiter with LRU cache
 */
export function createRateLimiter(options: RateLimitOptions) {
  const cache = new LRUCache<string, { count: number; reset: number }>({
    max: options.uniqueTokenPerInterval,
    ttl: options.interval,
  })

  return {
    check: (token: string): RateLimitResult => {
      const now = Date.now()
      
      // Clean up expired entries
      const tokenData = cache.get(token)
      
      if (!tokenData || tokenData.reset <= now) {
        // First request or expired window
        const reset = now + options.interval
        cache.set(token, { count: 1, reset })
        
        return {
          success: true,
          limit: options.tokensPerInterval,
          remaining: options.tokensPerInterval - 1,
          reset
        }
      }
      
      if (tokenData.count >= options.tokensPerInterval) {
        // Rate limit exceeded
        return {
          success: false,
          limit: options.tokensPerInterval,
          remaining: 0,
          reset: tokenData.reset,
          retryAfter: Math.ceil((tokenData.reset - now) / 1000)
        }
      }
      
      // Increment count
      tokenData.count++
      cache.set(token, tokenData)
      
      return {
        success: true,
        limit: options.tokensPerInterval,
        remaining: options.tokensPerInterval - tokenData.count,
        reset: tokenData.reset
      }
    },
    
    // Get current status without incrementing
    status: (token: string): RateLimitResult => {
      const now = Date.now()
      const tokenData = cache.get(token)
      
      if (!tokenData || tokenData.reset <= now) {
        return {
          success: true,
          limit: options.tokensPerInterval,
          remaining: options.tokensPerInterval,
          reset: now + options.interval
        }
      }
      
      const remaining = Math.max(0, options.tokensPerInterval - tokenData.count)
      
      return {
        success: remaining > 0,
        limit: options.tokensPerInterval,
        remaining,
        reset: tokenData.reset,
        retryAfter: remaining === 0 ? Math.ceil((tokenData.reset - now) / 1000) : undefined
      }
    },
    
    // Reset a specific token (useful for testing)
    reset: (token: string): void => {
      cache.delete(token)
    },
    
    // Get cache stats
    stats: () => ({
      size: cache.size,
      calculatedSize: cache.calculatedSize,
      keys: Array.from(cache.keys())
    })
  }
}

/**
 * Default rate limiter for contact form
 * 5 submissions per IP per hour
 */
export const contactFormRateLimiter = createRateLimiter({
  interval: 60 * 60 * 1000, // 1 hour in milliseconds
  uniqueTokenPerInterval: 500, // Support 500 unique IPs per hour
  tokensPerInterval: 5, // 5 requests per IP per hour
})

/**
 * Strict rate limiter for suspicious activity
 * 2 submissions per IP per hour
 */
export const strictRateLimiter = createRateLimiter({
  interval: 60 * 60 * 1000, // 1 hour in milliseconds
  uniqueTokenPerInterval: 200, // Support 200 unique IPs per hour
  tokensPerInterval: 2, // 2 requests per IP per hour
})

/**
 * Get client IP address from request headers
 */
export function getClientIP(request: Request): string {
  // Try to get IP from various headers (for different proxy setups)
  const headers = request.headers
  
  const xForwardedFor = headers.get('x-forwarded-for')
  if (xForwardedFor) {
    // x-forwarded-for can contain multiple IPs, use the first one
    return xForwardedFor.split(',')[0].trim()
  }
  
  const xRealIP = headers.get('x-real-ip')
  if (xRealIP) {
    return xRealIP.trim()
  }
  
  const cfConnectingIP = headers.get('cf-connecting-ip')
  if (cfConnectingIP) {
    return cfConnectingIP.trim()
  }
  
  // Fallback for development or direct connections
  return 'unknown'
}

/**
 * Check if the submission appears suspicious
 */
export function isSuspiciousSubmission(data: Record<string, unknown>): boolean {
  const suspiciousPatterns = [
    // Common spam phrases
    /viagra|cialis|pharmacy|pills/i,
    /seo|backlink|rank your site/i,
    /click here|visit our site/i,
    /make money|get rich quick/i,
    /lottery|winner|congratulations/i,
    
    // Multiple URLs in message
    /https?:\/\/.*https?:\/\//i,
    
    // Excessive special characters
    /[!@#$%^&*]{5,}/,
    
    // Repetitive characters
    /(.)\1{10,}/,
    
    // Common bot names
    /bot|crawler|spider|test/i
  ]
  
  const message = typeof data.message === 'string' ? data.message : ''
  const firstName = typeof data.firstName === 'string' ? data.firstName : ''
  const lastName = typeof data.lastName === 'string' ? data.lastName : ''
  const company = typeof data.company === 'string' ? data.company : ''
  
  // Check message content
  if (suspiciousPatterns.some(pattern => pattern.test(message))) {
    return true
  }
  
  // Check if name looks suspicious
  if (suspiciousPatterns.some(pattern => pattern.test(firstName + ' ' + lastName))) {
    return true
  }
  
  // Check if company name looks suspicious
  if (suspiciousPatterns.some(pattern => pattern.test(company))) {
    return true
  }
  
  // Check for very short or very long messages
  if (message.length < 10 || message.length > 5000) {
    return true
  }
  
  // Check for messages that are all caps
  if (message.length > 50 && message === message.toUpperCase()) {
    return true
  }
  
  return false
}

/**
 * Rate limit middleware for API routes
 */
export async function withRateLimit<T>(
  request: Request,
  handler: () => Promise<T>,
  options?: {
    rateLimiter?: ReturnType<typeof createRateLimiter>
    // Reserved for future use: skip suspicious content check
    _skipSuspiciousCheck?: boolean
  }
): Promise<T | Response> {
  const {
    rateLimiter = contactFormRateLimiter,
  } = options || {}
  
  const clientIP = getClientIP(request)
  
  // Check rate limit
  const result = rateLimiter.check(clientIP)
  
  if (!result.success) {
    return new Response(
      JSON.stringify({
        error: 'Rate limit exceeded',
        message: 'Too many requests. Please try again later.',
        retryAfter: result.retryAfter
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'X-RateLimit-Limit': result.limit.toString(),
          'X-RateLimit-Remaining': result.remaining.toString(),
          'X-RateLimit-Reset': result.reset.toString(),
          'Retry-After': result.retryAfter?.toString() || '3600'
        }
      }
    )
  }
  
  // Execute the handler and add rate limit headers to successful responses
  try {
    const response = await handler()
    
    // If response is a Response object, add headers
    if (response instanceof Response) {
      response.headers.set('X-RateLimit-Limit', result.limit.toString())
      response.headers.set('X-RateLimit-Remaining', result.remaining.toString())
      response.headers.set('X-RateLimit-Reset', result.reset.toString())
    }
    
    return response
  } catch (error) {
    // Don't penalize for server errors
    throw error
  }
}