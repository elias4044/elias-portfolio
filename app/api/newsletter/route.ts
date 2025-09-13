export const runtime = "nodejs";
import { type NextRequest, NextResponse } from "next/server"

interface NewsletterSubscription {
  email: string
  name?: string
  interests?: string[]
}

async function sendToDiscordNewsletter(data: NewsletterSubscription): Promise<void> {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL

  if (!webhookUrl) {
    throw new Error("Discord webhook URL not configured")
  }

  const embed = {
    title: "📧 New Newsletter Subscription",
    description: "Someone subscribed to your newsletter!",
    color: 0x0891b2,
    fields: [
      {
        name: "📧 Email",
        value: data.email,
        inline: true,
      },
      {
        name: "👤 Name",
        value: data.name || "Not provided",
        inline: true,
      },
      {
        name: "🎯 Interests",
        value: data.interests?.join(", ") || "Not specified",
        inline: false,
      },
    ],
    timestamp: new Date().toISOString(),
    footer: {
      text: "Newsletter Subscription",
    },
  }

  const payload = {
    content: "📬 **New newsletter subscriber!**",
    embeds: [embed],
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(`Discord webhook failed: ${response.status}`)
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: NewsletterSubscription = await request.json()

    // Validate email
    if (!data.email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Send notification to Discord
    await sendToDiscordNewsletter(data)

    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed to newsletter",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json({ error: "Failed to subscribe to newsletter" }, { status: 500 })
  }
}
