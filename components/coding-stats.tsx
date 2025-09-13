"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useGitHubLanguages } from "@/hooks/use-github-data"
import { Skeleton } from "@/components/ui/skeleton"

const weeklyStats = [
  { day: "Mon", hours: 8.5 },
  { day: "Tue", hours: 7.2 },
  { day: "Wed", hours: 9.1 },
  { day: "Thu", hours: 6.8 },
  { day: "Fri", hours: 8.9 },
  { day: "Sat", hours: 4.2 },
  { day: "Sun", hours: 2.1 },
]

export function CodingStats() {
  const { languages, isLoading: languagesLoading, isError: languagesError } = useGitHubLanguages()

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Coding <span className="text-primary">Analytics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights into my coding habits and language preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Language Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Language Distribution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {languagesLoading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-8" />
                    </div>
                    <Skeleton className="h-2 w-full" />
                  </div>
                ))
              ) : languagesError ? (
                <p className="text-muted-foreground text-center">Unable to load language data</p>
              ) : languages && languages.length > 0 ? (
                languages.slice(0, 5).map((lang: any) => (
                  <div key={lang.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-muted-foreground">{lang.percentage}%</span>
                    </div>
                    <Progress value={lang.percentage} className="h-2" />
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground text-center">No language data available</p>
              )}
            </CardContent>
          </Card>

          {/* Weekly Coding Hours */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Coding Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyStats.map((day) => (
                  <div key={day.day} className="flex items-center gap-4">
                    <div className="w-8 text-sm font-medium">{day.day}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(day.hours / 10) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-8">{day.hours}h</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
