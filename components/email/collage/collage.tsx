import Image, { StaticImageData } from "next/image";
import styles from "./collage.module.scss";

export default function Collage({
  imgTopLeft,
  imgTopRight,
  imgBottom,
  imgBottomRight,
}: Readonly<{
  imgTopLeft: StaticImageData;
  imgTopRight: StaticImageData;
  imgBottom: StaticImageData;
  imgBottomRight?: StaticImageData;
}>) {
  return (
    <div
      className={
        imgBottomRight
          ? `${styles.collage} ${styles.collageQuadruple}`
          : `${styles.collage} ${styles.collageTriple}`
      }
    >
      {imgBottomRight ? (
        <>
          <div className={`${styles.rowQuadruple} ${styles.rowQuadruple1}`}>
            <Image
              src={imgTopLeft}
              alt="Collage image 1"
              className={`${styles.collageImage} ${styles.image1}`}
            />
            <Image
              src={imgBottom}
              alt="Collage image 3"
              className={`${styles.collageImage} ${styles.image3}`}
            />
          </div>
          <div className={`${styles.rowQuadruple} ${styles.rowQuadruple2}`}>
            <Image
              src={imgTopRight}
              alt="Collage image 2"
              className={`${styles.collageImage} ${styles.image2}`}
            />
            <Image
              src={imgBottomRight}
              alt="Collage image 4"
              className={`${styles.collageImage} ${styles.image4}`}
            />
          </div>
        </>
      ) : (
        <>
          <Image
            src={imgTopLeft}
            alt="Collage image 1"
            className={`${styles.collageImage} ${styles.image1}`}
          />
          <Image
            src={imgTopRight}
            alt="Collage image 2"
            className={`${styles.collageImage} ${styles.image2}`}
          />
          <Image
            src={imgBottom}
            alt="Collage image 3"
            className={`${styles.collageImage} ${styles.image3}`}
          />
        </>
      )}
    </div>
  );
}
