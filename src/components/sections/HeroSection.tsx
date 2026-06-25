import React from 'react'
import Link from 'next/link'
import { Button, Icon } from '@/components/ui'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { HeroVisual } from './HeroVisual'

const HeroSection = () => {
  return (
    <section
      className="relative isolate overflow-hidden text-white"
      style={{
        background:
          'radial-gradient(120% 120% at 70% 35%, #11304a 0%, #0b2030 55%, #07151f 100%)',
      }}
    >
      {/* Animated knowledge-network → AI core visual (full-bleed) */}
      <HeroVisual />

      {/* Legibility scrims: dark on the left for text, soft fade at the bottom */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#07151f] via-[#07151f]/80 to-transparent lg:via-[#07151f]/55"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07151f] to-transparent"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] w-full max-w-[1400px] items-center px-6 py-20 sm:px-10 lg:px-16 lg:py-28 xl:px-24">
        <div className="hero-enter max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
            AI Solution Architect · 27+ Years
          </p>

          <h1 className="mb-6 font-bold leading-[1.04] tracking-[-0.03em] text-[clamp(2.5rem,5.5vw,4.75rem)]">
            Turn your team&apos;s knowledge into{' '}
            <span className="text-primary">practical AI that ships</span>
          </h1>

          <p className="mb-9 max-w-xl text-lg leading-relaxed text-gray-300 md:text-xl">
            I work directly with your team to capture tribal knowledge, learn AI, and deploy
            what actually ships — drawing on 27+ years building real systems across AI, ERP,
            MRP, and custom development. No hype, no failed pilots.
          </p>

          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button size="lg" variant="primary" asChild>
              <Link href="/book-time">Get 2 Hours Free</Link>
            </Button>
            <Link
              href="#industry-solutions"
              className="group inline-flex items-center gap-2 font-medium text-gray-200 transition-colors hover:text-white"
            >
              View industry solutions
              <Icon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Credibility strip — plain text, no icons */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-sm text-gray-400">
            <span>
              <span className="font-semibold text-white">27+ years</span> building real systems
            </span>
            <span className="hidden text-white/20 sm:inline">|</span>
            <span>
              <span className="font-semibold text-white">Hundreds</span> of solutions architected
            </span>
            <span className="hidden text-white/20 sm:inline">|</span>
            <span>
              <span className="font-semibold text-white">Purdue MEP</span> instructor
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export { HeroSection }
