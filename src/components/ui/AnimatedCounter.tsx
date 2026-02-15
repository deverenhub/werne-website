'use client'

import { useEffect, useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface AnimatedCounterProps {
  value: string
  label: string
  duration?: number
  className?: string
  color?: 'primary' | 'accent' | 'warning' | 'secondary'
}

export function AnimatedCounter({ 
  value, 
  label, 
  duration = 2000, 
  className = '',
  color = 'primary'
}: AnimatedCounterProps) {
  const { elementRef, isVisible } = useScrollAnimation()
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  // Extract numeric value from string
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0
  const prefix = value.match(/^\D+/)?.[0] || ''
  const suffix = value.match(/\D+$/)?.[0] || ''

  const colorClasses = {
    primary: 'text-primary',
    accent: 'text-accent', 
    warning: 'text-warning',
    secondary: 'text-secondary'
  }

  useEffect(() => {
    if (isVisible && !hasAnimated && numericValue > 0) {
      setHasAnimated(true)
      const startTime = Date.now()

      const timer = setInterval(() => {
        const now = Date.now()
        const progress = Math.min((now - startTime) / duration, 1)
        
        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3)
        const currentCount = Math.floor(easeOutCubic * numericValue)
        
        setCount(currentCount)
        
        if (progress >= 1) {
          clearInterval(timer)
          setCount(numericValue)
        }
      }, 16) // ~60fps

      return () => clearInterval(timer)
    }
  }, [isVisible, hasAnimated, numericValue, duration])

  const displayValue = isVisible ? `${prefix}${count}${suffix}` : `${prefix}0${suffix}`

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`group transition-all duration-300 ${className}`}
    >
      <div className={`text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 ${colorClasses[color]}`}>
        {displayValue}
      </div>
      <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
        {label}
      </div>
    </div>
  )
}