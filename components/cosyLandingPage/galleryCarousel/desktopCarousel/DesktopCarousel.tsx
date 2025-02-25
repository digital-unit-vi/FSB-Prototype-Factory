import classNames from "classnames";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import { DotButtons } from "../EmblaCarouselDotButton";
import { ImageLayout, ImageLayoutProps } from "../imageLayout/ImageLayout";
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
    const handleKeyUp = (e: any) => {
      if (e.key == "ArrowLeft") {
        scrollPrev();
      }
      if (e.key == "ArrowRight") {
        scrollNext();
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [emblaApi, scrollPrev, scrollNext]);

  return (
    <div
      className={classNames(
        styles.desktopCarouselWrapper,
        darkMode ? styles.darkMode : ""
      )}
    >
      <div className={styles.swiper} ref={emblaRef}>
        <div className={styles.swiper__container}>
          {slides.map((slide, index) => (
            <div key={index} className={styles.swiper__slide}>
              <ImageLayout
                bigImagePosLeft={slide.bigImagePosLeft}
                images={slide.images}
              ></ImageLayout>
            </div>
          ))}
        </div>
        <button
          className={classNames(styles.swiper__pagination, styles.swiper__prev)}
          onClick={scrollPrev}
        >
          Prev
        </button>
        <button
          className={classNames(styles.swiper__pagination, styles.swiper__next)}
          onClick={scrollNext}
        >
          Next
        </button>

        {emblaApi && <DotButtons emblaApi={emblaApi}></DotButtons>}
      </div>
    </div>
  );
};
