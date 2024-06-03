import styles from "./button.module.scss";
import Link from "next/link";

export default function Button({
  type,
  href,
  text,
}: Readonly<{
  type: "center" | "wide";
  href: string;
  text?: string;
}>) {
  return (
    <div className={`${styles.wrapper} ${styles[type]}`}>
      <Link href={href} passHref className={styles.link}>
        <button className={styles.button}>{text ?? "Shop now"}</button>
      </Link>
    </div>
  );
}
