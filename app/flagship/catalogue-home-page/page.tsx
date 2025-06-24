"use client";

import { usePageTitle } from "@utils/usePageTitle";
import useScreenSize from "@utils/useScreenSize";
import {
  Button,
  ButtonGroup,
  CaretRight,
  CategoryTile,
  CategoryTileContainer,
  ContentBlock,
  GridContainer,
  GridItem,
  Headline,
  ProductTile,
  SectionContainer,
  TeaserTile,
  Typography,
} from "@vorwerk/fibre-react";
import dynamic from "next/dynamic";
import styles from "./page.module.scss";

export default function VOWCatalogueHomePage() {
  usePageTitle({
    title: "Catalogue Home Page - Vorwerk One Website",
  });

  const screenSize = useScreenSize();

  //remove after viewport.ts, useBreakpoint.ts is SSR-safe fixed in Storybook
  const CarouselDynamic = dynamic(
    () => import("@components/ssrWrappers/CarouselWrapper"),
    { ssr: false }
  );

  return (
    <main>
      <SectionContainer>
        <GridContainer>
          <GridItem columns={12}>
            <Headline
              spaceBelow="additional"
              strongColor="green"
              isHeadlineCentered
            >
              <Typography component="h1">
                <span>
                  Cook & clean{" "}
                  {screenSize.width < 768 ?
                    <br />
                  : ""}
                  <strong>like never before</strong>.
                </span>
              </Typography>
            </Headline>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem columns={12}>
            <CategoryTileContainer>
              <CategoryTile
                title="Cooking with Thermomix®"
                image="/flagship/categoryTile/chp_cookidoo.png"
                imageAlt="Woman using a modern kitchen appliance to prepare spiralized vegetables, with a touchscreen interface and fresh ingredients on the counter."
                imageTitle="Preparing Spiralized Vegetables with TM7"
                buttonText="Discover Thermomix®"
                backgroundVariant="image"
                url="#"
              />
              <CategoryTile
                title="Cleaning with Kobold"
                image="/flagship/categoryTile/hp_full_kobold.png"
                imageAlt="Man vacuuming living room with a cordless cleaner."
                imageTitle="Vacuuming Living Room with Kobold"
                buttonText="Discover Kobold"
                backgroundVariant="image"
                url="#"
              />
            </CategoryTileContainer>
          </GridItem>
        </GridContainer>
      </SectionContainer>

      <section className={styles.backgroundSection}>
        <div className={styles.mainSectionContainer}>
          <div>
            <GridContainer>
              <GridItem columns={12}>
                <Headline
                  spaceBelow="additional"
                  strongColor="green"
                  isHeadlineCentered
                >
                  <Typography component="h2">
                    <span>
                      Everything about{" "}
                      {screenSize.width < 768 ?
                        <br />
                      : ""}
                      <strong>cooking</strong>.
                    </span>
                  </Typography>
                </Headline>
              </GridItem>
            </GridContainer>
            <div className={`${styles.gap01} ${styles.sectionContainer}`}>
              <GridContainer>
                <GridItem columns={12}>
                  <CategoryTileContainer>
                    <CategoryTile
                      title="Thermomix® TM7"
                      image="/flagship/categoryTile/hp_tm7.png"
                      imageAlt="Front view of the Thermomix TM7 with touchscreen displaying recipe suggestions, including desserts and trending meals."
                      imageTitle="Thermomix TM7 Front View"
                      buttonText="Discover products"
                      backgroundVariant="solid"
                      backgroundColorVariant="white"
                      url="#"
                    />
                    <CategoryTile
                      title="Thermomix® accessories"
                      image="/flagship/categoryTile/chp_tm7_accessories.png"
                      imageTitle="Thermomix TM7 accessories including mixing bowl, spatula, butterfly whisk, and Varoma steaming attachment, arranged in a row."
                      imageAlt="Thermomix TM7 accessory set"
                      buttonText="Discover products"
                      backgroundVariant="solid"
                      backgroundColorVariant="white"
                      url="#"
                    />
                  </CategoryTileContainer>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem columns={12}>
                  <CategoryTileContainer>
                    <CategoryTile
                      title="Specials for Thermomix®"
                      image="/flagship/categoryTile/chp_specials.png"
                      imageAlt="Thermomix accessory bundle featuring a stainless steel bottle, navy ceramic baking dish with lid, white mixing bowl with lid, and black spoon."
                      imageTitle="Thermomix Kitchen Essentials Set"
                      buttonText="Discover products"
                      backgroundVariant="solid"
                      backgroundColorVariant="white"
                      url="#"
                    />
                    <CategoryTile
                      title="Cooking books"
                      image="/flagship/categoryTile/chp_books.png"
                      imageAlt="Stack of Thermomix cookbooks, with the top one titled 'Fit mit Intervallfasten' featuring fruits and vegetables on the cover."
                      imageTitle="Thermomix Cooking Books"
                      buttonText="Discover products"
                      backgroundVariant="solid"
                      backgroundColorVariant="white"
                      url="#"
                    />
                  </CategoryTileContainer>
                </GridItem>
              </GridContainer>
            </div>
          </div>
          <div className={`${styles.gap02} ${styles.sectionContainer}`}>
            <div>
              <GridContainer>
                <GridItem columns={12}>
                  <Headline
                    spaceBelow={"additional"}
                    strongColor={"green"}
                    isHeadlineCentered
                  >
                    <Typography component="h3">
                      Our Thermomix® <strong>topsellers</strong>.
                    </Typography>
                  </Headline>
                </GridItem>
              </GridContainer>
              <CarouselDynamic layout={{ xs: 1.5, m: 3, l: 3 }}>
                <ProductTile
                  ariaLabel="Product Tile"
                  background="primary"
                  categories={["TM7", "TM6"]}
                  description="Single sentence product description."
                  headline="Thermomix Friend® with TM6 Mixtopf"
                  image="/flagship/productTile/chp_pt_tm_friend.png"
                  imageAlt="Thermomix Friend, a compact cooking assistant with a stainless steel mixing bowl and digital control dial."
                  imageTitle="Thermomix Friend®"
                  openInNewTab
                  price={{
                    align: "left",
                    layout: "default",
                    price: "499,00 €",
                    showVat: true,
                    vatText: "incl. VAT & shipping",
                  }}
                  url="#link"
                  variant="grid"
                  visibleCategories={2}
                />
                <ProductTile
                  ariaLabel="Product Tile"
                  background="primary"
                  categories={["TM7", "TM6"]}
                  description="Single sentence product description."
                  headline="Knife cover “Shaft” with peeler"
                  image="/flagship/productTile/chp_pt_cover_with_peeler.png"
                  imageAlt="Thermomix blade cover with peeler attachment, featuring a curved stainless steel design with grating holes and a central plastic mount."
                  imageTitle="Thermomix blade cover with peeler"
                  openInNewTab
                  price={{
                    align: "left",
                    layout: "default",
                    price: "34,00 €",
                    showVat: true,
                    vatText: "incl. VAT & shipping",
                  }}
                  url="#link"
                  variant="grid"
                  visibleCategories={2}
                />
                <ProductTile
                  ariaLabel="Product Tile"
                  background="primary"
                  categories={["TM7", "TM6"]}
                  description="Single sentence product description."
                  headline="Blade cover “Shaft”"
                  image="/flagship/productTile/chp_pt_blade_cover.png"
                  imageAlt="Thermomix blade cover accessory in black, featuring a curved design with radial slits and a central locking mechanism."
                  imageTitle="Thermomix blade cover"
                  openInNewTab
                  price={{
                    align: "left",
                    layout: "default",
                    price: "24,90 €",
                    showVat: true,
                    vatText: "incl. VAT & shipping",
                  }}
                  url="#link"
                  variant="grid"
                  visibleCategories={2}
                />
              </CarouselDynamic>
            </div>
            <ButtonGroup alignment="center">
              <Button
                buttonStyle="tertiary"
                icon={<CaretRight />}
                iconPosition="right"
                size="large"
              >
                All Thermomix® products
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.mainSectionContainer}>
          <div>
            <GridContainer>
              <GridItem columns={12}>
                <Headline
                  spaceBelow="additional"
                  strongColor="green"
                  isHeadlineCentered
                >
                  <Typography component="h2">
                    <span>
                      Everything about{" "}
                      {screenSize.width < 768 ?
                        <br />
                      : ""}
                      <strong>cleaning</strong>.
                    </span>
                  </Typography>
                </Headline>
              </GridItem>
            </GridContainer>
            <div className={`${styles.gap01} ${styles.sectionContainer}`}>
              <GridContainer>
                <GridItem columns={12}>
                  <CategoryTileContainer>
                    <CategoryTile
                      title="Battery Vacuum Cleaner"
                      image="/flagship/categoryTile/chp_kobold_battery_vacuum.png"
                      buttonText="Discover products"
                      backgroundVariant="solid"
                      backgroundColorVariant="lightGrey"
                      url="#"
                    />
                    <CategoryTile
                      title="Upright Vacuum Cleaner"
                      image="/flagship/categoryTile/chp_kobold_upright.png"
                      buttonText="Discover products"
                      backgroundVariant="solid"
                      backgroundColorVariant="lightGrey"
                      url="#"
                    />
                  </CategoryTileContainer>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem columns={12}>
                  <CategoryTileContainer>
                    <CategoryTile
                      title="Cleaning Robots"
                      image="/flagship/categoryTile/chp_kobold_robot.png"
                      buttonText="Discover products"
                      backgroundVariant="solid"
                      backgroundColorVariant="lightGrey"
                      url="#"
                    />
                    <CategoryTile
                      title="Kobold Accessories"
                      image="/flagship/categoryTile/hp_kobold_parts.png"
                      buttonText="Discover products"
                      backgroundVariant="solid"
                      backgroundColorVariant="lightGrey"
                      url="#"
                    />
                  </CategoryTileContainer>
                </GridItem>
              </GridContainer>
            </div>
          </div>
          <div className={`${styles.gap02} ${styles.sectionContainer}`}>
            <div>
              <GridContainer>
                <GridItem columns={12}>
                  <Headline
                    spaceBelow={"additional"}
                    strongColor={"green"}
                    isHeadlineCentered
                  >
                    <Typography component="h3">
                      Our Kobold <strong>topsellers</strong>.
                    </Typography>
                  </Headline>
                </GridItem>
              </GridContainer>
              <CarouselDynamic layout={{ xs: 1.5, m: 3, l: 3 }}>
                <ProductTile
                  ariaLabel="Product Tile"
                  background="secondary"
                  categories={["SPB100", "TM7", "TM6", "SP7"]}
                  description="Single sentence product description."
                  headline="Kobold VR7 Vacuum Robot"
                  image="/flagship/productTile/chp_pt_kobold_vr7.png"
                  imageAlt="Image alt"
                  imageTitle="Image Title"
                  openInNewTab
                  price={{
                    align: "left",
                    layout: "default",
                    price: "999,00 €",
                    showVat: true,
                    vatText: "incl. VAT & shipping",
                  }}
                  url="#link"
                  variant="grid"
                  visibleCategories={0}
                />
                <ProductTile
                  ariaLabel="Product Tile"
                  background="secondary"
                  categories={["SPB100", "TM7", "TM6", "SP7"]}
                  description="Single sentence product description."
                  headline="Kobold VC100 Handheld Vacuum Cleaner"
                  image="/flagship/productTile/chp_pt_kobold_vc100.png"
                  imageAlt="Image alt"
                  imageTitle="Image Title"
                  openInNewTab
                  price={{
                    align: "left",
                    layout: "default",
                    price: "90,00 €",
                    showVat: true,
                    vatText: "incl. VAT & shipping",
                  }}
                  url="#link"
                  variant="grid"
                  visibleCategories={0}
                />
                <ProductTile
                  ariaLabel="Product Tile"
                  background="secondary"
                  categories={["SPB100", "TM7", "TM6", "SP7"]}
                  description="Single sentence product description."
                  headline="Kobold VK7 Cordless Vacuum Cleaner"
                  image="/flagship/productTile/chp_pt_kobold_vk7.png"
                  imageAlt="Image alt"
                  imageTitle="Image Title"
                  openInNewTab
                  price={{
                    align: "left",
                    layout: "default",
                    price: "979,00 €",
                    showVat: true,
                    vatText: "incl. VAT & shipping",
                  }}
                  url="#link"
                  variant="grid"
                  visibleCategories={0}
                />
              </CarouselDynamic>
            </div>
            <ButtonGroup alignment="center">
              <Button
                buttonStyle="tertiary"
                icon={<CaretRight />}
                iconPosition="right"
                size="large"
              >
                All Kobold products
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </section>

      <section className={styles.backgroundSection}>
        <div className={styles.mainSectionContainer}>
          <div>
            <GridContainer>
              <GridItem columns={12}>
                <Headline
                  spaceBelow={"additional"}
                  strongColor={"green"}
                  isHeadlineCentered
                >
                  <Typography component={"h2"}>
                    <strong>Products</strong> for Thermomix® & Kobold.
                  </Typography>
                </Headline>
              </GridItem>
            </GridContainer>
            <CarouselDynamic layout={{ xs: 1.5, m: 3, l: 3 }}>
              <TeaserTile
                image="/flagship/teaserTile/chp_thermomix.png"
                imageAlt="Thermomix TM7"
                isExternal
                url="https://www.thermomix.com"
              />
              <TeaserTile
                image="/flagship/teaserTile/chp_kobold.png"
                imageAlt="Kobold"
                isExternal
                url="https://www.thermomix.com"
              />
              <TeaserTile
                image="/flagship/teaserTile/chp_vouchers.png"
                imageAlt="Vouchers"
                isExternal
                url="https://www.thermomix.com"
              />
            </CarouselDynamic>
          </div>
        </div>
      </section>

      <section className={styles.mainSectionContainer}>
        <div>
          <GridContainer>
            <GridItem columns={12}>
              <Headline
                spaceBelow={"additional"}
                strongColor={"green"}
                isHeadlineCentered
              >
                <Typography component={"h2"}>
                  Current <strong>offers</strong>.
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <ContentBlock
            mediaAlignment="left"
            media={<img src="/flagship/images/vorwerk-content.png" />}
            headline={
              <Headline spaceBelow="default">
                <Typography component="h3" fontWeight="bold">
                  Turbo vacuuming and mopping at the same time.
                </Typography>
              </Headline>
            }
            paragraph={
              <Typography variant="paragraphAdaptive" fontWeight="regular">
                Vorwerk presents the new Kobold VK7! In combination with the SP7
                squeegee, it becomes the best squeegee ever. Thanks to the Boost
                function, you can clean with even more power and switch between
                other attachments in a flash with just one click. Vacuuming &
                mopping?
              </Typography>
            }
            buttonGroup={
              <ButtonGroup alignment="left" layout="horizontal" sizing="hug">
                <Button buttonStyle="primary" size="large">
                  Kobold VK7 offers
                </Button>
              </ButtonGroup>
            }
          />
        </div>
        <ContentBlock
          mediaAlignment="right"
          media={<img src="/flagship/images/content-1.png" />}
          headline={
            <Headline spaceBelow="default">
              <Typography component="h3" fontWeight="bold">
                Only the best for you!
              </Typography>
            </Headline>
          }
          paragraph={
            <Typography variant="paragraphAdaptive" fontWeight="regular">
              Effortlessly eat fresh and delicious food all the time? You can
              rely 100% on the Thermomix®. You can now enjoy the carefree
              pleasure of cooking with an extended enjoyment guarantee at a
              special price!
            </Typography>
          }
          buttonGroup={
            <ButtonGroup alignment="left" layout="horizontal" sizing="hug">
              <Button buttonStyle="primary" size="large">
                Join the Thermomix® team
              </Button>
            </ButtonGroup>
          }
        />
      </section>
    </main>
  );
}
