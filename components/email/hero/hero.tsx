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

// Function to check if a string is a hex color (including shorthand)
const isHexColor = (color: string) => /^#([0-9A-F]{3}){1,2}$/i.test(color);

// Function to expand shorthand hex color to full form
const expandHex = (color: string) => {
  if (color.length === 4) {
    return `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`;
  }
  return color;
};

export default function Hero({
  background,
  logoColor,
  children,
  productImage,
  dark,
  href = "#",
}: Readonly<{
  background: "light" | "dark" | string | StaticImageData;
  logoColor: "white" | "green" | "muted-green";
  children: ReactNode;
  productImage: StaticImageData;
  dark?: boolean;
  href?: string;
}>) {
  const logo = LOGO_MAPPING[logoColor];
  const isImage = typeof background === "object";
  const hexColor =
    typeof background === "string" && isHexColor(background)
      ? expandHex(background)
      : "";

  return (
    <div className={styles.componentWrapper}>
      <div
        className={`${styles.contentWrapper} ${
          background === "light" || background === "dark"
            ? styles[background]
            : isImage
            ? styles.withImageBackground
            : ""
        }`}
        style={hexColor ? { backgroundColor: hexColor } : {}}
      >
        {isImage && (
          <div className={styles.heroBackgroundImageWrapper}>
            <Image
              src={background as StaticImageData}
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
