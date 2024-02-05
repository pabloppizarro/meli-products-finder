import { getItemDetail } from "../_services/getItemDetail";
import Image from "next/image";
import styles from "@/styles/pages/item-page.module.scss";
export default async function Item({ params }: { params: any }) {
  const { author, item } = await getItemDetail(params.id);
  return (
    <section id="item-page" className={styles.itemPage}>
      <article>
        <div className={styles.image}>
          <Image
            src={item.pictures[0]}
            fill={true}
            alt={`Foto de ${item.title}`}
          />
        </div>
        <div className={styles.itemInfo}>
          <div>
            <p>
              {item.condition == "new" ? "Nuevo" : "Usado"} -{" "}
              {item.sold_quantity} vendidos
            </p>
            <h1>{item.title}</h1>
          </div>
          <h2>
            {item.price.amount.toLocaleString("es-ar", {
              style: "currency",
              currency: item.price.currency,
              minimumFractionDigits: item.price.decimals,
            })}
          </h2>
          {item.free_shipping ? <p>Envio gratis 📦</p> : ""}
          <div className={styles.actions}>
            <button>Comprar ahora</button>
          </div>
        </div>

        <div className={styles.details}>
          <h3>Descripción del Producto</h3>
          <pre>{item.description}</pre>
        </div>
      </article>
    </section>
  );
}
