import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Icon } from '@/components/ui'
import {
  faClock,
  faShieldAlt,
  faGraduationCap,
  faBrain,
  faCheck,
  faCircle
} from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'Healthcare Solutions - AI Training & Consulting | Werne Enterprises',
  description: 'AI education, consulting, and custom development for healthcare organizations. Compliance-aware solutions. 2 hours free AI consulting.',
}

const HealthcarePage = () => {
  const solutions = [
    {
      title: 'AI Training for Healthcare',
      description: 'Compliance-aware AI education programs designed for healthcare teams.',
      icon: faGraduationCap,
      color: 'primary',
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
      icon: faBrain,
      color: 'secondary',
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
      icon: faClock,
      color: 'accent',
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
      description: 'AI solutions designed with healthcare compliance requirements in mind.',
      icon: faShieldAlt,
      color: 'success',
      benefits: [
        'HIPAA awareness',
        'Data security focus',
        'Audit trail capabilities',
        'Privacy-first design'
      ],
      features: [
        'Compliance assessment',
        'Security requirements',
        'Access control planning',
        'Documentation support',
        'Training programs',
        'Ongoing compliance monitoring'
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
      area: 'HIPAA Compliance',
      description: 'All solutions designed with HIPAA requirements in mind',
      considerations: [
        'Protected health information handling',
        'Access control requirements',
        'Audit trail capabilities',
        'Data encryption standards'
      ]
    },
    {
      area: 'Data Security',
      description: 'Security-first approach to healthcare AI',
      considerations: [
        'Secure data storage',
        'Encrypted communications',
        'Access logging',
        'Breach prevention'
      ]
    },
    {
      area: 'Privacy Protection',
      description: 'Patient privacy at the core of every solution',
      considerations: [
        'Minimum necessary access',
        'De-identification capabilities',
        'Consent management',
        'Privacy impact assessments'
      ]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-20 lg:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/industries/healthcare.jpg"
            alt="Healthcare professional using AI-powered medical technology for patient care"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" size="lg" className="mb-6">
              Healthcare AI Solutions | Compliance-Aware
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              AI Solutions for{' '}
              <span className="text-accent">Healthcare</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              AI education, custom development, and consulting for healthcare organizations.
              Compliance-aware solutions designed with HIPAA requirements in mind.
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
                <div className="text-3xl font-bold text-accent mb-2">Compliance</div>
                <div className="text-gray-300">HIPAA-Aware Design</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <div className="text-gray-300">Successful Implementations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-warning mb-2">2 Hours</div>
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
              Healthcare AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI education, consulting, and custom development designed for
              healthcare organizations with compliance awareness.
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
                        color={solution.color as 'primary' | 'secondary' | 'accent' | 'success'}
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
              AI Applications for Healthcare
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                      <li key={exampleIndex} className="flex items-start">
                        <div className="mr-2 mt-1">
                          <Icon icon={faCircle} size="lg" color="accent" />
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

      {/* Compliance Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Compliance-Aware Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All healthcare AI solutions are designed with compliance requirements in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {compliance.map((item, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <Icon icon={faShieldAlt} size="2xl" color="success" className="mb-3" />
                  <CardTitle className="text-xl">{item.area}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2">
                    {item.considerations.map((consideration, considerationIndex) => (
                      <li key={considerationIndex} className="flex items-start">
                        <div className="mr-2 mt-1">
                          <Icon icon={faCheck} size="lg" color="success" />
                        </div>
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
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Healthcare AI Results
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Delivering compliance-aware AI solutions for healthcare organizations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">30+</div>
              <div className="text-gray-100">Custom Solutions</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-gray-100">Compliance-First</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-gray-100">AI Applications</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2 Hours</div>
              <div className="text-gray-100">Free Consulting</div>
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
              No commitment required. Let&apos;s discuss your healthcare AI goals
              and explore compliance-aware solutions together.
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

export default HealthcarePage
