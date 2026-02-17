import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),

  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(254, 'Email must be less than 254 characters')
    .toLowerCase(),

  company: z
    .string()
    .max(100, 'Company name must be less than 100 characters')
    .regex(/^[a-zA-Z0-9\s\-&.,()]*$/, 'Company name contains invalid characters')
    .optional()
    .or(z.literal('')),

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

// Form field validation status
export type ValidationStatus = 'idle' | 'validating' | 'valid' | 'invalid'

// Error message helpers
export const getFieldError = (fieldName: keyof ContactFormData, errors: Record<string, { message?: string }>): string | undefined => {
  return errors[fieldName]?.message
}

export const hasFieldError = (fieldName: keyof ContactFormData, errors: Record<string, unknown>): boolean => {
  return !!errors[fieldName]
}
