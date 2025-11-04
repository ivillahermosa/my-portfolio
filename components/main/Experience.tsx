import { experienceData } from "@/data/experience";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export default async function Experience() {
    return (
        <Card>
            <div className="px-4 pb-3"> 
                <CardHeader className="p-0">
                    <CardTitle className="text-lg lg:text-xl font-bold">Experience</CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-3 space-y-4">
                    <div className="relative">
                        {experienceData.map((exp, expIndex) => (
                            <div key={expIndex} className="relative flex gap-4 md:gap-6 pb-8 last:pb-0">
                                <div className="relative flex flex-col items-center w-6 flex-shrik-0">
                                    {expIndex === 0 ? (
                                        <div className="w-3 h-3 bg-slate-900 dark:bg-white rounded-full z-10 mt-2"/>
                                    ) : (
                                        <div className="w-3 h-3 border-2 border-slate-500 bg-white dark:bg-zinc-800 dark:border-white rounded-full z-10 mt-2"/>
                                    )}

                                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 bg-slate-200" 
                                        style={expIndex === 0 ? 
                                            {  height: 'calc(100% + 2rem)'} : { height: 'calc(100% - 1rem)' }}/>
                                </div>

                                <div className="flex-1 min-w-0 ">
                                    <div className="flex w-full flex-col sm:flex-row mb-4">
                                        <div className="sm:flex-[0_0_70%] md:flex-[0_0_75%]">
                                            <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>                                    
                                            <p className="text-base text-slate-700 dark:text-slate-300 mb-2">{exp.company}</p>
                                        </div>

                                        <div className="flex sm:justify-end sm:items-start items-center mt-2 sm:mt-0">
                                            <Badge variant="outline" className="text-xs font-normal border-slate-300 text-slate-600 dark:text-slate-200">
                                                {exp.period}
                                            </Badge>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        {exp.description.map((desc, descIndex) => (
                                            <div key={descIndex} className="flex gap-2">
                                                <span className="text-slate-900 dark:text-white font-bold mt-0.5">•</span>
                                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
                                                {desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </div>
        </Card>
    )
}