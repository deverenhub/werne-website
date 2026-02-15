'use client'

import React from 'react'
import { Container } from '@/components'
import { ContactForm } from '@/components/forms'

const TestContactPage = () => {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-secondary mb-4">
              Contact Form Test
            </h1>
            <p className="text-xl text-gray-600">
              Test the contact form API endpoint and email functionality
            </p>
          </div>
          
          <ContactForm 
            onSubmitSuccess={() => {
              console.log('Contact form submitted successfully!')
            }}
            onSubmitError={(error) => {
              console.error('Contact form error:', error)
            }}
          />
          
          <div className="mt-12 p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-secondary mb-4">API Test Instructions</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold">Setup Required:</h3>
                <ol className="list-decimal list-inside ml-4 space-y-1">
                  <li>Copy <code className="bg-gray-100 px-2 py-1 rounded">.env.local.example</code> to <code className="bg-gray-100 px-2 py-1 rounded">.env.local</code></li>
                  <li>Set your <code className="bg-gray-100 px-2 py-1 rounded">RESEND_API_KEY</code> from resend.com</li>
                  <li>Set your <code className="bg-gray-100 px-2 py-1 rounded">CONTACT_EMAIL</code> to receive notifications</li>
                  <li>Optionally set <code className="bg-gray-100 px-2 py-1 rounded">FROM_EMAIL</code> (must be verified domain in Resend)</li>
                </ol>
              </div>
              
              <div>
                <h3 className="font-semibold">What happens when you submit:</h3>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Form data is validated using Zod schema</li>
                  <li>Rate limiting is applied (5 submissions per IP per hour)</li>
                  <li>Suspicious content detection is performed</li>
                  <li>Notification email is sent to the business</li>
                  <li>Confirmation email is sent to the customer</li>
                  <li>Detailed logging for monitoring and debugging</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold">API Endpoints:</h3>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><code className="bg-gray-100 px-2 py-1 rounded">POST /api/contact</code> - Submit contact form</li>
                  <li><code className="bg-gray-100 px-2 py-1 rounded">GET /api/contact</code> - Get form configuration and rate limit status</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TestContactPage