"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import styles from "./productAnimation.module.scss";

const ProductAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
  }, []);

  useGSAP(
    () => {
      const container = containerRef.current;
      const canvas = canvasRef.current;

      if (!canvas || !container) return;

      const context = canvas.getContext("2d", { alpha: false });

      if (!context) return;

      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";

      const dpr = window.devicePixelRatio || 1;
      const frameCount = 390;
      const frames = {
        frame: 0,
      };
      let loadedImages = 0;

      const currentFrame = (index: number) =>
        `/landingPage/sensorAnimation/lightNew/frame_${(index + 1)
          .toString()
          .padStart(4, "0")}.jpg`;

      const preloadImages = () => {
        for (let i = 0; i < frameCount; i++) {
          const img = new Image();
          img.onload = () => {
            loadedImages++;
            if (loadedImages === frameCount) {
              render();
            }
          };
          img.src = currentFrame(i);
          imagesRef.current.push(img);
        }
      };

      const adjustCanvasSize = () => {
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;

        render();
      };

      const render = () => {
        if (!canvas || !context || !imagesRef.current[frames.frame]) return;

        context.fillStyle = "#FFFFFF";
        context.fillRect(0, 0, canvas.width, canvas.height);

        const image = imagesRef.current[frames.frame];
        const rect = canvas.getBoundingClientRect();
        const isMobile = window.innerWidth <= 768;

        let scale, x, y, renderableWidth, renderableHeight;

        if (isMobile) {
          scale = rect.width / image.width;
          renderableWidth = rect.width;
          renderableHeight = image.height * scale;
          x = 0;
          y = (rect.height - renderableHeight) / 2;
        } else {
          scale = rect.height / image.height;
          renderableHeight = rect.height;
          renderableWidth = image.width * scale;
          x = (rect.width - renderableWidth) / 2;
          y = 0;
        }

        context.drawImage(
          image,
          x * dpr,
          y * dpr,
          renderableWidth * dpr,
          renderableHeight * dpr
        );
      };

      const scrollAnimation = gsap.to(frames, {
        frame: frameCount - 1,
        snap: "frame",
        scrollTrigger: {
          trigger: container,
          start: "center center",
          end: "+=" + frameCount * 14,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
          onToggle: (self) => {
            if (!self.isActive) {
              frames.frame = 0;
              render();
            }
          },
          onUpdate: () => {
            render();
          },
        },
        onUpdate: render,
      });

      if (scrollAnimation.scrollTrigger) {
        scrollTriggerRef.current = scrollAnimation.scrollTrigger;
      }

      let resizeTimeout: NodeJS.Timeout;

      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(adjustCanvasSize, 150);
      };

      window.addEventListener("resize", handleResize);
      adjustCanvasSize();
      preloadImages();

      return () => {
        window.removeEventListener("resize", handleResize);
        scrollAnimation.kill();
        scrollTriggerRef.current = null;
      };
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={styles.container}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
};

export default ProductAnimation;
