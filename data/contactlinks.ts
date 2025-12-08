import { GithubIcon } from "@/components/icons/GithubIcon";
import { GmailIcon } from "@/components/icons/GmailIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { ArrowLeft, Copy } from "lucide-react";

export interface ContactLink {
    icon: React.ComponentType<{ className?: string }>; 
    text: string;
    href: string;
    righticon: React.ComponentType<{ className?: string }>;
    classname: string;
}

export const contactLinks: ContactLink[] = [
    {
        icon: GmailIcon,
        text: 'villahermosaivan82@gmail.com',
        href: '',
        righticon: Copy,
        classname: "w-5 h-5 mr-2 group-hover:scale-120 transition-transform duration-150",
    },
    {
        icon: LinkedInIcon,
        text: 'linkedin.com/in/ivanvillahermosa/',
        href: 'https://linkedin.com/in/ivanvillahermosa',
        righticon: ArrowLeft,
        classname: "w-5 h-5 mr-2 rotate-180 group-hover:translate-x-1 transition-transform"
    },
    {
        icon: GithubIcon,
        text: 'github.com/ivillahermosa',
        href: 'https://github.com/ivillahermosa',
        righticon: ArrowLeft,
        classname: "w-5 h-5 mr-2 rotate-180 group-hover:translate-x-1 transition-transform"
    }
]