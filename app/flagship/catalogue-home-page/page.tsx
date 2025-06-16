"use client";

import CategoryTile from "@components/flagship/categoryTile/categoryTile";
import CategoryTiles from "@components/flagship/categoryTiles/categoryTiles";
import ImageGallery from "@components/flagship/imageGallery/imageGallery";
import ProductTile from "@components/flagship/productTile/productTile";
import useScreenSize from "@utils/useScreenSize";
import {
  Button,
  ContentBlock,
  GridContainer,
  GridItem,
  Headline,
  Typography,
} from "@vorwerk/fibre-react";
import styles from "./page.module.scss";

export default function Home() {
  const screenSize = useScreenSize();
  const categoryTilesAssets = [
    <ProductTile
      key={"Thermomix friend"}
      productImageSrc={"/library/images/thermomix-friend.png"}
      heading={"Thermomix Friend® with TM6 Mixtopf"}
      price={{
        price: "499,00 €",
      }}
      screenSizes={screenSize}
    />,
    <ProductTile
      key={"Knife cover"}
      productImageSrc={"/library/images/knife-cover.png"}
      heading={"Knife cover “Shaft” with peeler"}
      price={{
        price: "34,00 €",
      }}
      screenSizes={screenSize}
    />,
    <ProductTile
      key={"Blade cover"}
      productImageSrc={"/library/images/blade-cover.png"}
      heading={"Blade cover “Shaft”"}
      price={{
        price: "24,00 €",
        lowestPrice: "45,00 €",
        delivery: "Delivery time 7-10 workdays",
      }}
      eyeCatcherProps={{
        firstLine: "Save",
        secondLine: "45%",
        backgroundColor: "purple",
        size: "large",
      }}
      screenSizes={screenSize}
      slider={true}
    />,
  ];
  const productTileAssets = [
    <ProductTile
      key={"Kobold VR7"}
      productImageSrc={"/flagship/images/kobold-vr7.png"}
      heading={"Kobold VR7 Vacuum Robot"}
      price={{
        price: "999,00 €",
      }}
      screenSizes={screenSize}
      color={"white"}
    />,
    <ProductTile
      key={"Kobold VC100"}
      productImageSrc={"/flagship/images/kobold-vc100.png"}
      heading={"Kobold VC100 Handheld Vacuum Cleaner"}
      price={{
        price: "24,90 €",
        lowestPrice: "45,00 €",
      }}
      screenSizes={screenSize}
      color={"white"}
      eyeCatcherProps={{
        firstLine: "Save",
        secondLine: "30%",
        backgroundColor: "purple",
        size: "large",
      }}
      slider={true}
    />,
    <ProductTile
      key={"Kobold VK7"}
      productImageSrc={"/flagship/images/kobold-cordless-vacuum-cleaner.png"}
      heading={"Kobold VK7 Cordless Vacuum Cleaner"}
      price={{
        price: "979,00 €",
      }}
      screenSizes={screenSize}
      color={"white"}
    />,
  ];

  const teaserTileAssets = [
    <img
      key="image1"
      src="/flagship/teaser/teaser-thermomix.png"
      alt="Thermomix"
    />,
    <img key="image2" src="/flagship/teaser/teaser-kobold.png" alt="Kobold" />,
    <img
      key="image3"
      src="/flagship/teaser/teaser-voucher.png"
      alt="Voucher"
    />,
  ];

  return (
    <main className={styles.catalogueHomePage}>
      <GridContainer>
        <GridItem
          columns={12}
          className={`${styles.topHeadline} ${styles.textCentered}`}
        >
          <Headline strongColor={"green"}>
            <Typography component={"h1"}>
              Your <strong>perfect home</strong>
            </Typography>
          </Headline>
        </GridItem>
      </GridContainer>
      <div className={styles.overwrittenGridCol}>
        <GridContainer>
          <GridItem columns={6}>
            <CategoryTile
              size={screenSize.width > 739 ? "medium" : "small"}
              title={"Cooking with Thermomix®"}
              backgroundImageSrc={`/flagship/images/cooking-with-thermomix${screenSize.width > 739 ? "-m" : ""}.png`}
              layout={screenSize.width > 739 ? "horizontal" : "vertical"}
            />
          </GridItem>
          <GridItem columns={6}>
            <CategoryTile
              size={screenSize.width > 739 ? "medium" : "small"}
              title={"Cleaning with Kobold"}
              backgroundImageSrc={`/flagship/images/cleaning-with-kobold${screenSize.width > 739 ? "-m" : ""}.png`}
              layout={screenSize.width > 739 ? "horizontal" : "vertical"}
            />
          </GridItem>
        </GridContainer>
      </div>
      <section className={styles.prominentSection}>
        <GridContainer>
          <GridItem
            columns={12}
            className={`${styles.textCentered} ${styles.overwrittenMargin}`}
          >
            <Headline spaceBelow={"additional"} strongColor={"green"}>
              <Typography component={"h2"}>
                Everything about <strong>cooking</strong>
              </Typography>
            </Headline>
          </GridItem>
        </GridContainer>
        <div className={styles.tilesContainer}>
          <div className={styles.categoryTilesContainer}>
            <GridContainer>
              <GridItem columns={12}>
                <CategoryTile
                  size={"large"}
                  title={"Thermomix® TM6"}
                  backgroundImageSrc={
                    screenSize.width < 740 ?
                      "/flagship/images/thermomix-tm6-cropped.png"
                    : "/flagship/images/thermomix-tm6.png"
                  }
                  button={{
                    label: "Explore the product",
                    size: screenSize.width < 936 ? "medium" : "large",
                  }}
                  layout={screenSize.width < 740 ? "vertical" : "horizontal"}
                />
              </GridItem>
            </GridContainer>
            <CategoryTiles
              categoryTilesData={[
                {
                  size: "large",
                  backgroundColor: "grey",
                  imageProps: {
                    src: "/flagship/images/tm-specials.png",
                    alt: "Thermomix Specials",
                  },
                  title: "Specials",
                  button: {
                    label: "Explore more",
                    size: screenSize.width < 936 ? "medium" : "large",
                  },
                },
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
                    size: screenSize.width < 936 ? "medium" : "large",
                  },
                },
              ]}
            />
          </div>
          <div>
            <GridContainer>
              <GridItem columns={12} className={styles.textCentered}>
                <Headline spaceBelow={"additional"} strongColor={"green"}>
                  <Typography component={"h3"}>
                    Our Thermomix® <strong>topseller</strong>
                  </Typography>
                </Headline>
              </GridItem>
            </GridContainer>
            <div className={styles.tilesSliderContainer}>
              <GridContainer>
                {screenSize.width < 740 ?
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
                : categoryTilesAssets.map((tile, index) => (
                    <GridItem columns={4} key={index}>
                      {tile}
                    </GridItem>
                  ))
                }
              </GridContainer>
              <GridContainer>
                <GridItem columns={12}>
                  <Button
                    buttonStyle={"primary"}
                    size={screenSize.width < 1268 ? "medium" : "large"}
                  >
                    All Thermomix® products
                  </Button>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sectionRadius}>
        <GridContainer>
          <GridItem
            columns={12}
            className={`${styles.textCentered} ${styles.overwrittenMargin}`}
          >
            <Headline spaceBelow={"additional"} strongColor={"green"}>
              <Typography component={"h2"}>
                Everything about <strong>cleaning</strong>
              </Typography>
            </Headline>
          </GridItem>
        </GridContainer>
        <div className={styles.tilesContainer}>
          <div className={styles.categoryTilesContainer}>
            <GridContainer>
              <GridItem columns={12}>
                <CategoryTile
                  size={"large"}
                  title={"Battery Vacuum Cleaner"}
                  backgroundImageSrc={
                    "/flagship/images/battery-vacuum-cleaner.png"
                  }
                  button={{
                    size: screenSize.width < 936 ? "medium" : "large",
                    label: "Explore the product",
                  }}
                  layout={screenSize.width < 740 ? "vertical" : "horizontal"}
                />
              </GridItem>
            </GridContainer>
            <div
              className={`${styles.overwrittenGridCol} ${styles.overwrittenGridItemCol}`}
            >
              <GridContainer>
                <GridItem columns={4}>
                  <CategoryTile
                    layout={"horizontal"}
                    size={"small"}
                    title={"Special offers"}
                    backgroundImageSrc={"/flagship/images/teaser4.png"}
                  />
                </GridItem>
                <GridItem columns={4}>
                  <CategoryTile
                    layout={"horizontal"}
                    size={"small"}
                    title={"Upright Vacuum cleaner"}
                    backgroundImageSrc={
                      "/flagship/images/upright-vacuum-cleaner.png"
                    }
                  />
                </GridItem>
                <GridItem columns={8}>
                  <CategoryTile
                    layout={"horizontal"}
                    size={"2/3"}
                    title={"Robot"}
                    backgroundImageSrc={"/flagship/images/robot.png"}
                  />
                </GridItem>
              </GridContainer>
            </div>
            <CategoryTiles
              categoryTilesData={[
                {
                  size: "large",
                  backgroundColor: "white",
                  imageProps: {
                    src: "/flagship/images/kobold-attachments.png",
                    alt: "Kobold Attachments",
                  },
                  title: "Attachments",
                  button: {
                    label: "Explore more",
                    size: screenSize.width < 936 ? "medium" : "large",
                  },
                  eyeCatcherProps: {
                    firstLine: "Only until",
                    secondLine: "25.12.23",
                    backgroundColor: "purple",
                    size: "small",
                  },
                },
                {
                  size: "large",
                  backgroundColor: "white",
                  imageProps: {
                    src: "/flagship/images/kobold-accessories.png",
                    alt: "Kobold Accessories",
                  },
                  title: "Accessories",
                  button: {
                    label: "Explore more",
                    size: screenSize.width < 936 ? "medium" : "large",
                  },
                  eyeCatcherProps: {
                    firstLine: "Only until",
                    secondLine: "25.12.23",
                    backgroundColor: "purple",
                    size: "small",
                  },
                },
              ]}
            />
          </div>
          <div>
            <GridContainer>
              <GridItem columns={12} className={styles.textCentered}>
                <Headline spaceBelow={"additional"} strongColor={"green"}>
                  <Typography component={"h3"}>
                    Our Kobold <strong>topseller</strong>
                  </Typography>
                </Headline>
              </GridItem>
            </GridContainer>
            <div className={styles.tilesSliderContainer}>
              <GridContainer>
                {screenSize.width < 740 ?
                  <GridItem columns={12}>
                    <ImageGallery
                      slides={productTileAssets}
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
                : productTileAssets.map((tile, index) => (
                    <GridItem columns={4} key={index}>
                      {tile}
                    </GridItem>
                  ))
                }
              </GridContainer>
              <GridContainer>
                <GridItem columns={12}>
                  <Button
                    buttonStyle={"primary"}
                    size={screenSize.width < 1268 ? "medium" : "large"}
                  >
                    All Kobold products
                  </Button>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.prominentSection}>
        <GridContainer>
          <GridItem
            columns={12}
            className={`${styles.textCentered} ${styles.overwrittenMargin}`}
          >
            <Headline spaceBelow={"additional"} strongColor={"green"}>
              <Typography component={"h2"}>
                <strong>Products</strong> for Thermomix® & Kobold
              </Typography>
            </Headline>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem columns={12}>
            <ImageGallery
              slides={teaserTileAssets}
              options={{ loop: false, align: "start" }}
              screenSizes={screenSize}
              containerWidth={{
                large: 704,
                extraLarge: 1120,
                extraExtraLarge: 1440,
              }}
              noControl={true}
              setHeight={true}
              overflow
            />
          </GridItem>
        </GridContainer>
      </section>
      <section className={styles.sectionRadius}>
        <GridContainer>
          <GridItem
            columns={12}
            className={`${styles.textCentered} ${styles.overwrittenMargin}`}
          >
            <Headline spaceBelow={"additional"} strongColor={"green"}>
              <Typography component={"h2"}>
                Current <strong>offers</strong>
              </Typography>
            </Headline>
          </GridItem>
        </GridContainer>
        <div className={styles.tilesContainer}>
          <ContentBlock
            mediaAlignment={screenSize.width > 935 ? "left" : undefined}
            media={<img src="/flagship/images/vorwerk-content.png" />}
            headline={
              <Headline spaceBelow={"default"}>
                <Typography component={"h3"} fontWeight={"bold"}>
                  Turbo vacuuming and mopping at the same time.
                </Typography>
              </Headline>
            }
            paragraph={
              <Typography
                variant={`paragraph${screenSize.width > 1267 ? "18" : "16"}`}
                fontWeight={"regular"}
              >
                Vorwerk presents the new Kobold VK7! In combination with the SP7
                squeegee, it becomes the best squeegee ever. Thanks to the Boost
                function, you can clean with even more power and switch between
                other attachments in a flash with just one click. Vacuuming &
                mopping?
              </Typography>
            }
            buttonGroup={
              <Button buttonStyle={"primary"} size={"large"}>
                Kobold VK7 offers
              </Button>
            }
          />
          <ContentBlock
            mediaAlignment={screenSize.width > 935 ? "right" : undefined}
            media={<img src="/flagship/images/content-1.png" />}
            headline={
              <Headline spaceBelow={"default"}>
                <Typography component={"h3"} fontWeight={"bold"}>
                  Only the best for you!
                </Typography>
              </Headline>
            }
            paragraph={
              <Typography
                variant={`paragraph${screenSize.width > 1267 ? "18" : "16"}`}
                fontWeight={"regular"}
              >
                Effortlessly eat fresh and delicious food all the time? You can
                rely 100% on the Thermomix®. You can now enjoy the carefree
                pleasure of cooking with an extended enjoyment guarantee at a
                special price!
              </Typography>
            }
            buttonGroup={
              <Button buttonStyle={"primary"} size={"large"}>
                Join the Thermomix® team
              </Button>
            }
          />
        </div>
      </section>
    </main>
  );
}
