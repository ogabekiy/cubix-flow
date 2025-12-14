import { ArrowRight, Sparkles } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b  pb-10 border-green-100">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.15),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm text-green-700 shadow-sm">
            <Sparkles className="h-4 w-4 text-green-600" />
            <span>AI-Powered Career Guidance</span>
          </div>

          {/* Title */}
          <h1 className="mb-6 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-balance">
            Find Your{' '}
            <span className="relative font-satisfy inline-block rounded-2xl bg-green-600 px-3 py-1 text-white shadow-lg">
              Perfect Career
            </span>{' '}
            Path with AI
          </h1>

          {/* Description */}
          <p className="mb-12 max-w-2xl text-lg text-muted-foreground sm:text-xl text-pretty">
            Discover your ideal career, get personalized learning roadmaps, and reach your professional goals with
            AI-powered guidance tailored just for you.
          </p>

          {/* Buttons */}
          <div className="flex mt-4 flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="text-base bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              <Link href="/careers">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base border-green-300 text-green-700 hover:bg-green-50 transition-colors"
            >
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
