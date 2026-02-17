'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { faBars, faXmark, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Icon } from '@/components/ui'

interface NavChild {
  name: string
  href: string
}

interface NavItem {
  name: string
  href: string
  children?: NavChild[]
}

interface DropdownMenuProps {
  item: NavItem
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ item, isOpen, onToggle, onClose }) => {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([])
  const [focusedIndex, setFocusedIndex] = useState(-1)

  // Reset focused index when dropdown closes
  useEffect(() => {
    if (!isOpen) {
      setFocusedIndex(-1)
    }
  }, [isOpen])

  // Focus first item when dropdown opens via keyboard
  useEffect(() => {
    if (isOpen && focusedIndex === 0 && menuItemsRef.current[0]) {
      menuItemsRef.current[0].focus()
    }
  }, [isOpen, focusedIndex])

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (!item.children) return

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault()
        if (!isOpen) {
          onToggle()
          setFocusedIndex(0)
        }
        break
      case 'Escape':
        event.preventDefault()
        onClose()
        buttonRef.current?.focus()
        break
      case 'ArrowDown':
        event.preventDefault()
        if (!isOpen) {
          onToggle()
          setFocusedIndex(0)
        } else {
          const nextIndex = focusedIndex < item.children.length - 1 ? focusedIndex + 1 : 0
          setFocusedIndex(nextIndex)
          menuItemsRef.current[nextIndex]?.focus()
        }
        break
      case 'ArrowUp':
        event.preventDefault()
        if (isOpen) {
          const prevIndex = focusedIndex > 0 ? focusedIndex - 1 : item.children.length - 1
          setFocusedIndex(prevIndex)
          menuItemsRef.current[prevIndex]?.focus()
        }
        break
      case 'Tab':
        // Allow natural tab behavior but close dropdown
        if (isOpen) {
          onClose()
        }
        break
      case 'Home':
        if (isOpen) {
          event.preventDefault()
          setFocusedIndex(0)
          menuItemsRef.current[0]?.focus()
        }
        break
      case 'End':
        if (isOpen && item.children) {
          event.preventDefault()
          const lastIndex = item.children.length - 1
          setFocusedIndex(lastIndex)
          menuItemsRef.current[lastIndex]?.focus()
        }
        break
    }
  }, [isOpen, focusedIndex, item.children, onToggle, onClose])

  const handleMenuItemKeyDown = useCallback((event: React.KeyboardEvent, index: number) => {
    if (!item.children) return

    switch (event.key) {
      case 'Escape':
        event.preventDefault()
        onClose()
        buttonRef.current?.focus()
        break
      case 'ArrowDown':
        event.preventDefault()
        const nextIndex = index < item.children.length - 1 ? index + 1 : 0
        setFocusedIndex(nextIndex)
        menuItemsRef.current[nextIndex]?.focus()
        break
      case 'ArrowUp':
        event.preventDefault()
        const prevIndex = index > 0 ? index - 1 : item.children.length - 1
        setFocusedIndex(prevIndex)
        menuItemsRef.current[prevIndex]?.focus()
        break
      case 'Home':
        event.preventDefault()
        setFocusedIndex(0)
        menuItemsRef.current[0]?.focus()
        break
      case 'End':
        event.preventDefault()
        const lastIndex = item.children.length - 1
        setFocusedIndex(lastIndex)
        menuItemsRef.current[lastIndex]?.focus()
        break
      case 'Tab':
        onClose()
        break
    }
  }, [item.children, onClose])

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative py-2 px-1 hover:scale-105 group"
      >
        {item.name}
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transform -translate-x-1/2 group-hover:w-full transition-all duration-300" />
      </Link>
    )
  }

  const dropdownId = `dropdown-${item.name.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <div
      ref={dropdownRef}
      className="relative group"
      onMouseEnter={() => !isOpen && onToggle()}
      onMouseLeave={onClose}
    >
      <button
        ref={buttonRef}
        type="button"
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={dropdownId}
        className="flex items-center gap-1 text-gray-700 hover:text-primary transition-all duration-300 font-medium relative py-2 px-1 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
      >
        {item.name}
        <Icon
          icon={faChevronDown}
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transform -translate-x-1/2 group-hover:w-full transition-all duration-300" />
      </button>

      <div
        id={dropdownId}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby={`${dropdownId}-button`}
        className={`absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-200 py-2 transform transition-all duration-300 ${
          isOpen
            ? 'opacity-100 visible scale-100'
            : 'opacity-0 invisible scale-95 pointer-events-none'
        }`}
      >
        {item.children.map((child, childIndex) => (
          <Link
            key={child.name}
            ref={(el) => { menuItemsRef.current[childIndex] = el }}
            href={child.href}
            role="menuitem"
            tabIndex={isOpen ? 0 : -1}
            onKeyDown={(e) => handleMenuItemKeyDown(e, childIndex)}
            onClick={onClose}
            className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 hover:translate-x-1 focus:outline-none focus-visible:bg-primary/10 focus-visible:text-primary"
            style={{ animationDelay: `${childIndex * 50}ms` }}
          >
            {child.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null)

  const navigation: NavItem[] = [
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

  // Close dropdowns on Escape key press globally
  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null)
        setMobileOpenDropdown(null)
      }
    }

    document.addEventListener('keydown', handleGlobalKeyDown)
    return () => document.removeEventListener('keydown', handleGlobalKeyDown)
  }, [])

  const handleDropdownToggle = useCallback((itemName: string) => {
    setOpenDropdown(prev => prev === itemName ? null : itemName)
  }, [])

  const handleDropdownClose = useCallback(() => {
    setOpenDropdown(null)
  }, [])

  const handleMobileDropdownToggle = useCallback((itemName: string) => {
    setMobileOpenDropdown(prev => prev === itemName ? null : itemName)
  }, [])

  const handleMobileDropdownKeyDown = useCallback((event: React.KeyboardEvent, itemName: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleMobileDropdownToggle(itemName)
    }
  }, [handleMobileDropdownToggle])

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
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <DropdownMenu
                key={item.name}
                item={item}
                isOpen={openDropdown === item.name}
                onToggle={() => handleDropdownToggle(item.name)}
                onClose={handleDropdownClose}
              />
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild shimmer magnetic>
              <Link href="/book-time">Get 2 Hours Free</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <Icon icon={faXmark} size="lg" color="neutral" />
            ) : (
              <Icon icon={faBars} size="lg" color="neutral" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            id="mobile-menu"
            className="lg:hidden py-4 border-t border-gray-200"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => handleMobileDropdownToggle(item.name)}
                        onKeyDown={(e) => handleMobileDropdownKeyDown(e, item.name)}
                        aria-expanded={mobileOpenDropdown === item.name}
                        aria-controls={`mobile-dropdown-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-primary transition-colors duration-200 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                      >
                        {item.name}
                        <Icon
                          icon={faChevronDown}
                          className={`w-4 h-4 transition-transform duration-200 ${mobileOpenDropdown === item.name ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <div
                        id={`mobile-dropdown-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                        role="menu"
                        aria-orientation="vertical"
                        className={`ml-4 space-y-1 overflow-hidden transition-all duration-300 ${
                          mobileOpenDropdown === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            role="menuitem"
                            tabIndex={mobileOpenDropdown === item.name ? 0 : -1}
                            className="block py-2 text-sm text-gray-600 hover:text-primary transition-colors duration-200 focus:outline-none focus-visible:text-primary focus-visible:underline"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2 text-gray-700 hover:text-primary transition-colors duration-200 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button asChild className="w-full">
                  <Link href="/book-time">Get 2 Hours Free</Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </Container>
    </header>
  )
}

export { Header }
