"use client"

import React from "react"
import { AlertCircle, Lightbulb, Compass } from "lucide-react"

export default function Problem() {
  return (
    <div className=" flex flex-col items-center justify-center pt-40 bg-gradient-to-br from-white via-white to-green-50 px-6 py-12">
      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-black  text-center leading-snug">
        Struggling to Choose the Right Career?
      </h1>

      {/* Short description */}
      <p className="text-lg sm:text-xl text-green-900 mb-12 text-center  max-w-xl">
        Many young people feel lost when deciding which career fits their skills
        and interests. Choosing the wrong path can waste time and energy.
      </p>

      {/* Feature highlights with icons */}
      <div className="flex flex-col sm:flex-row gap-8 mt-2 mb-12">
        <div className="flex flex-col items-center text-green-600">
          <AlertCircle className="h-12 w-12 mb-2 animate-pulse" />
          <span className="text-center font-medium">Identify Challenges</span>
        </div>
        <div className="flex flex-col items-center text-green-600">
          <Lightbulb className="h-12 w-12 mb-2 animate-pulse" />
          <span className="text-center font-medium">Explore Opportunities</span>
        </div>
        <div className="flex flex-col items-center text-green-600">
          <Compass className="h-12 w-12 mb-2 animate-spin-slow animate-pulse" />
          <span className="text-center font-medium">Find Your Path</span>
        </div>
      </div>

      {/* Call to action button */}
      <button className="px-8 py-4 text-black font-satisfy hover:text-white  rounded-full text-xl font-semibold shadow-lg hover:bg-green-700 transform hover:scale-105 transition">
        Try Cubix Flow
      </button>
    </div>
  )
}
