"use client";

import Button from "@components/shared/button/button";
import SensorProductImage from "@public/landingPage/hero/sensor-hero-landing-page.png";
import TM6ProductImage from "@public/landingPage/hero/tm6-hero-landing-page.png";
import Logo from "@public/shared/logo/logo-white.svg";
import Image, { StaticImageData } from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import styles from "./hero.module.scss";

type VideoType = "default" | "cutting" | "dishes" | "sensor";
type ProductImage = "tm6" | "sensor";

interface HeroProps {
  video: VideoType;
  productImage: ProductImage;
  primaryText: string;
  secondaryText: string;
  tertiaryText: string;
}

const HERO_VIDEO_MAPPING: Record<VideoType, string> = {
  default: "/landingPage/hero/tm6-hero-default.mp4",
  cutting: "/landingPage/hero/tm6-hero-cutting.mp4",
  dishes: "/landingPage/hero/tm6-hero-dishes.mp4",
  sensor: "/landingPage/hero/sensor-hero-default.mp4",
};

const HERO_PRODUCT_IMAGE_MAPPING: Record<ProductImage, StaticImageData> = {
  tm6: TM6ProductImage,
  sensor: SensorProductImage,
};

const Hero: React.FC<HeroProps> = ({
  video,
  productImage,
  primaryText,
  secondaryText,
  tertiaryText,
}: HeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const once = (el: EventTarget, event: string, fn: (e: Event) => void) => {
      const onceFn = (e: Event) => {
        el.removeEventListener(event, onceFn);
        fn(e);
      };
      el.addEventListener(event, onceFn);
      return onceFn;
    };

    once(document.documentElement, "touchstart", () => {
      video
        .play()
        .then(() => {
          video.pause();
          video.play().catch((error) => {
            console.error("Video playback failed:", error);
          });
        })
        .catch((error) => {
          console.error("Initial video playback failed:", error);
        });
    });
  }, []);

  return (
    <div className={styles.heroContainer}>
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          className={styles.heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disableRemotePlayback
        >
          <source src={HERO_VIDEO_MAPPING[video]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.heroOverlay} />
      </div>
      <div className={styles.heroContent}>
        <Image
          src={Logo as StaticImageData}
          alt="Vorwerk logo"
          className={styles.heroLogo}
          width={160}
          height={64}
          priority
        />
        <Parallax translateY={[60, -15, "easeOut"]}>
          <h3 className={styles.heroTextTertiary}>{tertiaryText}</h3>
          <h2 className={styles.heroTextSecondary}>{secondaryText}</h2>
          <h1 className={styles.heroTextPrimary}>{primaryText}</h1>
          <Button type="center" href="#" />
        </Parallax>
      </div>
      <Parallax
        translateY={
          productImage === "tm6" ? [10, -10, "easeOut"] : [5, -25, "easeIn"]
        }
        scale={
          productImage === "tm6" ? [0.9, 1.2, "easeOut"] : [0.9, 1.1, "easeIn"]
        }
        className={styles.parallax}
      >
        <Image
          src={HERO_PRODUCT_IMAGE_MAPPING[productImage]}
          alt="Hero product image"
          className={styles.heroProduct}
          priority
        />
      </Parallax>
    </div>
  );
};

export default Hero;
