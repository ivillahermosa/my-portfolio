
import { NextRequest } from "next/server";
import { submitContactForm } from "../../contact/actions";

export async function POST(
    req: NextRequest
) {
    const data = await req.json();
    const result = await submitContactForm(data);

    return Response.json(result);
}