
import { NextRequest, NextResponse } from "next/server";
import { submitContactForm } from "../../contact/actions";

export async function POST(
    req: NextRequest
) {
  try {
    const data = await req.json();
    const result = await submitContactForm(data);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { success: false, errors: { form: ["Server error"] } },
      { status: 500 }
    );
  }
}