"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import styles from "./productAnimation.module.scss";

const ProductAnimation2 = () => {
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
        `/landingPage/sensorAnimation/lightMore/${(index + 1).toString().padStart(5, "0")}.jpg`;

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
        // Get the current container dimensions
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        // Update canvas resolution to match container size
        canvas.width = containerWidth;
        canvas.height = containerHeight;

        render(); // Re-render after resizing
      };

      const render = () => {
        if (!canvas || !context) return;

        context.clearRect(0, 0, canvas.width, canvas.height);

        const image = images[frames.frame];

        // Determine whether to fit by width or by height
        // Image is wider than canvas
        const renderableWidth = canvas.width;
        const renderableHeight = image.height * (renderableWidth / image.width);
        const xStart = 0;
        const yStart = (canvas.height - renderableHeight) / 2; // Center the image vertically

        // Draw the image on the canvas, maintaining aspect ratio
        context.drawImage(
          image,
          xStart,
          yStart,
          renderableWidth,
          renderableHeight
        );
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

export default ProductAnimation2;
