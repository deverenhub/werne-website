import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Icon } from '@/components/ui'
import ContactForm from '@/components/forms/ContactForm'
import {
  faCalendarCheck,
  faEnvelope,
  faPhone,
  faBrain,
  faChartLine,
  faIndustry,
  faGraduationCap,
  faCheckCircle,
  faMapMarkerAlt,
  faBusinessTime,
  faQuestionCircle,
  faRocket,
  faHandshake,
  faGlobeAmericas,
  faHeadset,
  faUsers
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const metadata: Metadata = {
  title: 'Contact Werne Enterprises - Talk With Deveren Werne',
  description: 'Reach Deveren Werne directly to discuss practical AI for your manufacturing or business team. Start with 2 hours of free AI consulting.',
}

const ContactPage = () => {
  const contactMethods = [
    {
      method: 'Book Time With Deveren',
      icon: faCalendarCheck,
      description: 'Start with 2 hours of free AI consulting to talk through your goals and what is practical for your team.',
      action: 'Schedule Now',
      href: '/book-time',
      primary: true
    },
    {
      method: 'Email',
      icon: faEnvelope,
      description: 'Send me a note about your project, timeline, and the problems you are trying to solve.',
      action: 'Send Email',
      href: 'mailto:deveren@werneenterprises.com',
      primary: false
    },
    {
      method: 'Phone',
      icon: faPhone,
      description: 'Call directly to talk through an urgent project or an immediate question.',
      action: 'Call Now',
      href: 'tel:+1-864-991-5656',
      primary: false
    },
    {
      method: 'LinkedIn',
      icon: faLinkedin,
      description: 'Connect with Deveren on LinkedIn to follow the work and stay in touch.',
      action: 'Connect',
      href: 'https://linkedin.com/company/werne-enterprises',
      primary: false
    }
  ]

  const serviceAreas = [
    {
      service: 'AI Readiness Assessment',
      icon: faBrain,
      description: 'A practical look at where AI can actually help your business, using my own AI Readiness Assessment methodology.',
      ideal_for: 'Teams and decision makers deciding where to start with AI'
    },
    {
      service: 'AI Strategy Conversation',
      icon: faChartLine,
      description: 'A grounded review of your systems and a realistic roadmap for adopting and deploying AI that ships.',
      ideal_for: 'Owners and leaders planning their next technology move'
    },
    {
      service: 'Industry Solutions Review',
      icon: faIndustry,
      description: 'A focused discussion on the specific challenges in manufacturing, healthcare and medical device, or commercial business, including compliance-aware work spanning ITAR, CMMC, Title 21 CFR Part 11, CUI, and medical-device DHRs.',
      ideal_for: 'Manufacturers and businesses with regulated or specialized needs'
    },
    {
      service: 'Education & Training Planning',
      icon: faGraduationCap,
      description: 'Plan AI education and training for your team, drawing on five courses developed for businesses and MEPs and classes written and delivered for Purdue MEP.',
      ideal_for: 'Leaders building real AI skills across their team'
    }
  ]

  const faq = [
    {
      question: 'Who will I actually be working with?',
      answer: 'Me, directly. Werne Enterprises is a solo practice, so you work with Deveren from the first conversation through design and deployment. No handoffs to a team you have never met.'
    },
    {
      question: 'What should I prepare for our first conversation?',
      answer: 'Bring a sense of your current systems, the business problems you are trying to solve, and what a good outcome would look like. If you can, have the people closest to those problems in the room.'
    },
    {
      question: 'How quickly can we start after we talk?',
      answer: 'It depends on scope. Smaller engagements can begin quickly, and larger AI work starts once we have agreed on a clear plan. I will give you an honest, specific timeline based on your situation.'
    },
    {
      question: 'Do you work with businesses outside manufacturing, healthcare, and commercial?',
      answer: 'Those are the areas I focus on, but 27+ years of real systems experience applies well beyond them. Reach out and we can talk through whether it is a fit for your business.'
    },
    {
      question: 'Do you help with compliance-sensitive environments?',
      answer: 'Yes. I help regulated manufacturers adopt AI without breaking compliance, with experience spanning ITAR, CMMC, Title 21 CFR Part 11, CUI, and medical-device DHRs.'
    },
    {
      question: 'Do you stay involved after a solution is deployed?',
      answer: 'Yes. My goal is to be a long-term partner, not a one-off vendor, so I stay available to support, tune, and extend what we build together.'
    }
  ]

  const offices = [
    {
      location: 'Headquarters',
      address: 'Greenville, SC',
      phone: '864-991-5656',
      email: 'deveren@werneenterprises.com',
      hours: 'Monday - Friday: 9:00 AM - 5:00 PM EST'
    }
  ]

  const responseTime = [
    {
      method: 'Consultation Requests',
      icon: faCalendarCheck,
      time: 'Within 24 hours',
      description: 'I\'ll reply to get your free AI consulting session on the calendar'
    },
    {
      method: 'General Inquiries',
      icon: faEnvelope,
      time: 'Same business day',
      description: 'Email replies during business hours (9 AM - 5 PM EST)'
    },
    {
      method: 'Active Projects',
      icon: faHeadset,
      time: 'Prompt and direct',
      description: 'If we are working together, you reach me directly, not a queue'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-20 lg:py-32 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/team/deveren-werne.jpg"
            alt="Contact background"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" size="lg" className="mb-6">
              Get Started Today
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Contact{' '}
              <span className="text-primary">Werne</span>{' '}
              Enterprises
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Want to put practical AI to work in your business? Start with 2 hours of
              free AI consulting with Deveren and we&apos;ll figure out what actually makes sense.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/book-time">
                  <span className="flex items-center">
                    <Icon icon={faCalendarCheck} size="sm" className="mr-2" />
                    Book 2 Hours Free
                  </span>
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="#contact-options">
                  <span className="flex items-center">
                    <Icon icon={faHandshake} size="sm" className="mr-2" />
                    View Contact Options
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Methods */}
      <section id="contact-options" className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pick whatever works best for you. However you reach out, you&apos;re talking
              directly with Deveren about what practical AI could do for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`text-center h-full ${method.primary ? 'ring-2 ring-primary border-primary' : ''}`}>
                {method.primary && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-medium rounded-t-xl">
                    Recommended
                  </div>
                )}

                <CardHeader>
                  <div className="mb-4">
                    <Icon
                      icon={method.icon}
                      size="2xl"
                      color={method.primary ? 'primary' : 'secondary'}
                    />
                  </div>
                  <CardTitle className="text-xl">{method.method}</CardTitle>
                  <CardDescription>
                    {method.description}
                  </CardDescription>
                </CardHeader>

                <CardFooter>
                  <Button
                    asChild
                    className="w-full"
                    variant={method.primary ? 'primary' : 'outline'}
                  >
                    <Link href={method.href}>{method.action}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Consultation Types */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Consultation Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A few ways we can start, depending on where you are. Each one begins with your
              2 hours of free AI consulting.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceAreas.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="mb-4">
                    <Icon icon={service.icon} size="xl" color="primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.service}</CardTitle>
                  <CardDescription className="text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-secondary flex items-center">
                        <Icon icon={faUsers} size="xs" className="mr-2" />
                        Ideal For:
                      </span>
                      <p className="text-gray-700 mt-1">{service.ideal_for}</p>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/book-time">
                      <span className="flex items-center justify-center">
                        <Icon icon={faCalendarCheck} size="xs" className="mr-2" />
                        Schedule This Consultation
                      </span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Response Times */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Response Times
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I keep communication simple and prompt. Here&apos;s roughly when you can expect to hear back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {responseTime.map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mb-4">
                    <Icon icon={item.icon} size="xl" color="accent" />
                  </div>
                  <CardTitle className="text-xl">{item.method}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{item.time}</div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Office Information */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Office Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us in person or reach out through any of our contact methods.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {offices.map((office, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{office.location}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-secondary mb-1 flex items-center">
                        <Icon icon={faMapMarkerAlt} size="xs" className="mr-2" />
                        Address
                      </h4>
                      <p className="text-gray-700 whitespace-pre-line">{office.address}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-secondary mb-1 flex items-center">
                        <Icon icon={faPhone} size="xs" className="mr-2" />
                        Phone
                      </h4>
                      <p className="text-gray-700">{office.phone}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-secondary mb-1 flex items-center">
                        <Icon icon={faEnvelope} size="xs" className="mr-2" />
                        Email
                      </h4>
                      <p className="text-gray-700">{office.email}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-secondary mb-1 flex items-center">
                        <Icon icon={faBusinessTime} size="xs" className="mr-2" />
                        Business Hours
                      </h4>
                      <p className="text-gray-700">{office.hours}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gray-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center">
                <Icon icon={faGlobeAmericas} size="lg" color="primary" className="mr-3" />
                Rooted in SC, Working Wherever You Are
              </h3>
              <p className="text-gray-600 mb-6">
                Based in Greenville, SC, I work with manufacturers and businesses both nearby
                and beyond, through on-site visits, remote sessions, and virtual delivery.
              </p>

              <div className="space-y-3">
                <div className="flex items-center">
                  <Icon icon={faCheckCircle} size="xs" color="primary" className="mr-3" />
                  <span className="text-gray-700">On-site visits when it helps</span>
                </div>
                <div className="flex items-center">
                  <Icon icon={faCheckCircle} size="xs" color="primary" className="mr-3" />
                  <span className="text-gray-700">Remote design, deployment, and support</span>
                </div>
                <div className="flex items-center">
                  <Icon icon={faCheckCircle} size="xs" color="primary" className="mr-3" />
                  <span className="text-gray-700">Virtual training and workshops</span>
                </div>
                <div className="flex items-center">
                  <Icon icon={faCheckCircle} size="xs" color="primary" className="mr-3" />
                  <span className="text-gray-700">You work directly with Deveren, start to finish</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <ContactForm
              title="Send a Message"
              subtitle="Fill out the form below and I'll get back to you within 24 hours. For anything urgent, please call directly."
            />
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 flex items-center justify-center">
              <Icon icon={faQuestionCircle} size="xl" color="accent" className="mr-4" />
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A few things people ask before we start working together.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-left">{item.question}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Have a different question?</p>
            <Button asChild variant="outline">
              <Link href="mailto:deveren@werneenterprises.com">
                <span className="flex items-center">
                  <Icon icon={faEnvelope} size="xs" className="mr-2" />
                  Ask Us Directly
                </span>
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center">
              <Icon icon={faRocket} size="xl" className="mr-4" />
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Let&apos;s talk about practical AI for your business. Book your 2 hours of free
              AI consulting and we&apos;ll figure out the right first step together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="primary" asChild>
                <Link href="/book-time">
                  <span className="flex items-center">
                    <Icon icon={faCalendarCheck} size="sm" className="mr-2" />
                    Book 2 Hours Free
                  </span>
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link href="mailto:deveren@werneenterprises.com">
                  <span className="flex items-center">
                    <Icon icon={faEnvelope} size="sm" className="mr-2" />
                    Send Email Instead
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default ContactPage
