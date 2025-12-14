import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Target, TrendingUp, Users } from "lucide-react"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import CTA from "@/components/CTA"
import Problem from "@/components/Problem"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero/>
      <Problem/>
    <Features/>
    <CTA/>
      
    </div>
  )
}


