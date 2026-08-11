import type { MetadataRoute } from "next";
import { getSpots } from "@/lib/data";
import { resolveBaseUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = resolveBaseUrl();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/spots`, changeFrequency: "daily", priority: 0.9 },
  ];

  const spotEntries: MetadataRoute.Sitemap = getSpots().map((spot) => ({
    url: `${baseUrl}/spots/${spot.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticEntries, ...spotEntries];
}
