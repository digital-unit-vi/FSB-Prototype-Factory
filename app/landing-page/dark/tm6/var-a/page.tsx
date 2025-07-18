"use client";

import Hero from "@components/landingPage/hero/hero";
import Spacer from "@components/shared/spacer/spacer";
import {
  BentoBoxTiles,
  BlendIllustration,
  BlendLight,
  BluetoothLight,
  DisplaySettingsLight,
  DoughIllustration,
  FermentationIllustration,
  FullwidthImage,
  GridContainer,
  GridItem,
  Headline,
  HighTemperatureIllustration,
  ImageCarousel,
  PeelingIllustration,
  PreparationTimeIllustration,
  ProductBlock,
  ScrollRow,
  SectionContainer,
  SlowCookingIllustration,
  SousVideIllustration,
  TemperatureHighLight,
  Typography,
  UserReview,
  WifiLight,
} from "@vorwerk/fibre-react";
import dynamic from "next/dynamic";
import styles from "./page.module.scss";

export default function TM6VariantADarkLandingPage() {
  const GalleryCarouselDynamic = dynamic(
    () => import("@components/ssrWrappers/GalleryCarouselWrapper"),
    { ssr: false }
  );

  return (
    <main>
      <Hero
        video="default"
        productImage="tm6"
        eyebrowLine="Thermomix® TM6"
        textCopy="One device.<br><strong>Endless possibilities</strong>"
        darkMode
        poster="/landingPage/hero/tm6-hero-default-cover-new.jpeg"
      />
      <SectionContainer>
        <GridContainer>
          <GridItem
            columns={10}
            start={2}
            end={12}
            className={styles.textCentered}
          >
            <Headline>
              <Typography component="h2">
                <span>
                  Compact and versatile – the Thermomix® TM6 is cleaner, more
                  powerful, and quieter.
                </span>
              </Typography>
            </Headline>
          </GridItem>
        </GridContainer>
      </SectionContainer>
      <SectionContainer>
        <BentoBoxTiles
          darkMode
          tiles={[
            {
              bigTile: false,
              icon: <DisplaySettingsLight />,
              image: "/landingPage/bento/bento-display-settings.png",
              imageBottom: false,
              text: "Great recipes require a greater display so we increased it further.",
              title: "6,8-inch touch screen",
            },
            {
              bigTile: false,
              icon: <TemperatureHighLight />,
              image: "",
              imageBottom: false,
              text: "It's getting hot! TM6 allows for the first time to conjure up roasted flavours.",
              title: "Up to 160°C",
            },
            {
              bigTile: true,
              icon: <BluetoothLight />,
              image: "/landingPage/bento/bento-bluetooth.png",
              imageBottom: true,
              text: "Allows to connect neat gadgets like Thermomix® Sensor to improve the experience further.",
              title: "Bluetooth®",
            },
            {
              bigTile: false,
              icon: <WifiLight />,
              image: "",
              imageBottom: false,
              text: "Allows to access thousands of recipes and to receive free updates over the air .",
              title: "Wifi",
            },
            {
              bigTile: false,
              icon: <BlendLight />,
              image: "/landingPage/bento/bento-motor.png",
              imageBottom: true,
              text: "Reluctance motor which allows a long time, maintenance-free operation like no other.",
              title: "Durable motor",
            },
          ]}
        />
      </SectionContainer>
      <SectionContainer>
        <GridContainer>
          <GridItem
            columns={10}
            start={2}
            end={12}
            className={styles.textCentered}
          >
            <>
              <Headline spaceBelow={"default"} strongColor="green">
                <Typography component="h1">
                  <span>
                    Tons of <strong>functions</strong>
                  </span>
                </Typography>
              </Headline>
              <Typography component="intro">
                <span>
                  The Thermomix® TM6 replaces more than twenty appliances.
                  Thanks to numerous built-in functions it can...
                </span>
              </Typography>
            </>
          </GridItem>
        </GridContainer>
      </SectionContainer>
      <SectionContainer>
        <ScrollRow
          darkMode
          scrollRowItems={[
            {
              children: <PreparationTimeIllustration />,
              text: "Chop",
            },
            {
              children: <DoughIllustration />,
              text: "Knead",
            },
            {
              children: <SousVideIllustration />,
              text: "Sous-vide",
            },
            {
              children: <HighTemperatureIllustration />,
              text: "Sauté",
            },
            {
              children: <BlendIllustration />,
              text: "Blend",
            },
            {
              children: <PeelingIllustration />,
              text: "Peeler",
            },
            {
              children: <FermentationIllustration />,
              text: "Fermentation",
            },
            {
              children: <SlowCookingIllustration />,
              text: "Slow Cook",
            },
          ]}
        />
      </SectionContainer>
      <SectionContainer>
        <GalleryCarouselDynamic
          darkMode
          desktopSlides={[
            {
              bigImagePosLeft: false,
              images: [
                {
                  url: "/landingPage/imageGallery/tm6-app-share.jpg",
                  alt: "Image 1",
                  title: "",
                },
                {
                  url: "/landingPage/imageGallery/tm6-family-leisure.jpg",
                  alt: "Image 2",
                  title: "",
                },
                {
                  url: "/landingPage/imageGallery/tm6-dinner.jpg",
                  alt: "Image 3",
                  title: "",
                },
              ],
            },
            {
              bigImagePosLeft: false,
              images: [
                {
                  url: "/landingPage/imageGallery/tm6-woman-pear.jpg",
                  alt: "Image 4",
                  title: "",
                },
                {
                  url: "/landingPage/imageGallery/tm6-woman-varoma.jpg",
                  alt: "Image 5",
                  title: "",
                },
                {
                  url: "/landingPage/imageGallery/tm6-pear-chocolate.jpg",
                  alt: "Image 6",
                  title: "",
                },
              ],
            },
          ]}
          mobileSlides={[
            {
              mobileCarouselItems: [
                {
                  url: "/landingPage/imageGallery/tm6-app-share.jpg",
                  alt: "Image 1",
                  title: "",
                },
                {
                  url: "/landingPage/imageGallery/tm6-family-leisure.jpg",
                  alt: "Image 2",
                  title: "",
                },
                {
                  url: "/landingPage/imageGallery/tm6-dinner.jpg",
                  alt: "Image 3",
                  title: "",
                },
                {
                  url: "/landingPage/imageGallery/tm6-woman-pear.jpg",
                  alt: "Image 4",
                  title: "",
                },
                {
                  url: "/landingPage/imageGallery/tm6-woman-varoma.jpg",
                  alt: "Image 5",
                  title: "",
                },
                {
                  url: "/landingPage/imageGallery/tm6-pear-chocolate.jpg",
                  alt: "Image 6",
                  title: "",
                },
              ],
            },
          ]}
        />
      </SectionContainer>
      <SectionContainer>
        <GridContainer>
          <GridItem
            columns={10}
            start={2}
            end={12}
            className={styles.textCentered}
          >
            <>
              <Headline spaceBelow={"default"} strongColor="green">
                <Typography component="h1">
                  <span>
                    New favorite recipes
                    <br />
                    <strong>everyday</strong>
                  </span>
                </Typography>
              </Headline>
              <Typography component="intro">
                <span>
                  The Cookidoo® digital recipe portal is the key to your
                  Thermomix® TM6, allowing you to cook dishes from all over the
                  world. You can access Cookidoo® directly from your
                  Thermomix® TM6 or plan your dishes on your smartphone.
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
          productImage="/library/images/image-carousel/image-carousel-product.png"
          productImageAlt="TM6 front side"
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
          darkMode
          additionalText="42 reviews"
          overallStars={4.6}
          reviewItems={[
            {
              stars: 5,
              reviewText:
                "The Thermomix TM6 has truly revolutionized my kitchen experience! From effortless meal prep to gourmet creations, it's a game-changer.",
            },
            {
              stars: 4,
              reviewText:
                "I'm amazed by the versatility of the Thermomix TM6. It simplifies cooking without compromising on taste or nutrition. Worth every penny!",
            },
            {
              stars: 5,
              reviewText:
                "As a busy professional, the Thermomix TM6 is a lifesaver. It streamlines cooking, allowing me to enjoy delicious, homemade meals with minimal.",
            },
          ]}
        />
        <Spacer size={32} sizeMedium={64} />
      </SectionContainer>
      <ProductBlock
        darkMode
        ctaText="Shop now"
        headline="Thermomix® TM6"
        image="/shared/product/tm6-product-accessories-light.png"
        imageAlt="TM6 with accessories"
        price="1.499,00 €"
      />
      <FullwidthImage
        btnText="Book a free demo"
        desktopImage="/library/images/fullWidthImage.jpg"
        headline={{
          children: "Live product <strong>experience</strong>?",
        }}
        mobileImage="/library/images/fullWidthImage.jpg"
      />
    </main>
  );
}
