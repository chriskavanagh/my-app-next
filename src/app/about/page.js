import styles from "../page.module.css";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1 className={styles.about}>About Page</h1>
      <Link href="/" className={styles.aboutlink}>
        <h3>Home</h3>
      </Link>
    </div>
  );
}
