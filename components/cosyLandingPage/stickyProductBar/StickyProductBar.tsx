import ProductPicture from "@public/cosy/cosy_square.png";
import useScreenSize from "@utils/useScreenSize";
import {
  Button,
  GridContainer,
  GridItem,
  Typography,
} from "@vorwerk/fibre-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./stickyProductBar.module.scss";

const StickyProductBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;

    const targets = document.querySelectorAll('[data-observe="true"]');
    const intersectingElements = new Set<Element>();

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          intersectingElements.add(entry.target);
        } else {
          intersectingElements.delete(entry.target);
        }
      }

      if (intersectingElements.size > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    for (const target of targets) {
      observer.observe(target);
    }

    let initialIntersecting = false;
    for (const target of targets) {
      const rect = target.getBoundingClientRect();
      if (
        rect.top < window.innerHeight &&
        rect.bottom >= 0 &&
        rect.left < window.innerWidth &&
        rect.right >= 0
      ) {
        initialIntersecting = true;
      }
    }

    setIsVisible(!initialIntersecting);

    return () => {
      for (const target of targets) {
        observer.unobserve(target);
      }
      observer.disconnect();
    };
  }, []);

  const screenSize = useScreenSize();

  return (
    <div
      className={`${styles.stickyProductBarRoot} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    >
      {screenSize.width >= 1268 ?
        <div className={styles.stickyProductBarInner}>
          <div className={styles.imageWrapper}>
            <Image src={ProductPicture} alt="TM7" />
          </div>
          <div className={styles.titleWrapper}>
            <Typography component="p" variant="h6" fontWeight="bold">
              Thermomix® TM7
            </Typography>
            <span>1.499 €</span>
          </div>
          <div className={styles.buttonWrapper}>
            <Button buttonStyle="primary" size="medium">
              Pre-order now
            </Button>
          </div>
        </div>
      : <GridContainer>
          <GridItem columns={12}>
            <div className={styles.stickyProductBarInner}>
              <div className={styles.titleWrapper}>
                <Typography component="p" variant="h6" fontWeight="bold">
                  Thermomix® TM7
                </Typography>
                <span>1.499 €</span>
              </div>
              <div className={styles.buttonWrapper}>
                <Button buttonStyle="primary" size="medium">
                  Pre-order now
                </Button>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      }
    </div>
  );
};

export default StickyProductBar;
