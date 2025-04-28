"use client";

import { useGSAP } from "@gsap/react";
import StaticImage from "@public/es2025/homePage/kobold_teaser.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import styles from "./productAnimation.module.scss";

gsap.registerPlugin(ScrollTrigger);

interface ProductAnimationProps {
  text?: string;
  useStaticImage?: boolean;
}

const ProductAnimation = ({
  text = "TM7",
  useStaticImage = false,
}: ProductAnimationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const imagesRef = useRef<HTMLImageElement[] | null>(null);
  const animationFrameRef = useRef<number>();
  const [error, setError] = useState<string | null>(null);
  const maxViewportHeightRef = useRef<number>(0);

  useEffect(() => {
    const updateMaxHeight = () => {
      const currentHeight = window.innerHeight;
      maxViewportHeightRef.current = Math.max(
        maxViewportHeightRef.current,
        currentHeight
      );
    };

    updateMaxHeight();
    window.addEventListener("resize", updateMaxHeight);

    return () => {
      window.removeEventListener("resize", updateMaxHeight);
    };
  }, []);

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
  }, []);

  useGSAP(
    () => {
      const isWindowDefined = typeof window !== "undefined";
      if (!isWindowDefined) return;

      const container = containerRef.current;

      if (!container) {
        setError("Container not found");
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top bottom-=170",
          scrub: 1,
        },
      });

      if (!useStaticImage) {
        const canvas = canvasRef.current;
        if (!canvas) {
          setError("Canvas not found");
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
          `/es2025/homePage/tm7Animation/simple${String(index).padStart(2, "0")}.webp`;

        const preloadImages = () => {
          const images = imagesRef.current ?? [];
          images.length = 0;

          const loadPromises = Array.from({ length: frameCount }, (_, i) => {
            return new Promise<void>((resolve, reject) => {
              const img = new window.Image();
              img.onload = () => resolve();
              img.onerror = () =>
                reject(new Error(`Failed to load image ${String(i)}`));
              img.src = currentFrame(i);
              images.push(img);
            });
          });

          Promise.all(loadPromises)
            .then(() => {
              render();
            })
            .catch((err: unknown) => {
              if (err instanceof Error) {
                setError(err.message);
              } else {
                setError("An unknown error occurred");
              }
            });

          imagesRef.current = images;
        };

        const adjustCanvasSize = () => {
          const headerHeight = 112;
          const availableHeight = maxViewportHeightRef.current - headerHeight;

          canvas.width = window.innerWidth * dpr;
          canvas.height = availableHeight * dpr;

          canvas.style.width = String(window.innerWidth) + "px";
          canvas.style.height = String(availableHeight) + "px";

          render();
        };

        const render = () => {
          context.clearRect(0, 0, canvas.width, canvas.height);

          const headerHeight = 112;
          const availableHeight = maxViewportHeightRef.current - headerHeight;

          const image = imagesRef.current?.[frames.frame];
          if (!image) return;

          const scale = availableHeight / image.height;
          const renderableHeight = availableHeight;
          const renderableWidth = image.width * scale;

          const x = (window.innerWidth - renderableWidth) / 2;
          const y = 0;

          context.drawImage(
            image,
            x * dpr,
            y * dpr,
            renderableWidth * dpr,
            renderableHeight * dpr
          );
        };

        tl.to(
          frames,
          {
            frame: frameCount - 1,
            snap: "frame",
            onUpdate: render,
            immediateRender: true,
            duration: 2,
          },
          0
        );

        const debouncedResize = debounce(adjustCanvasSize, 250);
        window.addEventListener("resize", debouncedResize);

        adjustCanvasSize();
        preloadImages();

        return () => {
          window.removeEventListener("resize", debouncedResize);
        };
      }

      if (tl.scrollTrigger) {
        scrollTriggerRef.current = tl.scrollTrigger;
      }

      return () => {
        cleanup();
      };
    },
    { scope: containerRef }
  );

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  return (
    <div ref={containerRef} className={styles.container}>
      <Parallax
        translateY={
          useStaticImage ? [-20, 20, "easeOut"] : [25, -15, "easeOut"]
        }
        shouldAlwaysCompleteAnimation={true}
        className={styles.textContainer}
      >
        <div className={styles.text}>{text}</div>
      </Parallax>
      {useStaticImage ? (
        <div className={styles.staticImageContainer}>
          <Image className={styles.staticImage} src={StaticImage} alt={text} />
        </div>
      ) : (
        <canvas ref={canvasRef} className={styles.canvas} />
      )}
    </div>
  );
};

type DebounceFunction<T extends (...args: unknown[]) => unknown> = (
  this: undefined,
  ...args: Parameters<T>
) => ReturnType<T>;

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
