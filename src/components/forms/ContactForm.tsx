'use client'

import React, { useEffect } from 'react'
import {
  faUser,
  faEnvelope,
  faBuilding,
  faComment,
  faSpinner,
  faCheckCircle,
  faExclamationTriangle,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui'
import { useContactForm, useFieldFocus, useFormAnalytics } from '@/hooks/useContactForm'
import { getFieldError, hasFieldError } from '@/lib/validation'
import { cn } from '@/lib/utils'

interface ContactFormProps {
  className?: string
  title?: string
  subtitle?: string
  showTitle?: boolean
  onSubmitSuccess?: () => void
  onSubmitError?: (error: string) => void
}

export const ContactForm: React.FC<ContactFormProps> = ({
  className,
  title = "Get in Touch",
  subtitle = "Ready to transform your business? Let's discuss your project and explore how we can help you achieve your goals.",
  showTitle = true,
  onSubmitSuccess,
  onSubmitError
}) => {
  const {
    form,
    formState,
    handleSubmit,
    resetForm,
    clearMessages,
    canSubmit,
    hasErrors
  } = useContactForm()

  const { handleFocus, handleBlur, isFieldFocused } = useFieldFocus()
  const { trackFormStart, trackFormSubmit, trackFormError } = useFormAnalytics()

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors, touchedFields },
    watch
  } = form

  // Track form start when user first interacts
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name && !touchedFields[name as keyof typeof touchedFields]) {
        trackFormStart()
      }
    })
    return () => subscription.unsubscribe()
  }, [watch, touchedFields, trackFormStart])

  // Handle submission
  const onSubmit = async (data: Parameters<typeof handleSubmit>[0]) => {
    try {
      trackFormSubmit()
      await handleSubmit(data)
      onSubmitSuccess?.()
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      trackFormError(errorMessage)
      onSubmitError?.(errorMessage)
    }
  }

  // Handle form errors
  useEffect(() => {
    if (formState.isError && formState.errorMessage) {
      trackFormError(formState.errorMessage)
    }
  }, [formState.isError, formState.errorMessage, trackFormError])

  return (
    <div className={cn("w-full max-w-2xl mx-auto", className)}>
      {showTitle && (
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-lg mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <form
        onSubmit={hookFormHandleSubmit(onSubmit)}
        className="space-y-6 bg-white p-8 rounded-lg shadow-lg border border-gray-200"
        noValidate
      >
        {/* Success Message */}
        {formState.isSuccess && formState.successMessage && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <Icon
                icon={faCheckCircle}
                size="lg"
                color="success"
                className="mr-3"
              />
              <div className="flex-1">
                <h4 className="text-green-800 font-medium">Message Sent Successfully!</h4>
                <p className="text-green-700 text-sm mt-1">{formState.successMessage}</p>
              </div>
              <button
                type="button"
                onClick={clearMessages}
                className="text-green-500 hover:text-green-700 transition-colors"
                aria-label="Dismiss success message"
              >
                <Icon icon={faTimes} size="sm" color="success" />
              </button>
            </div>
          </div>
        )}

        {/* Error Message */}
        {formState.isError && formState.errorMessage && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <Icon
                icon={faExclamationTriangle}
                size="lg"
                color="error"
                className="mr-3"
              />
              <div className="flex-1">
                <h4 className="text-red-800 font-medium">Error Sending Message</h4>
                <p className="text-red-700 text-sm mt-1">{formState.errorMessage}</p>
              </div>
              <button
                type="button"
                onClick={clearMessages}
                className="text-red-500 hover:text-red-700 transition-colors"
                aria-label="Dismiss error message"
              >
                <Icon icon={faTimes} size="sm" color="error" />
              </button>
            </div>
          </div>
        )}

        {/* Name Field */}
        <div className="relative">
          <Input
            {...register('name')}
            label="Name"
            placeholder="Enter your full name"
            error={getFieldError('name', errors)}
            required
            disabled={formState.isSubmitting}
            onFocus={() => handleFocus('name')}
            onBlur={handleBlur}
            className={cn(
              isFieldFocused('name') && "ring-2 ring-primary ring-opacity-20"
            )}
          />
          <Icon
            icon={faUser}
            size="sm"
            color="neutral"
            className={cn(
              "absolute right-3 top-9 transition-colors",
              isFieldFocused('name') && "!text-primary",
              hasFieldError('name', errors) && "!text-red-500"
            )}
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <Input
            {...register('email')}
            type="email"
            label="Email Address"
            placeholder="Enter your email address"
            error={getFieldError('email', errors)}
            required
            disabled={formState.isSubmitting}
            onFocus={() => handleFocus('email')}
            onBlur={handleBlur}
            className={cn(
              isFieldFocused('email') && "ring-2 ring-primary ring-opacity-20"
            )}
          />
          <Icon
            icon={faEnvelope}
            size="sm"
            color="neutral"
            className={cn(
              "absolute right-3 top-9 transition-colors",
              isFieldFocused('email') && "!text-primary",
              hasFieldError('email', errors) && "!text-red-500"
            )}
          />
        </div>

        {/* Company Field (Optional) */}
        <div className="relative">
          <Input
            {...register('company')}
            label="Company"
            placeholder="Enter your company name (optional)"
            error={getFieldError('company', errors)}
            disabled={formState.isSubmitting}
            onFocus={() => handleFocus('company')}
            onBlur={handleBlur}
            className={cn(
              isFieldFocused('company') && "ring-2 ring-primary ring-opacity-20"
            )}
          />
          <Icon
            icon={faBuilding}
            size="sm"
            color="neutral"
            className={cn(
              "absolute right-3 top-9 transition-colors",
              isFieldFocused('company') && "!text-primary",
              hasFieldError('company', errors) && "!text-red-500"
            )}
          />
        </div>

        {/* Message */}
        <div className="relative">
          <Textarea
            {...register('message')}
            label="Message"
            placeholder="Tell us about your project, goals, and how we can help you..."
            error={getFieldError('message', errors)}
            required
            rows={6}
            maxLength={2000}
            showCharacterCount
            disabled={formState.isSubmitting}
            onFocus={() => handleFocus('message')}
            onBlur={handleBlur}
            className={cn(
              isFieldFocused('message') && "ring-2 ring-primary ring-opacity-20"
            )}
            helperText="Please provide as much detail as possible to help us understand your needs."
          />
          <Icon
            icon={faComment}
            size="sm"
            color="neutral"
            className={cn(
              "absolute right-3 top-9 transition-colors",
              isFieldFocused('message') && "!text-primary",
              hasFieldError('message', errors) && "!text-red-500"
            )}
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            disabled={!canSubmit}
            className={cn(
              "w-full py-3 text-lg font-medium transition-all duration-200",
              canSubmit
                ? "bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            )}
          >
            {formState.isSubmitting ? (
              <span className="flex items-center justify-center">
                <Icon
                  icon={faSpinner}
                  size="sm"
                  color="neutral"
                  className="animate-spin mr-2 !text-current"
                />
                Sending Message...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <Icon icon={faEnvelope} size="sm" color="neutral" className="mr-2 !text-current" />
                Send Message
              </span>
            )}
          </Button>

          {hasErrors && (
            <p className="text-sm text-red-600 mt-2 text-center">
              Please fix the errors above before submitting.
            </p>
          )}

          {!canSubmit && !hasErrors && !formState.isSubmitting && (
            <p className="text-sm text-gray-500 mt-2 text-center">
              Please fill out all required fields to submit.
            </p>
          )}
        </div>

        {/* Reset Button (only show when form has data) */}
        {(Object.keys(touchedFields).length > 0 || formState.isError) && (
          <div className="pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={resetForm}
              disabled={formState.isSubmitting}
              className="w-full text-gray-600 border-gray-300 hover:bg-gray-50"
            >
              Reset Form
            </Button>
          </div>
        )}
      </form>

      {/* Privacy Notice */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          By submitting this form, you agree to our{' '}
          <a
            href="/privacy"
            className="text-primary hover:text-primary-dark underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          {' '}and{' '}
          <a
            href="/terms"
            className="text-primary hover:text-primary-dark underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export default ContactForm
