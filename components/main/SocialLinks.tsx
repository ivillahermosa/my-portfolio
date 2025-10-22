import { GmailIcon } from "../icons/GmailIcon";
import { Button } from "../ui/button";
import { DownloadIcon } from "../icons/DownloadIcon";
import { CodeIcon } from "../icons/CodeIcon";
import { ThemeToggle } from "../ui/ThemeToggle";
import { LinkedInIcon } from "../icons/LinkedInIcon";

export default async function SocialLinks() {
    return (
        <div className="w-full h-full mx-auto px-1">
            <div className="flex flex-row justify-between gap-2 h-full">
                {/* Email */}
                <div className="flex items-center justify-between gap-2">
                    <Button className="flex items-center gap-2 min-w-0 flex-1 p-5 !px-6">
                        <GmailIcon className="h-5 w-5 flex-shrink-0" />
                        <span className="text-sm truncate hidden md:inline">
                            villahermosaivan82@gmail.com
                        </span>
                        <span className="text-sm md:hidden">Let's Connect</span>
                    </Button>

                    <Button className="flex items-center gap-2 min-w-0 flex-1 p-5">
                        <DownloadIcon className="h-5 w-5 flex-shrink-0" />
                        <span className="text-sm truncate hidden md:inline">
                            github.com/ivillahermosa
                        </span>
                        <span className="text-sm md:hidden">Resume</span>
                    </Button>
                </div>
                <div>
                    <ThemeToggle /> 
                </div>
            </div>
        </div>
    )
}