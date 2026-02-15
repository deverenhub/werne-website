'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  variant?: 'default' | 'filled'
  textareaSize?: 'sm' | 'md' | 'lg'
  resize?: 'none' | 'vertical' | 'horizontal' | 'both'
  showCharacterCount?: boolean
  maxLength?: number
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className, 
    label,
    error,
    helperText,
    variant = 'default',
    textareaSize = 'md',
    resize = 'vertical',
    showCharacterCount = false,
    maxLength,
    id,
    disabled,
    required,
    placeholder,
    rows = 4,
    value,
    onChange,
    ...props 
  }, ref) => {
    const [characterCount, setCharacterCount] = useState(
      typeof value === 'string' ? value.length : 0
    )
    
    const generatedId = React.useId()
    const textareaId = id || generatedId
    
    const baseClasses = 'w-full rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variants = {
      default: 'bg-white border-gray-300 focus:border-primary focus:ring-primary',
      filled: 'bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-primary'
    }
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2.5 text-base',
      lg: 'px-6 py-3 text-lg'
    }
    
    const resizeClasses = {
      none: 'resize-none',
      vertical: 'resize-y',
      horizontal: 'resize-x',
      both: 'resize'
    }
    
    const errorClasses = error 
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50' 
      : variants[variant]

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (showCharacterCount) {
        setCharacterCount(e.target.value.length)
      }
      if (onChange) {
        onChange(e)
      }
    }
    
    return (
      <div className="space-y-1">
        {label && (
          <label 
            htmlFor={textareaId}
            className={cn(
              'block text-sm font-medium text-gray-700',
              required && "after:content-['*'] after:ml-0.5 after:text-red-500",
              disabled && 'text-gray-400'
            )}
          >
            {label}
          </label>
        )}
        
        <textarea
          id={textareaId}
          ref={ref}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          rows={rows}
          maxLength={maxLength}
          value={value}
          onChange={handleChange}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined
          }
          className={cn(
            baseClasses,
            sizes[textareaSize],
            resizeClasses[resize],
            errorClasses,
            className
          )}
          {...props}
        />
        
        <div className="flex justify-between items-start">
          <div className="flex-1">
            {error && (
              <p 
                id={`${textareaId}-error`}
                className="text-sm text-red-600 flex items-center gap-1"
                role="alert"
              >
                <svg 
                  className="w-4 h-4 flex-shrink-0" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
                    clipRule="evenodd" 
                  />
                </svg>
                {error}
              </p>
            )}
            
            {helperText && !error && (
              <p 
                id={`${textareaId}-helper`}
                className="text-sm text-gray-500"
              >
                {helperText}
              </p>
            )}
          </div>
          
          {showCharacterCount && (
            <div className="text-sm text-gray-500 ml-2 flex-shrink-0">
              <span className={cn(
                maxLength && characterCount > maxLength && 'text-red-500'
              )}>
                {characterCount}
              </span>
              {maxLength && (
                <span>/{maxLength}</span>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea, type TextareaProps }