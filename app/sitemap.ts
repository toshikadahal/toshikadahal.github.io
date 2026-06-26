import type { MetadataRoute } from "next";
import { topics } from "./topics/data";

const siteUrl = "https://toshikadahal.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/contact", "/topics"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8
  }));

  const topicRoutes = topics.map((topic) => ({
    url: `${siteUrl}/topics/${topic.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...routes, ...topicRoutes];
}
