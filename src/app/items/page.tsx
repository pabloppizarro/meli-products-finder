import { getItems } from "./_services/getItems";

import styles from "@/styles/pages/items-page.module.scss";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import ListItem from "./_components/ItemCard";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
//todo: create custom hook.
export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  // read route params
  const id = params.id;
  const metadata: Metadata = {
    title: `${searchParams.search} | Mercado Libre Argentina`,
    openGraph: {
      title: `${searchParams.search} | Mercado Libre Argentina`,
      url: `https://www.mercadolibre.com.ar/items?search=${searchParams.search}`,
    },
  };

  return metadata;
}

export default async function ItemsPage({ params, searchParams }: Props) {
  const { search } = searchParams;
  if (!search) {
    return (
      <section className={styles.itemPage} id="items">
        <p>Busca productos para comenzar</p>
      </section>
    );
  }
  generateMetadata({ params, searchParams });

  const { author, categories, items } = await getItems(search as string);
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
