import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Icon } from '@/components/ui'
import {
  faCheck,
  faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'Commercial Business Solutions - AI Training & Consulting',
  description: 'Practical AI education, training, and deployment for commercial businesses. 27+ years building real systems. 2 hours of free AI consulting.',
}

const CommercialPage = () => {
  const solutions = [
    {
      title: 'AI Training for Business',
      description: 'Practical AI education drawn from five courses developed for businesses and MEPs, built to grow your team\'s real capabilities.',
      benefits: [
        'Business-specific AI curriculum',
        'Practical implementation training',
        'Team capability building',
        'Change management support'
      ],
      features: [
        'AI fundamentals for business',
        'Process automation concepts',
        'Data analytics applications',
        'Tool selection guidance',
        'Implementation planning',
        'Hands-on exercises'
      ]
    },
    {
      title: 'Custom AI Development',
      description: 'Build AI solutions with SmartHive.online and custom development for your business needs.',
      benefits: [
        'Tribal knowledge capture',
        'Custom workflow automation',
        'AI-assisted operations',
        'Knowledge preservation'
      ],
      features: [
        'SmartHive.online platform',
        'Business-specific AI personas',
        'Process automation',
        'Integration planning',
        'Training support',
        'Ongoing optimization'
      ]
    },
    {
      title: 'Business Intelligence',
      description: 'AI consulting for data-driven decision making and business analytics.',
      benefits: [
        'Data strategy development',
        'Analytics implementation',
        'Reporting automation',
        'Decision support systems'
      ],
      features: [
        'Current state assessment',
        'Data readiness evaluation',
        'Analytics tool selection',
        'Dashboard development',
        'Process integration',
        'Team training'
      ]
    },
    {
      title: 'Process Automation',
      description: 'AI consulting for streamlining operations and reducing manual work.',
      benefits: [
        'Workflow optimization',
        'Manual task reduction',
        'Operational efficiency',
        'Cost optimization'
      ],
      features: [
        'Process analysis',
        'Automation opportunities',
        'Tool recommendations',
        'Implementation roadmap',
        'Change management',
        'Results measurement'
      ]
    }
  ]

  const aiApplications = [
    {
      area: 'Customer Experience',
      description: 'AI applications for improving customer interactions and service.',
      examples: [
        'Customer service automation',
        'Communication personalization',
        'Response optimization',
        'Feedback analysis'
      ]
    },
    {
      area: 'Operations & Efficiency',
      description: 'AI for streamlining business operations and workflows.',
      examples: [
        'Process automation',
        'Document processing',
        'Scheduling optimization',
        'Resource allocation'
      ]
    },
    {
      area: 'Sales & Marketing',
      description: 'AI applications for sales enablement and marketing automation.',
      examples: [
        'Lead qualification',
        'Content generation',
        'Campaign optimization',
        'Customer insights'
      ]
    },
    {
      area: 'Knowledge Management',
      description: 'Capture and preserve business knowledge with AI.',
      examples: [
        'Expertise preservation',
        'Training content creation',
        'Documentation automation',
        'Best practice capture'
      ]
    }
  ]

  const idealClient = {
    employees: '10-600',
    revenue: '$10M-$500M',
    description: 'Mid-sized businesses ready to strategically adopt AI'
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary py-20 lg:py-32 text-white overflow-hidden">
        {/* Background image with duotone scrim */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/industries/commercial.jpg"
            alt="Modern commercial office with business professionals collaborating on AI strategy"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-5">
              Commercial Business AI Solutions
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              AI Solutions for{' '}
              <span className="text-primary">Commercial</span>{' '}
              Business
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Practical AI for operations, customer service, and the back office &mdash;
              built on 27+ years of real systems experience. Capture institutional knowledge,
              automate the busywork, and build your team&apos;s AI capabilities.
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
                <div className="text-3xl font-bold text-white mb-2">27+</div>
                <div className="text-gray-300">Years Building Real Systems</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">Hundreds</div>
                <div className="text-gray-300">Of Solutions Architected</div>
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
      <section id="solutions" className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              Commercial AI Solutions
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Practical AI, Built Around Your Operation
            </h2>
            <p className="text-xl text-gray-600">
              Practical AI services designed for commercial businesses with
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
                  <h4 className="font-semibold text-secondary mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <Icon icon={faCheck} size="xs" className="mr-2 mt-1 shrink-0 text-[#2E7D32]" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
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

      {/* AI Applications */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              AI Applications
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              AI Applications for Business
            </h2>
            <p className="text-xl text-gray-600">
              Areas where AI can improve your business operations and customer experience.
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
                      <li key={exampleIndex} className="py-2.5 text-gray-700">
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
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              Featured Solution
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Capture Business Knowledge with SmartHive
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              Your experienced team members hold valuable institutional knowledge.
              SmartHive.online captures that expertise and transforms it into AI personas
              that are always available to support operations and train new employees.
            </p>

            <Button size="xl" asChild>
              <a href="https://smarthive.online" target="_blank" rel="noopener noreferrer">
                Explore SmartHive
                <Icon icon={faArrowUpRightFromSquare} className="ml-2" size="xs" />
                <span className="sr-only">(opens in new tab)</span>
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-secondary mb-2">Interview Experts</h3>
                <p className="text-gray-600 text-sm">Capture knowledge from your most experienced team members</p>
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
                <p className="text-gray-600 text-sm">Business knowledge that stays with your company</p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              The Difference
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Why Work With Us
            </h2>
            <p className="text-xl text-gray-600">
              27+ years of real systems experience helping businesses adopt technology strategically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-secondary mb-3">Experienced Partner</h3>
                <p className="text-gray-600">
                  27+ years architecting hundreds of solutions across AI, ERP, MRP, and custom development &mdash; you work directly with Deveren.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-secondary mb-3">Practical Approach</h3>
                <p className="text-gray-600">
                  Focus on practical AI applications that deliver real business value, not hype.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-secondary mb-3">Custom Solutions</h3>
                <p className="text-gray-600">
                  AI solutions tailored to your specific business needs with SmartHive.online and custom development.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-secondary text-white">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-4">
              Track Record
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real Experience, Real Systems
            </h2>
            <p className="text-xl text-gray-300">
              27+ years building real systems across manufacturing, healthcare, and commercial businesses.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">27+</div>
              <div className="text-gray-300">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">Hundreds</div>
              <div className="text-gray-300">Of Solutions Architected</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">Five</div>
              <div className="text-gray-300">Courses for Businesses &amp; MEPs</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">Production</div>
              <div className="text-gray-300">AI Solutions Deployed</div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start With 2 Hours of Free AI Consulting
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Pick one process that eats your team&apos;s time &mdash; customer service,
              reporting, document handling &mdash; and we&apos;ll sketch a practical AI
              fix you can actually ship. Straight talk with Deveren, no sales pitch.
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

export default CommercialPage
