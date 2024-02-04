import { IItem } from "../_interfaces/IItem";
import Image from "next/image";

import styles from "@/styles/components/item-card.module.scss";
export default function ListItem({ item }: { item: IItem }) {
  return (
    <article className={styles.item}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <div className={styles.imageContainer}>
            <figure>
              <div className={styles.overlay}></div>
              <Image
                src={item.picture}
                fill={true}
                alt={`Foto de ${item.title}`}
              />
            </figure>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.price}>
            <h2>{item.title}</h2>
            <h3>
              {item.price.amount.toLocaleString("es-ar", {
                style: "currency",
                currency: item.price.currency,
                minimumFractionDigits: item.price.decimals,
              })}
              <span>{item.free_shipping ? "🚚" : ""}</span>
            </h3>
          </div>

          {/* <Link href={`items/${item.id}`}>
        </Link> */}
        </div>
      </div>
    </article>
  );
}
