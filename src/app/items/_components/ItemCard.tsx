import { IItem } from "../_interfaces/IItem";
import Link from "next/link";
import Image from "next/image";

export default function ListItem({ item }: { item: IItem }) {
  return (
    <article className="item">
      <Image
        src={item.picture}
        width={180}
        height={180}
        alt={`Description of ${item.title} product`}
      />
      <div className="description">
        <div className="price">
          <h3 className="priceNumber">
            {item.price.amount.toLocaleString("es-ar", {
              style: "currency",
              currency: item.price.currency,
              minimumFractionDigits: item.price.decimals,
            })}
            <span>{item.free_shipping ? "🚚" : ""}</span>
          </h3>
        </div>
        <Link href={`items/${item.id}`}>
          <h3>{item.title}</h3>
        </Link>
      </div>
    </article>
  );
}
