import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Handles POST requests to /api
export async function POST(req: NextRequest) {
  try {
    // Parse the request body as JSON
    const body = await req.json();

    // Extract form fields
    const { name, email, message, subject } = body;

    // Email configuration
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      tls: { rejectUnauthorized: false },
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    // Sending email
    const mail = await transporter.sendMail({
      from: email,
      to: "vivingrams@hotmail.com",
      subject: `Form submission: ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Email sent successfully:", mail.messageId);
    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
