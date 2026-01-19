import type { MetadataRoute } from "next";
import projectsData from "@/content/projects.json";
import { absUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absUrl("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absUrl("/our-work"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absUrl("/get-involved"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absUrl("/donate"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absUrl("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: absUrl("/privacy"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: absUrl("/terms"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projectsData.projects.map((p) => ({
    url: absUrl(`/our-work/${p.id}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: p.featured ? 0.7 : 0.5,
  }));

  return [...staticRoutes, ...projectRoutes];
}




