import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Icon } from '@/components/ui'
import { 
  faIndustry,
  faHeart,
  faShoppingCart,
  faClock,
  faCheckCircle,
  faLightbulb,
  faCogs,
  faRocket,
  faEye,
  faArrowRight,
  faBuilding,
  faHospital,
  faStore,
  faChartBar,
  faPercentage,
  faThumbsUp,
  faCalendar,
  faChessRook,
  faHandshake,
  faBrain,
  faAward
} from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'Case Studies - Proven AI & Technology Success Stories | Werne Enterprises',
  description: 'Explore real-world success stories from our Manufacturing, Healthcare, and Commercial Business clients. See measurable results from 42+ years of technology leadership.',
}

const CaseStudiesPage = () => {
  const featuredCaseStudies = [
    {
      title: 'Automotive Manufacturer Reduces Defects by 45%',
      industry: 'Manufacturing',
      industryIcon: faIndustry,
      client: 'Fortune 500 Automotive Company',
      challenge: 'High defect rates in complex assembly processes causing costly recalls and customer dissatisfaction.',
      solution: 'Implemented AI-powered computer vision quality control system with real-time defect detection and automated sorting.',
      results: [
        '45% reduction in quality defects',
        '$2.3M annual cost savings',
        '80% faster inspection processes',
        '99.5% defect detection accuracy'
      ],
      technologies: ['Computer Vision AI', 'Real-time Analytics', 'Automated Systems', 'Quality Management'],
      timeline: '6 months implementation',
      roi: '18 months',
      featured: true
    },
    {
      title: 'Regional Health System Improves Patient Outcomes by 35%',
      industry: 'Healthcare',
      industryIcon: faHeart,
      client: 'Multi-Hospital Health System',
      challenge: 'Inconsistent clinical decision-making and delayed diagnoses affecting patient care quality.',
      solution: 'Deployed AI clinical decision support system with real-time guidelines and risk assessment algorithms.',
      results: [
        '35% improvement in patient outcomes',
        '25% reduction in diagnostic errors',
        '40% faster treatment decisions',
        '100% HIPAA compliance maintained'
      ],
      technologies: ['Clinical AI', 'EHR Integration', 'Risk Assessment', 'Compliance Monitoring'],
      timeline: '8 months implementation',
      roi: '12 months',
      featured: true
    },
    {
      title: 'E-commerce Platform Increases Conversion by 40%',
      industry: 'Commercial',
      industryIcon: faShoppingCart,
      client: 'National Retail Chain',
      challenge: 'Low online conversion rates and poor customer personalization affecting revenue growth.',
      solution: 'Implemented AI-powered personalization engine with customer behavior analysis and recommendation systems.',
      results: [
        '40% increase in conversion rates',
        '60% improvement in customer engagement',
        '25% growth in average order value',
        '50% reduction in cart abandonment'
      ],
      technologies: ['Personalization AI', 'Customer Analytics', 'Recommendation Engine', 'Behavioral Analysis'],
      timeline: '4 months implementation',
      roi: '6 months',
      featured: true
    }
  ]

  const additionalCaseStudies = [
    {
      title: 'Food Processing Plant Achieves 99.8% Uptime',
      industry: 'Manufacturing',
      client: 'Food & Beverage Manufacturer',
      summary: 'Implemented predictive maintenance AI that reduced unplanned downtime and optimized equipment performance.',
      results: ['99.8% equipment uptime', '30% maintenance cost reduction', '24/7 autonomous operation'],
      timeline: '5 months'
    },
    {
      title: 'Hospital Network Reduces Wait Times by 40%',
      industry: 'Healthcare',
      client: 'Metropolitan Hospital Network',
      summary: 'Deployed intelligent scheduling system that optimized patient flow and resource allocation.',
      results: ['40% reduction in wait times', '25% improvement in patient satisfaction', '35% better resource utilization'],
      timeline: '6 months'
    },
    {
      title: 'Financial Services Firm Automates 70% of Operations',
      industry: 'Commercial',
      client: 'Regional Financial Services Company',
      summary: 'Implemented RPA and AI automation to streamline back-office processes and improve efficiency.',
      results: ['70% process automation', '$1.2M annual savings', '80% accuracy improvement'],
      timeline: '7 months'
    },
    {
      title: 'Electronics Manufacturer Improves Yield by 25%',
      industry: 'Manufacturing',
      client: 'Consumer Electronics Company',
      summary: 'Deployed AI-powered quality control and process optimization for complex electronics manufacturing.',
      results: ['25% yield improvement', '60% faster inspection', '50% defect reduction'],
      timeline: '4 months'
    },
    {
      title: 'Medical Practice Increases Revenue by 30%',
      industry: 'Healthcare',
      client: 'Multi-Specialty Medical Practice',
      summary: 'Optimized scheduling, billing, and patient engagement through integrated technology solutions.',
      results: ['30% revenue increase', '50% faster billing', '40% patient satisfaction improvement'],
      timeline: '3 months'
    },
    {
      title: 'Technology Startup Scales 10x Growth',
      industry: 'Commercial',
      client: 'SaaS Technology Company',
      summary: 'Implemented scalable infrastructure and AI-powered customer acquisition systems.',
      results: ['10x business growth', '200% customer acquisition improvement', '75% operational efficiency gain'],
      timeline: '8 months'
    }
  ]

  const industries = [
    {
      name: 'Manufacturing',
      icon: faBuilding,
      count: '150+',
      avgImprovement: '35%',
      color: 'primary'
    },
    {
      name: 'Healthcare',
      icon: faHospital,
      count: '100+',
      avgImprovement: '30%',
      color: 'accent'
    },
    {
      name: 'Commercial',
      icon: faStore,
      count: '200+',
      avgImprovement: '40%',
      color: 'warning'
    }
  ]

  const metrics = [
    { label: 'Total Projects', value: '500+', icon: faChartBar },
    { label: 'Average ROI', value: '300%', icon: faPercentage },
    { label: 'Client Satisfaction', value: '98%', icon: faThumbsUp },
    { label: 'Years Experience', value: '42+', icon: faCalendar }
  ]

  const successFactors = [
    {
      factor: 'Industry Expertise',
      icon: faChessRook,
      description: 'Deep understanding of specific industry challenges and regulatory requirements ensures relevant solutions.',
      impact: 'Faster implementation and higher adoption rates'
    },
    {
      factor: 'Proven Methodology',
      icon: faAward,
      description: 'Four decades of experience has refined our approach to minimize risk and maximize success.',
      impact: 'Consistent delivery and predictable outcomes'
    },
    {
      factor: 'Technology Leadership',
      icon: faBrain,
      description: 'Early adoption and mastery of emerging technologies provides competitive advantages.',
      impact: 'Cutting-edge solutions with sustainable benefits'
    },
    {
      factor: 'Partnership Approach',
      icon: faHandshake,
      description: 'Long-term partnership mindset ensures ongoing support and continuous optimization.',
      impact: 'Sustained improvements and growing value'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-20 lg:py-32 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" size="lg" className="mb-6">
              Proven Success Stories
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Case Studies &{' '}
              <span className="text-primary">Success</span>{' '}
              Stories
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Discover how our AI innovation and technology solutions have transformed businesses 
              across manufacturing, healthcare, and commercial sectors over 42+ years.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/contact">
                  <Icon icon={faRocket} className="mr-2" />
                  Discuss Your Challenge
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="#featured-cases">
                  <Icon icon={faEye} className="mr-2" />
                  View Success Stories
                </Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {metrics.map((metric, index) => (
                <div key={index}>
                  <div className="mb-2">
                    <Icon icon={metric.icon} size="2xl" color="primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-gray-300">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Industry Overview */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Industry Success Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven track record across three core industries demonstrates 
              consistent value delivery and measurable business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mb-4">
                    <Icon icon={industry.icon} size="3xl" color="primary" />
                  </div>
                  <CardTitle className="text-2xl">{industry.name}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">{industry.count}</div>
                      <div className="text-gray-600">Successful Projects</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent mb-1">{industry.avgImprovement}</div>
                      <div className="text-gray-600">Average Improvement</div>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button asChild className="w-full" variant="outline">
                    <Link href={`/${industry.name.toLowerCase()}`}>
                      <Icon icon={faArrowRight} className="mr-2" />
                      View {industry.name} Solutions
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Case Studies */}
      <section id="featured-cases" className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth case studies showcasing transformational results achieved 
              through our AI and technology solutions.
            </p>
          </div>

          <div className="space-y-12">
            {featuredCaseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center mb-4">
                      <Icon icon={study.industryIcon} size="lg" color="primary" className="mr-3" />
                      <Badge variant="outline" className="mr-4">{study.industry}</Badge>
                      <Badge variant="accent">
                        <Icon icon={faClock} size="xs" className="mr-1" />
                        {study.timeline}
                      </Badge>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-secondary mb-4">{study.title}</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-secondary mb-2">Challenge</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-secondary mb-2">Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-secondary mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" size="lg">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-8">
                    <h4 className="font-semibold text-secondary mb-4">Results Achieved</h4>
                    <ul className="space-y-3 mb-6">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start">
                          <Icon icon={faCheckCircle} size="sm" color="primary" className="mr-2 mt-0.5" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-secondary">ROI Timeline:</span>
                        <span className="text-gray-700">{study.roi}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-secondary">Implementation:</span>
                        <span className="text-gray-700">{study.timeline}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button asChild className="w-full">
                        <Link href="/contact">
                          <Icon icon={faHandshake} className="mr-2" />
                          Discuss Similar Project
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Additional Case Studies */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              More Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional examples of successful transformations across our three core industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalCaseStudies.map((study, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{study.industry}</Badge>
                    <Badge variant="accent" size="lg">{study.timeline}</Badge>
                  </div>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                  <CardDescription>{study.summary}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <h4 className="font-semibold text-secondary mb-3">Key Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start">
                        <Icon icon={faCheckCircle} size="xs" color="primary" className="mr-2 mt-0.5" />
                        <span className="text-gray-700 text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button asChild className="w-full" variant="outline">
                    <Link href="/contact">
                      <Icon icon={faLightbulb} className="mr-2" />
                      Learn More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Success Factors */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Why Our Clients Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The key factors that drive consistent success across all our client engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successFactors.map((factor, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Icon icon={factor.icon} size="lg" color="primary" className="mr-3" />
                    <CardTitle className="text-2xl">{factor.factor}</CardTitle>
                  </div>
                  <CardDescription className="text-lg">
                    {factor.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <div className="text-sm font-medium text-primary mb-1">Impact</div>
                    <div className="text-sm text-gray-700">{factor.impact}</div>
                  </div>
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Join hundreds of successful businesses who have transformed their operations 
              with our AI and technology solutions. Let&apos;s discuss your challenge and 
              create a custom solution that delivers measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" asChild>
                <Link href="/contact">
                  <Icon icon={faRocket} className="mr-2" />
                  Start Your Transformation
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

export default CaseStudiesPage