import React from 'react'
import Link from 'next/link'
import { Button, Container, Icon } from '@/components/ui'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

/**
 * Premium, on-brand "knowledge → AI core" visual rendered as SVG — crisp at any size,
 * lightweight, and disciplined to the brand palette, with subtle accessible motion.
 * NOTE: swap this panel for a real annotated SmartHive screenshot when one is available.
 */
const MID: [number, number][] = [
  [95, 70], [150, 252], [206, 120], [250, 300], [382, 86], [420, 210], [356, 292], [110, 168],
]
const FAR: [number, number][] = [
  [58, 300], [442, 58], [200, 38], [444, 320], [40, 120], [330, 40], [468, 150], [150, 330],
]

const NetworkVisual = () => (
  <div className="relative rounded-2xl border border-white/10 shadow-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#11304a] to-[#07151f]">
    <div
      aria-hidden="true"
      className="absolute inset-0"
      style={{ background: 'radial-gradient(58% 55% at 62% 50%, rgba(76,175,80,0.20), transparent 70%)' }}
    />
    <svg
      viewBox="0 0 480 360"
      className="relative w-full h-full"
      role="img"
      aria-label="Abstract visualization of team knowledge connecting into a central AI core"
    >
      <defs>
        <radialGradient id="core" cx="42%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#C8E6C9" />
          <stop offset="45%" stopColor="#4CAF50" />
          <stop offset="100%" stopColor="#2E7D32" />
        </radialGradient>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4CAF50" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4CAF50" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="link" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4CAF50" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#4CAF50" stopOpacity="0.65" />
        </linearGradient>
        <pattern id="heroDots" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#ffffff" opacity="0.05" />
        </pattern>
      </defs>

      <rect width="480" height="360" fill="url(#heroDots)" />

      {/* connector lines from each node to the core */}
      <g stroke="url(#link)" strokeWidth="1.25" fill="none">
        {MID.map(([x, y], i) => (
          <line
            key={i}
            className="hero-line"
            x1={x}
            y1={y}
            x2="300"
            y2="180"
            style={{ animationDelay: `${(-i * 0.6).toFixed(1)}s` }}
          />
        ))}
      </g>

      {/* far, faint nodes for depth */}
      <g fill="#4CAF50" opacity="0.22">
        {FAR.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.5" />
        ))}
      </g>

      {/* mid nodes with soft halos */}
      {MID.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="11" fill="url(#coreGlow)" />
          <circle
            className="hero-node"
            cx={x}
            cy={y}
            r="4.5"
            fill="#81C784"
            style={{ animationDelay: `${(-i * 0.4).toFixed(1)}s` }}
          />
        </g>
      ))}

      {/* central AI core */}
      <g>
        <circle className="hero-glow" cx="300" cy="180" r="78" fill="url(#coreGlow)" />
        <circle cx="300" cy="180" r="40" fill="none" stroke="#4CAF50" strokeOpacity="0.22" strokeWidth="1" />
        <circle cx="300" cy="180" r="27" fill="none" stroke="#4CAF50" strokeOpacity="0.45" strokeWidth="1" />
        <circle className="hero-node" cx="300" cy="180" r="15" fill="url(#core)" />
        <circle cx="295" cy="174" r="4" fill="#ffffff" opacity="0.55" />
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-28">
          {/* Left: content */}
          <div className="hero-enter">
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
          <div className="relative hero-enter" style={{ animationDelay: '0.12s' }}>
            <NetworkVisual />
          </div>
        </div>
      </Container>
    </section>
  )
}

export { HeroSection }
