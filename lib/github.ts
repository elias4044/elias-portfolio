interface GitHubUser {
  login: string
  name: string
  bio: string
  public_repos: number
  followers: number
  following: number
  created_at: string
  avatar_url: string
  html_url: string
}

interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
  created_at: string
  updated_at: string
  topics: string[]
}

interface GitHubContributions {
  total: number
  weeks: Array<{
    contributionDays: Array<{
      contributionCount: number
      date: string
    }>
  }>
}

const GITHUB_API_BASE = "https://api.github.com"

export class GitHubAPI {
  private token: string
  private username: string

  constructor(token: string, username: string) {
    this.token = token
    this.username = username
  }

  private async fetchWithAuth(url: string) {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    return response.json()
  }

  async getUserData(): Promise<GitHubUser> {
    return this.fetchWithAuth(`${GITHUB_API_BASE}/users/${this.username}`)
  }

  async getRepositories(sort: "updated" | "created" | "pushed" = "updated", per_page = 100): Promise<GitHubRepo[]> {
    return this.fetchWithAuth(
      `${GITHUB_API_BASE}/users/${this.username}/repos?sort=${sort}&per_page=${per_page}&type=owner`,
    )
  }

  async getPopularRepositories(limit = 6): Promise<GitHubRepo[]> {
    const repos = await this.getRepositories("updated", 100)
    return repos
      .filter((repo) => !repo.name.includes(".github.io") && repo.stargazers_count > 0)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, limit)
  }

  async getLanguageStats(): Promise<Record<string, number>> {
    const repos = await this.getRepositories("updated", 100)
    const languageStats: Record<string, number> = {}

    for (const repo of repos) {
      if (repo.language) {
        languageStats[repo.language] = (languageStats[repo.language] || 0) + 1
      }
    }

    return languageStats
  }

  async getTotalStars(): Promise<number> {
    const repos = await this.getRepositories("updated", 100)
    return repos.reduce((total, repo) => total + repo.stargazers_count, 0)
  }

  async getContributionStats(): Promise<{ thisYear: number; total: number }> {
    // Note: GitHub's contributions API requires GraphQL for detailed data
    // For now, we'll estimate based on repository activity
    const repos = await this.getRepositories("updated", 100)
    const currentYear = new Date().getFullYear()

    const thisYearRepos = repos.filter((repo) => new Date(repo.updated_at).getFullYear() === currentYear).length

    // Estimate contributions (this is a simplified calculation)
    const thisYear = thisYearRepos * 50 // Rough estimate
    const total = repos.length * 75 // Rough estimate

    return { thisYear, total }
  }
}

export function getGitHubAPI() {
  const token = process.env.GITHUB_TOKEN
  const username = process.env.GITHUB_USERNAME || "elias4044"

  if (!token) {
    // Return mock API instance when token is missing
    return new MockGitHubAPI(username)
  }

  return new GitHubAPI(token, username)
}

export class MockGitHubAPI {
  private username: string

  constructor(username: string) {
    this.username = username
  }

  async getUserData(): Promise<GitHubUser> {
    return {
      login: this.username,
      name: "Elias",
      bio: "14-year-old developer passionate about coding. Started with Roblox, now building web apps!",
      public_repos: 12,
      followers: 23,
      following: 45,
      created_at: "2022-03-15T00:00:00Z",
      avatar_url: "/young-developer-avatar.jpg",
      html_url: `https://github.com/${this.username}`,
    }
  }

  async getRepositories(): Promise<GitHubRepo[]> {
    return [
      {
        id: 1,
        name: "roblox-game-scripts",
        full_name: `${this.username}/roblox-game-scripts`,
        description: "Collection of Lua scripts for Roblox game development - my first coding projects!",
        html_url: `https://github.com/${this.username}/roblox-game-scripts`,
        stargazers_count: 15,
        forks_count: 3,
        language: "Lua",
        created_at: "2022-06-01T00:00:00Z",
        updated_at: "2024-01-15T00:00:00Z",
        topics: ["roblox", "lua", "game-development"],
      },
      {
        id: 2,
        name: "python-discord-bot",
        full_name: `${this.username}/python-discord-bot`,
        description: "A Discord bot built with Python for server management and fun commands",
        html_url: `https://github.com/${this.username}/python-discord-bot`,
        stargazers_count: 8,
        forks_count: 2,
        language: "Python",
        created_at: "2023-02-10T00:00:00Z",
        updated_at: "2024-02-20T00:00:00Z",
        topics: ["discord", "python", "bot"],
      },
      {
        id: 3,
        name: "portfolio-website",
        full_name: `${this.username}/portfolio-website`,
        description: "My personal portfolio website built with Next.js and Tailwind CSS",
        html_url: `https://github.com/${this.username}/portfolio-website`,
        stargazers_count: 12,
        forks_count: 1,
        language: "TypeScript",
        created_at: "2023-08-05T00:00:00Z",
        updated_at: "2024-03-01T00:00:00Z",
        topics: ["nextjs", "portfolio", "typescript", "tailwindcss"],
      },
      {
        id: 4,
        name: "web-scraper-tool",
        full_name: `${this.username}/web-scraper-tool`,
        description: "Python web scraper for data collection projects and learning automation",
        html_url: `https://github.com/${this.username}/web-scraper-tool`,
        stargazers_count: 6,
        forks_count: 0,
        language: "Python",
        created_at: "2023-11-20T00:00:00Z",
        updated_at: "2024-01-10T00:00:00Z",
        topics: ["python", "web-scraping", "automation"],
      },
    ]
  }

  async getPopularRepositories(limit = 6): Promise<GitHubRepo[]> {
    const repos = await this.getRepositories()
    return repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, limit)
  }

  async getLanguageStats(): Promise<Record<string, number>> {
    return {
      TypeScript: 4,
      Python: 3,
      Lua: 2,
      JavaScript: 2,
      CSS: 1,
    }
  }

  async getTotalStars(): Promise<number> {
    return 41 // Sum of all stars from mock repos
  }

  async getContributionStats(): Promise<{ thisYear: number; total: number }> {
    return {
      thisYear: 284,
      total: 520,
    }
  }
}

// Helper function to format numbers
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M"
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K"
  }
  return num.toString()
}

// Helper function to calculate percentage for language stats
export function calculateLanguagePercentages(languageStats: Record<string, number>) {
  const total = Object.values(languageStats).reduce((sum, count) => sum + count, 0)
  const percentages: Array<{ name: string; percentage: number; count: number }> = []

  for (const [language, count] of Object.entries(languageStats)) {
    const percentage = Math.round((count / total) * 100)
    if (percentage > 0) {
      percentages.push({ name: language, percentage, count })
    }
  }

  return percentages.sort((a, b) => b.percentage - a.percentage)
}
