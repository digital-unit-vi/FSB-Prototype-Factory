"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import styles from "./productAnimation.module.scss";

const ProductAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
  }, []);

  useGSAP(
    () => {
      const container = containerRef.current;
      const canvas = canvasRef.current;

      if (!canvas || !container) return;

      const context = canvas.getContext("2d");
      if (!context) return;

      context.imageSmoothingEnabled = true;

      const dpr = window.devicePixelRatio || 1;

      const frameCount = 390;

      const currentFrame = (index: number) =>
        `/landingPage/sensorAnimation/lightNew/frame_${(index + 1)
          .toString()
          .padStart(4, "0")}.jpg`;

      const images: HTMLImageElement[] = [];
      const frames = {
        frame: 0,
      };

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
      }

      const adjustCanvasSize = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();

        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        render(); // Re-render after resizing
      };

      const render = () => {
        if (!canvas || !context) return;

        context.clearRect(0, 0, canvas.width, canvas.height);

        const image = images[frames.frame];
        if (!image) return;

        const isMobile = window.innerWidth <= 768;

        const rect = canvas.getBoundingClientRect();
        const canvasWidth = rect.width;
        const canvasHeight = rect.height;

        let scale, x, y, renderableWidth, renderableHeight;

        if (isMobile) {
          scale = canvasWidth / image.width;
          renderableWidth = canvasWidth;
          renderableHeight = image.height * scale;
          x = 0;
          y = (canvasHeight - renderableHeight) / 2;
        } else {
          scale = canvasHeight / image.height;
          renderableHeight = canvasHeight;
          renderableWidth = image.width * scale;
          x = (canvasWidth - renderableWidth) / 2;
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

      gsap.to(frames, {
        frame: frameCount - 1,
        snap: "frame",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=" + frameCount * 14,
          pin: true,
          scrub: true,
        },
        onUpdate: render,
      });

      images[0].onload = render;

      // Adjust canvas size initially and on window resize
      adjustCanvasSize();
      window.addEventListener("resize", adjustCanvasSize);

      return () => {
        window.removeEventListener("resize", adjustCanvasSize);
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
