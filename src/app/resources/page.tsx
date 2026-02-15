import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Icon } from '@/components/ui'
import { 
  faBook,
  faDownload,
  faChartLine,
  faGraduationCap,
  faClipboardCheck,
  faIndustry,
  faHospital,
  faStore,
  faFileAlt,
  faClock,
  faEye,
  faEnvelope,
  faCalendarAlt,
  faVideo,
  faHandshake,
  faCogs,
  faUniversity,
  faCheckCircle,
  faStar,
  faTools,
  faNewspaper,
  faPlay,
  faCalculator,
  faFilePdf,
  faMicrophone,
  faCalendar,
  faEnvelopeOpen
} from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'Resources - AI & Technology Insights | Werne Enterprises',
  description: 'Access valuable resources, whitepapers, guides, and insights on AI innovation, digital transformation, and technology leadership from Werne Enterprises.',
}

const ResourcesPage = () => {
  const featuredResources = [
    {
      title: 'AI Implementation Guide for Manufacturing',
      type: 'Whitepaper',
      description: 'Comprehensive guide covering AI strategy, implementation best practices, and ROI measurement for manufacturing organizations.',
      topics: ['AI Strategy', 'Implementation Planning', 'ROI Measurement', 'Best Practices'],
      downloadSize: '2.5 MB PDF',
      readTime: '25 minutes',
      category: 'Manufacturing',
      featured: true
    },
    {
      title: 'Healthcare AI Compliance Framework',
      type: 'Technical Guide',
      description: 'Essential framework for implementing AI solutions in healthcare while maintaining HIPAA compliance and patient data security.',
      topics: ['HIPAA Compliance', 'Data Security', 'AI Ethics', 'Regulatory Requirements'],
      downloadSize: '1.8 MB PDF',
      readTime: '20 minutes',
      category: 'Healthcare',
      featured: true
    },
    {
      title: 'Commercial AI ROI Calculator',
      type: 'Interactive Tool',
      description: 'Calculate potential return on investment for AI initiatives in commercial business environments with our interactive assessment tool.',
      topics: ['ROI Analysis', 'Cost-Benefit', 'Business Impact', 'Financial Planning'],
      downloadSize: 'Online Tool',
      readTime: '10 minutes',
      category: 'Commercial',
      featured: true
    }
  ]

  const resourceCategories = [
    {
      category: 'Industry Reports',
      icon: faChartLine,
      description: 'In-depth analysis of AI adoption trends and technology developments across industries.',
      resources: [
        {
          title: '2025 Manufacturing AI Trends Report',
          description: 'Annual analysis of AI adoption in manufacturing with industry benchmarks and predictions.',
          type: 'Industry Report',
          size: '3.2 MB'
        },
        {
          title: 'Healthcare Technology Transformation Study',
          description: 'Comprehensive study on digital transformation in healthcare organizations.',
          type: 'Research Study',
          size: '2.8 MB'
        },
        {
          title: 'Commercial AI Market Analysis',
          description: 'Market research on AI adoption in commercial business sectors.',
          type: 'Market Report',
          size: '2.1 MB'
        }
      ]
    },
    {
      category: 'Implementation Guides',
      icon: faTools,
      description: 'Step-by-step guides for implementing AI and technology solutions in your organization.',
      resources: [
        {
          title: 'RAG System Implementation Playbook',
          description: 'Complete guide to implementing Retrieval-Augmented Generation systems.',
          type: 'Technical Guide',
          size: '4.1 MB'
        },
        {
          title: 'Digital Transformation Roadmap Template',
          description: 'Customizable roadmap template for planning digital transformation initiatives.',
          type: 'Template',
          size: '1.5 MB'
        },
        {
          title: 'AI Project Management Framework',
          description: 'Project management methodology specifically designed for AI implementation projects.',
          type: 'Framework',
          size: '2.3 MB'
        }
      ]
    },
    {
      category: 'Training Materials',
      icon: faGraduationCap,
      description: 'Educational resources and training materials for building AI and technology capabilities.',
      resources: [
        {
          title: 'AI Literacy Executive Briefing',
          description: 'Executive-level overview of AI concepts, applications, and strategic considerations.',
          type: 'Presentation',
          size: '5.2 MB'
        },
        {
          title: 'Technical Team AI Workshop Materials',
          description: 'Hands-on workshop materials for technical teams learning AI implementation.',
          type: 'Workshop Kit',
          size: '12.3 MB'
        },
        {
          title: 'Change Management for AI Adoption',
          description: 'Training materials for managing organizational change during AI adoption.',
          type: 'Training Course',
          size: '3.7 MB'
        }
      ]
    },
    {
      category: 'Assessment Tools',
      icon: faClipboardCheck,
      description: 'Interactive tools and assessments to evaluate your readiness for AI and technology adoption.',
      resources: [
        {
          title: 'AI Readiness Assessment',
          description: 'Comprehensive assessment tool to evaluate your organization\'s AI readiness.',
          type: 'Online Assessment',
          size: 'Interactive'
        },
        {
          title: 'Technology Maturity Evaluation',
          description: 'Assessment framework for evaluating current technology maturity levels.',
          type: 'Evaluation Tool',
          size: 'Excel Template'
        },
        {
          title: 'ROI Calculator for AI Projects',
          description: 'Financial calculator to estimate return on investment for AI initiatives.',
          type: 'Calculator',
          size: 'Online Tool'
        }
      ]
    }
  ]

  const webinars = [
    {
      title: 'AI in Manufacturing: Real-World Applications and Results',
      date: 'January 25, 2025',
      duration: '60 minutes',
      presenter: 'Deveren Werne, CEO',
      description: 'Explore practical AI applications in manufacturing with real case studies and implementation strategies.',
      status: 'Available On-Demand'
    },
    {
      title: 'Healthcare AI: Balancing Innovation with Compliance',
      date: 'February 15, 2025',
      duration: '45 minutes',
      presenter: 'Industry Expert Panel',
      description: 'Navigate the complexities of implementing AI in healthcare while maintaining regulatory compliance.',
      status: 'Available On-Demand'
    },
    {
      title: 'Building Your AI Strategy: A Leadership Perspective',
      date: 'March 20, 2025',
      duration: '90 minutes',
      presenter: 'Executive Leadership Team',
      description: 'Strategic framework for developing and executing successful AI initiatives.',
      status: 'Upcoming'
    }
  ]

  const newsletters = [
    {
      name: 'AI Innovation Insights',
      frequency: 'Monthly',
      description: 'Latest developments in AI technology, implementation best practices, and industry trends.',
      topics: ['AI Technology Updates', 'Implementation Tips', 'Industry News', 'Case Study Highlights']
    },
    {
      name: 'Manufacturing Tech Digest',
      frequency: 'Bi-weekly',
      description: 'Technology trends, automation insights, and digital transformation news for manufacturing professionals.',
      topics: ['Smart Manufacturing', 'IIoT Updates', 'Process Optimization', 'Regulatory Changes']
    },
    {
      name: 'Healthcare Technology Brief',
      frequency: 'Monthly',
      description: 'Healthcare-specific technology updates, compliance news, and digital health innovations.',
      topics: ['Health Tech Innovation', 'Compliance Updates', 'Digital Health Trends', 'Implementation Guides']
    }
  ]

  const partnerships = [
    {
      name: 'Manufacturing Extension Partnership (MEP)',
      type: 'Strategic Alliance',
      description: 'Collaboration with 15 MEP centers to provide technology solutions and consulting services to small and medium manufacturers.',
      benefits: ['Cost-effective consulting', 'Proven methodologies', 'Local support network']
    },
    {
      name: 'Technology Vendor Network',
      type: 'Technology Partnership',
      description: 'Strategic partnerships with leading technology vendors to deliver integrated solutions.',
      benefits: ['Best-in-class technology', 'Preferential pricing', 'Technical support']
    },
    {
      name: 'Academic Research Institutions',
      type: 'Research Collaboration',
      description: 'Partnerships with universities and research institutions for emerging technology development.',
      benefits: ['Cutting-edge research', 'Early technology access', 'Talent pipeline']
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-20 lg:py-32 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" size="lg" className="mb-6">
              <Icon icon={faBook} className="mr-2" />
              Knowledge & Resources
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              AI & Technology{' '}
              <span className="text-primary">Resources</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Access valuable insights, guides, and tools from our 42+ years of technology leadership. 
              Download resources to accelerate your AI and digital transformation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="#featured-resources">
                  <Icon icon={faEye} className="mr-2" />
                  Explore Resources
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="#newsletter">
                  <Icon icon={faEnvelopeOpen} className="mr-2" />
                  Subscribe to Updates
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Resources */}
      <section id="featured-resources" className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 flex items-center justify-center">
              <Icon icon={faStar} size="lg" className="mr-3" color="primary" />
              Featured Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential guides and tools for implementing AI and technology solutions 
              in your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="h-full ring-2 ring-primary border-primary">
                <div className="bg-primary text-white text-center py-2 text-sm font-medium rounded-t-xl flex items-center justify-center">
                  <Icon icon={faStar} className="mr-2" />
                  Featured Resource
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">
                      <Icon 
                        icon={resource.category === 'Manufacturing' ? faIndustry : resource.category === 'Healthcare' ? faHospital : faStore} 
                        className="mr-1" 
                      />
                      {resource.category}
                    </Badge>
                    <Badge variant="accent" size="lg">
                      <Icon 
                        icon={resource.type === 'Whitepaper' ? faFileAlt : resource.type === 'Technical Guide' ? faTools : faCalculator} 
                        className="mr-1" 
                      />
                      {resource.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-secondary mb-2">Topics Covered</h4>
                      <div className="flex flex-wrap gap-1">
                        {resource.topics.map((topic, topicIndex) => (
                          <Badge key={topicIndex} variant="outline" size="lg">{topic}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Icon icon={faFilePdf} color="primary" className="mr-2" />
                        <div>
                          <span className="font-medium text-secondary">Size:</span>
                          <div className="text-gray-700">{resource.downloadSize}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Icon icon={faClock} color="primary" className="mr-2" />
                        <div>
                          <span className="font-medium text-secondary">Read Time:</span>
                          <div className="text-gray-700">{resource.readTime}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/contact">
                      <Icon icon={faDownload} className="mr-2" />
                      Request Access
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 flex items-center justify-center">
              <Icon icon={faBook} size="lg" className="mr-3" color="primary" />
              Resource Library
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive collection of resources organized by category to support 
              your technology initiatives.
            </p>
          </div>

          <div className="space-y-12">
            {resourceCategories.map((category, index) => (
              <div key={index}>
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <Icon icon={category.icon} size="2xl" color="primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary">{category.category}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.resources.map((resource, resourceIndex) => (
                    <Card key={resourceIndex}>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" size="lg">{resource.type}</Badge>
                          <span className="text-xs text-gray-500">{resource.size}</span>
                        </div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {resource.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardFooter>
                        <Button asChild className="w-full" variant="outline">
                          <Link href="/contact">
                            <Icon icon={faDownload} className="mr-2" />
                            Download
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Webinars */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 flex items-center justify-center">
              <Icon icon={faVideo} size="lg" className="mr-3" color="primary" />
              Webinars & Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our expert-led webinars and events to stay current with the latest 
              AI and technology trends.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      variant={webinar.status === 'Upcoming' ? 'accent' : 'outline'}
                      size="lg"
                    >
                      <Icon icon={webinar.status === 'Upcoming' ? faCalendar : faPlay} className="mr-1" />
                      {webinar.status}
                    </Badge>
                    <span className="text-xs text-gray-500 flex items-center">
                      <Icon icon={faClock} className="mr-1" />
                      {webinar.duration}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{webinar.title}</CardTitle>
                  <div className="text-sm text-gray-600 flex items-center">
                    <Icon icon={faCalendarAlt} className="mr-2" />
                    {webinar.date} • 
                    <Icon icon={faMicrophone} className="ml-2 mr-1" />
                    {webinar.presenter}
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <p className="text-gray-600">{webinar.description}</p>
                </CardContent>
                
                <CardFooter>
                  <Button asChild className="w-full" variant={webinar.status === 'Upcoming' ? 'primary' : 'outline'}>
                    <Link href="/contact">
                      <Icon icon={webinar.status === 'Upcoming' ? faCalendar : faPlay} className="mr-2" />
                      {webinar.status === 'Upcoming' ? 'Register Now' : 'Watch Recording'}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 flex items-center justify-center">
              <Icon icon={faNewspaper} size="lg" className="mr-3" color="primary" />
              Stay Informed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Subscribe to our newsletters for the latest insights, trends, and resources 
              in AI and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {newsletters.map((newsletter, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{newsletter.name}</CardTitle>
                  <div className="text-primary font-semibold">{newsletter.frequency}</div>
                  <CardDescription>{newsletter.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <h4 className="font-semibold text-secondary mb-3">What You&apos;ll Get</h4>
                  <ul className="space-y-2 text-left">
                    {newsletter.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start">
                        <Icon icon={faCheckCircle} color="primary" className="mr-2 mt-0.5" size="sm" />
                        <span className="text-gray-700 text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/contact">
                      <Icon icon={faEnvelope} className="mr-2" />
                      Subscribe
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 flex items-center justify-center">
              <Icon icon={faHandshake} size="lg" className="mr-3" color="primary" />
              Strategic Partnerships
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic partnerships enhance our capabilities and provide additional 
              value to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnerships.map((partnership, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <Badge variant="outline" className="mb-4 w-fit">
                    <Icon 
                      icon={partnership.type === 'Strategic Alliance' ? faHandshake : partnership.type === 'Technology Partnership' ? faCogs : faUniversity} 
                      className="mr-1" 
                    />
                    {partnership.type}
                  </Badge>
                  <CardTitle className="text-xl">{partnership.name}</CardTitle>
                  <CardDescription>{partnership.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <h4 className="font-semibold text-secondary mb-3">Client Benefits</h4>
                  <ul className="space-y-2">
                    {partnership.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <Icon icon={faCheckCircle} color="primary" className="mr-2 mt-0.5" size="sm" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
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
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Personalized Guidance?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              While our resources provide valuable insights, nothing replaces personalized consultation. 
              Schedule a session with our experts to discuss your specific challenges and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" asChild>
                <Link href="/contact">
                  <Icon icon={faCalendarAlt} className="mr-2" />
                  Schedule Consultation
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link href="/services">
                  <Icon icon={faCogs} className="mr-2" />
                  Explore Our Services
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