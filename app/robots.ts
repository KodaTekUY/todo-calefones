import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://todocalefones.com.uy/sitemap.xml",
    host: "https://todocalefones.com.uy",
  }
}
