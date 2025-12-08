"use client";

import { Button } from "../ui/button";
import { DownloadIcon } from "../icons/DownloadIcon";
import { ThemeToggle } from "../ui/ThemeToggle";
import { SendIconFilled } from "../icons/SendIconFilled";
import { useRouter } from "next/navigation";

export default function SocialLinks() {
    const router = useRouter();
    
    return (
        <div className="w-full h-full mx-auto px-1">
            <div className="flex flex-row md:flex-col-reverse justify-between gap-2 h-full">
                <div className="flex md:flex-col-reverse md:items-stretch items-center justify-between gap-2">
                    <Button 
                        onClick={() => router.push("/contact")}
                        className="flex items-center gap-2 min-w-0 flex-1 p-1.5 !px-4 cursor-pointer">
                        <SendIconFilled className="h-5 w-5 flex-shrink-0"/>
                        <span className="text-base hidden md:inline font-semibold">
                            Get in Touch
                        </span>
                        <span className="text-sm md:hidden font-semibold">Contact Me</span>
                    </Button>

                    <Button 
                        onClick={() => window.open("/IvanVillahermosa_FullstackNetDeveloper_6YOE.pdf", "_blank")}
                        variant="outline" className="flex items-center gap-2 min-w-0 flex-1 p-1.5 !px-4 bg-zinc-100 border-zinc-300 
                        hover:bg-zinc-200 text-zinc-800 dark:text-white dark:bg-zinc-800 cursor-pointer border 
                        hover:border-white transition-colors duration-200">
                        <DownloadIcon className="h-5 w-5 flex-shrink-0" />
                        <span className="text-base hidden md:inline font-semibold">
                            Download Resume
                        </span>
                        <span className="text-sm md:hidden font-semibold">Get Resume</span>
                    </Button>
                </div>
                <div className="flex md:justify-end items-center">
                    <ThemeToggle /> 
                </div>
            </div>
        </div>
    )
}