import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    email: "elias4044@proton.me",
    email2: "elis321yt@gmail.com",
    website: "elias4044.vercel.app",
    github: "@elias4044",
    discord: "elias4044",
    discordURL: "https://discord.com/users/795670822437912606",
    twitter: "@elias4044_"
  })
}