import Link from 'next/link'
import { Container, ExternalLink } from '@/components/ui'

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
    ],
  }

  return (
    <footer className="bg-secondary text-white">
      {/* CTA Section (replaces the previous non-functional newsletter form) */}
      <div className="border-b border-gray-600">
        <Container>
          <div className="py-10 md:py-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
              <div className="md:max-w-lg">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  Ready to put AI to work?
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Start with 2 free hours of practical AI consulting — no commitment, no jargon.
                </p>
              </div>
              <Link
                href="/book-time"
                className="inline-flex items-center justify-center rounded-lg bg-[#2E7D32] px-6 py-3 font-semibold text-white hover:bg-[#1B5E20] transition-colors whitespace-nowrap"
              >
                Book 2 Free Hours
              </Link>
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
                Practical AI for Manufacturing, Healthcare &amp; Commercial business —
                education, training, and solutions architected and deployed. 27+ years of
                systems and IT experience.
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
                  <ExternalLink
                    href="https://linkedin.com/in/deverenwerne"
                    className="hover:text-primary transition-colors"
                  >
                    LinkedIn
                  </ExternalLink>
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
              <p>© {new Date().getFullYear()} Werne Enterprises LLC. All Rights Reserved.</p>
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
