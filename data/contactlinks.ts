import { GithubIcon } from "@/components/icons/GithubIcon";
import { GmailIcon } from "@/components/icons/GmailIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export interface ContactLink {
    icon: React.ComponentType<{ className?: string }>; 
    text: string;
    href: string;
}

export const contactLinks: ContactLink[] = [
    {
        icon: GmailIcon,
        text: 'villahermosaivan82@gmail.com',
        href: 'mailto:villahermosaivan82@gmail.com'
    },
    {
        icon: LinkedInIcon,
        text: 'linkedin.com/in/ivanvillahermosa/',
        href: 'https://linkedin.com/in/ivanvillahermosa'
    },
    {
        icon: GithubIcon,
        text: 'github.com/ivillahermosa',
        href: 'https://github.com/ivillahermosa'
    }
]