import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://chutonavi.syunnjack.chatgpt.site";

  const routes = [
    { path: "", priority: 1, changeFrequency: "hourly" as const },
    { path: "/aichi", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/gifu", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/mie", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/shizuoka", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/events/nagoya-summer-market", priority: 0.8, changeFrequency: "hourly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date("2026-07-25"),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
