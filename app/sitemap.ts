import type { MetadataRoute } from "next";
import { allProducts, categories, occasions } from "@/lib/catalog";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
  ];

  const categoryRoutes = categories.map((category) => ({
    url: absoluteUrl(category.href),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const occasionRoutes = occasions.map((occasion) => ({
    url: absoluteUrl(occasion.href),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const productRoutes = allProducts.map((product) => ({
    url: absoluteUrl(`/product/${product.slug}`),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: product.images.length > 1 ? 0.78 : 0.64,
  }));

  return [...staticRoutes, ...categoryRoutes, ...occasionRoutes, ...productRoutes];
}
