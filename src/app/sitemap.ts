import { MetadataRoute } from "next";

export const baseUrl = "https://www.optimumgym.lk";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/feedback`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
