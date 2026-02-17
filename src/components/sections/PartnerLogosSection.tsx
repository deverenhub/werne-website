import React from 'react'
import { Container } from '@/components/ui'

const PartnerLogosSection = () => {
  const partners = [
    'SCMEP',
    'FloridaMakes',
    'Purdue MEP',
    'Georgia MEP',
    'MassMEP',
    'TechSolve',
    'Manufacturers Edge',
    'DVIRC'
  ]

  return (
    <section className="py-12 bg-gray-100 border-y border-gray-200">
      <Container>
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold">
            Trusted by MEP Partners Nationwide
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-700 font-semibold text-sm hover:shadow-md hover:border-primary/30 hover:text-primary transition-all duration-300"
            >
              {partner}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export { PartnerLogosSection }
