import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { ParallaxImage, Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Healthcare Solutions - AI Training & Consulting',
  description: 'AI education, consulting, and custom development for healthcare organizations. Compliance-aware solutions. 2 hours free AI consulting.',
}

const HealthcarePage = () => {
  const solutions = [
    {
      title: 'AI Training for Healthcare',
      description: 'Compliance-aware AI education programs designed for healthcare teams.',
      benefits: [
        'Healthcare-specific AI curriculum',
        'HIPAA compliance awareness',
        'Practical implementation training',
        'Team capability building'
      ],
      features: [
        'AI fundamentals for healthcare',
        'Compliance considerations',
        'Workflow automation concepts',
        'Data privacy requirements',
        'Change management',
        'Hands-on exercises'
      ]
    },
    {
      title: 'Custom AI Development',
      description: 'Build healthcare AI solutions with SmartHive.online and custom development.',
      benefits: [
        'Tribal knowledge capture',
        'Custom workflow automation',
        'AI-assisted documentation',
        'Knowledge preservation'
      ],
      features: [
        'SmartHive.online platform',
        'Compliance-aware design',
        'Secure data handling',
        'Integration planning',
        'Training support',
        'Ongoing optimization'
      ]
    },
    {
      title: 'Workflow Optimization',
      description: 'AI consulting for optimizing healthcare workflows and operations.',
      benefits: [
        'Process efficiency analysis',
        'Automation opportunities',
        'Staff workload optimization',
        'Patient experience improvement'
      ],
      features: [
        'Current state assessment',
        'Bottleneck identification',
        'AI opportunity mapping',
        'Implementation roadmap',
        'Change management support',
        'Results measurement'
      ]
    },
    {
      title: 'Compliance-Aware AI',
      description: 'AI solutions designed with regulated healthcare and medical-device compliance in mind.',
      benefits: [
        'Title 21 CFR Part 11 awareness',
        'Medical-device DHR support',
        'HIPAA awareness',
        'ITAR, CMMC & CUI experience'
      ],
      features: [
        'Compliance assessment',
        'Device History Record (DHR) support',
        'Electronic records & signatures (Part 11)',
        'Access control planning',
        'Documentation support',
        'Training programs'
      ]
    }
  ]

  const aiApplications = [
    {
      area: 'Administrative Automation',
      description: 'AI applications for reducing administrative burden.',
      examples: [
        'Scheduling optimization',
        'Document processing',
        'Billing workflow automation',
        'Communication automation'
      ]
    },
    {
      area: 'Knowledge Management',
      description: 'Capture and preserve institutional healthcare knowledge.',
      examples: [
        'Clinical expertise preservation',
        'Training content creation',
        'Protocol documentation',
        'Best practice capture'
      ]
    },
    {
      area: 'Operational Efficiency',
      description: 'AI for improving healthcare operations.',
      examples: [
        'Resource allocation',
        'Staff scheduling',
        'Capacity planning',
        'Workflow optimization'
      ]
    },
    {
      area: 'Patient Experience',
      description: 'AI applications for improving patient interactions.',
      examples: [
        'Communication automation',
        'Appointment management',
        'Follow-up reminders',
        'Information access'
      ]
    }
  ]

  const compliance = [
    {
      area: 'Title 21 CFR Part 11 & DHRs',
      description: 'Real experience with medical-device records and electronic records & signatures',
      considerations: [
        'Device History Record (DHR) workflows',
        'Electronic records & signatures (Part 11)',
        'Audit trail capabilities',
        'Traceability and documentation'
      ]
    },
    {
      area: 'ITAR, CMMC & CUI',
      description: 'Experience helping regulated manufacturers adopt AI without breaking compliance',
      considerations: [
        'Controlled Unclassified Information (CUI) handling',
        'Access control requirements',
        'Secure data storage and logging',
        'Documentation and traceability'
      ]
    },
    {
      area: 'HIPAA Awareness',
      description: 'Solutions designed with patient privacy and HIPAA requirements in mind',
      considerations: [
        'Protected health information handling',
        'Minimum necessary access',
        'De-identification considerations',
        'Data encryption standards'
      ]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary py-16 lg:py-24 text-white overflow-hidden">
        {/* Background image with duotone scrim */}
        <div className="absolute inset-0 z-0">
          <ParallaxImage src="/images/industries/healthcare.jpg" alt="Healthcare professional using AI-powered medical technology for patient care" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/50" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-5">
              Healthcare AI Solutions · Compliance-Aware
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6">
              AI Solutions for{' '}
              <span className="text-primary">Healthcare</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              AI education, custom development, and consulting for healthcare and
              medical-device organizations. I help regulated manufacturers adopt AI
              without breaking compliance &mdash; with real experience spanning
              Title 21 CFR Part 11, medical-device Device History Records (DHRs),
              ITAR, CMMC, and CUI.
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
                <div className="text-3xl font-bold text-white mb-2">27+ Years</div>
                <div className="text-gray-300">Real Systems &amp; Compliance Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">CFR Part 11</div>
                <div className="text-gray-300">Title 21 &amp; DHR Expertise</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">2 Hours</div>
                <div className="text-gray-300">Free AI Consulting</div>
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
              What I Offer
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Healthcare AI Solutions
            </h2>
            <p className="text-xl text-gray-600">
              AI education, consulting, and custom development designed for
              healthcare organizations with compliance awareness.
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
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-secondary mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2E7D32]" aria-hidden="true" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/book-time">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* AI Applications */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              Where AI Helps
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              AI Applications for Healthcare
            </h2>
            <p className="text-xl text-gray-600">
              Areas where AI can improve healthcare operations and patient experience.
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
                  <ul className="space-y-2">
                    {application.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2E7D32]" aria-hidden="true" />
                        <span className="text-gray-700">{example}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              Built for Regulated Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Compliance-Aware Approach
            </h2>
            <p className="text-xl text-gray-600">
              Grounded in real engagements with regulated manufacturers &mdash; spanning
              Title 21 CFR Part 11, medical-device DHRs, ITAR, CMMC, and CUI &mdash;
              every solution is designed with compliance requirements in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {compliance.map((item, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{item.area}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2">
                    {item.considerations.map((consideration, considerationIndex) => (
                      <li key={considerationIndex} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2E7D32]" aria-hidden="true" />
                        <span className="text-gray-700 text-sm">{consideration}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary text-white py-16">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-4">
              Why It Works
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Healthcare Teams Work With Me
            </h2>
            <p className="text-xl text-gray-300">
              A practical AI partner who has actually built the systems &mdash; and
              navigated the compliance that regulated healthcare and medical-device
              manufacturers live with every day.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">27+ Years</div>
              <div className="text-gray-300">Systems &amp; Compliance Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">CFR Part 11</div>
              <div className="text-gray-300">Title 21 &amp; DHR Expertise</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">Solo</div>
              <div className="text-gray-300">You Work Directly With Deveren</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2 Hours</div>
              <div className="text-gray-300">Free AI Consulting</div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white border-t border-white/10">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-4">
              Get Started
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start With 2 Hours Free
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              No commitment required. Let&apos;s discuss your healthcare AI goals
              and explore compliance-aware solutions together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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

export default HealthcarePage
