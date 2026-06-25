import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
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

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Consulting, Training & Solutions for Manufacturing, Healthcare & Commercial | Werne Enterprises",
    template: "%s | Werne Enterprises"
  },
  description: "A practical AI partner who's actually built the systems. 27+ years of systems and IT experience — educating, training, and architecting & deploying AI solutions for manufacturing, healthcare & commercial business. Start with 2 hours of free AI consulting.",
  keywords: [
    "AI consulting services",
    "AI solution architect",
    "AI readiness assessment",
    "AI training",
    "manufacturing AI",
    "healthcare AI",
    "medical device compliance",
    "ERP MRP integration",
    "AI workflow automation",
    "South Carolina AI consultant"
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
    title: "AI Consulting, Training & Solutions | Manufacturing, Healthcare & Commercial",
    description: "27+ years of systems and IT experience — educating, training, and architecting & deploying practical AI for manufacturing, healthcare & commercial business.",
    images: [
      {
        // NEEDS-FACT: replace with a designed 1200x630 og-image.jpg added to /public
        url: "/werne-logo.png",
        alt: "Werne Enterprises - practical AI for Manufacturing, Healthcare & Commercial Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consulting, Training & Solutions | Manufacturing, Healthcare & Commercial",
    description: "27+ years of systems and IT experience — practical AI, architected and deployed.",
    // NEEDS-FACT: replace with a designed 1200x630 twitter-image.jpg added to /public
    images: ["/werne-logo.png"],
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
    "description": "AI education, training, and solution architecture & deployment for Manufacturing, Healthcare & Commercial Business",
    "url": "https://werneenterprises.com",
    "logo": "https://werneenterprises.com/werne-logo.png",
    "image": "https://werneenterprises.com/werne-logo.png",
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
    "url": "https://werneenterprises.com"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Werne Enterprises LLC",
    "image": "https://werneenterprises.com/werne-logo.png",
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
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Favicon & app icons are served automatically via App Router conventions
            (src/app/icon.png and src/app/apple-icon.png) */}

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakarta.variable} antialiased`}
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
