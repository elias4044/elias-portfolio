import { NextResponse } from "next/server"

interface PortfolioData {
  name: string
  title: string
  bio: string
  location: string
  email: string
  social: {
    github: string
    twitter: string
  }
  skills: {
    frontend: string[]
    backend: string[]
    tools: string[]
  }
  experience: {
    years: number
    totalProjects: number
  }
  availability: {
    status: "available" | "busy" | "unavailable"
    message: string
  }
}

export async function GET() {
  try {
    const portfolioData: PortfolioData = {
      name: "Elias Gulam",
      title: "Full-Stack Developer",
      bio: "Passionate full-stack developer with 2+ years of experience creating digital solutions that make a difference.",
      location: "Halmstad, Sweden",
      email: "elias4044@proton.me",
      social: {
        github: "https://github.com/elias4044",
        twitter: "https://twitter.com/elias4044_",
      },
      skills: {
        frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Plain HTML+CSS+JS"],
        backend: ["Node.js", "Python", "Firebase"],
        tools: ["Git", "Docker", "Firebase", "Vercel", "Figma"],
      },
      experience: {
        years: 3,
        totalProjects: 50,
      },
      availability: {
        status: "available",
        message: "Currently available for freelance projects and full-time opportunities.",
      },
    }

    return NextResponse.json(portfolioData, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    })
  } catch (error) {
    console.error("Error fetching portfolio data:", error)
    return NextResponse.json({ error: "Failed to fetch portfolio data" }, { status: 500 })
  }
}
