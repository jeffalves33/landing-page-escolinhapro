import Image from "next/image";
import styles from "../styles/marketing.module.css";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    // A navegacao completa preserva a fronteira entre o build estatico e o SaaS.
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a className={styles.logo} href="/" aria-label="Escolinha Pro — página inicial">
      <Image
        className={styles.logoImage}
        src="/marketing/images/brand-mark.png"
        alt=""
        width={44}
        height={44}
        priority
      />
      <span className={inverse ? styles.logoTextInverse : styles.logoText}>Escolinha Pro</span>
    </a>
  );
}
