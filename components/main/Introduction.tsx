import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ThemeToggle } from "../ui/ThemeToggle";

export default async function Introduction() {
    return (
        <Card className="p-0">
                <CardContent className="flex flex-col justify-center h-full text-center lg:text-left my-4">
                    <header>
                        <h1
                            id="intro-title"
                            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide mb-2"
                        >
                            IVAN VILLAHERMOSA
                        </h1>
                        <p className="text-base lg:text-lg tracking-tight mb-2">
                            Software Engineer&nbsp;/&nbsp;Full Stack .NET Developer
                        </p>
                    </header>
                </CardContent>
        </Card>
    )
}