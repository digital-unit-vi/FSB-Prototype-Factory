import classNames from "classnames";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import { DotButtons } from "../EmblaCarouselDotButton";
import { ImageLayout, type ImageLayoutProps } from "../imageLayout/ImageLayout";
import styles from "./desktopCarousel.module.scss";

export interface DesktopCarouselProps {
  slides: ImageLayoutProps[];
  darkMode?: boolean;
}

export const DesktopCarousel = ({
  slides = [
    {
      bigImagePosLeft: false,
      images: [
        {
          url: "",
          alt: "",
          title: "",
          description: "",
        },
      ],
    },
  ],
  darkMode = false,
}: DesktopCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        scrollPrev();
      }
      if (e.key === "ArrowRight") {
        scrollNext();
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [scrollPrev, scrollNext]);

  return (
    <div
      className={classNames(
        styles.desktopCarouselWrapper,
        darkMode ? styles.darkMode : ""
      )}
    >
      <div className={styles.swiper} ref={emblaRef}>
        <div className={styles.swiper__container}>
          {slides.map((slide, index) => {
            const slideKey =
              slide.images[0]?.url ?
                `slide-${slide.images[0].url}`
              : `slide-${String(index)}`;

            return (
              <div key={slideKey} className={styles.swiper__slide}>
                <ImageLayout
                  bigImagePosLeft={slide.bigImagePosLeft}
                  images={slide.images}
                />
              </div>
            );
          })}
        </div>
        <button
          className={classNames(styles.swiper__pagination, styles.swiper__prev)}
          onClick={scrollPrev}
          type="button"
        >
          Prev
        </button>
        <button
          className={classNames(styles.swiper__pagination, styles.swiper__next)}
          onClick={scrollNext}
          type="button"
        >
          Next
        </button>

        {emblaApi && <DotButtons emblaApi={emblaApi} />}
      </div>
    </div>
  );
};
