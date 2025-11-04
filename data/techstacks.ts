export interface techstacksDTO {
    title: string;
    technologies: string[];
}

export const techstacksData: techstacksDTO[] = [
    {
        title: "Frontend",
        technologies: [
            "WPF",
            "XAML",
            "React",
            "Next.js",
            "JavaScript",
            "TypeScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS"
        ],
    },
    {
        title: "Backend",
        technologies: [
            "C#",
            ".NET Core",
            ".NET Framework",
            "ASP.NET",
            "RESTful APIs",
            "MSSQL",
            "MySQL",
            "PostgreSQL",
            "Entity Framework Core",
            "Dapper"
        ]
    },
    {
        title: "DevOps & Tools",
        technologies: [
            "Git",
            "GitHub",
            "GitLab",
            "Docker",
            "CI/CD Pipelines",
            "Gitlab CI",
            "Github Actions",
            "Linux (Ubuntu)",
            "Windows Server",
            "AWS EC2",
            "Postman",
            "Visual Studio",
            "VS Code",
            "Figma",
            "Zoho Projects",
            "Discord"
        ]
    },
    {
        title: "Architecture & Methodologies",
        technologies: [
            "Clean Architecture",
            "SOLID Principles",
            "Repository & Unit of Work Patterns",
            "Monolithic",
            "RESTful Services",
            "Agile Methodology",
            "Microservices",
            "Scrum"
        ]
    }
];