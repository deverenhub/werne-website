import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Icon } from '@/components/ui'
import { faBrain, faWrench, faGraduationCap, faCheck } from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'Services - AI Innovation & Technology Solutions | Werne Enterprises',
  description: 'Comprehensive AI innovation, consulting, and education services for Manufacturing, Healthcare, and Commercial Business. 42+ years of proven technology leadership.',
}

const ServicesPage = () => {
  const services = [
    {
      title: 'AI Innovation Services',
      description: 'Cutting-edge artificial intelligence solutions including RAG implementation, MCP protocols, and custom AI development.',
      icon: faBrain,
      color: 'primary',
      features: [
        'RAG (Retrieval-Augmented Generation) Systems',
        'MCP (Model Context Protocol) Implementation',
        'Custom AI Model Development',
        'AI Strategy & Architecture',
        'Machine Learning Solutions',
        'Computer Vision Systems'
      ],
      pricing: 'Starting at $25,000',
      href: '/services/ai-innovation',
      highlight: true
    },
    {
      title: 'Technology Consulting',
      description: 'Strategic technology consulting to optimize operations, improve efficiency, and drive digital transformation.',
      icon: faWrench,
      color: 'secondary',
      features: [
        'Technology Assessment & Audit',
        'Digital Transformation Strategy',
        'Process Optimization',
        'System Integration',
        'Technology Roadmapping',
        'Change Management'
      ],
      pricing: 'Starting at $5,000',
      href: '/services/consulting',
      highlight: false
    },
    {
      title: 'Education & Workshops',
      description: 'Comprehensive training programs and workshops to build internal AI and technology capabilities.',
      icon: faGraduationCap,
      color: 'accent',
      features: [
        'AI Literacy Training',
        'Technology Leadership Workshops',
        'Custom Training Programs',
        'Certification Courses',
        'Executive Briefings',
        'Hands-on Labs'
      ],
      pricing: 'Starting at $2,500',
      href: '/services/education',
      highlight: false
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current technology landscape, business processes, and identify opportunities for AI integration and optimization.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Our experts create a customized technology roadmap aligned with your business objectives and industry requirements.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the solution with agile methodologies, ensuring minimal disruption to your operations while maximizing value.'
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Continuous monitoring, optimization, and support to ensure your solutions deliver lasting business value.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-20 lg:py-32 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" size="lg" className="mb-6">
              Comprehensive Technology Services
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              AI Innovation & Technology{' '}
              <span className="text-primary">Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              From AI strategy to implementation, we provide end-to-end technology services 
              that transform your business operations and drive measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/contact">Schedule Consultation</Link>
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
              Comprehensive technology services designed to meet your specific industry needs 
              and business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`h-full ${service.highlight ? 'ring-2 ring-primary border-primary' : ''}`}>
                {service.highlight && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-medium rounded-t-xl">
                    Most Popular
                  </div>
                )}
                
                <CardHeader>
                  <div className="mb-4">
                    <Icon 
                      icon={service.icon} 
                      size="4xl" 
                      color={service.color as 'primary' | 'secondary' | 'accent'} 
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
                    <Link href={service.href}>Learn More</Link>
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
              A structured approach that has delivered results for 500+ businesses 
              across manufacturing, healthcare, and commercial sectors.
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
              42+ years of technology leadership delivering measurable business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-gray-100">Businesses Transformed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15</div>
              <div className="text-gray-100">MEP Partnerships</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">$10M+</div>
              <div className="text-gray-100">Funding Facilitated</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-gray-100">Client Satisfaction</div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s discuss how our AI innovation and technology services can drive 
              measurable results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="accent" asChild>
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default ServicesPage