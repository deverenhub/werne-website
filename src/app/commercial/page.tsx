import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Icon } from '@/components/ui'
import {
  faChartBar,
  faCogs,
  faGraduationCap,
  faBrain,
  faCheck,
  faCircle,
  faHandshake,
  faLightbulb,
  faUserTie,
  faRobot,
  faBook,
  faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'Commercial Business Solutions - AI Training & Consulting | Werne Enterprises',
  description: 'AI education, consulting, and custom development for commercial businesses. 9 years experience. 2 hours free AI consulting.',
}

const CommercialPage = () => {
  const solutions = [
    {
      title: 'AI Training for Business',
      description: 'Comprehensive AI education programs to build your team\'s capabilities.',
      icon: faGraduationCap,
      color: 'primary',
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
      icon: faBrain,
      color: 'secondary',
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
      icon: faChartBar,
      color: 'accent',
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
      icon: faCogs,
      color: 'warning',
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
      <section className="relative bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-20 lg:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/industries/commercial.jpg"
            alt="Modern commercial office with business professionals collaborating on AI strategy"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="warning" size="lg" className="mb-6">
              Commercial Business AI Solutions
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              AI Solutions for{' '}
              <span className="text-warning">Commercial</span>{' '}
              Business
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              AI education, custom development, and consulting for commercial businesses.
              Capture tribal knowledge, automate processes, and build your team&apos;s AI capabilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/book-time">Get 2 Hours Free</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="#solutions">Explore Solutions</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-warning mb-2">9</div>
                <div className="text-gray-300">Years Consulting Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <div className="text-gray-300">Successful Implementations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">2 Hours</div>
                <div className="text-gray-300">Free Consultation</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Commercial AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI services designed for commercial businesses with
              {idealClient.employees} employees and {idealClient.revenue} in revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <Icon
                        icon={solution.icon}
                        size="4xl"
                        color={solution.color as 'primary' | 'secondary' | 'accent' | 'warning'}
                      />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{solution.title}</CardTitle>
                      <p className="text-lg text-gray-600 mt-2">{solution.description}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-secondary mb-2">Key Benefits</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <div className="mr-2 mt-1">
                              <Icon icon={faCheck} size="lg" color="success" />
                            </div>
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
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              AI Applications for Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                  <ul className="space-y-2">
                    {application.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start">
                        <div className="mr-2 mt-1">
                          <Icon icon={faCircle} size="lg" color="warning" />
                        </div>
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

      {/* SmartHive Feature */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" size="lg" className="mb-6">
              Featured Solution
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Capture Business Knowledge with SmartHive
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              Your experienced team members hold valuable institutional knowledge.
              SmartHive.online captures that expertise and transforms it into AI personas
              that are always available to support operations and train new employees.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon icon={faUserTie} size="4xl" color="primary" className="mb-3" />
                  <h3 className="font-semibold text-secondary mb-2">Interview Experts</h3>
                  <p className="text-gray-600 text-sm">Capture knowledge from your most experienced team members</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Icon icon={faRobot} size="4xl" color="accent" className="mb-3" />
                  <h3 className="font-semibold text-secondary mb-2">Create AI Personas</h3>
                  <p className="text-gray-600 text-sm">Transform expertise into always-available AI assistants</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Icon icon={faBook} size="4xl" color="warning" className="mb-3" />
                  <h3 className="font-semibold text-secondary mb-2">Preserve Knowledge</h3>
                  <p className="text-gray-600 text-sm">Business knowledge that stays with your company</p>
                </CardContent>
              </Card>
            </div>

            <Button size="xl" asChild>
              <a href="https://smarthive.online" target="_blank" rel="noopener noreferrer">
                <Icon icon={faArrowUpRightFromSquare} className="mr-2" size="xs" />
                Learn More About SmartHive
                <span className="sr-only">(opens in new tab)</span>
              </a>
            </Button>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Why Work With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              9 years of consulting experience helping businesses adopt technology strategically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Icon icon={faHandshake} size="3xl" color="primary" className="mb-4" />
                <h3 className="text-xl font-semibold text-secondary mb-3">Experienced Partner</h3>
                <p className="text-gray-600">
                  9 years helping businesses navigate technology decisions with 30+ successful implementations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Icon icon={faLightbulb} size="3xl" color="warning" className="mb-4" />
                <h3 className="text-xl font-semibold text-secondary mb-3">Practical Approach</h3>
                <p className="text-gray-600">
                  Focus on practical AI applications that deliver real business value, not hype.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Icon icon={faBrain} size="3xl" color="accent" className="mb-4" />
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
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven Track Record
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              9 years of consulting experience across manufacturing, healthcare, and commercial businesses.
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
              <div className="text-4xl md:text-5xl font-bold mb-2">9</div>
              <div className="text-gray-100">Years Experience</div>
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
              No commitment required. Let&apos;s discuss your business AI goals
              and see if we&apos;re a good fit.
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
