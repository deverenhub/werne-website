import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Education & Workshops - AI Training & Technology Leadership | Werne Enterprises',
  description: 'Comprehensive AI education, technology training, and leadership workshops for Manufacturing, Healthcare, and Commercial Business teams.',
}

const EducationPage = () => {
  const programs = [
    {
      title: 'AI Literacy for Leaders',
      description: 'Executive-level training on AI strategy, implementation, and business impact.',
      icon: '👨‍💼',
      audience: 'Executives & Senior Leadership',
      duration: '1-2 days',
      format: 'In-person or virtual',
      topics: [
        'AI fundamentals and terminology',
        'Business applications of AI',
        'AI strategy development',
        'Risk management and ethics',
        'ROI measurement',
        'Change management for AI adoption'
      ],
      price: 'Starting at $2,500',
      max_participants: '20 executives'
    },
    {
      title: 'Hands-On AI Workshop',
      description: 'Technical workshop for engineers and developers on AI implementation.',
      icon: '💻',
      audience: 'Technical Teams & Developers',
      duration: '3-5 days',
      format: 'Hands-on lab environment',
      topics: [
        'Machine learning fundamentals',
        'RAG system implementation',
        'Model training and deployment',
        'AI tools and frameworks',
        'Best practices and optimization',
        'Real-world project work'
      ],
      price: 'Starting at $5,000',
      max_participants: '15 technical staff'
    },
    {
      title: 'Industry-Specific AI Applications',
      description: 'Tailored training focused on AI applications in your specific industry.',
      icon: '🏭',
      audience: 'Cross-functional Teams',
      duration: '2-3 days',
      format: 'Mixed presentation and workshop',
      topics: [
        'Industry AI use cases',
        'Implementation challenges',
        'Regulatory considerations',
        'Vendor evaluation',
        'Implementation planning',
        'Success measurement'
      ],
      price: 'Starting at $7,500',
      max_participants: '25 participants'
    }
  ]

  const customTraining = [
    {
      type: 'Technology Leadership Bootcamp',
      description: 'Comprehensive program for emerging technology leaders',
      duration: '5 days',
      modules: [
        'Strategic technology planning',
        'Team leadership in tech environments',
        'Innovation management',
        'Digital transformation leadership',
        'Technology risk management',
        'Vendor and stakeholder management'
      ],
      delivery: 'On-site intensive program'
    },
    {
      type: 'AI Transformation Certification',
      description: 'Complete certification program for AI transformation specialists',
      duration: '8 weeks',
      modules: [
        'AI strategy and planning',
        'Technical implementation basics',
        'Change management for AI',
        'Project management for AI initiatives',
        'Measuring AI success',
        'Capstone project'
      ],
      delivery: 'Blended online and in-person'
    },
    {
      type: 'Custom Corporate Training',
      description: 'Tailored training programs designed for your specific needs',
      duration: 'Flexible',
      modules: [
        'Needs assessment and curriculum design',
        'Custom content development',
        'Flexible delivery options',
        'Progress tracking and assessment',
        'Ongoing support and resources',
        'Program evaluation and optimization'
      ],
      delivery: 'Customized to requirements'
    }
  ]

  const industries = [
    {
      name: 'Manufacturing',
      icon: '🏭',
      focus_areas: [
        'Smart manufacturing concepts',
        'IIoT implementation strategies',
        'Predictive maintenance AI',
        'Quality control automation',
        'Supply chain optimization',
        'Safety and compliance'
      ],
      case_study: 'Reduced training time by 40% for digital transformation initiatives'
    },
    {
      name: 'Healthcare',
      icon: '🏥',
      focus_areas: [
        'Healthcare AI applications',
        'HIPAA compliance in AI',
        'Clinical decision support',
        'Workflow optimization',
        'Patient data analytics',
        'Regulatory considerations'
      ],
      case_study: 'Improved staff adoption rates by 65% for new technology systems'
    },
    {
      name: 'Commercial Business',
      icon: '🏢',
      focus_areas: [
        'Business intelligence and analytics',
        'Customer experience AI',
        'Marketing automation',
        'Sales process optimization',
        'Financial technology integration',
        'Competitive advantage through AI'
      ],
      case_study: 'Accelerated AI project delivery by 50% through better team preparation'
    }
  ]

  const learningFormats = [
    {
      format: 'Executive Briefings',
      duration: '2-4 hours',
      description: 'High-level overview sessions for decision makers',
      best_for: 'Strategic planning and buy-in',
      delivery: 'Boardroom presentations'
    },
    {
      format: 'Workshops',
      duration: '1-3 days',
      description: 'Interactive sessions with hands-on activities',
      best_for: 'Skill development and application',
      delivery: 'Collaborative environments'
    },
    {
      format: 'Certification Programs',
      duration: '4-12 weeks',
      description: 'Comprehensive learning with assessment',
      best_for: 'Deep expertise development',
      delivery: 'Blended learning approach'
    },
    {
      format: 'On-Demand Learning',
      duration: 'Self-paced',
      description: 'Flexible online modules and resources',
      best_for: 'Ongoing skill maintenance',
      delivery: 'Digital platform access'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-20 lg:py-32 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" size="lg" className="mb-6">
              AI Education & Training Excellence
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Education &{' '}
              <span className="text-primary">Workshops</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Build internal AI and technology capabilities with comprehensive training programs 
              designed for your industry and organizational needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/contact">Plan Training Program</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="#programs">Explore Programs</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-gray-300">Professionals Trained</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">95%</div>
                <div className="text-gray-300">Satisfaction Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-warning mb-2">85%</div>
                <div className="text-gray-300">Implementation Success Rate</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Programs */}
      <section id="programs" className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Core Training Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive education programs designed to build AI and technology 
              capabilities across all levels of your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="text-4xl mb-4 text-center">{program.icon}</div>
                  <CardTitle className="text-2xl text-center">{program.title}</CardTitle>
                  <CardDescription className="text-lg text-center">
                    {program.description}
                  </CardDescription>
                  <div className="text-center mt-4 space-y-2">
                    <Badge variant="outline">{program.audience}</Badge>
                    <div className="text-primary font-semibold">{program.price}</div>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-secondary">Duration:</span>
                        <div className="text-gray-700">{program.duration}</div>
                      </div>
                      <div>
                        <span className="font-medium text-secondary">Format:</span>
                        <div className="text-gray-700">{program.format}</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-secondary mb-2">Topics Covered</h4>
                      <ul className="space-y-1">
                        {program.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start">
                            <span className="text-primary mr-2 text-sm">•</span>
                            <span className="text-gray-700 text-sm">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-100 p-3 rounded-lg text-sm">
                      <span className="font-medium text-secondary">Max Participants:</span>
                      <div className="text-gray-700">{program.max_participants}</div>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/contact">Schedule Program</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Custom Training Options */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Custom Training Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored learning experiences designed to meet your specific 
              organizational needs and objectives.
            </p>
          </div>

          <div className="space-y-8">
            {customTraining.map((training, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-secondary mb-3">{training.type}</h3>
                    <p className="text-gray-600 mb-4">{training.description}</p>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium text-secondary">Duration:</span>
                        <span className="text-gray-700 ml-2">{training.duration}</span>
                      </div>
                      <div>
                        <span className="font-medium text-secondary">Delivery:</span>
                        <span className="text-gray-700 ml-2">{training.delivery}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-span-2 bg-gray-50 p-6">
                    <h4 className="font-semibold text-secondary mb-3">Program Modules</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {training.modules.map((module, moduleIndex) => (
                        <div key={moduleIndex} className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span className="text-gray-700 text-sm">{module}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Button asChild variant="outline">
                        <Link href="/contact">Customize This Program</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Industry-Specific Training */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Industry-Specific Training
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized training programs tailored to the unique challenges 
              and opportunities in your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="text-4xl mb-4 text-center">{industry.icon}</div>
                  <CardTitle className="text-2xl text-center">{industry.name}</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-secondary mb-3">Training Focus Areas</h4>
                      <ul className="space-y-2">
                        {industry.focus_areas.map((area, areaIndex) => (
                          <li key={areaIndex} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-gray-700 text-sm">{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <div className="text-sm font-medium text-secondary mb-1">Success Story</div>
                      <div className="text-sm text-gray-700">{industry.case_study}</div>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button asChild className="w-full" variant="outline">
                    <Link href={`/${industry.name.toLowerCase()}`}>
                      Explore {industry.name} Training
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Learning Formats */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Flexible Learning Formats
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the learning format that best fits your team&apos;s schedule 
              and learning preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningFormats.map((format, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{format.format}</CardTitle>
                  <div className="text-primary font-semibold">{format.duration}</div>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <p className="text-gray-600 text-sm mb-4">{format.description}</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-secondary">Best For:</span>
                      <div className="text-gray-700">{format.best_for}</div>
                    </div>
                    <div>
                      <span className="font-medium text-secondary">Delivery:</span>
                      <div className="text-gray-700">{format.delivery}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Results & ROI */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Training Impact & ROI
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Our training programs deliver measurable business results and long-term value.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50%</div>
              <div className="text-gray-100">Faster Project Delivery</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">65%</div>
              <div className="text-gray-100">Improved Adoption Rates</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">40%</div>
              <div className="text-gray-100">Reduced Training Costs</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">6x</div>
              <div className="text-gray-100">ROI Within First Year</div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your Team&apos;s AI Capabilities?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s design a training program that builds the skills your team needs 
              to succeed in the age of AI and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="accent" asChild>
                <Link href="/contact">Design Training Program</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="/resources">View Training Resources</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default EducationPage