/* components/Carousel/Carousel.tsx */
import { Button, CaretRight } from "@vorwerk/fibre-react";
import useEmblaCarousel from "embla-carousel-react";
import React, { ReactNode } from "react";
import styles from "./carousel.module.scss";

export interface CarouselProps {
  /**
   * Array of slide components. Each slide can define its own width and height.
   */
  children: ReactNode[];
  /**
   * Additional Embla options if needed.
   */
  buttonText: string;
}

const Carousel: React.FC<CarouselProps> = ({ children, buttonText }) => {
  const [emblaRef] = useEmblaCarousel({
    align: "start", // snaps slides to the left edge
    dragFree: false, // no free dragging
    containScroll: "trimSnaps",
  });

  return (
    <div className={styles.carousel}>
      <div ref={emblaRef} className={styles.embla}>
        <div className={styles.container}>
          {children.map((child, index) => (
            <div className={styles.slide} key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>
      {buttonText && (
        <div className={styles.buttonContainer}>
          <Button
            buttonStyle="tertiary"
            size="medium"
            icon={<CaretRight />}
            iconPosition="right"
          >
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
