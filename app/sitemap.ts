import type { MetadataRoute } from "next";
import { projects } from "@/constants/portfolio";
import { getSiteUrl } from "@/utils/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  if (!base) return [];
  return ["/", ...projects.map((project) => `/projects/${project.slug}`)].map(
    (path) => ({ url: new URL(path, base).href })
  );
}
