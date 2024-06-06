import thermomixLogo from "@public/shared/logo/logo-white.svg";
import FacebookLogo from "@public/shared/socialMediaLogos/facebookLogo";
import InstagramLogo from "@public/shared/socialMediaLogos/instagramLogo";
import PinterestLogo from "@public/shared/socialMediaLogos/pinterestLogo";
import RezeptweltLogo from "@public/shared/socialMediaLogos/rezeptweltLogo";
import YouTubeLogo from "@public/shared/socialMediaLogos/youTubeLogo";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <Link href="#" passHref className={styles.logoLink}>
          <Image
            src={thermomixLogo}
            width={156}
            alt="logo"
            className={styles.mainLogo}
          />
        </Link>
      </div>
      <div className={styles.textContainer}>
        Whatever the issue, we&apos;re here to help. Contact us directly or
        visit our {""}
        <Link href="#" passHref className={styles.link}>
          <span className={styles.linkText}>support centre</span>
        </Link>
        , where you&apos;ll find frequently asked questions and additional
        information.
      </div>
      <div className={styles.logosContainer}>
        <div className={styles.logosHeader}>Follow us</div>
        <div className={styles.logos}>
          <Link href="#" passHref>
            <FacebookLogo className={styles.logo} />
          </Link>
          <Link href="#" passHref>
            <InstagramLogo className={styles.logo} />
          </Link>
          <Link href="#" passHref>
            <PinterestLogo className={styles.logo} />
          </Link>
          <Link href="#" passHref>
            <YouTubeLogo className={styles.logo} />
          </Link>
          <Link href="#" passHref>
            <RezeptweltLogo className={styles.logo} />
          </Link>
        </div>
      </div>
      <div className={styles.linksContainer}>
        <Link href="#" passHref>
          <span className={styles.linkTextWhite}>Unsubscribe</span>
        </Link>
        <Link href="#" passHref>
          <span className={styles.linkTextWhite}>Privacy</span>
        </Link>
        <Link href="#" passHref>
          <span className={styles.linkTextWhite}>Imprint</span>
        </Link>
        <Link href="#" passHref>
          <span className={styles.linkTextWhite}>Terms of Service</span>
        </Link>
      </div>
    </div>
  );
}
