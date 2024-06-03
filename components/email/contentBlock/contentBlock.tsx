import MediaContainer from "@components/email/mediaContainer/mediaContainer";
import TextBlock from "@components/shared/textBlock/textBlock";
import { StaticImageData } from "next/image";
import styles from "./contentBlock.module.scss";

export default function ContentBlock({
  img,
  headline,
  text,
  dark,
  imageSide,
}: {
  img: StaticImageData;
  headline: string;
  text: string;
  dark?: boolean;
  imageSide?: "left" | "right";
}) {
  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.image} ${
          imageSide === "left" ? styles.left : styles.right
        }`}
      >
        <MediaContainer img={img} alt={headline} />
      </div>
      <div className={styles.text}>
        <TextBlock headline={headline} p1={text} dark={dark} />
      </div>
    </div>
  );
}
