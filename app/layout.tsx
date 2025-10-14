import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
