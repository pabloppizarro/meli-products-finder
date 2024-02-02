import { getItems } from "./_services/getItems";

import styles from "../../../styles/items.module.scss";
import ListItem from "./_components/ItemCard";

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
    <section className={styles.itemList} id="items">
      {/* <div className="breadcrumbs"></div> */}
      <ul className="items">
        {items.map((item) => (
          <li key={item.id}>
            <ListItem item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
