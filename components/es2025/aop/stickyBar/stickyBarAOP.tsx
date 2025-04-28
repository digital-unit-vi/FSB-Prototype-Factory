"use client";

import AdvisorButton from "@public/es2025/avatar_button.png";
import ThermomixLogo from "@public/es2025/thermomix_logo_cropped.svg";
import {
  Button,
  GridContainer,
  GridItem,
  Typography,
} from "@vorwerk/fibre-react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./stickyBarAOP.module.scss";

type ContentVariant = "initial" | "alternate";

const StickyBarAOP = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [contentVariant, setContentVariant] =
    useState<ContentVariant>("initial");
  const [slideDirection, setSlideDirection] = useState<"up" | "down" | null>(
    null
  );

  const prevVariantRef = useRef<ContentVariant>("initial");
  const prevVisibleRef = useRef<boolean>(false);

  const contentWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const startEl = document.querySelector(
      '[data-scroll-marker="aop-sticky-start"]'
    );
    const changeEl = document.querySelector(
      '[data-scroll-marker="aop-sticky-change"]'
    );
    const footerEl = document.querySelector('[data-scroll-marker="footer"]');

    if (!startEl || !changeEl || !footerEl) {
      console.warn(
        "StickyBarAOP: One or more scroll markers (aop-sticky-start / aop-sticky-change / footer) are missing."
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
        viewportBottom >= changeRect.top ? "alternate" : "initial";

      if (withinRange !== prevVisibleRef.current) {
        setSlideDirection(withinRange ? "up" : "down");
        prevVisibleRef.current = withinRange;
      } else if (
        newVariant !== prevVariantRef.current &&
        contentWrapperRef.current &&
        withinRange
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

  const renderInitialContent = () => (
    <div className={styles.wrapperContainer}>
      <div className={styles.imageWrapper}>
        <Image src={AdvisorButton} alt="Advisor" />
      </div>
      <div className={styles.separator} />
      <div className={styles.titleWrapper}>
        <Typography component="p" variant="paragraph12" fontWeight="regular">
          The all-new TM7 starts at
          <br />
          1&apos;599 EUR
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
              : renderInitialContent()}
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

export default StickyBarAOP;
