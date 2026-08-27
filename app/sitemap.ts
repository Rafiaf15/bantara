import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/tentang-kami", priority: 0.8 },
    { path: "/services", priority: 0.9 },
    { path: "/experience", priority: 0.7 },
    { path: "/tracking", priority: 0.8 },
    { path: "/contact", priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
