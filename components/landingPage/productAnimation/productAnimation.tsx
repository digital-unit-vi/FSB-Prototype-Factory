"use client";

import { useGSAP } from "@gsap/react";
import useScreenSize from "@utils/useScreenSize";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import styles from "./productAnimation.module.scss";

const ProductAnimation = ({ dark }: { dark?: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const screenSize = useScreenSize();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
  }, []);

  useGSAP(
    () => {
      const video = videoRef.current;
      const container = containerRef.current;

      if (!video || !container) return;

      gsap.timeline({
        defaults: { duration: 1, ease: "power2.inOut" },
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "bottom center",
          scrub: true,
          onEnter: () => {
            video.play();
          },
          onEnterBack: () => {
            video.play();
          },
        },
      });
    },
    { scope: containerRef }
  );

  useGSAP(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    ScrollTrigger.create({
      trigger: container,
      start: "top bottom",
      end: "bottom top",
      onLeave: () => {
        video.pause();
        video.currentTime = 0;
      },
      onLeaveBack: () => {
        video.pause();
        video.currentTime = 0;
      },
    });
  });

  const getVideoSrc = () => {
    if (dark) {
      return "/landingPage/sensorAnimation/3d_rotation-dark.mp4";
    } else {
      return screenSize.width > 768
        ? "/landingPage/sensorAnimation/3d_rotation-light.mp4"
        : "/landingPage/sensorAnimation/sensor-light-mobile.mp4";
    }
  };

  return (
    <div ref={containerRef} className={styles.container}>
      <video
        ref={videoRef}
        src={getVideoSrc()}
        playsInline
        preload="auto"
        muted
        className={styles.video}
      ></video>
    </div>
  );
};

export default ProductAnimation;
