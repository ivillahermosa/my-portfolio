"use client"

import { ArrowLeft } from "lucide-react";
import { Button } from "./button";
import { useRouter } from "next/navigation";

interface BackButtonProps {
    label?: string;
}

export function BackButton({label = "Back"} : BackButtonProps)
{
    const router = useRouter();

    return (
        <Button
            variant="ghost"
            onClick={() => router.back()}
            className="group flex items-center gap-2 text-slate-600 hover:text-slate-900 
                dark:text-white px-0 cursor-pointer mb-2"
        >
            <ArrowLeft className="w-24 h-24 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">{label}</span>
        </Button>
    );
}