'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Container, Reveal } from '@/components/ui'

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

  if (hasError) {
    // Fallback to text badge if logo fails to load
    return (
      <div
        className="px-6 py-3 text-gray-700 font-semibold text-sm"
        title={partner.name}
      >
        {partner.name}
      </div>
    )
  }

  return (
    <div
      className="relative w-[140px] h-[52px] md:w-[160px] md:h-[60px]"
      title={partner.name}
    >
      <Image
        src={partner.logo}
        alt={`${partner.name} logo`}
        fill
        className="object-contain grayscale opacity-60 transition-[filter,opacity,transform] duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105"
        onError={() => setHasError(true)}
        sizes="(max-width: 768px) 140px, 160px"
      />
    </div>
  )
}

const PartnerLogosSection = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <Container>
        <Reveal className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32]">
            Trusted by MEP partners
          </p>
        </Reveal>

        <Reveal delay={80} className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 md:gap-x-14">
          {partners.map((partner) => (
            <PartnerLogo key={partner.slug} partner={partner} />
          ))}
        </Reveal>
      </Container>
    </section>
  )
}

export { PartnerLogosSection }
