import { NextResponse } from "next/server"

interface PortfolioData {
  name: string
  title: string
  bio: string
  location: string
  email: string
  social: {
    github: string
    linkedin: string
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
    clientsSatisfied: number
  }
  availability: {
    status: "available" | "busy" | "unavailable"
    message: string
  }
}

export async function GET() {
  try {
    const portfolioData: PortfolioData = {
      name: "Your Name",
      title: "Full-Stack Developer",
      bio: "Passionate full-stack developer with 5+ years of experience creating digital solutions that make a difference.",
      location: "San Francisco, CA",
      email: "hello@yourname.com",
      social: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourname",
        twitter: "https://twitter.com/yourusername",
      },
      skills: {
        frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
        backend: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
        tools: ["Git", "Docker", "AWS", "Vercel", "Figma"],
      },
      experience: {
        years: 5,
        totalProjects: 50,
        clientsSatisfied: 45,
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
