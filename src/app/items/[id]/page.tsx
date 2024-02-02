import { getItemDetail } from "@/app/services/getItemDetail";

export default async function Item({ params }: { params: any }) {
  const { author, item } = await getItemDetail(params.id);
  return (
    <>
      <p>Item detail id: {params.id}</p>
      <h2>{item.title}</h2>
      <pre>{JSON.stringify(item)}</pre>
    </>
  );
}
