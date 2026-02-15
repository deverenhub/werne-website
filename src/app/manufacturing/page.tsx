import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Icon } from '@/components/ui'
import { 
  faWrench, 
  faBullseye, 
  faBolt, 
  faRobot, 
  faCar, 
  faMobilePhone, 
  faFlask, 
  faAppleAlt, 
  faCheck, 
  faCircle 
} from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'Manufacturing Solutions - Smart Manufacturing & AI | Werne Enterprises',
  description: 'Transform your manufacturing operations with AI-powered predictive maintenance, quality control, and process optimization. 42+ years of proven manufacturing expertise.',
}

const ManufacturingPage = () => {
  const solutions = [
    {
      title: 'Predictive Maintenance',
      description: 'AI-powered systems that predict equipment failures before they happen, reducing downtime and maintenance costs.',
      icon: faWrench,
      color: 'primary',
      benefits: [
        '40% reduction in unplanned downtime',
        '25% decrease in maintenance costs',
        '60% improvement in equipment lifespan',
        'Real-time equipment monitoring'
      ],
      features: [
        'Sensor integration and data collection',
        'Machine learning failure prediction',
        'Automated alert systems',
        'Maintenance scheduling optimization',
        'Historical data analysis',
        'Mobile maintenance apps'
      ],
      case_study: 'Automotive manufacturer reduced unplanned downtime by 45% and saved $2.3M annually'
    },
    {
      title: 'AI-Powered Quality Control',
      description: 'Computer vision and machine learning systems for automated quality inspection and defect detection.',
      icon: faBullseye,
      color: 'secondary',
      benefits: [
        '35% reduction in quality defects',
        '80% faster inspection processes',
        '99.5% defect detection accuracy',
        'Consistent quality standards'
      ],
      features: [
        'Computer vision inspection systems',
        'Real-time defect detection',
        'Automated sorting and rejection',
        'Quality data analytics',
        'Statistical process control',
        'Compliance documentation'
      ],
      case_study: 'Electronics manufacturer improved product quality by 35% using AI vision systems'
    },
    {
      title: 'Production Optimization',
      description: 'Intelligent systems that optimize production schedules, resource allocation, and workflow efficiency.',
      icon: faBolt,
      color: 'warning',
      benefits: [
        '30% increase in production efficiency',
        '20% reduction in energy consumption',
        '50% improvement in on-time delivery',
        'Optimized resource utilization'
      ],
      features: [
        'Advanced production scheduling',
        'Resource optimization algorithms',
        'Real-time process monitoring',
        'Bottleneck identification',
        'Energy management systems',
        'Performance dashboards'
      ],
      case_study: 'Chemical plant increased throughput by 28% while reducing energy costs by 22%'
    },
    {
      title: 'Smart Automation Integration',
      description: 'Seamless integration of AI with existing automation systems for enhanced intelligent manufacturing.',
      icon: faRobot,
      color: 'accent',
      benefits: [
        '45% improvement in process efficiency',
        '60% reduction in human error',
        '24/7 autonomous operation',
        'Adaptive process control'
      ],
      features: [
        'PLC and SCADA integration',
        'Intelligent robotics coordination',
        'Adaptive control systems',
        'Human-machine interfaces',
        'Safety system integration',
        'Remote monitoring capabilities'
      ],
      case_study: 'Food processing company achieved 99.8% uptime with intelligent automation systems'
    }
  ]

  const industries = [
    {
      sector: 'Automotive Manufacturing',
      icon: faCar,
      color: 'secondary',
      challenges: [
        'Complex supply chain coordination',
        'Quality control at scale',
        'Equipment maintenance costs',
        'Production scheduling complexity'
      ],
      solutions: [
        'AI-driven supply chain optimization',
        'Computer vision quality inspection',
        'Predictive maintenance systems',
        'Intelligent production planning'
      ],
      results: '45% reduction in defects, 30% improvement in delivery times'
    },
    {
      sector: 'Electronics Manufacturing',
      icon: faMobilePhone,
      color: 'accent',
      challenges: [
        'Miniaturization quality control',
        'High-speed production demands',
        'Component traceability',
        'Yield optimization'
      ],
      solutions: [
        'Microscopic defect detection AI',
        'High-speed automated inspection',
        'Blockchain component tracking',
        'Machine learning yield optimization'
      ],
      results: '60% faster inspection, 25% yield improvement'
    },
    {
      sector: 'Chemical Processing',
      icon: faFlask,
      color: 'warning',
      challenges: [
        'Process safety management',
        'Energy efficiency optimization',
        'Regulatory compliance',
        'Batch consistency'
      ],
      solutions: [
        'AI safety monitoring systems',
        'Energy optimization algorithms',
        'Automated compliance reporting',
        'Process parameter optimization'
      ],
      results: '35% energy reduction, 99.9% safety compliance'
    },
    {
      sector: 'Food & Beverage',
      icon: faAppleAlt,
      color: 'primary',
      challenges: [
        'Food safety compliance',
        'Shelf life optimization',
        'Waste reduction',
        'Seasonal demand variability'
      ],
      solutions: [
        'AI-powered quality assurance',
        'Predictive freshness modeling',
        'Waste minimization algorithms',
        'Demand forecasting systems'
      ],
      results: '40% waste reduction, 20% extended shelf life'
    }
  ]

  const implementation = [
    {
      phase: 'Assessment & Planning',
      duration: '2-4 weeks',
      activities: [
        'Current state manufacturing analysis',
        'Production process audit',
        'Technology infrastructure review',
        'ROI and feasibility assessment',
        'Implementation roadmap development'
      ],
      deliverables: [
        'Manufacturing assessment report',
        'Technology recommendations',
        'Implementation timeline',
        'Budget and ROI projections'
      ]
    },
    {
      phase: 'Pilot Implementation',
      duration: '6-12 weeks',
      activities: [
        'Pilot system design and setup',
        'Sensor installation and integration',
        'AI model development and training',
        'Testing and validation',
        'Performance optimization'
      ],
      deliverables: [
        'Working pilot system',
        'Performance metrics',
        'Optimization recommendations',
        'Scale-up plan'
      ]
    },
    {
      phase: 'Full Deployment',
      duration: '12-24 weeks',
      activities: [
        'Enterprise-wide system rollout',
        'Integration with existing systems',
        'Staff training and certification',
        'Process documentation',
        'Performance monitoring setup'
      ],
      deliverables: [
        'Complete system deployment',
        'Training materials and certification',
        'Operating procedures',
        'Monitoring dashboards'
      ]
    },
    {
      phase: 'Optimization & Support',
      duration: 'Ongoing',
      activities: [
        'Continuous performance monitoring',
        'AI model refinement',
        'Process optimization',
        'Technical support and maintenance',
        'Regular system updates'
      ],
      deliverables: [
        'Performance reports',
        'Optimization recommendations',
        'System updates',
        'Ongoing support'
      ]
    }
  ]

  const technologies = [
    { name: 'Industrial IoT Sensors', description: 'Real-time data collection from manufacturing equipment' },
    { name: 'Computer Vision Systems', description: 'AI-powered visual inspection and quality control' },
    { name: 'Machine Learning Platforms', description: 'Predictive analytics and process optimization' },
    { name: 'Edge Computing', description: 'Real-time processing at the point of data collection' },
    { name: 'Digital Twin Technology', description: 'Virtual manufacturing process modeling and simulation' },
    { name: 'Robotics Integration', description: 'Intelligent automation and human-robot collaboration' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-20 lg:py-32 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" size="lg" className="mb-6">
              Smart Manufacturing Solutions
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transform Your{' '}
              <span className="text-primary">Manufacturing</span>{' '}
              Operations
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Leverage AI-powered predictive maintenance, quality control, and process optimization 
              to increase efficiency, reduce costs, and maintain competitive advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/contact">Schedule Manufacturing Assessment</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="#solutions">Explore Solutions</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-gray-300">Manufacturing Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">40%</div>
                <div className="text-gray-300">Average Efficiency Gain</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-warning mb-2">$5M+</div>
                <div className="text-gray-300">Cost Savings Delivered</div>
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
              Smart Manufacturing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI and IoT solutions designed to optimize every aspect 
              of your manufacturing operations.
            </p>
          </div>

          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="mr-4">
                        <Icon 
                          icon={solution.icon} 
                          size="4xl" 
                          color={solution.color as 'primary' | 'secondary' | 'accent' | 'warning'} 
                        />
                      </div>
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
                              <div className="mr-2 mt-1">
                                <Icon icon={faCheck} size="lg" color="success" />
                              </div>
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <div className="text-sm font-medium text-primary mb-1">Success Story</div>
                        <div className="text-sm text-gray-700">{solution.case_study}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 p-8">
                    <h4 className="text-lg font-semibold text-secondary mb-4">Solution Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="mr-2 mt-1">
                            <Icon icon={faCircle} size="lg" color="accent" />
                          </div>
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

      {/* Industry Sectors */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Industry-Specific Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for different manufacturing sectors, addressing 
              unique challenges and regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <Icon 
                        icon={industry.icon} 
                        size="4xl" 
                        color={industry.color as 'primary' | 'secondary' | 'accent' | 'warning'} 
                      />
                    </div>
                    <CardTitle className="text-2xl">{industry.sector}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-secondary mb-3">Key Challenges</h4>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="flex items-start">
                            <div className="mr-2 mt-1">
                              <Icon icon={faCircle} size="lg" color="error" />
                            </div>
                            <span className="text-gray-700 text-sm">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-secondary mb-3">Our Solutions</h4>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-start">
                            <div className="mr-2 mt-1">
                              <Icon icon={faCheck} size="lg" color="success" />
                            </div>
                            <span className="text-gray-700 text-sm">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                    <div className="text-sm font-medium text-secondary mb-1">Proven Results</div>
                    <div className="text-sm text-gray-700">{industry.results}</div>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button asChild className="w-full" variant="outline">
                    <Link href="/contact">Discuss Your Sector</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures successful deployment with minimal 
              disruption to your manufacturing operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementation.map((phase, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl text-center">{phase.phase}</CardTitle>
                  <div className="text-sm text-center text-gray-500">{phase.duration}</div>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-secondary mb-2 text-sm">Key Activities</h4>
                      <ul className="space-y-1">
                        {phase.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="flex items-start">
                            <div className="mr-2 mt-1">
                              <Icon icon={faCircle} size="lg" color="primary" />
                            </div>
                            <span className="text-gray-700 text-xs">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-secondary mb-2 text-sm">Deliverables</h4>
                      <ul className="space-y-1">
                        {phase.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-start">
                            <div className="mr-2 mt-1">
                              <Icon icon={faCheck} size="lg" color="accent" />
                            </div>
                            <span className="text-gray-700 text-xs">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Core Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the latest manufacturing technologies to deliver 
              cutting-edge solutions for modern production environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{tech.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Manufacturing ROI Results
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Our smart manufacturing solutions deliver measurable returns on investment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">40%</div>
              <div className="text-gray-100">Downtime Reduction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">35%</div>
              <div className="text-gray-100">Quality Improvement</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">30%</div>
              <div className="text-gray-100">Efficiency Increase</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">25%</div>
              <div className="text-gray-100">Cost Reduction</div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Manufacturing Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s discuss how our smart manufacturing solutions can optimize your 
              operations, reduce costs, and improve quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="primary" asChild>
                <Link href="/contact">Schedule Manufacturing Assessment</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="/case-studies">View Manufacturing Case Studies</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default ManufacturingPage