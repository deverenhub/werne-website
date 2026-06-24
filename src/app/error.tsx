'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Surface for monitoring; no user-facing details are exposed
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-6 py-20">
      <div className="text-center max-w-xl">
        <h1 className="text-3xl font-bold text-secondary mb-4">Something went wrong</h1>
        <p className="text-lg text-gray-600 mb-8">
          An unexpected error occurred. Please try again, or reach out if it keeps
          happening.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-lg bg-[#2E7D32] px-6 py-3 font-semibold text-white hover:bg-[#1B5E20] transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-secondary px-6 py-3 font-semibold text-secondary hover:bg-secondary hover:text-white transition-colors"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
