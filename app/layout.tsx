import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://clear-stack-studio-website.vercel.app"),
  title: {
    default: "ClearStack Studio | MVPs, Storefronts, AI Tools, and Dashboards",
    template: "%s | ClearStack Studio"
  },
  description:
    "ClearStack Studio turns ideas into launch-ready software MVPs, storefront MVPs, AI-powered tool prototypes, internal dashboards, and website/app refreshes.",
  applicationName: "ClearStack Studio",
  authors: [{ name: "ClearStack Studio" }],
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
    title: "ClearStack Studio | From idea to app.",
    description:
      "A software/app studio portfolio for MVP software, storefront MVPs, AI-powered tools, internal dashboards, and website/app refreshes.",
    url: "/",
    siteName: "ClearStack Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "ClearStack Studio — From idea to app."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ClearStack Studio | From idea to app.",
    description:
      "MVP software, storefront MVPs, AI-powered tools, internal dashboards, and website/app refreshes by ClearStack Studio.",
    images: ["/og-image.svg"]
  },
  icons: {
    icon: "/icon.svg"
  },
  robots: {
    index: true,
    follow: true
  }
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
          Skip to content
        </a>
        <Header />
        <div id="main-content">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
