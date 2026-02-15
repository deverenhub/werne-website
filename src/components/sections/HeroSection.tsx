import React from 'react'
import Link from 'next/link'
import { Button, Container, Badge, AnimatedCounter, Icon } from '@/components/ui'
import { 
  faAward,
  faRocket,
  faEye,
  faBuilding,
  faDollarSign,
  faHandshake
} from '@fortawesome/free-solid-svg-icons'

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-secondary via-secondary-dark to-secondary py-20 lg:py-32 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '-1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-warning rounded-full blur-3xl animate-pulse-slow" />
      </div>
      
      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="accent" size="lg" className="mb-6 animate-fade-in hover:animate-bounce-gentle">
            <Icon icon={faAward} className="mr-2" />
            42+ Years of Technology Leadership
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
            Pioneering AI Innovation for{' '}
            <span className="text-primary hover:animate-pulse-glow transition-all duration-300 cursor-default">Manufacturing</span>,{' '}
            <span className="text-accent hover:animate-pulse-glow transition-all duration-300 cursor-default">Healthcare</span> &{' '}
            <span className="text-warning hover:animate-pulse-glow transition-all duration-300 cursor-default">Commercial Business</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-slide-up-delayed">
            Transform your business through cutting-edge artificial intelligence and industry-specific 
            technology solutions. We deliver practical, measurable results that drive efficiency, 
            improve outcomes, and create competitive advantages.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <Button size="xl" shimmer magnetic variant="gradient" asChild>
              <Link href="/contact">
                <Icon icon={faRocket} className="mr-2" />
                Book Industry Consultation
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary hover:shadow-xl" asChild>
              <Link href="#industry-solutions">
                <Icon icon={faEye} className="mr-2" />
                View Industry Solutions
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-slide-right">
              <Icon icon={faBuilding} size="2xl" color="primary" className="mb-2" />
              <AnimatedCounter 
                value="500+" 
                label="Businesses Transformed" 
                color="primary"
                duration={2500}
              />
            </div>
            <div className="animate-slide-up">
              <Icon icon={faHandshake} size="2xl" color="accent" className="mb-2" />
              <AnimatedCounter 
                value="15" 
                label="MEP Partnerships" 
                color="accent"
                duration={1500}
              />
            </div>
            <div className="animate-slide-left">
              <Icon icon={faDollarSign} size="2xl" color="warning" className="mb-2" />
              <AnimatedCounter 
                value="$10M+" 
                label="Funding Facilitated" 
                color="warning"
                duration={3000}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { HeroSection }