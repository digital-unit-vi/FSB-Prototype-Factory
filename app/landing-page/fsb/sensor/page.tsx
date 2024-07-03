/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

"use client";

import {
  BentoBoxTiles,
  BluetoothLight,
  Button,
  FunctionsTab,
  GalleryCarousel,
  Headline,
  ImageCarousel,
  ParallaxProductSection,
  PreCleanLight,
  ProductBlock,
  SousVideLight,
  Thermomix,
  TimerLight,
  Typography,
  UserReview,
  Wifi1Light,
} from "@components/build-assets/libraryExport";
import ProductAnimation from "@components/landingPage/productAnimation/productAnimation";
import ComponentWrapper from "@components/shared/componentWrapper/componentWrapper";
import Spacer from "@components/shared/spacer/spacer";
import dynamic from "next/dynamic";
import Image from "next/image";

const HeroComponent = dynamic(
  () =>
    import("@components/build-assets/libraryExport").then((mod) => mod.Hero),
  { ssr: false }
);

const HeaderComponent = dynamic(
  () =>
    import("@components/build-assets/libraryExport").then((mod) => mod.Header),
  { ssr: false }
);

export default function SensorLightLandingPageFSB() {
  return (
    <main>
      <HeaderComponent
        isLandingPage={true}
        landingPageLogo={
          <a href="#">
            <Thermomix size="small" />
          </a>
        }
      />
      <HeroComponent
        isLandingPage={true}
        image={
          <Image
            src="/email/hero/tm6-hero-background.png"
            alt="Hero image"
            priority
            width={640}
            height={640}
          />
        }
        video={
          <video autoPlay muted loop playsInline>
            <source
              src="/landingPage/hero/sensor-hero-default.mp4"
              type="video/mp4"
            />
          </video>
        }
        cta={
          <Button size="large" type="primary">
            Shop now
          </Button>
        }
        headline={
          <Headline
            eyebrowLine="Thermomix® Sensor"
            strongColor="white"
            spaceBelow="default"
          >
            <Typography
              component="h1"
              // variant="paragraph16"
              // spaceBelow="default"
            >
              <span>
                Turn a guess
                <br />
                <strong>into success</strong>
              </span>
            </Typography>
          </Headline>
        }
      />
      <ParallaxProductSection productImage="/landingPage/hero/sensor-hero-landing-page.png" />

      {/* <section className={styles.mainSection}> */}
      <ComponentWrapper textCenter>
        <Typography component="h2">
          Strive for excellent results when cooking in the oven, pan, or on the
          grill
        </Typography>
      </ComponentWrapper>
      <Spacer size={96} />
      <GalleryCarousel
        desktopSlides={[
          {
            bigImagePosLeft: false,
            images: [
              {
                url: "/landingPage/imageGallery/sensor-loaf.jpg",
                alt: "Image 1",
                title: "",
              },
              {
                url: "/landingPage/imageGallery/sensor-pan.jpg",
                alt: "Image 2",
                title: "",
              },
              {
                url: "/email/collage/sensor-father-daughter.jpg",
                alt: "Image 3",
                title: "",
              },
            ],
          },
          {
            bigImagePosLeft: false,
            images: [
              {
                url: "/landingPage/imageGallery/sensor-tm6-cake.jpg",
                alt: "Image 4",
                title: "",
              },
              {
                url: "/landingPage/imageGallery/sensor-grill.jpg",
                alt: "Image 5",
                title: "",
              },
              {
                url: "/landingPage/imageGallery/sensor-mother-daughter.jpg",
                alt: "Image 6",
                title: "",
              },
            ],
          },
          {
            bigImagePosLeft: true,
            images: [
              {
                url: "/landingPage/imageGallery/sensor-app-juice.jpg",
                alt: "Image 7",
                title: "",
              },
              {
                url: "/landingPage/imageGallery/sensor-oven-cake.jpg",
                alt: "Image 8",
                title: "",
              },
              {
                url: "/landingPage/imageGallery/sensor-man-fish.jpg",
                alt: "Image 9",
                title: "",
              },
            ],
          },
        ]}
        mobileSlides={[
          {
            mobileCarouselItems: [
              {
                url: "/landingPage/imageGallery/sensor-loaf.jpg",
                alt: "Image 1",
                title: "",
              },
              {
                url: "/landingPage/imageGallery/sensor-pan.jpg",
                alt: "Image 2",
                title: "",
              },
              {
                url: "/email/collage/sensor-father-daughter.jpg",
                alt: "Image 3",
                title: "",
              },
              {
                url: "/landingPage/imageGallery/sensor-tm6-cake.jpg",
                alt: "Image 4",
                title: "",
              },
              {
                url: "/landingPage/imageGallery/sensor-grill.jpg",
                alt: "Image 5",
                title: "",
              },
              {
                url: "/landingPage/imageGallery/sensor-mother-daughter.jpg",
                alt: "Image 6",
                title: "",
              },
              {
                url: "/landingPage/imageGallery/sensor-app-juice.jpg",
                alt: "Image 7",
                title: "",
              },
              {
                url: "/landingPage/imageGallery/sensor-oven-cake.jpg",
                alt: "Image 8",
                title: "",
              },
              {
                url: "/landingPage/imageGallery/sensor-man-fish.jpg",
                alt: "Image 9",
                title: "",
              },
            ],
          },
        ]}
      />
      <Spacer size={96} />
      <ComponentWrapper>
        <Headline spaceBelow="default">
          <Typography component="h3" fontWeight="bold" spaceBelow="default">
            What is the <br />
            Thermomix® Sensor?
          </Typography>
          <Typography
            component="p"
            variant="paragraph18"
            fontWeight="regular"
            spaceBelow="default"
          >
            With the Thermomix® Sensor, we are extending the guaranteed success
            of our Guided Cooking recipes to your cooker, oven and grill for the
            first time.
          </Typography>
          <Typography component="p" variant="paragraph18" fontWeight="regular">
            The Thermomix® Sensor is so much more than an ordinary food
            thermometer. With the right core temperature, you can achieve
            perfect results with cakes, breads, meat or fish. Discover the new
            possibilities for limitless enjoyment!
          </Typography>
        </Headline>
      </ComponentWrapper>
      <Spacer size={96} />
      <ComponentWrapper textCenter>
        <Headline spaceBelow="default" strongColor="green">
          <Typography component="h1" fontWeight="light">
            Thermomix® Sensor means <strong>Full control</strong>
          </Typography>
        </Headline>
      </ComponentWrapper>
      {/* <Spacer size={32} /> */}
      <ProductAnimation />
      {/* <Spacer size={96} /> */}
      <ComponentWrapper>
        <BentoBoxTiles
          tiles={[
            {
              image: "/landingPage/bento/bento-sensor-plate.png",
              icon: <TimerLight />,
              title: "Pinpoint perfection",
              text: "Guaranteed taste, consistency and perfect results for all foods beyond the mixing bowl.",
              imageBottom: false,
              bigTile: false,
            },
            {
              image: "",
              icon: <SousVideLight />,
              title: "Up to 275°C",
              text: "The sensors heat protection allows it to be used in 275°C hot environments (220°C with holder).",
              imageBottom: false,
              bigTile: false,
            },
            {
              image: "/landingPage/bento/bento-sensor-phone.png",
              icon: <BluetoothLight />,
              title: "Bluetooth®",
              text: "Allows to wirelessly connect it to your Thermomix® TM6 and smartphone.",
              imageBottom: true,
              bigTile: true,
            },
            {
              image: "",
              icon: <Wifi1Light />,
              title: "Up to 24h battery life",
              text: "For the sake of sustainability we rely on rechargeable and replaceable AAA batteries.",
              imageBottom: false,
              bigTile: false,
            },
            {
              image: "/landingPage/bento/bento-sensor-water.png",
              icon: <PreCleanLight />,
              title: "100% water resistent",
              text: "Due to full water resistance you don't need to worry about water damage.",
              imageBottom: true,
              bigTile: false,
            },
          ]}
        />
      </ComponentWrapper>
      <Spacer size={48} />
      <FunctionsTab
        items={[
          {
            id: 1,
            text: "1. Sensor and charging station",
            isActive: false,
            icon: PreCleanLight,
            scrollMin: 0,
            scrollMax: 1,
            media: {
              type: "video",
              src: "/landingPage/stepByStep/sensor/01_take.mp4",
            },
          },
          {
            id: 2,
            text: "2. Place the sensor",
            isActive: false,
            icon: PreCleanLight,
            scrollMin: 0,
            scrollMax: 1,
            media: {
              type: "video",
              src: "/landingPage/stepByStep/sensor/02_insert.mp4",
            },
          },
          {
            id: 3,
            text: "3. Cooking with the sensor",
            isActive: false,
            icon: PreCleanLight,
            scrollMin: 0,
            scrollMax: 1,
            media: {
              type: "video",
              src: "/landingPage/stepByStep/sensor/03_cooking.mp4",
            },
          },
          {
            id: 4,
            text: "4. Cleaning",
            isActive: false,
            icon: PreCleanLight,
            scrollMin: 0,
            scrollMax: 1,
            media: {
              type: "video",
              src: "/landingPage/stepByStep/sensor/04_cleaning.mp4",
            },
          },
        ]}
      />
      <Spacer size={48} />
      <ComponentWrapper textCenter>
        <Headline spaceBelow="default" strongColor="green">
          <Typography component="h1" fontWeight="light" spaceBelow="default">
            Don&apos;t miss a single <strong>cooking point</strong>
          </Typography>
          <Typography component="p" variant="paragraph18" fontWeight="regular">
            Meat and fish cooked to perfection, light and fluffy cakes, crispy
            breads
          </Typography>
        </Headline>
      </ComponentWrapper>
      <Spacer size={16} />
      <ImageCarousel
        eyecatcher={{
          firstLine: "Success",
          secondLine: "guaranteed",
          thirdLine: "",
          size: "medium",
          backgroundColor: "green",
          rotation: "5 degrees",
          buttonSize: "160px",
        }}
        productImage="/landingPage/carousel/carousel-sensor.png"
        infiniteGallery={true}
        imageSize="240px"
        images={[
          {
            url: "/landingPage/carousel/result-1.jpg",
            alt: "Image 1",
            title: "Image 1",
          },
          {
            url: "/landingPage/carousel/result-2.jpg",
            alt: "Image 2",
            title: "Image 2",
          },
          {
            url: "/landingPage/carousel/result-3.jpg",
            alt: "Image 3",
            title: "Image 3",
          },
          {
            url: "/landingPage/carousel/result-4.jpg",
            alt: "Image 4",
            title: "Image 4",
          },
          {
            url: "/landingPage/carousel/result-5.jpg",
            alt: "Image 5",
            title: "Image 5",
          },
          {
            url: "/landingPage/carousel/result-6.jpg",
            alt: "Image 6",
            title: "Image 6",
          },
          {
            url: "/landingPage/carousel/result-7.jpg",
            alt: "Image 7",
            title: "Image 7",
          },
          {
            url: "/landingPage/carousel/result-8.jpg",
            alt: "Image 8",
            title: "Image 8",
          },
          {
            url: "/landingPage/carousel/result-9.jpg",
            alt: "Image 9",
            title: "Image 9",
          },
          {
            url: "/landingPage/carousel/result-10.jpg",
            alt: "Image 10",
            title: "Image 10",
          },
          {
            url: "/landingPage/carousel/result-11.jpg",
            alt: "Image 11",
            title: "Image 11",
          },
          {
            url: "/landingPage/carousel/result-12.jpg",
            alt: "Image 12",
            title: "Image 12",
          },
          {
            url: "/landingPage/carousel/result-13.jpg",
            alt: "Image 13",
            title: "Image 13",
          },
        ]}
        direction="left"
        speed="slow"
      />
      <Spacer size={96} />
      <ComponentWrapper>
        <UserReview
          greenText="4.5"
          additionalText="(129 Reviews)"
          overallStars={4.5}
          reviewItems={[
            {
              stars: 4,
              reviewText:
                "I am totally thrilled, as I always had problems with my very basic oven, but with the sensor I don't always have to keep checking if it's ready.",
            },
            {
              stars: 5,
              reviewText:
                "It's great that you can read off all the values on the Thermomix. Very nice technical integration. Perfect for preparing roasts and cakes.",
            },
            {
              stars: 5,
              reviewText:
                "Finally no more stick test! Fun and makes cake baking easier.",
            },
          ]}
        />
      </ComponentWrapper>
      <Spacer size={80} />
      <ProductBlock
        headline="Thermomix® Sensor"
        price="149,00 €"
        ctaTarget="https://www.vorwerk.com"
        ctaText="Shop now"
        image="/shared/product/sensor-product.png"
        imageLeft={true}
      />
      {/* </section> */}
    </main>
  );
}
