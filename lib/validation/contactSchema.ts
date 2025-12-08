import { z } from "zod";

export const contactSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at lease 2 characters")
        .max(100, "Name is too long"),
    email: z
        .email("Invalid Email Address"),
    message: z
        .string()
        .min(10, "Message must be at least 10 characters")
        .max(1000, "Message is too long")
});

export type ContactSchema = z.infer<typeof contactSchema>;