import Button from "@components/shared/button/button";
import Image, { StaticImageData } from "next/image";
import styles from "./productTile.module.scss";

export default function ProductTile({
  productImage,
  title,
  subtitle,
  dark,
}: Readonly<{
  productImage: StaticImageData;
  title: string;
  subtitle: string;
  dark?: boolean;
}>) {
  return (
    <div className={`${dark ? styles.dark : ""} ${styles.componentWrapper}`}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={productImage}
          alt="Product image"
        />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.contentEmptyContainer}></div>
        <div className={styles.contentContainer}>
          <span className={styles.headline}>{title}</span>
          <span className={styles.price}>{subtitle}</span>
          <Button type="wide" href="#" />
        </div>
      </div>
    </div>
  );
}
