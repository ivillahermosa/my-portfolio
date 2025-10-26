"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative inline-flex h-6 w-14 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 cursor-pointer"
            aria-label="Toggle theme"
        >
            <span
                className={`inline-flex h-6 w-6 items-center justify-center transform rounded-full bg-white dark:bg-gray-900 shadow-md transition-transform duration-300 ease-in-out ${
                    isDark ? "translate-x-8" : "translate-x-0"
                }`}
            >
                {isDark ? (
                    <Moon className="h-4 w-4 text-blue-500" />
                ) : (
                    <Sun className="h-4 w-4 text-yellow-500" />
                )}
            </span>
        </button>
    );
}