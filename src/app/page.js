//import Link from "/next/link";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.heading}>
        <h1 className={styles.companyname}>Robert's Towing Service</h1>
        <h3 className={styles.street}>2385 Coopers Cove rd</h3>
        <h3 className={styles.state}>Hardy, VA 24101</h3>
        <Link href="/about" className={styles.linking}>
          About
        </Link>
      </section>
    </main>
  );
}
