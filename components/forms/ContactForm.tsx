"use client";

import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { InputGroup, InputGroupInput } from "../ui/input-group";
import { ContactFormData } from "@/types/contact";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { submitContactForm } from "@/app/contact/actions";
import { toast } from "sonner";


export default function ContactForm() {
    const [form, setForm] = useState<ContactFormData>({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setErrors({});

        const result = await submitContactForm(form);

        if (!result.success) {
            setErrors(result.errors || {});
            console.log(result.errors);

            if (errors?.form && errors.form.length > 1) {
                toast.warning("Too many requests. Please try again later.");
            }

            return;
        }

        toast.success("Thank you for your message. I will respond as soon as possible.")
        setForm({ name: "", email: "", message: "" });
    }

    return (
        <form onSubmit={handleSubmit} className='rounded-2xl shadow-lg border p-6'>
            <div className='space-y-4'>
                <div className='flex flex-col space-y-2'>
                    <Label className="text-sm" htmlFor="name">Name</Label>
                    <InputGroup>
                        <InputGroupInput 
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                        />
                    </InputGroup>
                    {errors.name && (
                        <p className="text-xs font-me text-red-500">
                            {errors.name}
                        </p>
                    )}
                </div>

                <div className='flex flex-col space-y-2'>
                    <Label className="text-sm" htmlFor="email">Email</Label>
                    <InputGroup>
                        <InputGroupInput
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </InputGroup>
                    {errors.email && (
                        <p className="text-xs font-me text-red-500">
                            {errors.email}
                        </p>
                    )}
                </div>
                
                <div className='flex flex-col space-y-2'>
                    <Label className="text-sm" htmlFor="message">Message</Label>
                    <Textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        className='h-30'
                        placeholder='Type your message here.'
                    />
                    {errors.message && (
                        <p className="text-xs font-me text-red-500">
                            {errors.message}
                        </p>
                    )}
                </div>

                <Button
                    className="cursor-pointer"
                    type="submit"
                >
                        Send Message
                </Button>
            </div>
        </form>
    )
}