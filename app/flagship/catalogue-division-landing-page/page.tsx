"use client";

import CategoryTiles from "@components/flagship/categoryTiles/categoryTiles";
import ImageGallery from "@components/flagship/imageGallery/imageGallery"; //todo: move to shared
import MenuTile from "@components/flagship/menuTile/menuTile";
import ProductTile from "@components/flagship/productTile/productTile";
import useScreenSize from "@utils/useScreenSize";
import {
  Button,
  GridContainer,
  GridItem,
  Headline,
  Typography,
} from "@vorwerk/fibre-react";
import styles from "./page.module.scss";

export default function Home() {
  const screenSize = useScreenSize();
  const productTileAssets = [
    <ProductTile
      key={"Baguette Sheet"}
      productImageSrc={"/flagship/images/baguette-sheet.png"}
      heading={"Thermomix® Baguette Sheet"}
      price={{
        price: "19,00 €",
      }}
      screenSizes={screenSize}
      color={"grey"}
    />,
    <ProductTile
      key={"Pizza Cutter"}
      productImageSrc={"/flagship/images/pizza-cutter.png"}
      heading={"Thermomix® Pizza Cutter"}
      price={{
        price: "19,90 €",
      }}
      screenSizes={screenSize}
      color={"grey"}
    />,
    <ProductTile
      key={"Dough Roll"}
      productImageSrc={"/flagship/images/dough-roll.png"}
      heading={"Thermomix® Dough Roll"}
      price={{
        price: "25,00 €",
      }}
      screenSizes={screenSize}
      color={"grey"}
    />,
  ];

  const menuTiles = [
    <MenuTile
      key={"menu1"}
      type={"category"}
      screenSizeWidth={screenSize.width}
      label={"Thermomix® TM6"}
      imageProps={{
        src: "/flagship/images/thermomix.png",
        alt: "Thermomix",
      }}
    />,
    <MenuTile
      key={"menu2"}
      type={"category"}
      screenSizeWidth={screenSize.width}
      label={"Cooking books"}
      imageProps={{
        src: "/flagship/images/cooking-books.png",
        alt: "Cooking books",
      }}
    />,
    <MenuTile
      key={"menu3"}
      type={"category"}
      screenSizeWidth={screenSize.width}
      label={"Specials"}
      imageProps={{
        src: "/library/images/thermomix-specials.png",
        alt: "Thermomix specials",
      }}
    />,
    <MenuTile
      key={"menu4"}
      type={"category"}
      screenSizeWidth={screenSize.width}
      label={"Accessories"}
      imageProps={{
        src: "/flagship/images/accessories.png",
        alt: "Thermomix accessories",
      }}
    />,
    <MenuTile
      key={"menu5"}
      type={"cta"}
      screenSizeWidth={screenSize.width}
      title={"Products for your device"}
      cta={"Find now"}
    />,
  ];

  return (
    <main className={styles.cdlp}>
      <section className={styles.topSection}>
        <GridContainer>
          <GridItem columns={12} className={styles.textCentered}>
            <Headline spaceBelow={"additional"} strongColor={"green"}>
              <Typography component={"h1"}>
                Thermomix® <strong>shop</strong>
              </Typography>
            </Headline>
          </GridItem>
        </GridContainer>
        <GridContainer>
          {screenSize.width < 936 ?
            <GridItem columns={12}>
              <ImageGallery
                slides={menuTiles}
                screenSizes={screenSize}
                noControl
                options={{ loop: false }}
                imageTile
                setHeight
                overflow
              />
            </GridItem>
          : menuTiles.map((tile, ind) => (
              <GridItem
                key={ind}
                className={styles.menuTileGridItem}
                startL={
                  (2 + ind * 2) as
                    | 2
                    | 1
                    | 3
                    | 4
                    | 5
                    | 6
                    | 7
                    | 8
                    | 9
                    | 10
                    | 11
                    | 12
                    | "auto"
                    | undefined
                }
                endL={
                  (4 + ind * 2) as
                    | 2
                    | 1
                    | 3
                    | 4
                    | 5
                    | 6
                    | 7
                    | 8
                    | 9
                    | 10
                    | 11
                    | 12
                    | "auto"
                    | undefined
                }
              >
                {tile}
              </GridItem>
            ))
          }
        </GridContainer>
      </section>
      <section className={styles.prominentSection}>
        <GridContainer>
          <GridItem
            columns={12}
            className={`${styles.textCentered} ${styles.overwrittenMargin} ${styles.overwrittenHeadline}`}
          >
            <Headline spaceBelow={"additional"} strongColor={"green"}>
              <Typography component={"h2"}>
                Our <strong>topsellers</strong>
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
                  overflow
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
                size={screenSize.width < 936 ? "medium" : "large"}
              >
                All new Thermomix® products
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </section>
      <section className={styles.sectionRadius}>
        <GridContainer>
          <GridItem
            columns={12}
            className={`${styles.textCentered} ${styles.overwrittenMargin} ${styles.overwrittenHeadline}`}
          >
            <Headline spaceBelow={"additional"} strongColor={"green"}>
              <Typography component={"h2"}>
                Keep <strong>updated</strong>
              </Typography>
            </Headline>
          </GridItem>
        </GridContainer>
        <CategoryTiles
          categoryTilesData={[
            {
              size: "large",
              title: "Newest products",
              brandColor: "#734BA5",
              imageProps: {
                src: "/flagship/images/new-products.png",
                alt: "New products",
              },
              button: {
                label: "Explore more",
                size: screenSize.width < 936 ? "medium" : "large",
              },
            },
            {
              size: "large",
              title: "Current offers",
              backgroundImageSrc: "/flagship/images/thermomix-black-long.png",
              button: {
                label: "Button",
                size: screenSize.width < 936 ? "medium" : "large",
              },
              eyeCatcherProps: {
                firstLine: "Only until",
                secondLine: "25.12.23",
                thirdLine: "false",
                backgroundColor: "purple",
                size: "small",
              },
            },
          ]}
        />
      </section>
      <section className={styles.prominentSection}>
        <GridContainer>
          <GridItem
            columns={12}
            className={`${styles.textCentered} ${styles.overwrittenMargin} ${styles.overwrittenHeadline}`}
          >
            <Headline spaceBelow={"additional"} strongColor={"green"}>
              <Typography component={"h2"}>
                <strong>New</strong> products
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
                  overflow
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
                size={screenSize.width < 936 ? "medium" : "large"}
              >
                All new Thermomix® products
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </section>
      <section className={styles.sectionRadius}>
        <GridContainer>
          <GridItem
            columns={12}
            className={`${styles.textCentered} ${styles.overwrittenMargin} ${styles.overwrittenHeadline}`}
          >
            <Headline spaceBelow={"additional"} strongColor={"green"}>
              <Typography component={"h2"}>
                Interested in
                <br />
                Thermomix® <strong>products?</strong>
              </Typography>
            </Headline>
          </GridItem>
        </GridContainer>
        <CategoryTiles
          categoryTilesData={[
            {
              size: "large",
              title: "Lorem ipsum dolor sit amet consetetur",
              backgroundImageSrc:
                "/flagship/images/serving-chocolate-mousse-cropped.png",
              button: {
                label: "Book a demo",
                size: screenSize.width < 936 ? "medium" : "large",
              },
            },
            {
              size: "large",
              title: "Experience in the Vorwerk Store",
              backgroundImageSrc: "/flagship/images/vorwerk-worker.png",
              button: {
                label: "Find a store",
                size: screenSize.width < 936 ? "medium" : "large",
              },
            },
          ]}
        />
      </section>
    </main>
  );
}
