import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  if (!process.env.RESEND_API_KEY) throw new Error("RESEND_API_KEY is not set");
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const resend = getResend();
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["roobeshrk1@gmail.com"],
      replyTo: email,
      subject: `New message from ${name} via portfolio`,
      html: `
        <div style="font-family: monospace; background: #0a0a0a; color: #f0f0f0; padding: 24px; border-radius: 8px; max-width: 560px;">
          <h2 style="color: #7c6fcd; margin: 0 0 16px;">New Portfolio Message</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="color: #666; padding: 6px 0; width: 80px;">From:</td>
              <td style="color: #f0f0f0;">${name}</td>
            </tr>
            <tr>
              <td style="color: #666; padding: 6px 0;">Email:</td>
              <td style="color: #a89de8;"><a href="mailto:${email}" style="color: #a89de8;">${email}</a></td>
            </tr>
          </table>
          <hr style="border: 1px solid #1f1f1f; margin: 16px 0;" />
          <p style="color: #a0a0a0; line-height: 1.7; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
