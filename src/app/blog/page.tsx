import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Button, Container, Card, CardContent, Badge, Icon } from '@/components/ui'
import {
  faBook,
  faBrain,
  faGraduationCap,
  faIndustry,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'AI Blog - Insights & Education | Werne Enterprises',
  description: 'AI education content, implementation guides, and industry insights from Werne Enterprises. Coming soon.',
}

const BlogPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-20 lg:py-32 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products/smarthive-dashboard.jpg"
            alt="Blog background"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" size="lg" className="mb-6">
              <Icon icon={faBook} className="mr-2" />
              Coming Soon
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              AI Education{' '}
              <span className="text-primary">Blog</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              We&apos;re building a resource of AI education content, implementation guides,
              and industry insights. Subscribe to be notified when we launch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/contact">Get Notified</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="/resources">View Resources</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our blog will feature practical AI education content based on our
              9 years of consulting experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Icon icon={faBrain} size="3xl" color="primary" className="mb-4" />
                <h3 className="text-xl font-semibold text-secondary mb-3">AI Implementation Guides</h3>
                <p className="text-gray-600">
                  Practical guides for implementing AI in your organization based on real-world experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Icon icon={faIndustry} size="3xl" color="accent" className="mb-4" />
                <h3 className="text-xl font-semibold text-secondary mb-3">Industry Insights</h3>
                <p className="text-gray-600">
                  AI applications and best practices specific to manufacturing, healthcare, and commercial businesses.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Icon icon={faGraduationCap} size="3xl" color="warning" className="mb-4" />
                <h3 className="text-xl font-semibold text-secondary mb-3">Educational Content</h3>
                <p className="text-gray-600">
                  AI fundamentals and concepts explained for business professionals.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Can&apos;t Wait for the Blog?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start with 2 hours free AI consulting and get personalized guidance
              for your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="primary" asChild>
                <Link href="/book-time">
                  <Icon icon={faCalendarAlt} className="mr-2" />
                  Book Free Consultation
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default BlogPage
