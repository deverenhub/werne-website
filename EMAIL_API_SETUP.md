# Email Contact API Implementation

This document describes the robust email sending API endpoint implementation for the Werne Enterprises contact form.

## Overview

The implementation includes:
- **API Route**: `/src/app/api/contact/route.ts` - Handles POST requests with validation and email sending
- **Email Service**: `/src/lib/email.ts` - Professional HTML email templates and sending logic
- **Rate Limiting**: `/src/lib/rate-limit.ts` - Prevents spam with configurable limits
- **Validation**: `/src/lib/validation.ts` - Zod schema validation (already existed)
- **Contact Form**: `/src/components/forms/ContactForm.tsx` - Client-side form (already existed)
- **Test Page**: `/src/app/test-contact/page.tsx` - Testing interface

## Features Implemented

### 1. API Endpoint (`/api/contact`)
- **POST**: Submit contact form with full validation
- **GET**: Get form configuration and rate limit status
- **Rate Limiting**: 5 submissions per IP per hour (configurable)
- **Suspicious Content Detection**: Automatic filtering of spam content
- **Comprehensive Error Handling**: Proper HTTP status codes and error messages
- **Security Headers**: CORS support and method validation
- **Detailed Logging**: For monitoring and debugging

### 2. Email Service
- **Dual Emails**: 
  - Notification email to business (`CONTACT_EMAIL`)
  - Confirmation email to customer
- **Professional HTML Templates**: Branded emails with inline CSS
- **Service Type Awareness**: Different handling for urgent vs regular inquiries
- **Email Headers**: Proper categorization and priority settings
- **Error Handling**: Graceful fallbacks if email delivery fails

### 3. Rate Limiting
- **LRU Cache**: Efficient memory-based rate limiting
- **Flexible Configuration**: Different limits for regular vs suspicious content
- **IP-based Tracking**: Supports various proxy configurations
- **Real-time Status**: API provides remaining quota information

### 4. Security Features
- **Input Validation**: Comprehensive Zod schema validation
- **Suspicious Content Detection**: Pattern-based spam filtering
- **Rate Limiting**: Prevents abuse and spam
- **Error Message Sanitization**: Doesn't expose internal errors in production

## Environment Setup

1. **Copy Environment File**:
   ```bash
   cp .env.local.example .env.local
   ```

2. **Required Environment Variables**:
   ```env
   # Required
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   CONTACT_EMAIL=info@werneenterprises.com
   
   # Optional
   FROM_EMAIL=noreply@werneenterprises.com
   RATE_LIMIT_MAX_REQUESTS=5
   RATE_LIMIT_WINDOW_MS=3600000
   ```

3. **Get Resend API Key**:
   - Sign up at [resend.com](https://resend.com)
   - Verify your sending domain
   - Generate an API key

## API Usage

### Submit Contact Form
```typescript
POST /api/contact
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe", 
  "email": "john@example.com",
  "phone": "+1234567890",
  "company": "Acme Corp",
  "serviceType": "ai-innovation",
  "message": "I'm interested in AI solutions..."
}
```

### Success Response
```json
{
  "success": true,
  "message": "Thank you for your message! We'll get back to you within 24 hours.",
  "details": {
    "notificationSent": true,
    "confirmationSent": true
  }
}
```

### Error Responses
```json
// Rate Limited (429)
{
  "error": "Rate limit exceeded",
  "message": "Too many requests. Please try again later.",
  "retryAfter": 3600
}

// Validation Error (400)
{
  "error": "Validation failed",
  "message": "Please check your input and try again",
  "fields": {
    "email": "Please enter a valid email address",
    "message": "Message must be at least 10 characters"
  }
}
```

## Testing

1. **Test Page**: Visit `/test-contact` to test the form functionality
2. **API Testing**: Use the GET endpoint to check configuration
3. **Rate Limit Testing**: Submit multiple forms to test limits

## Email Templates

The implementation includes professional HTML email templates with:
- Responsive design
- Werne Enterprises branding
- Service-specific content
- Proper email headers
- Contact information
- Call-to-action buttons

### Notification Email (to Business)
- Shows all contact details
- Highlights service type
- Includes message content
- Priority flagging for urgent inquiries
- Reply-to customer email

### Confirmation Email (to Customer)
- Professional thank you message
- Confirms inquiry details
- Sets response time expectations
- Includes contact information
- Call-to-action for scheduling

## Rate Limiting Details

### Default Configuration
- **5 submissions per IP per hour** for regular traffic
- **2 submissions per IP per hour** for suspicious content
- **LRU cache** with 500 unique IP limit
- **Automatic cleanup** of expired entries

### Headers Returned
- `X-RateLimit-Limit`: Maximum requests allowed
- `X-RateLimit-Remaining`: Requests remaining in window
- `X-RateLimit-Reset`: Timestamp when limit resets
- `Retry-After`: Seconds to wait before retry (when limited)

## Monitoring and Logging

The API logs detailed information for monitoring:
- Successful submissions with processing time
- Failed submissions with error details
- Rate limit violations with IP addresses
- Suspicious content detection
- Email delivery status

## Security Considerations

1. **Input Validation**: All inputs validated with Zod schemas
2. **Rate Limiting**: Prevents spam and abuse
3. **Error Handling**: Doesn't expose internal system details
4. **Email Security**: Uses verified domains and proper headers
5. **IP Detection**: Handles various proxy configurations
6. **Content Filtering**: Automatic suspicious content detection

## Deployment Notes

1. **Environment Variables**: Ensure all required env vars are set
2. **Domain Verification**: Verify sending domain in Resend
3. **Rate Limiting**: Monitor and adjust limits based on traffic
4. **Email Delivery**: Set up monitoring for email delivery status
5. **Error Tracking**: Implement proper error tracking/alerting

## Future Enhancements

1. **Database Logging**: Store submissions for analytics
2. **Webhook Integration**: Connect to CRM systems
3. **Advanced Analytics**: Track conversion rates
4. **A/B Testing**: Test different email templates
5. **Internationalization**: Multi-language support