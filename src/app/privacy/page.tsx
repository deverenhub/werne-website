import { Container, Button } from '@/components/ui'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy - Werne Enterprises LLC',
  description: 'Privacy Policy for Werne Enterprises LLC - How we collect, use, and protect your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <div className="py-16 lg:py-24 bg-white">
      <Container size="md">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-4">
              Legal Information
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              How we protect and handle your personal information
            </p>
            <p className="text-sm text-gray-500 border-t border-gray-200 pt-6">
              <strong className="text-gray-700">Effective Date:</strong> January 2026
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-3">
                Overview
              </p>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                Werne Enterprises LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
                visit our website or use our services.
              </p>
            </section>

            <section className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-3">
                Collection
              </p>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Information We Collect
              </h2>

              <h3 className="text-xl font-medium text-secondary mb-3">
                Personal Information
              </h3>
              <p className="text-gray-700 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6 list-disc pl-6 marker:text-[#2E7D32]">
                <li>Register for our services</li>
                <li>Request information about our AI solutions</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us through our website</li>
                <li>Participate in surveys or feedback forms</li>
              </ul>

              <h3 className="text-xl font-medium text-secondary mb-3">
                Automatically Collected Information
              </h3>
              <p className="text-gray-700 mb-4">
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4 list-disc pl-6 marker:text-[#2E7D32]">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website</li>
              </ul>
            </section>

            <section className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-3">
                Usage
              </p>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4 list-disc pl-6 marker:text-[#2E7D32]">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve and personalize your experience</li>
                <li>Communicate with you about our services</li>
                <li>Send you industry-specific insights and updates</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud and security threats</li>
              </ul>
            </section>

            <section className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-3">
                Disclosure
              </p>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>
              <ul className="space-y-3 text-gray-700 mb-4 list-none pl-0">
                <li className="border-l-2 border-gray-200 pl-4">
                  <strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our business
                </li>
                <li className="border-l-2 border-gray-200 pl-4">
                  <strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights, property, or safety
                </li>
                <li className="border-l-2 border-gray-200 pl-4">
                  <strong>Business Transfers:</strong> Information may be transferred in connection with a merger, acquisition, or sale of business assets
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-3">
                Security
              </p>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Data Security
              </h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-3">
                Industries
              </p>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Industry-Specific Considerations
              </h2>

              <h3 className="text-xl font-medium text-secondary mb-3">
                Healthcare Clients
              </h3>
              <p className="text-gray-700 mb-6">
                For healthcare and medical-device clients, we handle health information in line with applicable
                requirements and implement additional safeguards appropriate to each engagement. Our compliance
                experience spans regulated environments including Title 21 CFR Part 11 and medical-device Device
                History Records (DHRs).
              </p>

              <h3 className="text-xl font-medium text-secondary mb-3">
                Manufacturing Clients
              </h3>
              <p className="text-gray-700 mb-4">
                We understand the sensitivity of manufacturing data and implement industry-standard security protocols
                to protect proprietary information. We have experience working within regulated manufacturing
                environments, including ITAR, CMMC, and CUI requirements.
              </p>
            </section>

            <section className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-3">
                Your Rights
              </p>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Your Rights
              </h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4 list-disc pl-6 marker:text-[#2E7D32]">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Object to processing of your information</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-3">
                Cookies
              </p>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Cookies and Tracking
              </h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-3">
                Updates
              </p>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Changes to This Policy
              </h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date.
              </p>
            </section>

            <section className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2E7D32] mb-3">
                Contact
              </p>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
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
                    <Link href="/contact">Contact Us About Privacy</Link>
                  </Button>
                </div>
              </div>
            </section>

            <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <h3 className="font-semibold text-secondary mb-2">Questions About This Policy?</h3>
              <p className="text-gray-700 mb-4">
                If you have any questions about how we handle your data or this privacy policy,
                please don&apos;t hesitate to reach out to us. We&apos;re committed to transparency and
                protecting your privacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="sm">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/terms">View Terms of Service</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
