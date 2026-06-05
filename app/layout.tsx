import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: {
    default: "ClearStack Studio | From idea to app.",
    template: "%s | ClearStack Studio"
  },
  description:
    "ClearStack Studio builds modern websites, mobile apps, AI-powered tools, and MVPs for small businesses, creators, and growing teams.",
  applicationName: "ClearStack Studio",
  authors: [{ name: "ClearStack Studio" }],
  keywords: [
    "ClearStack Studio",
    "websites",
    "mobile apps",
    "AI tools",
    "MVP development",
    "small business websites"
  ],
  openGraph: {
    title: "ClearStack Studio | From idea to app.",
    description:
      "Modern websites, mobile apps, AI-powered tools, and MVPs for small businesses, creators, and growing teams.",
    siteName: "ClearStack Studio",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "ClearStack Studio | From idea to app.",
    description:
      "Modern websites, mobile apps, AI-powered tools, and MVPs for small businesses, creators, and growing teams."
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
      </body>
    </html>
  );
}
