import Link from "next/link";
import styles from "../page.module.css";
import { GiTowTruck } from "react-icons/gi";

export default function Navbar() {
  return (
    <section className={styles.navbar}>
      <nav className={styles.container}>
        <div className={styles.logo}>
          <GiTowTruck color="gold" size="4em" />
        </div>
        <div className="nav-elements">
          <ul className={styles.mylist}>
            <li className={styles.navitems}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.navitems}>
              <Link href="/blog">Blog</Link>
            </li>
            <li className={styles.navitems}>
              <Link href="/projects">Projects</Link>
            </li>
            <li className={styles.navitems}>
              <Link href="/about">About</Link>
            </li>
            <li className={styles.navitems}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}
