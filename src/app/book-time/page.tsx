import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Icon } from '@/components/ui'
import { 
  faCalendarCheck, 
  faBrain, 
  faChartLine, 
  faIndustry, 
  faGraduationCap,
  faClock,
  faUsers,
  faCheckCircle,
  faFileText,
  faCogs,
  faShield,
  faRocket,
  faStar,
  faEnvelope,
  faPhone
} from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'Book Consultation - Schedule Your AI & Technology Assessment | Werne Enterprises',
  description: 'Schedule your free consultation with Werne Enterprises technology experts. Discuss your AI innovation, digital transformation, and business optimization needs.',
}

const BookTimePage = () => {
  const consultationTypes = [
    {
      type: 'AI Innovation Consultation',
      icon: faBrain,
      duration: '60 minutes',
      price: 'Free Initial Consultation',
      description: 'Explore AI opportunities including RAG systems, MCP implementation, and custom AI development for your business.',
      includes: [
        'AI readiness assessment',
        'Technology opportunity analysis',
        'Implementation roadmap discussion',
        'ROI projections and timeline',
        'Next steps recommendations'
      ],
      ideal_for: 'Technical teams and decision makers ready to explore AI solutions',
      popular: true
    },
    {
      type: 'Technology Strategy Session',
      icon: faChartLine,
      duration: '90 minutes',
      price: 'Free Initial Consultation',
      description: 'Comprehensive review of your technology landscape and digital transformation opportunities.',
      includes: [
        'Current technology audit',
        'Digital transformation roadmap',
        'Strategic planning guidance',
        'Investment prioritization',
        'Change management strategy'
      ],
      ideal_for: 'Executives and leadership teams planning major technology initiatives',
      popular: false
    },
    {
      type: 'Industry-Specific Consultation',
      icon: faIndustry,
      duration: '45 minutes',
      price: 'Free Initial Consultation',
      description: 'Focused discussion on manufacturing, healthcare, or commercial business challenges and solutions.',
      includes: [
        'Industry challenge analysis',
        'Regulatory compliance review',
        'Best practices sharing',
        'Solution recommendations',
        'Implementation timeline'
      ],
      ideal_for: 'Industry professionals seeking specialized technology solutions',
      popular: false
    },
    {
      type: 'Training & Education Planning',
      icon: faGraduationCap,
      duration: '30 minutes',
      price: 'Free Initial Consultation',
      description: 'Design custom training programs to build AI and technology capabilities within your organization.',
      includes: [
        'Skill gap assessment',
        'Training program design',
        'Learning objective planning',
        'Resource requirements',
        'Success measurement framework'
      ],
      ideal_for: 'HR leaders and training managers building team capabilities',
      popular: false
    }
  ]

  const preparationChecklist = [
    {
      category: 'Business Information',
      icon: faFileText,
      items: [
        'Current business challenges and pain points',
        'Strategic objectives and goals',
        'Budget considerations and timeline',
        'Key stakeholders and decision makers',
        'Success criteria and measurement methods'
      ]
    },
    {
      category: 'Technical Information',
      icon: faCogs,
      items: [
        'Current technology infrastructure overview',
        'Existing systems and platforms',
        'Data sources and quality assessment',
        'Technical team capabilities',
        'Security and compliance requirements'
      ]
    },
    {
      category: 'Industry Context',
      icon: faShield,
      items: [
        'Industry-specific challenges',
        'Regulatory requirements',
        'Competitive landscape',
        'Market pressures and opportunities',
        'Industry best practices awareness'
      ]
    }
  ]

  const whatToExpect = [
    {
      phase: 'Pre-Consultation',
      description: 'We\'ll send you a brief questionnaire to understand your needs and challenges before our meeting.',
      duration: '5-10 minutes'
    },
    {
      phase: 'Discovery Discussion',
      description: 'We\'ll explore your business challenges, objectives, and current technology landscape.',
      duration: '20-30 minutes'
    },
    {
      phase: 'Solution Exploration',
      description: 'We\'ll discuss potential solutions, approaches, and implementation strategies.',
      duration: '20-30 minutes'
    },
    {
      phase: 'Next Steps Planning',
      description: 'We\'ll outline potential next steps, timelines, and provide preliminary recommendations.',
      duration: '10-15 minutes'
    },
    {
      phase: 'Follow-up Resources',
      description: 'We\'ll send you relevant resources, case studies, and a summary of our discussion.',
      duration: 'Within 24 hours'
    }
  ]

  const calendlyOptions = [
    {
      title: 'Quick Discovery Call',
      duration: '30 minutes',
      description: 'Brief introductory call to understand your needs and determine the best next steps.',
      calendlyUrl: 'https://calendly.com/werne-enterprises/discovery-call'
    },
    {
      title: 'Comprehensive Consultation',
      duration: '60 minutes',
      description: 'In-depth consultation to explore your challenges and develop solution recommendations.',
      calendlyUrl: 'https://calendly.com/werne-enterprises/consultation'
    },
    {
      title: 'Strategy Session',
      duration: '90 minutes',
      description: 'Strategic planning session for major technology initiatives and digital transformation.',
      calendlyUrl: 'https://calendly.com/werne-enterprises/strategy-session'
    }
  ]

  const testimonials = [
    {
      quote: 'The initial consultation provided incredible value. Within 60 minutes, we had a clear roadmap for our AI implementation that saved us months of research.',
      author: 'Sarah Chen',
      title: 'CTO, Manufacturing Solutions Inc.',
      industry: 'Manufacturing'
    },
    {
      quote: 'Deveren\'s expertise in healthcare technology helped us navigate complex compliance requirements while implementing innovative solutions.',
      author: 'Dr. Michael Rodriguez',
      title: 'Chief Medical Officer, Regional Health Network',
      industry: 'Healthcare'
    },
    {
      quote: 'The strategic insights from our consultation directly contributed to our 40% revenue growth in the following year.',
      author: 'Jennifer Walsh',
      title: 'CEO, TechStart Solutions',
      industry: 'Commercial'
    }
  ]

  const faq = [
    {
      question: 'Is the initial consultation really free?',
      answer: 'Yes, absolutely. We believe in providing value upfront and building relationships based on trust and expertise. There are no hidden fees or obligations.'
    },
    {
      question: 'What if I\'m not sure which consultation type is right for me?',
      answer: 'Start with our Quick Discovery Call. We\'ll help you determine the best approach and can always schedule a more comprehensive session if needed.'
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
      question: 'Do you work with companies outside your three core industries?',
      answer: 'While we specialize in manufacturing, healthcare, and commercial business, our technology expertise applies broadly. Contact us to discuss your specific industry.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-20 lg:py-32 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" size="lg" className="mb-6">
              Free Consultation Available
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Book Your{' '}
              <span className="text-primary">Technology</span>{' '}
              Consultation
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Schedule a free consultation with our technology experts to explore how AI innovation 
              and digital transformation can drive your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="#schedule-now">Schedule Free Consultation</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="#consultation-types">Explore Options</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Icon icon={faStar} size="xl" color="primary" className="mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">Free</div>
                <div className="text-gray-300">Initial Consultation</div>
              </div>
              <div>
                <Icon icon={faClock} size="xl" color="accent" className="mb-4" />
                <div className="text-3xl font-bold text-accent mb-2">24hrs</div>
                <div className="text-gray-300">Response Time</div>
              </div>
              <div>
                <Icon icon={faRocket} size="xl" color="warning" className="mb-4" />
                <div className="text-3xl font-bold text-warning mb-2">42+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Schedule Section */}
      <section id="schedule-now" className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Schedule Your Consultation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the consultation format that best fits your needs and schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {calendlyOptions.map((option, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{option.title}</CardTitle>
                  <div className="text-xl text-primary font-semibold">{option.duration}</div>
                  <CardDescription className="text-lg">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                
                <CardFooter>
                  <Button asChild className="w-full" size="lg">
                    <Link href={option.calendlyUrl} target="_blank" rel="noopener noreferrer">
                      Schedule Now
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Prefer a different time or have special requirements?</p>
            <Button asChild variant="outline">
              <Link href="/contact">Contact Us Directly</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Consultation Types */}
      <section id="consultation-types" className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Consultation Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer different types of consultations based on your specific needs and objectives.
            </p>
          </div>

          <div className="space-y-8">
            {consultationTypes.map((consultation, index) => (
              <Card key={index} className={`overflow-hidden ${consultation.popular ? 'ring-2 ring-primary border-primary' : ''}`}>
                {consultation.popular && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="p-8">
                    <div className="mb-6">
                      <Icon icon={consultation.icon} size="2xl" color="primary" className="mb-4" />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-secondary">{consultation.type}</h3>
                      <Badge variant="accent">
                        <Icon icon={faClock} size="xs" className="mr-1" />
                        {consultation.duration}
                      </Badge>
                    </div>
                    
                    <div className="text-xl text-primary font-semibold mb-4">{consultation.price}</div>
                    <p className="text-gray-600 mb-6">{consultation.description}</p>
                    
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <div className="text-sm font-medium text-secondary mb-1">Ideal For</div>
                      <div className="text-sm text-gray-700">{consultation.ideal_for}</div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 bg-gray-50 p-8">
                    <h4 className="text-lg font-semibold text-secondary mb-4">What&apos;s Included</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {consultation.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <Icon icon={faCheckCircle} size="xs" color="primary" className="mr-2 mt-1" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild className="w-full" variant={consultation.popular ? 'primary' : 'outline'}>
                      <Link href="#schedule-now">
                        <span className="flex items-center justify-center">
                          <Icon icon={faCalendarCheck} size="xs" className="mr-2" />
                          Schedule This Consultation
                        </span>
                      </Link>
                    </Button>
                  </div>
                </div>
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
              Get the most value from your consultation by preparing relevant information beforehand.
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
                        <Icon icon={faCheckCircle} size="xs" color="primary" className="mr-2 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Don&apos;t have all this information? No problem! We&apos;ll help you identify what&apos;s most important during our conversation.</p>
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
              Our consultation process is designed to provide maximum value 
              and clear next steps.
            </p>
          </div>

          <div className="space-y-8">
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

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              What Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from leaders who have benefited from our consultation process.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="text-gray-600 mb-4 italic">
                    &quot;{testimonial.quote}&quot;
                  </div>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-secondary">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                    <Badge variant="outline" size="lg" className="mt-2">{testimonial.industry}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our consultation process.
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
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Take the first step toward transforming your business with AI and technology. 
              Schedule your free consultation today and discover what&apos;s possible with 42+ years 
              of proven technology leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" asChild>
                <Link href="#schedule-now">Schedule Free Consultation</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link href="/contact">Contact Us Instead</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default BookTimePage