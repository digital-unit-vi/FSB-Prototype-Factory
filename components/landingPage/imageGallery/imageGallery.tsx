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

  const setTweenNodes = useCallback((api: EmblaCarouselType): void => {
    tweenNodes.current = api.slideNodes().map((slideNode) => {
      const element = slideNode.querySelector(
        `.${styles.imageGalleryParallaxLayer}`
      );

      if (!element) {
        console.error("Parallax layer element not found");
        return document.createElement("div");
      }

      return element as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((api: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback(
    (api: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = api.internalEngine();
      const scrollProgress = api.scrollProgress();
      const slidesInView = api.slidesInView();
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
            diffToTarget =
              api.scrollSnapList()[snapIndex] - (1 + scrollProgress);
          }
          if (sign === 1) {
            diffToTarget =
              api.scrollSnapList()[snapIndex] + (1 - scrollProgress);
          }
        });

        return diffToTarget;
      };

      // Apply transform to each slide
      const applyTransform = (
        slideIndex: number,
        diffToTarget: number
      ): void => {
        const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
        const tweenNode = tweenNodes.current[slideIndex];
        tweenNode.style.transform = `translateX(${String(translate)}%)`;
      };

      api.scrollSnapList().forEach((scrollSnap, snapIndex) => {
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
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax)
  }, [emblaApi, setTweenFactor, setTweenNodes, tweenParallax])

  const fullWidth =
    screenSizes &&
    containerWidth &&
    (screenSizes.width > 1579
      ? containerWidth.extraExtraLarge
      : screenSizes.width > 1267
        ? containerWidth.extraLarge
        : containerWidth.large)
  const gap =
    screenSizes &&
    (screenSizes.width > 1579
      ? 40
      : screenSizes.width > 1267
        ? 32
        : screenSizes.width > 935
          ? 24
          : 16)
  const slideMaxWidth =
    imageMaxWidth ??
    (fullWidth &&
      gap &&
      Math.round((fullWidth - gap * (slides.length - 1)) / slides.length))
  let overflowClipMargin
  if (galleryRef.current) {
    const gridContainer = galleryRef.current.parentElement?.parentElement
    const sectionContainer = gridContainer?.parentElement

    if (gridContainer) {
      const gridGap =
        getComputedStyle(gridContainer).getPropertyValue('column-gap')
      if (gridGap) {
        galleryRef.current.style.setProperty('--slide-spacing', gridGap)
      }
    }

    if (overflow) {
      const galleryWidth = galleryRef.current.offsetWidth
      if (screenSizes && screenSizes?.width < 740) {
        overflowClipMargin = '16px'
      } else if (sectionContainer) {
        const sectionContainerWidth = sectionContainer.offsetWidth
        overflowClipMargin = `${(sectionContainerWidth - galleryWidth) / 2}px`
      }
    }
  }

  return (
    <>
      <div
        className={`${styles.imageGallery} ${
          dark ? styles.imageGalleryDark : ''
        } ${(isModal ?? imageMaxWidth) && styles.overriddenImageGallery}`}
        ref={galleryRef}
        style={{ maxWidth: imageTile ? '100%' : '' }}
      >
        <div
          className={styles.imageGalleryViewport}
          ref={emblaRef}
          style={{
            maxWidth: imageMaxWidth ?? '100%',
            overflow: overflow ? 'clip' : 'hidden',
            overflowClipMargin: (overflow && overflowClipMargin) ? overflowClipMargin : '',
          }}
        >
          <div
            className={
              screenSizes?.width && screenSizes?.width > 1267
                ? styles.overriddenImageGalleryContainer
                : styles.imageGalleryContainer
            }
          >
            {slides.map(
              (
                slide: StaticImageData | ReactNode | GalleryItem,
                index: number,
              ) => (
                <div
                  className={
                    fullWidth && screenSizes?.width && screenSizes?.width > 1267
                      ? styles.overriddenImageGallerySlide
                      : styles.imageGallerySlide
                  }
                  key={index}
                  style={{
                    maxWidth:
                      slideMaxWidth ?? (imageTile ? 'fit-content' : '100%'),
                    minHeight: (setHeight && slideMaxWidth) ?? '100%',
                  }}
                >
                  <div
                    className={styles.imageGalleryParallax}
                    style={{ height: !fullWidth && '100%' }}
                  >
                    <div
                      className={`${styles.imageGalleryParallaxLayer} ${setHeight ? styles.overwriteMaxWidth : ''}`}
                      style={{
                        justifyContent: !fullWidth && 'center',
                        height: (fullWidth || imageMaxWidth) && '100%',
                      }}
                    >
                      {renderSlide(slide, index, () => setModalOpen(true))}
                    </div>
                  </div>
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
              onClick={() => {
                onDotButtonClick(index);
              }}
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