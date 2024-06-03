import Image, { StaticImageData } from "next/image";
import styles from "./mediaContainer.module.scss";

export default function MediaContainer({
  img,
  alt,
}: {
  img: StaticImageData;
  alt: string;
}) {
  return (
    <>
      <Image src={img} alt={alt} className={styles.img} />
    </>
  );
}
