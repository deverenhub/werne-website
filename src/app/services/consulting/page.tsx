import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Technology Consulting Services - Digital Transformation | Werne Enterprises',
  description: 'Strategic technology consulting for Manufacturing, Healthcare, and Commercial Business. 42+ years of proven leadership in digital transformation and process optimization.',
}

const ConsultingPage = () => {
  const consultingServices = [
    {
      title: 'Technology Assessment & Audit',
      description: 'Comprehensive evaluation of your current technology infrastructure and business processes.',
      icon: '🔍',
      deliverables: [
        'Current state assessment report',
        'Technology gap analysis',
        'Security vulnerability assessment',
        'Performance benchmarking',
        'Compliance review',
        'ROI analysis of existing systems'
      ],
      timeline: '2-4 weeks',
      price: 'Starting at $5,000'
    },
    {
      title: 'Digital Transformation Strategy',
      description: 'Roadmap development for comprehensive digital transformation aligned with business objectives.',
      icon: '🚀',
      deliverables: [
        'Digital transformation roadmap',
        'Technology stack recommendations',
        'Implementation timeline',
        'Budget planning and ROI projections',
        'Change management strategy',
        'Risk mitigation plan'
      ],
      timeline: '4-6 weeks',
      price: 'Starting at $15,000'
    },
    {
      title: 'Process Optimization',
      description: 'Streamline operations and eliminate inefficiencies through technology-enabled process improvement.',
      icon: '⚡',
      deliverables: [
        'Process mapping and analysis',
        'Automation opportunities',
        'Workflow optimization recommendations',
        'Integration strategy',
        'Performance metrics framework',
        'Implementation support'
      ],
      timeline: '3-5 weeks',
      price: 'Starting at $10,000'
    },
    {
      title: 'Technology Roadmapping',
      description: 'Strategic planning to align technology investments with long-term business goals.',
      icon: '🗺️',
      deliverables: [
        '3-5 year technology roadmap',
        'Investment prioritization',
        'Resource planning',
        'Vendor evaluation criteria',
        'Milestone definitions',
        'Success metrics'
      ],
      timeline: '3-4 weeks',
      price: 'Starting at $12,000'
    }
  ]

  const industryExpertise = [
    {
      industry: 'Manufacturing',
      icon: '🏭',
      challenges: [
        'Legacy system modernization',
        'Production optimization',
        'Supply chain digitization',
        'Quality management systems',
        'Predictive maintenance',
        'Regulatory compliance'
      ],
      solutions: [
        'Smart manufacturing implementation',
        'IIoT integration strategies',
        'ERP system optimization',
        'MES deployment planning',
        'Data analytics platforms',
        'Cybersecurity frameworks'
      ]
    },
    {
      industry: 'Healthcare',
      icon: '🏥',
      challenges: [
        'HIPAA compliance',
        'Interoperability issues',
        'Workflow inefficiencies',
        'Data silos',
        'Patient experience',
        'Cost management'
      ],
      solutions: [
        'EHR optimization',
        'Telehealth implementations',
        'Patient portal development',
        'Clinical decision support',
        'Revenue cycle management',
        'Population health analytics'
      ]
    },
    {
      industry: 'Commercial Business',
      icon: '🏢',
      challenges: [
        'Digital customer experience',
        'Data-driven decision making',
        'Operational efficiency',
        'Competitive positioning',
        'Scalability planning',
        'Technology debt'
      ],
      solutions: [
        'CRM optimization',
        'Business intelligence platforms',
        'E-commerce strategies',
        'Customer data platforms',
        'Marketing automation',
        'Cloud migration planning'
      ]
    }
  ]

  const engagementModels = [
    {
      model: 'Strategic Advisory',
      description: 'High-level strategic guidance for technology decisions and digital transformation initiatives.',
      duration: 'Ongoing retainer',
      ideal_for: 'Executive teams and technology leaders',
      includes: [
        'Monthly strategic sessions',
        'Technology trend briefings',
        'Vendor evaluation support',
        'Emergency consultation access',
        'Quarterly business reviews'
      ]
    },
    {
      model: 'Project-Based',
      description: 'Focused consulting engagements with defined scope, timeline, and deliverables.',
      duration: '2-12 weeks',
      ideal_for: 'Specific technology challenges or initiatives',
      includes: [
        'Detailed project plan',
        'Regular progress updates',
        'Stakeholder workshops',
        'Final recommendations',
        'Implementation roadmap'
      ]
    },
    {
      model: 'Implementation Support',
      description: 'Hands-on support during technology implementation and organizational change.',
      duration: '3-18 months',
      ideal_for: 'Complex technology deployments',
      includes: [
        'Project management support',
        'Technical architecture guidance',
        'Change management',
        'Training coordination',
        'Go-live support'
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
              Strategic Technology Consulting
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Technology{' '}
              <span className="text-primary">Consulting</span>{' '}
              Services
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Strategic guidance and hands-on support to optimize your technology investments, 
              streamline operations, and drive digital transformation success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/contact">Schedule Strategy Session</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">42+</div>
                <div className="text-gray-300">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">200+</div>
                <div className="text-gray-300">Strategic Engagements</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-warning mb-2">$5M+</div>
                <div className="text-gray-300">Cost Savings Delivered</div>
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
              Consulting Service Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology consulting services designed to address your most 
              critical business and technology challenges.
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
                      <div className="text-primary font-semibold">{service.price}</div>
                    </div>
                  </div>
                  <CardDescription className="text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-secondary mb-2">Key Deliverables</h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-start">
                            <span className="text-primary mr-2">✓</span>
                            <span className="text-gray-700 text-sm">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <div className="text-sm font-medium text-gray-500">Timeline</div>
                      <div className="text-sm text-gray-700">{service.timeline}</div>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Industry-Specific Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep industry knowledge combined with technology expertise to address 
              your unique challenges and opportunities.
            </p>
          </div>

          <div className="space-y-12">
            {industryExpertise.map((industry, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="text-4xl mr-4">{industry.icon}</div>
                      <h3 className="text-3xl font-bold text-secondary">{industry.industry}</h3>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-secondary mb-3">Common Challenges</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {industry.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="flex items-start">
                            <span className="text-danger mr-2">•</span>
                            <span className="text-gray-700 text-sm">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 p-8">
                    <h4 className="text-lg font-semibold text-secondary mb-3">Our Solutions</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span className="text-gray-700 text-sm">{solution}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6">
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/${industry.industry.toLowerCase().replace(' ', '-')}`}>
                          Explore {industry.industry} Solutions
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Flexible Engagement Models
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the consulting approach that best fits your needs and timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{model.model}</CardTitle>
                  <CardDescription className="text-lg text-center">
                    {model.description}
                  </CardDescription>
                  <div className="text-center mt-4">
                    <Badge variant="outline" size="lg">{model.duration}</Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-secondary mb-2">Ideal For</h4>
                      <p className="text-gray-700 text-sm">{model.ideal_for}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-secondary mb-2">Includes</h4>
                      <ul className="space-y-2">
                        {model.includes.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="text-primary mr-2">✓</span>
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button asChild className="w-full" variant="outline">
                    <Link href="/contact">Discuss This Model</Link>
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
              <div className="text-4xl md:text-5xl font-bold mb-2">30%</div>
              <div className="text-gray-100">Average Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">45%</div>
              <div className="text-gray-100">Process Efficiency Gain</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">6</div>
              <div className="text-gray-100">Month Average ROI</div>
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
              Ready to Optimize Your Technology Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s discuss how our technology consulting services can help you achieve 
              your business objectives and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="accent" asChild>
                <Link href="/contact">Schedule Free Consultation</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="/case-studies">View Success Stories</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default ConsultingPage