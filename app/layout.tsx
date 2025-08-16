import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Aryan Mishra - Backend Engineer & Full-Stack Developer",
  description:
    "SDE-1 at Medecro specializing in scalable backend systems, AI/ML integration, and DevOps. Building health-tech solutions that impact thousands of users.",
  keywords: ["Backend Engineer", "Full Stack Developer", "Node.js", "TypeScript", "AI/ML", "DevOps", "Health Tech"],
  authors: [{ name: "Aryan Mishra" }],
  creator: "Aryan Mishra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aryanmishra.dev",
    title: "Aryan Mishra - Backend Engineer & Full-Stack Developer",
    description: "SDE-1 at Medecro specializing in scalable backend systems, AI/ML integration, and DevOps.",
    siteName: "Aryan Mishra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Mishra - Backend Engineer & Full-Stack Developer",
    description: "SDE-1 at Medecro specializing in scalable backend systems, AI/ML integration, and DevOps.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
            {children}
            <Analytics />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
