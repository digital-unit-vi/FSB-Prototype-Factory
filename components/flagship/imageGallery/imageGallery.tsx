"use client";

import {
  NextButton,
  PrevButton,
} from "@components/flagship/imageGallery/imageGalleryArrowButtons";
import { CaretLeft, CaretRight, Typography } from "@vorwerk/fibre-react";
import type {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image, { type StaticImageData } from "next/image";
import type React from "react";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { GalleryItem } from "../gallery/gallery";
import styles from "./imageGallery.module.scss";
import { DotButton, useDotButton } from "./imageGalleryDotButton";

const TWEEN_FACTOR_BASE = 0.2;

function isGalleryItem(item: unknown): item is GalleryItem {
  return (
    typeof item === "object" &&
    item !== null &&
    "type" in item &&
    (item.type === "image" || item.type === "video")
  );
}

interface PropType {
  slides: StaticImageData | ReactNode | GalleryItem[];
  dark?: boolean;
  options?: EmblaOptionsType;
  screenSizes?: {
    width: number;
    height: number;
  };
  containerWidth?: {
    large: number;
    extraLarge: number;
    extraExtraLarge: number;
  };
  isModal?: boolean;
  showCarouselInfo?: boolean;
  imageMaxWidth?: string;
  noControl?: boolean;
  setHeight?: boolean;
  imageTile?: boolean;
  overflow?: boolean;
}

const OPTIONS: EmblaOptionsType = {
  loop: true,
};

const ImageGallery: React.FC<PropType> = ({
  slides,
  dark,
  options,
  screenSizes,
  containerWidth,
  isModal,
  showCarouselInfo,
  imageMaxWidth,
  noControl,
  setHeight = false,
  imageTile = false,
  overflow = false,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options ?? OPTIONS);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  let images = [];
  let videos = [];
  if (
    isModal &&
    Array.isArray(slides) &&
    slides.every((slide) => (typeof slide === "object" ? slide.type : ""))
  ) {
    images = slides.filter((item) => item.type === "image");
    videos = slides.filter((item) => item.type === "video");
  }

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

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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

  const fullWidth =
    screenSizes &&
    containerWidth &&
    (screenSizes.width > 1579 ? containerWidth.extraExtraLarge
    : screenSizes.width > 1267 ? containerWidth.extraLarge
    : containerWidth.large);
  const gap =
    screenSizes &&
    (screenSizes.width > 1579 ? 40
    : screenSizes.width > 1267 ? 32
    : screenSizes.width > 935 ? 24
    : 16);
  const slideMaxWidth =
    imageMaxWidth ??
    (fullWidth &&
      gap &&
      Array.isArray(slides) &&
      Math.round((fullWidth - gap * (slides.length - 1)) / slides.length));
  let overflowClipMargin;
  if (galleryRef.current) {
    const gridContainer = galleryRef.current.parentElement?.parentElement;
    const sectionContainer = gridContainer?.parentElement;

    if (gridContainer) {
      const gridGap =
        getComputedStyle(gridContainer).getPropertyValue("column-gap");
      if (gridGap) {
        galleryRef.current.style.setProperty("--slide-spacing", gridGap);
      }
    }

    if (overflow) {
      const galleryWidth = galleryRef.current.offsetWidth;
      if (screenSizes && screenSizes.width < 740) {
        overflowClipMargin = "16px";
      } else if (sectionContainer) {
        const sectionContainerWidth = sectionContainer.offsetWidth;
        overflowClipMargin = `${((sectionContainerWidth - galleryWidth) / 2).toString()}px`;
      }
    }
  }

  return (
    <>
      <div
        className={`${styles.imageGallery} ${dark ? styles.imageGalleryDark : ""} ${isModalOpen && imageMaxWidth ? imageMaxWidth : ""} ${styles.overriddenImageGallery}`}
        ref={galleryRef}
        style={{ maxWidth: imageTile ? "100%" : "" }}
      >
        <div
          className={styles.imageGalleryViewport}
          ref={emblaRef}
          style={{
            maxWidth: imageMaxWidth ?? "100%",
            overflow: overflow ? "clip" : "hidden",
            overflowClipMargin:
              overflow && overflowClipMargin ? overflowClipMargin : "",
          }}
        >
          <div
            className={
              screenSizes?.width && screenSizes.width > 1267 ?
                styles.overriddenImageGalleryContainer
              : styles.imageGalleryContainer
            }
          >
            {Array.isArray(slides) &&
              slides.map(
                (
                  slide: StaticImageData | ReactNode | GalleryItem,
                  index: number
                ) => (
                  <div
                    className={
                      (
                        fullWidth &&
                        screenSizes.width &&
                        screenSizes.width > 1267
                      ) ?
                        styles.overriddenImageGallerySlide
                      : styles.imageGallerySlide
                    }
                    key={index}
                    style={{
                      maxWidth:
                        imageTile && slideMaxWidth ? "fit-content" : "100%",
                      minHeight: setHeight && slideMaxWidth ? "100%" : "unset",
                    }}
                  >
                    <div
                      className={styles.imageGalleryParallax}
                      style={{ height: !fullWidth ? "100%" : "unset" }}
                    >
                      {slide && typeof slide === "object" && (
                        <div
                          className={`${styles.imageGalleryParallaxLayer} ${setHeight ? styles.overwriteMaxWidth : ""}`}
                          style={{
                            justifyContent: !fullWidth ? "center" : "unset",
                            height:
                              fullWidth || imageMaxWidth ? "100%" : "unset",
                          }}
                        >
                          {"src" in slide && (
                            <Image
                              className={`${styles.imageGallerySlideImg} ${styles.imageGalleryParallaxImg}`}
                              src={slide}
                              alt={`Image gallery img${index.toString()}`}
                            />
                          )}
                          {isGalleryItem(slide) && slide.type === "image" && (
                            <div
                              className={styles.image}
                              style={{
                                background: `url(${slide.url}) 50% / contain no-repeat #F3F5F3`,
                              }}
                              key={slide.title}
                              onClick={() => {
                                setModalOpen(true);
                              }}
                            ></div>
                          )}
                          {isGalleryItem(slide) && slide.type === "video" && (
                            <video
                              src={slide.url}
                              poster={slide.poster}
                              playsInline
                              controls
                              controlsList="nofullscreen"
                              key={slide.url}
                            ></video>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )
              )}
          </div>
          {showCarouselInfo && (
            <div className={styles.carouselInfo}>
              <div className={styles.carouselInfoContent}>
                {images.length > 0 && (
                  <Typography variant={"paragraph14"} fontWeight={"regular"}>
                    {`${images.length.toString()} image${images.length > 1 ? "s" : ""}`}
                  </Typography>
                )}
                {images.length > 0 && videos.length > 0 && (
                  <Typography variant={"paragraph14"} fontWeight={"regular"}>
                    -
                  </Typography>
                )}
                {videos.length > 0 && (
                  <Typography variant={"paragraph14"} fontWeight={"regular"}>
                    {`${videos.length.toString()} video${videos.length > 1 ? "s" : ""}`}
                  </Typography>
                )}
              </div>
            </div>
          )}
        </div>
        {!noControl && (
          <div className={styles.imageGalleryControls}>
            <div className={styles.imageGalleryDots}>
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => {
                    onDotButtonClick(index);
                  }}
                  className={`${styles.imageGalleryDot} ${
                    index === selectedIndex ?
                      styles.imageGalleryDotSelected
                    : ""
                  }`}
                />
              ))}
            </div>
            {screenSizes?.width && screenSizes.width > 935 && (
              <div className={styles.imageGalleryArrows}>
                <PrevButton onClick={scrollPrev}>
                  <CaretLeft />
                </PrevButton>
                <NextButton onClick={scrollNext}>
                  <CaretRight />
                </NextButton>
              </div>
            )}
          </div>
        )}
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
    </>
  );
};

export default ImageGallery;
