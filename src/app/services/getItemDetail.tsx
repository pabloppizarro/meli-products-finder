export async function getItemDetail(id: string) {
  const results = await fetch(`${process.env.SEARCH_API!}/items/${id}`, {
    method: "GET",
  }).then((res) => res.json());
  return { ...results };
}
