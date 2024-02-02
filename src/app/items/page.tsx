import Link from "next/link";
import { getItems } from "../services/getItems";

export default async function ItemsPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const { search } = searchParams;
  const { author, categories, items } = await getItems(search);
  return (
    <>
      {items.map((item) => (
        <article key={item.id}>
          <Link href={`items/${item.id}`}>
            <h3>{item.title}</h3>
          </Link>
        </article>
      ))}
    </>
  );
}
