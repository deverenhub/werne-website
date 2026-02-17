import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Icon } from '@/components/ui'
import {
  faWrench,
  faBullseye,
  faCheck,
  faCircle,
  faGraduationCap,
  faBrain,
  faHandshake,
  faHardHat,
  faRobot,
  faBook
} from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'Manufacturing Solutions - AI Training & Consulting | Werne Enterprises',
  description: 'AI education, consulting, and custom development for manufacturers. 8+ MEP partnerships. Creator of TSVMap Methodology. 2 hours free AI consulting.',
}

const ManufacturingPage = () => {
  const solutions = [
    {
      title: 'AI Training for Manufacturing',
      description: 'Comprehensive AI education programs developed through MEP partnerships to build your team\'s AI capabilities.',
      icon: faGraduationCap,
      color: 'primary',
      benefits: [
        'Purdue MEP AI Series curriculum',
        'AI the Spreadsheet Killer training',
        '12 Week AI Bootcamp',
        'Custom corporate training'
      ],
      features: [
        'Hands-on AI exercises',
        'Manufacturing-specific use cases',
        'Implementation planning',
        'Change management support',
        'Team capability building',
        'Ongoing support'
      ],
      highlight: '8+ MEP partnerships including Purdue MEP, SCMEP, Georgia MEP, and more'
    },
    {
      title: 'Tribal Knowledge Capture',
      description: 'Preserve your experienced workers\' knowledge with SmartHive.online before they retire.',
      icon: faBrain,
      color: 'secondary',
      benefits: [
        'Capture expertise from retiring workers',
        'Create AI personas of your experts',
        '24/7 access to institutional knowledge',
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
      icon: faBullseye,
      color: 'accent',
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
      highlight: '30+ successful implementations with zero failures'
    },
    {
      title: 'AI Readiness Assessment',
      description: 'Evaluate your manufacturing operation\'s preparedness for AI adoption.',
      icon: faWrench,
      color: 'warning',
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
        'Implementation roadmap',
        'ROI projections'
      ],
      highlight: 'Start with 2 hours free AI consulting'
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
      <section className="relative bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-20 lg:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/industries/manufacturing.jpg"
            alt="Manufacturing facility"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" size="lg" className="mb-6">
              8+ MEP Partnerships | TSVMap Methodology
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              AI Solutions for{' '}
              <span className="text-primary">Manufacturing</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              AI education, custom development, and consulting for manufacturers.
              Capture tribal knowledge, optimize processes, and build your team&apos;s AI capabilities.
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
                <div className="text-3xl font-bold text-primary mb-2">8+</div>
                <div className="text-gray-300">MEP Partnerships</div>
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

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Manufacturing AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI services designed for manufacturers with
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
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-secondary mb-3">Key Benefits</h4>
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

                    <div className="bg-primary/10 p-4 rounded-lg">
                      <div className="text-sm font-medium text-primary mb-1">Highlight</div>
                      <div className="text-sm text-gray-700">{solution.highlight}</div>
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

      {/* MEP Partners */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              MEP Network Partner
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted partner of Manufacturing Extension Partnership organizations
              across the country, delivering AI training and consulting to manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mepPartners.map((partner, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <Icon icon={faHandshake} size="2xl" color="primary" className="mb-3" />
                  <p className="font-semibold text-secondary">{partner}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* AI Applications */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              AI Applications for Manufacturing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                  <ul className="space-y-2">
                    {application.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start">
                        <div className="mr-2 mt-1">
                          <Icon icon={faCircle} size="lg" color="primary" />
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
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" size="lg" className="mb-6">
              Featured Solution
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Capture Tribal Knowledge with SmartHive
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              Your most experienced workers hold decades of invaluable knowledge.
              SmartHive.online captures that expertise and transforms it into AI personas
              that are always available to train new employees and answer questions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon icon={faHardHat} size="4xl" color="primary" className="mb-3" />
                  <h3 className="font-semibold text-secondary mb-2">Interview Experts</h3>
                  <p className="text-gray-600 text-sm">Capture knowledge from your most experienced workers</p>
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
                  <p className="text-gray-600 text-sm">Institutional knowledge that never retires</p>
                </CardContent>
              </Card>
            </div>

            <Button size="xl" asChild>
              <a href="https://smarthive.online" target="_blank" rel="noopener noreferrer">
                Learn More About SmartHive
              </a>
            </Button>
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
              9 years of consulting experience with manufacturers.
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
              No commitment required. Let&apos;s discuss your manufacturing AI goals
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

export default ManufacturingPage
