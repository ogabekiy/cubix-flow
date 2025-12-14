import { Sparkles, Target, TrendingUp, Users } from 'lucide-react';
import React from 'react'

export default function Features() {
  return (
    <div>
        <section id="features" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">How It Works</h2>
            <div className='flex justify-center'>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our AI-powered platform guides you through every step of your career journey
            </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Target className="h-6 w-6" />}
              title="Choose Your Career"
              description="Explore diverse career options and find the perfect match for your interests and goals."
            />
            <FeatureCard
              icon={<Sparkles className="h-6 w-6" />}
              title="AI Assessment"
              description="Take personalized tests to evaluate your skills, interests, and English proficiency."
            />
            <FeatureCard
              icon={<TrendingUp className="h-6 w-6" />}
              title="Custom Roadmap"
              description="Get a step-by-step learning plan from beginner to junior level in your chosen field."
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Track Progress"
              description="Monitor your learning journey with detailed progress tracking and milestones."
            />
            <FeatureCard
              icon={<Target className="h-6 w-6" />}
              title="Find Opportunities"
              description="Discover job openings and internships matched to your skills and experience level."
            />
            <FeatureCard
              icon={<Sparkles className="h-6 w-6" />}
              title="Continuous Support"
              description="Receive ongoing guidance and resources throughout your career development."
            />
          </div>
        </div>
      </section>
    </div>
  )
}


function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-green-500 group-hover:text-primary-foreground">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-card-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}