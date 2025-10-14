import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `${process.env.PUBLIC_BASE_URL}/`,
            lastModified: new Date(),
        },
    ]
}