import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <div>
            <section className="border-t border-border bg-muted/50 py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Ready to Start Your Career Journey?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground text-pretty">
            Join thousands of learners who have found their perfect career path with our AI-powered platform.
          </p>
          <Button asChild size="lg" className="text-base mt-3 bg-green-500">
            <Link href="/careers">
              Begin Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
