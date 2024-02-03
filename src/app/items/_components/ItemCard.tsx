import { IItem } from "../_interfaces/IItem";
import Image from "next/image";

import styles from "@/styles/components/item-card.module.scss";
export default function ListItem({ item }: { item: IItem }) {
  return (
    <article className={styles.item}>
      <div className={styles.image}>
        <Image src={item.picture} fill={true} alt={`Foto de ${item.title}`} />
      </div>
      <div className="description">
        <div className={styles.price}>
          <h3>
            {item.price.amount.toLocaleString("es-ar", {
              style: "currency",
              currency: item.price.currency,
              minimumFractionDigits: item.price.decimals,
            })}
            <span>{item.free_shipping ? "🚚" : ""}</span>
          </h3>
        </div>
        <h2>{item.title}</h2>
        {/* <Link href={`items/${item.id}`}>
        </Link> */}
      </div>
    </article>
  );
}
