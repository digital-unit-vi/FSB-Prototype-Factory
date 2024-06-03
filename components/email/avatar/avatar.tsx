import AvatarImage from "@public/email/avatar.png";
import Image from "next/image";
import styles from "./avatar.module.scss";

export default function Avatar({ dark }: Readonly<{ dark?: boolean }>) {
  return (
    <div className={`${styles.wrapper} ${dark ? styles.dark : ""}`}>
      <div className={styles.imageContainer}>
        <Image src={AvatarImage} alt="Avatar" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.headline}>Any questions?</p>
        <div className={styles.main}>
          <p>Hey Maximilia-Charlotte!</p> Lisa Holtzman-Cortez here, your
          Thermomix® TM6 advisor. Just wanted to let you know that I&apos;m here
          to help you out with any questions or requests you may have regarding
          the replacement of your Thermomix® TM6 knife.
        </div>
        <p className={styles.link}>Get in touch with your advisor</p>
      </div>
    </div>
  );
}
