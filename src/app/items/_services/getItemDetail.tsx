import { IGetItemDetail } from "../_interfaces/IGetItemDetail";

export async function getItemDetail(id: string): Promise<IGetItemDetail> {
  const results = await fetch(`${process.env.SEARCH_API!}/items/${id}`, {
    method: "GET",
  }).then((res) => res.json());
  return { ...results };
}
