import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { ParallaxImage, Button, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Icon } from '@/components/ui'
import ContactForm from '@/components/forms/ContactForm'
import {
  faCalendarCheck,
  faEnvelope,
  faPhone,
  faCheck
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
      description: 'A practical look at where AI can actually help your business, using my own AI Readiness Assessment methodology.',
      ideal_for: 'Teams and decision makers deciding where to start with AI'
    },
    {
      service: 'AI Strategy Conversation',
      description: 'A grounded review of your systems and a realistic roadmap for adopting and deploying AI that ships.',
      ideal_for: 'Owners and leaders planning their next technology move'
    },
    {
      service: 'Industry Solutions Review',
      description: 'A focused discussion on the specific challenges in manufacturing, healthcare and medical device, or commercial business, including compliance-aware work spanning ITAR, CMMC, Title 21 CFR Part 11, CUI, and medical-device DHRs.',
      ideal_for: 'Manufacturers and businesses with regulated or specialized needs'
    },
    {
      service: 'Education & Training Planning',
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
      time: 'Within 24 hours',
      description: 'I\'ll reply to get your free AI consulting session on the calendar'
    },
    {
      method: 'General Inquiries',
      time: 'Same business day',
      description: 'Email replies during business hours (9 AM - 5 PM EST)'
    },
    {
      method: 'Active Projects',
      time: 'Prompt and direct',
      description: 'If we are working together, you reach me directly, not a queue'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary py-16 lg:py-24 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage src="/images/team/deveren-werne.jpg" alt="Deveren Werne, AI Solution Architect and founder of Werne Enterprises" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/50" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" size="lg" className="mb-6">
              Get Started Today
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Contact{' '}
              <span className="text-primary">Werne</span>{' '}
              Enterprises
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Want to put practical AI to work in your business? Start with 2 hours of
              free AI consulting with Deveren and we&apos;ll figure out what actually makes sense.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" asChild>
                <Link href="/book-time">Book 2 Hours Free</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="#contact-options">View Contact Options</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Methods */}
      <section id="contact-options" className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Reach Out However Works Best
            </h2>
            <p className="text-xl text-gray-600">
              Pick whatever works best for you. However you reach out, you&apos;re talking
              directly with Deveren about what practical AI could do for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`h-full ${method.primary ? 'ring-2 ring-primary border-primary' : ''}`}>
                {method.primary && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-medium rounded-t-2xl">
                    Recommended
                  </div>
                )}

                <CardHeader>
                  <div className="mb-4">
                    <Icon icon={method.icon} size="sm" className="text-[#2E7D32]" />
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
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              Consultation Options
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              A Few Ways We Can Start
            </h2>
            <p className="text-xl text-gray-600">
              A few ways we can start, depending on where you are. Each one begins with your
              2 hours of free AI consulting.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceAreas.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{service.service}</CardTitle>
                  <CardDescription className="text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div>
                    <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32]">
                      Ideal For
                    </span>
                    <p className="text-gray-700 mt-1">{service.ideal_for}</p>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/book-time">Schedule This Consultation</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Response Times */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              Response Times
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              When You Can Expect to Hear Back
            </h2>
            <p className="text-xl text-gray-600">
              I keep communication simple and prompt. Here&apos;s roughly when you can expect to hear back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {responseTime.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{item.method}</CardTitle>
                  <div className="text-2xl font-bold text-[#2E7D32]">{item.time}</div>
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
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              Office Information
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Where to Find Us
            </h2>
            <p className="text-xl text-gray-600">
              Reach out through any of the contact methods below, or connect in person.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              {offices.map((office, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{office.location}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-1">
                        Address
                      </h4>
                      <p className="text-gray-700 whitespace-pre-line">{office.address}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-1">
                        Phone
                      </h4>
                      <p className="text-gray-700">{office.phone}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-1">
                        Email
                      </h4>
                      <p className="text-gray-700">{office.email}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-1">
                        Business Hours
                      </h4>
                      <p className="text-gray-700">{office.hours}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Rooted in SC, Working Wherever You Are
              </h3>
              <p className="text-gray-600 mb-6">
                Based in Greenville, SC, I work with manufacturers and businesses both nearby
                and beyond, through on-site visits, remote sessions, and virtual delivery.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <Icon icon={faCheck} size="xs" className="mr-3 mt-1 shrink-0 text-[#2E7D32]" />
                  <span className="text-gray-700">On-site visits when it helps</span>
                </li>
                <li className="flex items-start">
                  <Icon icon={faCheck} size="xs" className="mr-3 mt-1 shrink-0 text-[#2E7D32]" />
                  <span className="text-gray-700">Remote design, deployment, and support</span>
                </li>
                <li className="flex items-start">
                  <Icon icon={faCheck} size="xs" className="mr-3 mt-1 shrink-0 text-[#2E7D32]" />
                  <span className="text-gray-700">Virtual training and workshops</span>
                </li>
                <li className="flex items-start">
                  <Icon icon={faCheck} size="xs" className="mr-3 mt-1 shrink-0 text-[#2E7D32]" />
                  <span className="text-gray-700">You work directly with Deveren, start to finish</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
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
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              FAQ
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              A few things people ask before we start working together.
            </p>
          </div>

          <div className="max-w-4xl space-y-6">
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

          <div className="mt-12">
            <p className="text-gray-600 mb-4">Have a different question?</p>
            <Button asChild variant="outline">
              <Link href="mailto:deveren@werneenterprises.com">Ask Us Directly</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="border-t border-white/10 bg-secondary py-24 text-white">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-4">
              Get Started
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let&apos;s talk about practical AI for your business. Book your 2 hours of free
              AI consulting and we&apos;ll figure out the right first step together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" variant="primary" asChild>
                <Link href="/book-time">Book 2 Hours Free</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="mailto:deveren@werneenterprises.com">Send Email Instead</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default ContactPage
