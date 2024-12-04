"use client";

import Button from "@components/shared/button/button";
import ParallaxLogoDark from "@public/landingPage/hero/logos-dark.png";
import ParallaxLogo from "@public/landingPage/hero/logos.png";
import SensorProductImage from "@public/landingPage/hero/sensor-hero-landing-page.png";
import TM6ProductImage from "@public/shared/product/tm6-product-light.png";
import {
	GridContainer,
	GridItem,
	Header,
	Headline,
	Thermomix,
	Typography,
	Vorwerk,
} from "@vorwerk/fibre-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type React from "react";
import { useEffect, useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import styles from "./hero.module.scss";

type VideoType = "default" | "cutting" | "dishes" | "sensor";
type ProductImage = "tm6" | "sensor";

interface HeroProps {
	video: VideoType;
	productImage: ProductImage;
	eyebrowLine: string;
	textCopy: string | TrustedHTML;
	darkMode?: boolean;
	poster?: string;
}

const HERO_VIDEO_MAPPING: Record<VideoType, string> = {
	default: "/landingPage/hero/tm6-hero-default.mp4",
	cutting: "/landingPage/hero/tm6-hero-cutting.mp4",
	dishes: "/landingPage/hero/tm6-hero-dishes.mp4",
	sensor: "/landingPage/hero/sensor-hero-default.mp4",
};

const HERO_PRODUCT_IMAGE_MAPPING: Record<ProductImage, StaticImageData> = {
	tm6: TM6ProductImage,
	sensor: SensorProductImage,
};

const Hero: React.FC<HeroProps> = ({
	video,
	productImage,
	eyebrowLine,
	textCopy,
	darkMode = false,
	poster = "",
}) => {
	const parallaxLogo = darkMode ? ParallaxLogoDark : ParallaxLogo;

	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const videoEl = videoRef.current;
		if (!videoEl) return;

		videoEl.muted = true;
		videoEl.playsInline = true;

		const playVideo = () => {
			videoEl.play().catch((error) => {
				console.error("Video playback failed:", error);
			});
		};

		if (videoEl.readyState >= 3) {
			playVideo();
		} else {
			videoEl.addEventListener("canplaythrough", playVideo, { once: true });
		}

		return () => {
			videoEl.removeEventListener("canplaythrough", playVideo);
		};
	}, []);

	return (
		<div className={styles.mainWrapper}>
			<div className={styles.heroContainer}>
				<div className={styles.videoWrapper}>
					<video
						ref={videoRef}
						className={styles.heroVideo}
						autoPlay
						muted
						playsInline
						loop
						preload="auto"
						disableRemotePlayback
						poster={poster}
					>
						<source src={HERO_VIDEO_MAPPING[video]} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
					<div className={styles.heroOverlay} />
				</div>
				<div className={styles.headerContainer}>
					<Header
						isLandingPage
						landingPageLogo={
							<Link href="/">
								<Thermomix size="small" />
							</Link>
						}
						logo={
							<Link href="/">
								<Vorwerk />
							</Link>
						}
					/>
				</div>
				<div className={styles.heroContent}>
					<Parallax
						translateY={[0, -15, "easeOut"]}
						shouldAlwaysCompleteAnimation={true}
					>
						<GridContainer>
							<GridItem columns={12}>
								<Headline
									eyebrowLine={eyebrowLine}
									strongColor="white"
									spaceBelow="default"
								>
									<Typography component="h1">
										<span
											dangerouslySetInnerHTML={{
												__html: textCopy,
											}}
										/>
									</Typography>
								</Headline>
								<Button type="center" href="#" />
							</GridItem>
						</GridContainer>
					</Parallax>
				</div>
			</div>
			<div className={styles.parallaxWrapper}>
				<Parallax
					shouldAlwaysCompleteAnimation={true}
					translateY={[0, -50, "easeIn"]}
					scale={[1.0, 1.15, "easeIn"]}
					className={styles.parallax}
				>
					<GridContainer>
						<GridItem startL={4} endL={10}>
							<Image
								src={HERO_PRODUCT_IMAGE_MAPPING[productImage]}
								alt="Hero product image"
								className={styles.heroProduct}
								priority
							/>
						</GridItem>
					</GridContainer>
				</Parallax>
				<div className={styles.parallaxLogoWrapper}>
					<GridContainer>
						<GridItem columns={9}><div /></GridItem>
						<GridItem columns={3}>
							<Image
								src={parallaxLogo}
								alt="Hero logo image"
								className={styles.parallaxLogo}
								priority
							/>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		</div>
	);
};

export default Hero;
