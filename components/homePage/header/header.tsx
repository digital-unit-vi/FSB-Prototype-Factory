import AdvisorButton from "@public/homePage/avatar_button.png";
import {
  GridContainer,
  GridItem,
  Menu,
  Search,
  ShoppingCart,
  Typography,
  Vorwerk,
} from "@vorwerk/fibre-react";
import Image from "next/image";
import Link from "next/link";
import { isValidElement, useEffect, useRef, useState } from "react";
import styles from "./header.module.scss"; // Assuming this path is correct

// Debounce function (keep as is, or move to utils)
function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      timeoutId = null;
      func.apply(this, args);
    }, wait);
  };
}

// HeaderButton component (keep as is)
type HeaderButtonProps = {
  label?: string;
  children?: React.ReactNode;
  count?: number;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const HeaderButton = ({
  label,
  children,
  count,
  className,
  ...rest
}: HeaderButtonProps) => {
  // Determine if the child is a Next.js Image component
  let hasImageChild = false;

  if (isValidElement(children) && children.type === Image) {
    hasImageChild = true;
  }

  // Construct the className string
  const buttonClasses = [
    styles.headerButton, // Base class
    hasImageChild ?
      styles.headerButtonImagePadding
    : styles.headerButtonSvgPadding, // Conditional padding class
    className, // Include any classes passed via props
  ]
    .filter(Boolean) // Remove any falsy values (like undefined className)
    .join(" "); // Join into a single string

  return (
    <button className={buttonClasses} {...rest}>
      {count &&
        count > 0 && ( // Only show count if > 0
          <span className={styles.headerButtonCount}>{count}</span>
        )}
      <span className={styles.headerButtonIcon} aria-hidden="true">
        {children}
      </span>
      {label && <span className={styles.headerButtonLabel}>{label}</span>}
    </button>
  );
};

// Define possible scroll states
type ScrollState = "at-top" | "scrolling-up" | "scrolling-down";

interface HomePageHeaderProps {
  showBanner?: boolean
}

export default function HomePageHeader({showBanner}: HomePageHeaderProps) {
  const [scrollState, setScrollState] = useState<ScrollState>("at-top");
  const prevScrollY = useRef<number>(0); // Use ref to store previous scroll position

  useEffect(() => {
    // Ensure this runs only on the client
    if (typeof window === "undefined") {
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      let nextState: ScrollState = "at-top"; // Default to 'at-top'

      if (currentScrollY === 0) {
        nextState = "at-top";
      } else if (currentScrollY > prevScrollY.current) {
        nextState = "scrolling-down";
      } else {
        nextState = "scrolling-up";
      }

      setScrollState(nextState);
      prevScrollY.current = currentScrollY; // Update previous scroll position
    };

    // Debounce with 0ms just schedules it for the next event loop tick,
    // preventing excessive calls during a single scroll event burst.
    const debouncedHandleScroll = debounce(handleScroll, 0);

    // Initial check in case the page loads scrolled down
    handleScroll();

    window.addEventListener("scroll", debouncedHandleScroll, { passive: true }); // Use passive listener

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount/unmount

  const bannerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({
    left: "50%",
    opacity: 0,
    ready: false,
  });

  // This useEffect handles the arrow positioning
  useEffect(() => {
    // Get current elements from refs
    const bannerElement = bannerRef.current;
    const targetElement = targetRef.current;

    // CRUCIAL CHECK: Ensure both DOM elements exist before proceeding
    if (!bannerElement || !targetElement) {
      // If elements aren't ready yet, do nothing.
      // This prevents errors if the effect runs before refs are assigned.
      return;
    }

    // Define the function to calculate and set position
    const updatePosition = () => {
      // Double-check refs inside the callback in case element gets removed later
      if (!bannerRef.current || !targetRef.current) return;

      const bannerRect = bannerRef.current.getBoundingClientRect();
      const targetRect = targetRef.current.getBoundingClientRect();

      // Calculate the horizontal center of the target relative to the banner's left edge
      const targetCenterX =
        targetRect.left + targetRect.width / 2 - bannerRect.left;

      setPosition({
        left: `${String(targetCenterX)}px`,
        opacity: 1, // *** SET OPACITY TO 1 ***
        ready: true, // *** SET READY TO TRUE ***
      });
    };

    // Calculate the initial position right away
    updatePosition();

    // Observe resizing of both elements to recalculate if needed
    const resizeObserver = new ResizeObserver(updatePosition);
    resizeObserver.observe(bannerElement);
    resizeObserver.observe(targetElement);

    // Cleanup: Stop observing when the component unmounts
    return () => {
      resizeObserver.disconnect();
    };

    // *** USE EMPTY DEPENDENCY ARRAY ***
    // This ensures the effect runs once after initial mount,
    // guaranteeing bannerRef and targetRef.current are populated.
  }, []); // <--- Correct Dependency Array

  return (
    // Use data-attribute for state instead of multiple classes
    <header className={styles.stickyHeader} data-scroll-state={scrollState}>
      {/* Banner */}
      {showBanner && (
        <div className={styles.bannerContainer} ref={bannerRef}>
          <Typography component="p" fontWeight="regular">
            Get in touch with your Vorwerk advisors!
          </Typography>
          <div
            style={{
              position: "absolute",
              bottom: -12,
              left: position.left,
              transform: "translateX(-50%)",
              zIndex: 10,
              color: "#00AC46",
              opacity: position.opacity,
              transition: position.ready ? "opacity 0.3s ease-in" : "none",
            }}
          >
            <div style={{ width: 24, height: 12, display: "flex" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="12"
                viewBox="0 0 24 12"
                fill="none"
              >
                <path
                  d="M12 0H0C6.62625 0 12 5.37375 12 12C12 5.37375 17.3738 0 24 0H12Z"
                  fill="#00AC46"
                />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <nav className={styles.headerNav}>
        <GridContainer>
          <GridItem columns={12}>
            <div className={styles.navInner}>
              {/* Left Side */}
              <div className={styles.navSide}>
                <HeaderButton aria-label="Open Menu">
                  <Menu />
                </HeaderButton>
                <div ref={targetRef}>
                  <HeaderButton>
                    <Image
                      src={AdvisorButton}
                      alt="Advisor button"
                      height={32}
                      width={32}
                      style={{ display: "block" }}
                    />
                  </HeaderButton>
                </div>
              </div>

              {/* Center Logo */}
              <div className={styles.navCenter}>
                <Link href="/" aria-label="Homepage">
                  <Vorwerk />
                </Link>
              </div>

              {/* Right Side */}
              <div className={`${styles.navSide} ${styles.navSideRight}`}>
                <HeaderButton aria-label="Search">
                  <Search />
                </HeaderButton>
                <HeaderButton count={2} aria-label="Shopping Cart">
                  <ShoppingCart />
                </HeaderButton>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </nav>

      {/* Desktop Overlay - kept as is */}
      <div className={styles.desktopNavigationOverlay} />
    </header>
  );
}
