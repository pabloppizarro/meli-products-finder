import { IGetItemDetail } from "../_interfaces/IGetItemDetail";
import { IItemNotFound } from "../_interfaces/IItemNotFound";

export async function getItemDetail(
  id: string
): Promise<IGetItemDetail | IItemNotFound> {
  const results = await fetch(`${process.env.SEARCH_API!}/items/${id}`, {
    method: "GET",
  }).then((res) => res.json());
  return { ...results };
}
