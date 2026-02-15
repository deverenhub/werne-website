import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Icon } from '@/components/ui'
import { 
  faStethoscope, 
  faClock, 
  faChartBar, 
  faShieldAlt, 
  faHospital, 
  faUserMd, 
  faMicroscope, 
  faHome, 
  faCheck, 
  faCircle 
} from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'Healthcare Solutions - AI Technology for Healthcare | Werne Enterprises',
  description: 'Transform healthcare operations with AI-powered clinical decision support, workflow optimization, and patient experience enhancement. HIPAA-compliant healthcare technology solutions.',
}

const HealthcarePage = () => {
  const solutions = [
    {
      title: 'Clinical Decision Support',
      description: 'AI-powered systems that assist healthcare professionals in making informed clinical decisions.',
      icon: faStethoscope,
      color: 'primary',
      benefits: [
        '25% improvement in diagnostic accuracy',
        '40% reduction in clinical errors',
        '30% faster treatment decisions',
        'Evidence-based recommendations'
      ],
      features: [
        'Real-time clinical guidelines',
        'Drug interaction alerts',
        'Risk assessment algorithms',
        'Treatment recommendation engine',
        'Clinical pathway optimization',
        'EHR integration'
      ],
      case_study: 'Regional health system improved patient outcomes by 35% with AI clinical decision support'
    },
    {
      title: 'Operational Efficiency Systems',
      description: 'Streamline healthcare operations with AI-powered scheduling, resource management, and workflow optimization.',
      icon: faClock,
      color: 'secondary',
      benefits: [
        '25% improvement in patient scheduling',
        '35% reduction in wait times',
        '50% better resource utilization',
        'Enhanced patient satisfaction'
      ],
      features: [
        'Intelligent patient scheduling',
        'Staff optimization algorithms',
        'Resource allocation systems',
        'Workflow automation',
        'Capacity planning tools',
        'Performance analytics'
      ],
      case_study: 'Hospital network reduced patient wait times by 40% through AI-powered scheduling'
    },
    {
      title: 'Healthcare Data Analytics',
      description: 'Advanced analytics and AI to derive insights from healthcare data for improved patient care and operations.',
      icon: faChartBar,
      color: 'accent',
      benefits: [
        '60% faster data analysis',
        '45% improvement in population health insights',
        '30% reduction in readmission rates',
        'Predictive health outcomes'
      ],
      features: [
        'Population health analytics',
        'Predictive modeling',
        'Clinical outcome analysis',
        'Cost-effectiveness studies',
        'Quality measure tracking',
        'Risk stratification'
      ],
      case_study: 'Health system reduced readmissions by 28% using predictive analytics'
    },
    {
      title: 'Regulatory Compliance Tools',
      description: 'Automated systems to ensure HIPAA compliance and meet healthcare regulatory requirements.',
      icon: faShieldAlt,
      color: 'success',
      benefits: [
        '99.9% compliance accuracy',
        '70% reduction in audit preparation time',
        '90% fewer compliance violations',
        'Automated documentation'
      ],
      features: [
        'HIPAA compliance monitoring',
        'Automated audit trails',
        'Privacy protection systems',
        'Regulatory reporting',
        'Data security frameworks',
        'Compliance training modules'
      ],
      case_study: 'Healthcare provider achieved 100% HIPAA compliance with zero violations over 2 years'
    }
  ]

  const specialties = [
    {
      area: 'Hospitals & Health Systems',
      icon: faHospital,
      color: 'primary',
      challenges: [
        'Patient flow optimization',
        'Clinical workflow efficiency',
        'Resource management',
        'Quality measure compliance'
      ],
      solutions: [
        'Intelligent bed management',
        'OR scheduling optimization',
        'Staff allocation algorithms',
        'Quality reporting automation'
      ],
      results: '35% improvement in patient throughput, 25% reduction in length of stay'
    },
    {
      area: 'Medical Practices',
      icon: faUserMd,
      color: 'secondary',
      challenges: [
        'Patient scheduling optimization',
        'EHR workflow inefficiencies',
        'Revenue cycle management',
        'Patient engagement'
      ],
      solutions: [
        'AI-powered appointment scheduling',
        'EHR workflow automation',
        'Billing optimization systems',
        'Patient communication platforms'
      ],
      results: '40% increase in patient satisfaction, 30% improvement in revenue cycle'
    },
    {
      area: 'Specialty Clinics',
      icon: faMicroscope,
      color: 'accent',
      challenges: [
        'Specialized care coordination',
        'Equipment utilization',
        'Clinical outcome tracking',
        'Research data management'
      ],
      solutions: [
        'Care coordination platforms',
        'Equipment scheduling systems',
        'Outcome analytics tools',
        'Research data platforms'
      ],
      results: '50% better care coordination, 25% improvement in clinical outcomes'
    },
    {
      area: 'Long-term Care',
      icon: faHome,
      color: 'warning',
      challenges: [
        'Staff scheduling complexity',
        'Medication management',
        'Regulatory compliance',
        'Family communication'
      ],
      solutions: [
        'Intelligent staff scheduling',
        'Medication tracking systems',
        'Compliance monitoring tools',
        'Family engagement platforms'
      ],
      results: '45% improvement in staff efficiency, 60% better family satisfaction'
    }
  ]

  const compliance = [
    {
      standard: 'HIPAA Compliance',
      description: 'Complete privacy and security compliance for protected health information',
      features: [
        'End-to-end encryption',
        'Access control systems',
        'Audit trail logging',
        'Privacy impact assessments',
        'Breach notification systems',
        'Staff training programs'
      ]
    },
    {
      standard: 'HL7 FHIR Integration',
      description: 'Seamless interoperability with healthcare systems and EHRs',
      features: [
        'FHIR API development',
        'Data mapping and transformation',
        'Real-time data exchange',
        'Clinical document standards',
        'Terminology services',
        'Workflow integration'
      ]
    },
    {
      standard: 'FDA Compliance',
      description: 'Medical device software compliance and validation',
      features: [
        'Software validation protocols',
        'Quality management systems',
        'Risk management processes',
        'Clinical evaluation support',
        'Post-market surveillance',
        'Regulatory submission support'
      ]
    }
  ]

  const technologies = [
    { name: 'Electronic Health Records (EHR)', description: 'Integration with major EHR systems' },
    { name: 'Machine Learning for Healthcare', description: 'Clinical prediction and decision support' },
    { name: 'Natural Language Processing', description: 'Clinical documentation and analysis' },
    { name: 'Blockchain for Healthcare', description: 'Secure patient data sharing and consent' },
    { name: 'Telehealth Platforms', description: 'Remote patient monitoring and care' },
    { name: 'IoT Medical Devices', description: 'Connected device integration and analytics' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-20 lg:py-32 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" size="lg" className="mb-6">
              Healthcare Technology Solutions
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transform{' '}
              <span className="text-accent">Healthcare</span>{' '}
              Operations
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Improve patient outcomes and operational efficiency with HIPAA-compliant AI solutions 
              designed specifically for healthcare providers and organizations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/contact">Schedule Healthcare Consultation</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="#solutions">Explore Healthcare Solutions</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">150+</div>
                <div className="text-gray-300">Healthcare Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">35%</div>
                <div className="text-gray-300">Average Outcome Improvement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-warning mb-2">100%</div>
                <div className="text-gray-300">HIPAA Compliance Rate</div>
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
              Comprehensive technology solutions designed to improve patient care, 
              enhance operational efficiency, and ensure regulatory compliance.
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
                          color={solution.color as 'primary' | 'secondary' | 'accent' | 'success'} 
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
                      
                      <div className="bg-accent/10 p-4 rounded-lg">
                        <div className="text-sm font-medium text-accent mb-1">Success Story</div>
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
                            <Icon icon={faCircle} size="lg" color="primary" />
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

      {/* Healthcare Specialties */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Healthcare Specialties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions for different healthcare settings and care delivery models.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {specialties.map((specialty, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <Icon 
                        icon={specialty.icon} 
                        size="4xl" 
                        color={specialty.color as 'primary' | 'secondary' | 'accent' | 'warning'} 
                      />
                    </div>
                    <CardTitle className="text-2xl">{specialty.area}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-secondary mb-3">Common Challenges</h4>
                      <ul className="space-y-2">
                        {specialty.challenges.map((challenge, challengeIndex) => (
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
                        {specialty.solutions.map((solution, solutionIndex) => (
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
                    <div className="text-sm text-gray-700">{specialty.results}</div>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button asChild className="w-full" variant="outline">
                    <Link href="/contact">Discuss Your Needs</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Regulatory Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive compliance support for healthcare regulations and standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {compliance.map((standard, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{standard.standard}</CardTitle>
                  <CardDescription className="text-center">
                    {standard.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {standard.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="mr-2 mt-1">
                          <Icon icon={faCheck} size="lg" color="success" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
              Healthcare Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technologies specifically designed for healthcare environments.
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

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-primary text-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Healthcare Outcomes
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Our healthcare solutions deliver measurable improvements in patient care and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">35%</div>
              <div className="text-gray-100">Outcome Improvement</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">40%</div>
              <div className="text-gray-100">Wait Time Reduction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">25%</div>
              <div className="text-gray-100">Efficiency Increase</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-gray-100">Compliance Rate</div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Healthcare Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s discuss how our healthcare technology solutions can improve patient outcomes, 
              enhance efficiency, and ensure regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="accent" asChild>
                <Link href="/contact">Schedule Healthcare Consultation</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="/case-studies">View Healthcare Case Studies</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default HealthcarePage