import { Container } from '@/components/ui'

export const metadata = {
  title: 'Accessibility Statement - Werne Enterprises LLC',
  description: 'Accessibility commitment and features for Werne Enterprises LLC website and services.',
}

export default function Accessibility() {
  return (
    <div className="py-16 bg-white">
      <Container size="md">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-secondary mb-8">Accessibility Statement</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last Updated:</strong> January 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Our Commitment to Accessibility</h2>
              <p className="text-gray-700 mb-4">
                Werne Enterprises LLC is committed to ensuring digital accessibility for people with disabilities. 
                We are continually improving the user experience for everyone and applying the relevant accessibility standards 
                to ensure we provide equal access to information and functionality for all users.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Accessibility Standards</h2>
              <p className="text-gray-700 mb-4">
                We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. 
                These guidelines help make web content more accessible to people with disabilities, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Visual impairments (blindness, low vision, color blindness)</li>
                <li>Hearing impairments (deafness, hard of hearing)</li>
                <li>Mobility impairments</li>
                <li>Cognitive disabilities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Accessibility Features</h2>
              <p className="text-gray-700 mb-4">
                Our website includes the following accessibility features:
              </p>
              
              <h3 className="text-xl font-medium text-secondary mb-3">Navigation and Structure</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Logical heading structure (H1, H2, H3, etc.)</li>
                <li>Descriptive page titles</li>
                <li>Clear navigation menus</li>
                <li>Skip to main content links</li>
                <li>Consistent layout and design patterns</li>
              </ul>

              <h3 className="text-xl font-medium text-secondary mb-3">Visual Design</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>High contrast color combinations</li>
                <li>Readable font sizes and types</li>
                <li>Meaningful color coding with additional indicators</li>
                <li>Scalable text that can be enlarged up to 200%</li>
                <li>Alternative text for images</li>
              </ul>

              <h3 className="text-xl font-medium text-secondary mb-3">Interactive Elements</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Keyboard-accessible navigation</li>
                <li>Focus indicators for interactive elements</li>
                <li>Descriptive link text</li>
                <li>Form labels and error messages</li>
                <li>Accessible buttons and controls</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Industry-Specific Accessibility Considerations</h2>
              
              <h3 className="text-xl font-medium text-secondary mb-3">Healthcare Accessibility</h3>
              <p className="text-gray-700 mb-4">
                Our healthcare AI solutions are designed with accessibility in mind, ensuring that clinical decision support tools and patient interfaces meet healthcare accessibility standards.
              </p>

              <h3 className="text-xl font-medium text-secondary mb-3">Manufacturing Accessibility</h3>
              <p className="text-gray-700 mb-4">
                Our manufacturing solutions include accessible interfaces for operators with various abilities, ensuring inclusive participation in AI-enhanced manufacturing processes.
              </p>

              <h3 className="text-xl font-medium text-secondary mb-3">Commercial Business Accessibility</h3>
              <p className="text-gray-700 mb-4">
                Our business intelligence tools are designed to be accessible to all team members, promoting inclusive data analysis and decision-making processes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Assistive Technology Compatibility</h2>
              <p className="text-gray-700 mb-4">
                Our website is designed to be compatible with assistive technologies, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
                <li>Voice recognition software</li>
                <li>Keyboard navigation tools</li>
                <li>Browser zoom functionality</li>
                <li>High contrast mode</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Ongoing Efforts</h2>
              <p className="text-gray-700 mb-4">
                We are continuously working to improve the accessibility of our website and services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Regular accessibility audits and testing</li>
                <li>User feedback incorporation</li>
                <li>Staff training on accessibility best practices</li>
                <li>Updates to meet evolving accessibility standards</li>
                <li>Third-party accessibility tool integration</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Known Limitations</h2>
              <p className="text-gray-700 mb-4">
                While we strive for full accessibility, we acknowledge that some areas may need improvement:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Some third-party embedded content may have limited accessibility</li>
                <li>Complex data visualizations may require alternative formats</li>
                <li>Certain PDF documents may need accessible versions</li>
              </ul>
              <p className="text-gray-700 mb-4">
                We are actively working to address these limitations and welcome feedback on additional areas for improvement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Alternative Access Methods</h2>
              <p className="text-gray-700 mb-4">
                If you encounter accessibility barriers on our website, we offer alternative ways to access our information and services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Phone consultations for detailed service information</li>
                <li>Email correspondence for written communications</li>
                <li>Alternative document formats upon request</li>
                <li>In-person meetings when feasible</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Feedback and Support</h2>
              <p className="text-gray-700 mb-4">
                We welcome your feedback on the accessibility of our website and services. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Accessibility Coordinator</strong></p>
                <p className="text-gray-700 mb-2">Werne Enterprises LLC</p>
                <p className="text-gray-700 mb-2">607 Creekway Court</p>
                <p className="text-gray-700 mb-2">Greer, SC 29651</p>
                <p className="text-gray-700 mb-2">Phone: <a href="tel:8649915656" className="text-primary hover:underline">864-991-5656</a></p>
                <p className="text-gray-700 mb-4">Email: <a href="mailto:accessibility@werneenterprises.com" className="text-primary hover:underline">accessibility@werneenterprises.com</a></p>
                <p className="text-gray-700 text-sm">
                  We aim to respond to accessibility feedback within 2 business days.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Assessment and Testing</h2>
              <p className="text-gray-700 mb-4">
                This accessibility statement is based on self-evaluation and testing with various assistive technologies. 
                We regularly review and update our accessibility practices to ensure continued compliance with accessibility standards.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Assessment Date:</strong> January 2025<br />
                <strong>Assessment Method:</strong> Self-evaluation and automated testing tools<br />
                <strong>Standards:</strong> WCAG 2.1 Level AA
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  )
}