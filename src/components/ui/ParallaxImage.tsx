'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

interface ParallaxImageProps {
  src: string
  alt: string
  priority?: boolean
  /** Parallax strength; ~0.12 is subtle. 0 disables. */
  strength?: number
}

/**
 * Full-bleed background image with a subtle scroll parallax.
 * Renders an oversized wrapper so the translate never reveals edges, and
 * fully disables the effect for users who prefer reduced motion.
 */
export function ParallaxImage({ src, alt, priority = false, strength = 0.12 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    const update = () => {
      const rect = el.parentElement?.getBoundingClientRect()
      if (!rect) return
      const offset = rect.top + rect.height / 2 - window.innerHeight / 2
      el.style.transform = `translate3d(0, ${(-offset * strength).toFixed(1)}px, 0)`
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [strength])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute left-0 right-0 will-change-transform"
      style={{ top: '-18%', height: '136%' }}
    >
      <Image src={src} alt={alt} fill priority={priority} sizes="100vw" className="object-cover" />
    </div>
  )
}
