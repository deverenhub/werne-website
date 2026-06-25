import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { ParallaxImage, Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Icon } from '@/components/ui'
import { faCheck, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'Manufacturing Solutions - AI Training & Consulting',
  description: 'AI education, training, and practical AI deployment for manufacturers. Wrote and delivered classes for Purdue MEP. Creator of the TSVMap methodology. 2 hours of free AI consulting.',
}

const ManufacturingPage = () => {
  const solutions = [
    {
      title: 'AI Training for Manufacturing',
      description: 'Practical AI education built from five courses developed for businesses and MEPs, designed to build your team\'s real AI capabilities.',
      benefits: [
        'Classes written and delivered for Purdue MEP',
        'Five courses developed for businesses and MEPs',
        'Manufacturing-specific, hands-on curriculum',
        'Custom corporate training'
      ],
      features: [
        'Hands-on AI exercises',
        'Manufacturing-specific use cases',
        'Implementation planning',
        'Change management support',
        'Team capability building',
        'Direct support from Deveren'
      ],
      highlight: 'Wrote and delivered classes for Purdue MEP, with partnerships across the MEP network'
    },
    {
      title: 'Tribal Knowledge Capture',
      description: 'Preserve your experienced workers\' knowledge with SmartHive.online before they retire.',
      benefits: [
        'Capture expertise from retiring workers',
        'Create AI personas of your experts',
        'Always-available access to institutional knowledge',
        'Accelerate new employee training'
      ],
      features: [
        'Expert interview process',
        'Knowledge documentation',
        'AI persona creation',
        'Integration with existing systems',
        'Continuous learning updates',
        'Secure knowledge storage'
      ],
      highlight: 'SmartHive.online - our tribal knowledge AI platform'
    },
    {
      title: 'TSVMap Methodology',
      description: 'Our proven approach to technology strategy and vendor management developed for manufacturers.',
      benefits: [
        'Technology landscape mapping',
        'Vendor evaluation framework',
        'System integration planning',
        'Cost optimization analysis'
      ],
      features: [
        'Current state assessment',
        'Technology gap analysis',
        'Vendor comparison matrix',
        'Implementation roadmap',
        'Budget planning',
        'Change management plan'
      ],
      highlight: 'Refined over 27+ years architecting hundreds of technology solutions'
    },
    {
      title: 'AI Readiness Assessment',
      description: 'Evaluate your manufacturing operation\'s preparedness for AI adoption.',
      benefits: [
        'Current state analysis',
        'Data readiness evaluation',
        'Infrastructure assessment',
        'Prioritized AI opportunities'
      ],
      features: [
        'Manufacturing process review',
        'Data quality assessment',
        'Technology infrastructure audit',
        'Skills gap analysis',
        'Prioritized implementation roadmap',
        'Clear next steps you can act on'
      ],
      highlight: 'Start with 2 hours of free AI consulting'
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

  const aiApplications = [
    {
      area: 'Process Optimization',
      description: 'AI applications for streamlining manufacturing processes and reducing waste.',
      examples: [
        'Production scheduling optimization',
        'Resource allocation',
        'Bottleneck identification',
        'Workflow automation'
      ]
    },
    {
      area: 'Quality Control',
      description: 'AI-powered quality assurance and defect detection applications.',
      examples: [
        'Automated inspection systems',
        'Defect pattern recognition',
        'Quality prediction',
        'Process parameter optimization'
      ]
    },
    {
      area: 'Maintenance',
      description: 'Predictive and preventive maintenance powered by AI.',
      examples: [
        'Equipment health monitoring',
        'Failure prediction',
        'Maintenance scheduling',
        'Parts inventory optimization'
      ]
    },
    {
      area: 'Supply Chain',
      description: 'AI applications for supply chain optimization and visibility.',
      examples: [
        'Demand forecasting',
        'Inventory optimization',
        'Supplier evaluation',
        'Logistics planning'
      ]
    }
  ]

  const idealClient = {
    employees: '10-600',
    revenue: '$10M-$500M',
    description: 'Mid-sized manufacturers ready to strategically adopt AI'
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary py-16 lg:py-24 text-white overflow-hidden">
        {/* Background Image with duotone scrim */}
        <div className="absolute inset-0 z-0">
          <ParallaxImage src="/images/industries/manufacturing.jpg" alt="Manufacturing facility with industrial automation and robotics systems" priority />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/50"
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-5">
              MEP Network Partner · TSVMap Methodology
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              AI Solutions for{' '}
              <span className="text-primary">Manufacturing</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Practical AI education, training, and deployment for manufacturers &mdash;
              built on 27+ years architecting real systems. Capture tribal knowledge,
              modernize ERP/MRP, and build your team&apos;s AI capabilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" asChild>
                <Link href="/book-time">Get 2 Hours Free</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="#solutions">Explore Solutions</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">27+</div>
                <div className="text-gray-200">Years Building Real Systems</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Hundreds</div>
                <div className="text-gray-200">Of Solutions Architected</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Purdue MEP</div>
                <div className="text-gray-200">Classes Written &amp; Delivered</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              What We Offer
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Manufacturing AI Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Practical AI services designed for manufacturers with
              {idealClient.employees} employees and {idealClient.revenue} in revenue.
              You work directly with Deveren on every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                  <p className="text-lg text-gray-600 mt-2">{solution.description}</p>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-secondary mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-2">
                            <Icon icon={faCheck} size="xs" className="text-[#2E7D32] mt-1 shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-primary/10 p-4 rounded-lg">
                      <div className="text-sm font-medium text-[#2E7D32] mb-1">Highlight</div>
                      <div className="text-sm text-gray-700">{solution.highlight}</div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/book-time">Talk Through This With Deveren</Link>
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
              MEP Network
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              MEP Network Partner
            </h2>
            <p className="text-xl text-gray-600">
              Trusted partner of Manufacturing Extension Partnership organizations
              across the country, delivering AI training and consulting to manufacturers.
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

      {/* AI Applications */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              Where AI Helps
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              AI Applications for Manufacturing
            </h2>
            <p className="text-xl text-gray-600">
              Areas where AI can transform your manufacturing operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiApplications.map((application, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{application.area}</CardTitle>
                  <CardDescription className="text-lg">{application.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="divide-y divide-gray-100 border-t border-gray-100">
                    {application.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="py-2 text-gray-700">
                        {example}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* SmartHive Feature */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              Featured Solution
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Capture Tribal Knowledge with SmartHive
            </h2>

            <p className="text-xl text-gray-600">
              Your most experienced workers hold decades of invaluable knowledge.
              SmartHive.online captures that expertise and transforms it into AI personas
              that are always available to train new employees and answer questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-secondary mb-2">Interview Experts</h3>
                <p className="text-gray-600 text-sm">Capture knowledge from your most experienced workers</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-secondary mb-2">Create AI Personas</h3>
                <p className="text-gray-600 text-sm">Transform expertise into always-available AI assistants</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-secondary mb-2">Preserve Knowledge</h3>
                <p className="text-gray-600 text-sm">Institutional knowledge that never retires</p>
              </CardContent>
            </Card>
          </div>

          <Button size="xl" asChild>
            <a href="https://smarthive.online" target="_blank" rel="noopener noreferrer">
              Explore SmartHive
              <Icon icon={faArrowUpRightFromSquare} className="ml-2" size="xs" />
              <span className="sr-only">(opens in new tab)</span>
            </a>
          </Button>
        </Container>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-secondary text-white">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-4">
              Proven Track Record
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real Experience, Real Systems
            </h2>
            <p className="text-xl text-gray-300">
              27+ years architecting AI, ERP, MRP, and custom solutions for
              manufacturers &mdash; now put to work deploying practical AI that ships.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">27+</div>
              <div className="text-gray-300">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">Hundreds</div>
              <div className="text-gray-300">Of Solutions Architected</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">Purdue MEP</div>
              <div className="text-gray-300">Classes Written &amp; Delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">ITAR/CMMC</div>
              <div className="text-gray-300">Compliance-Aware AI</div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start With 2 Hours of Free AI Consulting
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Bring your toughest bottleneck &mdash; tribal knowledge walking out the door,
              an aging ERP/MRP, or a compliance-sensitive workflow &mdash; and we&apos;ll map
              a practical AI path forward. You talk directly with Deveren, not a sales team.
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

export default ManufacturingPage
