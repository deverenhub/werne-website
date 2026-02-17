'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Container, Button, Input } from '@/components/ui'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 800))
    setIsLoading(false)
    setIsSubmitted(true)
    setEmail('')
  }

  const footerLinks = {
    services: [
      { name: 'AI Innovation Services', href: '/services/ai-innovation' },
      { name: 'Consulting', href: '/services/consulting' },
      { name: 'Education & Workshops', href: '/services/education' },
    ],
    industries: [
      { name: 'Manufacturing', href: '/manufacturing' },
      { name: 'Healthcare', href: '/healthcare' },
      { name: 'Commercial Business', href: '/commercial' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Resources', href: '/resources' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Accessibility', href: '/accessibility' },
    ]
  }

  return (
    <footer className="bg-secondary text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-600">
        <Container>
          <div className="py-10 md:py-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
              {/* Newsletter Text */}
              <div className="md:max-w-md">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  Get AI Insights Delivered
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Weekly tips on AI adoption for mid-sized businesses
                </p>
              </div>

              {/* Newsletter Form */}
              <div className="flex-1 md:max-w-lg">
                {isSubmitted ? (
                  <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-3">
                    <svg
                      className="w-5 h-5 text-green-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-green-400 font-medium">
                      Thanks for subscribing! Check your inbox soon.
                    </span>
                  </div>
                ) : (
                  <form
                    onSubmit={handleNewsletterSubmit}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <div className="flex-1">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        aria-label="Email address for newsletter"
                        className="bg-white/10 border-gray-500 text-white placeholder:text-gray-400 focus:bg-white/15 focus:border-primary"
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="primary"
                      loading={isLoading}
                      className="sm:flex-shrink-0"
                    >
                      Subscribe
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Content */}
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="text-2xl font-bold mb-4">
                Werne <span className="text-primary">Enterprises</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                AI Education, Consulting & Custom Development for Manufacturing, Healthcare & Commercial Business.
                27+ years of technology experience delivering practical, measurable results.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Greenville, SC</p>
                <p className="pt-2">
                  <a href="tel:8649915656" className="hover:text-primary transition-colors">
                    864-991-5656
                  </a>
                </p>
                <p>
                  <a href="mailto:deveren@werneenterprises.com" className="hover:text-primary transition-colors">
                    deveren@werneenterprises.com
                  </a>
                </p>
                <p className="pt-2">
                  <a href="https://linkedin.com/in/deverenwerne" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Industries</h3>
              <ul className="space-y-2">
                {footerLinks.industries.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-300 mb-4 md:mb-0">
              <p>© 2025 Werne Enterprises LLC. All Rights Reserved.</p>
              <p className="mt-1">Small Business | NAICS: 541690, 541511, 541990</p>
            </div>

            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export { Footer }
