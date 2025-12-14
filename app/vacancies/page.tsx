"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ExternalLink, MapPin, Briefcase, Search } from "lucide-react"

const vacancies = [
  {
    id: 1,
    title: "Junior Frontend Developer",
    company: "TechStart Inc.",
    location: "Remote",
    type: "Full-time",
    level: "Junior",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    description: "Join our team as a junior frontend developer and work on exciting projects.",
  },
  {
    id: 2,
    title: "Frontend Developer Intern",
    company: "WebSolutions",
    location: "New York, NY",
    type: "Internship",
    level: "Intern",
    skills: ["HTML", "CSS", "JavaScript"],
    description: "Gain hands-on experience building modern web applications.",
  },
  {
    id: 3,
    title: "Junior React Developer",
    company: "Digital Agency",
    location: "Remote",
    type: "Full-time",
    level: "Junior",
    skills: ["React", "TypeScript", "CSS"],
    description: "Build responsive and performant web applications with React.",
  },
  {
    id: 4,
    title: "UI Developer",
    company: "Creative Studio",
    location: "San Francisco, CA",
    type: "Part-time",
    level: "Junior",
    skills: ["HTML", "CSS", "JavaScript", "Figma"],
    description: "Create beautiful user interfaces from design mockups.",
  },
  {
    id: 5,
    title: "Web Developer Trainee",
    company: "LearnTech",
    location: "Remote",
    type: "Internship",
    level: "Intern",
    skills: ["HTML", "CSS", "JavaScript"],
    description: "Entry-level position with mentorship and training provided.",
  },
  {
    id: 6,
    title: "Junior Full Stack Developer",
    company: "StartupCo",
    location: "Austin, TX",
    type: "Full-time",
    level: "Junior",
    skills: ["React", "Node.js", "MongoDB"],
    description: "Work on both frontend and backend of our platform.",
  },
]

export default function VacanciesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterLevel, setFilterLevel] = useState<string>("all")
  const [filterType, setFilterType] = useState<string>("all")

  const filteredVacancies = vacancies.filter((vacancy) => {
    const matchesSearch =
      vacancy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vacancy.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vacancy.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesLevel = filterLevel === "all" || vacancy.level === filterLevel
    const matchesType = filterType === "all" || vacancy.type === filterType

    return matchesSearch && matchesLevel && matchesType
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">Job Opportunities</h1>
          <div className="flex justify-center">
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Find the perfect job or internship to start your career
          </p>
          </div>
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by title, company, or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Select value={filterLevel} onValueChange={setFilterLevel}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Filter by level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Intern">Internship</SelectItem>
                <SelectItem value="Junior">Junior</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Full-time">Full-time</SelectItem>
                <SelectItem value="Part-time">Part-time</SelectItem>
                <SelectItem value="Internship">Internship</SelectItem>
              </SelectContent>
            </Select>

            {(filterLevel !== "all" || filterType !== "all" || searchQuery) && (
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setFilterLevel("all")
                  setFilterType("all")
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-4">
          {filteredVacancies.map((vacancy) => (
            <Card key={vacancy.id} className="transition-all hover:border-primary/50 hover:shadow-lg">
              <CardHeader>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl">{vacancy.title}</CardTitle>
                    <CardDescription className="mt-1 text-base">{vacancy.company}</CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    <Badge variant="secondary">{vacancy.level}</Badge>
                    <Badge variant="outline">{vacancy.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">{vacancy.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {vacancy.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{vacancy.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{vacancy.type}</span>
                      </div>
                    </div>

                    <Button>
                      Apply Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredVacancies.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-muted-foreground">No vacancies found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
