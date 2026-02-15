import React from 'react'
import Link from 'next/link'
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
  faClock,
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
  title: 'Contact Werne Enterprises - Schedule Your Technology Consultation',
  description: 'Contact Werne Enterprises for AI innovation, technology consulting, and digital transformation services. Schedule your free consultation today.',
}

const ContactPage = () => {
  const contactMethods = [
    {
      method: 'Schedule Consultation',
      icon: faCalendarCheck,
      description: 'Book a free 30-minute consultation to discuss your technology needs and objectives.',
      action: 'Schedule Now',
      href: '/book-time',
      primary: true
    },
    {
      method: 'Email',
      icon: faEnvelope,
      description: 'Send us a detailed message about your project requirements and timeline.',
      action: 'Send Email',
      href: 'mailto:info@werneenterprises.com',
      primary: false
    },
    {
      method: 'Phone',
      icon: faPhone,
      description: 'Call us directly to discuss urgent projects or immediate technology needs.',
      action: 'Call Now',
      href: 'tel:+1-555-WERNE-AI',
      primary: false
    },
    {
      method: 'LinkedIn',
      icon: faLinkedin,
      description: 'Connect with our leadership team on LinkedIn for professional networking.',
      action: 'Connect',
      href: 'https://linkedin.com/company/werne-enterprises',
      primary: false
    }
  ]

  const serviceAreas = [
    {
      service: 'AI Innovation Consultation',
      icon: faBrain,
      description: 'Explore RAG implementation, MCP protocols, and custom AI development opportunities.',
      duration: '45-60 minutes',
      ideal_for: 'Technical teams and decision makers ready to implement AI solutions'
    },
    {
      service: 'Technology Strategy Session',
      icon: faChartLine,
      description: 'Comprehensive review of your technology landscape and digital transformation roadmap.',
      duration: '60-90 minutes',
      ideal_for: 'Executive teams planning major technology initiatives'
    },
    {
      service: 'Industry Solutions Review',
      icon: faIndustry,
      description: 'Focused discussion on manufacturing, healthcare, or commercial business specific challenges.',
      duration: '30-45 minutes',
      ideal_for: 'Industry professionals seeking specialized technology solutions'
    },
    {
      service: 'Training Program Planning',
      icon: faGraduationCap,
      description: 'Design custom education and workshop programs for your team\'s skill development.',
      duration: '30-45 minutes',
      ideal_for: 'HR leaders and training managers building AI capabilities'
    }
  ]

  const faq = [
    {
      question: 'What should I prepare for our initial consultation?',
      answer: 'Come prepared with information about your current technology infrastructure, key business challenges, and strategic objectives. If possible, have relevant stakeholders available to participate in the discussion.'
    },
    {
      question: 'How quickly can we start a project after our consultation?',
      answer: 'Project timelines vary based on scope and complexity. Simple consulting engagements can begin within 1-2 weeks, while comprehensive AI implementations typically start within 4-6 weeks after agreement.'
    },
    {
      question: 'Do you work with businesses outside your three core industries?',
      answer: 'While we specialize in manufacturing, healthcare, and commercial business, our technology expertise applies to many industries. Contact us to discuss how our solutions might apply to your specific sector.'
    },
    {
      question: 'What is the typical ROI timeline for your solutions?',
      answer: 'Most clients see measurable improvements within 3-6 months, with full ROI typically achieved within 12-18 months. We work with you to establish clear success metrics from the beginning.'
    },
    {
      question: 'Do you provide ongoing support after implementation?',
      answer: 'Yes, we offer comprehensive ongoing support, maintenance, and optimization services. Our goal is to be your long-term technology partner, not just a project vendor.'
    }
  ]

  const offices = [
    {
      location: 'Headquarters',
      address: '123 Innovation Drive\nTech Valley, CA 94000',
      phone: '+1 (555) 123-4567',
      email: 'info@werneenterprises.com',
      hours: 'Monday - Friday: 8:00 AM - 6:00 PM PST'
    }
  ]

  const responseTime = [
    {
      method: 'Consultation Requests',
      icon: faCalendarCheck,
      time: 'Within 24 hours',
      description: 'We\'ll respond to schedule your consultation and send calendar options'
    },
    {
      method: 'General Inquiries',
      icon: faEnvelope,
      time: 'Within 4-6 hours',
      description: 'Email responses during business hours (8 AM - 6 PM PST)'
    },
    {
      method: 'Urgent Support',
      icon: faHeadset,
      time: 'Within 2 hours',
      description: 'For existing clients with urgent technical issues'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-20 lg:py-32 text-white">
        <Container>
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
              Ready to transform your business with AI innovation and technology solutions? 
              Let&apos;s discuss how our 42+ years of experience can drive your success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/book-time">
                  <span className="flex items-center">
                    <Icon icon={faCalendarCheck} size="sm" className="mr-2" />
                    Schedule Free Consultation
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
              Choose the contact method that works best for you. We&apos;re here to help you 
              explore how technology can transform your business.
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
              We offer different types of consultations based on your specific needs and objectives.
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
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-secondary flex items-center">
                        <Icon icon={faClock} size="xs" className="mr-2" />
                        Duration:
                      </span>
                      <span className="text-gray-700">{service.duration}</span>
                    </div>
                    
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
              We prioritize timely communication and will respond to your inquiry promptly.
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
                Serving Clients Nationwide
              </h3>
              <p className="text-gray-600 mb-6">
                While our headquarters is located in California, we serve clients across the 
                United States through on-site visits, remote consultations, and virtual 
                implementation support.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <Icon icon={faCheckCircle} size="xs" color="primary" className="mr-3" />
                  <span className="text-gray-700">On-site consultations available nationwide</span>
                </div>
                <div className="flex items-center">
                  <Icon icon={faCheckCircle} size="xs" color="primary" className="mr-3" />
                  <span className="text-gray-700">Remote implementation and support</span>
                </div>
                <div className="flex items-center">
                  <Icon icon={faCheckCircle} size="xs" color="primary" className="mr-3" />
                  <span className="text-gray-700">Virtual training and workshops</span>
                </div>
                <div className="flex items-center">
                  <Icon icon={faCheckCircle} size="xs" color="primary" className="mr-3" />
                  <span className="text-gray-700">24/7 technical support for clients</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <ContactForm
              title="Send Us a Message"
              subtitle="Fill out the form below and we'll get back to you within 24 hours. For urgent matters, please call us directly."
            />
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 flex items-center justify-center">
              <Icon icon={faQuestionCircle} size="xl" color="accent" className="mr-4" />
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our consultation process and services.
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
              <Link href="mailto:info@werneenterprises.com">
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
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center">
              <Icon icon={faRocket} size="xl" className="mr-4" />
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Take the first step toward transforming your business with AI and technology solutions. 
              Schedule your free consultation today and discover what&apos;s possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" asChild>
                <Link href="/book-time">
                  <span className="flex items-center">
                    <Icon icon={faCalendarCheck} size="sm" className="mr-2" />
                    Schedule Free Consultation
                  </span>
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link href="mailto:info@werneenterprises.com">
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