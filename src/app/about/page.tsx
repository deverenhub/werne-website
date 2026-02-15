import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Icon } from '@/components/ui'
import { 
  faLightbulb, 
  faBullseye, 
  faBuilding, 
  faHandshake, 
  faShield, 
  faBook, 
  faMagnifyingGlass, 
  faRocket, 
  faCheck, 
  faStar 
} from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'About Werne Enterprises - 42+ Years of Technology Leadership',
  description: 'Learn about Werne Enterprises LLC, a technology leadership company with 42+ years of experience serving Manufacturing, Healthcare, and Commercial Business sectors.',
}

const AboutPage = () => {
  const leadership = [
    {
      name: 'Deveren Werne',
      role: 'Founder & CEO',
      bio: 'With over 42 years of technology leadership experience, Deveren has been at the forefront of business transformation initiatives across manufacturing, healthcare, and commercial sectors. His vision for practical AI implementation has helped hundreds of organizations achieve measurable results.',
      expertise: [
        'Technology Strategy & Leadership',
        'AI Implementation & Integration',
        'Digital Transformation',
        'Business Process Optimization',
        'Change Management',
        'Industry 4.0 Solutions'
      ],
      achievements: [
        '500+ successful business transformations',
        '$10M+ in funding facilitated for clients',
        '15 MEP partnerships established',
        'Industry recognition for innovation leadership'
      ]
    }
  ]

  const timeline = [
    {
      year: '1982',
      milestone: 'Company Founded',
      description: 'Werne Enterprises established with a focus on manufacturing technology solutions and business optimization.'
    },
    {
      year: '1990s',
      milestone: 'Manufacturing Expertise',
      description: 'Expanded services to include comprehensive manufacturing systems integration and process optimization.'
    },
    {
      year: '2000s',
      milestone: 'Healthcare Expansion',
      description: 'Extended expertise to healthcare sector, developing HIPAA-compliant solutions and clinical workflow optimization.'
    },
    {
      year: '2010s',
      milestone: 'Digital Transformation',
      description: 'Pioneered digital transformation initiatives, helping businesses leverage emerging technologies for competitive advantage.'
    },
    {
      year: '2020s',
      milestone: 'AI Innovation Leadership',
      description: 'Leading the charge in practical AI implementation, focusing on RAG systems, MCP protocols, and industry-specific AI solutions.'
    }
  ]

  const values = [
    {
      value: 'Innovation Excellence',
      icon: faLightbulb,
      color: 'warning',
      description: 'We constantly push the boundaries of what\'s possible, bringing cutting-edge AI and technology solutions to traditional industries.'
    },
    {
      value: 'Practical Results',
      icon: faBullseye,
      color: 'secondary',
      description: 'Every solution we deliver is designed to produce measurable business outcomes and sustainable competitive advantages.'
    },
    {
      value: 'Industry Expertise',
      icon: faBuilding,
      color: 'accent',
      description: 'Deep understanding of manufacturing, healthcare, and commercial business challenges enables us to deliver tailored solutions.'
    },
    {
      value: 'Long-term Partnership',
      icon: faHandshake,
      color: 'primary',
      description: 'We build lasting relationships with our clients, supporting their growth and evolution over decades, not just projects.'
    },
    {
      value: 'Ethical Technology',
      icon: faShield,
      color: 'success',
      description: 'We prioritize responsible AI implementation, data privacy, and sustainable technology practices in all our solutions.'
    },
    {
      value: 'Continuous Learning',
      icon: faBook,
      color: 'secondary',
      description: 'Our team stays at the forefront of technology trends, ensuring our clients benefit from the latest innovations and best practices.'
    }
  ]

  const achievements = [
    {
      category: 'Business Impact',
      metrics: [
        { label: 'Businesses Transformed', value: '500+' },
        { label: 'Years of Experience', value: '42+' },
        { label: 'Funding Facilitated', value: '$10M+' },
        { label: 'Client Satisfaction Rate', value: '98%' }
      ]
    },
    {
      category: 'Industry Recognition',
      metrics: [
        { label: 'MEP Partnerships', value: '15' },
        { label: 'Industry Awards', value: '12+' },
        { label: 'Speaking Engagements', value: '50+' },
        { label: 'Published Articles', value: '25+' }
      ]
    },
    {
      category: 'Technology Leadership',
      metrics: [
        { label: 'AI Projects Delivered', value: '100+' },
        { label: 'Digital Transformations', value: '200+' },
        { label: 'Process Optimizations', value: '300+' },
        { label: 'Technology Implementations', value: '400+' }
      ]
    }
  ]

  const approach = [
    {
      principle: 'Industry-First Thinking',
      description: 'We start with deep understanding of your industry challenges, not generic technology solutions.',
      benefits: ['Relevant solutions', 'Faster adoption', 'Better outcomes']
    },
    {
      principle: 'Practical Implementation',
      description: 'Our solutions are designed for real-world deployment with minimal disruption to operations.',
      benefits: ['Smooth transitions', 'Quick ROI', 'Sustainable results']
    },
    {
      principle: 'Measurable Outcomes',
      description: 'Every project includes clear success metrics and ongoing performance monitoring.',
      benefits: ['Clear ROI', 'Continuous improvement', 'Accountability']
    },
    {
      principle: 'Long-term Partnership',
      description: 'We build relationships that extend beyond individual projects to support ongoing growth.',
      benefits: ['Continued support', 'Strategic guidance', 'Technology evolution']
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-20 lg:py-32 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" size="lg" className="mb-6">
              42+ Years of Technology Leadership
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              About{' '}
              <span className="text-primary">Werne</span>{' '}
              Enterprises
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              For over four decades, we&apos;ve been transforming businesses through innovative technology 
              solutions, helping organizations in manufacturing, healthcare, and commercial sectors 
              achieve sustainable competitive advantages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/contact">Partner With Us</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="#leadership">Meet Our Leadership</Link>
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
                To empower businesses with practical AI and technology solutions that drive 
                measurable results, improve operational efficiency, and create sustainable 
                competitive advantages in an increasingly digital world.
              </p>
              
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the trusted technology partner that bridges the gap between cutting-edge 
                innovation and practical business applications, making advanced AI accessible 
                and valuable for organizations of all sizes.
              </p>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Icon icon={faBullseye} size="4xl" color="secondary" />
                  </div>
                  <h4 className="text-xl font-semibold text-secondary mb-2">Results-Driven</h4>
                  <p className="text-gray-600">Every solution is measured by tangible business outcomes and sustainable improvements.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Icon icon={faMagnifyingGlass} size="4xl" color="accent" />
                  </div>
                  <h4 className="text-xl font-semibold text-secondary mb-2">Industry-Focused</h4>
                  <p className="text-gray-600">Deep expertise in manufacturing, healthcare, and commercial business challenges.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Icon icon={faRocket} size="4xl" color="primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-secondary mb-2">Innovation Leader</h4>
                  <p className="text-gray-600">Pioneering practical AI implementations that deliver real-world business value.</p>
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
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced technology leaders with a proven track record of 
              delivering transformational business results.
            </p>
          </div>

          {leadership.map((leader, index) => (
            <Card key={index} className="overflow-hidden mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-secondary mb-2">{leader.name}</h3>
                  <div className="text-xl text-primary font-semibold mb-4">{leader.role}</div>
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

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four decades of innovation, growth, and business transformation across industries.
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
              The principles that guide our approach to technology, business, and client relationships.
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
              Four decades of measurable impact and industry leadership.
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

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The methodology that has driven our success for over four decades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approach.map((item, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{item.principle}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <h4 className="font-semibold text-secondary mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {item.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <div className="mr-2 mt-1">
                          <Icon icon={faCheck} size="lg" color="primary" />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with Werne Enterprises and leverage four decades of technology leadership 
              to drive your business forward with practical AI and digital transformation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="primary" asChild>
                <Link href="/contact">Start Your Transformation</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="/case-studies">View Our Success Stories</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default AboutPage