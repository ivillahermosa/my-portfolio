import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default async function About() {
   return (
        <Card className="hover:shadow-lg transition-shadow duration-300">
            <div className="px-4 pb-3"> 
                <CardHeader className="p-0">
                    <CardTitle className="text-lg lg:text-xl font-bold">About</CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-3 space-y-4">
                    <p className="text-base leading-normal text-gray-700 dark:text-gray-300">
                        I’m a <span className="font-semibold text-gray-900 dark:text-gray-100">Fullstack .NET Developer</span> with over 
                        5+ years of experience building <span className="font-medium">scalable and reliable enterprise solutions</span>.
                    </p>

                    <p className="text-base leading-normal text-gray-700 dark:text-gray-300">
                        I’ve developed and managed various <span className="font-medium">backend services</span>, ranging from 
                        standalone systems to <span className="font-medium">interconnected microservices</span>. 
                        Building <span className="font-medium">RESTful APIs</span> integrated with both 
                        <span className="font-medium"> web and desktop applications</span>.
                    </p>

                    <p className="text-base leading-normal text-gray-700 dark:text-gray-300">
                        Currently, I’m expanding my expertise into <span className="font-medium">DevOps</span>, 
                        where I’ve implemented <span className="font-medium">CI/CD pipelines</span> for staging 
                        and production environments. Additionally, I’m building a strong foundation in 
                        <span className="font-medium"> Generative AI</span> and exploring tools that enhance 
                        <span className="font-medium"> developer productivity and automation</span>.
                    </p>
                </CardContent>
            </div>
        </Card>

    )
}