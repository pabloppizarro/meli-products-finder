import Link from "next/link";
import { getItems } from "./_services/getItems";

import styles from "../../../styles/items.module.scss";
import Image from "next/image";
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
    <section className={styles.itemsList} id="items-list">
      <div className="breadcrumbs"></div>
      <div className={styles.items}>
        {items.map((item) => (
          <article className={styles.item} key={item.id}>
            <Image
              src={item.picture}
              width={180}
              height={180}
              alt={`Description of ${item.title} product`}
            />
            <div className={styles.description}>
              <div className="price">
                <h3 className="priceNumber">
                  {item.price.amount.toLocaleString("es-ar", {
                    style: "currency",
                    currency: item.price.currency,
                    minimumFractionDigits: item.price.decimals,
                  })}
                </h3>
                <span>{item.free_shipping ? "🚚" : ""}</span>
              </div>
              <Link href={`items/${item.id}`}>
                <h3>{item.title}</h3>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
