'use client'

import React from 'react'
import Link from 'next/link'
import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons'
import { Icon } from './Icon'

export interface BreadcrumbItem {
  label: string
  href: string
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  baseUrl?: string
  className?: string
}

/**
 * Breadcrumb component with structured data for SEO
 *
 * Renders a visual breadcrumb trail with semantic HTML and
 * includes BreadcrumbList JSON-LD schema for search engines.
 *
 * @example
 * ```tsx
 * <Breadcrumb
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Services', href: '/services' },
 *     { label: 'AI Innovation', href: '/services/ai-innovation' }
 *   ]}
 *   baseUrl="https://werneenterprises.com"
 * />
 * ```
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  baseUrl = 'https://werneenterprises.com',
  className = ''
}) => {
  // Generate JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${baseUrl}${item.href === '/' ? '' : item.href}`
    }))
  }

  const isLastItem = (index: number) => index === items.length - 1

  return (
    <>
      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Visual breadcrumb navigation */}
      <nav
        aria-label="Breadcrumb"
        className={`py-4 ${className}`}
      >
        <ol className="flex items-center flex-wrap gap-2 text-sm">
          {items.map((item, index) => (
            <li
              key={item.href}
              className="flex items-center"
            >
              {/* Separator - shown before all items except first */}
              {index > 0 && (
                <Icon
                  icon={faChevronRight}
                  size="xs"
                  className="text-gray-400 mx-2"
                  aria-hidden="true"
                />
              )}

              {/* Breadcrumb link or current page */}
              {isLastItem(index) ? (
                // Current page (non-clickable)
                <span
                  className="text-gray-600 font-medium"
                  aria-current="page"
                >
                  {index === 0 && (
                    <Icon
                      icon={faHome}
                      size="sm"
                      className="mr-1.5 text-gray-500"
                      aria-hidden="true"
                    />
                  )}
                  {item.label}
                </span>
              ) : (
                // Clickable link
                <Link
                  href={item.href}
                  className="text-primary hover:text-primary-dark hover:underline transition-colors duration-200 flex items-center"
                >
                  {index === 0 && (
                    <Icon
                      icon={faHome}
                      size="sm"
                      className="mr-1.5"
                      aria-hidden="true"
                    />
                  )}
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumb
