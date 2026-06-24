import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from '@/components/ui'

export const metadata: Metadata = {
  title: 'About Werne Enterprises - 27+ Years of Technology Experience',
  description: 'Learn about Deveren Werne and Werne Enterprises - AI education, consulting, and custom development serving Manufacturing, Healthcare, and Commercial Business since 1998.',
}

const AboutPage = () => {
  const leadership = [
    {
      name: 'Deveren Werne',
      role: 'AI Solution Architect & Founder',
      bio: 'Deveren brings 27+ years of real systems and IT experience - spanning AI, ERP, MRP, and custom development - and has architected hundreds of technology solutions over that time. He works directly with every client: an AI solution architect and practical partner who has actually built the systems, now helping teams learn, adopt, and deploy AI that ships.',
      expertise: [
        'AI Education & Training',
        'Custom AI Development & Deployment',
        'AI Readiness Assessment',
        'ERP / MRP & Systems Architecture',
        'TSVMap Methodology',
        'Compliance-Aware AI (ITAR, CMMC, Title 21 CFR Part 11, CUI, DHRs)'
      ],
      achievements: [
        'Architected hundreds of solutions across AI, ERP, MRP, and custom development',
        'Built and deployed production AI solutions and workflows',
        'Wrote and delivered classes for Purdue MEP',
        'Developed five courses for businesses and MEPs',
        'Creator of SmartHive.online; founder of TSVMap'
      ]
    }
  ]

  const timeline = [
    {
      year: '1984',
      milestone: 'Technology Journey Begins',
      description: 'Deveren began exploring technology with an early home computer, sparking a lifelong passion for building systems.'
    },
    {
      year: '1998',
      milestone: 'Professional Career Begins',
      description: 'Started a professional technology career, beginning 27+ years of hands-on experience across AI, ERP, MRP, and custom development.'
    },
    {
      year: '2001',
      milestone: 'Liquid Video Technologies',
      description: 'Co-founded Liquid Video Technologies with father Albert Werne, expanding into video and digital media solutions.'
    },
    {
      year: '2018',
      milestone: 'TSVMap Founded',
      description: 'Created the TSVMap Methodology, a systematic approach to technology strategy and vendor management for manufacturers.'
    },
    {
      year: '2020s',
      milestone: 'Practical AI for Manufacturers & Businesses',
      description: 'Built SmartHive.online, wrote and delivered classes for Purdue MEP, developed five courses for businesses and MEPs, and now designs and deploys practical AI alongside MEP partners.'
    }
  ]

  const values = [
    {
      value: 'Education First',
      description: 'I empower teams with AI knowledge - from classes written and delivered for Purdue MEP to five courses for businesses and MEPs - building capabilities that last.'
    },
    {
      value: 'Practical Results',
      description: 'Practical AI that actually ships. With 27+ years architecting real systems, every solution is designed to produce measurable business outcomes.'
    },
    {
      value: 'Preserve Knowledge',
      description: 'With SmartHive.online, I help capture tribal knowledge from experienced employees and turn it into AI personas that preserve institutional wisdom.'
    },
    {
      value: 'Genuine Partnership',
      description: 'A solo practice - you work directly with me. No account managers, no handoffs, just direct access to expertise.'
    },
    {
      value: 'Compliance-Aware',
      description: 'I help regulated manufacturers adopt AI without breaking compliance - experience spanning ITAR, CMMC, Title 21 CFR Part 11, CUI, and medical-device DHRs.'
    },
    {
      value: 'MEP Network',
      description: 'Partner of Manufacturing Extension Partnership organizations, bringing AI education and deployment to manufacturers and businesses.'
    }
  ]

  const achievements = [
    {
      category: 'Track Record',
      metrics: [
        { label: 'Years in Technology', value: '27+' },
        { label: 'Solutions Architected', value: 'Hundreds' },
        { label: 'Courses Developed', value: '5' },
        { label: 'Practice', value: 'Solo' }
      ]
    },
    {
      category: 'What I Build',
      metrics: [
        { label: 'Disciplines', value: 'AI · ERP · MRP' },
        { label: 'Platforms', value: 'SmartHive · TSVMap' },
        { label: 'Production AI', value: 'Built & Deployed' },
        { label: 'Classes for', value: 'Purdue MEP' }
      ]
    },
    {
      category: 'Who I Serve',
      metrics: [
        { label: 'Ideal Company Size', value: '10-600' },
        { label: 'Ideal Revenue', value: '$10M-$500M' },
        { label: 'Industries', value: 'Mfg · Healthcare · Commercial' },
        { label: 'Free Consultation', value: '2 Hours' }
      ]
    }
  ]

  // NOTE: Only MEP partners confirmed on the truth sheet are listed.
  // Add more here only when verified. {/* NEEDS-FACT: full verified list of MEP partners */}
  const mepPartners = [
    'SCMEP (South Carolina MEP)',
    'Purdue MEP',
    'Georgia MEP'
  ]

  const offerings = [
    {
      title: 'AI Education',
      description: 'Multiple training programs including the Purdue MEP AI Series and 12 Week AI Bootcamp.'
    },
    {
      title: 'Custom AI Development',
      description: 'Creator of SmartHive.online - turn your team\'s tribal knowledge into AI personas.'
    },
    {
      title: 'AI Consulting & Deployment',
      description: '27+ years architecting real systems - now designing and deploying production AI solutions and workflows that ship.'
    }
  ]

  const products = [
    {
      name: 'SmartHive.online',
      description: 'Captures employee tribal knowledge and creates AI personas',
      type: 'AI Platform'
    },
    {
      name: 'Purdue MEP AI Series',
      description: 'Comprehensive AI training for manufacturing professionals',
      type: 'Training Program'
    },
    {
      name: 'AI the Spreadsheet Killer',
      description: 'Training on how AI transforms data management',
      type: 'Training Program'
    },
    {
      name: '12 Week AI Bootcamp',
      description: 'Intensive AI implementation program',
      type: 'Training Program'
    },
    {
      name: 'TSVMap Methodology',
      description: 'Technology strategy and vendor mapping system',
      type: 'Methodology'
    },
    {
      name: 'AI Readiness Assessment',
      description: 'My own methodology to evaluate your organization\'s AI preparedness and map a practical path to deployment',
      type: 'Methodology'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/team/deveren-werne.jpg"
            alt="Deveren Werne speaking at AI technology conference"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/50" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl py-20 lg:py-28">
            <Badge variant="primary" size="lg" className="mb-6">
              27+ Years in Technology | 2 Hours Free AI Consulting
            </Badge>

            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-5">
              About Werne Enterprises
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.08]">
              An AI solution architect who has{' '}
              <span className="text-primary">actually built the systems</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              AI education, training, and practical development for manufacturers and
              businesses ready to adopt AI that ships. An AI solution architect with
              27+ years building real systems. Based in South Carolina, working with
              clients beyond SC.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" asChild>
                <Link href="/book-time">Get 2 Hours Free</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="#leadership">Meet Deveren</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
                Our Mission
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                AI made practical for mid-sized business
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                To make AI accessible and practical for mid-sized businesses. We focus on
                education, custom development, and strategic consulting that delivers
                measurable results - not just technology for technology&apos;s sake.
              </p>

              <h3 className="text-2xl font-bold text-secondary mb-4">Ideal Clients</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We work best with companies that have 10-600 employees and $10M-$500M in revenue.
                Manufacturing, healthcare, and commercial businesses that are ready to
                strategically adopt AI see the best results from our services.
              </p>
            </div>

            <div className="space-y-6">
              {offerings.map((offering, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <p className="text-sm font-semibold text-[#2E7D32] mb-2 tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h4 className="text-xl font-semibold text-secondary mb-2">{offering.title}</h4>
                    <p className="text-gray-600">{offering.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              Leadership
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Meet Deveren Werne
            </h2>
            <p className="text-xl text-gray-600">
              AI solution architect with 27+ years of hands-on technology experience.
              A solo practice - you work directly with Deveren on every engagement.
            </p>
          </div>

          {leadership.map((leader, index) => (
            <Card key={index} className="overflow-hidden mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="p-8">
                  <div className="relative w-full aspect-square max-w-[18rem] mx-auto mb-6 overflow-hidden rounded-2xl">
                    <Image
                      src="/images/team/deveren-werne.jpg"
                      alt="Deveren Werne, AI consultant and founder of Werne Enterprises"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 80vw, 288px"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-secondary mb-2">{leader.name}</h3>
                  <div className="text-xl text-[#2E7D32] font-semibold mb-4">{leader.role}</div>
                  <p className="text-gray-600 leading-relaxed">{leader.bio}</p>
                </div>

                <div className="bg-gray-50 p-8">
                  <h4 className="text-lg font-semibold text-secondary mb-4">Core Expertise</h4>
                  <ul className="space-y-3">
                    {leader.expertise.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="text-gray-700 text-sm leading-relaxed border-l-2 border-[#2E7D32]/40 pl-3"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary/5 p-8">
                  <h4 className="text-lg font-semibold text-secondary mb-4">Key Achievements</h4>
                  <ul className="space-y-3">
                    {leader.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="text-gray-700 text-sm leading-relaxed border-l-2 border-[#2E7D32]/40 pl-3"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
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
              MEP Network Partners
            </h2>
            <p className="text-xl text-gray-600">
              Trusted partner of Manufacturing Extension Partnership organizations across the country.
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

      {/* Products & Methodologies */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              Products & Methodologies
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Products & Methodologies
            </h2>
            <p className="text-xl text-gray-600">
              AI platforms, training programs, and methodologies developed by Werne Enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{product.type}</Badge>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              Our Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From early computing to architecting and deploying practical AI today.
            </p>
          </div>

          <div className="space-y-10 max-w-3xl">
            {timeline.map((event, index) => (
              <div key={index} className="flex items-start gap-6 border-l-2 border-[#2E7D32]/30 pl-6">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#2E7D32] mb-1 tabular-nums">{event.year}</p>
                  <h3 className="text-2xl font-bold text-secondary mb-2">{event.milestone}</h3>
                  <p className="text-gray-600 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              Core Values
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide our approach to AI consulting and client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <p className="text-sm font-semibold text-[#2E7D32] mb-2 tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <CardTitle className="text-xl">{value.value}</CardTitle>
                </CardHeader>

                <CardContent className="flex-1">
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-secondary text-white">
        <Container>
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-4">
              By the Numbers
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              By the Numbers
            </h2>
            <p className="text-xl text-gray-300">
              Verified facts and figures from our work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {achievements.map((category, index) => (
              <Card key={index} className="bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{category.category}</CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                    {category.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex}>
                        <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                        <div className="text-gray-300 text-sm">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="border-t border-white/10 py-20 bg-secondary text-white">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-4">
              Get Started
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start With 2 Hours Free
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              No commitment required. Let&apos;s discuss your AI goals and see if we&apos;re a good fit.
              I work directly with every client - no account managers or handoffs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" variant="primary" asChild>
                <Link href="/book-time">Book Free Consultation</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default AboutPage
