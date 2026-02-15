import React from 'react'
import Link from 'next/link'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Icon } from '@/components/ui'
import { faIndustry, faHospital, faBuilding, faCheck } from '@fortawesome/free-solid-svg-icons'

const IndustrySolutionsSection = () => {
  const industries = [
    {
      title: 'Manufacturing Solutions',
      description: 'Transform your manufacturing operations with AI-powered predictive maintenance, quality control, and process optimization.',
      icon: faIndustry,
      color: 'primary',
      features: [
        'Predictive maintenance systems',
        'AI-powered quality control',
        'Production optimization',
        'Smart automation integration'
      ],
      caseStudy: '35% reduction in quality defects through AI vision systems',
      href: '/manufacturing'
    },
    {
      title: 'Healthcare Technology',
      description: 'Improve patient outcomes and operational efficiency with healthcare-specific AI and data analytics solutions.',
      icon: faHospital,
      color: 'accent',
      features: [
        'Operational efficiency systems',
        'Clinical decision support',
        'Regulatory compliance tools',
        'Healthcare data analytics'
      ],
      caseStudy: '25% improvement in patient scheduling efficiency',
      href: '/healthcare'
    },
    {
      title: 'Commercial Business AI',
      description: 'Drive growth and competitive advantage with business intelligence, automation, and customer experience enhancement.',
      icon: faBuilding,
      color: 'warning',
      features: [
        'Business intelligence & analytics',
        'Process automation',
        'Customer experience AI',
        'Digital transformation'
      ],
      caseStudy: '40% increase in customer engagement through AI personalization',
      href: '/commercial'
    }
  ]

  return (
    <section id="industry-solutions" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Specialized Technology for Your Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bring deep industry expertise combined with cutting-edge AI technology to deliver 
            solutions that address your specific challenges and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="h-full group animate-slide-up" 
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}
              glow
              hover
            >
              <CardHeader>
                <div className="mb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Icon 
                    icon={industry.icon} 
                    size="4xl" 
                    color={industry.color as 'primary' | 'accent' | 'warning'}
                    className="relative z-10 group-hover:scale-110 transition-transform duration-300 group-hover:animate-bounce-gentle"
                  />
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">{industry.title}</CardTitle>
                <CardDescription className="text-lg group-hover:text-gray-900 transition-colors duration-300">
                  {industry.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1">
                <ul className="space-y-3 mb-6">
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="mr-2 mt-1">
                        <Icon icon={faCheck} size="lg" color="success" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300 border border-transparent group-hover:border-primary/20">
                  <div className="text-sm font-medium text-gray-500 mb-1 group-hover:text-primary transition-colors duration-300">Case Study Result</div>
                  <div className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300 font-medium">{industry.caseStudy}</div>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button asChild className="w-full group-hover:shadow-lg" shimmer>
                  <Link href={industry.href}>Explore {industry.title}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/case-studies">View All Case Studies</Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}

export { IndustrySolutionsSection }