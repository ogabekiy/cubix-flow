"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Briefcase, BookOpen, Target, TrendingUp, ArrowRight } from "lucide-react"

export default function DashboardPage() {
  const userProgress = {
    careerName: "Frontend Developer",
    careerId: "frontend-developer",
    overallProgress: 25,
    completedTopics: 2,
    totalTopics: 8,
    currentTopic: "CSS Basics & Styling",
    streak: 7,
    hoursLearned: 24,
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-green-900 sm:text-4xl">Welcome Back!</h1>
          <p className="text-green-700">Track your progress and continue learning</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-green-200 bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-800">Overall Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900">{userProgress.overallProgress}%</div>
              <Progress value={userProgress.overallProgress} className="mt-2 bg-green-200 text-green-600" />
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-800">Topics Completed</CardTitle>
              <BookOpen className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900">
                {userProgress.completedTopics} / {userProgress.totalTopics}
              </div>
              <p className="mt-1 text-xs text-green-700">Keep it up!</p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-800">Learning Streak</CardTitle>
              <Target className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900">{userProgress.streak} days</div>
              <p className="mt-1 text-xs text-green-700">Don't break the chain</p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-800">Hours Learned</CardTitle>
              <Briefcase className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900">{userProgress.hoursLearned}h</div>
              <p className="mt-1 text-xs text-green-700">This month</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2 border-green-200 bg-white">
            <CardHeader>
              <CardTitle className="text-green-800">Current Learning Path</CardTitle>
              <CardDescription className="text-green-700">{userProgress.careerName}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border border-green-300 bg-green-100 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-medium text-green-800">Currently Learning</span>
                  <Badge className="bg-green-200 text-green-800">In Progress</Badge>
                </div>
                <p className="text-lg font-semibold text-green-900">{userProgress.currentTopic}</p>
                <Button asChild className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white">
                  <Link href={`/roadmap/${userProgress.careerId}`}>
                    Continue Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Button asChild variant="outline" className="h-auto flex-col items-start p-4 border-green-400 text-green-800">
                  <Link href={`/roadmap/${userProgress.careerId}`}>
                    <BookOpen className="mb-2 h-5 w-5 text-green-600" />
                    <div className="text-left">
                      <div className="font-semibold">View Roadmap</div>
                      <div className="text-xs text-green-700">See your complete learning path</div>
                    </div>
                  </Link>
                </Button>

                <Button asChild variant="outline" className="h-auto flex-col items-start p-4 border-green-400 text-green-800">
                  <Link href="/vacancies">
                    <Briefcase className="mb-2 h-5 w-5 text-green-600" />
                    <div className="text-left">
                      <div className="font-semibold">Find Jobs</div>
                      <div className="text-xs text-green-700">Explore career opportunities</div>
                    </div>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-white">
            <CardHeader>
              <CardTitle className="text-green-800">Quick Actions</CardTitle>
              <CardDescription className="text-green-700">Manage your learning journey</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button asChild variant="ghost" className="w-full justify-start text-green-800 hover:bg-green-100">
                <Link href="/careers">
                  <Target className="mr-2 h-4 w-4 text-green-600" />
                  Change Career Path
                </Link>
              </Button>
              <Button asChild variant="ghost" className="w-full justify-start text-green-800 hover:bg-green-100">
                <Link href="/vacancies">
                  <Briefcase className="mr-2 h-4 w-4 text-green-600" />
                  Browse Vacancies
                </Link>
              </Button>
              <Button asChild variant="ghost" className="w-full justify-start text-green-800 hover:bg-green-100">
                <Link href={`/roadmap/${userProgress.careerId}`}>
                  <BookOpen className="mr-2 h-4 w-4 text-green-600" />
                  My Roadmap
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800">Achievements & Milestones</CardTitle>
            <CardDescription className="text-green-700">Your learning journey highlights</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-lg border border-green-300 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-200 text-2xl">🎯</div>
                <div>
                  <div className="font-semibold text-green-800">Career Selected</div>
                  <div className="text-sm text-green-700">{userProgress.careerName}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-green-300 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-200 text-2xl">✅</div>
                <div>
                  <div className="font-semibold text-green-800">Assessment Complete</div>
                  <div className="text-sm text-green-700">All tests passed</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-green-300 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-200 text-2xl">🔥</div>
                <div>
                  <div className="font-semibold text-green-800">{userProgress.streak} Day Streak</div>
                  <div className="text-sm text-green-700">Keep going!</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
