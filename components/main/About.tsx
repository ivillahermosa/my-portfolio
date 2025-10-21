import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default async function About() {
   return (
        <Card className="hover:shadow-lg transition-shadow duration-300">
            <div className="px-4 pb-3"> 
                <CardHeader className="p-0">
                    <CardTitle className="text-base lg:text-xl font-bold">About</CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-2">
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                        I'm a Fullstack .NET Developer with strong expertise in building 
                        scalable backend services and clean, responsive frontends 
                        using .NET Core, React, and Next.js. Experienced in enterprise systems, 
                        payment integrations, and internal automation tools. Passionate about clean 
                        architecture, Agile collaboration, and creating impactful, reliable software solutions.
                    </p>
                </CardContent>
            </div>
        </Card>

    )
}