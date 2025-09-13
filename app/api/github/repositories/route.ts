export const runtime = "nodejs";
import { NextResponse } from "next/server"
import { getGitHubAPI } from "@/lib/github"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = Number.parseInt(searchParams.get("limit") || "6")
    const popular = searchParams.get("popular") === "true"

    const github = getGitHubAPI()

    let repos
    if (popular) {
      repos = await github.getPopularRepositories(limit)
    } else {
      const allRepos = await github.getRepositories()
      repos = allRepos.slice(0, limit)
    }

    return NextResponse.json(repos)
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error)
    const mockRepos = [
      {
        id: 1,
        name: "roblox-game-scripts",
        full_name: "elias4044/roblox-game-scripts",
        description: "Collection of Lua scripts for Roblox game development - my first coding projects!",
        html_url: "https://github.com/elias4044/roblox-game-scripts",
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
        full_name: "elias4044/python-discord-bot",
        description: "A Discord bot built with Python for server management and fun commands",
        html_url: "https://github.com/elias4044/python-discord-bot",
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
        full_name: "elias4044/portfolio-website",
        description: "My personal portfolio website built with Next.js and Tailwind CSS",
        html_url: "https://github.com/elias4044/portfolio-website",
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
        full_name: "elias4044/web-scraper-tool",
        description: "Python web scraper for data collection projects and learning automation",
        html_url: "https://github.com/elias4044/web-scraper-tool",
        stargazers_count: 6,
        forks_count: 0,
        language: "Python",
        created_at: "2023-11-20T00:00:00Z",
        updated_at: "2024-01-10T00:00:00Z",
        topics: ["python", "web-scraping", "automation"],
      },
    ]

    const { searchParams } = new URL(request.url)
    const limit = Number.parseInt(searchParams.get("limit") || "6")
    const popular = searchParams.get("popular") === "true"

    let repos = mockRepos
    if (popular) {
      repos = mockRepos.sort((a, b) => b.stargazers_count - a.stargazers_count)
    }

    return NextResponse.json(repos.slice(0, limit))
  }
}
