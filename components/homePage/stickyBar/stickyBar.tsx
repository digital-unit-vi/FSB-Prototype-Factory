import AdvisorButton from "@public/homePage/avatar_button.png";
import KoboldLogo from "@public/homePage/kobold_logo_cropped.svg";
import ThermomixLogo from "@public/homePage/thermomix_logo_cropped.svg";
import {
  Button,
  GridContainer,
  GridItem,
  Typography,
} from "@vorwerk/fibre-react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./stickyBar.module.scss";

// Define type for the phase keys
type PhaseKey =
  | "phase1Start"
  | "phase1End"
  | "phase2Start"
  | "phase2ContentChange";

// Content variant type
type ContentVariant = "phase1Default" | "phase2Default" | "phase2Alternate";

const StickyBar = () => {
  // States for visibility and content phase
  const [phase, setPhase] = useState(0); // 0: hidden, 1: phase1, 2: phase2
  const [contentVariant, setContentVariant] =
    useState<ContentVariant>("phase1Default");
  const [slideDirection, setSlideDirection] = useState<"up" | "down" | null>(
    null
  );

  // Ref to track previous content for determining slide direction
  const prevContentRef = useRef<ContentVariant>("phase1Default");

  // Flag to track if we've entered phase 2 at any point
  const hasEnteredPhase2Ref = useRef<boolean>(false);

  // Content order for determining slide direction
  const contentOrder = useMemo<ContentVariant[]>(
    () => ["phase1Default", "phase2Default", "phase2Alternate"],
    []
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Define the elements to observe with their respective phase controls
    const elementSelectors: Record<PhaseKey | "footer", string> = {
      phase1Start: '[data-observe="phase1-start"]',
      phase1End: '[data-observe="phase1-end"]',
      phase2Start: '[data-observe="phase2-start"]',
      phase2ContentChange: '[data-observe="phase2-content-change"]',
      footer: '[data-observe="footer"]', // Add footer selector
    };

    // Initialize tracking sets
    const intersectingByPhase: Record<PhaseKey | "footer", boolean> = {
      phase1Start: false,
      phase1End: false,
      phase2Start: false,
      phase2ContentChange: false,
      footer: false,
    };

    // Update component state based on intersection status
    const updateComponentState = () => {
      // Hide if footer is intersecting
      if (intersectingByPhase.footer) {
        console.log("Footer is intersecting, hiding component");
        setPhase(0);
        return;
      }

      // Store the current content before updating
      const previousContent = contentVariant;
      let newContentVariant: ContentVariant = contentVariant;
      let newPhase = phase;

      // Phase 1 logic
      if (intersectingByPhase.phase1Start && !intersectingByPhase.phase1End) {
        newPhase = 1;
        newContentVariant = "phase1Default";
        // Reset phase 2 tracking when we're in phase 1
        hasEnteredPhase2Ref.current = false;
      }
      // Phase 2 - initial detection
      else if (intersectingByPhase.phase2Start) {
        newPhase = 2;
        newContentVariant = "phase2Default";
        // Mark that we've entered phase 2
        hasEnteredPhase2Ref.current = true;
      }
      // Phase 2 - content changed (alternate)
      else if (
        (intersectingByPhase.phase2ContentChange ||
          hasEnteredPhase2Ref.current) &&
        !intersectingByPhase.phase1End
      ) {
        newPhase = 2;
        newContentVariant = "phase2Alternate";
      }

      // Default case - hidden
      else {
        newPhase = 0;
      }

      // Determine slide direction based on content change
      if (newContentVariant !== previousContent) {
        const prevIndex = contentOrder.indexOf(previousContent);
        const newIndex = contentOrder.indexOf(newContentVariant);

        // Only set slide direction if both contents are found in the order array
        if (prevIndex !== -1 && newIndex !== -1) {
          setSlideDirection(newIndex > prevIndex ? "up" : "down");

          // Store for next comparison
          prevContentRef.current = previousContent;
        }

        // Update states
        setPhase(newPhase);
        setContentVariant(newContentVariant);
      } else if (newPhase !== phase) {
        // Just update phase if only that changed
        setPhase(newPhase);
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Determine which phase this element controls
        for (const [key, selector] of Object.entries(elementSelectors)) {
          if (entry.target.matches(selector)) {
            // Type assertion to ensure key is of type PhaseKey | "footer"
            intersectingByPhase[key as PhaseKey | "footer"] =
              entry.isIntersecting;
            break;
          }
        }
      });

      updateComponentState();
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all target elements for each phase
    for (const selector of Object.values(elementSelectors)) {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        observer.observe(element);

        // Check initial intersection state
        const rect = element.getBoundingClientRect();
        const isInitiallyIntersecting =
          rect.top < window.innerHeight &&
          rect.bottom >= 0 &&
          rect.left < window.innerWidth &&
          rect.right >= 0;

        // Match the element to its phase control
        for (const [key, phaseSelector] of Object.entries(elementSelectors)) {
          if (element.matches(phaseSelector)) {
            // Type assertion to ensure key is of type PhaseKey | "footer"
            intersectingByPhase[key as PhaseKey | "footer"] =
              isInitiallyIntersecting;
            break;
          }
        }
      });
    }

    // Set initial component state
    updateComponentState();

    return () => {
      observer.disconnect();
    };
  }, [contentOrder, contentVariant, phase]);

  // Reset slide direction after animation completes
  useEffect(() => {
    if (slideDirection) {
      const timer = setTimeout(() => {
        setSlideDirection(null);
      }, 500); // Match this with CSS animation duration

      return () => clearTimeout(timer);
    }
  }, [slideDirection]);

  // Define phase-specific CSS classes for animations
  const rootClasses = `${styles.stickyBarRoot} ${
    phase > 0 ? styles.visible : styles.hidden
  } ${phase === 2 ? styles.phase2 : ""} ${
    contentVariant === "phase2Alternate" ? styles.alternateContent : ""
  }`;

  // Content wrapper classes for slide animations - only applies to the content section
  const contentClasses = `${styles.contentWrapper} ${
    slideDirection === "up" ? styles.slideUp
    : slideDirection === "down" ? styles.slideDown
    : ""
  }`;

  // Get button text based on content variant
  const getButtonText = () => {
    switch (contentVariant) {
      case "phase1Default":
        return "Book a demo";
      case "phase2Default":
        return "Book a demo";
      case "phase2Alternate":
        return "Join the team";
      default:
        return "Book a demo";
    }
  };

  // Phase 2 alternate content
  const renderPhase2AlternateContent = () => (
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

  // Phase 2 default content
  const renderPhase2DefaultContent = () => (
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

  // Phase 1 default content
  const renderPhase1DefaultContent = () => (
    <div className={styles.wrapperContainer}>
      <div className={styles.imageWrapper}>
        <Image src={AdvisorButton} alt="Special Offer" />
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

  // Render content based on current variant
  const renderCurrentContent = () => {
    switch (contentVariant) {
      case "phase1Default":
        return renderPhase1DefaultContent();
      case "phase2Default":
        return renderPhase2DefaultContent();
      case "phase2Alternate":
        return renderPhase2AlternateContent();
      default:
        return renderPhase1DefaultContent();
    }
  };

  return (
    <div className={rootClasses}>
      <GridContainer>
        <GridItem columns={12}>
          <div className={styles.stickyBarInner}>
            <div className={contentClasses}>{renderCurrentContent()}</div>
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

export default StickyBar;
