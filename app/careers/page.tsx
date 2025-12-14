"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, ArrowLeft, Search } from "lucide-react"
import Link from "next/link"

const careers = [
  {
    id: "frontend-developer",
    name: "Frontend Developer",
    description: "Build beautiful and interactive user interfaces for websites and applications.",
    englishRequired: true,
    icon: "💻",
    keywords: ["creative", "technical", "problem-solving", "visual", "analytical"]
  },
  {
    id: "graphic-designer",
    name: "Graphic Designer",
    description: "Create visual concepts and designs for brands, marketing, and digital media.",
    englishRequired: false,
    icon: "🎨",
    keywords: ["creative", "artistic", "visual", "design", "innovative"]
  },
  {
    id: "electrician",
    name: "Electrician",
    description: "Install, maintain, and repair electrical systems in buildings and facilities.",
    englishRequired: false,
    icon: "⚡",
    keywords: ["practical", "technical", "hands-on", "problem-solving", "detail-oriented"]
  },
  {
    id: "smm-specialist",
    name: "Social Media Manager",
    description: "Manage social media presence, create content, and engage with online communities.",
    englishRequired: true,
    icon: "📱",
    keywords: ["creative", "communication", "social", "trendy", "writing"]
  },
  {
    id: "data-analyst",
    name: "Data Analyst",
    description: "Analyze data to help businesses make informed decisions and strategies.",
    englishRequired: true,
    icon: "📊",
    keywords: ["analytical", "logical", "mathematical", "problem-solving", "detail-oriented"]
  },
  {
    id: "photographer",
    name: "Photographer",
    description: "Capture and edit professional photos for events, products, and creative projects.",
    englishRequired: false,
    icon: "📸",
    keywords: ["creative", "artistic", "visual", "technical", "observant"]
  },
  {
    id: "backend-developer",
    name: "Backend Developer",
    description: "Build server-side applications, databases, and APIs for web applications.",
    englishRequired: true,
    icon: "⚙️",
    keywords: ["technical", "logical", "problem-solving", "analytical", "systematic"]
  },
  {
    id: "ui-ux-designer",
    name: "UI/UX Designer",
    description: "Design user experiences and interfaces that are intuitive and delightful.",
    englishRequired: true,
    icon: "✨",
    keywords: ["creative", "empathetic", "analytical", "design", "user-focused"]
  },
  {
    id: "content-writer",
    name: "Content Writer",
    description: "Create engaging written content for blogs, websites, and marketing materials.",
    englishRequired: true,
    icon: "✍️",
    keywords: ["creative", "writing", "communication", "research", "storytelling"]
  },
]

const questions = [
  {
    id: "name",
    question: "What's your name?",
    placeholder: "Enter your name",
    options: []
  },
  {
    id: "age",
    question: "How old are you?",
    placeholder: "Enter your age",
    options: []
  },
  {
    id: "english",
    question: "How would you rate your English proficiency?",
    placeholder: "",
    options: ["Beginner", "Intermediate", "Advanced", "Native"]
  },
  {
    id: "work_style",
    question: "What describes your ideal work environment?",
    placeholder: "",
    options: ["Working alone on focused tasks", "Collaborating with a team", "Mix of both", "Leading and managing others"]
  },
  {
    id: "personality",
    question: "Which personality trait describes you best?",
    placeholder: "",
    options: ["Creative and artistic", "Analytical and logical", "Social and communicative", "Practical and hands-on"]
  },
  {
    id: "problem_solving",
    question: "How do you prefer to solve problems?",
    placeholder: "",
    options: ["Through creative thinking", "Using data and analysis", "Discussing with others", "Trying practical solutions"]
  },
  {
    id: "learning",
    question: "What's your preferred learning style?",
    placeholder: "",
    options: ["Visual (videos, diagrams)", "Reading and writing", "Hands-on practice", "Discussion and collaboration"]
  },
  {
    id: "interests",
    question: "What interests you most?",
    placeholder: "",
    options: ["Technology", "Art & Design", "Writing", "Mathematics", "Social Media", "Photography", "Building things", "Analyzing data"]
  },
  {
    id: "hobbies",
    question: "What are your hobbies?",
    placeholder: "",
    options: ["Coding/Programming", "Drawing/Painting", "Photography", "Reading", "Gaming", "Sports", "Music", "DIY projects"]
  },
  {
    id: "strength",
    question: "What's your greatest strength?",
    placeholder: "",
    options: ["Creativity", "Technical skills", "Communication", "Problem-solving", "Attention to detail"]
  },
  {
    id: "motivation",
    question: "What motivates you most in a career?",
    placeholder: "",
    options: ["Creative expression", "Solving complex problems", "Helping others", "Financial stability", "Continuous learning"]
  },
  {
    id: "computer_comfort",
    question: "How comfortable are you with technology and computers?",
    placeholder: "",
    options: ["Very comfortable", "Somewhat comfortable", "Basic skills", "Prefer hands-on work"]
  },
]

export default function CareerAssessmentApp() {
  const [stage, setStage] = useState("assessment")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [searchQuery, setSearchQuery] = useState("")
  const [analyzingProgress, setAnalyzingProgress] = useState(0)
  const [careerMatches, setCareerMatches] = useState<any[]>([])

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: value }))
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      analyzeResults()
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const analyzeResults = () => {
    setStage("analyzing")
    setAnalyzingProgress(0)

    const interval = setInterval(() => {
      setAnalyzingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          calculateMatches()
          setStage("results")
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  const calculateMatches = () => {
    const matches = careers.map(career => {
      let score = 65 + Math.random() * 15

      if (career.englishRequired) {
        const englishLevel = answers.english
        if (englishLevel === "Advanced" || englishLevel === "Native") {
          score += 8
        } else if (englishLevel === "Intermediate") {
          score += 3
        } else {
          score -= 10
        }
      } else {
        score += 2
      }

      if (answers.personality === "Creative and artistic" && career.keywords.includes("creative")) {
        score += 10
      }
      if (answers.personality === "Analytical and logical" && career.keywords.includes("analytical")) {
        score += 10
      }
      if (answers.personality === "Practical and hands-on" && career.keywords.includes("hands-on")) {
        score += 10
      }

      if (answers.computer_comfort === "Very comfortable" && career.keywords.includes("technical")) {
        score += 5
      }

      return {
        ...career,
        matchScore: Math.min(99, Math.round(score))
      }
    }).sort((a, b) => b.matchScore - a.matchScore)

    setCareerMatches(matches)
  }

  const filteredCareers = careerMatches.filter(
    (career) =>
      career.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      career.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const currentQ = questions[currentQuestion]
  const isAnswered = answers[currentQ?.id] !== undefined && answers[currentQ?.id] !== ""

  if (stage === "assessment") {
    return (
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold">Career Assessment</h1>
            <p className="text-muted-foreground">Answer these questions to find your perfect career match</p>
          </div>

          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
            </div>
            <div className="h-2 w-full rounded-full bg-secondary">
              <div 
                className="h-2 rounded-full bg-green-600 transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{currentQ.question}</CardTitle>
            </CardHeader>
            <CardContent>
              {currentQ.options.length === 0 ? (
                <Input
                  placeholder={currentQ.placeholder}
                  value={answers[currentQ.id] || ""}
                  onChange={(e) => handleAnswer(e.target.value)}
                  className="text-lg"
                />
              ) : (
                <div className="space-y-2">
                  {currentQ.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      className={`w-full rounded-lg border-2 p-4 text-left transition-all hover:border-green-600 ${
                        answers[currentQ.id] === option
                          ? "border-green-600 bg-green-50"
                          : "border-border"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentQuestion === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={!isAnswered}
                className="bg-green-600"
              >
                {currentQuestion === questions.length - 1 ? "Analyze Results" : "Next"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    )
  }

  if (stage === "analyzing") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="text-6xl">🤖</div>
            </div>
            <CardTitle className="text-2xl">Analyzing Your Profile</CardTitle>
            <CardDescription>Our AI is matching you with the best careers...</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="h-3 w-full rounded-full bg-secondary">
                <div 
                  className="h-3 rounded-full bg-green-600 transition-all duration-300"
                  style={{ width: `${analyzingProgress}%` }}
                />
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  {analyzingProgress > 20 && <span className="text-green-600">✓</span>}
                  <span>Processing personality traits...</span>
                </div>
                <div className="flex items-center gap-2">
                  {analyzingProgress > 40 && <span className="text-green-600">✓</span>}
                  <span>Evaluating skills and interests...</span>
                </div>
                <div className="flex items-center gap-2">
                  {analyzingProgress > 60 && <span className="text-green-600">✓</span>}
                  <span>Matching with career paths...</span>
                </div>
                <div className="flex items-center gap-2">
                  {analyzingProgress > 80 && <span className="text-green-600">✓</span>}
                  <span>Calculating compatibility scores...</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 flex justify-center">
            <Badge variant="outline" className="border-green-600 bg-green-50 px-4 py-2 text-green-700">
              AI Analysis Complete
            </Badge>
          </div>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            Your Career Matches
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Based on your responses, we've calculated your compatibility with each career path
          </p>
        </div>

        <div className="mb-8">
          <div className="relative mx-auto max-w-xl">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search careers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCareers.map((career, index) => (
            <Card key={career.id} className="flex flex-col transition-all hover:border-primary/50 hover:shadow-lg relative">
              {index < 3 && (
                <div className="absolute -top-2 -right-2 z-10">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                    Top {index + 1}
                  </Badge>
                </div>
              )}
              <CardHeader>
                <div className="mb-4 text-4xl">{career.icon}</div>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-xl">{career.name}</CardTitle>
                  {career.englishRequired ? (
                    <Badge variant="default" className="shrink-0">
                      English Required
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="shrink-0">
                      No English
                    </Badge>
                  )}
                </div>
                <CardDescription className="mt-2">{career.description}</CardDescription>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold">AI Match Score</span>
                    <span className={`font-bold ${
                      career.matchScore >= 85 ? "text-green-600" :
                      career.matchScore >= 70 ? "text-blue-600" :
                      "text-muted-foreground"
                    }`}>
                      {career.matchScore}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div 
                      className={`h-2 rounded-full transition-all ${
                        career.matchScore >= 85 ? "bg-green-600" :
                        career.matchScore >= 70 ? "bg-blue-600" :
                        "bg-gray-600"
                      }`}
                      style={{ width: `${career.matchScore}%` }}
                    />
                  </div>
                </div>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button asChild className="w-full bg-green-600">
                  <Link href={`/assessment/${career.id}?english=${career.englishRequired}`}>
                    View your roadmap
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredCareers.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-muted-foreground">No careers found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}