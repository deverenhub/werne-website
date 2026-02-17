import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/lib/fontawesome";
import { Header, Footer } from "@/components/layout";
import { StickyMobileCTA } from "@/components/ui";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Innovation Services | Manufacturing, Healthcare & Commercial | Werne Enterprises",
    template: "%s | Werne Enterprises"
  },
  description: "Transform your business with AI education, consulting & custom AI development. 27+ years technology experience serving manufacturing, healthcare & commercial business. 2 hours free AI consulting.",
  keywords: [
    "AI innovation services",
    "artificial intelligence consulting",
    "RAG implementation",
    "MCP integration",
    "manufacturing AI",
    "healthcare AI",
    "commercial AI solutions",
    "predictive maintenance",
    "AI automation",
    "Greer South Carolina",
    "AI consulting services"
  ],
  authors: [{ name: "Werne Enterprises LLC" }],
  creator: "Werne Enterprises LLC",
  publisher: "Werne Enterprises LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://werneenterprises.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://werneenterprises.com",
    siteName: "Werne Enterprises",
    title: "AI Innovation Services | Manufacturing, Healthcare & Commercial",
    description: "Transform your business with AI education, consulting & custom AI development. 27+ years technology experience serving manufacturing, healthcare & commercial business.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Werne Enterprises - AI Innovation for Manufacturing, Healthcare & Commercial Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Innovation Services | Manufacturing, Healthcare & Commercial",
    description: "Transform your business with AI education, consulting & custom AI development. 27+ years technology experience.",
    images: ["/twitter-image.jpg"],
    creator: "@werneenterprises",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification codes should be added when ready for production
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Werne Enterprises LLC",
    "description": "AI Education, Consulting & Custom Development for Manufacturing, Healthcare & Commercial Business",
    "url": "https://werneenterprises.com",
    "logo": "https://werneenterprises.com/logo.png",
    "image": "https://werneenterprises.com/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Greenville",
      "addressRegion": "SC",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/in/deverenwerne"
    ],
    "foundingDate": "1998",
    "numberOfEmployees": "1",
    "industry": "Artificial Intelligence Consulting",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Werne Enterprises",
    "url": "https://werneenterprises.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://werneenterprises.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Werne Enterprises LLC",
    "image": "https://werneenterprises.com/og-image.jpg",
    "telephone": "+1-864-991-5656",
    "email": "deveren@werneenterprises.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Greenville",
      "addressRegion": "SC",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.8526,
      "longitude": -82.3940
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip to main content link for keyboard accessibility */}
        <a
          href="#main-content"
          className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:no-underline"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
