import { NextRequest, NextResponse } from 'next/server'
import { ZodError } from 'zod'
import { contactFormSchema, formatPhoneNumber } from '@/lib/validation'
import { sendContactEmails } from '@/lib/email'
import { 
  withRateLimit, 
  contactFormRateLimiter, 
  strictRateLimiter, 
  isSuspiciousSubmission,
  getClientIP 
} from '@/lib/rate-limit'

/**
 * POST /api/contact
 * Handle contact form submissions
 */
export async function POST(request: NextRequest) {
  return withRateLimit(request, async () => {
    const startTime = Date.now()
    const clientIP = getClientIP(request)
    
    try {
      // Parse request body
      let body: unknown
      try {
        body = await request.json()
      } catch (error) {
        console.error('[Contact API] Invalid JSON:', error)
        return NextResponse.json(
          { 
            error: 'Invalid JSON', 
            message: 'Request body must be valid JSON' 
          },
          { status: 400 }
        )
      }

      // Validate request data
      let validatedData
      try {
        validatedData = contactFormSchema.parse(body)
        
        // Format phone number
        validatedData.phone = formatPhoneNumber(validatedData.phone)
        
      } catch (error) {
        console.error('[Contact API] Validation error:', error)
        
        if (error instanceof ZodError) {
          const fieldErrors = error.issues.reduce((acc: Record<string, string>, issue) => {
            const path = issue.path.join('.')
            acc[path] = issue.message
            return acc
          }, {})

          return NextResponse.json(
            {
              error: 'Validation failed',
              message: 'Please check your input and try again',
              fields: fieldErrors
            },
            { status: 400 }
          )
        }

        return NextResponse.json(
          { 
            error: 'Validation error', 
            message: 'Invalid form data provided' 
          },
          { status: 400 }
        )
      }

      // Check for suspicious content
      const isSuspicious = isSuspiciousSubmission(validatedData)
      if (isSuspicious) {
        console.warn('[Contact API] Suspicious submission detected:', {
          ip: clientIP,
          data: {
            firstName: validatedData.firstName,
            lastName: validatedData.lastName,
            company: validatedData.company,
            messageLength: validatedData.message.length
          }
        })

        // Use strict rate limiting for suspicious submissions
        const strictResult = strictRateLimiter.check(clientIP)
        if (!strictResult.success) {
          return NextResponse.json(
            {
              error: 'Rate limit exceeded',
              message: 'Too many requests. Please try again later.',
              retryAfter: strictResult.retryAfter
            },
            { 
              status: 429,
              headers: {
                'X-RateLimit-Limit': strictResult.limit.toString(),
                'X-RateLimit-Remaining': strictResult.remaining.toString(),
                'X-RateLimit-Reset': strictResult.reset.toString(),
                'Retry-After': strictResult.retryAfter?.toString() || '3600'
              }
            }
          )
        }

        // Log suspicious submission but continue processing
        // (In production, you might want to flag for manual review)
      }

      // Send emails
      console.log('[Contact API] Sending emails for:', {
        name: `${validatedData.firstName} ${validatedData.lastName}`,
        company: validatedData.company,
        serviceType: validatedData.serviceType,
        ip: clientIP
      })

      const emailResult = await sendContactEmails(validatedData)

      // Log email results
      if (!emailResult.success) {
        console.error('[Contact API] Email sending failed:', {
          errors: emailResult.errors,
          notification: emailResult.notification,
          confirmation: emailResult.confirmation,
          data: {
            name: `${validatedData.firstName} ${validatedData.lastName}`,
            email: validatedData.email,
            company: validatedData.company
          }
        })

        // In development, allow form submission to succeed even if emails fail
        const isDevelopment = process.env.NODE_ENV === 'development'
        if (isDevelopment) {
          console.warn('[Contact API] Email failed in development - allowing submission to succeed')
          return NextResponse.json(
            {
              success: true,
              message: 'Thank you for your message! (Development mode - emails not sent)',
              details: {
                notificationSent: false,
                confirmationSent: false,
                developmentMode: true,
                errors: emailResult.errors
              }
            },
            { status: 200 }
          )
        }

        return NextResponse.json(
          {
            error: 'Email delivery failed',
            message: 'Your message was received but we encountered an issue sending confirmations. Our team will contact you directly.',
            details: process.env.NODE_ENV === 'development' ? emailResult.errors : undefined
          },
          { status: 500 }
        )
      }

      // Success response
      const processingTime = Date.now() - startTime
      console.log('[Contact API] Success:', {
        name: `${validatedData.firstName} ${validatedData.lastName}`,
        company: validatedData.company,
        serviceType: validatedData.serviceType,
        processingTime: `${processingTime}ms`,
        notification: emailResult.notification.success,
        confirmation: emailResult.confirmation.success,
        ip: clientIP
      })

      return NextResponse.json(
        {
          success: true,
          message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
          details: {
            notificationSent: emailResult.notification.success,
            confirmationSent: emailResult.confirmation.success
          }
        },
        { 
          status: 200,
          headers: {
            'X-Processing-Time': `${processingTime}ms`
          }
        }
      )

    } catch (error) {
      const processingTime = Date.now() - startTime
      console.error('[Contact API] Unexpected error:', {
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
        ip: clientIP,
        processingTime: `${processingTime}ms`
      })

      return NextResponse.json(
        {
          error: 'Internal server error',
          message: 'An unexpected error occurred. Please try again or contact us directly.',
          timestamp: new Date().toISOString()
        },
        { status: 500 }
      )
    }
  })
}

/**
 * GET /api/contact
 * Get contact form configuration and rate limit status
 */
export async function GET(request: NextRequest) {
  try {
    const clientIP = getClientIP(request)
    const rateLimitStatus = contactFormRateLimiter.status(clientIP)

    return NextResponse.json({
      config: {
        maxSubmissions: rateLimitStatus.limit,
        windowMs: 60 * 60 * 1000, // 1 hour
        fields: [
          'firstName',
          'lastName', 
          'email',
          'phone',
          'company',
          'serviceType',
          'message'
        ],
        serviceTypes: [
          'web-development',
          'ai-innovation',
          'consulting',
          'training-workshops',
          'general-inquiry'
        ]
      },
      rateLimit: {
        limit: rateLimitStatus.limit,
        remaining: rateLimitStatus.remaining,
        reset: rateLimitStatus.reset,
        resetDate: new Date(rateLimitStatus.reset).toISOString()
      }
    })
  } catch (error) {
    console.error('[Contact API] GET error:', error)
    return NextResponse.json(
      { error: 'Failed to get configuration' },
      { status: 500 }
    )
  }
}

/**
 * Get allowed CORS origins based on environment
 */
function getAllowedOrigin(request: NextRequest): string | null {
  const origin = request.headers.get('origin')

  // Define allowed origins
  const allowedOrigins = [
    'https://werneenterprises.com',
    'https://www.werneenterprises.com',
    // Add staging/preview URLs if needed
    process.env.ALLOWED_ORIGIN, // Allow custom origin via env var
  ].filter(Boolean) as string[]

  // In development, also allow localhost
  if (process.env.NODE_ENV === 'development') {
    allowedOrigins.push(
      'http://localhost:3000',
      'http://127.0.0.1:3000',
      'http://localhost:3001'
    )
  }

  // Check if the request origin is in our allowed list
  if (origin && allowedOrigins.includes(origin)) {
    return origin
  }

  // Return null if origin not allowed (will not set CORS header)
  return null
}

/**
 * OPTIONS /api/contact
 * Handle CORS preflight requests
 */
export async function OPTIONS(request: NextRequest) {
  const allowedOrigin = getAllowedOrigin(request)

  // If origin is not allowed, return 403
  if (!allowedOrigin) {
    return new NextResponse(null, { status: 403 })
  }

  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': allowedOrigin,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
      'Vary': 'Origin', // Important for caching with dynamic origins
    },
  })
}

/**
 * Method not allowed handler
 */
export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405, headers: { 'Allow': 'GET, POST, OPTIONS' } }
  )
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405, headers: { 'Allow': 'GET, POST, OPTIONS' } }
  )
}

export async function PATCH() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405, headers: { 'Allow': 'GET, POST, OPTIONS' } }
  )
}