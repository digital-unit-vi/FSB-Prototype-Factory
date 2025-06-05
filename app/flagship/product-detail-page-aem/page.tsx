"use client";

import CategoryTile from "@components/flagship/categoryTile/categoryTile";
import CategoryTiles from "@components/flagship/categoryTiles/categoryTiles";
import { GalleryItem } from "@components/flagship/gallery/gallery";
import ImageGallery from "@components/flagship/imageGallery/imageGallery";
import ProductHeroAEM from "@components/flagship/productHeroAEM/productHeroAEM";
import useScreenSize from "@utils/useScreenSize";
import {
  Button,
  ButtonGroup,
  ContentBlock,
  GridContainer,
  GridItem,
  Headline,
  MediaContainer,
  Typography,
} from "@vorwerk/fibre-react";
import Link from "next/link";
import styles from "./page.module.scss";

const imagesCarousel = [
  <img
    key="image1"
    src="/flagship/hero/ds360-hero.png"
    alt="Thermomix DS360"
  />,
  <img
    key="image2"
    src="/flagship/carousel/pdp-2.png"
    alt="Thermomix right side"
  />,
  <img
    key="image3"
    src="/flagship/carousel/pdp-3.png"
    alt="Thermomix back side"
  />,
  <img
    key="image4"
    src="/flagship/carousel/pdp-4.png"
    alt="Thermomix left side"
  />,
];

const imagesForThumbnails: GalleryItem[] = [
  {
    type: "image",
    url: "/flagship/hero/ds360-hero.png",
    alt: "DS360",
    title: "DS360",
  },
  {
    type: "image",
    url: "/flagship/carousel/pdp-aem-2.png",
    alt: "DS360 right side",
    title: "DS360 right side",
  },
  {
    type: "image",
    url: "/flagship/carousel/pdp-aem-3.png",
    alt: "DS360 left side",
    title: "DS360 left side",
  },
  {
    type: "image",
    url: "/flagship/carousel/pdp-aem-4.png",
    alt: "DS360 back side",
    title: "DS360 back side",
  },
];

const categoryTilesAssets = [
  <CategoryTile
    size={"small"}
    backgroundColor={"grey"}
    imageProps={{
      src: "/library/images/thermomix-friend.png",
      alt: "Thermomix Friend",
    }}
    title={"Thermomix Friend®"}
    key={"Thermomix Friend®"}
  />,
  <CategoryTile
    size={"small"}
    backgroundColor={"grey"}
    imageProps={{
      src: "/flagship/images/accessories.png",
      alt: "Accessories",
    }}
    title={"Accessories"}
    key={"Accessories"}
  />,
  <CategoryTile
    size={"small"}
    brandColor={"#23282A"}
    imageProps={{
      src: "/library/images/tm6.png",
      alt: "TM6",
    }}
    title={"Special offers"}
    key={"TM6"}
  />,
];

export default function Home() {
  const screenSize = useScreenSize();

  return (
    <main className={styles.productDetailPageAem}>
      <div className={styles.headerAndHeroSection}>
        <ProductHeroAEM
          screenSize={screenSize}
          imagesForImageGallery={imagesCarousel}
          imagesForThumbnails={imagesForThumbnails}
        />
      </div>
      <section className={styles.prominentSection}>
        <GridContainer>
          <GridItem
            columns={12}
            className={`${styles.overwrittenMargin} ${styles.textCentered}`}
          >
            <Headline spaceBelow={"additional"} strongColor={"green"}>
              <Typography component={"h2"}>
                The world’s
                <br />
                <strong> smartest kitchen</strong> –
                <br />
                Thermomix® TM6
              </Typography>
            </Headline>
          </GridItem>
        </GridContainer>
        <div className={styles.tilesContainer}>
          <GridContainer>
            <GridItem columns={12}>
              <ImageGallery
                slides={categoryTilesAssets}
                options={{ loop: false, align: "start" }}
                screenSizes={screenSize}
                containerWidth={{
                  large: 704,
                  extraLarge: 1120,
                  extraExtraLarge: 1440,
                }}
                noControl={true}
              />
            </GridItem>
          </GridContainer>
          <div className={styles.overwrittenGap}>
            <CategoryTiles
              categoryTilesData={[
                {
                  size: "large",
                  backgroundColor: "grey",
                  imageProps: {
                    src: "/flagship/images/cooking-books.png",
                    alt: "Cooking books",
                  },
                  title: "Cooking books",
                  button: {
                    label: "Explore more",
                    size: screenSize.width > 936 ? "large" : "medium",
                  },
                },
                {
                  size: "large",
                  backgroundImageSrc: "/flagship/images/soup.png",
                  title: "Thousands of recipes – Endless inspiration",
                  button: {
                    label: "Join Cookidoo® for free",
                    size: screenSize.width > 936 ? "large" : "medium",
                  },
                },
              ]}
            />
          </div>
        </div>
      </section>
      <section
        className={`${styles.prominentSection} ${styles.sectionWithRadius}`}
      >
        <GridContainer>
          <GridItem
            columns={12}
            className={`${styles.overwrittenMargin} ${styles.textCentered}`}
          >
            <Headline spaceBelow={"additional"} strongColor={"green"}>
              <Typography component={"h2"}>
                Introducing the
                <br />
                <strong> Thermomix® TM6</strong>
              </Typography>
            </Headline>
          </GridItem>
        </GridContainer>
        <div className={styles.overwrittenRowGap}>
          <GridContainer>
            <GridItem columns={12}>
              <MediaContainer aspectRatio={"16/9"}>
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  height="315"
                  src="https://www.youtube.com/embed/VDjQvbJ-YRo?si=XmRtpNB3nJzt04CP"
                  title="YouTube video player"
                  width="560"
                />
              </MediaContainer>
            </GridItem>
            <GridItem columns={12} columnsL={8} startL={3} endL={11}>
              <div className={styles.textBlockContainer}>
                <Typography
                  variant={
                    screenSize.width > 1267 ? "paragraph18" : "paragraph16"
                  }
                  fontWeight={"regular"}
                >
                  This all-in-one kitchen appliance embodies versatility with
                  over 20 different functions and modes, all in one sleek
                  compact machine. From meal planning, to ingredient shopping,
                  to cooking, the TM6 has your back so you can seamlessly create
                  the perfect meal, every time.
                </Typography>
                <ButtonGroup>
                  <Link href="#">
                    <Button size="large" buttonStyle="primary">
                      Book a demo
                    </Button>
                  </Link>
                  <Link href="#">
                    <Button size="large" buttonStyle="tertiary">
                      Learn more
                    </Button>
                  </Link>
                </ButtonGroup>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </section>
      <section className={styles.prominentSection}>
        <GridContainer>
          <GridItem
            columns={12}
            className={`${styles.textCentered} ${styles.overwrittenMargin}`}
          >
            <Headline spaceBelow={"additional"} strongColor={"blue"}>
              <Typography component={"h2"}>
                Vorwerk Advisor -
                <br />
                <strong> join our sales force</strong>
              </Typography>
            </Headline>
          </GridItem>
        </GridContainer>
        <ContentBlock
          mediaAlignment="left"
          media={
            <img
              src="/flagship/images/thermomix-team.png"
              alt="Woman eating sushi"
            />
          }
          headline={
            <Headline spaceBelow="default">
              <Typography component="h3" fontWeight="bold">
                Turn your passion into a career with Thermomix®
              </Typography>
            </Headline>
          }
          paragraph={
            <Typography
              fontWeight="regular"
              variant={screenSize.width > 1267 ? "paragraph18" : "paragraph16"}
            >
              Whatever your home situation, the VB100 system brings the grab and
              go flexibility you need. With this lightweight, quiet, all-in-one
              solution, you can vacuum and mop simultaneously…and that’s not
              all. Thanks to its broad range of attachments, it also cleans
              carpets, hard floors and mattresses thoroughly and efficiently.
            </Typography>
          }
          buttonGroup={
            <ButtonGroup>
              <Link href="#">
                <Button size="large" buttonStyle="primary">
                  Join the Thermomix® team
                </Button>
              </Link>
              <Link href="#">
                <Button size="large" buttonStyle="secondary">
                  Details
                </Button>
              </Link>
            </ButtonGroup>
          }
        ></ContentBlock>
      </section>
    </main>
  );
}
