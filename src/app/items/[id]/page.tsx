import styles from "@/styles/pages/item-page.module.scss";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { IGetItemDetail } from "../_interfaces/IGetItemDetail";
import { IItemNotFound } from "../_interfaces/IItemNotFound";
import { getItemDetail } from "../_services/getItemDetail";

//todo: create custom hook.

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const itemFetch = await getItemDetail(id);
  const { error } = itemFetch as IItemNotFound;
  if (error) {
    return {
      title: "Ups | Mercado Libre",
      openGraph: {
        images: [],
      },
    };
  } else {
    const { author, item } = itemFetch as IGetItemDetail;
    return {
      title: `${item.title} | Mercado Libre`,
      description: item.description,
      openGraph: {
        title: `${item.title} | Mercado Libre`,
        description: item.description,
        url: `https://www.mercadolibre.com.ar/${item.id}`,
        images: [...item.pictures],
      },
    };
  }
}

export default async function Item({ params }: { params: any }) {
  const itemFetch = await getItemDetail(params.id);
  const { error } = itemFetch as IItemNotFound;
  if (error) {
    return (
      <section id="item-page" className={styles.itemPage}>
        <div className={styles.notFound}>
          <h3>Ups..</h3>
          <p>Producto no encontrado...</p>
        </div>
      </section>
    );
  } else {
    const { author, item } = itemFetch as IGetItemDetail;

    if (item.title) {
      // await generateMetadata({ item });
    }
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
}
