import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge } from '@/components/ui'

export const metadata: Metadata = {
  title: 'AI Innovation Services - RAG, MCP & Custom AI Solutions | Werne Enterprises',
  description: 'Advanced AI innovation services including RAG implementation, MCP protocols, and custom AI development for Manufacturing, Healthcare, and Commercial Business.',
}

const AIInnovationPage = () => {
  const aiServices = [
    {
      title: 'RAG Implementation',
      description: 'Retrieval-Augmented Generation systems that enhance AI capabilities with your proprietary data.',
      icon: '🔍',
      features: [
        'Custom knowledge base integration',
        'Real-time data retrieval',
        'Enhanced AI accuracy',
        'Domain-specific responses',
        'Secure data handling',
        'Scalable architecture'
      ],
      benefits: [
        'Improved AI response accuracy',
        'Reduced hallucinations',
        'Context-aware answers',
        'Proprietary knowledge utilization'
      ],
      use_cases: [
        'Technical documentation systems',
        'Customer support automation',
        'Regulatory compliance queries',
        'Product information systems'
      ]
    },
    {
      title: 'MCP Implementation',
      description: 'Model Context Protocol integration for seamless AI model communication and data exchange.',
      icon: '🔗',
      features: [
        'Protocol standardization',
        'Multi-model integration',
        'Real-time communication',
        'Secure data exchange',
        'Performance optimization',
        'Error handling systems'
      ],
      benefits: [
        'Improved model interoperability',
        'Reduced integration complexity',
        'Enhanced data security',
        'Standardized communication'
      ],
      use_cases: [
        'Multi-AI system coordination',
        'Enterprise AI orchestration',
        'Cross-platform integration',
        'Workflow automation'
      ]
    },
    {
      title: 'Custom AI Development',
      description: 'Tailored artificial intelligence solutions designed for your specific industry and use case.',
      icon: '⚙️',
      features: [
        'Industry-specific models',
        'Custom algorithm development',
        'Performance optimization',
        'Scalable deployment',
        'Continuous learning',
        'Model monitoring'
      ],
      benefits: [
        'Purpose-built solutions',
        'Optimal performance',
        'Competitive advantage',
        'Full control and ownership'
      ],
      use_cases: [
        'Predictive maintenance',
        'Quality control systems',
        'Process optimization',
        'Anomaly detection'
      ]
    }
  ]

  const industries = [
    {
      name: 'Manufacturing',
      icon: '🏭',
      applications: [
        'Predictive maintenance AI',
        'Quality control vision systems',
        'Production optimization',
        'Supply chain intelligence',
        'Safety monitoring systems'
      ]
    },
    {
      name: 'Healthcare',
      icon: '🏥',
      applications: [
        'Clinical decision support',
        'Medical image analysis',
        'Patient workflow optimization',
        'Regulatory compliance AI',
        'Research data analysis'
      ]
    },
    {
      name: 'Commercial Business',
      icon: '🏢',
      applications: [
        'Customer behavior analysis',
        'Sales forecasting',
        'Process automation',
        'Risk assessment',
        'Market intelligence'
      ]
    }
  ]

  const process = [
    {
      phase: 'Discovery',
      duration: '1-2 weeks',
      activities: [
        'Business requirement analysis',
        'Technical infrastructure assessment',
        'Data audit and evaluation',
        'Use case identification',
        'ROI projection'
      ]
    },
    {
      phase: 'Design',
      duration: '2-3 weeks',
      activities: [
        'Solution architecture design',
        'AI model selection',
        'Data pipeline planning',
        'Integration strategy',
        'Security framework'
      ]
    },
    {
      phase: 'Development',
      duration: '6-12 weeks',
      activities: [
        'AI model development',
        'System integration',
        'Testing and validation',
        'Performance optimization',
        'Security implementation'
      ]
    },
    {
      phase: 'Deployment',
      duration: '2-4 weeks',
      activities: [
        'Production deployment',
        'Performance monitoring',
        'User training',
        'Documentation delivery',
        'Support setup'
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
              Advanced AI Innovation
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              AI Innovation{' '}
              <span className="text-primary">Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge AI technologies including RAG systems, 
              MCP protocols, and custom AI development tailored to your industry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/contact">Start AI Project</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="#services">Explore AI Services</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-300">AI Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">95%</div>
                <div className="text-gray-300">Accuracy Improvement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-warning mb-2">60%</div>
                <div className="text-gray-300">Cost Reduction</div>
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
              Advanced AI Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage the latest AI innovations to create competitive advantages 
              and drive business transformation.
            </p>
          </div>

          <div className="space-y-12">
            {aiServices.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="text-4xl mr-4">{service.icon}</div>
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
                              <span className="text-primary mr-2">✓</span>
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
                              <span className="text-accent mr-2">★</span>
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
                              <span className="text-warning mr-2">→</span>
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
              Industry-Specific Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions are tailored to address unique challenges and opportunities 
              in your specific industry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-5xl mb-4">{industry.icon}</div>
                  <CardTitle className="text-2xl">{industry.name}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 text-left">
                    {industry.applications.map((application, appIndex) => (
                      <li key={appIndex} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              AI Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures successful AI implementation with measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl">{phase.phase}</CardTitle>
                  <div className="text-sm text-gray-500">{phase.duration}</div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 text-left text-sm">
                    {phase.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Lead with AI Innovation?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Transform your business with cutting-edge AI technologies. Our experts are ready 
              to help you implement solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" asChild>
                <Link href="/contact">Start Your AI Journey</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link href="/case-studies">View AI Case Studies</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default AIInnovationPage