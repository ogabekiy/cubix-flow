"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowRight, CheckCircle2 } from "lucide-react"

/* 🔤 10 ta English savol */
const englishQuestions = [
  {
    id: 1,
    question: 'Choose the correct form: "She ___ to the store yesterday."',
    options: ["go", "goes", "went", "going"],
  },
  {
    id: 2,
    question: 'What is the past participle of "write"?',
    options: ["wrote", "written", "writing", "writes"],
  },
  {
    id: 3,
    question: "Choose the correct sentence:",
    options: [
      "He don't like apples",
      "He doesn't likes apples",
      "He doesn't like apples",
      "He not like apples",
    ],
  },
  {
    id: 4,
    question: "Choose the correct option: I have lived here ___ 5 years.",
    options: ["since", "for", "during", "from"],
  },
  {
    id: 5,
    question: "Which word is an adjective?",
    options: ["Quickly", "Beauty", "Beautiful", "Beautify"],
  },
  {
    id: 6,
    question: "Choose the correct sentence:",
    options: [
      "She can to drive",
      "She cans drive",
      "She can drive",
      "She can driving",
    ],
  },
  {
    id: 7,
    question: "What does 'reliable' mean?",
    options: [
      "Easy to break",
      "Can be trusted",
      "Very fast",
      "Very expensive",
    ],
  },
  {
    id: 8,
    question: "Choose the correct form: They ___ already finished.",
    options: ["has", "have", "having", "had been"],
  },
  {
    id: 9,
    question: "Which sentence is in Future Simple?",
    options: [
      "I am going to work",
      "I will work tomorrow",
      "I worked yesterday",
      "I have worked",
    ],
  },
  {
    id: 10,
    question: "Choose the correct word: She speaks English very ___.",
    options: ["good", "well", "best", "better"],
  },
]

export default function AssessmentPage() {
  const params = useParams()
  const router = useRouter()
  const careerId = params.careerId as string

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [completed, setCompleted] = useState(false)

  const progress =
    ((currentQuestion + 1) / englishQuestions.length) * 100

  const handleNext = () => {
    if (!selectedAnswer) return

    setSelectedAnswer("")

    if (currentQuestion < englishQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setCompleted(true)
    }
  }

  useEffect(() => {
    if (completed) {
      setTimeout(() => {
        router.push(`/roadmap/${careerId}`)
      }, 2500)
    }
  }, [completed, careerId, router])

  /* ✅ COMPLETE SCREEN */
  if (completed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">
              English Assessment Complete
            </CardTitle>
            <CardDescription>
              Analyzing your level and building your roadmap…
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  /* 🧪 TEST UI */
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-8">
          <div className="mb-2 flex justify-between text-sm text-muted-foreground">
            <span>English Level Test</span>
            <span>
              Question {currentQuestion + 1} of {englishQuestions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
              {englishQuestions[currentQuestion].question}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <RadioGroup
              value={selectedAnswer}
              onValueChange={setSelectedAnswer}
            >
              {englishQuestions[currentQuestion].options.map(
                (option, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent"
                  >
                    <RadioGroupItem
                      value={option}
                      id={`option-${index}`}
                    />
                    <Label
                      htmlFor={`option-${index}`}
                      className="flex-1 cursor-pointer"
                    >
                      {option}
                    </Label>
                  </div>
                )
              )}
            </RadioGroup>

            <Button
              onClick={handleNext}
              disabled={!selectedAnswer}
              className="w-full bg-green-600"
              size="lg"
            >
              {currentQuestion < englishQuestions.length - 1
                ? "Next Question"
                : "Finish Test"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
