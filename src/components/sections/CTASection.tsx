import React from 'react'
import Link from 'next/link'
import { Button, Container, Icon } from '@/components/ui'
import { faCheck, faCalendarAlt, faDownload, faPhone } from '@fortawesome/free-solid-svg-icons'

const CTASection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-primary via-accent to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-1000 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-white/5" />
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/15 rounded-full blur-lg animate-float" style={{ animationDelay: '-2s' }} />
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-slide-up-delayed">
            Whether you&apos;re an enterprise seeking advanced technology solutions or a business 
            ready to embrace AI, we&apos;re here to help you build your innovation future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <Button 
              size="xl" 
              className="bg-white text-primary hover:bg-gray-100 hover:scale-105 hover:shadow-2xl"
              shimmer
              magnetic
              asChild
            >
              <Link href="/contact">
                <Icon icon={faCalendarAlt} className="mr-2" />
                Schedule a Consultation
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-white text-white hover:bg-white hover:text-primary hover:scale-105 hover:shadow-2xl"
              asChild
            >
              <Link href="/resources">
                <Icon icon={faDownload} className="mr-2" />
                Download Capabilities
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="xl"
              className="text-white hover:bg-white/10 hover:scale-105"
              asChild
            >
              <a href="tel:8649915656">
                <Icon icon={faPhone} className="mr-2" />
                Call 864-991-5656
              </a>
            </Button>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <p className="text-lg text-white/80 mb-4">
              Don&apos;t let your business fall behind in the AI revolution. 
              Partner with Werne Enterprises to build a thriving innovation ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
              <span className="flex items-center gap-2 hover:text-white transition-colors duration-300 animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                <Icon icon={faCheck} size="lg" className="text-white animate-bounce-gentle" />
                42+ Years Experience
              </span>
              <span className="flex items-center gap-2 hover:text-white transition-colors duration-300 animate-slide-up" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
                <Icon icon={faCheck} size="lg" className="text-white animate-bounce-gentle" style={{ animationDelay: '0.5s' }} />
                Industry-Specific Solutions
              </span>
              <span className="flex items-center gap-2 hover:text-white transition-colors duration-300 animate-slide-up" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
                <Icon icon={faCheck} size="lg" className="text-white animate-bounce-gentle" style={{ animationDelay: '1s' }} />
                Proven ROI Results
              </span>
              <span className="flex items-center gap-2 hover:text-white transition-colors duration-300 animate-slide-up" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
                <Icon icon={faCheck} size="lg" className="text-white animate-bounce-gentle" style={{ animationDelay: '1.5s' }} />
                MEP Partner Network
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { CTASection }