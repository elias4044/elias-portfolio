export const runtime = "nodejs";
import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Public stats that can be shared
    const stats = {
      age: 14,
      yearsOfExperience: 2,
      totalProjects: 15,
      moneyEarned: 0.1,
      linesOfCode: 12847,
      coffeeConsumed: 1,
      bugsFixed: 342,
      languages: ["JavaScript", "TypeScript", "Python", "Lua", "HTML", "CSS"],
      frameworks: ["React", "Next.js", "Node.js", "Tailwind CSS"],
      currentStatus: "Building awesome stuff! 🚀",
      lastUpdated: new Date().toISOString(),
    }

    return NextResponse.json(stats)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 })
  }
}
