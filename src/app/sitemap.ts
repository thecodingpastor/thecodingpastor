import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const res = await fetch('my-url) to fetch all or some blogs
  // const post = await res.json()

  //    const postEntries = post.map(p => ({
  //     url: "mybaseurl/${p.slug}",
  //     // if it has updated date
  //     lastModified: new Date(p.updatedAt)
  //     }))
  return [
    {
      url: "https://michaelayeni.com/about",
    },
    {
      url: "https://michaelayeni.com/projects",
    },
    // ...postEntries
  ];
}
