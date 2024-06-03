import Image, { StaticImageData } from "next/image";
import styles from "./collage.module.scss";

export default function Collage({
  img169,
  img32,
  imgFull,
}: Readonly<{
  img169: StaticImageData;
  img32: StaticImageData;
  imgFull: StaticImageData;
}>) {
  return (
    <div className={styles.collage}>
      <Image
        src={img169}
        alt="image 16:9"
        className={`${styles.collageImage} ${styles.image16_9}`}
      />
      <Image
        src={img32}
        alt="image 3:2"
        className={`${styles.collageImage} ${styles.image3_2}`}
      />
      <Image
        src={imgFull}
        alt="image full-width"
        className={`${styles.collageImage} ${styles.imageFull}`}
      />
    </div>
  );
}
