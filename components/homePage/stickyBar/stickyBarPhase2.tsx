import KoboldLogo from "@public/homePage/kobold_logo_cropped.svg";
import ThermomixLogo from "@public/homePage/thermomix_logo_cropped.svg";
import {
  Button,
  GridContainer,
  GridItem,
  Typography,
} from "@vorwerk/fibre-react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./stickyBarPhase2.module.scss";

/* ──────────────────────────────────────────
TYPES
────────────────────────────────────────── */
type ContentVariant = "default" | "alternate";

/* ──────────────────────────────────────────
COMPONENT
────────────────────────────────────────── */
const StickyBarPhase2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [contentVariant, setContentVariant] =
    useState<ContentVariant>("default");
  const [slideDirection, setSlideDirection] = useState<"up" | "down" | null>(
    null
  );

  // Refs to track previous state for animation direction
  const prevVariantRef = useRef<ContentVariant>("default");
  const prevVisibleRef = useRef<boolean>(false);

  // Content wrapper ref to handle animations
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  /* ────────────────────────────────────────
  SCROLL / RESIZE HANDLER
  ──────────────────────────────────────── */
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

      /* ▸ Visibility: bottom of viewport between phase2-start and footer */
      const withinRange =
        viewportBottom >= startRect.top && viewportBottom <= footerRect.bottom;

      /* ▸ Content variant */
      const newVariant: ContentVariant =
        viewportBottom >= changeRect.top ? "alternate" : "default";

      /* ▸ Slide‑direction logic */
      if (withinRange !== prevVisibleRef.current) {
        // Visibility changed
        setSlideDirection(withinRange ? "up" : "down");
        prevVisibleRef.current = withinRange;
      } else if (
        newVariant !== prevVariantRef.current &&
        contentWrapperRef.current
      ) {
        // Content variant changed - trigger animation
        // When going from default to alternate, slide up
        // When going from alternate to default, slide down
        setSlideDirection(newVariant === "alternate" ? "up" : "down");

        // Store current variant for next comparison
        prevVariantRef.current = newVariant;
      }

      setIsVisible(withinRange);
      setContentVariant(newVariant);
    };

    /* Initial run + listeners */
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  /* ────────────────────────────────────────
  RESET SLIDE DIRECTION AFTER CSS ANIM
  ──────────────────────────────────────── */
  useEffect(() => {
    if (!slideDirection) return;

    // Reset slide direction after animation completes to allow future animations
    const timer = setTimeout(() => {
      setSlideDirection(null);
    }, 500); // Match this with CSS animation duration

    return () => clearTimeout(timer);
  }, [slideDirection]);

  /* ────────────────────────────────────────
  CLASSNAMES
  ──────────────────────────────────────── */
  const rootClasses = `${styles.stickyBarRoot} ${
    isVisible ? styles.visible : styles.hidden
  } ${styles.phase2} ${
    contentVariant === "alternate" ? styles.alternateContent : ""
  }`;

  const contentClasses = `${styles.contentWrapper} ${
    slideDirection === "up"
      ? styles.slideUp
      : slideDirection === "down"
        ? styles.slideDown
        : ""
  }`;

  /* ────────────────────────────────────────
  RENDER HELPERS
  ──────────────────────────────────────── */
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
          979&nbsp;EUR
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

  /* ────────────────────────────────────────
  JSX
  ──────────────────────────────────────── */
  return (
    <div className={rootClasses}>
      <GridContainer>
        <GridItem columns={12}>
          <div className={styles.stickyBarInner}>
            <div className={contentClasses} ref={contentWrapperRef}>
              {contentVariant === "alternate"
                ? renderAlternateContent()
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
