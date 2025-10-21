import { Card, CardContent } from "../ui/card";

export default async function Introduction() {
    return (
        <Card className="w-full max-w-[700px] h-[120px] mx-auto">
            <CardContent className="flex flex-col justify-center h-full text-center lg:text-left">
                <header>
                <h1
                    id="intro-title"
                    className="text-3xl lg:text-4xl font-bold tracking-wide"
                >
                    IVAN VILLAHERMOSA
                </h1>
                <p className="text-base lg:text-lg tracking-tight">
                    Software Engineer&nbsp;|&nbsp;Full Stack .NET Developer
                </p>
                </header>
            </CardContent>
        </Card>
    )
}