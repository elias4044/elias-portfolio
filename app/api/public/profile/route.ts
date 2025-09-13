export const runtime = "nodejs";
import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json({
        name: "Elias Gulam",
        bio: "14 y/o Fullstack Developer. Student at IES. Building cool stuff with React, Next.js, and TypeScript.",
        socials: {
            github: "https://github.com/elias4044",
            twitter: "https://twitter.com/elias4044_",
            website: "https://elias4044.vercel.app"
        },
        location: "Halmstad, Sweden"
    })
}