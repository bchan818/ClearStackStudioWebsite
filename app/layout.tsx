import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { defaultDescription, defaultTitle, siteName, siteTagline, siteUrl, socialImages } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s"
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  alternates: {
    canonical: "/"
  },
  keywords: [
    "ClearStack Studio",
    "MVP development",
    "software studio",
    "storefront MVP",
    "AI-powered tools",
    "internal dashboards",
    "website refresh",
    "app refresh"
  ],
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: socialImages.default,
        width: 1200,
        height: 630,
        alt: "ClearStack Studio social preview with the tagline From idea to app."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: socialImages.default,
        alt: "ClearStack Studio social preview with the tagline From idea to app."
      }
    ]
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  },
  robots: {
    index: true,
    follow: true
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      slogan: siteTagline,
      description: defaultDescription,
      image: `${siteUrl}${socialImages.default}`
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#organization`
      }
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body className="min-h-screen bg-slateInk font-sans antialiased">
        <a
          className="focus-ring sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-cyanGlow focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-slate-950"
          href="#main-content"
        >
          Skip to main content
        </a>
        <Header />
        <div id="main-content" tabIndex={-1}>{children}</div>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
