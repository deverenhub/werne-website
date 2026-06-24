import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Breadcrumb } from '@/components/ui'

export const metadata: Metadata = {
  title: 'AI Training Programs - Purdue MEP AI Series & Bootcamps',
  description: 'AI education and training for manufacturers and businesses — five courses, classes written and delivered for Purdue MEP, and the AI Readiness Assessment. Contact for pricing.',
}

const EducationPage = () => {
  const programs = [
    {
      title: 'Purdue MEP AI Series',
      description: 'Classes written and delivered for Purdue MEP — practical AI training for manufacturing professionals.',
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
      title: 'AI Readiness Assessment',
      description: 'Deveren\'s own methodology — developed and delivered firsthand — to gauge where your team stands and what to learn first.',
      audience: 'Leaders & Teams',
      duration: 'Contact for details',
      format: 'Guided assessment',
      topics: [
        'Current state and skills review',
        'Data and tooling readiness',
        'Prioritized learning path',
        'Practical AI opportunities',
        'Adoption roadmap',
        'Next-step recommendations'
      ],
      pricing: 'Contact for pricing',
      mep_partner: false
    },
    {
      title: 'Custom Corporate Training',
      description: 'Tailored AI training programs designed for your organization\'s specific needs and goals.',
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
      <section className="relative bg-secondary py-20 lg:py-32 text-white overflow-hidden">
        {/* Background image with duotone scrim */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products/smarthive-dashboard.jpg"
            alt="AI training dashboard used in Werne Enterprises education programs"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/50" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-5">
              AI Training Programs
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6">
              AI Education &{' '}
              <span className="text-primary">Training</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Practical AI education for manufacturers and businesses — five courses,
              classes written and delivered for Purdue MEP, and the AI Readiness Assessment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" asChild>
                <Link href="/book-time">Discuss Training Needs</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="#programs">View Programs</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-bold text-white mb-2">5</div>
                <div className="text-gray-300">Courses for Businesses &amp; MEPs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">Purdue MEP</div>
                <div className="text-gray-300">Classes Written &amp; Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">Custom</div>
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
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              The Curriculum
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Training Programs
            </h2>
            <p className="text-xl text-gray-600">
              Five courses for businesses and MEPs, developed through hands-on
              experience and delivered directly by Deveren.
            </p>
            {/* NEEDS-FACT: titles/descriptions of the two remaining courses (3 are shown by name below: Purdue MEP AI Series, AI the Spreadsheet Killer, 12 Week AI Bootcamp) */}
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
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Badge variant="outline">{program.audience}</Badge>
                    <span className="text-[#2E7D32] font-semibold text-sm">{program.pricing}</span>
                  </div>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <CardDescription className="text-lg mt-2">
                    {program.description}
                  </CardDescription>
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
                      <h4 className="font-semibold text-secondary mb-3">Topics Covered</h4>
                      <ul className="space-y-2">
                        {program.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2E7D32]" aria-hidden="true" />
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
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              Network &amp; Reach
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              MEP Network Partners
            </h2>
            <p className="text-xl text-gray-600">
              Our AI training programs have been developed and delivered
              through partnerships across the MEP network.
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

      {/* Experience Section */}
      <section className="bg-secondary text-white py-20">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-4">
              Why Learn Here
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Taught By Someone Who Has Built It
            </h2>
            <p className="text-xl text-gray-300">
              27+ years architecting real systems &mdash; AI, ERP, MRP, and custom development &mdash;
              distilled into education you can actually use. Courses written and delivered for
              Purdue MEP and other manufacturers and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">27+</div>
              <div className="text-gray-300">Years of Systems &amp; AI Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5</div>
              <div className="text-gray-300">Courses for Businesses &amp; MEPs</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">Purdue MEP</div>
              <div className="text-gray-300">Classes Written &amp; Delivered</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Industry-Specific Training */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              Tailored By Sector
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Industry-Specific Training
            </h2>
            <p className="text-xl text-gray-600">
              Training content tailored to the unique challenges and opportunities
              in your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{industry.name}</CardTitle>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-secondary mb-3">Training Focus Areas</h4>
                      <ul className="space-y-2">
                        {industry.focus_areas.map((area, areaIndex) => (
                          <li key={areaIndex} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2E7D32]" aria-hidden="true" />
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
