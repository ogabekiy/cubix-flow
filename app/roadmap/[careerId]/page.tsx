"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  CheckCircle2,
  Circle,
  Lock,
  ExternalLink,
  Home,
} from "lucide-react"

const englishLevel = "B1" // Fake MVP logic

const englishResources = [
  {
    title: "English for Developers (Video Course)",
    description: "Technical English basics for IT and digital careers",
    url: "#",
  },
  {
    title: "Grammar Essentials – B1 to B2",
    description: "Core grammar topics explained simply",
    url: "#",
  },
  {
    title: "Listening Practice (Short Videos)",
    description: "Improve understanding of real spoken English",
    url: "#",
  },
  {
    title: "Daily Vocabulary Builder",
    description: "15 minutes a day to expand your vocabulary",
    url: "#",
  },
]

const roadmapData: Record<string, any> = {
  "frontend-developer": {
    name: "Frontend Developer",
    levels: [
      {
        level: "Beginner",
        duration: "2-3 months",
        topics: [
          {
            title: "HTML Fundamentals",
            status: "completed",
            resources: [
              { name: "MDN HTML Guide", url: "#" },
              { name: "HTML Tutorial Video", url: "#" },
            ],
          },
          {
            title: "CSS Basics & Styling",
            status: "in-progress",
            resources: [
              { name: "CSS Tricks", url: "#" },
              { name: "Flexbox Guide", url: "#" },
            ],
          },
          {
            title: "JavaScript Essentials",
            status: "locked",
            resources: [
              { name: "JavaScript.info", url: "#" },
              { name: "Eloquent JavaScript", url: "#" },
            ],
          },
        ],
      },
      {
        level: "Intermediate",
        duration: "3-4 months",
        topics: [
          {
            title: "React Fundamentals",
            status: "locked",
            resources: [
              { name: "React Documentation", url: "#" },
              { name: "React Course", url: "#" },
            ],
          },
          {
            title: "State Management",
            status: "locked",
            resources: [
              { name: "Redux Tutorial", url: "#" },
              { name: "Context API Guide", url: "#" },
            ],
          },
          {
            title: "API Integration",
            status: "locked",
            resources: [
              { name: "Fetch API Guide", url: "#" },
              { name: "Axios Documentation", url: "#" },
            ],
          },
        ],
      },
      {
        level: "Junior Level",
        duration: "2-3 months",
        topics: [
          {
            title: "Build Portfolio Projects",
            status: "locked",
            resources: [
              { name: "Project Ideas", url: "#" },
              { name: "GitHub Guide", url: "#" },
            ],
          },
          {
            title: "Testing & Debugging",
            status: "locked",
            resources: [
              { name: "Jest Documentation", url: "#" },
              { name: "Testing Library", url: "#" },
            ],
          },
          {
            title: "Job Interview Prep",
            status: "locked",
            resources: [
              { name: "Interview Questions", url: "#" },
              { name: "Resume Building", url: "#" },
            ],
          },
        ],
      },
    ],
  },
}

export default function RoadmapPage() {
  const params = useParams()
  const careerId = params.careerId as string
  const roadmap =
    roadmapData[careerId] || roadmapData["frontend-developer"]

  const totalTopics = roadmap.levels.reduce(
    (acc: number, level: any) => acc + level.topics.length,
    0
  )
  const completedTopics = roadmap.levels.reduce(
    (acc: number, level: any) =>
      acc + level.topics.filter((t: any) => t.status === "completed").length,
    0
  )
  const progressPercentage = Math.round(
    (completedTopics / totalTopics) * 100
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="mb-2 text-3xl font-bold text-foreground sm:text-4xl">
              {roadmap.name} Roadmap
            </h1>
            <p className="text-muted-foreground">
              Your personalized learning path
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/dashboard">
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </Button>
        </div>

        {/* English Level */}
        <Card className="mb-8 border-green-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>English Level</CardTitle>
              <Badge className="bg-green-600 text-white">
                {englishLevel}
              </Badge>
            </div>
            <CardDescription>Based on your assessment results</CardDescription>
          </CardHeader>

          <CardContent className="space-y-3 text-sm">
            <p>
              Your current English level is <strong>{englishLevel}</strong>.
              This level is sufficient to start this roadmap, but improving
              your English will significantly speed up your progress.
            </p>
          </CardContent>
        </Card>

        {/* English Improvement */}
        <Card className="mb-10">
          <CardHeader>
            <CardTitle>Improve Your English</CardTitle>
            <CardDescription>
              Recommended resources to boost your English alongside your
              roadmap
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {englishResources.map((res, index) => (
              <a
                key={index}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border p-4 transition hover:bg-accent"
              >
                <div>
                  <p className="font-medium">{res.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {res.description}
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
            ))}
          </CardContent>
        </Card>

        {/* Overall Progress */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Overall Progress</CardTitle>
              <Badge variant="secondary">
                {completedTopics} / {totalTopics} completed
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={progressPercentage} className="h-3" />
            <p className="mt-2 text-sm text-muted-foreground">
              {progressPercentage}% complete
            </p>
          </CardContent>
        </Card>

        {/* Roadmap Levels */}
        <div className="space-y-6">
          {roadmap.levels.map((level: any, levelIndex: number) => (
            <Card key={levelIndex}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">{level.level}</CardTitle>
                    <CardDescription className="mt-1">
                      Duration: {level.duration}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    {level.topics.length} topics
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {level.topics.map((topic: any, topicIndex: number) => (
                    <AccordionItem
                      key={topicIndex}
                      value={`topic-${levelIndex}-${topicIndex}`}
                    >
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-3">
                          {topic.status === "completed" && (
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          )}
                          {topic.status === "in-progress" && (
                            <Circle className="h-5 w-5 shrink-0 text-primary" />
                          )}
                          {topic.status === "locked" && (
                            <Lock className="h-5 w-5 shrink-0 text-muted-foreground" />
                          )}
                          <span className="text-left">{topic.title}</span>
                          {topic.status === "in-progress" && (
                            <Badge variant="secondary" className="ml-2">
                              In Progress
                            </Badge>
                          )}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pl-8 pt-2">
                          <p className="mb-3 text-sm text-muted-foreground">
                            Learning resources:
                          </p>
                          {topic.resources.map((resource: any, resIndex: number) => (
                            <a
                              key={resIndex}
                              href={resource.url}
                              className="flex items-center gap-2 rounded-md border border-border p-3 text-sm transition-colors hover:bg-accent"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4 text-muted-foreground" />
                              <span>{resource.name}</span>
                            </a>
                          ))}
                          {topic.status !== "completed" && (
                            <Button
                              className="mt-4 w-full"
                              variant={topic.status === "locked" ? "secondary" : "default"}
                              disabled={topic.status === "locked"}
                            >
                              {topic.status === "locked" ? "Locked" : "Mark as Complete"}
                            </Button>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild size="lg" className="p-2 bg-green-600">
            <Link href="/vacancies">View Job Opportunities</Link>
            
          </Button>
        </div>
      </div>
    </div>
  )
}
