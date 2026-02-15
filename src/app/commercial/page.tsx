import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Icon } from '@/components/ui'
import { 
  faChartBar, 
  faCogs, 
  faRocket, 
  faLaptop, 
  faShoppingCart, 
  faUniversity, 
  faBriefcase, 
  faCode, 
  faCheck, 
  faCircle, 
  faDatabase, 
  faRobot, 
  faCloud, 
  faSmile 
} from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'Commercial Business Solutions - AI & Digital Transformation | Werne Enterprises',
  description: 'Drive growth and competitive advantage with business intelligence, automation, and customer experience AI for commercial businesses. 42+ years of proven results.',
}

const CommercialPage = () => {
  const solutions = [
    {
      title: 'Business Intelligence & Analytics',
      description: 'Transform data into actionable insights with advanced analytics and AI-powered business intelligence.',
      icon: faChartBar,
      color: 'primary',
      benefits: [
        '50% faster decision-making',
        '35% improvement in forecasting accuracy',
        '40% increase in operational efficiency',
        'Real-time performance insights'
      ],
      features: [
        'Advanced data visualization',
        'Predictive analytics models',
        'Real-time dashboards',
        'Automated reporting systems',
        'Performance KPI tracking',
        'Market trend analysis'
      ],
      case_study: 'Retail chain increased sales by 25% using AI-powered demand forecasting'
    },
    {
      title: 'Process Automation',
      description: 'Streamline operations and reduce costs with intelligent automation of repetitive business processes.',
      icon: faCogs,
      color: 'secondary',
      benefits: [
        '60% reduction in manual tasks',
        '45% decrease in processing time',
        '80% improvement in accuracy',
        'Significant cost savings'
      ],
      features: [
        'Robotic Process Automation (RPA)',
        'Workflow optimization',
        'Document processing automation',
        'Integration with existing systems',
        'Exception handling',
        'Audit trail and compliance'
      ],
      case_study: 'Financial services firm automated 70% of back-office operations, saving $1.2M annually'
    },
    {
      title: 'Customer Experience AI',
      description: 'Enhance customer satisfaction and loyalty with AI-powered personalization and support systems.',
      icon: faRocket,
      color: 'accent',
      benefits: [
        '40% increase in customer engagement',
        '35% improvement in satisfaction scores',
        '50% reduction in response time',
        'Personalized customer journeys'
      ],
      features: [
        'AI chatbots and virtual assistants',
        'Personalization engines',
        'Sentiment analysis',
        'Customer behavior prediction',
        'Omnichannel integration',
        'Real-time recommendations'
      ],
      case_study: 'E-commerce company increased conversion rates by 40% through AI personalization'
    },
    {
      title: 'Digital Transformation',
      description: 'Comprehensive digital transformation strategy and implementation for competitive advantage.',
      icon: faLaptop,
      color: 'warning',
      benefits: [
        '45% improvement in operational agility',
        '30% faster time-to-market',
        '55% increase in digital revenue',
        'Enhanced competitive positioning'
      ],
      features: [
        'Digital strategy development',
        'Cloud migration and optimization',
        'API-first architecture',
        'Data modernization',
        'Mobile-first solutions',
        'Legacy system integration'
      ],
      case_study: 'Manufacturing company achieved 50% revenue growth through digital transformation'
    }
  ]

  const businessTypes = [
    {
      type: 'Retail & E-commerce',
      icon: faShoppingCart,
      color: 'primary',
      challenges: [
        'Inventory management complexity',
        'Customer acquisition costs',
        'Omnichannel coordination',
        'Price optimization'
      ],
      solutions: [
        'AI-powered inventory optimization',
        'Customer lifetime value analysis',
        'Unified commerce platforms',
        'Dynamic pricing algorithms'
      ],
      results: '40% improvement in inventory turnover, 25% increase in customer retention'
    },
    {
      type: 'Financial Services',
      icon: faUniversity,
      color: 'secondary',
      challenges: [
        'Regulatory compliance complexity',
        'Risk management',
        'Customer onboarding efficiency',
        'Fraud detection and prevention'
      ],
      solutions: [
        'Automated compliance monitoring',
        'AI-powered risk assessment',
        'Digital onboarding platforms',
        'Real-time fraud detection'
      ],
      results: '60% faster onboarding, 80% reduction in fraud losses'
    },
    {
      type: 'Professional Services',
      icon: faBriefcase,
      color: 'accent',
      challenges: [
        'Project management efficiency',
        'Resource allocation optimization',
        'Client communication',
        'Knowledge management'
      ],
      solutions: [
        'AI project management tools',
        'Resource optimization systems',
        'Client portal platforms',
        'Knowledge management systems'
      ],
      results: '35% improvement in project delivery, 50% better resource utilization'
    },
    {
      type: 'Technology Companies',
      icon: faCode,
      color: 'warning',
      challenges: [
        'Product development acceleration',
        'Customer acquisition scaling',
        'Data-driven decision making',
        'Competitive differentiation'
      ],
      solutions: [
        'Agile development platforms',
        'Growth hacking automation',
        'Advanced analytics systems',
        'AI-powered product features'
      ],
      results: '50% faster product delivery, 45% improvement in user engagement'
    }
  ]

  const capabilities = [
    {
      category: 'Data & Analytics',
      icon: '📊',
      technologies: [
        'Business Intelligence platforms',
        'Machine Learning models',
        'Predictive analytics',
        'Data warehousing',
        'Real-time analytics',
        'Data visualization'
      ]
    },
    {
      category: 'Automation & AI',
      icon: '🤖',
      technologies: [
        'Robotic Process Automation',
        'Intelligent document processing',
        'Workflow automation',
        'AI-powered chatbots',
        'Computer vision',
        'Natural language processing'
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      icon: '☁️',
      technologies: [
        'Cloud migration and optimization',
        'Microservices architecture',
        'API development',
        'DevOps automation',
        'Security frameworks',
        'Scalable infrastructure'
      ]
    },
    {
      category: 'Customer Experience',
      icon: '😊',
      technologies: [
        'Personalization engines',
        'Customer journey mapping',
        'Omnichannel platforms',
        'Customer analytics',
        'Marketing automation',
        'Customer support AI'
      ]
    }
  ]

  const implementation = [
    {
      phase: 'Strategy & Assessment',
      duration: '2-4 weeks',
      description: 'Comprehensive business analysis and digital transformation strategy development'
    },
    {
      phase: 'Solution Design',
      duration: '3-6 weeks',
      description: 'Detailed solution architecture and implementation planning'
    },
    {
      phase: 'Development & Integration',
      duration: '8-16 weeks',
      description: 'Custom development and integration with existing systems'
    },
    {
      phase: 'Testing & Deployment',
      duration: '2-4 weeks',
      description: 'Comprehensive testing and phased deployment to production'
    },
    {
      phase: 'Optimization & Support',
      duration: 'Ongoing',
      description: 'Continuous optimization and technical support'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-20 lg:py-32 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="warning" size="lg" className="mb-6">
              Commercial Business Solutions
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Drive Growth with{' '}
              <span className="text-warning">Commercial</span>{' '}
              AI Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Accelerate business growth and competitive advantage with AI-powered business intelligence, 
              automation, and customer experience solutions tailored for commercial enterprises.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/contact">Schedule Business Assessment</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="#solutions">Explore Business Solutions</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-warning mb-2">300+</div>
                <div className="text-gray-300">Commercial Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">45%</div>
                <div className="text-gray-300">Average Revenue Growth</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">6x</div>
                <div className="text-gray-300">ROI Within 12 Months</div>
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
              Comprehensive technology solutions designed to accelerate growth, 
              improve efficiency, and create competitive advantages.
            </p>
          </div>

          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <Icon icon={solution.icon} size="xl" color="primary" className="mr-4" />
                      <div>
                        <h3 className="text-3xl font-bold text-secondary">{solution.title}</h3>
                        <p className="text-lg text-gray-600 mt-2">{solution.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-secondary mb-3">Key Benefits</h4>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start">
                              <span className="text-warning mr-2">✓</span>
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-warning/10 p-4 rounded-lg">
                        <div className="text-sm font-medium text-warning mb-1">Success Story</div>
                        <div className="text-sm text-gray-700">{solution.case_study}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 p-8">
                    <h4 className="text-lg font-semibold text-secondary mb-4">Solution Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6">
                      <Button asChild className="w-full">
                        <Link href="/contact">Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Business Types */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions for different types of commercial businesses 
              and their unique challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {businessTypes.map((business, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Icon icon={business.icon} size="xl" color="primary" className="mr-4" />
                    <CardTitle className="text-2xl">{business.type}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-secondary mb-3">Key Challenges</h4>
                      <ul className="space-y-2">
                        {business.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="flex items-start">
                            <span className="text-danger mr-2">•</span>
                            <span className="text-gray-700 text-sm">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-secondary mb-3">Our Solutions</h4>
                      <ul className="space-y-2">
                        {business.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-start">
                            <span className="text-warning mr-2">✓</span>
                            <span className="text-gray-700 text-sm">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                    <div className="text-sm font-medium text-secondary mb-1">Proven Results</div>
                    <div className="text-sm text-gray-700">{business.results}</div>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button asChild className="w-full" variant="outline">
                    <Link href="/contact">Discuss Your Business</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Technology Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology stack and capabilities to support 
              your digital transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="text-4xl mb-4 text-center">{capability.icon}</div>
                  <CardTitle className="text-xl text-center">{capability.category}</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {capability.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="flex items-start">
                        <span className="text-warning mr-2">•</span>
                        <span className="text-gray-700 text-sm">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures successful implementation with 
              measurable business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {implementation.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-warning text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">{phase.phase}</h3>
                <div className="text-sm text-warning font-medium mb-3">{phase.duration}</div>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-r from-warning to-primary text-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Business Results
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Our commercial solutions deliver measurable business outcomes and sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">45%</div>
              <div className="text-gray-100">Revenue Growth</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">40%</div>
              <div className="text-gray-100">Efficiency Improvement</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">60%</div>
              <div className="text-gray-100">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">6x</div>
              <div className="text-gray-100">ROI Achievement</div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Accelerate Your Business Growth?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s discuss how our commercial AI solutions can drive growth, 
              improve efficiency, and create competitive advantages for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="warning" asChild>
                <Link href="/contact">Schedule Business Assessment</Link>
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

export default CommercialPage