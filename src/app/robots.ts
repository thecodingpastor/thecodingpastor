import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    // rules can also be an array of multiple of this object
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/privacy", "/admin"],
    },

    sitemap: "https://michaelayeni.com/sitemap.xml",
  };
}
