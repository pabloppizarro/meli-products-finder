import { getItems } from "./_services/getItems";

import styles from "@/styles/pages/items-page.module.scss";
import Link from "next/link";
import ListItem from "./_components/ItemCard";

export default async function ItemsPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const { search } = searchParams;
  if (!search) {
    return (
      <section className={styles.itemPage} id="items">
        <p>Busca productos para comenzar</p>
      </section>
    );
  }
  const { author, categories, items } = await getItems(search);
  if (!items.length) {
    return (
      <section className={styles.itemPage} id="items">
        <p>No hemos encontrado resultados.</p>
      </section>
    );
  }
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
