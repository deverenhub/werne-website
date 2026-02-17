import React from 'react'
import { Card, CardContent, Container, Icon, Badge } from '@/components/ui'
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons'

interface Testimonial {
  quote: string
  authorName: string
  title: string
  company: string
  industry: 'Manufacturing' | 'Healthcare' | 'Commercial'
  rating: number
}

const testimonials: Testimonial[] = [
  {
    quote: "Werne Enterprises helped us capture 30 years of tribal knowledge from our senior machinists before retirement. Their SmartHive platform transformed how we train new operators - what used to take 18 months now takes 6. The ROI was evident within the first quarter.",
    authorName: "Michael Torres",
    title: "VP of Operations",
    company: "Precision Manufacturing Co.",
    industry: "Manufacturing",
    rating: 5
  },
  {
    quote: "The AI Readiness Assessment was eye-opening. It showed us exactly where we were wasting resources on manual processes and gave us a clear roadmap for implementation. Within 6 months, we reduced administrative overhead by 40% while improving patient data accuracy.",
    authorName: "Dr. Sarah Chen",
    title: "Chief Medical Officer",
    company: "Regional Health Partners",
    industry: "Healthcare",
    rating: 5
  },
  {
    quote: "As a growing commercial business, we needed AI guidance that was practical, not theoretical. Deveren's consulting approach delivered immediate value - our customer service automation paid for itself in 90 days and freed our team to focus on strategic growth.",
    authorName: "James Richardson",
    title: "CEO",
    company: "Summit Business Solutions",
    industry: "Commercial",
    rating: 5
  }
]

const industryColors = {
  Manufacturing: 'bg-primary/10 text-primary',
  Healthcare: 'bg-accent/10 text-accent',
  Commercial: 'bg-secondary/10 text-secondary'
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Icon
          key={index}
          icon={faStar}
          size="xs"
          className={index < rating ? 'text-warning' : 'text-gray-300'}
        />
      ))}
    </div>
  )
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Card glow className="h-full">
      <CardContent className="p-8 flex flex-col h-full">
        {/* Quote Icon */}
        <div className="mb-4">
          <Icon
            icon={faQuoteLeft}
            size="xl"
            color="primary"
            className="opacity-50"
          />
        </div>

        {/* Rating */}
        <div className="mb-4">
          <StarRating rating={testimonial.rating} />
        </div>

        {/* Quote Text */}
        <blockquote className="text-gray-700 text-base leading-relaxed mb-6 flex-grow">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        {/* Author Info */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
          {/* Placeholder Photo */}
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
            <span className="text-lg font-semibold text-secondary">
              {testimonial.authorName.split(' ').map(n => n[0]).join('')}
            </span>
          </div>

          <div className="flex-grow">
            <p className="font-semibold text-secondary">{testimonial.authorName}</p>
            <p className="text-sm text-gray-600">{testimonial.title}</p>
            <p className="text-sm text-gray-500">{testimonial.company}</p>
          </div>

          {/* Industry Badge */}
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${industryColors[testimonial.industry]}`}>
            {testimonial.industry}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="accent" size="lg" className="mb-4">
            Client Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600">
            See how organizations across Manufacturing, Healthcare, and Commercial sectors
            have transformed their operations with our AI consulting and solutions.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Bottom CTA Text */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Join the growing list of organizations achieving measurable results with AI.
          </p>
        </div>
      </Container>
    </section>
  )
}

export { TestimonialsSection }
