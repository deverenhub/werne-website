import { Container, Button } from '@/components/ui'
import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service - Werne Enterprises LLC',
  description: 'Terms of Service for Werne Enterprises LLC - Legal terms and conditions for using our AI innovation services.',
}

export default function TermsOfService() {
  return (
    <div className="py-16 lg:py-24 bg-white">
      <Container size="md">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              Legal Agreement
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Legal terms and conditions for using our AI innovation services
            </p>
            <p className="text-sm text-gray-500 border-t border-gray-200 pt-6">
              <strong className="text-gray-700">Effective Date:</strong> January 2026
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-3">
                Agreement
              </p>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Agreement to Terms
              </h2>
              <p className="text-gray-700 mb-4">
                By accessing or using the services provided by Werne Enterprises LLC (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;),
                you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms,
                please do not use our services.
              </p>
            </section>

            <section className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-3">
                Services
              </p>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Description of Services
              </h2>
              <p className="text-gray-700 mb-4">
                Werne Enterprises LLC provides AI innovation services, consulting, and educational workshops specifically for:
              </p>
              <ul className="space-y-3 text-gray-700 mb-4 list-none pl-0">
                <li className="border-l-2 border-gray-200 pl-4">
                  <strong>Manufacturing:</strong> Predictive maintenance, quality control, and process optimization solutions
                </li>
                <li className="border-l-2 border-gray-200 pl-4">
                  <strong>Healthcare:</strong> Operational efficiency systems, clinical decision support, and compliance tools
                </li>
                <li className="border-l-2 border-gray-200 pl-4">
                  <strong>Commercial Business:</strong> Business intelligence, automation, and customer experience enhancement
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-3">
                Use
              </p>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Acceptable Use
              </h2>
              <p className="text-gray-700 mb-4">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4 list-disc pl-6 marker:text-[#2E7D32]">
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Interfere with or disrupt our services or servers</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use our intellectual property without permission</li>
                <li>Transmit any harmful, threatening, or offensive content</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            <section className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-3">
                Intellectual Property
              </p>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Intellectual Property Rights
              </h2>
              <p className="text-gray-700 mb-4">
                Our services, including but not limited to software, algorithms, methodologies, and content, are protected by intellectual property laws. This includes:
              </p>
              <ul className="space-y-3 text-gray-700 mb-4 list-none pl-0">
                <li className="border-l-2 border-gray-200 pl-4">
                  <strong>SmartHive.online Platform:</strong> Proprietary AI platform and related technologies
                </li>
                <li className="border-l-2 border-gray-200 pl-4">
                  <strong>TSVMap Methodology:</strong> Our proprietary manufacturing optimization approach
                </li>
                <li className="border-l-2 border-gray-200 pl-4">
                  <strong>Custom AI Solutions:</strong> Industry-specific implementations and models
                </li>
                <li className="border-l-2 border-gray-200 pl-4">
                  <strong>Training Materials:</strong> Educational content and curriculum
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-3">
                Availability
              </p>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Service Availability
              </h2>
              <p className="text-gray-700 mb-4">
                We strive to maintain high availability of our services but cannot guarantee uninterrupted access.
                We reserve the right to modify, suspend, or discontinue any aspect of our services with or without notice.
              </p>
            </section>

            <section className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-3">
                Confidentiality
              </p>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Data and Confidentiality
              </h2>

              <h3 className="text-xl font-medium text-secondary mb-3">
                Client Data Protection
              </h3>
              <p className="text-gray-700 mb-4">
                We understand the sensitive nature of data in our target industries:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6 list-none pl-0">
                <li className="border-l-2 border-gray-200 pl-4">
                  <strong>Healthcare:</strong> Health information is handled in line with applicable requirements, with safeguards tailored to each engagement and experience spanning Title 21 CFR Part 11 and medical-device DHRs
                </li>
                <li className="border-l-2 border-gray-200 pl-4">
                  <strong>Manufacturing:</strong> Proprietary manufacturing data is protected with industry-standard security, informed by experience with ITAR, CMMC, and CUI requirements
                </li>
                <li className="border-l-2 border-gray-200 pl-4">
                  <strong>Commercial:</strong> Business-sensitive information is handled with appropriate confidentiality measures
                </li>
              </ul>

              <h3 className="text-xl font-medium text-secondary mb-3">
                Mutual Confidentiality
              </h3>
              <p className="text-gray-700 mb-4">
                Both parties agree to maintain confidentiality of proprietary information shared during the course of our business relationship.
              </p>
            </section>

            <section className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-3">
                Payment
              </p>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Payment Terms
              </h2>
              <p className="text-gray-700 mb-4">
                Payment terms for our services will be specified in individual service agreements. Unless otherwise agreed:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4 list-disc pl-6 marker:text-[#2E7D32]">
                <li>Payment is due within 30 days of invoice date</li>
                <li>Late payments may incur additional fees</li>
                <li>We reserve the right to suspend services for non-payment</li>
                <li>All fees are non-refundable unless otherwise specified</li>
              </ul>
            </section>

            <section className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-3">
                Liability
              </p>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, Werne Enterprises LLC shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages, including but not limited to loss of profits,
                data, or business interruption.
              </p>
            </section>

            <section className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-3">
                Warranties
              </p>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Warranties and Disclaimers
              </h2>
              <p className="text-gray-700 mb-4">
                While we strive to provide high-quality services, we provide our services &quot;as is&quot; without warranties of any kind.
                We do not guarantee specific outcomes or results from our AI implementations.
              </p>
            </section>

            <section className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-3">
                Compliance
              </p>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Industry Compliance
              </h2>
              <p className="text-gray-700 mb-4">
                We work within the standards and regulations that apply to our clients&apos; industries, drawing on
                hands-on experience in regulated environments:
              </p>
              <ul className="space-y-3 text-gray-700 mb-4 list-none pl-0">
                <li className="border-l-2 border-gray-200 pl-4">
                  <strong>Business Classification:</strong> Registered under NAICS codes 541690, 541511, and 541990
                </li>
                <li className="border-l-2 border-gray-200 pl-4">
                  <strong>MEP Network Partnership:</strong> Adherence to MEP program requirements
                </li>
                <li className="border-l-2 border-gray-200 pl-4">
                  <strong>Regulated-Industry Experience:</strong> Engagements spanning ITAR, CMMC, Title 21 CFR Part 11, and CUI requirements
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-3">
                Termination
              </p>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Termination
              </h2>
              <p className="text-gray-700 mb-4">
                Either party may terminate services with appropriate notice as specified in individual service agreements.
                Upon termination, all rights and obligations will cease except those that by their nature should survive.
              </p>
            </section>

            <section className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-3">
                Governing Law
              </p>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Governing Law
              </h2>
              <p className="text-gray-700 mb-4">
                These Terms are governed by the laws of the State of South Carolina, United States,
                without regard to conflict of law principles.
              </p>
            </section>

            <section className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-3">
                Updates
              </p>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting.
                Your continued use of our services constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-3">
                Contact
              </p>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl">
                <p className="text-gray-700 mb-3">
                  <strong>Werne Enterprises LLC</strong>
                </p>
                <p className="text-gray-700 mb-3">
                  607 Creekway Court<br />Greer, SC 29651
                </p>
                <p className="text-gray-700 mb-3">
                  Phone: <a href="tel:8649915656" className="text-[#2E7D32] hover:underline">864-991-5656</a>
                </p>
                <p className="text-gray-700 mb-4">
                  Email: <a href="mailto:info@werneenterprises.com" className="text-[#2E7D32] hover:underline">info@werneenterprises.com</a>
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Button asChild className="w-full sm:w-auto">
                    <Link href="/contact">Contact Us About Terms</Link>
                  </Button>
                </div>
              </div>
            </section>

            <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <h3 className="font-semibold text-secondary mb-2">Need Legal Clarification?</h3>
              <p className="text-gray-700 mb-4">
                If you have any questions about these terms or need clarification about our
                services, please don&apos;t hesitate to contact us. We&apos;re here to help you
                understand your rights and obligations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="sm">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/privacy">View Privacy Policy</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
