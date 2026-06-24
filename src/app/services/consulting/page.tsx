import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { ParallaxImage, Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Breadcrumb } from '@/components/ui'

export const metadata: Metadata = {
  title: 'AI Consulting Services - Strategy & Implementation',
  description: 'Practical AI consulting grounded in 27+ years of real systems, ERP, MRP, and AI experience. Start with an AI Readiness Assessment and a clear roadmap. 2 hours free.',
}

const ConsultingPage = () => {
  const consultingServices = [
    {
      title: 'AI Readiness Assessment',
      description: 'Deveren\'s own methodology for evaluating your organization\'s readiness to adopt AI — developed and delivered firsthand.',
      deliverables: [
        'Current state analysis',
        'Data readiness evaluation',
        'Infrastructure assessment',
        'Skills gap analysis',
        'Prioritized AI opportunities',
        'Implementation roadmap'
      ],
      timeline: 'Contact for details',
      pricing: 'Contact for pricing'
    },
    {
      title: 'AI Strategy Development',
      description: 'Create a practical AI strategy aligned with your business objectives.',
      deliverables: [
        'AI opportunity mapping',
        'Technology recommendations',
        'Implementation timeline',
        'Budget planning',
        'Risk assessment',
        'Success metrics'
      ],
      timeline: 'Contact for details',
      pricing: 'Contact for pricing'
    },
    {
      title: 'TSVMap Methodology',
      description: 'Our proven technology strategy and vendor mapping approach developed for manufacturers.',
      deliverables: [
        'Technology landscape mapping',
        'Vendor evaluation',
        'System integration planning',
        'Cost optimization analysis',
        'Implementation prioritization',
        'Change management plan'
      ],
      timeline: 'Contact for details',
      pricing: 'Contact for pricing'
    },
    {
      title: 'Implementation Support',
      description: 'Hands-on guidance during AI implementation and organizational change.',
      deliverables: [
        'Project management support',
        'Technical guidance',
        'Vendor coordination',
        'Change management',
        'Training coordination',
        'Go-live support'
      ],
      timeline: 'Contact for details',
      pricing: 'Contact for pricing'
    }
  ]

  const mepPartners = [
    'SCMEP (South Carolina MEP)',
    'FloridaMakes',
    'Purdue MEP',
    'Georgia MEP',
    'MassMEP',
    'TechSolve',
    'Manufacturers Edge',
    'DVIRC'
  ]

  const expertise = [
    {
      area: 'Manufacturing',
      focus: [
        'Process optimization',
        'ERP system evaluation',
        'Automation planning',
        'Quality systems',
        'Supply chain technology',
        'Compliance requirements'
      ]
    },
    {
      area: 'Healthcare',
      focus: [
        'Compliance-aware AI adoption',
        'Title 21 CFR Part 11 experience',
        'Medical-device DHR systems',
        'Workflow automation',
        'Data privacy requirements',
        'Data analytics strategy'
      ]
    },
    {
      area: 'Commercial Business',
      focus: [
        'CRM optimization',
        'Business intelligence',
        'Process automation',
        'Customer experience',
        'Data strategy',
        'Technology modernization'
      ]
    }
  ]

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Consulting', href: '/services/consulting' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary py-16 lg:py-24 text-white overflow-hidden">
        {/* Background image with duotone scrim */}
        <div className="absolute inset-0 z-0">
          <ParallaxImage src="/images/team/deveren-werne.jpg" alt="Deveren Werne, AI consultant with 27+ years of systems experience" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/50" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-5">
              AI Consulting Services
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6">
              AI{' '}
              <span className="text-primary">Consulting</span>{' '}
              Services
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Practical AI consulting grounded in 27+ years of real systems, ERP, MRP, and AI experience.
              Start with the AI Readiness Assessment to chart your path forward, then work directly with Deveren to ship it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" asChild>
                <Link href="/book-time">Get 2 Hours Free Consulting</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="#services">View Services</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-bold text-white mb-2">27+</div>
                <div className="text-gray-300">Years of Systems &amp; AI Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">Hundreds</div>
                <div className="text-gray-300">Solutions Architected</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">1:1</div>
                <div className="text-gray-300">Work Directly With Deveren</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="bg-gray-100 border-b border-gray-200">
        <Container>
          <Breadcrumb items={breadcrumbItems} />
        </Container>
      </section>

      {/* Consulting Services */}
      <section id="services" className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              What I Offer
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Consulting Services
            </h2>
            <p className="text-xl text-gray-600">
              Practical AI consulting to help you navigate your AI journey with
              confidence &mdash; from assessment to a roadmap you can actually ship.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {consultingServices.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <div className="text-[#2E7D32] font-semibold mt-1">{service.pricing}</div>
                  <CardDescription className="text-lg mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-secondary mb-3">What You Get</h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2E7D32]" aria-hidden="true" />
                            <span className="text-gray-700 text-sm">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/book-time">Discuss This Service</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* MEP Partners */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              Network &amp; Reach
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              MEP Network Partner
            </h2>
            <p className="text-xl text-gray-600">
              Trusted partner of Manufacturing Extension Partnership organizations
              across the country, bringing proven methodologies to manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mepPartners.map((partner, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <p className="font-semibold text-secondary">{partner}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              Where I Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Deep understanding of industry-specific challenges and opportunities
              across our three core sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {expertise.map((industry, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{industry.area}</CardTitle>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2">
                    {industry.focus.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2E7D32]" aria-hidden="true" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button asChild className="w-full" variant="outline">
                    <Link href={`/${industry.area.toLowerCase().replace(' ', '-')}`}>
                      Explore {industry.area} Solutions
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-secondary text-white">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-4">
              Proven Track Record
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built On Real Experience
            </h2>
            <p className="text-xl text-gray-300">
              Roadmaps grounded in 27+ years of architecting real systems &mdash; AI, ERP,
              MRP, and custom development &mdash; not slideware. You work directly with Deveren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">27+</div>
              <div className="text-gray-300">Years of Systems &amp; AI Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">Hundreds</div>
              <div className="text-gray-300">Solutions Architected</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">Production</div>
              <div className="text-gray-300">AI Solutions &amp; Workflows Deployed</div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start With 2 Hours Free
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              No commitment required. Let&apos;s discuss your AI goals and map out
              a practical path forward together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="primary" asChild>
                <Link href="/book-time">Book Free Consultation</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default ConsultingPage
