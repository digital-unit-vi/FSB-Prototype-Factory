import Image, { StaticImageData } from "next/image";
import styles from "./collage.module.scss";

export default function Collage({
  img1,
  img2,
  img3,
  img4,
}: Readonly<{
  img1: StaticImageData;
  img2: StaticImageData;
  img3: StaticImageData;
  img4?: StaticImageData;
}>) {
  return (
    <div
      className={
        img4
          ? `${styles.collage} ${styles.collageQuadruple}`
          : `${styles.collage} ${styles.collageTriple}`
      }
    >
      {img4 ? (
        <>
          <div className={`${styles.rowQuadruple} ${styles.rowQuadruple1}`}>
            <Image
              src={img1}
              alt="image1"
              className={`${styles.collageImage} ${styles.image1}`}
            />
            <Image
              src={img3}
              alt="image3"
              className={`${styles.collageImage} ${styles.image3}`}
            />
          </div>
          <div className={`${styles.rowQuadruple} ${styles.rowQuadruple2}`}>
            <Image
              src={img2}
              alt="image2"
              className={`${styles.collageImage} ${styles.image2}`}
            />
            <Image
              src={img4}
              alt="image4"
              className={`${styles.collageImage} ${styles.image4}`}
            />
          </div>
        </>
      ) : (
        <>
          <Image
            src={img1}
            alt="image1"
            className={`${styles.collageImage} ${styles.image1}`}
          />
          <Image
            src={img2}
            alt="image2"
            className={`${styles.collageImage} ${styles.image2}`}
          />
          <Image
            src={img3}
            alt="image3"
            className={`${styles.collageImage} ${styles.image3}`}
          />
        </>
      )}
    </div>
  );
}
