import { NextResponse } from "next/server";
import { z } from "zod";
import { sendContactEmail, isEmailConfigured } from "@/lib/send-contact-email";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Valid email is required"),
  subject: z.string().trim().min(2, "Subject is required").max(200),
  message: z.string().trim().min(2, "Message is required").max(5000),
});

export async function POST(request: Request) {
  try {
    if (!isEmailConfigured()) {
      return NextResponse.json({ useFallback: true }, { status: 503 });
    }

    const body = await request.json();
    const data = contactSchema.parse(body);

    await sendContactEmail(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues[0]?.message ?? "Invalid form data." },
        { status: 400 }
      );
    }

    if (error instanceof Error && error.message === "EMAIL_NOT_CONFIGURED") {
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Add RESEND_API_KEY or SMTP settings to .env.local.",
        },
        { status: 503 }
      );
    }

    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Unable to send your message. Please try again later." },
      { status: 500 }
    );
  }
}
