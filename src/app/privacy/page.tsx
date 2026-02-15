import { Container, Icon, Badge, Button } from '@/components/ui'
import Link from 'next/link'
import { 
  faShield,
  faInfoCircle,
  faDatabase,
  faUserShield,
  faGlobe,
  faCogs,
  faShareAlt,
  faLock,
  faHospital,
  faIndustry,
  faUserEdit,
  faCookie,
  faEdit,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faCalendarAlt,
  faUsers,
  faChartLine,
  faFileContract,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons'

export const metadata = {
  title: 'Privacy Policy - Werne Enterprises LLC',
  description: 'Privacy Policy for Werne Enterprises LLC - How we collect, use, and protect your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <div className="py-16 bg-white">
      <Container size="md">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" size="lg" className="mb-4">
              <Icon icon={faShield} className="mr-2" />
              Legal Information
            </Badge>
            <h1 className="text-4xl font-bold text-secondary mb-4 flex items-center justify-center">
              <Icon icon={faShield} size="lg" className="mr-3" color="primary" />
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              How we protect and handle your personal information
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
                <Icon icon={faInfoCircle} color="primary" className="mr-3" />
                Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                Werne Enterprises LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                <Icon icon={faDatabase} color="primary" className="mr-3" />
                Information We Collect
              </h2>
              
              <h3 className="text-xl font-medium text-secondary mb-3 flex items-center">
                <Icon icon={faUserShield} color="accent" className="mr-2" />
                Personal Information
              </h3>
              <p className="text-gray-700 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Register for our services
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Request information about our AI solutions
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Subscribe to our newsletter
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Contact us through our website
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Participate in surveys or feedback forms
                </li>
              </ul>

              <h3 className="text-xl font-medium text-secondary mb-3 flex items-center">
                <Icon icon={faGlobe} color="accent" className="mr-2" />
                Automatically Collected Information
              </h3>
              <p className="text-gray-700 mb-4">
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  IP address and location data
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Browser type and version
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Operating system
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Pages visited and time spent on site
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Referring website
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                <Icon icon={faCogs} color="primary" className="mr-3" />
                How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Provide, operate, and maintain our services
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Improve and personalize your experience
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Communicate with you about our services
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Send you industry-specific insights and updates
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Comply with legal obligations
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Protect against fraud and security threats
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                <Icon icon={faShareAlt} color="primary" className="mr-3" />
                Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our business</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights, property, or safety</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span><strong>Business Transfers:</strong> Information may be transferred in connection with a merger, acquisition, or sale of business assets</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                <Icon icon={faLock} color="primary" className="mr-3" />
                Data Security
              </h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                <Icon icon={faChartLine} color="primary" className="mr-3" />
                Industry-Specific Considerations
              </h2>
              
              <h3 className="text-xl font-medium text-secondary mb-3 flex items-center">
                <Icon icon={faHospital} color="accent" className="mr-2" />
                Healthcare Clients
              </h3>
              <p className="text-gray-700 mb-4">
                For healthcare-related services, we maintain HIPAA compliance and implement additional safeguards to protect health information.
              </p>

              <h3 className="text-xl font-medium text-secondary mb-3 flex items-center">
                <Icon icon={faIndustry} color="accent" className="mr-2" />
                Manufacturing Clients
              </h3>
              <p className="text-gray-700 mb-4">
                We understand the sensitivity of manufacturing data and implement industry-standard security protocols to protect proprietary information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                <Icon icon={faUserEdit} color="primary" className="mr-3" />
                Your Rights
              </h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Access your personal information
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Correct inaccurate information
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Delete your personal information
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Object to processing of your information
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Data portability
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                <Icon icon={faCookie} color="primary" className="mr-3" />
                Cookies and Tracking
              </h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                <Icon icon={faEdit} color="primary" className="mr-3" />
                Changes to This Policy
              </h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center">
                <Icon icon={faEnvelope} color="primary" className="mr-3" />
                Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
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
                      Contact Us About Privacy
                    </Link>
                  </Button>
                </div>
              </div>
            </section>
            
            <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <div className="flex items-start">
                <Icon icon={faExclamationTriangle} color="warning" className="mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary mb-2">Questions About This Policy?</h3>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about how we handle your data or this privacy policy, 
                    please don&apos;t hesitate to reach out to us. We&apos;re committed to transparency and 
                    protecting your privacy.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild size="sm">
                      <Link href="/contact">
                        <Icon icon={faEnvelope} className="mr-2" />
                        Contact Us
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/terms">
                        <Icon icon={faFileContract} className="mr-2" />
                        View Terms of Service
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