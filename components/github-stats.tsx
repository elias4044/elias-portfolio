"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GitBranch, Star, Users, Calendar } from "lucide-react"
import { useGitHubStats, useGitHubRepositories } from "@/hooks/use-github-data"
import { Skeleton } from "@/components/ui/skeleton"

export function GitHubStats() {
  const { stats, isLoading: statsLoading, isError: statsError } = useGitHubStats()
  const { repositories, isLoading: reposLoading, isError: reposError } = useGitHubRepositories(4, true)

  if (statsError || reposError || (stats && stats.error) || (repositories && repositories.error)) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-muted/50 border border-border rounded-lg p-8">
              <h3 className="text-lg font-semibold mb-2">GitHub Integration Not Configured</h3>
              <p className="text-muted-foreground mb-4">
                GitHub statistics are currently unavailable. This requires GitHub API configuration.
              </p>
              <div className="text-sm text-muted-foreground">
                <p>Mock data is displayed below for demonstration purposes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const githubStats =
    stats && stats.formattedStats
      ? [
          {
            label: "Total Repositories",
            value: stats.formattedStats.totalRepos || "0",
            icon: GitBranch,
            change: "Public repositories",
          },
          {
            label: "Total Stars",
            value: stats.formattedStats.totalStars || "0",
            icon: Star,
            change: "Across all repos",
          },
          {
            label: "Followers",
            value: stats.formattedStats.followers || "0",
            icon: Users,
            change: "GitHub followers",
          },
          {
            label: "Contributions",
            value: stats.formattedStats.contributions || "0",
            icon: Calendar,
            change: "This year",
          },
        ]
      : [
          {
            label: "Total Repositories",
            value: "12",
            icon: GitBranch,
            change: "Public repositories",
          },
          {
            label: "Total Stars",
            value: "47",
            icon: Star,
            change: "Across all repos",
          },
          {
            label: "Followers",
            value: "23",
            icon: Users,
            change: "GitHub followers",
          },
          {
            label: "Contributions",
            value: "284",
            icon: Calendar,
            change: "This year",
          },
        ]

  const displayRepositories =
    repositories && Array.isArray(repositories) && repositories.length > 0
      ? repositories
      : [
          {
            id: 1,
            name: "roblox-game-scripts",
            description: "Collection of Lua scripts for Roblox game development",
            language: "Lua",
            stargazers_count: 15,
            forks_count: 3,
          },
          {
            id: 2,
            name: "python-discord-bot",
            description: "A Discord bot built with Python for server management",
            language: "Python",
            stargazers_count: 8,
            forks_count: 2,
          },
          {
            id: 3,
            name: "portfolio-website",
            description: "My personal portfolio website built with Next.js",
            language: "TypeScript",
            stargazers_count: 12,
            forks_count: 1,
          },
          {
            id: 4,
            name: "web-scraper-tool",
            description: "Python web scraper for data collection projects",
            language: "Python",
            stargazers_count: 6,
            forks_count: 0,
          },
        ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            GitHub <span className="text-primary">Statistics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My open-source contributions and repository statistics.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statsLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-6 text-center">
                    <Skeleton className="w-12 h-12 rounded-lg mx-auto mb-4" />
                    <Skeleton className="h-8 w-16 mx-auto mb-2" />
                    <Skeleton className="h-4 w-24 mx-auto mb-1" />
                    <Skeleton className="h-3 w-20 mx-auto" />
                  </CardContent>
                </Card>
              ))
            : githubStats.map((stat) => (
                <Card key={stat.label} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.change}</div>
                  </CardContent>
                </Card>
              ))}
        </div>

        {/* Top Repositories */}
        <Card>
          <CardHeader>
            <CardTitle>Popular Repositories</CardTitle>
          </CardHeader>
          <CardContent>
            {reposLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="p-4 border border-border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <Skeleton className="h-5 w-32" />
                      <Skeleton className="h-5 w-16" />
                    </div>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4 mb-3" />
                    <div className="flex items-center gap-4">
                      <Skeleton className="h-3 w-12" />
                      <Skeleton className="h-3 w-12" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayRepositories.map((repo: any) => (
                  <div
                    key={repo.id}
                    className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors duration-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-primary">{repo.name}</h3>
                      {repo.language && (
                        <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                          {repo.language}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {repo.description || "No description available"}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitBranch className="h-3 w-3" />
                        <span>{repo.forks_count}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
