"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import styles from "./productAnimation.module.scss";

const ProductAnimation = () => {
	gsap.registerPlugin(ScrollTrigger, useGSAP);

	const canvasRef = useRef<HTMLCanvasElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
	const imagesRef = useRef<HTMLImageElement[] | null>(null);
	const isMobileRef = useRef<boolean>(false);

	useGSAP(
		() => {
			const isWindowDefined = typeof window !== "undefined";
			if (!isWindowDefined) return;

			isMobileRef.current = window.innerWidth <= 768;

			const container = containerRef.current;
			const canvas = canvasRef.current;

			if (!canvas || !container) return;

			const context = canvas.getContext("2d", { alpha: false });

			if (!context) return;

			context.imageSmoothingEnabled = true;
			context.imageSmoothingQuality = "high";

			const dpr = window.devicePixelRatio || 1;
			const frameCount = 149;
			const frames = {
				frame: 0,
			};
			let loadedImages = 0;

			const currentFrame = (index: number) =>
				`/cosy/animation/agency/Sq02-Landing_Page_Comp_v0009.${(index + 962).toString().padStart(4, "0")}.webp`;

			const preloadImages = () => {
				const images = imagesRef.current ?? [];
				images.length = 0;

				for (let i = 0; i < frameCount; i++) {
					const img = new Image();
					img.onload = () => {
						loadedImages++;
						if (loadedImages === frameCount) {
							render();
						}
					};
					img.src = currentFrame(i);
					images.push(img);
				}

				imagesRef.current = images;
			};

			const adjustCanvasSize = () => {
				if (!canvas) return;

				const rect = canvas.getBoundingClientRect();
				canvas.width = rect.width * dpr;
				canvas.height = rect.height * dpr;

				canvas.style.width = `${rect.width}px`;
				canvas.style.height = `${rect.height}px`;

				render();
			};

			const render = () => {
				if (!canvas || !context || !imagesRef.current?.[frames.frame]) return;

				context.fillStyle = "#23282a";
				context.fillRect(0, 0, canvas.width, canvas.height);

				const image = imagesRef.current?.[frames.frame];
				const rect = canvas.getBoundingClientRect();

				const scale = rect.height / image.height;
				const renderableHeight = rect.height;
				const renderableWidth = image.width * scale;
				const x = (rect.width - renderableWidth) / 2;
				const y = 0;

				context.drawImage(
					image,
					x * dpr,
					y * dpr,
					renderableWidth * dpr,
					renderableHeight * dpr,
				);
			};

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					start: "top top",
					end: "+=1024",
					pin: true,
					pinSpacing: true,
					scrub: 1,
				},
			});

			tl.to(frames, {
				frame: frameCount - 1,
				snap: "frame",
				onUpdate: render,
				immediateRender: true,
			});

			if (tl.scrollTrigger) {
				scrollTriggerRef.current = tl.scrollTrigger;
			}

			let resizeTimeout: ReturnType<typeof setTimeout>;

			const handleResize = () => {
				clearTimeout(resizeTimeout);
				resizeTimeout = setTimeout(() => {
					const prevIsMobile = isMobileRef.current;
					isMobileRef.current = window.innerWidth <= 768;

					if (prevIsMobile !== isMobileRef.current) {
						loadedImages = 0;
						preloadImages();
					}

					adjustCanvasSize();
				}, 150);
			};

			window.addEventListener("resize", handleResize);
			adjustCanvasSize();
			preloadImages();

			return () => {
				window.removeEventListener("resize", handleResize);
			};
		},
		{ scope: containerRef },
	);

	return (
		<div ref={containerRef} className={styles.container}>
			<canvas ref={canvasRef} className={styles.canvas} />
		</div>
	);
};

export default ProductAnimation;
