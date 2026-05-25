import { MetadataRoute } from "next";

export const dynamic = "force-static";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  return [
    { url: "https://protechtive.net", lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: "https://protechtive.net/blog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: "https://protechtive.net/contact", lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    ...posts.map((p) => ({
      url: `https://protechtive.net/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
