import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import AnimatedCard from "@/components/AnimatedCard";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ivan Villahermosa | Software Engineer | Full Stack .Net Developer",
  description: "Portfolio of Ivan Villahermosa, a Software Engineer specializing in Full Stack .Net development.",
  keywords: [
    "Ivan Villahermosa",
    "Software Engineer",
    "Full Stack Developer",
    ".Net Developer",
    "Portfolio",
    "Web Development",
    "C#",
    "ASP.NET",
    "JavaScript",
    "React",
    "Next.js",
    "SQL",
    "Azure",
    "DevOps",
  ],
  openGraph: {
    title: "Ivan Villahermosa | Software Engineer | Full Stack .Net Developer",
    description: "Portfolio of Ivan Villahermosa, a Software Engineer specializing in Full Stack .Net development.",
    url: process.env.PUBLIC_BASE_URL,
    siteName: "Ivan Villahermosa Portfolio",
    images: [
      {
        url: `${process.env.PUBLIC_BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Ivan Villahermosa Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <main className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-12 py-4">
            {children}
            <Analytics />
          </main>
          <footer className="mx-auto max-w-screen-xl px-4 sm:px-8 lg:px-16 py-4">
            <AnimatedCard delay={0.6} className="w-full text-center text-sm text-gray-500 dark:text-gray-400">
              <p>&copy; 2025 Ivan Villahermosa. All rights reserved.</p>
            </AnimatedCard>
          </footer>
        </ThemeProvider>
        
      </body>
    </html>
  );
}
