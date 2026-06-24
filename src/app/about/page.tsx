import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, Badge, Icon } from '@/components/ui'
import {
  faBullseye,
  faHandshake,
  faShield,
  faRocket,
  faCheck,
  faStar,
  faGraduationCap,
  faBrain,
  faUsers
} from '@fortawesome/free-solid-svg-icons'

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
      icon: faGraduationCap,
      color: 'primary',
      description: 'I empower teams with AI knowledge - from classes written and delivered for Purdue MEP to five courses for businesses and MEPs - building capabilities that last.'
    },
    {
      value: 'Practical Results',
      icon: faBullseye,
      color: 'secondary',
      description: 'Practical AI that actually ships. With 27+ years architecting real systems, every solution is designed to produce measurable business outcomes.'
    },
    {
      value: 'Preserve Knowledge',
      icon: faBrain,
      color: 'accent',
      description: 'With SmartHive.online, I help capture tribal knowledge from experienced employees and turn it into AI personas that preserve institutional wisdom.'
    },
    {
      value: 'Genuine Partnership',
      icon: faHandshake,
      color: 'warning',
      description: 'A solo practice - you work directly with me. No account managers, no handoffs, just direct access to expertise.'
    },
    {
      value: 'Compliance-Aware',
      icon: faShield,
      color: 'success',
      description: 'I help regulated manufacturers adopt AI without breaking compliance - experience spanning ITAR, CMMC, Title 21 CFR Part 11, CUI, and medical-device DHRs.'
    },
    {
      value: 'MEP Network',
      icon: faUsers,
      color: 'secondary',
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
      <section className="relative bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-20 lg:py-32 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/team/deveren-werne.jpg"
            alt="Deveren Werne speaking at AI technology conference"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" size="lg" className="mb-6">
              27+ Years in Technology | 2 Hours Free AI Consulting
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              About{' '}
              <span className="text-primary">Werne</span>{' '}
              Enterprises
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              AI education, training, and practical development for manufacturers and
              businesses ready to adopt AI that ships. An AI solution architect with
              27+ years building real systems. Based in South Carolina, working with
              clients beyond SC.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Our Mission
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
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Icon icon={faGraduationCap} size="4xl" color="primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-secondary mb-2">AI Education</h4>
                  <p className="text-gray-600">Multiple training programs including the Purdue MEP AI Series and 12 Week AI Bootcamp.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Icon icon={faBrain} size="4xl" color="accent" />
                  </div>
                  <h4 className="text-xl font-semibold text-secondary mb-2">Custom AI Development</h4>
                  <p className="text-gray-600">Creator of SmartHive.online - turn your team&apos;s tribal knowledge into AI personas.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Icon icon={faRocket} size="4xl" color="warning" />
                  </div>
                  <h4 className="text-xl font-semibold text-secondary mb-2">AI Consulting & Deployment</h4>
                  <p className="text-gray-600">27+ years architecting real systems - now designing and deploying production AI solutions and workflows that ship.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Meet Deveren Werne
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI solution architect with 27+ years of hands-on technology experience.
              A solo practice - you work directly with Deveren on every engagement.
            </p>
          </div>

          {leadership.map((leader, index) => (
            <Card key={index} className="overflow-hidden mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="p-8">
                  <div className="relative w-40 h-40 mx-auto mb-6">
                    <Image
                      src="/images/team/deveren-werne.jpg"
                      alt="Deveren Werne, AI consultant and founder of Werne Enterprises"
                      fill
                      className="object-cover rounded-full border-4 border-white shadow-lg"
                      sizes="160px"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-secondary mb-2 text-center">{leader.name}</h3>
                  <div className="text-xl text-primary font-semibold mb-4 text-center">{leader.role}</div>
                  <p className="text-gray-600 leading-relaxed">{leader.bio}</p>
                </div>

                <div className="bg-gray-50 p-8">
                  <h4 className="text-lg font-semibold text-secondary mb-4">Core Expertise</h4>
                  <ul className="space-y-2">
                    {leader.expertise.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-start">
                        <div className="mr-2 mt-1">
                          <Icon icon={faCheck} size="lg" color="primary" />
                        </div>
                        <span className="text-gray-700 text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary/5 p-8">
                  <h4 className="text-lg font-semibold text-secondary mb-4">Key Achievements</h4>
                  <ul className="space-y-2">
                    {leader.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <div className="mr-2 mt-1">
                          <Icon icon={faStar} size="lg" color="accent" />
                        </div>
                        <span className="text-gray-700 text-sm">{achievement}</span>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              MEP Network Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted partner of Manufacturing Extension Partnership organizations across the country.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mepPartners.map((partner, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <Icon icon={faHandshake} size="2xl" color="primary" className="mb-3" />
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Products & Methodologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From early computing to architecting and deploying practical AI today.
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center text-sm font-bold mr-6 flex-shrink-0">
                  {event.year}
                </div>
                <div className="flex-1">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our approach to AI consulting and client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader>
                  <div className="mb-4">
                    <Icon
                      icon={value.icon}
                      size="4xl"
                      color={value.color as 'primary' | 'secondary' | 'accent' | 'warning' | 'success'}
                    />
                  </div>
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
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              By the Numbers
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Verified facts and figures from our work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {achievements.map((category, index) => (
              <Card key={index} className="bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-xl text-center text-white">{category.category}</CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {category.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                        <div className="text-gray-200 text-sm">{metric.label}</div>
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
      <section className="py-20 bg-secondary text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start With 2 Hours Free
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              No commitment required. Let&apos;s discuss your AI goals and see if we&apos;re a good fit.
              I work directly with every client - no account managers or handoffs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
