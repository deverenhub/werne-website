import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Icon } from '@/components/ui'
import { faBrain, faWrench, faGraduationCap, faCheck, faClipboardCheck } from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'Services - AI Education, Consulting & Custom Development | Werne Enterprises',
  description: 'AI Education, Custom AI Development, AI Consulting, and AI Training Programs for Manufacturing, Healthcare, and Commercial Business. 2 hours free consulting.',
}

const ServicesPage = () => {
  const services = [
    {
      title: 'AI Education & Training',
      description: 'Comprehensive AI training programs including the Purdue MEP AI Series, AI the Spreadsheet Killer, and 12 Week AI Bootcamp.',
      icon: faGraduationCap,
      color: 'primary',
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
      icon: faBrain,
      color: 'accent',
      features: [
        'SmartHive.online Platform',
        'Tribal Knowledge Capture',
        'AI Persona Development',
        'Custom AI Applications',
        'RAG Implementation',
        'AI Integration Services'
      ],
      pricing: 'Contact for pricing',
      href: '/services/ai-innovation',
      highlight: false
    },
    {
      title: 'AI Consulting',
      description: 'Strategic AI consulting with 9 years of experience and 30+ successful implementations. Zero failures.',
      icon: faWrench,
      color: 'secondary',
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
      icon: faClipboardCheck,
      color: 'warning',
      features: [
        'Current State Analysis',
        'Data Readiness Review',
        'Infrastructure Assessment',
        'Skills Gap Analysis',
        'Prioritized Roadmap',
        'ROI Projections'
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
      <section className="bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-20 lg:py-32 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" size="lg" className="mb-6">
              AI Education | Consulting | Custom Development
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              AI Innovation &{' '}
              <span className="text-primary">Services</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              From AI training programs to custom development, we help businesses
              harness the power of artificial intelligence. Start with 2 hours free consulting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/book-time">Get 2 Hours Free Consulting</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Our Service Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI services designed for businesses with 10-600 employees
              and $10M-$500M in revenue.
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
                  <div className="mb-4">
                    <Icon
                      icon={service.icon}
                      size="4xl"
                      color={service.color as 'primary' | 'secondary' | 'accent' | 'warning'}
                    />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {service.description}
                  </CardDescription>
                  <div className="text-2xl font-bold text-primary mt-4">
                    {service.pricing}
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="mr-2 mt-1">
                          <Icon icon={faCheck} size="lg" color="success" />
                        </div>
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
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A practical approach that has delivered 30+ successful implementations
              with zero failures.
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
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              27+ years in technology. 30+ successful implementations. Zero failures.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">30+</div>
              <div className="text-gray-100">Successful Implementations</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">8+</div>
              <div className="text-gray-100">MEP Partnerships</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">$50K-$1M</div>
              <div className="text-gray-100">Saved Per Client</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">0</div>
              <div className="text-gray-100">Implementation Failures</div>
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
              No commitment required. Let&apos;s discuss your AI goals and see if we&apos;re a good fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
