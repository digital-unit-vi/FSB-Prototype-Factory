"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  wrap,
} from "framer-motion";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import styles from "./simpleImageCarousel.module.scss";

interface CarouselImage {
  url: string;
  alt: string;
  title?: string;
}

interface SimpleImageCarouselProps {
  images: CarouselImage[];
  speed?: number;
  imageWidth?: number;
  imageHeight?: number;
}

const DEFAULT_SPEED = 30;
const REPETITION_COUNT = 5;

export const SimpleImageCarousel = ({
  images,
  speed = DEFAULT_SPEED,
  imageWidth = 160,
  imageHeight = 120,
}: SimpleImageCarouselProps) => {
  const baseX = useMotionValue(0);
  const stripRef = useRef<HTMLDivElement>(null);
  const [singleSetWidth, setSingleSetWidth] = useState(0);

  useLayoutEffect(() => {
    if (!stripRef.current) return;
    const totalRenderedWidth = stripRef.current.scrollWidth;
    setSingleSetWidth(totalRenderedWidth / REPETITION_COUNT);
  }, []);

  const x = useTransform(baseX, (latest): number =>
    singleSetWidth ? wrap(-singleSetWidth, 0, latest) : 0
  );

  useAnimationFrame((_, delta) => {
    const deltaSeconds = delta / 1000;
    baseX.set(baseX.get() - speed * deltaSeconds);
  });

  const repeatedImages = Array(REPETITION_COUNT).fill(images).flat();

  return (
    <div className={styles.simpleCarousel} style={{ height: imageHeight }}>
      <div className={styles.gallery}>
        <motion.div ref={stripRef} className={styles.imageStrip} style={{ x }}>
          {repeatedImages.map((img: CarouselImage, i) => (
            <div
              key={i}
              className={styles.imageContainer}
              style={{ width: imageWidth, height: imageHeight }}
            >
              <Image
                className={styles.image}
                src={img.url}
                alt={img.alt}
                title={img.title ?? ""}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SimpleImageCarousel;
