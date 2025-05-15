"use client";

import {
  Button,
  GridContainer,
  GridItem,
  Headline,
  Typography,
} from "@vorwerk/fibre-react";
import { useEffect, useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import styles from "./hero.module.scss";

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

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
            poster="/es2025/homePage/hero_video_poster.webp"
          >
            <source src="/es2025/homePage/hero_video.webm" type="video/webm" />
            <source src="/es2025/homePage/hero_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <Parallax
            translateY={[0, -20, "easeOut"]}
            shouldAlwaysCompleteAnimation={true}
          >
            <GridContainer>
              <GridItem columns={12}>
                <Headline
                  strongColor="green"
                  subline="Experience live the Wonders of the 
all-new Thermomix® TM7!"
                  spaceBelow="additional"
                >
                  <Typography component="h1">
                    <span>
                      Our <strong>advisors</strong>
                      <br />
                      craft the magic
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
                    Book a demo today!
                  </Button>
                </div>
              </GridItem>
            </GridContainer>
          </Parallax>
        </div>
      </div>
    </div>
  );
};

export default Hero;
