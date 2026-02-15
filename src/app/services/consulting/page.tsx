import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge } from '@/components/ui'

export const metadata: Metadata = {
  title: 'AI Consulting Services - Strategy & Implementation | Werne Enterprises',
  description: 'Strategic AI consulting with 9 years experience and 30+ successful implementations. AI Readiness Assessments and implementation planning. 2 hours free.',
}

const ConsultingPage = () => {
  const consultingServices = [
    {
      title: 'AI Readiness Assessment',
      description: 'Comprehensive evaluation of your organization\'s preparedness for AI adoption.',
      icon: '📋',
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
      icon: '🎯',
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
      icon: '🗺️',
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
      icon: '🔧',
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
      icon: '🏭',
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
      icon: '🏥',
      focus: [
        'HIPAA compliance',
        'EHR optimization',
        'Workflow automation',
        'Patient experience technology',
        'Data analytics strategy',
        'Security requirements'
      ]
    },
    {
      area: 'Commercial Business',
      icon: '🏢',
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

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-20 lg:py-32 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" size="lg" className="mb-6">
              AI Consulting Services
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              AI{' '}
              <span className="text-primary">Consulting</span>{' '}
              Services
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Strategic AI consulting with 9 years of experience and 30+ successful implementations.
              Start with our AI Readiness Assessment to chart your path forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/book-time">Get 2 Hours Free Consulting</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="#services">View Services</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">9</div>
                <div className="text-gray-300">Years Consulting Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">30+</div>
                <div className="text-gray-300">Successful Implementations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-warning mb-2">$50K-$1M</div>
                <div className="text-gray-300">Saved Per Client</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Consulting Services */}
      <section id="services" className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI consulting to help you navigate your AI journey
              with confidence and achieve measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {consultingServices.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{service.icon}</div>
                    <div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <div className="text-primary font-semibold">{service.pricing}</div>
                    </div>
                  </div>
                  <CardDescription className="text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-secondary mb-2">What You Get</h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-start">
                            <span className="text-primary mr-2">✓</span>
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
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              MEP Network Partner
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep understanding of industry-specific challenges and opportunities
              across our three core sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {expertise.map((industry, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="text-4xl mb-4 text-center">{industry.icon}</div>
                  <CardTitle className="text-2xl text-center">{industry.area}</CardTitle>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2">
                    {industry.focus.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
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

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Our consulting engagements deliver measurable business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">30+</div>
              <div className="text-gray-100">Successful Implementations</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">0</div>
              <div className="text-gray-100">Implementation Failures</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">8+</div>
              <div className="text-gray-100">MEP Partnerships</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">$50K-$1M</div>
              <div className="text-gray-100">Saved Per Client</div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start With 2 Hours Free
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              No commitment required. Let&apos;s discuss your AI goals and see how
              our consulting services can help you achieve measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="accent" asChild>
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
