import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Icon } from '@/components/ui'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'Our Work - AI Track Record',
  description: 'Our track record across manufacturing, healthcare, and commercial businesses — AI training, tribal-knowledge capture, and custom AI solutions architected and deployed. 27+ years of hands-on systems experience.',
}

const CaseStudiesPage = () => {
  const industries = [
    {
      name: 'Manufacturing',
      description: 'AI training, tribal knowledge capture, and process optimization for manufacturers.',
      examples: [
        'AI training programs through MEP partnerships',
        'Tribal knowledge capture with SmartHive',
        'Process optimization consulting',
        'Technology strategy and vendor selection'
      ]
    },
    {
      name: 'Healthcare',
      description: 'Compliance-aware AI solutions for healthcare and medical-device organizations.',
      examples: [
        'HIPAA-aware AI training',
        'Workflow automation consulting',
        'Knowledge management systems',
        'Compliance-focused implementations'
      ]
    },
    {
      name: 'Commercial',
      description: 'AI education and custom development for commercial businesses.',
      examples: [
        'AI capability building for teams',
        'Business process automation',
        'Customer experience AI',
        'Data analytics strategy'
      ]
    }
  ]

  const whatWeDo = [
    {
      title: 'AI Training & Education',
      description: 'Build your team\'s AI capabilities with courses developed and delivered through MEP partnerships, including Purdue MEP.',
      examples: [
        'Purdue MEP AI Series',
        'AI the Spreadsheet Killer',
        '12 Week AI Bootcamp',
        'Custom corporate training'
      ]
    },
    {
      title: 'Tribal Knowledge Capture',
      description: 'Preserve your experienced workers\' expertise with SmartHive.online before they retire.',
      examples: [
        'Expert knowledge interviews',
        'AI persona creation',
        'On-demand knowledge access',
        'New employee training acceleration'
      ]
    },
    {
      title: 'AI Consulting',
      description: 'Strategic AI consulting to help you navigate technology decisions with confidence.',
      examples: [
        'AI Readiness Assessments',
        'TSVMap Methodology',
        'Implementation roadmaps',
        'Change management support'
      ]
    },
    {
      title: 'Custom AI Development',
      description: 'Architect and deploy AI solutions tailored to your specific business needs and workflows.',
      examples: [
        'SmartHive.online platform',
        'Business process automation',
        'Integration with existing ERP/MRP systems',
        'Ongoing optimization'
      ]
    }
  ]

  const trackRecord = [
    { label: 'Years Building Real Systems', value: '27+' },
    { label: 'Solutions Architected', value: 'Hundreds' },
    { label: 'Courses for Businesses & MEPs', value: '5' },
    { label: 'Instructor & Partner', value: 'Purdue MEP' }
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

  const successFactors = [
    {
      factor: 'Real Systems Experience',
      description: '27+ years architecting real systems across AI, ERP, MRP, and custom development for manufacturers and businesses.',
      impact: 'Solutions that fit your specific industry needs'
    },
    {
      factor: 'Proven Methodologies',
      description: 'TSVMap and the AI Readiness Assessment, developed through real-world engagements.',
      impact: 'Reduced risk and predictable outcomes'
    },
    {
      factor: 'MEP Network',
      description: 'MEP partnerships including Purdue MEP, SCMEP, and Georgia MEP, providing proven training programs and industry connections.',
      impact: 'Cost-effective solutions with local support'
    },
    {
      factor: 'Practical Focus',
      description: 'We focus on practical AI applications that deliver real business value, not hype.',
      impact: 'Practical AI that ships and delivers real operational value'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary py-20 lg:py-32 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/industries/manufacturing.jpg"
            alt="Manufacturing facility where Werne Enterprises has architected and deployed AI"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-5">
              27+ Years of Real Systems Experience
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Our{' '}
              <span className="text-primary">Track Record</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              27+ years of hands-on systems and IT experience helping manufacturers, healthcare
              organizations, and commercial businesses adopt AI strategically — practical
              solutions architected, built, and deployed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" asChild>
                <Link href="/book-time">Get 2 Hours Free Consulting</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="#what-we-do">See What We Do</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              {trackRecord.map((metric, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-gray-300">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              Industries We Serve
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Specialized AI consulting and training for three core industries,
              with solutions tailored to each sector&apos;s unique challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{industry.name}</CardTitle>
                  <CardDescription className="text-lg">{industry.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <h4 className="font-semibold text-secondary mb-3">What We Deliver</h4>
                  <ul className="space-y-3">
                    {industry.examples.map((example, exIndex) => (
                      <li key={exIndex} className="flex items-start">
                        <Icon icon={faCheck} size="xs" className="mr-2 mt-1 shrink-0 text-[#2E7D32]" />
                        <span className="text-gray-700">{example}</span>
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

      {/* What We Do */}
      <section id="what-we-do" className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              What We Deliver
            </h2>
            <p className="text-xl text-gray-600">
              Our services focus on practical AI applications that drive real business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatWeDo.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-lg">{service.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {service.examples.map((example, exIndex) => (
                      <li key={exIndex} className="flex items-start">
                        <Icon icon={faCheck} size="xs" className="mr-2 mt-1 shrink-0 text-[#2E7D32]" />
                        <span className="text-gray-700">{example}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* MEP Partners */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              MEP Network
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              MEP Network Partner
            </h2>
            <p className="text-xl text-gray-600">
              Trusted partner of Manufacturing Extension Partnership organizations,
              delivering AI training and consulting to manufacturers.
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

      {/* Success Factors */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              Why It Works
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Why Our Clients Succeed
            </h2>
            <p className="text-xl text-gray-600">
              The key factors that drive consistent success across all our engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successFactors.map((factor, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{factor.factor}</CardTitle>
                  <CardDescription className="text-lg">
                    {factor.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl">
                    <div className="text-sm font-medium text-[#2E7D32] mb-1">Impact</div>
                    <div className="text-sm text-gray-700">{factor.impact}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Track Record Section */}
      <section className="py-20 bg-secondary text-white">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-4">
              The Numbers
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built and Deployed
            </h2>
            <p className="text-xl text-gray-300">
              Practical AI, architected and deployed — grounded in decades of real systems work.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">27+</div>
              <div className="text-gray-300">Years Building Real Systems</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">Hundreds</div>
              <div className="text-gray-300">Solutions Architected</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">5</div>
              <div className="text-gray-300">Courses for Businesses & MEPs</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">Purdue MEP</div>
              <div className="text-gray-300">Instructor & Partner</div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary border-t border-white/10 text-white">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-4">
              Get Started
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Discuss Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start with 2 hours free consulting. We&apos;ll discuss your challenges,
              explore solutions, and determine if we&apos;re a good fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" variant="primary" asChild>
                <Link href="/book-time">Book Free Consultation</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default CaseStudiesPage
