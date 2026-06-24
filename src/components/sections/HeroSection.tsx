import React from 'react'
import Link from 'next/link'
import { Button, Container, Icon } from '@/components/ui'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

/**
 * Abstract, on-brand "knowledge network" visual rendered as SVG — crisp at any size,
 * lightweight, and disciplined to the brand palette.
 * NOTE: swap this panel for a real annotated SmartHive screenshot when one is available.
 */
const NetworkVisual = () => (
  <div className="relative rounded-2xl border border-white/10 bg-[#0A1E2E] shadow-2xl overflow-hidden aspect-[4/3]">
    <svg
      viewBox="0 0 400 300"
      className="w-full h-full"
      role="img"
      aria-label="Abstract visualization of team expertise becoming an AI knowledge network"
    >
      <defs>
        <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4CAF50" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#4CAF50" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g stroke="#2E7D32" strokeWidth="1" opacity="0.55">
        <line x1="60" y1="80" x2="165" y2="135" />
        <line x1="165" y1="135" x2="285" y2="70" />
        <line x1="165" y1="135" x2="250" y2="215" />
        <line x1="250" y1="215" x2="345" y2="160" />
        <line x1="60" y1="80" x2="110" y2="225" />
        <line x1="110" y1="225" x2="250" y2="215" />
        <line x1="285" y1="70" x2="345" y2="160" />
        <line x1="60" y1="80" x2="165" y2="135" />
      </g>
      <g>
        <circle cx="165" cy="135" r="38" fill="url(#heroGlow)" />
        <circle cx="165" cy="135" r="9" fill="#4CAF50" />
        <circle cx="60" cy="80" r="6" fill="#81C784" />
        <circle cx="285" cy="70" r="7" fill="#4CAF50" />
        <circle cx="250" cy="215" r="8" fill="#4CAF50" />
        <circle cx="110" cy="225" r="5" fill="#81C784" />
        <circle cx="345" cy="160" r="6" fill="#81C784" />
      </g>
    </svg>
  </div>
)

const HeroSection = () => {
  return (
    <section className="relative bg-secondary text-white overflow-hidden">
      {/* Faint dot grid (replaces the blurred color blobs) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 lg:py-28">
          {/* Left: content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-5">
              AI Solution Architect · 27+ Years
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6">
              Turn your team&apos;s knowledge into{' '}
              <span className="text-primary">practical AI that ships</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
              I work directly with your team to capture tribal knowledge, learn AI, and deploy
              what actually ships — drawing on 27+ years building real systems across AI, ERP,
              MRP, and custom development. No hype, no failed pilots.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center mb-10">
              <Button size="lg" variant="primary" asChild>
                <Link href="/book-time">Get 2 Hours Free</Link>
              </Button>
              <Link
                href="#industry-solutions"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-medium group"
              >
                View industry solutions
                <Icon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Credibility strip — plain text, no icons */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400 border-t border-white/10 pt-6">
              <span>
                <span className="text-white font-semibold">27+ years</span> building real systems
              </span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span>
                <span className="text-white font-semibold">Hundreds</span> of solutions architected
              </span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span>
                <span className="text-white font-semibold">Purdue MEP</span> instructor
              </span>
            </div>
          </div>

          {/* Right: visual */}
          <div className="relative">
            <NetworkVisual />
          </div>
        </div>
      </Container>
    </section>
  )
}

export { HeroSection }
