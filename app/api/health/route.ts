export const runtime = "nodejs";
import { NextResponse } from "next/server"

export async function GET() {
  const healthData = {
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || "development",
    version: "1.0.0",
    services: {
      github: process.env.GITHUB_TOKEN ? "configured" : "not configured",
      discord: process.env.DISCORD_WEBHOOK_URL ? "configured" : "not configured",
    },
  }

  return NextResponse.json(healthData, { status: 200 })
}
