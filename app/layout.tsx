import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Satisfy } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "@/components/Navbar"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-satisfy',
})

export const metadata: Metadata = {
  title: "CubixFlow - get locked in",
  description:
    "Find your perfect career path with AI-powered guidance, personalized roadmaps, and job opportunities tailored for you.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${satisfy.variable}`}>
        <Navbar/>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
