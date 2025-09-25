import type React from "react"
import type { Metadata } from "next"
import Head from "next/head"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Suspense } from "react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Footer } from "@/components/footer"
import CoolNavigation from "@/components/cool-navigation"
import "./globals.css"

export const metadata: Metadata = {
  title: "Elias Gulam Portfolio | 14 y/o Fullstack Developer",
  description: "Full-stack developer portfolio showcasing projects, skills, and experience",
  keywords: ["developer", "portfolio", "full-stack", "react", "nextjs", "typescript"],
  authors: [{ name: "Elias Gulam" }],
  creator: "Elias",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elias4044.vercel.app",
    title: "Elias | Portfolio",
    description: "My full-stack developer portfolio showcasing my projects, skills, and experience",
    siteName: "Elias Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Portfolio | Elias",
    description: "Full-stack developer portfolio showcasing projects, skills, and experience",
    creator: "@elias4044",
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
  verification: { // To index the site on google search engine
    google: "EuW2i0JKrT8nm3UgZXvFEPe8qMSdxKFDrk_2tcOADgI",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <div className="min-h-screen flex flex-col">
            <CoolNavigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <ScrollToTop />
        </Suspense>
      </body>
    </html>
  )
}
