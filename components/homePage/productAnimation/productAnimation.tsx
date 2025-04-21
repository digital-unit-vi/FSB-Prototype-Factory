"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./productAnimation.module.scss";

gsap.registerPlugin(ScrollTrigger);

interface ProductAnimationProps {
  staticImagePath?: string;
  text?: string;
  useStaticImage?: boolean;
}

const ProductAnimation = ({
  staticImagePath = "/homePage/kobold_teaser.png",
  text = "TM7",
  useStaticImage = false,
}: ProductAnimationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const imagesRef = useRef<HTMLImageElement[] | null>(null);
  const staticImageRef = useRef<HTMLImageElement | null>(null);
  const animationFrameRef = useRef<number>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cleanup function
  const cleanup = useCallback(() => {
    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill();
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    if (imagesRef.current) {
      imagesRef.current = null;
    }
    if (staticImageRef.current) {
      staticImageRef.current = null;
    }
  }, []);

  useGSAP(
    () => {
      const isWindowDefined = typeof window !== "undefined";
      if (!isWindowDefined) return;

      const container = containerRef.current;
      const canvas = canvasRef.current;
      const textElement = textRef.current;

      if (!canvas || !container || !textElement) {
        setError("Canvas, container, or text not found");
        return;
      }

      const context = canvas.getContext("2d", { alpha: true });

      if (!context) {
        setError("Could not get canvas context");
        return;
      }

      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";

      const dpr = window.devicePixelRatio || 1;
      const frameCount = 26;
      const frames = {
        frame: 0,
      };

      const currentFrame = (index: number) =>
        `/homePage/tm7Animation/simple${String(index).padStart(2, "0")}.webp`;

      const preloadImages = () => {
        if (useStaticImage) {
          // Load only the static image
          const img = new Image();
          img.onload = () => {
            staticImageRef.current = img;
            setIsLoading(false);
            render();
          };
          img.onerror = () => {
            setError(`Failed to load static image: ${staticImagePath}`);
            setIsLoading(false);
          };
          img.src = staticImagePath;
        } else {
          // Load animation sequence
          const images = imagesRef.current ?? [];
          images.length = 0;

          const loadPromises = Array.from({ length: frameCount }, (_, i) => {
            return new Promise<void>((resolve, reject) => {
              const img = new Image();
              img.onload = () => resolve();
              img.onerror = () =>
                reject(new Error(`Failed to load image ${String(i)}`));
              img.src = currentFrame(i);
              images.push(img);
            });
          });

          Promise.all(loadPromises)
            .then(() => {
              setIsLoading(false);
              render();
            })
            .catch((err: unknown) => {
              if (err instanceof Error) {
                setError(err.message);
              } else {
                setError("An unknown error occurred");
              }
              setIsLoading(false);
            });

          imagesRef.current = images;
        }
      };

      const adjustCanvasSize = () => {
        const headerHeight = 112;
        const availableHeight = window.innerHeight - headerHeight;

        // Set canvas to full width
        canvas.width = window.innerWidth * dpr;
        canvas.height = availableHeight * dpr;

        // Set display size
        canvas.style.width = String(window.innerWidth) + "px";
        canvas.style.height = String(availableHeight) + "px";

        render();
      };

      const render = () => {
        // Clear the canvas with transparent background
        context.clearRect(0, 0, canvas.width, canvas.height);

        const headerHeight = 112;
        const availableHeight = window.innerHeight - headerHeight;

        if (useStaticImage && staticImageRef.current) {
          // Render static image
          const image = staticImageRef.current;

          // Calculate scale based on available height
          const scale = availableHeight / image.height;
          const renderableHeight = availableHeight;
          const renderableWidth = image.width * scale;

          // Center horizontally
          const x = (window.innerWidth - renderableWidth) / 2;
          const y = 0;

          context.drawImage(
            image,
            x * dpr,
            y * dpr,
            renderableWidth * dpr,
            renderableHeight * dpr
          );
        } else if (imagesRef.current?.[frames.frame]) {
          // Render animation frame
          const image = imagesRef.current[frames.frame];

          // Calculate scale based on available height
          const scale = availableHeight / image.height;
          const renderableHeight = availableHeight;
          const renderableWidth = image.width * scale;

          // Center horizontally
          const x = (window.innerWidth - renderableWidth) / 2;
          const y = 0;

          context.drawImage(
            image,
            x * dpr,
            y * dpr,
            renderableWidth * dpr,
            renderableHeight * dpr
          );
        }
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=2048",
          pin: true,
          pinSpacing: true,
          scrub: 1,
        },
      });

      gsap.set(textElement, { fontSize: "5rem" });

      // Animate the text to grow larger
      tl.to(
        textElement,
        {
          fontSize: "35rem", // Make text larger
          letterSpacing: "-8px",
          duration: 1,
          ease: "power1.out",
        },
        0
      );

      // Only animate frames if not using static image
      if (!useStaticImage) {
        tl.to(
          frames,
          {
            frame: frameCount - 1,
            snap: "frame",
            onUpdate: render,
            immediateRender: true,
          },
          0
        ); // Run concurrently with the text animation
      }

      if (tl.scrollTrigger) {
        scrollTriggerRef.current = tl.scrollTrigger;
      }

      // Handle resize with debounce
      const debouncedResize = debounce(adjustCanvasSize, 250);
      window.addEventListener("resize", debouncedResize);

      adjustCanvasSize();
      preloadImages();

      return () => {
        cleanup();
        window.removeEventListener("resize", debouncedResize);
      };
    },
    { scope: containerRef }
  );

  // Cleanup on unmount
  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  return (
    <div
      ref={containerRef}
      className={styles.container}
      data-observe="phase1-start"
    >
      <div className={styles.text} ref={textRef}>
        {text}
      </div>
      {isLoading && <div className={styles.loading}>Loading animation...</div>}
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
};

type DebounceFunction<T extends (...args: unknown[]) => unknown> = (
  this: undefined,
  ...args: Parameters<T>
) => ReturnType<T>;

// Utility function for debouncing
const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): DebounceFunction<T> => {
  let timeout: NodeJS.Timeout;
  return function (this: undefined, ...args: Parameters<T>): ReturnType<T> {
    clearTimeout(timeout);
    return new Promise((resolve) => {
      timeout = setTimeout(() => {
        resolve(func.apply(this, args));
      }, wait);
    }) as ReturnType<T>;
  };
};

export default ProductAnimation;
