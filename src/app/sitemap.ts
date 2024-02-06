import { MetadataRoute } from "next";
import { getItems } from "./items/_services/getItems";
import { IItem } from "./items/_interfaces/IItem";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  //just as a example
  const { author, categories, items } = await getItems("Iphone 15");
  const itemEntries: MetadataRoute.Sitemap = items.map((item: IItem) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/items/${item.id}`,
    lastModified: new Date(Date.now()),
    changeFrequency: "daily",
    priority: 0.8,
  }));
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`, //static routes first
      lastModified: new Date(Date.now()),
    },
    ...itemEntries, //dynamic products routes.
  ];
}
