import styles from "@/styles/pages/page.module.scss";
export default function Home() {
  return (
    <section className={styles.homePage}>
      <div className={styles.content}>
        <p>Busca productos para comenzar.</p>
      </div>
    </section>
  );
}
