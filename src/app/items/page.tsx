import { getItems } from "./_services/getItems";

import styles from "@/styles/pages/items-page.module.scss";
import ListItem from "./_components/ItemCard";
import Link from "next/link";

export default async function ItemsPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const { search } = searchParams;
  if (!search) {
    return <p>Busca productos para comenzar</p>;
  }
  const { author, categories, items } = await getItems(search);
  return (
    <section className={styles.itemPage} id="items">
      {/* <div className="breadcrumbs"></div> */}
      <ul className={styles.itemsList}>
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`items/${item.id}`}>
              <ListItem item={item} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
