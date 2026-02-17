import React from 'react'
import Link from 'next/link'
import { Button, Container, Badge, AnimatedCounter, Icon } from '@/components/ui'
import {
  faAward,
  faRocket,
  faArrowRight,
  faBuilding,
  faDollarSign,
  faHandshake
} from '@fortawesome/free-solid-svg-icons'

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-20 lg:py-32 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '-1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-warning rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="accent" size="lg" className="mb-6 animate-fade-in hover:animate-bounce-gentle">
            <Icon icon={faAward} className="mr-2" />
            27+ Years in Technology | 2 Hours Free AI Consulting
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-slide-up">
            Turn Your Team&apos;s Knowledge Into{' '}
            <span className="text-primary hover:animate-pulse-glow transition-all duration-300 cursor-default">AI That Works 24/7</span>
          </h1>

          <p className="text-lg md:text-xl text-primary font-semibold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            AI Education & Consulting for{' '}
            <span className="text-accent">Manufacturing</span>,{' '}
            <span className="text-warning">Healthcare</span> &{' '}
            <span className="text-primary">Commercial Business</span>
          </p>

          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed animate-slide-up-delayed max-w-3xl mx-auto">
            Stop losing critical expertise when employees leave. Avoid expensive failed AI implementations.
            We make AI simple and practical for companies with 10-600 employees, delivering measurable ROI without the complexity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <Button size="xl" shimmer magnetic variant="gradient" className="text-lg px-10 py-5 shadow-2xl hover:shadow-primary/30" asChild>
              <Link href="/book-time">
                <Icon icon={faRocket} className="mr-2" />
                Get 2 Hours Free
              </Link>
            </Button>
            <Link
              href="#industry-solutions"
              className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 text-lg font-medium group"
            >
              View Industry Solutions
              <Icon icon={faArrowRight} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-slide-right">
              <Icon icon={faBuilding} size="2xl" color="primary" className="mb-2" />
              <AnimatedCounter
                value="30+"
                label="Successful Implementations"
                color="primary"
                duration={2500}
              />
            </div>
            <div className="animate-slide-up">
              <Icon icon={faHandshake} size="2xl" color="accent" className="mb-2" />
              <AnimatedCounter
                value="8+"
                label="MEP Partnerships"
                color="accent"
                duration={1500}
              />
            </div>
            <div className="animate-slide-left">
              <Icon icon={faDollarSign} size="2xl" color="warning" className="mb-2" />
              <AnimatedCounter
                value="$50K-$1M"
                label="Saved Per Client"
                color="warning"
                duration={3000}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { HeroSection }
