import React from 'react'
import Image from 'next/image'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Icon, Badge } from '@/components/ui'
import {
  faBrain,
  faIndustry,
  faGraduationCap,
  faExternalLinkAlt,
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
      color: 'primary',
      image: '/images/products/smarthive-dashboard.jpg'
    },
    {
      title: 'AI Training Programs',
      subtitle: 'Proven AI Education Curriculum',
      description: 'Comprehensive AI training developed and delivered through MEP partnerships. From spreadsheet automation to full AI implementation.',
      features: ['Purdue MEP AI Series', 'AI the Spreadsheet Killer', '12 Week AI Bootcamp', 'Custom Corporate Training'],
      href: '/services/education',
      icon: faGraduationCap,
      color: 'accent'
    },
    {
      title: 'AI Consulting Services',
      subtitle: 'Strategic AI Implementation',
      description: 'AI Readiness Assessments and strategic consulting to help businesses navigate their AI journey with confidence.',
      features: ['AI Readiness Assessment', 'Implementation Strategy', '9 Years Consulting Experience', '30+ Successful Projects'],
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
            <Card key={index} className="h-full overflow-hidden group">
              {platform.image && (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={platform.image}
                    alt={platform.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              )}
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

              {platform.external && (
                <CardFooter>
                  <Button asChild className="w-full">
                    <a href={platform.href} target="_blank" rel="noopener noreferrer">
                      <Icon icon={faExternalLinkAlt} className="mr-2" />
                      {platform.cta}
                    </a>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export { InnovationPortfolioSection }
