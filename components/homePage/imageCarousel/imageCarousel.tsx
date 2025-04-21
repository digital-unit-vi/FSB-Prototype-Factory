"use client";

import ProductImage from "@public/homePage/phone_cookidoo.png";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import styles from "./imageCarousel.module.scss";

interface CarouselImage {
  url: string;
  alt: string;
  title?: string;
}
const IMAGES: CarouselImage[] = [
  { url: "/homePage/carousel_image1.png", alt: "Image 1" },
  { url: "/homePage/carousel_image2.jpeg", alt: "Image 2" },
  { url: "/homePage/carousel_image3.jpeg", alt: "Image 3" },
  { url: "/homePage/carousel_image4.jpeg", alt: "Image 4" },
  { url: "/homePage/carousel_image5.jpeg", alt: "Image 5" },
  { url: "/homePage/carousel_image6.jpeg", alt: "Image 6" },
  { url: "/homePage/carousel_image7.jpeg", alt: "Image 7" },
  { url: "/homePage/carousel_image8.jpeg", alt: "Image 8" },
];

const BASE_SPEED = 30;
const VELOCITY_FACTOR_MULTIPLIER = 0.15;
const REPETITION_COUNT = 5;

export const ImageCarousel = () => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(
    smoothVelocity,
    (v) => Math.abs(v) * VELOCITY_FACTOR_MULTIPLIER
  );

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
    const currentSpeed = BASE_SPEED + velocityFactor.get();
    baseX.set(baseX.get() - currentSpeed * deltaSeconds);
  });

  const repeatedImages = Array(REPETITION_COUNT).fill(IMAGES).flat();

  return (
    <div className={styles.imageCarousel}>
      <div className={styles.gallery}>
        <motion.div ref={stripRef} className={styles.imageStrip} style={{ x }}>
          {repeatedImages.map((img: CarouselImage, i) => (
            <Image
              key={i}
              className={styles.image}
              src={img.url}
              alt={img.alt}
              title={img.title ?? ""}
              width={104}
              height={104}
            />
          ))}
        </motion.div>
      </div>

      <div className={styles.packshot}>
        <Image src={ProductImage} alt="Cookidoo App" />
      </div>
    </div>
  );
};

export default ImageCarousel;
