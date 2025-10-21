import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { IconLabel } from "../icons/IconLabel";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { ThemeToggle } from "../ui/ThemeToggle";
import { GmailIcon } from "../icons/GmailIcon";

export default async function SocialLinks() {
    return (
        <Card className="lg:w-[395px] max-w-[700px] md:h-[120px] h-[80px]  mx-auto w-full">
            <CardContent className="flex md:flex-col  justify-center gap-2 !p-4 h-full">
                {/* Email */}
                <div className="flex items-center justify-between gap-2">
                    <Link href="/test" className="flex items-center gap-2 min-w-0 flex-1">
                        <GmailIcon className="h-5 w-5 flex-shrink-0" />
                        <span className="text-sm truncate hidden md:inline">
                            villahermosaivan82@gmail.com
                        </span>
                        <span className="text-sm truncate md:hidden">Email</span>
                    </Link>
                </div>

                {/* GitHub */}
                <div className="flex items-center justify-between gap-2">
                    <Link href="/test" className="flex items-center gap-2 min-w-0 flex-1">
                        <GithubIcon className="h-5 w-5 flex-shrink-0" />
                        <span className="text-sm truncate hidden md:inline">
                            github.com/ivillahermosa
                        </span>
                        <span className="text-sm truncate md:hidden">GitHub</span>
                    </Link>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center justify-between gap-2">
                    <Link href="/test" className="flex items-center gap-2 min-w-0 flex-1">
                        <LinkedInIcon className="h-5 w-5 flex-shrink-0" />
                        <span className="text-sm truncate hidden md:inline">
                            linkedin.com/in/ivanvillahermosa
                        </span>
                        <span className="text-sm truncate md:hidden">LinkedIn</span>
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}