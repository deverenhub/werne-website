'use client'

import React, { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Capture ref value to avoid stale reference in cleanup
    const element = elementRef.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce && element) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin, triggerOnce])

  return { elementRef, isVisible }
}

// Props interface for wrapped components
interface WithScrollAnimationProps {
  className?: string
}

// Higher-order component for scroll animations
export function withScrollAnimation<P extends WithScrollAnimationProps>(
  Component: React.ComponentType<P>,
  animationClass: string = 'animate-slide-up'
): React.FC<P> {
  const WrappedComponent: React.FC<P> = (props) => {
    const { elementRef, isVisible } = useScrollAnimation()

    return (
      <div
        ref={elementRef as React.RefObject<HTMLDivElement>}
        className={`scroll-animate ${isVisible ? 'visible' : ''} ${animationClass}`}
      >
        <Component {...props} className={props.className || ''} />
      </div>
    )
  }

  WrappedComponent.displayName = `WithScrollAnimation(${Component.displayName || (Component as React.FC).name || 'Component'})`

  return WrappedComponent
}