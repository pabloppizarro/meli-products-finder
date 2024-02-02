import { IGetItems } from "../_interfaces/IGetItems";

export async function getItems(searchKey: string): Promise<IGetItems> {
  const results = await fetch(
    `${process.env.SEARCH_API!}/items?search=${searchKey}`,
    { method: "GET" }
  ).then((res) => res.json());
  return { ...results };
}
