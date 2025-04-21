import AdvisorButton from "@public/homePage/avatar_button.png";
import {
  Button,
  GridContainer,
  GridItem,
  Typography,
} from "@vorwerk/fibre-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./stickyBarPhase1.module.scss";

const StickyBarPhase1 = () => {
  /*  ──────────────────────────────────────────────────────────────
      LOCAL STATE
  ──────────────────────────────────────────────────────────────── */
  const [isVisible, setIsVisible] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"up" | "down" | null>(
    null
  );

  /*  ──────────────────────────────────────────────────────────────
      SCROLL‑BASED VISIBILITY
  ──────────────────────────────────────────────────────────────── */
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Locate marker elements once on mount
    const startEl = document.querySelector(
      '[data-scroll-marker="phase1-start"]'
    );
    const endEl = document.querySelector('[data-scroll-marker="phase1-end"]');

    if (!startEl || !endEl) {
      console.warn(
        "StickyBar: Missing data-scroll markers (phase1-start / phase1-end)."
      );
      return;
    }

    let prevVisible = false; // used to decide slide direction

    const updateVisibility = () => {
      /* Bottom edge of viewport, expressed in pixels from the top
         of the *viewport* (not the document) is always window.innerHeight. */
      const viewportBottom = window.innerHeight;

      const startRect = startEl.getBoundingClientRect();
      const endRect = endEl.getBoundingClientRect();

      const bottomInsideRange =
        viewportBottom >= startRect.top && viewportBottom <= endRect.bottom;

      if (bottomInsideRange !== prevVisible) {
        setSlideDirection(bottomInsideRange ? "up" : "down");
        setIsVisible(bottomInsideRange);
        prevVisible = bottomInsideRange;
      }
    };

    // Initial check + listeners
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  /*  ──────────────────────────────────────────────────────────────
      RESET SLIDE DIRECTION AFTER CSS ANIMATION
  ──────────────────────────────────────────────────────────────── */
  useEffect(() => {
    if (!slideDirection) return;
    const timer = setTimeout(() => setSlideDirection(null), 500); // keep in sync with CSS
    return () => clearTimeout(timer);
  }, [slideDirection]);

  /*  ──────────────────────────────────────────────────────────────
      RENDER
  ──────────────────────────────────────────────────────────────── */
  const rootClasses = `${styles.stickyBarRoot} ${
    isVisible ? styles.visible : styles.hidden
  }`;

  const contentClasses = `${styles.contentWrapper} ${
    slideDirection === "up"
      ? styles.slideUp
      : slideDirection === "down"
        ? styles.slideDown
        : ""
  }`;

  return (
    <div className={rootClasses}>
      <GridContainer>
        <GridItem columns={12}>
          <div className={styles.stickyBarInner}>
            <div className={contentClasses}>
              <div className={styles.wrapperContainer}>
                <div className={styles.imageWrapper}>
                  <Image src={AdvisorButton} alt="Special Offer" />
                </div>
                <div className={styles.separator} />
                <div className={styles.titleWrapper}>
                  <Typography
                    component="p"
                    variant="paragraph12"
                    fontWeight="regular"
                  >
                    The all-new TM7&nbsp;starts at
                    <br />
                    1&apos;599&nbsp;EUR
                  </Typography>
                </div>
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <Button buttonStyle="primary" size="medium">
                Book a demo
              </Button>
            </div>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default StickyBarPhase1;
