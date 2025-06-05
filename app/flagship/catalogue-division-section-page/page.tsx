"use client";

import Breadcrumb from "@components/flagship/breadcrumb/breadcrumb";
import CategoryTiles from "@components/flagship/categoryTiles/categoryTiles";
import ProductTileNew from "@components/flagship/productTile/productTile";
import StandaloneSelect from "@components/flagship/standaloneSelect/standaloneSelect";
import SubNavigation from "@components/flagship/subNavigation/subNavigation";
import useScreenSize from "@utils/useScreenSize";
import {
  Button,
  Filter,
  GalleryView,
  GridContainer,
  GridItem,
  Headline,
  InteractiveIcon,
  ListView,
  Sort,
  Typography,
} from "@vorwerk/fibre-react";
import styles from "./page.module.scss";

export default function Home() {
  const screenSize = useScreenSize();
  const buttonSize =
    screenSize.width > 1267 ? "large"
    : screenSize.width > 935 ? "medium"
    : "small";

  return (
    <main className={styles.cdsp}>
      <section className={styles.topHeadline}>
        <GridContainer>
          <GridItem columns={12}>
            <Breadcrumb nodes={["Product", "Online-Shop", "Thermomix®"]} />
            <Headline>
              <Typography component={"h1"}>Specials</Typography>
            </Headline>
          </GridItem>
        </GridContainer>
      </section>
      <section className={styles.sectionWithPadding}>
        <GridContainer>
          <GridItem columns={12}>
            <SubNavigation
              items={[
                "Storage",
                "Baking & Preparing",
                "Cutlery & Crockery",
                "Kitchen utensils",
                "Varoma® Rims",
              ]}
              screenSizeWidth={screenSize.width}
            />
          </GridItem>
        </GridContainer>
        <div className={styles.overwrittenGridItemCol}>
          <GridContainer>
            <GridItem columns={12}>
              <div className={styles.settingsContainer}>
                <StandaloneSelect
                  icon={<Sort />}
                  text={"Relevance"}
                  items={[
                    "dropdownlistItem",
                    "dropdownlistItem",
                    "dropdownlistItem",
                  ]}
                />
                {screenSize.width > 739 && (
                  <div className={styles.viewContainer}>
                    <InteractiveIcon icon={<GalleryView />} />
                    <InteractiveIcon icon={<ListView />} disabled />
                  </div>
                )}
                <div className={styles.filter}>
                  <Button
                    buttonStyle={"tertiary"}
                    size={"large"}
                    icon={<Filter />}
                    iconPosition={"left"}
                  >
                    <Typography variant={"paragraph16"} fontWeight={"medium"}>
                      Filter
                    </Typography>
                  </Button>
                </div>
              </div>
            </GridItem>
            <GridItem columns={screenSize.width < 740 ? 12 : 8}>
              <ProductTileNew
                productImageSrc={"/flagship/images/stoneware.png"}
                heading={'Stoneware Shape "Betty Roaster"'}
                price={{
                  price: "1499,00 €",
                }}
                screenSizes={screenSize}
                color={"grey"}
              />
            </GridItem>
            <GridItem columns={screenSize.width < 740 ? 12 : 4}>
              <ProductTileNew
                productImageSrc={"/flagship/images/earthenware.png"}
                heading={"Earthenware mould"}
                price={{
                  price: "1499,00 €",
                }}
                screenSizes={screenSize}
                color={"grey"}
              />
            </GridItem>
            <GridItem columns={screenSize.width < 740 ? 12 : 4}>
              <ProductTileNew
                productImageSrc={"/flagship/images/stoneware-2.png"}
                heading={"Stoneware Shape"}
                price={{
                  price: "1499,00 €",
                }}
                screenSizes={screenSize}
                color={"grey"}
                eyeCatcherProps={{
                  firstLine: "Save",
                  secondLine: "45%",
                  backgroundColor: "purple",
                  size: "large",
                }}
              />
            </GridItem>
            <GridItem columns={screenSize.width < 740 ? 12 : 4}>
              <ProductTileNew
                productImageSrc={"/flagship/images/stoneware-3.png"}
                heading={'Stoneware Shape "Anna Casserole Dish"'}
                price={{
                  price: "1499,00 €",
                }}
                screenSizes={screenSize}
                color={"grey"}
              />
            </GridItem>
            <GridItem columns={screenSize.width < 740 ? 12 : 4}>
              <ProductTileNew
                productImageSrc={"/flagship/images/bowl.png"}
                heading={"Bowl GOURMET, 500 ml (6 pcs.)"}
                price={{
                  price: "1499,00 €",
                }}
                screenSizes={screenSize}
                color={"grey"}
              />
            </GridItem>
            <GridItem columns={screenSize.width < 740 ? 12 : 4}>
              <ProductTileNew
                productImageSrc={"/flagship/images/serving-bowl.png"}
                heading={`L'Econome by Starck" serving bowl 18cm, 1.3l rosé`}
                price={{
                  price: "1499,00 €",
                }}
                screenSizes={screenSize}
                color={"grey"}
              />
            </GridItem>
            <GridItem columns={screenSize.width < 740 ? 12 : 4}>
              <ProductTileNew
                productImageSrc={"/flagship/images/drinking-bottle-silver.png"}
                heading={"FLSK Silver Drinking Bottle"}
                price={{
                  price: "1499,00 €",
                }}
                screenSizes={screenSize}
                color={"grey"}
              />
            </GridItem>
            <GridItem columns={screenSize.width < 740 ? 12 : 8}>
              <ProductTileNew
                productImageSrc={"/flagship/images/drinking-bottle-green.png"}
                heading={'Stoneware Shape "Betty Roaster"'}
                price={{
                  price: "1499,00 €",
                }}
                screenSizes={screenSize}
                color={"grey"}
              />
            </GridItem>
            <GridItem columns={screenSize.width < 740 ? 12 : 4}>
              <ProductTileNew
                productImageSrc={"/flagship/images/earthenware.png"}
                heading={'Earthenware mould "flat baking dish Ben”'}
                price={{
                  price: "1499,00 €",
                }}
                screenSizes={screenSize}
                color={"grey"}
              />
            </GridItem>
            <GridItem columns={screenSize.width < 740 ? 12 : 4}>
              <ProductTileNew
                productImageSrc={"/flagship/images/stoneware.png"}
                heading={'Stoneware Shape "Betty Roaster"'}
                price={{
                  price: "1499,00 €",
                }}
                screenSizes={screenSize}
                color={"grey"}
              />
            </GridItem>
            <GridItem columns={screenSize.width < 740 ? 12 : 4}>
              <ProductTileNew
                productImageSrc={"/flagship/images/stoneware-2.png"}
                heading={'Stoneware Shape "Pizza Stone Paul”'}
                price={{
                  price: "1499,00 €",
                }}
                screenSizes={screenSize}
                color={"grey"}
                eyeCatcherProps={{
                  firstLine: "Save",
                  secondLine: "45%",
                  backgroundColor: "purple",
                  size: "large",
                }}
              />
            </GridItem>
            <GridItem columns={screenSize.width < 740 ? 12 : 4}>
              <ProductTileNew
                productImageSrc={"/flagship/images/stoneware-3.png"}
                heading={'Stoneware Shape "Anna Casserole Dish"'}
                price={{
                  price: "1499,00 €",
                }}
                screenSizes={screenSize}
                color={"grey"}
              />
            </GridItem>
          </GridContainer>
        </div>
        <GridContainer>
          <GridItem columns={12} className={styles.centeredButton}>
            <Button buttonStyle={"primary"} size={"large"}>
              Load more
            </Button>
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
                <strong>Related</strong> categories
              </Typography>
            </Headline>
          </GridItem>
        </GridContainer>
        <CategoryTiles
          categoryTilesData={[
            {
              layout: "horizontal",
              size: "medium",
              backgroundColor: "white",
              title: "Cooking books",
              imageProps: {
                src: "/flagship/images/cooking-books.png",
                alt: "Cooking books",
              },
              button: {
                label: "Explore more",
                size: buttonSize,
              },
            },
            {
              layout: "horizontal",
              size: "medium",
              backgroundColor: "white",
              title: "Accessories",
              imageProps: {
                src: "/flagship/images/accessories.png",
                alt: "Accessories",
              },
              button: {
                label: "Explore more",
                size: buttonSize,
              },
            },
          ]}
        />
      </section>
      <section className={styles.prominentSection}>
        <GridContainer>
          <GridItem
            columns={12}
            className={`${styles.textCentered} ${styles.overwrittenMargin}`}
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
              title: "Request a Cooking Experience",
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
