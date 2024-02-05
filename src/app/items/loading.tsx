import styles from "@/styles/pages/items-page.module.scss";

export default function Loading() {
  return (
    <section className={styles.itemPage} id="items">
      <div className={styles.loading}>
        <h1>Cargando...</h1>
      </div>
    </section>
  );
}
