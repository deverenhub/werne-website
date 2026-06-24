import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-6 py-20">
      <div className="text-center max-w-xl">
        <p className="text-6xl font-bold text-primary mb-4">404</p>
        <h1 className="text-3xl font-bold text-secondary mb-4">Page not found</h1>
        <p className="text-lg text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you
          back on track.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Back to home
          </Link>
          <Link
            href="/book-time"
            className="inline-flex items-center justify-center rounded-lg border border-secondary px-6 py-3 font-semibold text-secondary hover:bg-secondary hover:text-white transition-colors"
          >
            Book 2 free hours
          </Link>
        </div>
      </div>
    </div>
  )
}
