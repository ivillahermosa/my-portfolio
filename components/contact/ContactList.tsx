"use client";

import { contactLinks } from "@/data/contactlinks";
import { Copy } from "lucide-react";
import { toast } from "sonner";

export default function ContactList() {
    const handleCopy = (textToCopy : string) => {
        navigator.clipboard.writeText(textToCopy);

        toast.info("Email has been copied to your clipboard.");
    };

    return (
        <div className='space-y-3'>
            {contactLinks.map((link, index) => (
                <a 
                key={index}
                href={link.href}
                onClick={(e) => {
                    if (link.righticon === Copy) {
                    e.preventDefault(); // ✅ stop navigation
                    handleCopy(link.text);
                    }
                }}
                target={link.righticon !== Copy ? "_blank" : undefined}
                rel={link.righticon !== Copy ? "noopener noreferrer" : undefined}
                className={`group flex items-center gap-2 p-2 rounded-xl shadow-md border-1 transition-all`}
                >
                    <div className='flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center'>
                        <link.icon className="w-5 h-5" />
                    </div>
                    <span className='text-sm md:text-base font-medium flex-1'>{link.text}</span>
                    <link.righticon className={`${link.classname}`}/>
                </a>
            ))}
        </div>
    )
}