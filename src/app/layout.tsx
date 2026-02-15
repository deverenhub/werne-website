import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/lib/fontawesome";
import { Header, Footer } from "@/components/layout";

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
  description: "Transform your business with AI innovation services. 42+ years experience in manufacturing, healthcare & commercial solutions. RAG, MCP & custom AI development. Free consultation.",
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
    description: "Transform your business with AI innovation services. 42+ years experience in manufacturing, healthcare & commercial solutions. RAG, MCP & custom AI development.",
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
    description: "Transform your business with AI innovation services. 42+ years experience in manufacturing, healthcare & commercial solutions.",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
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
    "description": "AI Innovation for Manufacturing, Healthcare & Commercial Business",
    "url": "https://werneenterprises.com",
    "logo": "https://werneenterprises.com/logo.png",
    "image": "https://werneenterprises.com/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Greer",
      "addressRegion": "SC",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/company/werne-enterprises",
      "https://twitter.com/werneenterprises"
    ],
    "foundingDate": "1982",
    "numberOfEmployees": "10-50",
    "industry": "Artificial Intelligence",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 34.9518,
        "longitude": -82.2271
      },
      "geoRadius": "50000"
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
    "image": "https://werneenterprises.com/office.jpg",
    "telephone": "+1-XXX-XXX-XXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Business Address",
      "addressLocality": "Greer",
      "addressRegion": "SC",
      "postalCode": "29650",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.9518,
      "longitude": -82.2271
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
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}