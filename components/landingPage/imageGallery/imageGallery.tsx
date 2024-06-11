"use client";

import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image, { StaticImageData } from "next/image";
import React, { useCallback, useEffect, useRef } from "react";
import styles from "./imageGallery.module.scss";
import { DotButton, useDotButton } from "./imageGalleryDotButton";

const TWEEN_FACTOR_BASE = 0.2;

type PropType = {
  slides: StaticImageData[];
  dark?: boolean;
};

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
      return slideNode.querySelector(
        `.${styles.imageGalleryParallaxLayer}`
      ) as HTMLElement;
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

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `translateX(${translate}%)`;
        });
      });
    },
    []
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
      className={`${styles.imageGallery} ${
        dark ? styles.imageGalleryDark : ""
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
                    alt={`Image gallery img${index}`}
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
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`${styles.imageGalleryDot} ${
                index === selectedIndex ? styles.imageGalleryDotSelected : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
