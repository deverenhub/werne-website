import React from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui'

const Footer = () => {
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
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="text-2xl font-bold mb-4">
                Werne <span className="text-primary">Enterprises</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Pioneering AI Innovation for Manufacturing, Healthcare & Commercial Business. 
                42+ years of technology leadership delivering practical, measurable results.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>607 Creekway Court</p>
                <p>Greer, SC 29651</p>
                <p className="pt-2">
                  <a href="tel:8649915656" className="hover:text-primary transition-colors">
                    864-991-5656
                  </a>
                </p>
                <p>
                  <a href="mailto:info@werneenterprises.com" className="hover:text-primary transition-colors">
                    info@werneenterprises.com
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