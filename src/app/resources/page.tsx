import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Icon } from '@/components/ui'
import {
  faBook,
  faGraduationCap,
  faIndustry,
  faHospital,
  faStore,
  faCalendarAlt,
  faHandshake,
  faCheckCircle,
  faBrain,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'Resources - AI Education & Training Programs | Werne Enterprises',
  description: 'AI training programs, educational resources, and consulting services. Purdue MEP AI Series, AI the Spreadsheet Killer, 12 Week AI Bootcamp.',
}

const ResourcesPage = () => {
  const trainingPrograms = [
    {
      title: 'Purdue MEP AI Series',
      description: 'Comprehensive AI training program developed in partnership with Purdue MEP for manufacturing professionals.',
      audience: 'Manufacturing Teams',
      format: 'Multi-session series',
      topics: [
        'AI fundamentals for manufacturing',
        'Practical AI applications',
        'Implementation strategies',
        'Change management'
      ],
      mep_partner: true
    },
    {
      title: 'AI the Spreadsheet Killer',
      description: 'Learn how AI transforms data management and eliminates spreadsheet dependency.',
      audience: 'Business Professionals',
      format: 'Workshop format',
      topics: [
        'Spreadsheet limitations',
        'AI alternatives for data management',
        'Automation opportunities',
        'Practical demonstrations'
      ],
      mep_partner: false
    },
    {
      title: '12 Week AI Bootcamp',
      description: 'Intensive AI implementation program for teams ready to deploy AI in their organizations.',
      audience: 'Implementation Teams',
      format: 'Blended learning',
      topics: [
        'AI strategy development',
        'Tool selection and data preparation',
        'Implementation planning',
        'Capstone project'
      ],
      mep_partner: false
    },
    {
      title: 'Custom Corporate Training',
      description: 'Tailored AI training programs designed for your organization\'s specific needs and goals.',
      audience: 'Your Teams',
      format: 'Customized',
      topics: [
        'Needs assessment',
        'Custom curriculum design',
        'Industry-specific content',
        'Ongoing support'
      ],
      mep_partner: false
    }
  ]

  const industryFocus = [
    {
      industry: 'Manufacturing',
      icon: faIndustry,
      resources: [
        'AI for process optimization',
        'Predictive maintenance concepts',
        'Quality control automation',
        'Tribal knowledge capture'
      ]
    },
    {
      industry: 'Healthcare',
      icon: faHospital,
      resources: [
        'AI applications in healthcare',
        'Compliance considerations',
        'Workflow automation',
        'Data privacy requirements'
      ]
    },
    {
      industry: 'Commercial',
      icon: faStore,
      resources: [
        'AI for business operations',
        'Customer experience AI',
        'Process automation',
        'Data analytics'
      ]
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

  const products = [
    {
      name: 'SmartHive.online',
      description: 'Our tribal knowledge AI platform that captures employee expertise and transforms it into AI personas.',
      features: [
        'Expert knowledge capture',
        'AI persona creation',
        '24/7 knowledge access',
        'Training acceleration'
      ],
      link: 'https://smarthive.online'
    },
    {
      name: 'TSVMap Methodology',
      description: 'Our proven technology strategy and vendor mapping approach developed for manufacturers.',
      features: [
        'Technology landscape mapping',
        'Vendor evaluation framework',
        'System integration planning',
        'Cost optimization analysis'
      ],
      link: '/services/consulting'
    },
    {
      name: 'AI Readiness Assessment',
      description: 'Comprehensive evaluation to determine your organization\'s preparedness for AI adoption.',
      features: [
        'Current state analysis',
        'Data readiness evaluation',
        'Infrastructure assessment',
        'Implementation roadmap'
      ],
      link: '/book-time'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-20 lg:py-32 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products/smarthive-dashboard.jpg"
            alt="Resources background"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" size="lg" className="mb-6">
              <Icon icon={faBook} className="mr-2" />
              AI Education & Resources
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              AI Training &{' '}
              <span className="text-primary">Resources</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              AI training programs developed through MEP partnerships, educational resources,
              and tools to help your organization adopt AI strategically.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/book-time">Discuss Training Needs</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="#training-programs">View Programs</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">8+</div>
                <div className="text-gray-300">MEP Partnerships</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">4</div>
                <div className="text-gray-300">Training Programs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-warning mb-2">2 Hours</div>
                <div className="text-gray-300">Free Consultation</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Training Programs */}
      <section id="training-programs" className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              <Icon icon={faGraduationCap} className="mr-3" />
              AI Training Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI education programs developed through hands-on experience and
              MEP network partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <Card key={index} className={`h-full ${program.mep_partner ? 'ring-2 ring-primary border-primary' : ''}`}>
                {program.mep_partner && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-medium rounded-t-xl">
                    MEP Partner Program
                  </div>
                )}

                <CardHeader>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <CardDescription className="text-lg">{program.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline">{program.audience}</Badge>
                    <Badge variant="accent">{program.format}</Badge>
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <h4 className="font-semibold text-secondary mb-3">Topics Covered</h4>
                  <ul className="space-y-2">
                    {program.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start">
                        <Icon icon={faCheckCircle} size="sm" color="primary" className="mr-2 mt-0.5" />
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
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

      {/* Industry Focus */}
      <section className="py-20 bg-white">
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
            {industryFocus.map((industry, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="text-center">
                  <Icon icon={industry.icon} size="3xl" color="primary" className="mb-4" />
                  <CardTitle className="text-2xl">{industry.industry}</CardTitle>
                </CardHeader>

                <CardContent className="flex-1">
                  <h4 className="font-semibold text-secondary mb-3">Training Focus Areas</h4>
                  <ul className="space-y-2">
                    {industry.resources.map((resource, resIndex) => (
                      <li key={resIndex} className="flex items-start">
                        <Icon icon={faCheckCircle} size="sm" color="primary" className="mr-2 mt-0.5" />
                        <span className="text-gray-700">{resource}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button asChild className="w-full" variant="outline">
                    <Link href={`/${industry.industry.toLowerCase()}`}>
                      Explore {industry.industry} Solutions
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Products & Methodologies */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              <Icon icon={faBrain} className="mr-3" />
              Products & Methodologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tools and frameworks we&apos;ve developed to help organizations adopt AI effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <CardDescription className="text-lg">{product.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <h4 className="font-semibold text-secondary mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, featIndex) => (
                      <li key={featIndex} className="flex items-start">
                        <Icon icon={faCheckCircle} size="sm" color="primary" className="mr-2 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button asChild className="w-full" variant="outline">
                    {product.link.startsWith('http') ? (
                      <a href={product.link} target="_blank" rel="noopener noreferrer">
                        Learn More
                      </a>
                    ) : (
                      <Link href={product.link}>Learn More</Link>
                    )}
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
              <Icon icon={faHandshake} className="mr-3" />
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
                  <Icon icon={faHandshake} size="xl" color="primary" className="mb-3" />
                  <p className="font-semibold text-secondary">{partner}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              <Icon icon={faLightbulb} className="mr-3" />
              AI Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest thoughts on AI adoption,
              implementation best practices, and industry trends.
            </p>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary mb-4">Coming Soon: AI Blog</h3>
                <p className="text-gray-600 mb-6">
                  We&apos;re building a resource of AI education content, implementation guides,
                  and industry insights. Subscribe to be notified when we launch.
                </p>
                <Button asChild>
                  <Link href="/contact">Get Notified</Link>
                </Button>
              </CardContent>
            </Card>
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
            <p className="text-xl text-gray-100 mb-8">
              Start with 2 hours free consulting to discuss your training needs.
              All pricing provided after understanding your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="primary" asChild>
                <Link href="/book-time">
                  <Icon icon={faCalendarAlt} className="mr-2" />
                  Discuss Training Needs
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link href="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default ResourcesPage
