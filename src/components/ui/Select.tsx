'use client'

import React, { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string
  error?: string
  helperText?: string
  variant?: 'default' | 'filled'
  selectSize?: 'sm' | 'md' | 'lg'
  options: SelectOption[]
  placeholder?: string
  customDropdown?: boolean
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ 
    className, 
    label,
    error,
    helperText,
    variant = 'default',
    selectSize = 'md',
    options,
    placeholder = 'Select an option...',
    customDropdown = true,
    id,
    disabled,
    required,
    value,
    onChange,
    ...props 
  }, ref) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
      options.find(option => option.value === value) || null
    )
    const selectRef = useRef<HTMLDivElement>(null)
    const hiddenSelectRef = useRef<HTMLSelectElement>(null)
    
    const generatedId = React.useId()
    const selectId = id || generatedId
    
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
    
    const errorClasses = error 
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50' 
      : variants[variant]

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
          setIsOpen(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // Handle keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return
      
      switch (e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault()
          setIsOpen(!isOpen)
          break
        case 'Escape':
          setIsOpen(false)
          break
        case 'ArrowDown':
        case 'ArrowUp':
          e.preventDefault()
          if (!isOpen) {
            setIsOpen(true)
          }
          break
      }
    }

    const handleOptionSelect = (option: SelectOption) => {
      if (option.disabled) return
      
      setSelectedOption(option)
      setIsOpen(false)
      
      // Trigger change event on hidden select
      if (hiddenSelectRef.current && onChange) {
        hiddenSelectRef.current.value = option.value
        const event = new Event('change', { bubbles: true })
        Object.defineProperty(event, 'target', {
          writable: false,
          value: hiddenSelectRef.current,
        })
        onChange(event as unknown as React.ChangeEvent<HTMLSelectElement>)
      }
    }

    if (!customDropdown) {
      // Fallback to native select
      return (
        <div className="space-y-1">
          {label && (
            <label 
              htmlFor={selectId}
              className={cn(
                'block text-sm font-medium text-gray-700',
                required && "after:content-['*'] after:ml-0.5 after:text-red-500",
                disabled && 'text-gray-400'
              )}
            >
              {label}
            </label>
          )}
          
          <select
            id={selectId}
            ref={ref}
            disabled={disabled}
            required={required}
            value={value}
            onChange={onChange}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined
            }
            className={cn(
              baseClasses,
              sizes[selectSize],
              errorClasses,
              'appearance-none bg-no-repeat bg-right bg-[length:20px] bg-[url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'m6 8 4 4 4-4\'/%3e%3c/svg%3e")]',
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option 
                key={option.value} 
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          
          {error && (
            <p 
              id={`${selectId}-error`}
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
              id={`${selectId}-helper`}
              className="text-sm text-gray-500"
            >
              {helperText}
            </p>
          )}
        </div>
      )
    }

    // Custom dropdown implementation
    return (
      <div className="space-y-1">
        {label && (
          <label 
            htmlFor={selectId}
            className={cn(
              'block text-sm font-medium text-gray-700',
              required && "after:content-['*'] after:ml-0.5 after:text-red-500",
              disabled && 'text-gray-400'
            )}
          >
            {label}
          </label>
        )}
        
        {/* Hidden native select for form integration */}
        <select
          ref={hiddenSelectRef}
          id={selectId}
          value={selectedOption?.value || ''}
          onChange={() => {}} // Handled by custom dropdown
          required={required}
          disabled={disabled}
          className="sr-only"
          tabIndex={-1}
          aria-hidden="true"
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        {/* Custom dropdown */}
        <div className="relative" ref={selectRef}>
          <button
            type="button"
            onClick={() => !disabled && setIsOpen(!isOpen)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-describedby={
              error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined
            }
            className={cn(
              baseClasses,
              sizes[selectSize],
              errorClasses,
              'flex items-center justify-between text-left',
              disabled ? 'cursor-not-allowed' : 'cursor-pointer',
              className
            )}
          >
            <span className={cn(
              selectedOption ? 'text-gray-900' : 'text-gray-500'
            )}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            
            <svg 
              className={cn(
                'w-5 h-5 text-gray-400 transition-transform duration-200',
                isOpen && 'transform rotate-180'
              )}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Dropdown options */}
          {isOpen && (
            <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
              <ul role="listbox" className="py-1">
                {options.map((option) => (
                  <li key={option.value}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={selectedOption?.value === option.value}
                      disabled={option.disabled}
                      onClick={() => handleOptionSelect(option)}
                      className={cn(
                        'w-full px-4 py-2 text-left text-sm transition-colors duration-150',
                        option.disabled 
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-gray-900 hover:bg-primary hover:text-white cursor-pointer',
                        selectedOption?.value === option.value && 'bg-primary text-white'
                      )}
                    >
                      {option.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {error && (
          <p 
            id={`${selectId}-error`}
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
            id={`${selectId}-helper`}
            className="text-sm text-gray-500"
          >
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

export { Select, type SelectProps, type SelectOption }