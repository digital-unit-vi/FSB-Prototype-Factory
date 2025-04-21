import { FC } from "react";
import styles from "./carouselTile.module.scss";

export interface CarouselTileProps {
  variant: "background" | "product";
  title: string;
  eyecatcherTextPrimary?: string;
  eyecatcherTextSecindary?: string;
  eyecatcherBgColor?: string;
  backgroundImageUrl?: string;
  productImageUrl?: string;
  price?: string;
  note?: string;
}

const CarouselTile: FC<CarouselTileProps> = ({
  variant,
  title,
  eyecatcherTextPrimary,
  eyecatcherTextSecindary,
  eyecatcherBgColor = "#734BA5",
  backgroundImageUrl,
  productImageUrl,
  price,
  note,
}) => {
  const variantClass =
    variant === "background" ? styles.backgroundVariant : styles.productVariant;
  const tileStyle =
    variant === "background" && backgroundImageUrl ?
      {
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 49.98%, rgba(0, 0, 0, 0.50) 69.99%, rgba(0, 0, 0, 0.60) 100%), url(${backgroundImageUrl})`,
      }
    : {};

  return (
    <div className={`${styles.tile} ${variantClass}`} style={tileStyle}>
      {eyecatcherTextPrimary && (
        <div
          className={styles.eyecatcher}
          style={{ backgroundColor: eyecatcherBgColor }}
        >
          {eyecatcherTextSecindary && (
            <span className={styles.eyecatcherSecondary}>
              {eyecatcherTextSecindary}
            </span>
          )}
          {eyecatcherTextPrimary}
        </div>
      )}

      {variant === "product" && productImageUrl && (
        <img src={productImageUrl} alt={title} className={styles.image} />
      )}

      <p className={styles.title}>{title}</p>

      {variant === "product" && price && (
        <p className={styles.price}>{price}</p>
      )}
      {variant === "product" && note && <p className={styles.note}>{note}</p>}
    </div>
  );
};

export default CarouselTile;
