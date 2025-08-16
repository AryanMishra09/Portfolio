import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    const emailContent = `
      New contact form submission from your portfolio:
      
      Name: ${name}
      Email: ${email}
      Message: ${message}
      
      Sent from: ${request.headers.get("origin") || "Portfolio Website"}
      Time: ${new Date().toISOString()}
    `

    // For now, we'll log the submission and return success
    // In production, you would integrate with an email service like:
    // - Resend (recommended for Next.js)
    // - SendGrid
    // - Nodemailer with SMTP
    console.log("[v0] Contact form submission:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Sorry, there was an error sending your message. Please try again.",
      },
      { status: 500 },
    )
  }
}
