import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default async function About() {
   return (
        <Card className="hover:shadow-lg transition-shadow duration-300">
            <div className="px-4 pb-3"> 
                <CardHeader className="p-0">
                    <CardTitle className="text-lg lg:text-xl font-bold">About</CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-3 space-y-4">
                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                        I’m a <span className="font-semibold text-gray-900 dark:text-gray-100">Fullstack .NET Developer</span> with over 
                        6+ years of experience building <span className="font-medium">scalable and reliable enterprise solutions</span>.
                    </p>

                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                        I work mainly with <span className="font-medium">C# and the Microsoft .NET stack</span>, building backend APIs 
                        and connecting them with <span className="font-medium">third-party services and payment gateways</span>
                        to deliver reliable, integrated systems.
                    </p>

                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                        On the frontend, I also use <span className="font-medium">React</span> and 
                        <span className="font-medium"> TypeScript</span>  to deliver clean, responsive, and modern user experiences that align seamlessly with backend services. 
                        Additionally, I have hands-on experience developing <span className="font-medium">WPF desktop applications</span> and <span className="font-medium">creating
                        automation tools </span> to streamline business operations — from database backups to real-time notifications and data migrations.
                    </p>

                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                        I thrive in <span className="font-medium">Agile environments</span>, value <span className="font-medium">clean code </span> 
                        and <span className="font-medium">solid architecture</span>, and continuously grow my knowledge in 
                        <span className="font-medium"> modern software design</span> and <span className="font-medium">cloud-native systems</span>. 
                        Currently, I’m focusing on deepening my expertise in <span className="font-medium">software architecture</span>, 
                        <span className="font-medium"> cloud technologies</span>, <span className="font-medium">DevOps practices</span> and 
                        <span className="font-medium"> Artificial Intelligence</span> — aiming to build solutions that drive 
                        <span className="font-medium"> real business impact</span>.
                    </p>
                </CardContent>
            </div>
        </Card>

    )
}