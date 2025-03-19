"use client";

import {
  Button,
  GridContainer,
  GridItem,
  Header,
  Headline,
  Thermomix,
  Typography,
  Vorwerk,
} from "@vorwerk/fibre-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import styles from "./hero.module.scss";

// Assets
import CosyProductImageFirst from "@public/cosy/1-1_assets_light-01.png"; // Screen off, lights off
import CosyProductImageSecond from "@public/cosy/1-1_assets_light-02.png"; // Screen on, logo, lights off
import CosyProductImageThird from "@public/cosy/1-1_assets_light-03.png"; // Screen on, ui, lights off
import CosyProductImageFourth from "@public/cosy/1-1_assets_light-04.png"; // Screen on, ui, lights on
import useScreenSize from "@utils/useScreenSize";

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fadeValue1, setFadeValue1] = useState(0);
  const [fadeValue2, setFadeValue2] = useState(0);
  const [fadeValue3, setFadeValue3] = useState(0);

  const screenSize = useScreenSize();

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    videoEl.muted = true;
    videoEl.playsInline = true;

    const playVideo = () => {
      videoEl.play().catch((error: unknown) => {
        console.error("Video playback failed:", error);
      });
    };

    if (videoEl.readyState >= 3) {
      playVideo();
    } else {
      videoEl.addEventListener("canplaythrough", playVideo, { once: true });
    }

    return () => {
      videoEl.removeEventListener("canplaythrough", playVideo);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const fadeStart1 = screenSize.width >= 1268 ? 280 : 80;
      const fadeStart2 = screenSize.width >= 1268 ? 445 : 180;
      const fadeStart3 = screenSize.width >= 1268 ? 450 : 240;

      let newFadeValue1 = 0;
      if (scrollPosition >= fadeStart1) {
        newFadeValue1 = 1;
      }
      setFadeValue1(newFadeValue1);

      let newFadeValue2 = 0;
      if (scrollPosition >= fadeStart2) {
        newFadeValue2 = 1;
      }
      setFadeValue2(newFadeValue2);

      let newFadeValue3 = 0;
      if (scrollPosition >= fadeStart3) {
        newFadeValue3 = 1;
      }
      setFadeValue3(newFadeValue3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [screenSize]);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.heroContainer}>
        <div className={styles.videoWrapper}>
          <video
            ref={videoRef}
            className={styles.heroVideo}
            autoPlay
            muted
            playsInline={true}
            loop
            preload="metadata"
            disableRemotePlayback
            poster="/cosy/hero_video_desktop_poster.webp"
          >
            <source src="/cosy/hero_video_desktop.webm" type="video/webm" />
            <source src="/cosy/hero_video_desktop.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.headerContainer}>
          <Header
            isLandingPage
            landingPageLogo={
              <Link href="/">
                <Thermomix size="small" />
              </Link>
            }
            logo={
              <Link href="/">
                <Vorwerk />
              </Link>
            }
          />
        </div>

        <div className={styles.heroContent}>
          <Parallax
            translateY={[0, -15, "easeOut"]}
            shouldAlwaysCompleteAnimation={true}
          >
            <GridContainer>
              <GridItem columns={12}>
                <Headline
                  strongColor="green"
                  subline="Shipping starts 7 April 2025, at 1.499 €."
                  spaceBelow="additional"
                >
                  <Typography component="h1">
                    <span>
                      The all-new
                      <br /> Thermomix® <strong>TM7</strong>.
                    </span>
                  </Typography>
                </Headline>
                <div data-observe="true">
                  <Button
                    buttonStyle="primary"
                    size="large"
                    componentNode="a"
                    url="#"
                  >
                    Pre-order now
                  </Button>
                </div>
              </GridItem>
            </GridContainer>
          </Parallax>
        </div>
      </div>

      <div className={styles.parallaxWrapper}>
        <Parallax
          shouldAlwaysCompleteAnimation={true}
          translateY={[0, -40, "easeIn"]}
          scale={
            screenSize.width >= 1268 ?
              [1.0, 1.2, "easeIn"]
            : [1.0, 1.4, "easeInOut"]
          }
          className={styles.parallax}
        >
          <GridContainer>
            <GridItem startL={4} endL={10} className={styles.imageWrapper}>
              {/* Image 1: Screen off, lights off */}
              <Image
                src={CosyProductImageFirst}
                alt="Device with screen and lights off"
                className={`${styles.heroProduct} ${styles.image1}`}
                style={{ opacity: 1 }}
                priority
              />

              <Image
                src={CosyProductImageSecond}
                alt="Device with screen on, logo, lights off"
                className={`${styles.heroProduct} ${styles.image2}`}
                style={{ opacity: fadeValue1 }}
                priority
              />

              <Image
                src={CosyProductImageThird}
                alt="Device with screen on, ui, lights off"
                className={`${styles.heroProduct} ${styles.image3}`}
                style={{ opacity: fadeValue2 }}
                priority
              />

              <Image
                src={CosyProductImageFourth}
                alt="Device with screen and lights on"
                className={`${styles.heroProduct} ${styles.image4}`}
                style={{ opacity: fadeValue3 }}
                priority
              />
            </GridItem>
          </GridContainer>
        </Parallax>
      </div>
    </div>
  );
};

export default Hero;
