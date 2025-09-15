import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Public project data
    const projects = [
      {
        id: 1,
        name: "Portfolio Website",
        description: "My personal portfolio built with Next.js and Tailwind CSS",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        status: "active",
        year: 2025,
      },
      {
        id: 2,
        name: "Another Portfolio Website",
        description: "A older version of my portfolio built with plain HTML+CSS+JS. Exists as a NPM package.",
        tech: ["HTML", "CSS", "JavaScript", "NPM"],
        status: "completed",
        url: "https://github.com/elias4044/elias-portfolio/tree/v1",
        year: 2025,
      },
      {
        id: 3,
        name: "Roblox Game Scripts",
        description: "Various game mechanics and UI scripts for Roblox",
        tech: ["Lua", "Roblox Studio"],
        status: "completed",
        url: null,
        year: 2023,
      },
      {
        id: 4,
        name: "Schoolsoft+",
        description: "A full-stack alternative to Schoolsoft, a Swedish school management system. Built to be easier for your eyes, and faster.",
        tech: ["HTML", "CSS", "JS", "Vercel", "Firebase"],
        status: "active",
        url: "https://schoolsoftplus.vercel.app",
        year: 2024,
      },
    ]

    return NextResponse.json({
      projects,
      total: projects.length,
      lastUpdated: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 })
  }
}
