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

      const frameCount = 425;

      const currentFrame = (index: number) =>
        `/landingPage/sensorAnimation/lightNew/frame_${(index + 1)
          .toString()
          .padStart(4, "0")}.webp`;

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
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        render(); // Re-render after resizing
      };

      const render = () => {
        if (!canvas || !context) return;

        context.clearRect(0, 0, canvas.width, canvas.height);

        const image = images[frames.frame];

        const isMobile = window.innerWidth <= 768; // Define breakpoint (adjust as needed)

        let scale, x, y, renderableWidth, renderableHeight;

        if (isMobile) {
          // On mobile, utilize full screen width
          scale = canvas.width / image.width;
          renderableWidth = canvas.width;
          renderableHeight = image.height * scale;
          x = 0;
          y = (canvas.height - renderableHeight) / 2; // Center vertically
        } else {
          // On desktop, utilize full screen height
          scale = canvas.height / image.height;
          renderableHeight = canvas.height;
          renderableWidth = image.width * scale;
          x = (canvas.width - renderableWidth) / 2; // Center horizontally
          y = 0;
        }

        context.drawImage(image, x, y, renderableWidth, renderableHeight);
      };

      gsap.to(frames, {
        frame: frameCount - 1,
        snap: "frame",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=" + frameCount * 16,
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
