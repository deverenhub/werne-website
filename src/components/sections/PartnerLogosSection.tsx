'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Container } from '@/components/ui'

interface Partner {
  name: string
  logo: string
  slug: string
}

const partners: Partner[] = [
  { name: 'SCMEP', logo: '/images/partners/scmep.svg', slug: 'scmep' },
  { name: 'FloridaMakes', logo: '/images/partners/floridamakes.svg', slug: 'floridamakes' },
  { name: 'Purdue MEP', logo: '/images/partners/purdue-mep.svg', slug: 'purdue-mep' },
  { name: 'Georgia MEP', logo: '/images/partners/georgia-mep.svg', slug: 'georgia-mep' },
  { name: 'MassMEP', logo: '/images/partners/massmep.svg', slug: 'massmep' },
  { name: 'TechSolve', logo: '/images/partners/techsolve.svg', slug: 'techsolve' },
  { name: 'Manufacturers Edge', logo: '/images/partners/manufacturers-edge.svg', slug: 'manufacturers-edge' },
  { name: 'DVIRC', logo: '/images/partners/dvirc.svg', slug: 'dvirc' },
]

interface PartnerLogoProps {
  partner: Partner
}

const PartnerLogo = ({ partner }: PartnerLogoProps) => {
  const [hasError, setHasError] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  if (hasError) {
    // Fallback to text badge if logo fails to load
    return (
      <div
        className="px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-700 font-semibold text-sm hover:shadow-md hover:border-primary/30 hover:text-primary transition-all duration-300"
        title={partner.name}
      >
        {partner.name}
      </div>
    )
  }

  return (
    <div
      className="relative w-[140px] h-[52px] md:w-[160px] md:h-[60px] bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title={partner.name}
    >
      <Image
        src={partner.logo}
        alt={`${partner.name} logo`}
        fill
        className={`object-contain p-2 transition-all duration-300 ${
          isHovered ? 'grayscale-0 scale-105' : 'grayscale opacity-70'
        }`}
        onError={() => setHasError(true)}
        sizes="(max-width: 768px) 140px, 160px"
      />
    </div>
  )
}

const PartnerLogosSection = () => {
  return (
    <section className="py-12 bg-gray-100 border-y border-gray-200">
      <Container>
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold">
            Trusted by MEP Partners Nationwide
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {partners.map((partner) => (
            <PartnerLogo key={partner.slug} partner={partner} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export { PartnerLogosSection }
