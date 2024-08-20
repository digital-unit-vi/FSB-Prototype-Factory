"use client";

import { useGSAP } from "@gsap/react";
import RatingDarkEmpty from "@public/landingPage/rating/ratingDarkEmpty";
import RatingDarkFull from "@public/landingPage/rating/ratingDarkFull";
import RatingDarkHalf from "@public/landingPage/rating/ratingDarkHalf";
import RatingLightEmpty from "@public/landingPage/rating/ratingLightEmpty";
import RatingLightFull from "@public/landingPage/rating/ratingLightFull";
import RatingLightHalf from "@public/landingPage/rating/ratingLightHalf";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";
import styles from "./userReview.module.scss";

export default function UserReview({
  ratingScore,
  noReviews,
  review1,
  review2,
  review3,
  dark,
}: Readonly<{
  ratingScore: number;
  noReviews: number;
  review1: string;
  review2: string;
  review3: string;
  dark?: boolean;
}>) {
  const starContainer = useRef<HTMLDivElement>(null);
  const reviewSection = useRef<HTMLDivElement>(null);
  const [animatedScore, setAnimatedScore] = useState(1.0);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
  });

  useGSAP(
    () => {
      const mainStars: gsap.TweenTarget[] = gsap.utils.toArray(
        "[data-item='ratingStar']"
      );

      mainStars.forEach((target, index) => {
        gsap.fromTo(
          target,
          {
            scale: 0.9,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.in",
            delay: index * 0.25,
            scrollTrigger: {
              trigger: starContainer.current,
              start: "top bottom",
              end: "bottom top",
              toggleActions: "play none none reset",
            },
          }
        );
      });
    },
    { scope: starContainer }
  );

  useGSAP(
    () => {
      const reviews = document.querySelectorAll(".reviewContainer");
      const reviewTweens: gsap.TweenTarget[] = gsap.utils.toArray(reviews);

      reviewTweens.forEach((target, index) => {
        gsap.fromTo(
          target,
          {
            y: 120,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: reviews[index],
              start: "top-=100 bottom",
              end: "bottom top",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: reviewSection }
  );

  useGSAP(() => {
    gsap.to(
      {},
      {
        duration: 2.2,
        ease: "power4.out",
        onUpdate: function (this: gsap.core.Tween) {
          const progress = this.progress();
          const currentScore = (1.0 + progress * (ratingScore - 1.0)).toFixed(
            1
          );
          setAnimatedScore(Number(currentScore));
        },
        scrollTrigger: {
          trigger: starContainer.current,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play none none reset",
        },
      }
    );
  }, [ratingScore]);

  return (
    <div className={`${styles.userReview} ${dark ? styles.dark : ""}`}>
      <div className={styles.ratingSection}>
        <p className={styles.ratingScore}>{animatedScore}</p>
        <div className={styles.ratingIndicatorBig} ref={starContainer}>
          {dark ? (
            <>
              <RatingDarkFull data-item="ratingStar" />
              <RatingDarkFull data-item="ratingStar" />
              <RatingDarkFull data-item="ratingStar" />
              <RatingDarkFull data-item="ratingStar" />
              <RatingDarkHalf data-item="ratingStar" />
            </>
          ) : (
            <>
              <RatingLightFull data-item="ratingStar" />
              <RatingLightFull data-item="ratingStar" />
              <RatingLightFull data-item="ratingStar" />
              <RatingLightFull data-item="ratingStar" />
              <RatingLightHalf data-item="ratingStar" />
            </>
          )}
          <span className={styles.ratingIndicatorReviews}>
            ({noReviews} reviews)
          </span>
        </div>
      </div>
      <div className={styles.reviewSection} ref={reviewSection}>
        <div className={`${styles.singleReview} reviewContainer`}>
          <div className={styles.ratingIndicatorSmall}>
            {dark ? (
              <>
                <RatingDarkFull />
                <RatingDarkFull />
                <RatingDarkFull />
                <RatingDarkFull />
                <RatingDarkEmpty />
              </>
            ) : (
              <>
                <RatingLightFull />
                <RatingLightFull />
                <RatingLightFull />
                <RatingLightFull />
                <RatingLightEmpty />
              </>
            )}
          </div>
          <p className={styles.reviewText}>{review1}</p>
        </div>
        <div className={`${styles.singleReview} reviewContainer`}>
          <div className={styles.ratingIndicatorSmall}>
            {dark ? (
              <>
                <RatingDarkFull />
                <RatingDarkFull />
                <RatingDarkFull />
                <RatingDarkFull />
                <RatingDarkFull />
              </>
            ) : (
              <>
                <RatingLightFull />
                <RatingLightFull />
                <RatingLightFull />
                <RatingLightFull />
                <RatingLightFull />
              </>
            )}
          </div>
          <p className={styles.reviewText}>{review2}</p>
        </div>
        <div className={`${styles.singleReview} reviewContainer`}>
          <div className={styles.ratingIndicatorSmall}>
            {dark ? (
              <>
                <RatingDarkFull />
                <RatingDarkFull />
                <RatingDarkFull />
                <RatingDarkFull />
                <RatingDarkFull />
              </>
            ) : (
              <>
                <RatingLightFull />
                <RatingLightFull />
                <RatingLightFull />
                <RatingLightFull />
                <RatingLightFull />
              </>
            )}
          </div>
          <p className={styles.reviewText}>{review3}</p>
        </div>
      </div>
    </div>
  );
}
