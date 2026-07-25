import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://chutonavi.syunnjack.chatgpt.site";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-07-25"),
      changeFrequency: "hourly",
      priority: 1,
    },
  ];
}
