import { z } from 'zod'

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'First name can only contain letters, spaces, hyphens, and apostrophes'),
  
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Last name can only contain letters, spaces, hyphens, and apostrophes'),
  
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(254, 'Email must be less than 254 characters')
    .toLowerCase(),
  
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(
      /^[\+]?[1-9][\d]{0,15}$/,
      'Please enter a valid phone number (e.g., +1234567890 or 1234567890)'
    )
    .min(10, 'Phone number must be at least 10 digits')
    .max(17, 'Phone number must be less than 17 characters'),
  
  company: z
    .string()
    .min(1, 'Company name is required')
    .min(2, 'Company name must be at least 2 characters')
    .max(100, 'Company name must be less than 100 characters')
    .regex(/^[a-zA-Z0-9\s\-&.,()]+$/, 'Company name contains invalid characters'),
  
  serviceType: z
    .string()
    .min(1, 'Please select a service type')
    .refine(
      (value) => [
        'web-development',
        'ai-innovation',
        'consulting',
        'training-workshops',
        'general-inquiry'
      ].includes(value),
      'Please select a valid service type'
    ),
  
  message: z
    .string()
    .min(1, 'Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters')
    .refine(
      (value) => value.trim().length >= 10,
      'Message must contain at least 10 non-whitespace characters'
    )
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Additional validation helpers
export const validatePhoneNumber = (phone: string): boolean => {
  // Remove all non-digit characters except + at the beginning
  const cleanPhone = phone.replace(/[^\d+]/g, '').replace(/\+(?!^)/g, '')
  
  // Check if it's a valid international format
  if (cleanPhone.startsWith('+')) {
    return /^\+[1-9]\d{1,14}$/.test(cleanPhone)
  }
  
  // Check if it's a valid domestic format
  return /^\d{10,15}$/.test(cleanPhone)
}

export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters except + at the beginning
  const cleaned = phone.replace(/[^\d+]/g, '').replace(/\+(?!^)/g, '')
  
  // If it starts with +, keep it as is (international format)
  if (cleaned.startsWith('+')) {
    return cleaned
  }
  
  // For US numbers, format as +1XXXXXXXXXX
  if (cleaned.length === 10) {
    return `+1${cleaned}`
  }
  
  // For numbers starting with 1, format as +1XXXXXXXXXX
  if (cleaned.length === 11 && cleaned.startsWith('1')) {
    return `+${cleaned}`
  }
  
  // Return as is for other formats
  return cleaned.startsWith('+') ? cleaned : `+${cleaned}`
}

// Service type options for the select component
export const serviceTypeOptions: Array<{ value: string; label: string }> = [
  { value: 'web-development', label: 'Web Development' },
  { value: 'ai-innovation', label: 'AI Innovation' },
  { value: 'consulting', label: 'Consulting' },
  { value: 'training-workshops', label: 'Training/Workshops' },
  { value: 'general-inquiry', label: 'General Inquiry' }
]

// Form field validation status
export type ValidationStatus = 'idle' | 'validating' | 'valid' | 'invalid'

// Error message helpers
export const getFieldError = (fieldName: keyof ContactFormData, errors: Record<string, { message?: string }>): string | undefined => {
  return errors[fieldName]?.message
}

export const hasFieldError = (fieldName: keyof ContactFormData, errors: Record<string, unknown>): boolean => {
  return !!errors[fieldName]
}