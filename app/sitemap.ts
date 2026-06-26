import type { MetadataRoute } from "next";

const baseUrl = "https://toshikadahal.github.io";

const topicSlugs = [
  "squint-strabismus",
  "lazy-eye-amblyopia",
  "childrens-glasses",
  "premature-baby-retina-screening",
  "watering-eye-child",
  "red-eye-child"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/topics"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8
    })),
    ...topicSlugs.map((slug) => ({
      url: `${baseUrl}/topics/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
