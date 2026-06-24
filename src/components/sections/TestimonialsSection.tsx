import React from 'react'
import { Card, CardContent, Container, Icon, Badge } from '@/components/ui'
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons'

interface Testimonial {
  quote: string
  // Anonymized attribution ONLY: role + industry/region. No real names or company names.
  attribution: string
  industry: 'Manufacturing' | 'Healthcare' | 'Commercial'
  rating: number
  isPlaceholder?: boolean
}

/*
  PLACEHOLDERS below — replace each `quote` with a REAL, client-approved, anonymized
  testimonial, then remove the `isPlaceholder` flag. Use role + industry/region only;
  never a real person or company name. Cards marked isPlaceholder render with a visible
  "Placeholder" label so nothing can be mistaken for (or ship as) a real endorsement.
*/
const testimonials: Testimonial[] = [
  {
    quote: 'Add a real, client-approved quote here.',
    attribution: 'Operations leader, manufacturer (anonymized)',
    industry: 'Manufacturing',
    rating: 5,
    isPlaceholder: true,
  },
  {
    quote: 'Add a real, client-approved quote here.',
    attribution: 'Quality / compliance leader, medical-device maker (anonymized)',
    industry: 'Healthcare',
    rating: 5,
    isPlaceholder: true,
  },
  {
    quote: 'Add a real, client-approved quote here.',
    attribution: 'Owner / operator, commercial business (anonymized)',
    industry: 'Commercial',
    rating: 5,
    isPlaceholder: true,
  },
]

const industryColors = {
  Manufacturing: 'bg-primary/10 text-primary',
  Healthcare: 'bg-accent/10 text-accent',
  Commercial: 'bg-secondary/10 text-secondary',
}

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
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

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const { isPlaceholder } = testimonial
  return (
    <Card
      glow={!isPlaceholder}
      className={`h-full ${isPlaceholder ? 'border-2 border-dashed border-gray-200' : ''}`}
    >
      <CardContent className="p-8 flex flex-col h-full">
        {isPlaceholder && (
          <span className="self-start mb-3 text-xs font-medium uppercase tracking-wide text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
            Placeholder
          </span>
        )}

        {/* Quote Icon */}
        <div className="mb-4">
          <Icon icon={faQuoteLeft} size="xl" color="primary" className="opacity-50" />
        </div>

        {/* Rating */}
        <div className="mb-4">
          <StarRating rating={testimonial.rating} />
        </div>

        {/* Quote Text */}
        <blockquote
          className={`text-base leading-relaxed mb-6 flex-grow ${
            isPlaceholder ? 'italic text-gray-400' : 'text-gray-700'
          }`}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        {/* Anonymized Attribution */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-100">
          <p className="text-sm font-medium text-secondary">{testimonial.attribution}</p>
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${industryColors[testimonial.industry]}`}
          >
            {testimonial.industry}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

const TestimonialsSection = () => {
  if (testimonials.length === 0) return null

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="accent" size="lg" className="mb-4">
            Client Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Real results from manufacturers and businesses across Manufacturing, Healthcare,
            and Commercial sectors.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export { TestimonialsSection }
