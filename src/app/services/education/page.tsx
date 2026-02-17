import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Icon, Breadcrumb } from '@/components/ui'
import { faGraduationCap, faChartBar, faRocket, faBuilding, faIndustry, faHospital, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'AI Training Programs - Purdue MEP AI Series & Bootcamps | Werne Enterprises',
  description: 'AI training programs including Purdue MEP AI Series, AI the Spreadsheet Killer, and 12 Week AI Bootcamp. Custom corporate AI training. Contact for pricing.',
}

const EducationPage = () => {
  const programs = [
    {
      title: 'Purdue MEP AI Series',
      description: 'Comprehensive AI training program developed in partnership with Purdue MEP for manufacturing professionals.',
      icon: faGraduationCap,
      audience: 'Manufacturing Teams',
      duration: 'Multi-session series',
      format: 'In-person or virtual',
      topics: [
        'AI fundamentals for manufacturing',
        'Practical AI applications',
        'Implementation strategies',
        'ROI measurement',
        'Change management',
        'Hands-on exercises'
      ],
      pricing: 'Contact for pricing',
      mep_partner: true
    },
    {
      title: 'AI the Spreadsheet Killer',
      description: 'Learn how AI transforms data management and eliminates spreadsheet dependency.',
      icon: faChartBar,
      audience: 'Business Professionals',
      duration: 'Contact for details',
      format: 'Workshop format',
      topics: [
        'Spreadsheet limitations',
        'AI alternatives for data management',
        'Automation opportunities',
        'Implementation approach',
        'Quick wins identification',
        'Practical demonstrations'
      ],
      pricing: 'Contact for pricing',
      mep_partner: false
    },
    {
      title: '12 Week AI Bootcamp',
      description: 'Intensive AI implementation program for teams ready to deploy AI in their organizations.',
      icon: faRocket,
      audience: 'Implementation Teams',
      duration: '12 weeks',
      format: 'Blended learning',
      topics: [
        'AI strategy development',
        'Data preparation',
        'Tool selection',
        'Implementation planning',
        'Change management',
        'Capstone project'
      ],
      pricing: 'Contact for pricing',
      mep_partner: false
    },
    {
      title: 'Custom Corporate Training',
      description: 'Tailored AI training programs designed for your organization\'s specific needs and goals.',
      icon: faBuilding,
      audience: 'Your Teams',
      duration: 'Flexible',
      format: 'Customized to requirements',
      topics: [
        'Needs assessment',
        'Custom curriculum design',
        'Industry-specific content',
        'Hands-on exercises',
        'Progress assessments',
        'Ongoing support'
      ],
      pricing: 'Contact for pricing',
      mep_partner: false
    }
  ]

  const mepPartners = [
    'Purdue MEP',
    'SCMEP',
    'FloridaMakes',
    'Georgia MEP',
    'MassMEP',
    'TechSolve',
    'Manufacturers Edge',
    'DVIRC'
  ]

  const industries = [
    {
      name: 'Manufacturing',
      icon: faIndustry,
      focus_areas: [
        'AI for process optimization',
        'Predictive maintenance concepts',
        'Quality control automation',
        'Data analytics fundamentals',
        'Implementation planning',
        'Change management'
      ]
    },
    {
      name: 'Healthcare',
      icon: faHospital,
      focus_areas: [
        'AI applications in healthcare',
        'Compliance considerations',
        'Workflow automation',
        'Data privacy requirements',
        'Patient experience AI',
        'Implementation strategies'
      ]
    },
    {
      name: 'Commercial Business',
      icon: faBuilding,
      focus_areas: [
        'AI for business operations',
        'Customer experience AI',
        'Process automation',
        'Data analytics',
        'Marketing AI applications',
        'Sales enablement'
      ]
    }
  ]

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Education', href: '/services/education' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-20 lg:py-32 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products/smarthive-dashboard.jpg"
            alt="Education background"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" size="lg" className="mb-6">
              AI Training Programs
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              AI Education &{' '}
              <span className="text-primary">Training</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive AI training programs developed through MEP partnerships.
              From the Purdue MEP AI Series to the 12 Week AI Bootcamp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/book-time">Discuss Training Needs</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="#programs">View Programs</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">8+</div>
                <div className="text-gray-300">MEP Partner Relationships</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">4</div>
                <div className="text-gray-300">Training Programs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-warning mb-2">Custom</div>
                <div className="text-gray-300">Corporate Training Available</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="bg-gray-100 border-b border-gray-200">
        <Container>
          <Breadcrumb items={breadcrumbItems} />
        </Container>
      </section>

      {/* Core Programs */}
      <section id="programs" className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Training Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI education programs developed through hands-on experience and
              MEP network partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className={`h-full ${program.mep_partner ? 'ring-2 ring-primary border-primary' : ''}`}>
                {program.mep_partner && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-medium rounded-t-xl">
                    MEP Partner Program
                  </div>
                )}

                <CardHeader>
                  <Icon icon={program.icon} size="4xl" color="primary" className="mb-4 text-center" />
                  <CardTitle className="text-2xl text-center">{program.title}</CardTitle>
                  <CardDescription className="text-lg text-center">
                    {program.description}
                  </CardDescription>
                  <div className="text-center mt-4 space-y-2">
                    <Badge variant="outline">{program.audience}</Badge>
                    <div className="text-primary font-semibold">{program.pricing}</div>
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
                            <Icon icon={faCheckCircle} size="sm" color="primary" className="mr-2" />
                            <span className="text-gray-700 text-sm">{topic}</span>
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

      {/* MEP Partners */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              MEP Network Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI training programs have been developed and delivered
              through partnerships with MEP organizations nationwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mepPartners.map((partner, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <p className="font-semibold text-secondary">{partner}</p>
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
              Training Program Results
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Delivering AI education through MEP partnerships nationwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-gray-100">Companies Trained</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">8+</div>
              <div className="text-gray-100">MEP Partnerships</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-gray-100">Programs Delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4</div>
              <div className="text-gray-100">Training Formats</div>
            </div>
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
              Training content tailored to the unique challenges and opportunities
              in your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <Icon icon={industry.icon} size="4xl" color="primary" className="mb-4 text-center" />
                  <CardTitle className="text-2xl text-center">{industry.name}</CardTitle>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-secondary mb-3">Training Focus Areas</h4>
                      <ul className="space-y-2">
                        {industry.focus_areas.map((area, areaIndex) => (
                          <li key={areaIndex} className="flex items-start">
                            <Icon icon={faCheckCircle} size="sm" color="primary" className="mr-2" />
                            <span className="text-gray-700 text-sm">{area}</span>
                          </li>
                        ))}
                      </ul>
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

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build AI Skills?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start with a free consultation to discuss your training needs.
              All pricing provided after understanding your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="primary" asChild>
                <Link href="/book-time">Discuss Training Needs</Link>
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

export default EducationPage
