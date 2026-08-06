import type { MetadataRoute } from "next";

import { siteMetadata } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [""];

  return routes.map((route) => ({
    url: `${siteMetadata.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
