import { NextResponse } from "next/server";

import { fetchCMS } from "@/lib/cms";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const response = await fetchCMS("/contact-messages", {
      method: "POST",
      body: JSON.stringify({
        data: {
          Name: body.name,
          Email: body.email,
          Phone: body.phone,
          Message: body.message,
        },
      }),
    });

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}
