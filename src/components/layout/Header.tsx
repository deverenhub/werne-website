'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Icon } from '@/components/ui'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    {
      name: 'Services',
      href: '/services',
      children: [
        { name: 'Custom AI Development', href: '/services/ai-innovation' },
        { name: 'AI Consulting', href: '/services/consulting' },
        { name: 'AI Training', href: '/services/education' },
      ]
    },
    {
      name: 'Industries',
      href: '#',
      children: [
        { name: 'Manufacturing', href: '/manufacturing' },
        { name: 'Healthcare', href: '/healthcare' },
        { name: 'Commercial Business', href: '/commercial' },
      ]
    },
    { name: 'Our Work', href: '/case-studies' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src="/werne-logo.png"
                  alt="Werne Enterprises Logo"
                  width={80}
                  height={80}
                  className="h-20 w-auto group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="text-2xl font-bold text-secondary group-hover:text-secondary-dark transition-colors duration-300">
                Werne <span className="text-primary group-hover:text-primary-dark transition-colors duration-300">Enterprises</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative py-2 px-1 hover:scale-105"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transform -translate-x-1/2 group-hover:w-full transition-all duration-300" />
                </Link>
                {item.children && (
                  <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-200 py-2 transform scale-95 group-hover:scale-100">
                    {item.children.map((child, childIndex) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 hover:translate-x-1"
                        style={{ animationDelay: `${childIndex * 50}ms` }}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild shimmer magnetic>
              <Link href="/book-time">2 Hours Free</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {isMenuOpen ? (
              <Icon icon={faXmark} size="lg" color="neutral" />
            ) : (
              <Icon icon={faBars} size="lg" color="neutral" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block py-1 text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button asChild className="w-full">
                  <Link href="/book-time">2 Hours Free Consulting</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}

export { Header }
