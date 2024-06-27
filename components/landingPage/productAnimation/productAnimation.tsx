"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import styles from "./productAnimation.module.scss";

const ProductAnimation = ({ dark }: { dark?: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
  }, []);

  useGSAP(
    () => {
      const video = videoRef.current;
      const container = containerRef.current;

      if (!video || !container) return;

      // Type definition for the once function
      const once = (el: EventTarget, event: string, fn: (e: Event) => void) => {
        const onceFn = (e: Event) => {
          el.removeEventListener(event, onceFn);
          fn(e);
        };
        el.addEventListener(event, onceFn);
        return onceFn;
      };

      const tl = gsap.timeline({
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

      once(video, "loadedmetadata", () => {
        tl.fromTo(video, { scale: 1 }, { scale: 1.1 });
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

  return (
    <div ref={containerRef} className={styles.container}>
      <video
        ref={videoRef}
        src={
          dark
            ? "/landingPage/sensorAnimation/3d_rotation-dark.mp4"
            : "/landingPage/sensorAnimation/sensor-light-mobile.mp4"
        }
        playsInline
        webkit-playsinline="true"
        preload="auto"
        muted
        className={styles.video}
      ></video>
    </div>
  );
};

export default ProductAnimation;
