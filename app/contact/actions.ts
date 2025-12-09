"use server";

import { resend } from "@/lib/email/resendClient";
import { contactRateLimiter } from "@/lib/ratelimit/contactLimiter";
import { sanitizeInput } from "@/lib/sanitization/sanitize";
import { contactSchema } from "@/lib/validation/contactSchema";
import { ContactFormData } from "@/types/contact";
import { headers } from "next/headers";

export async function submitContactForm(
    data: ContactFormData,
    ip: string
): Promise<{ success: boolean; errors?: Record<string, string> }> {
    // Validate
    const result = contactSchema.safeParse(data);
    if (!result.success) {
        const errors: Record<string, string> = {};

        result.error.issues.forEach((issue) => {
            errors[issue.path[0] as string] = issue.message;
        });

        return { success: false, errors };
    }
 
    const { success: rateLimitPassed } =
        await contactRateLimiter.limit(ip);
    
    if (!rateLimitPassed) {
        return {
            success: false,
            errors: { form: "Too many requests. Please try again later." },
        };
    }

    // Sanitize
    const sanitized = {
        name: sanitizeInput(data.name),
        email: sanitizeInput(data.email),
        message: sanitizeInput(data.message)
    };

   // Send email via Resend
    await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: process.env.CONTACT_RECEIVER_EMAIL!,
        subject: `Portfolio Message from ${sanitized.name}`,
        html: `
        <p><strong>Name:</strong> ${sanitized.name}</p>
        <p><strong>Email:</strong> ${sanitized.email}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitized.message}</p>
        `,
    });

    return { success: true };
}