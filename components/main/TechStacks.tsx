import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { techstacksData } from "@/data/techstacks";

export default async function TechStacks() {
    return (
        <Card className="h-full">
            <div className="px-4 pb-3"> 
                <CardHeader className="p-0">
                    <CardTitle className="text-lg lg:text-xl font-bold">Tech Stacks</CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-3 space-y-4">
                    <div className="relative">
                        {techstacksData.map((stack, stackIndex) => (
                            <div key={stackIndex} className="mb-6 last:mb-0">
                                <h3 className="text-md font-semibold mb-2">{stack.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {stack.technologies.map((tech, techIndex) => (
                                        <Badge 
                                            key={techIndex} 
                                            variant="secondary" 
                                            className="text-xs font-normal border-slate-300 text-slate-600 dark:text-slate-200"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </div>
        </Card>
    )
}