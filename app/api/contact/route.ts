import { type NextRequest, NextResponse } from "next/server"

interface ContactFormData {
  name: string
  email: string
  subject: string
  projectType: string
  budget: string
  message: string
}

interface DiscordEmbed {
  title: string
  description: string
  color: number
  fields: Array<{
    name: string
    value: string
    inline?: boolean
  }>
  timestamp: string
  footer: {
    text: string
  }
}

interface DiscordWebhookPayload {
  content?: string
  embeds: DiscordEmbed[]
}

async function sendToDiscord(formData: ContactFormData): Promise<void> {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL

  if (!webhookUrl) {
    throw new Error("Discord webhook URL not configured")
  }

  // Create a rich embed for Discord
  const embed: DiscordEmbed = {
    title: "🚀 New Portfolio Contact Form Submission",
    description: `**${formData.subject}**`,
    color: 0x0891b2, // Primary color from our design system
    fields: [
      {
        name: "👤 Contact Information",
        value: `**Name:** ${formData.name}\n**Email:** ${formData.email}`,
        inline: false,
      },
      {
        name: "📋 Project Details",
        value: `**Type:** ${formData.projectType || "Not specified"}\n**Budget:** ${formData.budget || "Not specified"}`,
        inline: false,
      },
      {
        name: "💬 Message",
        value: formData.message.length > 1000 ? formData.message.substring(0, 1000) + "..." : formData.message,
        inline: false,
      },
    ],
    timestamp: new Date().toISOString(),
    footer: {
      text: "Portfolio Contact Form",
    },
  }

  const payload: DiscordWebhookPayload = {
    content: `📧 **New contact form submission from ${formData.name}**`,
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
    const errorText = await response.text()
    throw new Error(`Discord webhook failed: ${response.status} - ${errorText}`)
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json()

    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Validate message length
    if (formData.message.length < 10) {
      return NextResponse.json({ error: "Message must be at least 10 characters long" }, { status: 400 })
    }

    if (formData.message.length > 2000) {
      return NextResponse.json({ error: "Message must be less than 2000 characters" }, { status: 400 })
    }

    // Send to Discord
    await sendToDiscord(formData)

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)

    // Return appropriate error message
    if (error instanceof Error) {
      if (error.message.includes("Discord webhook")) {
        return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 })
      }
    }

    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
