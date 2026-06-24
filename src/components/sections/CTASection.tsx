import React from 'react'
import Link from 'next/link'
import { Button, Container, Icon, Reveal } from '@/components/ui'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const CTASection = () => {
  return (
    <section className="border-t border-white/10 bg-secondary py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-4">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start With 2 Hours Free AI Consulting
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Work directly with an AI Solution Architect who has actually built and deployed
            production AI &mdash; not just advised on it. No commitment required. Let&apos;s map
            what&apos;s practical for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:items-center mb-12">
            <Button size="lg" variant="primary" asChild className="group text-base shadow-md hover:shadow-lg">
              <Link href="/book-time">
                Get 2 Hours Free
                <Icon icon={faArrowRight} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" size="xs" />
              </Link>
            </Button>
            <a
              href="tel:8649915656"
              className="inline-flex items-center text-gray-300 hover:text-white transition-colors font-medium"
            >
              Call 864-991-5656
            </a>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-base text-gray-300 mb-4">
              27+ years building real systems. Hundreds of solutions architected. Production AI built and deployed.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400">
              <span>MEP Partner &amp; Purdue MEP Instructor</span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span>Five Courses for Businesses &amp; MEPs</span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span>AI Readiness Assessment</span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span>Creator of SmartHive.online</span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export { CTASection }
