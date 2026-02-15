import { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData, formatPhoneNumber } from '@/lib/validation'

export interface ContactFormState {
  isSubmitting: boolean
  isSuccess: boolean
  isError: boolean
  errorMessage: string | null
  successMessage: string | null
}

export interface UseContactFormReturn {
  // Form state
  form: ReturnType<typeof useForm<ContactFormData>>
  formState: ContactFormState
  
  // Actions
  handleSubmit: (data: ContactFormData) => Promise<void>
  resetForm: () => void
  clearMessages: () => void
  
  // Computed values
  canSubmit: boolean
  hasErrors: boolean
}

const DEFAULT_FORM_STATE: ContactFormState = {
  isSubmitting: false,
  isSuccess: false,
  isError: false,
  errorMessage: null,
  successMessage: null
}

const DEFAULT_FORM_VALUES: Partial<ContactFormData> = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  serviceType: '',
  message: ''
}

export const useContactForm = (): UseContactFormReturn => {
  const [formState, setFormState] = useState<ContactFormState>(DEFAULT_FORM_STATE)
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: DEFAULT_FORM_VALUES,
    mode: 'onBlur', // Validate on blur for better UX
    reValidateMode: 'onChange' // Re-validate on change after first validation
  })
  
  const { formState: { errors, isValid, isDirty }, reset } = form
  
  const clearMessages = useCallback(() => {
    setFormState(prev => ({
      ...prev,
      isSuccess: false,
      isError: false,
      errorMessage: null,
      successMessage: null
    }))
  }, [])
  
  const resetForm = useCallback(() => {
    reset(DEFAULT_FORM_VALUES)
    setFormState(DEFAULT_FORM_STATE)
  }, [reset])
  
  const handleSubmit = useCallback(async (data: ContactFormData) => {
    // Clear any previous messages
    clearMessages()
    
    // Set loading state
    setFormState(prev => ({
      ...prev,
      isSubmitting: true,
      isError: false,
      errorMessage: null
    }))
    
    try {
      // Format phone number before submission
      const formattedData = {
        ...data,
        phone: formatPhoneNumber(data.phone),
        // Trim whitespace from text fields
        firstName: data.firstName.trim(),
        lastName: data.lastName.trim(),
        company: data.company.trim(),
        message: data.message.trim()
      }
      
      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData)
      })
      
      const responseData = await response.json()
      
      if (!response.ok) {
        throw new Error(
          responseData.message || 
          responseData.error || 
          `HTTP error! status: ${response.status}`
        )
      }
      
      // Success
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        isSuccess: true,
        successMessage: responseData.message || 'Thank you for your message! We\'ll get back to you soon.'
      }))
      
      // Reset form after successful submission
      setTimeout(() => {
        resetForm()
      }, 3000) // Reset after 3 seconds to let user see success message
      
    } catch (error) {
      console.error('Contact form submission error:', error)
      
      let errorMessage = 'An unexpected error occurred. Please try again.'
      
      if (error instanceof Error) {
        // Handle specific error types
        if (error.message.includes('fetch')) {
          errorMessage = 'Network error. Please check your connection and try again.'
        } else if (error.message.includes('400')) {
          errorMessage = 'Invalid form data. Please check your entries and try again.'
        } else if (error.message.includes('429')) {
          errorMessage = 'Too many requests. Please wait a moment and try again.'
        } else if (error.message.includes('500')) {
          errorMessage = 'Server error. Please try again later.'
        } else {
          errorMessage = error.message
        }
      }
      
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        isError: true,
        errorMessage
      }))
    }
  }, [clearMessages, resetForm])
  
  // Computed values
  const canSubmit = isValid && isDirty && !formState.isSubmitting
  const hasErrors = Object.keys(errors).length > 0
  
  return {
    form,
    formState,
    handleSubmit,
    resetForm,
    clearMessages,
    canSubmit,
    hasErrors
  }
}

// Hook for handling form field focus and blur events
export const useFieldFocus = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null)
  
  const handleFocus = useCallback((fieldName: string) => {
    setFocusedField(fieldName)
  }, [])
  
  const handleBlur = useCallback(() => {
    setFocusedField(null)
  }, [])
  
  const isFieldFocused = useCallback((fieldName: string) => {
    return focusedField === fieldName
  }, [focusedField])
  
  return {
    handleFocus,
    handleBlur,
    isFieldFocused,
    focusedField
  }
}

// Hook for managing form analytics (optional)
export const useFormAnalytics = () => {
  const trackFormStart = useCallback(() => {
    // Track when user starts filling the form
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_start', {
        event_category: 'Contact Form',
        event_label: 'Contact Form Started'
      })
    }
  }, [])
  
  const trackFormSubmit = useCallback(() => {
    // Track when form is submitted
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        event_category: 'Contact Form',
        event_label: 'Contact Form Submitted'
      })
    }
  }, [])
  
  const trackFormError = useCallback((error: string) => {
    // Track form errors
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_error', {
        event_category: 'Contact Form',
        event_label: 'Contact Form Error',
        value: error
      })
    }
  }, [])
  
  return {
    trackFormStart,
    trackFormSubmit,
    trackFormError
  }
}