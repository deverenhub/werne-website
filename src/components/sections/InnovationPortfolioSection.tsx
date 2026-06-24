import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Icon, Badge } from '@/components/ui'
import { faArrowUpRightFromSquare, faCheck } from '@fortawesome/free-solid-svg-icons'

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
      image: '/images/products/smarthive-dashboard.jpg',
      imageAlt: 'SmartHive AI platform dashboard for capturing tribal knowledge'
    },
    {
      title: 'AI Training Programs',
      subtitle: 'AI Education for Businesses & MEPs',
      description: 'Five courses developed for businesses and MEPs, including classes written and delivered for Purdue MEP. From spreadsheet automation to full AI adoption.',
      features: ['Wrote & delivered Purdue MEP classes', 'Five courses for businesses & MEPs', 'AI the Spreadsheet Killer', 'Custom corporate training'],
      cta: 'Explore Training',
      href: '/services/education',
      image: '/images/products/ai-training.jpg',
      imageAlt: 'AI training workshop with professionals learning AI implementation'
    },
    {
      title: 'AI Consulting Services',
      subtitle: 'Strategic AI Implementation',
      description: 'AI Readiness Assessments and strategic consulting to help businesses navigate their AI journey with confidence - backed by 27+ years of real systems experience.',
      features: ['AI Readiness Assessment', 'Implementation strategy', '27+ years of systems experience', 'Production AI we\'ve built & deployed'],
      cta: 'Book a Consultation',
      href: '/book-time',
      image: '/images/products/ai-consulting.jpg',
      imageAlt: 'AI consulting session with business strategy planning'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
            Innovation Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Proven platforms and methodologies
          </h2>
          <p className="text-xl text-gray-600">
            Proven technology platforms and methodologies that deliver real-world results
            across Manufacturing, Healthcare, and Commercial Business sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <Card key={index} className="h-full flex flex-col overflow-hidden">
              {platform.image && (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={platform.image}
                    alt={platform.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{platform.title}</CardTitle>
                <Badge variant="outline" className="mb-3 w-fit">{platform.subtitle}</Badge>
                <CardDescription className="text-base">
                  {platform.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Icon
                        icon={faCheck}
                        size="xs"
                        className="mt-1 !text-[#2E7D32] shrink-0"
                      />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                {platform.external ? (
                  <Button asChild className="w-full">
                    <a href={platform.href} target="_blank" rel="noopener noreferrer">
                      <Icon icon={faArrowUpRightFromSquare} className="mr-2" size="xs" />
                      {platform.cta}
                      <span className="sr-only">(opens in new tab)</span>
                    </a>
                  </Button>
                ) : (
                  <Button asChild className="w-full">
                    <Link href={platform.href}>{platform.cta}</Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export { InnovationPortfolioSection }
