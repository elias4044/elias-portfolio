import { NextResponse } from "next/server"
import { getGitHubAPI } from "@/lib/github"

export async function GET() {
  try {
    const github = getGitHubAPI()
    const userData = await github.getUserData()

    return NextResponse.json(userData)
  } catch (error) {
    console.error("Error fetching GitHub user data:", error)
    return NextResponse.json({ error: "Failed to fetch GitHub user data" }, { status: 500 })
  }
}
