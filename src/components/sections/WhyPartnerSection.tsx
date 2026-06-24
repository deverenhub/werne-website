import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button, Container, Badge, Icon } from '@/components/ui'
import {
  faBullseye,
  faRocket,
  faCheck,
  faLightbulb,
  faChartBar
} from '@fortawesome/free-solid-svg-icons'

const WhyPartnerSection = () => {
  const advantages = [
    {
      icon: faBullseye,
      title: 'AI Education Expert',
      description: 'Wrote and delivered classes for Purdue MEP, plus five courses for businesses and MEPs',
      color: 'secondary'
    },
    {
      icon: faRocket,
      title: 'Custom AI Development',
      description: 'Creator of SmartHive.online - captures tribal knowledge as AI personas',
      color: 'primary'
    },
    {
      icon: faCheck,
      title: 'Proven Methodologies',
      description: 'TSVMap Methodology and a hands-on AI Readiness Assessment built from real engagements',
      color: 'success'
    },
    {
      icon: faLightbulb,
      title: 'Work Directly With Deveren',
      description: 'A solo practice - you work directly with the architect, not a hand-off to a junior team',
      color: 'warning'
    },
    {
      icon: faChartBar,
      title: '27+ Years of Experience',
      description: 'Hundreds of solutions architected across AI, ERP, MRP, and custom development',
      color: 'accent'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Why Partner With Werne Enterprises
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Deveren brings 27+ years of real systems and IT experience, having architected hundreds
            of solutions across AI, ERP, MRP, and custom development. Today that experience goes into
            educating, training, and deploying practical AI for Manufacturing, Healthcare, and
            Commercial Business - and you work directly with him on every engagement.
          </p>
          <Badge variant="primary" size="lg">
            27+ Years of Real Systems Experience
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <Icon
                  icon={advantage.icon}
                  size="4xl"
                  color={advantage.color as 'primary' | 'secondary' | 'accent' | 'warning' | 'success'}
                />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-3">{advantage.title}</h3>
              <p className="text-gray-600 text-sm">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-40 h-40 flex-shrink-0">
              <Image
                src="/images/team/deveren-werne.jpg"
                alt="Deveren Werne, AI consultant and founder of Werne Enterprises"
                fill
                className="object-cover rounded-full border-4 border-white shadow-lg"
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
                <Link href="/book-time">Book Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { WhyPartnerSection }
