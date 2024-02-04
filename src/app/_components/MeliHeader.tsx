import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/header.module.scss";
export function MeliHeader({ children }: { children: JSX.Element }) {
  return (
    <header className={styles.wrapper}>
      <div className={styles.navContainer}>
        <Link href={"/"}>
          <Image
            className={styles.navLogo}
            src={
              "https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.15/mercadolibre/logo__small@2x.png"
            }
            width={39}
            height={28}
            alt={`Foto logo Mercado Libre`}
          />
        </Link>
        {children}
      </div>
    </header>
  );
}
