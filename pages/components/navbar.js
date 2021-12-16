import Link from "next/link";
import styles from "../../styles/Home.module.css";

// import Image from "next/image";

export default function Navbar() {
  return (
    <div className={styles.navstyles}>
      <h1>
        <Link href="/">
          <img src="/logo.png" height={78} width={128} />
        </Link>
      </h1>

      <ul className={styles.list_menus}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>

        <Link href="/examples">
          <a>Examples</a>
        </Link>
      </ul>
    </div>
  );
}
