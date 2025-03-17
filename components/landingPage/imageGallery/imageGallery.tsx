"use client";

import type {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image, { type StaticImageData } from "next/image";
import type React from "react";
import { useCallback, useEffect, useRef } from "react";
import styles from "./imageGallery.module.scss";
import { DotButton, useDotButton } from "./imageGalleryDotButton";

const TWEEN_FACTOR_BASE = 0.2;

interface PropType {
  slides: StaticImageData[];
  dark?: boolean;
}

const OPTIONS: EmblaOptionsType = {
  loop: true,
};

const ImageGallery: React.FC<PropType> = ({ slides, dark }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      const element = slideNode.querySelector(`.${styles.imageGalleryParallaxLayer}`);

      if (!element) {
        console.error('Parallax layer element not found');
        return document.createElement('div');
      }

      return element as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      // Helper function to handle loop point calculations
      const calculateDiffToTarget = (
        slideIndex: number,
        snapIndex: number,
        initialDiff: number
      ): number => {
        let diffToTarget = initialDiff;

        if (!engine.options.loop) return diffToTarget;

        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();

          if (slideIndex !== loopItem.index || target === 0) return;

          const sign = Math.sign(target);
          if (sign === -1) {
            diffToTarget = emblaApi.scrollSnapList()[snapIndex] - (1 + scrollProgress);
          }
          if (sign === 1) {
            diffToTarget = emblaApi.scrollSnapList()[snapIndex] + (1 - scrollProgress);
          }
        });

        return diffToTarget;
      };

      // Apply transform to each slide
      const applyTransform = (slideIndex: number, diffToTarget: number): void => {
        const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
        const tweenNode = tweenNodes.current[slideIndex];
        tweenNode.style.transform = `translateX(${String(translate)}%)`;
      };

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        const initialDiff = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          const diffToTarget = calculateDiffToTarget(
            slideIndex,
            snapIndex,
            initialDiff
          );

          applyTransform(slideIndex, diffToTarget);
        });
      });
    },
    [],
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenParallax)
      .on("scroll", tweenParallax)
      .on("slideFocus", tweenParallax);
  }, [emblaApi, setTweenFactor, setTweenNodes, tweenParallax]);

  return (
    <div
      className={`${styles.imageGallery} ${dark ? styles.imageGalleryDark : ""
        }`}
    >
      <div className={styles.imageGalleryViewport} ref={emblaRef}>
        <div className={styles.imageGalleryContainer}>
          {slides.map((slide, index) => (
            <div className={styles.imageGallerySlide} key={slide.src}>
              <div className={styles.imageGalleryParallax}>
                <div className={styles.imageGalleryParallaxLayer}>
                  <Image
                    className={`${styles.imageGallerySlideImg} ${styles.imageGalleryParallaxImg}`}
                    src={slide}
                    alt={`Image gallery img${String(index)}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.imageGalleryControls}>
        <div className={styles.imageGalleryDots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={`dot-${String(scrollSnaps[index])}`}
              onClick={() => { onDotButtonClick(index); }}
              className={`${styles.imageGalleryDot} ${index === selectedIndex ? styles.imageGalleryDotSelected : ""
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
