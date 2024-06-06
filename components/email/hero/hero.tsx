import Button from "@components/shared/button/button";
import Heading from "@components/shared/heading/heading";
import LogoGreen from "@public/shared/logo/logo-green.svg";
import LogoMutedGreenWhite from "@public/shared/logo/logo-muted-green.svg";
import LogoWhite from "@public/shared/logo/logo-white.svg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import styles from "./hero.module.scss";

const LOGO_MAPPING = {
  white: LogoWhite,
  green: LogoGreen,
  "muted-green": LogoMutedGreenWhite,
};

export default function Hero({
  backgroundImage,
  backgroundColor,
  logoColor,
  children,
  productImage,
  dark,
  href = "#",
}: Readonly<{
  backgroundImage?: StaticImageData;
  backgroundColor?: "light" | "dark";
  logoColor: "white" | "green" | "muted-green";
  children: ReactNode;
  productImage: StaticImageData;
  dark?: boolean;
  href?: string;
}>) {
  const logo = LOGO_MAPPING[logoColor];
  return (
    <div className={styles.componentWrapper}>
      <div
        className={`${styles.contentWrapper} ${
          backgroundColor ? styles[backgroundColor] : styles.withImageBackground
        }`}
      >
        {backgroundImage && (
          <div className={styles.heroBackgroundImageWrapper}>
            <Image
              src={backgroundImage}
              alt="Background"
              className={styles.backgroundImage}
              priority
            />
          </div>
        )}
        <div className={styles.content}>
          <Link href={href} passHref className={styles.logoLink}>
            <Image className={styles.logo} src={logo} priority alt="logo" />
          </Link>
          <div className={styles.textContainer}>
            <Heading dark={dark}>{children}</Heading>
          </div>
          <Button type="center" href="#" />
        </div>
      </div>
      <Image
        className={styles.image}
        src={productImage}
        priority
        alt="Product hero image"
      />
    </div>
  );
}
