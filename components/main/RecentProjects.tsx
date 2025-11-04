import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default async function RecentProjects() {
    return (
        <Card className="h-full">
            <div className="px-4 pb-3"> 
                <CardHeader className="p-0">
                    <CardTitle className="text-lg lg:text-xl font-bold">Sample Projects</CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-3 space-y-4">
                    <div className="relative">
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            Sample projects will be added soon. Stay tuned!
                        </p>
                    </div>
                </CardContent>
            </div>
        </Card>
    )
}