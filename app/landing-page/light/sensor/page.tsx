"use client";

import {
  BatteryLevel3Light,
  BentoBoxTiles,
  BluetoothLight,
  Button,
  ButtonGroup,
  CleaningLight,
  FunctionsTab,
  GalleryCarousel,
  GridContainer,
  GridItem,
  Header,
  Headline,
  Hero,
  ImageCarousel,
  ParallaxProductSection,
  ProductBlock,
  SectionContainer,
  SousVide,
  SousVideLight,
  Thermomix,
  TimerLight,
  Typography,
  UserReview,
  Vorwerk,
} from "@components/build-assets/libraryExport";
import ProductAnimation from "@components/landingPage/productAnimation/productAnimation";
import ScrollTriggerWatcher from "@components/landingPage/scrollTriggerWatcher/scrollTriggerWatcher";
import Spacer from "@components/shared/spacer/spacer";
import useScreenSize from "@utils/useScreenSize";
import Link from "next/link";
import styles from "./page.module.scss";

export default function SensorLightLandingPage() {
  const screenSize = useScreenSize();
  return (
    <main>
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
      <Hero
        cta={
          <ButtonGroup alignment="center" layout="vertical">
            <Button size="medium" type="primary">
              Shop now
            </Button>
          </ButtonGroup>
        }
        headline={
          <Headline eyebrowLine="Thermomix® Sensor" strongColor="white">
            <Typography component="h1">
              <span
                dangerouslySetInnerHTML={{
                  __html: "Turn a guess<br><strong>into success</strong>",
                }}
              />
            </Typography>
          </Headline>
        }
        image={
          <img
            alt="Sensor"
            src="/landingPage/hero/sensor-hero-default-cover.png"
            style={{ display: "none" }}
          />
        }
        isLandingPage
        video={
          <video autoPlay muted playsInline loop>
            <source
              src="/landingPage/hero/sensor-hero-default.mp4"
              type="video/mp4"
            />
          </video>
        }
      />
      <ParallaxProductSection
        logoImage="/library/images/parallaxProductSection/logos.png"
        productImage="/landingPage/hero/sensor-hero-parallax.png"
      />
      <SectionContainer>
        <GridContainer>
          <GridItem
            columns={10}
            start={2}
            end={12}
            className={styles.textCentered}
          >
            <Headline
              children={
                <Typography component="h2">
                  <span>
                    Guaranteed flavour, consistency and perfect results on the
                    oven, pan and grill
                  </span>
                </Typography>
              }
            />
          </GridItem>
        </GridContainer>
      </SectionContainer>
      <SectionContainer>
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
              bigImagePosLeft: true,
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
              bigImagePosLeft: false,
              images: [
                {
                  url: "/landingPage/imageGallery/sensor-man-fish.jpg",
                  alt: "Image 7",
                  title: "",
                },
                {
                  url: "/landingPage/imageGallery/sensor-app-juice.jpg",
                  alt: "Image 8",
                  title: "",
                },
                {
                  url: "/landingPage/imageGallery/sensor-oven-cake.jpg",
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
                  url: "/landingPage/imageGallery/sensor-man-fish.jpg",
                  alt: "Image 7",
                  title: "",
                },
                {
                  url: "/landingPage/imageGallery/sensor-app-juice.jpg",
                  alt: "Image 8",
                  title: "",
                },
                {
                  url: "/landingPage/imageGallery/sensor-oven-cake.jpg",
                  alt: "Image 9",
                  title: "",
                },
              ],
            },
          ]}
        />
      </SectionContainer>
      <SectionContainer>
        <GridContainer>
          <GridItem columns={4}>
            <Headline
              children={
                <Typography component="h3" fontWeight="bold">
                  What is the Thermomix® Sensor?
                </Typography>
              }
            />
          </GridItem>
          <GridItem columns={8}>
            <Typography component="intro">
              <span style={{ whiteSpace: "pre-line" }}>
                {screenSize.width > 739
                  ? `The Thermomix® Sensor is so much more than an ordinary food thermometer. With the Thermomix® Sensor, we are extending the guaranteed success of our Guided Cooking recipes to your cooker, oven and grill for the first time. With the right core temperature, you can achieve perfect results with cakes, breads, meat or fish. Discover the new possibilities for limitless enjoyment!`
                  : `The Thermomix® Sensor is so much more than an ordinary food thermometer. With the Thermomix® Sensor, we are extending the guaranteed success of our Guided Cooking recipes to your cooker, oven and grill for the first time.

                With the right core temperature, you can achieve perfect results with cakes, breads, meat or fish. Discover the new possibilities for limitless enjoyment!`}
              </span>
            </Typography>
          </GridItem>
        </GridContainer>
      </SectionContainer>
      <SectionContainer>
        <GridContainer>
          <GridItem
            columns={10}
            start={2}
            end={12}
            className={styles.textCentered}
          >
            <ScrollTriggerWatcher>
              <Headline
                children={
                  <Typography component="h1">
                    <span>
                      <strong>Full control</strong> in your kitchen
                    </span>
                  </Typography>
                }
                strongColor="green"
              />
            </ScrollTriggerWatcher>
          </GridItem>
        </GridContainer>
        <ProductAnimation />
        <Spacer size={48} sizeMedium={0} />
        <BentoBoxTiles
          tiles={[
            {
              bigTile: false,
              icon: <TimerLight />,
              image: "/landingPage/bento/bento-sensor-plate.png",
              imageBottom: false,
              text: "Guaranteed taste, consistency and perfect results for all foods beyond the mixing bowl.",
              title: "Pinpoint perfection",
            },
            {
              bigTile: false,
              icon: <SousVideLight />,
              image: "",
              imageBottom: false,
              text: "The sensors heat protection allows it to be used in 275°C hot enviroments (220°C with holder).",
              title: "Up to 275°C",
            },
            {
              bigTile: true,
              icon: <BluetoothLight />,
              image: "/landingPage/bento/bento-sensor-phone.png",
              imageBottom: true,
              text: "Allows to wirelessly connect it to your Thermomix® TM6 and smartphone.",
              title: "Bluetooth®",
            },
            {
              bigTile: false,
              icon: <BatteryLevel3Light />,
              image: "",
              imageBottom: false,
              text: "For the sake of sustainability we rely on rechargeable and replaceable AAA batteries.",
              title: "Up to 24h battery life",
            },
            {
              bigTile: false,
              icon: <CleaningLight />,
              image: "/landingPage/bento/bento-sensor-water.png",
              imageBottom: true,
              text: "Due to full water resistance you don't need to worry about water damage.",
              title: "100% water resistant",
            },
          ]}
        />
        <Spacer size={96} sizeMedium={0} />
        <FunctionsTab
          items={[
            {
              id: 1,
              text: "Sensor and charging station",
              isActive: false,
              scrollMin: 0,
              scrollMax: 1,
              media: {
                type: "video",
                src: "/landingPage/stepByStep/sensor/01_take.mp4",
              },
              icon: <SousVide />,
              useIcon: false,
            },
            {
              id: 2,
              text: "Place the sensor",
              isActive: false,
              scrollMin: 0,
              scrollMax: 1,
              media: {
                type: "video",
                src: "/landingPage/stepByStep/sensor/02_insert.mp4",
              },
              icon: <SousVide />,
              useIcon: false,
            },
            {
              id: 3,
              text: "Cooking with the sensor",
              isActive: false,
              scrollMin: 0,
              scrollMax: 1,
              media: {
                type: "video",
                src: "/landingPage/stepByStep/sensor/03_cooking.mp4",
              },
              icon: <SousVide />,
              useIcon: false,
            },
            {
              id: 4,
              text: "Cleaning",
              isActive: false,
              scrollMin: 0,
              scrollMax: 1,
              media: {
                type: "video",
                src: "/landingPage/stepByStep/sensor/04_cleaning.mp4",
              },
              icon: <SousVide />,
              useIcon: false,
            },
          ]}
        />
        <Spacer size={96} sizeMedium={0} />
        <GridContainer>
          <GridItem
            columns={10}
            start={2}
            end={12}
            className={styles.textCentered}
          >
            <>
              <Headline
                spaceBelow={"default"}
                children={
                  <Typography component="h1">
                    <span>
                      Don't miss a single
                      <br />
                      <strong>cooking point</strong>
                    </span>
                  </Typography>
                }
                strongColor="green"
              />
              <Typography component="intro">
                <span>
                  Meat and fish cooked to perfection, light and fluffy cakes,
                  crispy breads
                </span>
              </Typography>
            </>
          </GridItem>
        </GridContainer>
        <Spacer size={16} sizeMedium={40} />
        <ImageCarousel
          eyecatcher={{
            backgroundColor: "green",
            firstLine: "Success",
            rotation: "5 degrees",
            secondLine: "guaranteed",
            thirdLine: "",
          }}
          productImage="/landingPage/carousel/carousel-sensor-4-3.png"
          images={[
            {
              url: "/library/images/image-carousel/image-carousel1.png",
              alt: "Image 1",
              title: "Image 1",
            },
            {
              url: "/library/images/image-carousel/image-carousel2.png",
              alt: "Image 2",
              title: "Image 2",
            },
            {
              url: "/library/images/image-carousel/image-carousel3.png",
              alt: "Image 3",
              title: "Image 3",
            },
            {
              url: "/library/images/image-carousel/image-carousel4.png",
              alt: "Image 4",
              title: "Image 4",
            },
            {
              url: "/library/images/image-carousel/image-carousel5.png",
              alt: "Image 5",
              title: "Image 5",
            },
            {
              url: "/library/images/image-carousel/image-carousel6.png",
              alt: "Image 6",
              title: "Image 6",
            },
            {
              url: "/library/images/image-carousel/image-carousel7.png",
              alt: "Image 7",
              title: "Image 7",
            },
            {
              url: "/library/images/image-carousel/image-carousel8.png",
              alt: "Image 8",
              title: "Image 8",
            },
          ]}
          showEyecatcher
        />
      </SectionContainer>
      <SectionContainer>
        <UserReview
          additionalText="42 reviews"
          overallStars={4.5}
          reviewItems={[
            {
              stars: 5,
              reviewText:
                "I am totally thrilled, as I always had problems with my very basic oven, but with the sensor I don't always have to keep checking if it's ready.",
            },
            {
              stars: 4,
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
        <Spacer size={32} sizeMedium={64} />
      </SectionContainer>
      <ProductBlock
        ctaText="Shop now"
        headline="Thermomix® Sensor"
        image="/shared/product/sensor-product.png"
        price="149,00 €"
      />
    </main>
  );
}
