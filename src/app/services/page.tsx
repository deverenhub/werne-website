import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { ParallaxImage, Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Icon } from '@/components/ui'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'Services - AI Education, Consulting & Custom Development',
  description: 'AI Education, Custom AI Development, AI Consulting, and AI Training Programs for Manufacturing, Healthcare, and Commercial Business. 2 hours free consulting.',
}

const ServicesPage = () => {
  const services = [
    {
      title: 'AI Education & Training',
      description: 'Comprehensive AI training programs including the Purdue MEP AI Series, AI the Spreadsheet Killer, and 12 Week AI Bootcamp.',
      features: [
        'Purdue MEP AI Series',
        'AI the Spreadsheet Killer Training',
        '12 Week AI Bootcamp',
        'Custom Corporate AI Training',
        'Executive AI Briefings',
        'Hands-on Workshops'
      ],
      pricing: 'Contact for pricing',
      href: '/services/education',
      highlight: true
    },
    {
      title: 'Custom AI Development',
      description: 'Build custom AI solutions like SmartHive.online that capture tribal knowledge and create AI personas for your business.',
      features: [
        'SmartHive.online Platform',
        'Tribal Knowledge Capture',
        'AI Persona Development',
        'Custom AI Applications',
        'ERP / MRP & Systems Integration',
        'AI Integration Services'
      ],
      pricing: 'Contact for pricing',
      href: '/services/ai-innovation',
      highlight: false
    },
    {
      title: 'AI Consulting',
      description: 'Strategic AI consulting grounded in 27+ years architecting real systems, with practical guidance you can act on.',
      features: [
        'AI Readiness Assessments',
        'AI Strategy Development',
        'Implementation Planning',
        'Vendor Evaluation',
        'Technology Roadmapping',
        'Change Management'
      ],
      pricing: 'Contact for pricing',
      href: '/services/consulting',
      highlight: false
    },
    {
      title: 'AI Readiness Assessments',
      description: 'Evaluate your organization\'s preparedness for AI adoption with our proven assessment methodology.',
      features: [
        'Current State Analysis',
        'Data Readiness Review',
        'Infrastructure Assessment',
        'Skills Gap Analysis',
        'Prioritized Roadmap',
        'Practical Next Steps'
      ],
      pricing: '2 Hours Free',
      href: '/book-time',
      highlight: true
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: '2 Hours Free Consulting',
      description: 'Start with a no-commitment consultation to understand your AI goals and assess your readiness.'
    },
    {
      step: '02',
      title: 'AI Readiness Assessment',
      description: 'Comprehensive evaluation of your data, infrastructure, and team readiness for AI adoption.'
    },
    {
      step: '03',
      title: 'Strategy & Roadmap',
      description: 'Develop a practical AI implementation roadmap aligned with your business objectives.'
    },
    {
      step: '04',
      title: 'Implementation & Training',
      description: 'Execute the plan with hands-on support and comprehensive team training.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage src="/images/products/smarthive-dashboard.jpg" alt="SmartHive AI dashboard built by Werne Enterprises" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/50" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl py-16 lg:py-28">
            <Badge variant="primary" size="lg" className="mb-6">
              AI Education | Consulting | Custom Development
            </Badge>

            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-5">
              AI Innovation &amp; Services
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.08]">
              AI Innovation &{' '}
              <span className="text-primary">Services</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              From AI training programs to custom development, we help businesses
              harness the power of artificial intelligence. Start with 2 hours free consulting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" asChild>
                <Link href="/book-time">Get 2 Hours Free</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              Service Offerings
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Our Service Offerings
            </h2>
            <p className="text-xl text-gray-600">
              Practical AI services for mid-market manufacturers and businesses,
              delivered directly by Deveren.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`h-full ${service.highlight ? 'ring-2 ring-primary border-primary' : ''}`}>
                {service.highlight && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-medium rounded-t-xl">
                    {service.pricing === '2 Hours Free' ? 'Start Here' : 'Popular'}
                  </div>
                )}

                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {service.description}
                  </CardDescription>
                  <div className="text-2xl font-bold text-[#2E7D32] mt-4">
                    {service.pricing}
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Icon icon={faCheck} size="xs" className="mr-2 mt-1 shrink-0 text-[#2E7D32]" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    asChild
                    className="w-full"
                    variant={service.highlight ? 'primary' : 'outline'}
                  >
                    <Link href={service.href}>
                      {service.pricing === '2 Hours Free' ? 'Book Free Consultation' : 'Learn More'}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              Our Process
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600">
              A practical approach refined over 27+ years of architecting and
              deploying real systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-secondary text-white">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-4">
              By the Numbers
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real Experience, Real Systems
            </h2>
            <p className="text-xl text-gray-300">
              27+ years architecting real systems, with production AI solutions and
              workflows built, deployed, and running.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">27+</div>
              <div className="text-gray-300">Years of Systems &amp; IT Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">Hundreds</div>
              <div className="text-gray-300">of Solutions Architected</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5</div>
              <div className="text-gray-300">Courses for Businesses &amp; MEPs</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">Production</div>
              <div className="text-gray-300">AI Solutions &amp; Workflows Deployed</div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="border-t border-white/10 py-16 bg-secondary text-white">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-4">
              Get Started
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start With 2 Hours Free
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              No commitment required. Let&apos;s discuss your AI goals and see if we&apos;re a good fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" variant="primary" asChild>
                <Link href="/book-time">Book Free Consultation</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default ServicesPage
