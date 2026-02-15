import { Container, Icon, Badge, Button } from '@/components/ui'
import Link from 'next/link'
import { 
  faFileContract,
  faHandshake,
  faCogs,
  faCheckCircle,
  faBrain,
  faServer,
  faShield,
  faDollarSign,
  faExclamationTriangle,
  faBalanceScale,
  faIndustry,
  faHospital,
  faStore,
  faClipboardCheck,
  faGavel,
  faEdit,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faCalendarAlt,
  faUsers,
  faInfoCircle,
  faLock,
  faUserShield,
  faAward
} from '@fortawesome/free-solid-svg-icons'

export const metadata = {
  title: 'Terms of Service - Werne Enterprises LLC',
  description: 'Terms of Service for Werne Enterprises LLC - Legal terms and conditions for using our AI innovation services.',
}

export default function TermsOfService() {
  return (
    <div className="py-16 bg-white">
      <Container size="md">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" size="lg" className="mb-4">
              <Icon icon={faFileContract} className="mr-2" />
              Legal Agreement
            </Badge>
            <h1 className="text-4xl font-bold text-secondary mb-4 flex items-center justify-center">
              <Icon icon={faFileContract} size="lg" className="mr-3" color="primary" />
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Legal terms and conditions for using our AI innovation services
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-primary/10 p-4 rounded-lg mb-8 flex items-center">
              <Icon icon={faCalendarAlt} color="primary" className="mr-3" />
              <span className="text-gray-700">
                <strong>Effective Date:</strong> January 2025
              </span>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                <Icon icon={faHandshake} color="primary" className="mr-3" />
                Agreement to Terms
              </h2>
              <p className="text-gray-700 mb-4">
                By accessing or using the services provided by Werne Enterprises LLC (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), 
                you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, 
                please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                <Icon icon={faCogs} color="primary" className="mr-3" />
                Description of Services
              </h2>
              <p className="text-gray-700 mb-4">
                Werne Enterprises LLC provides AI innovation services, consulting, and educational workshops specifically for:
              </p>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li className="flex items-start">
                  <Icon icon={faIndustry} color="primary" className="mr-3 mt-1" />
                  <span><strong>Manufacturing:</strong> Predictive maintenance, quality control, and process optimization solutions</span>
                </li>
                <li className="flex items-start">
                  <Icon icon={faHospital} color="primary" className="mr-3 mt-1" />
                  <span><strong>Healthcare:</strong> Operational efficiency systems, clinical decision support, and compliance tools</span>
                </li>
                <li className="flex items-start">
                  <Icon icon={faStore} color="primary" className="mr-3 mt-1" />
                  <span><strong>Commercial Business:</strong> Business intelligence, automation, and customer experience enhancement</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                <Icon icon={faCheckCircle} color="primary" className="mr-3" />
                Acceptable Use
              </h2>
              <p className="text-gray-700 mb-4">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  Use our services for any illegal or unauthorized purpose
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  Interfere with or disrupt our services or servers
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  Attempt to gain unauthorized access to our systems
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  Use our intellectual property without permission
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  Transmit any harmful, threatening, or offensive content
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  Violate any applicable laws or regulations
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                <Icon icon={faBrain} color="primary" className="mr-3" />
                Intellectual Property Rights
              </h2>
              <p className="text-gray-700 mb-4">
                Our services, including but not limited to software, algorithms, methodologies, and content, are protected by intellectual property laws. This includes:
              </p>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li className="flex items-start">
                  <Icon icon={faBrain} color="primary" className="mr-3 mt-1" />
                  <span><strong>SmartHive.online Platform:</strong> Proprietary AI platform and related technologies</span>
                </li>
                <li className="flex items-start">
                  <Icon icon={faCogs} color="primary" className="mr-3 mt-1" />
                  <span><strong>TSVMap Methodology:</strong> Our proprietary manufacturing optimization approach</span>
                </li>
                <li className="flex items-start">
                  <Icon icon={faCheckCircle} color="primary" className="mr-3 mt-1" />
                  <span><strong>Custom AI Solutions:</strong> Industry-specific implementations and models</span>
                </li>
                <li className="flex items-start">
                  <Icon icon={faUsers} color="primary" className="mr-3 mt-1" />
                  <span><strong>Training Materials:</strong> Educational content and curriculum</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                <Icon icon={faServer} color="primary" className="mr-3" />
                Service Availability
              </h2>
              <p className="text-gray-700 mb-4">
                We strive to maintain high availability of our services but cannot guarantee uninterrupted access. 
                We reserve the right to modify, suspend, or discontinue any aspect of our services with or without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                <Icon icon={faShield} color="primary" className="mr-3" />
                Data and Confidentiality
              </h2>
              
              <h3 className="text-xl font-medium text-secondary mb-3 flex items-center">
                <Icon icon={faLock} color="accent" className="mr-2" />
                Client Data Protection
              </h3>
              <p className="text-gray-700 mb-4">
                We understand the sensitive nature of data in our target industries:
              </p>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li className="flex items-start">
                  <Icon icon={faHospital} color="primary" className="mr-3 mt-1" />
                  <span><strong>Healthcare:</strong> All healthcare data is handled in compliance with HIPAA regulations</span>
                </li>
                <li className="flex items-start">
                  <Icon icon={faIndustry} color="primary" className="mr-3 mt-1" />
                  <span><strong>Manufacturing:</strong> Proprietary manufacturing data is protected with industry-standard security</span>
                </li>
                <li className="flex items-start">
                  <Icon icon={faStore} color="primary" className="mr-3 mt-1" />
                  <span><strong>Commercial:</strong> Business-sensitive information is handled with appropriate confidentiality measures</span>
                </li>
              </ul>

              <h3 className="text-xl font-medium text-secondary mb-3 flex items-center">
                <Icon icon={faUserShield} color="accent" className="mr-2" />
                Mutual Confidentiality
              </h3>
              <p className="text-gray-700 mb-4">
                Both parties agree to maintain confidentiality of proprietary information shared during the course of our business relationship.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                <Icon icon={faDollarSign} color="primary" className="mr-3" />
                Payment Terms
              </h2>
              <p className="text-gray-700 mb-4">
                Payment terms for our services will be specified in individual service agreements. Unless otherwise agreed:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Payment is due within 30 days of invoice date
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Late payments may incur additional fees
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  We reserve the right to suspend services for non-payment
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  All fees are non-refundable unless otherwise specified
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                <Icon icon={faExclamationTriangle} color="primary" className="mr-3" />
                Limitation of Liability
              </h2>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, Werne Enterprises LLC shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including but not limited to loss of profits, 
                data, or business interruption.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                <Icon icon={faInfoCircle} color="primary" className="mr-3" />
                Warranties and Disclaimers
              </h2>
              <p className="text-gray-700 mb-4">
                While we strive to provide high-quality services, we provide our services &quot;as is&quot; without warranties of any kind. 
                We do not guarantee specific outcomes or results from our AI implementations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                <Icon icon={faAward} color="primary" className="mr-3" />
                Industry Compliance
              </h2>
              <p className="text-gray-700 mb-4">
                We maintain compliance with relevant industry standards and regulations:
              </p>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li className="flex items-start">
                  <Icon icon={faAward} color="primary" className="mr-3 mt-1" />
                  <span><strong>Small Business Certification:</strong> NAICS codes 541690, 541511, 541990</span>
                </li>
                <li className="flex items-start">
                  <Icon icon={faHandshake} color="primary" className="mr-3 mt-1" />
                  <span><strong>MEP Network Partnership:</strong> Adherence to MEP program requirements</span>
                </li>
                <li className="flex items-start">
                  <Icon icon={faBalanceScale} color="primary" className="mr-3 mt-1" />
                  <span><strong>Industry Standards:</strong> Compliance with relevant manufacturing and healthcare regulations</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                <Icon icon={faClipboardCheck} color="primary" className="mr-3" />
                Termination
              </h2>
              <p className="text-gray-700 mb-4">
                Either party may terminate services with appropriate notice as specified in individual service agreements. 
                Upon termination, all rights and obligations will cease except those that by their nature should survive.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                <Icon icon={faGavel} color="primary" className="mr-3" />
                Governing Law
              </h2>
              <p className="text-gray-700 mb-4">
                These Terms are governed by the laws of the State of South Carolina, United States, 
                without regard to conflict of law principles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                <Icon icon={faEdit} color="primary" className="mr-3" />
                Changes to Terms
              </h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. 
                Your continued use of our services constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                <Icon icon={faEnvelope} color="primary" className="mr-3" />
                Contact Information
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-3 flex items-center">
                  <Icon icon={faUsers} color="primary" className="mr-2" />
                  <strong>Werne Enterprises LLC</strong>
                </p>
                <p className="text-gray-700 mb-3 flex items-start">
                  <Icon icon={faMapMarkerAlt} color="primary" className="mr-2 mt-1" />
                  <span>607 Creekway Court<br />Greer, SC 29651</span>
                </p>
                <p className="text-gray-700 mb-3 flex items-center">
                  <Icon icon={faPhone} color="primary" className="mr-2" />
                  <span>Phone: <a href="tel:8649915656" className="text-primary hover:underline">864-991-5656</a></span>
                </p>
                <p className="text-gray-700 mb-4 flex items-center">
                  <Icon icon={faEnvelope} color="primary" className="mr-2" />
                  <span>Email: <a href="mailto:info@werneenterprises.com" className="text-primary hover:underline">info@werneenterprises.com</a></span>
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Button asChild className="w-full sm:w-auto">
                    <Link href="/contact">
                      <Icon icon={faEnvelope} className="mr-2" />
                      Contact Us About Terms
                    </Link>
                  </Button>
                </div>
              </div>
            </section>
            
            <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <div className="flex items-start">
                <Icon icon={faInfoCircle} color="primary" className="mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary mb-2">Need Legal Clarification?</h3>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about these terms or need clarification about our 
                    services, please don&apos;t hesitate to contact us. We&apos;re here to help you 
                    understand your rights and obligations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild size="sm">
                      <Link href="/contact">
                        <Icon icon={faEnvelope} className="mr-2" />
                        Contact Us
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/privacy">
                        <Icon icon={faShield} className="mr-2" />
                        View Privacy Policy
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}