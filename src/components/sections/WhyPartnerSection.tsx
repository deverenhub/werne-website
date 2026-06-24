import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button, Container, Icon, Reveal } from '@/components/ui'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const WhyPartnerSection = () => {
  const advantages = [
    {
      title: 'AI Education Expert',
      description: 'Wrote and delivered classes for Purdue MEP, plus five courses for businesses and MEPs'
    },
    {
      title: 'Custom AI Development',
      description: 'Creator of SmartHive.online - captures tribal knowledge as AI personas'
    },
    {
      title: 'Proven Methodologies',
      description: 'TSVMap Methodology and a hands-on AI Readiness Assessment built from real engagements'
    },
    {
      title: 'Work Directly With Deveren',
      description: 'A solo practice - you work directly with the architect, not a hand-off to a junior team'
    },
    {
      title: '27+ Years of Experience',
      description: 'Hundreds of solutions architected across AI, ERP, MRP, and custom development'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <Container>
        <Reveal className="max-w-3xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
            Why Partner With Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Why Partner With Werne Enterprises
          </h2>
          <p className="text-xl text-gray-600">
            Deveren brings 27+ years of real systems and IT experience, having architected hundreds
            of solutions across AI, ERP, MRP, and custom development. Today that experience goes into
            educating, training, and deploying practical AI for Manufacturing, Healthcare, and
            Commercial Business - and you work directly with him on every engagement.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 mb-12 max-w-5xl">
          {advantages.map((advantage, index) => (
            <Reveal key={index} delay={(index % 3) * 80}>
              <div className="group rounded-xl -mx-3 px-3 py-2 transition-transform duration-200 hover:-translate-y-0.5">
                <p className="text-sm font-semibold text-[#2E7D32] mb-2 tabular-nums transition-transform duration-200 group-hover:-translate-y-0.5">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="text-lg font-semibold text-secondary mb-2">{advantage.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="group relative w-40 h-40 flex-shrink-0 overflow-hidden rounded-2xl">
              <Image
                src="/images/team/deveren-werne.jpg"
                alt="Deveren Werne, AI consultant and founder of Werne Enterprises"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="160px"
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Start With 2 Hours Free AI Consulting
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl">
                Whether you&apos;re in Manufacturing, Healthcare, or Commercial Business,
                discover how AI can transform your operations with no upfront commitment.
              </p>
              <Button size="lg" asChild>
                <Link href="/book-time" className="group">
                  Book Free Consultation
                  <Icon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export { WhyPartnerSection }
