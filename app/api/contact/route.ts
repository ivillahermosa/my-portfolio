
import { NextRequest, NextResponse } from "next/server";
import { submitContactForm } from "../../contact/actions";

export async function POST(
    req: NextRequest
) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "anonymous";
    const data = await req.json();
    const result = await submitContactForm(data, ip);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { success: false, errors: { form: ["Server error"] } },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "This API only accepts POST requests" });
}