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

      // Set canvas dimensions to fill the screen width and available height
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;

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

      function render() {
        if (!canvas || !context) return;

        context.clearRect(0, 0, canvas.width, canvas.height);

        const image = images[frames.frame];

        // const renderableWidth = canvas.width;
        // const renderableHeight = image.height * (renderableWidth / image.width);
        // const xStart = 0;
        // const yStart = (canvas.height - renderableHeight) / 2; // Center the image vertically

        let renderableWidth, renderableHeight, xStart, yStart;

        // Calculate the aspect ratio of the image and the canvas
        const imgAspectRatio = image.width / image.height;
        const canvasAspectRatio = canvas.width / canvas.height;

        // Determine whether to fit by width or by height
        if (imgAspectRatio > canvasAspectRatio) {
          // Image is wider than canvas
          renderableWidth = canvas.width;
          renderableHeight = image.height * (renderableWidth / image.width);
          xStart = 0;
          yStart = (canvas.height - renderableHeight) / 2; // Center the image vertically
        } else {
          // Image is taller than or matches canvas aspect ratio
          renderableHeight = canvas.height;
          renderableWidth = image.width * (renderableHeight / image.height);
          xStart = (canvas.width - renderableWidth) / 2; // Center the image horizontally
          yStart = 0;
        }

        // Draw the image on the canvas, maintaining aspect ratio
        context.drawImage(
          image,
          xStart,
          yStart,
          renderableWidth,
          renderableHeight
        );
      }

      // Update canvas size on window resize
      const handleResize = () => {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        render(); // Re-render after resizing
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
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
