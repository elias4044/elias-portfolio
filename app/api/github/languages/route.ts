import { NextResponse } from "next/server"
import { getGitHubAPI, calculateLanguagePercentages } from "@/lib/github"

export async function GET() {
  try {
    const github = getGitHubAPI()
    const languageStats = await github.getLanguageStats()
    const languagePercentages = calculateLanguagePercentages(languageStats)

    return NextResponse.json(languagePercentages)
  } catch (error) {
    console.error("Error fetching GitHub language stats:", error)
    const mockLanguageStats = {
      TypeScript: 4,
      Python: 3,
      Lua: 2,
      JavaScript: 2,
      CSS: 1,
    }
    const mockLanguagePercentages = calculateLanguagePercentages(mockLanguageStats)
    return NextResponse.json(mockLanguagePercentages)
  }
}
