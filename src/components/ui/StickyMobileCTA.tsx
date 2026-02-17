'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'

const PHONE_NUMBER = '864-991-5656'
const PHONE_HREF = 'tel:8649915656'

const StickyMobileCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isNearFooter, setIsNearFooter] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Delay showing the CTA for a smooth entrance after page load
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    // Set up Intersection Observer to detect when footer is near
    const footer = document.querySelector('footer')

    if (footer) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Hide CTA when footer is intersecting (visible in viewport)
            setIsNearFooter(entry.isIntersecting)
          })
        },
        {
          // Start hiding when footer is 100px from entering viewport
          rootMargin: '100px 0px 0px 0px',
          threshold: 0
        }
      )

      observerRef.current.observe(footer)
    }

    return () => {
      clearTimeout(showTimer)
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  // Determine if CTA should be shown
  const shouldShow = isVisible && !isNearFooter

  return (
    <div
      className={cn(
        // Base styles
        'fixed bottom-0 left-0 right-0 z-50',
        // Only visible on mobile (hidden on md breakpoint and up)
        'md:hidden',
        // Background with backdrop blur
        'bg-white/95 backdrop-blur-md',
        // Shadow
        'shadow-[0_-4px_20px_rgba(0,0,0,0.1)]',
        // Border top
        'border-t border-gray-200',
        // Padding with safe area for devices with home indicators
        'px-4 py-3 pb-[max(12px,env(safe-area-inset-bottom))]',
        // Animation
        'transition-transform duration-300 ease-out',
        shouldShow ? 'translate-y-0' : 'translate-y-full'
      )}
      role="complementary"
      aria-label="Mobile call to action"
    >
      <div className="flex items-center gap-3 max-w-lg mx-auto">
        {/* Phone button - secondary action */}
        <a
          href={PHONE_HREF}
          className={cn(
            'flex items-center justify-center gap-2',
            'px-4 py-3 min-h-[48px]',
            'rounded-lg',
            'bg-gray-100 hover:bg-gray-200',
            'text-secondary font-medium',
            'transition-colors duration-200',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
          )}
          aria-label={`Call us at ${PHONE_NUMBER}`}
        >
          <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
          <span className="text-sm whitespace-nowrap">{PHONE_NUMBER}</span>
        </a>

        {/* Book consultation button - primary action */}
        <Button
          asChild
          variant="gradient"
          size="md"
          shimmer
          className="flex-1 min-h-[48px]"
        >
          <Link href="/book-time">
            <FontAwesomeIcon icon={faCalendarCheck} className="w-4 h-4 mr-2" />
            <span>Book Free Consultation</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}

export { StickyMobileCTA }
