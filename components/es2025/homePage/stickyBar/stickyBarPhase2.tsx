import KoboldLogo from "@public/es2025/homePage/kobold_logo_cropped.svg";
import ThermomixLogo from "@public/es2025/thermomix_logo_cropped.svg";
import {
  Button,
  GridContainer,
  GridItem,
  Typography,
} from "@vorwerk/fibre-react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./stickyBarPhase2.module.scss";

type ContentVariant = "default" | "alternate";

const StickyBarPhase2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [contentVariant, setContentVariant] =
    useState<ContentVariant>("default");
  const [slideDirection, setSlideDirection] = useState<"up" | "down" | null>(
    null
  );

  const prevVariantRef = useRef<ContentVariant>("default");
  const prevVisibleRef = useRef<boolean>(false);

  const contentWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const startEl = document.querySelector(
      '[data-scroll-marker="phase2-start"]'
    );
    const changeEl = document.querySelector(
      '[data-scroll-marker="phase2-content-change"]'
    );
    const footerEl = document.querySelector('[data-scroll-marker="footer"]');

    if (!startEl || !changeEl || !footerEl) {
      console.warn(
        "StickyBarPhase2: One or more scroll markers (phase2-start / phase2-content-change / footer) are missing."
      );
      return;
    }

    const update = () => {
      const viewportBottom = window.innerHeight;

      const startRect = startEl.getBoundingClientRect();
      const changeRect = changeEl.getBoundingClientRect();
      const footerRect = footerEl.getBoundingClientRect();

      const withinRange =
        viewportBottom >= startRect.top && viewportBottom <= footerRect.bottom;

      const newVariant: ContentVariant =
        viewportBottom >= changeRect.top ? "alternate" : "default";

      if (withinRange !== prevVisibleRef.current) {
        setSlideDirection(withinRange ? "up" : "down");
        prevVisibleRef.current = withinRange;
      } else if (
        newVariant !== prevVariantRef.current &&
        contentWrapperRef.current
      ) {
        setSlideDirection(newVariant === "alternate" ? "up" : "down");

        prevVariantRef.current = newVariant;
      }

      setIsVisible(withinRange);
      setContentVariant(newVariant);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!slideDirection) return;

    const timer = setTimeout(() => {
      setSlideDirection(null);
    }, 500);

    return () => clearTimeout(timer);
  }, [slideDirection]);

  const rootClasses = `${styles.stickyBarRoot} ${
    isVisible ? styles.visible : styles.hidden
  } ${contentVariant === "alternate" ? styles.alternateContent : ""}`;

  const contentClasses = `${styles.contentWrapper} ${
    slideDirection === "up" ? styles.slideUp
    : slideDirection === "down" ? styles.slideDown
    : ""
  }`;

  const renderDefaultContent = () => (
    <div className={styles.wrapperContainer}>
      <div className={styles.imageWrapperIcon}>
        <Image
          src={KoboldLogo as StaticImageData}
          unoptimized
          alt="Kobold Logo"
        />
      </div>
      <div className={styles.separator} />
      <div className={styles.titleWrapper}>
        <Typography component="p" variant="paragraph12" fontWeight="regular">
          The amazing VK7 starts at
          <br />
          979 EUR
        </Typography>
      </div>
    </div>
  );

  const renderAlternateContent = () => (
    <div className={styles.wrapperContainer}>
      <div className={styles.imageWrapperIcon}>
        <Image
          src={ThermomixLogo as StaticImageData}
          unoptimized
          alt="Thermomix Logo"
        />
      </div>
      <div className={styles.separator} />
      <div className={styles.imageWrapperIcon}>
        <Image
          src={KoboldLogo as StaticImageData}
          unoptimized
          alt="Kobold Logo"
        />
      </div>
    </div>
  );

  const getButtonText = () =>
    contentVariant === "alternate" ? "Join the team" : "Book a demo";

  return (
    <div className={rootClasses}>
      <GridContainer>
        <GridItem columns={12}>
          <div className={styles.stickyBarInner}>
            <div className={contentClasses} ref={contentWrapperRef}>
              {contentVariant === "alternate" ?
                renderAlternateContent()
              : renderDefaultContent()}
            </div>
            <div className={styles.buttonWrapper}>
              <Button buttonStyle="primary" size="medium">
                {getButtonText()}
              </Button>
            </div>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default StickyBarPhase2;
