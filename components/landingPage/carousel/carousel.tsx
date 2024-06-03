"use client";

import Result1 from "@public/landingPage/carousel/result-1.jpg";
import Result10 from "@public/landingPage/carousel/result-10.jpg";
import Result11 from "@public/landingPage/carousel/result-11.jpg";
import Result12 from "@public/landingPage/carousel/result-12.jpg";
import Result13 from "@public/landingPage/carousel/result-13.jpg";
import Result2 from "@public/landingPage/carousel/result-2.jpg";
import Result3 from "@public/landingPage/carousel/result-3.jpg";
import Result4 from "@public/landingPage/carousel/result-4.jpg";
import Result5 from "@public/landingPage/carousel/result-5.jpg";
import Result6 from "@public/landingPage/carousel/result-6.jpg";
import Result7 from "@public/landingPage/carousel/result-7.jpg";
import Result8 from "@public/landingPage/carousel/result-8.jpg";
import Result9 from "@public/landingPage/carousel/result-9.jpg";
import Image, { StaticImageData } from "next/image";
import Marquee from "react-fast-marquee";
import { Parallax } from "react-scroll-parallax";
import styles from "./carousel.module.scss";

const Carousel = ({ productPicture }: { productPicture: StaticImageData }) => {
  return (
    <div className={styles.carouselContainer}>
      <Parallax
        scale={[0.8, 1.0, "easeInOut"]}
        className={styles.parallaxWrapper}
      >
        <Image
          src={productPicture}
          alt="Product image"
          fill
          className={styles.productImage}
        />
      </Parallax>
      <Marquee autoFill speed={30}>
        <Image
          src={Result1}
          alt="Carousel image 1"
          className={styles.image}
          width={100}
          height={100}
          priority={true}
        />
        <Image
          src={Result2}
          alt="Carousel image 2"
          className={styles.image}
          width={100}
          height={100}
          priority={true}
        />
        <Image
          src={Result3}
          alt="Carousel image 3"
          className={styles.image}
          width={100}
          height={100}
          priority={true}
        />
        <Image
          src={Result4}
          alt="Carousel image 4"
          className={styles.image}
          width={100}
          height={100}
          priority={true}
        />
        <Image
          src={Result5}
          alt="Carousel image 5"
          className={styles.image}
          width={100}
          height={100}
          priority={true}
        />
        <Image
          src={Result6}
          alt="Carousel image 6"
          className={styles.image}
          width={100}
          height={100}
          priority={true}
        />
        <Image
          src={Result7}
          alt="Carousel image 7"
          className={styles.image}
          width={100}
          height={100}
          priority={true}
        />
        <Image
          src={Result8}
          alt="Carousel image 8"
          className={styles.image}
          width={100}
          height={100}
          priority={true}
        />
        <Image
          src={Result9}
          alt="Carousel image 9"
          className={styles.image}
          width={100}
          height={100}
          priority={true}
        />
        <Image
          src={Result10}
          alt="Carousel image 10"
          className={styles.image}
          width={100}
          height={100}
          priority={true}
        />
        <Image
          src={Result11}
          alt="Carousel image 11"
          className={styles.image}
          width={100}
          height={100}
          priority={true}
        />
        <Image
          src={Result12}
          alt="Carousel image 12"
          className={styles.image}
          width={100}
          height={100}
          priority={true}
        />
        <Image
          src={Result13}
          alt="Carousel image 13"
          className={styles.image}
          width={100}
          height={100}
          priority={true}
        />
      </Marquee>
    </div>
  );
};

export default Carousel;
