export interface ExperienceDTO {
    title: string;
    company: string;
    period: string;
    description: string[];
}

export const experienceData: ExperienceDTO[] = [
    {
        title: "Sr. Software Developer",
        company: "Perpetual Help Community Cooperative",
        period: "Oct 2023 - Present",
        description: [
            "Leading the implementation of GitLab CI/CD pipelines to automate build, test, and deployment processes, resulting in a 30% reduction in deployment time and improved code quality.",
            "Designed and implemented caching and resilience strategies to optimize payment processing via a third-party API.",
            "Introduced and collaborated on the adoption of a internal online communication platform, streamlining team interactions and project management.",
            "Mentored junior developers, fostering a culture of continuous learning and professional growth within the development team.",
            "Designed and developed automation tools to streamline repetitive tasks, enhancing overall team productivity and efficiency.",
        ]
    },
    {
        title: "Jr. Software Developer",
        company: "Perpetual Help Community Cooperative",
        period: "Aug 2019 - Oct 2023",
        description: [
            "Developed and maintained core features of the cooperative's financial software using .NET technologies, improving system reliability and user satisfaction.",
            "Collaborated with cross-functional teams to gather requirements and deliver solutions that met business needs,",
            "Developed internal systems used by the company to manage assets, suppliers, and supplies.",
            "Supported and troubleshooted existing applications, ensuring minimal downtime and optimal performance for end-users.",
            "Supported the installation of systems in various branches of the cooperative and configured internal servers.",
            "Occasionally responded to IT-related issues within the organization, providing timely solutions to minimize disruptions."
        ]
    }
];