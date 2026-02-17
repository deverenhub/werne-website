import { Resend } from 'resend'
import { ContactFormData } from './validation'

/**
 * HTML entity encoding to prevent XSS attacks in email templates.
 * Escapes special characters that could be interpreted as HTML.
 */
function escapeHtml(str: string): string {
  const htmlEscapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return str.replace(/[&<>"']/g, (char) => htmlEscapes[char] || char)
}

// Email configuration - checked at runtime when sending
const hasEmailConfig = !!process.env.RESEND_API_KEY

// Note: RESEND_API_KEY is validated at runtime when attempting to send emails,
// not at build time, to allow the build to complete without the env var

// Initialize Resend only if API key is available
let resend: Resend | null = null
if (hasEmailConfig) {
  resend = new Resend(process.env.RESEND_API_KEY!)
}

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'info@werneenterprises.com'
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@werneenterprises.com'

/**
 * Professional HTML email template with Werne Enterprises branding
 */
const createEmailTemplate = (content: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Werne Enterprises</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            max-width: 600px;
            margin: 0 auto;
            padding: 0;
            background-color: #f8fafc;
        }
        .container {
            background-color: #ffffff;
            margin: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
        }
        .header p {
            margin: 8px 0 0 0;
            font-size: 16px;
            opacity: 0.9;
        }
        .content {
            padding: 40px 30px;
        }
        .content h2 {
            color: #1e40af;
            font-size: 24px;
            margin: 0 0 20px 0;
            font-weight: 600;
        }
        .content p {
            margin: 0 0 16px 0;
            color: #4b5563;
            font-size: 16px;
        }
        .info-box {
            background-color: #f1f5f9;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 20px;
            margin: 24px 0;
        }
        .info-box h3 {
            margin: 0 0 12px 0;
            color: #1e40af;
            font-size: 18px;
            font-weight: 600;
        }
        .info-item {
            margin: 8px 0;
            display: flex;
            align-items: flex-start;
        }
        .info-label {
            font-weight: 600;
            color: #374151;
            min-width: 100px;
            margin-right: 12px;
        }
        .info-value {
            color: #4b5563;
            word-break: break-word;
        }
        .message-box {
            background-color: #fefefe;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 20px;
            margin: 24px 0;
            white-space: pre-wrap;
            font-family: inherit;
        }
        .footer {
            background-color: #f8fafc;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
        }
        .footer p {
            margin: 0 0 8px 0;
            color: #6b7280;
            font-size: 14px;
        }
        .contact-info {
            color: #4b5563;
            font-size: 14px;
            margin-top: 16px;
        }
        .highlight {
            background-color: #fef3c7;
            color: #92400e;
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: 500;
        }
        .btn {
            display: inline-block;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            margin: 16px 0;
        }
        .urgent {
            color: #dc2626;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Werne Enterprises</h1>
            <p>Technology Innovation & Consulting</p>
        </div>
        <div class="content">
            ${content}
        </div>
        <div class="footer">
            <p><strong>Werne Enterprises</strong></p>
            <p>Transforming Business Through Technology Innovation</p>
            <div class="contact-info">
                <p>📧 info@werneenterprises.com</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>🌐 werneenterprises.com</p>
                <p>📍 123 Innovation Drive, Tech Valley, CA 94000</p>
            </div>
        </div>
    </div>
</body>
</html>
`

/**
 * Generate notification email content for business
 * All user-provided data is HTML-escaped to prevent XSS attacks
 */
const createNotificationContent = (data: ContactFormData): string => {
  const isUrgent = data.message.toLowerCase().includes('urgent')

  // Escape all user-provided data to prevent XSS
  const safeName = escapeHtml(data.name)
  const safeEmail = escapeHtml(data.email)
  const safeCompany = escapeHtml(data.company || 'Not provided')
  const safeMessage = escapeHtml(data.message)

  return `
    <h2>${isUrgent ? '🚨 ' : ''}New Contact Form Submission</h2>
    <p>You have received a new contact inquiry through the Werne Enterprises website.</p>

    ${isUrgent ? '<p class="urgent">This inquiry appears to be urgent and requires immediate attention.</p>' : ''}

    <div class="info-box">
        <h3>Contact Information</h3>
        <div class="info-item">
            <span class="info-label">Name:</span>
            <span class="info-value">${safeName}</span>
        </div>
        <div class="info-item">
            <span class="info-label">Email:</span>
            <span class="info-value">${safeEmail}</span>
        </div>
        <div class="info-item">
            <span class="info-label">Company:</span>
            <span class="info-value">${safeCompany}</span>
        </div>
    </div>

    <div class="info-box">
        <h3>Message</h3>
        <div class="message-box">${safeMessage}</div>
    </div>

    <p>Please respond to this inquiry within <strong>24 hours</strong> to maintain our high service standards.</p>

    <a href="mailto:${safeEmail}?subject=Re: Your inquiry to Werne Enterprises" class="btn">
        Reply to ${safeName}
    </a>
  `
}

/**
 * Generate confirmation email content for customer
 * All user-provided data is HTML-escaped to prevent XSS attacks
 */
const createConfirmationContent = (data: ContactFormData): string => {
  // Get first name from full name
  const firstName = data.name.split(' ')[0]

  // Escape all user-provided data to prevent XSS
  const safeFirstName = escapeHtml(firstName)
  const safeEmail = escapeHtml(data.email)
  const safeCompany = escapeHtml(data.company || 'Not provided')

  return `
    <h2>Thank You for Contacting Werne Enterprises</h2>
    <p>Dear ${safeFirstName},</p>

    <p>Thank you for reaching out to Werne Enterprises. We have received your inquiry and appreciate your interest in working with us.</p>

    <div class="info-box">
        <h3>Your Inquiry Details</h3>
        <div class="info-item">
            <span class="info-label">Company:</span>
            <span class="info-value">${safeCompany}</span>
        </div>
        <div class="info-item">
            <span class="info-label">Email:</span>
            <span class="info-value">${safeEmail}</span>
        </div>
    </div>

    <div class="info-box">
        <h3>What Happens Next?</h3>
        <p><strong>Response Time:</strong> You can expect a personal response within <strong>24 hours</strong> during business hours (Monday-Friday, 8 AM - 6 PM EST).</p>

        <p><strong>Next Steps:</strong></p>
        <ul style="margin: 8px 0; padding-left: 20px; color: #4b5563;">
            <li>Deveren will personally review your inquiry</li>
            <li>We'll schedule your free 2-hour consultation</li>
            <li>You'll receive tailored recommendations for your AI journey</li>
        </ul>
    </div>

    <p>If you have any urgent questions in the meantime, please don't hesitate to call us directly at <strong>864-991-5656</strong>.</p>

    <p>We look forward to discussing how Werne Enterprises can help transform your business through AI.</p>

    <p>Best regards,<br>
    <strong>Deveren Werne</strong><br>
    Werne Enterprises</p>

    <a href="https://werneenterprises.com/book-time" class="btn">
        Schedule Your Free Consultation
    </a>
  `
}

/**
 * Send notification email to business
 */
export async function sendNotificationEmail(data: ContactFormData) {
  try {
    // Skip email sending in development if no API key is configured
    if (!resend) {
      console.warn('Email sending skipped: RESEND_API_KEY not configured')
      return {
        success: false,
        error: 'Email service not configured (development mode)'
      }
    }

    const isUrgent = data.message.toLowerCase().includes('urgent')
    const companyDisplay = data.company || 'Individual'

    const subject = `${isUrgent ? '🚨 URGENT: ' : ''}New Contact Inquiry from ${data.name} | ${companyDisplay}`
    const htmlContent = createEmailTemplate(createNotificationContent(data))

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: [CONTACT_EMAIL],
      subject,
      html: htmlContent,
      replyTo: data.email,
      headers: {
        'X-Priority': isUrgent ? '1' : '3',
        'X-Contact-Company': data.company || 'Not provided',
      },
    })

    return { success: true, id: result.data?.id }
  } catch (error) {
    console.error('Failed to send notification email:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}

/**
 * Send confirmation email to customer
 */
export async function sendConfirmationEmail(data: ContactFormData) {
  try {
    // Skip email sending in development if no API key is configured
    if (!resend) {
      console.warn('Email sending skipped: RESEND_API_KEY not configured')
      return {
        success: false,
        error: 'Email service not configured (development mode)'
      }
    }

    const subject = `Thank you for contacting Werne Enterprises`
    const htmlContent = createEmailTemplate(createConfirmationContent(data))

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: [data.email],
      subject,
      html: htmlContent,
      replyTo: CONTACT_EMAIL,
      headers: {
        'X-Auto-Response': 'true',
      },
    })

    return { success: true, id: result.data?.id }
  } catch (error) {
    console.error('Failed to send confirmation email:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}

/**
 * Send both notification and confirmation emails
 */
export async function sendContactEmails(data: ContactFormData) {
  try {
    const [notificationResult, confirmationResult] = await Promise.allSettled([
      sendNotificationEmail(data),
      sendConfirmationEmail(data)
    ])

    const notification = notificationResult.status === 'fulfilled'
      ? notificationResult.value
      : { success: false, error: 'Failed to send notification' }

    const confirmation = confirmationResult.status === 'fulfilled'
      ? confirmationResult.value
      : { success: false, error: 'Failed to send confirmation' }

    // Consider success if at least the notification email was sent
    const success = notification.success

    return {
      success,
      notification,
      confirmation,
      errors: [
        ...(notification.success ? [] : [`Notification: ${notification.error}`]),
        ...(confirmation.success ? [] : [`Confirmation: ${confirmation.error}`])
      ]
    }
  } catch (error) {
    console.error('Failed to send contact emails:', error)
    return {
      success: false,
      notification: { success: false, error: 'Unknown error' },
      confirmation: { success: false, error: 'Unknown error' },
      errors: ['Failed to send emails due to unexpected error']
    }
  }
}

/**
 * Validate email configuration
 */
export function validateEmailConfig(): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!process.env.RESEND_API_KEY) {
    errors.push('RESEND_API_KEY environment variable is required')
  }

  if (!process.env.CONTACT_EMAIL) {
    errors.push('CONTACT_EMAIL environment variable is recommended')
  }

  if (!process.env.FROM_EMAIL) {
    errors.push('FROM_EMAIL environment variable is recommended')
  }

  return {
    valid: errors.length === 0,
    errors
  }
}
