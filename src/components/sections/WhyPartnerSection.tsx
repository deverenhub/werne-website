import React from 'react'
import Link from 'next/link'
import { Button, Container, Badge, Icon } from '@/components/ui'
import { 
  faBullseye, 
  faRocket, 
  faCheck, 
  faLightbulb, 
  faChartBar 
} from '@fortawesome/free-solid-svg-icons'

const WhyPartnerSection = () => {
  const advantages = [
    {
      icon: faBullseye,
      title: 'Industry Specialization',
      description: 'Deep expertise in Manufacturing, Healthcare & Commercial Business',
      color: 'secondary'
    },
    {
      icon: faRocket,
      title: 'AI Technology Leadership',
      description: 'Creator of SmartHive.online and custom AI solutions',
      color: 'primary'
    },
    {
      icon: faCheck,
      title: 'Proven Results',
      description: '42+ years of successful technology implementations',
      color: 'success'
    },
    {
      icon: faLightbulb,
      title: 'Practical Solutions',
      description: 'Making enterprise AI accessible and affordable for all businesses',
      color: 'warning'
    },
    {
      icon: faChartBar,
      title: 'Measurable Outcomes',
      description: 'Track record of efficiency gains and cost reductions',
      color: 'accent'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Why Partner With Werne Enterprises
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We bring a unique combination of deep technical expertise, industry-specific knowledge, 
            and a proven track record of business impact. Our specialization in Manufacturing, Healthcare, 
            and Commercial Business positions us as your ideal technology partner.
          </p>
          <Badge variant="primary" size="lg">
            Industry Expertise Meets Innovation Excellence
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <Icon 
                  icon={advantage.icon} 
                  size="4xl" 
                  color={advantage.color as 'primary' | 'secondary' | 'accent' | 'warning' | 'success'} 
                />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-3">{advantage.title}</h3>
              <p className="text-gray-600 text-sm">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether you&apos;re in Manufacturing, Healthcare, or Commercial Business, 
            we have the industry-specific expertise to drive your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Book Industry Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/resources">Download Capability Statement</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { WhyPartnerSection }