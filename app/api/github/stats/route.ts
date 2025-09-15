import { NextResponse } from "next/server"
import { getGitHubAPI, formatNumber } from "@/lib/github"

export async function GET() {
  try {
    const github = getGitHubAPI()

    const isMockData = !process.env.GITHUB_TOKEN

    // Fetch all required data in parallel
    const [userData, repos, totalStars, contributions] = await Promise.all([
      github.getUserData(),
      github.getRepositories(),
      github.getTotalStars(),
      github.getContributionStats(),
    ])

    const stats = {
      totalRepos: userData.public_repos,
      totalStars,
      followers: userData.followers,
      contributions: contributions.thisYear,
      isMockData,
      formattedStats: {
        totalRepos: formatNumber(userData.public_repos),
        totalStars: formatNumber(totalStars),
        followers: formatNumber(userData.followers),
        contributions: formatNumber(contributions.thisYear),
      },
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error("Error fetching GitHub stats:", error)
    return NextResponse.json({
      totalRepos: 12,
      totalStars: 41,
      followers: 23,
      contributions: 284,
      isMockData: true,
      formattedStats: {
        totalRepos: "12",
        totalStars: "41",
        followers: "23",
        contributions: "284",
      },
    })
  }
}
