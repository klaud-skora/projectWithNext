import Link from "next/link";
import styles from './Header.module.css';

export default () => (
  <div>
    <Link href="/"><a className={styles.navLink}>Home</a></Link>
    <Link href="/test"><a className={styles.navLink}>Test</a></Link>
    <Link href="/siemanko" as="/test/siemanko"><a className={styles.navLink}>Siemanko</a></Link>
  </div>
)
