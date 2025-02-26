import Link from "next/link";
import styles from "./button.module.scss";

export default function Button({
  type,
  href,
  text,
}: Readonly<{
  type: "center" | "wide";
  href?: string;
  text?: string;
}>) {
  return (
    <div className={`${styles.wrapper} ${styles[type]}`}>
      {href ? (
        <Link href={href} passHref className={styles.link}>
          <button className={styles.button} type="button">
            {text ?? "Shop now"}
          </button>
        </Link>
      ) : (
        <button className={styles.button} type="button">
          {text ?? "Shop now"}
        </button>
      )}
    </div>
  );
}
