import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bhavishahomecare.com",
      lastModified: new Date(),
    },
    {
      url: "https://bhavishahomecare.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://bhavishahomecare.com/contact",
      lastModified: new Date(),
    },
  ];
}