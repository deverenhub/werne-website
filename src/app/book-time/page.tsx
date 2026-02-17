import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Icon } from '@/components/ui'
import {
  faCalendarCheck,
  faBrain,
  faChartLine,
  faIndustry,
  faGraduationCap,
  faClock,
  faCheckCircle,
  faFileAlt,
  faCogs,
  faShield,
  faGift
} from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'Book 2 Hours Free AI Consulting | Werne Enterprises',
  description: 'Schedule your FREE 2-hour AI consulting session. Discuss AI training, custom development, or consulting needs with 9 years of experience.',
}

const BookTimePage = () => {
  const consultationTypes = [
    {
      type: 'AI Readiness Assessment',
      icon: faBrain,
      duration: 'Up to 2 hours',
      price: 'FREE',
      description: 'Evaluate your organization\'s preparedness for AI adoption and identify the best opportunities.',
      includes: [
        'Current state analysis',
        'Data readiness evaluation',
        'AI opportunity identification',
        'Implementation roadmap discussion',
        'Next steps recommendations'
      ],
      ideal_for: 'Organizations considering AI adoption',
      popular: true
    },
    {
      type: 'AI Training Discussion',
      icon: faGraduationCap,
      duration: 'Up to 2 hours',
      price: 'FREE',
      description: 'Discuss your team\'s AI training needs and explore our education programs.',
      includes: [
        'Training needs assessment',
        'Program recommendations',
        'Curriculum overview',
        'Implementation planning',
        'Pricing discussion'
      ],
      ideal_for: 'Teams wanting to build AI capabilities',
      popular: false
    },
    {
      type: 'Custom AI Development',
      icon: faChartLine,
      duration: 'Up to 2 hours',
      price: 'FREE',
      description: 'Explore custom AI solutions including SmartHive.online for tribal knowledge capture.',
      includes: [
        'Use case exploration',
        'SmartHive.online demo',
        'Technical requirements',
        'Integration planning',
        'Project scoping'
      ],
      ideal_for: 'Organizations needing custom AI solutions',
      popular: false
    },
    {
      type: 'Industry-Specific Consultation',
      icon: faIndustry,
      duration: 'Up to 2 hours',
      price: 'FREE',
      description: 'Focused discussion on manufacturing, healthcare, or commercial business AI challenges.',
      includes: [
        'Industry challenge analysis',
        'Compliance considerations',
        'Best practices sharing',
        'Solution recommendations',
        'Implementation approach'
      ],
      ideal_for: 'Industry professionals seeking specialized AI guidance',
      popular: false
    }
  ]

  const preparationChecklist = [
    {
      category: 'Business Information',
      icon: faFileAlt,
      items: [
        'Current business challenges and pain points',
        'Strategic objectives and goals',
        'Budget considerations (if known)',
        'Key stakeholders and decision makers'
      ]
    },
    {
      category: 'Technical Information',
      icon: faCogs,
      items: [
        'Current technology infrastructure overview',
        'Existing systems and platforms',
        'Data sources and quality',
        'Technical team capabilities'
      ]
    },
    {
      category: 'Industry Context',
      icon: faShield,
      items: [
        'Industry-specific challenges',
        'Regulatory requirements (if applicable)',
        'Competitive landscape',
        'Timeline considerations'
      ]
    }
  ]

  const whatToExpect = [
    {
      phase: 'Pre-Consultation',
      description: 'We\'ll send you a brief questionnaire to understand your needs before our meeting.',
      duration: '5-10 minutes'
    },
    {
      phase: 'Discovery Discussion',
      description: 'We\'ll explore your business challenges, objectives, and current situation.',
      duration: '30-45 minutes'
    },
    {
      phase: 'Solution Exploration',
      description: 'We\'ll discuss potential solutions, approaches, and how we might help.',
      duration: '45-60 minutes'
    },
    {
      phase: 'Next Steps',
      description: 'We\'ll outline potential next steps and provide preliminary recommendations.',
      duration: '15-30 minutes'
    },
    {
      phase: 'Follow-up',
      description: 'We\'ll send you a summary of our discussion and any relevant resources.',
      duration: 'Within 24 hours'
    }
  ]

  const faq = [
    {
      question: 'Is the 2 hours really free?',
      answer: 'Yes, absolutely. We believe in providing value upfront and building relationships based on trust. The 2 hours are completely free with no hidden fees or obligations.'
    },
    {
      question: 'What if I\'m not sure which consultation type is right for me?',
      answer: 'No problem! Just pick the one that seems closest to your needs. We\'ll adjust our discussion based on what you actually need help with.'
    },
    {
      question: 'Can I bring other team members to the consultation?',
      answer: 'Absolutely! We encourage having relevant stakeholders participate. Please let us know when scheduling so we can plan accordingly.'
    },
    {
      question: 'What happens after the consultation?',
      answer: 'We\'ll provide a summary of our discussion, relevant resources, and clear next steps if you choose to move forward. There\'s no pressure to commit to anything.'
    },
    {
      question: 'Do you work with companies outside manufacturing, healthcare, and commercial?',
      answer: 'While we specialize in these three industries, our AI expertise applies broadly. Contact us to discuss your specific industry.'
    },
    {
      question: 'How quickly can I get on your calendar?',
      answer: 'We typically can schedule consultations within 1-2 weeks. Contact us to find a time that works for you.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-20 lg:py-32 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/team/deveren-werne.jpg"
            alt="Book consultation background"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" size="lg" className="mb-6">
              <Icon icon={faGift} className="mr-2" />
              No Cost, No Obligation
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Get{' '}
              <span className="text-primary">2 Hours FREE</span>{' '}
              AI Consulting
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Start your AI journey with a free consultation. We&apos;ll discuss your challenges,
              explore solutions, and determine if we&apos;re a good fit—no strings attached.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="#schedule-now">Schedule Free Consultation</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="#consultation-types">See What We Discuss</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Icon icon={faGift} size="xl" color="primary" className="mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">2 Hours</div>
                <div className="text-gray-300">Completely Free</div>
              </div>
              <div>
                <Icon icon={faClock} size="xl" color="accent" className="mb-4" />
                <div className="text-3xl font-bold text-accent mb-2">9 Years</div>
                <div className="text-gray-300">Consulting Experience</div>
              </div>
              <div>
                <Icon icon={faCheckCircle} size="xl" color="warning" className="mb-4" />
                <div className="text-3xl font-bold text-warning mb-2">30+</div>
                <div className="text-gray-300">Successful Implementations</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Schedule Section */}
      <section id="schedule-now" className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Schedule Your Free Consultation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start? Contact us to schedule your 2 hours free AI consulting.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="ring-2 ring-primary border-primary overflow-hidden">
              <div className="bg-primary text-white text-center py-3 text-lg font-medium">
                <Icon icon={faGift} className="mr-2" />
                2 Hours FREE AI Consulting - Book Now
              </div>

              <CardContent className="p-0">
                {/* Microsoft Bookings Embed */}
                <iframe
                  src="https://outlook.office.com/bookwithme/user/0b8d296244754190a897efffe17c3f06@tsvmap.com?anonymous&ep=plink"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  scrolling="yes"
                  title="Schedule a consultation with Werne Enterprises"
                  className="w-full min-h-[600px]"
                  allow="geolocation"
                />
              </CardContent>

              <div className="bg-gray-50 p-4 text-center border-t">
                <p className="text-sm text-gray-600">
                  Prefer to call? Reach us at{' '}
                  <a href="tel:864-991-5656" className="text-primary font-medium hover:underline">
                    864-991-5656
                  </a>
                  {' '}or email{' '}
                  <a href="mailto:deveren@werneenterprises.com" className="text-primary font-medium hover:underline">
                    deveren@werneenterprises.com
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Consultation Types */}
      <section id="consultation-types" className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              What We Can Discuss
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your free consultation can focus on any of these areas based on your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {consultationTypes.map((consultation, index) => (
              <Card key={index} className={`h-full ${consultation.popular ? 'ring-2 ring-primary border-primary' : ''}`}>
                {consultation.popular && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Icon icon={consultation.icon} size="xl" color="primary" className="mr-4" />
                    <div>
                      <CardTitle className="text-2xl">{consultation.type}</CardTitle>
                      <div className="flex items-center gap-3 mt-2">
                        <Badge variant="accent">
                          <Icon icon={faClock} size="xs" className="mr-1" />
                          {consultation.duration}
                        </Badge>
                        <Badge variant="primary" className="bg-green-600">
                          {consultation.price}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-lg">{consultation.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-secondary mb-2">What&apos;s Included</h4>
                      <ul className="space-y-2">
                        {consultation.includes.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <Icon icon={faCheckCircle} size="sm" color="primary" className="mr-2 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg">
                      <div className="text-sm font-medium text-secondary mb-1">Ideal For</div>
                      <div className="text-sm text-gray-700">{consultation.ideal_for}</div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="#schedule-now">
                      <Icon icon={faCalendarCheck} className="mr-2" />
                      Schedule This Consultation
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Preparation Guide */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              How to Prepare
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the most value from your consultation by thinking about these areas beforehand.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {preparationChecklist.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="mb-4">
                    <Icon icon={category.icon} size="xl" color="primary" />
                  </div>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <Icon icon={faCheckCircle} size="sm" color="primary" className="mr-2 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">
              Don&apos;t have all this information? No problem! We&apos;ll help you work through it during our conversation.
            </p>
          </div>
        </Container>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our consultation process is designed to provide maximum value and clear next steps.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {whatToExpect.map((phase, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mr-6 flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-secondary">{phase.phase}</h3>
                    <Badge variant="outline">{phase.duration}</Badge>
                  </div>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our free consultation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-left">{item.question}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-secondary text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Take the first step toward AI adoption. Schedule your free 2-hour consultation
              and discover how AI can help your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="primary" asChild>
                <Link href="/contact">
                  <Icon icon={faCalendarCheck} className="mr-2" />
                  Schedule Free Consultation
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default BookTimePage
