import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, Icon, Reveal } from '@/components/ui'
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const IndustrySolutionsSection = () => {
  const industries = [
    {
      title: 'Manufacturing Solutions',
      description: 'AI training and custom development for manufacturers. Capture tribal knowledge, optimize processes, and reduce system costs.',
      image: '/images/industries/manufacturing.jpg',
      imageAlt: 'Manufacturing facility with industrial automation and AI-powered systems',
      features: [
        'AI Readiness Assessments',
        'Tribal knowledge capture (SmartHive)',
        'Process optimization',
        'TSVMap Methodology'
      ],
      caseStudy: 'MEP partnerships including SCMEP, Purdue MEP, and Georgia MEP',
      href: '/manufacturing'
    },
    {
      title: 'Healthcare Technology',
      description: 'AI solutions for healthcare operations, compliance, and workflow optimization with security-first approach.',
      image: '/images/industries/healthcare.jpg',
      imageAlt: 'Healthcare professional using AI-powered medical technology for patient care',
      features: [
        'Operational efficiency AI',
        'Compliance-aware solutions',
        'Workflow automation',
        'AI training programs'
      ],
      caseStudy: 'Custom AI solutions designed for healthcare compliance',
      href: '/healthcare'
    },
    {
      title: 'Commercial Business AI',
      description: 'AI education and custom development for businesses with 10-600 employees looking to leverage AI strategically.',
      image: '/images/industries/commercial.jpg',
      imageAlt: 'Modern commercial office with business professionals using AI technology',
      features: [
        'AI education & training',
        'Custom AI development',
        'Business process automation',
        'AI strategy consulting'
      ],
      caseStudy: 'Ideal for $10M-$500M revenue companies',
      href: '/commercial'
    }
  ]

  return (
    <section id="industry-solutions" className="py-20 lg:py-28 bg-white">
      <Container>
        <Reveal className="max-w-3xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
            Industry Solutions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Specialized Technology for Your Industry
          </h2>
          <p className="text-xl text-gray-600">
            27+ years of real systems experience, applied as practical AI that fits the specific
            challenges and opportunities of your industry.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Reveal key={index} delay={index * 80} className="h-full">
              <Link
                href={industry.href}
                className="block h-full"
              >
                <Card
                  className="h-full group overflow-hidden cursor-pointer"
                  hover
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-2xl">{industry.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <ul className="space-y-3 mb-6">
                      {industry.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Icon icon={faCheck} size="xs" className="mr-2 mt-1 shrink-0 text-[#2E7D32]" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-6">
                      <div className="text-sm font-medium text-gray-500 mb-1">Proof Point</div>
                      <div className="text-sm text-gray-700 font-medium">{industry.caseStudy}</div>
                    </div>

                    <span className="inline-flex items-center text-sm font-semibold text-[#2E7D32]">
                      Explore solutions
                      <Icon icon={faArrowRight} size="xs" className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Button size="lg" asChild>
            <Link href="/case-studies" className="group">
              See Proof Points &amp; Engagements
              <Icon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}

export { IndustrySolutionsSection }
