export async function getItems(searchKey: string) {
  console.log(`${process.env.SEARCH_API!}/items?search=${searchKey}`);
  const results = await fetch(
    `${process.env.SEARCH_API!}/items?search=${searchKey}`,
    { method: "GET" }
  ).then((res) => res.json());
  return { ...results };
}
