import Image, { StaticImageData } from "next/image";
import styles from "./bentoItem.module.scss";

import type { JSX } from "react";
interface BentoItemProps {
  title: string;
  description: string;
  icon: ({ className }: { className: string }) => JSX.Element;
  imageSrc?: StaticImageData;
  imageAlt?: string;
  dark?: boolean;
  variant:
    | "noImage"
    | "imageTop"
    | "imageBottom"
    | "horizontal"
    | "imageTopSensor"
    | "imageBottomSensor";
  "data-item"?: string;
}

export default function BentoItem({
  title,
  description,
  icon,
  imageSrc,
  imageAlt,
  dark,
  variant,
  ...restProps
}: Readonly<BentoItemProps>) {
  const Icon = icon;
  return (
    <div
      className={`${styles.bentoItem} ${styles[variant]} ${
        dark ? styles.dark : ""
      }`}
      {...restProps}
    >
      <div className={styles.contentWrapper}>
        <div className={styles.iconWrapper}>
          <Icon className={styles.icon} />
        </div>
        <div className={styles.textContent}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      {imageSrc && (
        <div className={`${styles.imageWrapper} ${styles[variant]}`}>
          <Image src={imageSrc} className={styles.image} alt={imageAlt ?? ""} />
        </div>
      )}
    </div>
  );
}
