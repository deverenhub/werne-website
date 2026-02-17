import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Button, Container, Card, CardHeader, CardTitle, CardContent, CardFooter, Badge, Icon } from '@/components/ui'
import { faBrain, faCogs, faLink, faIndustry, faHospital, faBuilding, faBook, faRobot, faBullseye, faCheck, faCheckCircle, faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'Custom AI Development - SmartHive & AI Solutions | Werne Enterprises',
  description: 'Custom AI development including SmartHive.online for tribal knowledge capture. Build AI personas that preserve your team\'s expertise. Contact for pricing.',
}

const AIInnovationPage = () => {
  const aiServices = [
    {
      title: 'SmartHive.online',
      description: 'Our flagship platform that captures employee tribal knowledge and transforms it into AI personas.',
      icon: faBrain,
      features: [
        'Tribal knowledge capture',
        'AI persona creation',
        'Employee expertise preservation',
        'Always-available AI assistants',
        'Custom business knowledge AI',
        'Secure knowledge management'
      ],
      benefits: [
        'Preserve institutional knowledge',
        'Reduce knowledge loss from turnover',
        'Create AI that knows your business',
        'Train new employees faster'
      ],
      use_cases: [
        'Manufacturing process expertise',
        'Customer service knowledge',
        'Technical support automation',
        'Onboarding acceleration'
      ]
    },
    {
      title: 'Custom AI Development',
      description: 'Tailored AI applications designed for your specific business needs and workflows.',
      icon: faCogs,
      features: [
        'Custom AI applications',
        'Business process automation',
        'Integration with existing systems',
        'Scalable architecture',
        'Ongoing optimization',
        'Full ownership of solution'
      ],
      benefits: [
        'Purpose-built for your needs',
        'Competitive advantage',
        'Full control and ownership',
        'Tailored to your industry'
      ],
      use_cases: [
        'Process automation',
        'Decision support systems',
        'Customer interaction AI',
        'Operational intelligence'
      ]
    },
    {
      title: 'AI Integration Services',
      description: 'Connect AI capabilities with your existing business systems and workflows.',
      icon: faLink,
      features: [
        'System integration',
        'API development',
        'Data pipeline setup',
        'Workflow automation',
        'Performance optimization',
        'Security implementation'
      ],
      benefits: [
        'Seamless connectivity',
        'Leverages existing investments',
        'Unified data access',
        'Streamlined operations'
      ],
      use_cases: [
        'ERP integration',
        'CRM enhancement',
        'Document processing',
        'Communication automation'
      ]
    }
  ]

  const industries = [
    {
      name: 'Manufacturing',
      icon: faIndustry,
      applications: [
        'Tribal knowledge preservation from retiring workers',
        'Process optimization AI',
        'Quality control automation',
        'Equipment expertise capture',
        'Safety procedure documentation'
      ]
    },
    {
      name: 'Healthcare',
      icon: faHospital,
      applications: [
        'Clinical expertise preservation',
        'Compliance documentation AI',
        'Patient workflow optimization',
        'Administrative automation',
        'Training content generation'
      ]
    },
    {
      name: 'Commercial Business',
      icon: faBuilding,
      applications: [
        'Sales expertise capture',
        'Customer service AI',
        'Operations knowledge base',
        'Training automation',
        'Process documentation'
      ]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-20 lg:py-32 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products/smarthive-dashboard.jpg"
            alt="AI Innovation background"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" size="lg" className="mb-6">
              Custom AI Development
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Custom AI{' '}
              <span className="text-primary">Development</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Build AI solutions that capture your team&apos;s knowledge and automate your business processes.
              Creator of SmartHive.online - the tribal knowledge AI platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/book-time">Discuss Your AI Project</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <a href="https://smarthive.online" target="_blank" rel="noopener noreferrer">
                  Visit SmartHive.online
                </a>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">SmartHive</div>
                <div className="text-gray-300">Tribal Knowledge AI Platform</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">30+</div>
                <div className="text-gray-300">Successful Implementations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-warning mb-2">45+</div>
                <div className="text-gray-300">Developer Team Access</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* AI Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              AI Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From SmartHive.online to custom AI applications, we build AI solutions
              that solve real business problems.
            </p>
          </div>

          <div className="space-y-12">
            {aiServices.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <Icon icon={service.icon} size="4xl" color="primary" className="mr-4" />
                      <div>
                        <h3 className="text-3xl font-bold text-secondary">{service.title}</h3>
                        <p className="text-lg text-gray-600 mt-2">{service.description}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-secondary mb-3">Key Features</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <Icon icon={faCheck} size="lg" color="success" className="mr-2" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-secondary mb-3">Business Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start">
                              <Icon icon={faStar} size="sm" color="accent" className="mr-2" />
                              <span className="text-gray-700 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-secondary mb-3">Use Cases</h4>
                        <ul className="space-y-2">
                          {service.use_cases.map((useCase, useCaseIndex) => (
                            <li key={useCaseIndex} className="flex items-start">
                              <Icon icon={faArrowRight} size="sm" color="primary" className="mr-2" />
                              <span className="text-gray-700 text-sm">{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom AI solutions tailored for your industry&apos;s unique challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Icon icon={industry.icon} size="4xl" color="primary" className="mb-4" />
                  <CardTitle className="text-2xl">{industry.name}</CardTitle>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 text-left">
                    {industry.applications.map((application, appIndex) => (
                      <li key={appIndex} className="flex items-start">
                        <Icon icon={faCheckCircle} size="sm" color="primary" className="mr-2" />
                        <span className="text-gray-700">{application}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button asChild className="w-full" variant="outline">
                    <Link href={`/${industry.name.toLowerCase()}`}>
                      Explore {industry.name} Solutions
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* SmartHive Featured */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" size="lg" className="mb-6">
              Featured Product
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              SmartHive.online
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              Capture your team&apos;s tribal knowledge before it walks out the door.
              SmartHive transforms employee expertise into AI personas that are always available
              to answer questions, train new hires, and preserve institutional knowledge.
            </p>

            {/* SmartHive Dashboard Image */}
            <div className="relative h-64 md:h-80 w-full mb-8 rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="/images/products/smarthive-dashboard.jpg"
                alt="SmartHive Dashboard"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon icon={faBook} size="4xl" color="primary" className="mb-3" />
                  <h3 className="font-semibold text-secondary mb-2">Capture Knowledge</h3>
                  <p className="text-gray-600 text-sm">Interview experts and document their institutional knowledge</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Icon icon={faRobot} size="4xl" color="primary" className="mb-3" />
                  <h3 className="font-semibold text-secondary mb-2">Create AI Personas</h3>
                  <p className="text-gray-600 text-sm">Transform knowledge into AI assistants that think like your experts</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Icon icon={faBullseye} size="4xl" color="primary" className="mb-3" />
                  <h3 className="font-semibold text-secondary mb-2">Deploy & Use</h3>
                  <p className="text-gray-600 text-sm">24/7 access to your organization&apos;s collective expertise</p>
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

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Custom AI?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Start with 2 hours free consulting to discuss your AI development needs.
              All pricing provided after understanding your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="primary" asChild>
                <Link href="/book-time">Book Free Consultation</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default AIInnovationPage
