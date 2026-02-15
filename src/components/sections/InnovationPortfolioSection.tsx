import React from 'react'
import Link from 'next/link'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Icon, Badge } from '@/components/ui'
import { 
  faBrain,
  faIndustry,
  faGraduationCap,
  faExternalLinkAlt,
  faArrowRight,
  faAward,
  faHandshake,
  faShield,
  faChartLine,
  faCheckCircle,
  faRocket
} from '@fortawesome/free-solid-svg-icons'

const InnovationPortfolioSection = () => {
  const platforms = [
    {
      title: 'SmartHive.online',
      subtitle: 'Tribal Knowledge AI Platform',
      description: 'Captures employee tribal knowledge and transforms it into AI personas. Your team\'s expertise becomes an always-available AI assistant that knows your business.',
      features: ['Tribal Knowledge Capture', 'AI Persona Creation', 'Employee Expertise Preservation', 'Custom Business AI'],
      cta: 'Explore SmartHive',
      href: 'https://smarthive.online',
      external: true,
      icon: faBrain,
      color: 'primary'
    },
    {
      title: 'AI Training Programs',
      subtitle: 'Proven AI Education Curriculum',
      description: 'Comprehensive AI training developed and delivered through MEP partnerships. From spreadsheet automation to full AI implementation.',
      features: ['Purdue MEP AI Series', 'AI the Spreadsheet Killer', '12 Week AI Bootcamp', 'Custom Corporate Training'],
      cta: 'View Training Programs',
      href: '/services/education',
      icon: faGraduationCap,
      color: 'accent'
    },
    {
      title: 'AI Consulting Services',
      subtitle: 'Strategic AI Implementation',
      description: 'AI Readiness Assessments and strategic consulting to help businesses navigate their AI journey with confidence.',
      features: ['AI Readiness Assessment', 'Implementation Strategy', '9 Years Consulting Experience', '30+ Successful Projects'],
      cta: 'Start With Free Consultation',
      href: '/book-time',
      icon: faIndustry,
      color: 'warning'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 flex items-center justify-center">
            <Icon icon={faRocket} size="lg" className="mr-3" color="primary" />
            Innovation Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proven technology platforms and methodologies that deliver real-world results 
            across Manufacturing, Healthcare, and Commercial Business sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="mb-4">
                  <Icon icon={platform.icon} size="2xl" color={platform.color as 'primary' | 'accent' | 'warning'} />
                </div>
                <CardTitle className="text-xl">{platform.title}</CardTitle>
                <Badge variant="outline" className="mb-3 w-fit">{platform.subtitle}</Badge>
                <CardDescription className="text-base">
                  {platform.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1">
                <div className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Icon icon={faCheckCircle} color="primary" className="mr-3" size="sm" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                {platform.external ? (
                  <Button asChild className="w-full">
                    <a href={platform.href} target="_blank" rel="noopener noreferrer">
                      <Icon icon={faExternalLinkAlt} className="mr-2" />
                      {platform.cta}
                    </a>
                  </Button>
                ) : (
                  <Button asChild className="w-full">
                    <Link href={platform.href}>
                      <Icon icon={faArrowRight} className="mr-2" />
                      {platform.cta}
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Enterprise Ready Solutions
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Technology Partner | Industry Leader | South Carolina
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <Icon icon={faAward} size="2xl" color="primary" className="mb-2" />
                <div className="font-semibold text-secondary">Proven Track Record</div>
                <div className="text-sm text-gray-600">Ready for immediate project execution</div>
              </div>
              <div>
                <Icon icon={faHandshake} size="2xl" color="accent" className="mb-2" />
                <div className="font-semibold text-secondary">MEP Network Partner</div>
                <div className="text-sm text-gray-600">Proven experience with industry programs</div>
              </div>
              <div>
                <Icon icon={faShield} size="2xl" color="warning" className="mb-2" />
                <div className="font-semibold text-secondary">Compliance Expertise</div>
                <div className="text-sm text-gray-600">Understanding of enterprise requirements</div>
              </div>
              <div>
                <Icon icon={faChartLine} size="2xl" color="secondary" className="mb-2" />
                <div className="font-semibold text-secondary">Performance History</div>
                <div className="text-sm text-gray-600">Successful project delivery track record</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { InnovationPortfolioSection }