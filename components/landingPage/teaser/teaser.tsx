import Button from "@components/shared/button/button";
import Heading from "@components/shared/heading/heading";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import styles from "./teaser.module.scss";

export default function Teaser({
  backgroundImage,
  children,
}: Readonly<{
  backgroundImage: StaticImageData;
  children: ReactNode;
}>) {
  return (
    <div className={styles.componentWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src={backgroundImage}
            alt="Background"
            className={styles.backgroundImage}
            priority
          />
        </div>
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <Heading>{children}</Heading>
          </div>
          <Button type="center" href="#" text="Book a free demo" />
        </div>
      </div>
    </div>
  );
}
