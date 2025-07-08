"use client";

import { useMetaTags } from "@utils/useMetaTags";
import useScreenSize from "@utils/useScreenSize";
import {
  Button,
  ButtonGroup,
  CaretRight,
  Carousel,
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
import { useEffect, useState } from "react";
import styles from "./page.module.scss";

export default function VOWCatalogueHomePage() {
  useMetaTags({
    title: "Catalogue Home Page - Vorwerk One Website",
    description: "Catalogue Home Page - Vorwerk One Website",
  });

  const [mounted, setMounted] = useState(false);

  const screenSize = useScreenSize();

  useEffect(() => {
    setMounted(true);
  }, []);

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
                      buttonText="Discover the TM7"
                      backgroundVariant="solid"
                      backgroundColorVariant="white"
                      url="#"
                    />
                    <CategoryTile
                      title="Thermomix® accessories"
                      image="/flagship/categoryTile/chp_tm7_accessories.png"
                      imageTitle="Thermomix TM7 accessories including mixing bowl, spatula, butterfly whisk, and Varoma steaming attachment, arranged in a row."
                      imageAlt="Thermomix TM7 accessory set"
                      buttonText="View Thermomix® accessories"
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
                      buttonText="View Thermomix® specials"
                      backgroundVariant="solid"
                      backgroundColorVariant="white"
                      url="#"
                    />
                    <CategoryTile
                      title="Cookbooks"
                      image="/flagship/categoryTile/chp_books.png"
                      imageAlt="Stack of Thermomix cookbooks, with the top one titled 'Fit mit Intervallfasten' featuring fruits and vegetables on the cover."
                      imageTitle="Thermomix Cookbooks"
                      buttonText="View cookbooks"
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
                    spaceBelow="additional"
                    strongColor="green"
                    isHeadlineCentered
                  >
                    <Typography component="h3">
                      Our Thermomix® <strong>topsellers</strong>.
                    </Typography>
                  </Headline>
                </GridItem>
              </GridContainer>
              {mounted && (
                <Carousel
                  layout={{ xs: 1.5, m: 3, l: 3 }}
                  preventTabFocus
                  equalHeight
                >
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
                </Carousel>
              )}
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
                      imageTitle="Battery Vacuum Cleaner"
                      imageAlt="Battery Vacuum Cleaner"
                      buttonText="Discover the VK7"
                      backgroundVariant="solid"
                      backgroundColorVariant="lightGrey"
                      url="#"
                    />
                    <CategoryTile
                      title="Upright Vacuum Cleaner"
                      image="/flagship/categoryTile/chp_kobold_upright.png"
                      imageTitle="Upright Vacuum Cleaner"
                      imageAlt="Upright Vacuum Cleaner"
                      buttonText="Discover the VT300"
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
                      imageTitle="Cleaning Robots"
                      imageAlt="Cleaning Robots"
                      buttonText="Discover the VR7"
                      backgroundVariant="solid"
                      backgroundColorVariant="lightGrey"
                      url="#"
                    />
                    <CategoryTile
                      title="Kobold Accessories"
                      image="/flagship/categoryTile/hp_kobold_parts.png"
                      imageTitle="Kobold Accessories"
                      imageAlt="Kobold Accessories"
                      buttonText="View Kobold accessories"
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
                    spaceBelow="additional"
                    strongColor="green"
                    isHeadlineCentered
                  >
                    <Typography component="h3">
                      Our Kobold <strong>topsellers</strong>.
                    </Typography>
                  </Headline>
                </GridItem>
              </GridContainer>
              {mounted && (
                <Carousel
                  layout={{ xs: 1.5, m: 3, l: 3 }}
                  preventTabFocus
                  equalHeight
                >
                  <ProductTile
                    ariaLabel="Kobold VR7 Vacuum Robot"
                    background="secondary"
                    description="Single sentence product description."
                    headline="Kobold VR7 Vacuum Robot"
                    image="/flagship/productTile/chp_pt_kobold_vr7.png"
                    imageAlt="Kobold VR7 Vacuum Robot"
                    imageTitle="Kobold VR7 Vacuum Robot"
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
                  />
                  <ProductTile
                    ariaLabel="Kobold VC100 Handheld Vacuum Cleaner"
                    background="secondary"
                    description="Single sentence product description."
                    headline="Kobold VC100 Handheld Vacuum Cleaner"
                    image="/flagship/productTile/chp_pt_kobold_vc100.png"
                    imageAlt="Kobold VC100 Handheld Vacuum Cleaner"
                    imageTitle="Kobold VC100 Handheld Vacuum Cleaner"
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
                  />
                  <ProductTile
                    ariaLabel="Kobold VK7 Cordless Vacuum Cleaner"
                    background="secondary"
                    description="Single sentence product description."
                    headline="Kobold VK7 Cordless Vacuum Cleaner"
                    image="/flagship/productTile/chp_pt_kobold_vk7.png"
                    imageAlt="Kobold VK7 Cordless Vacuum Cleaner"
                    imageTitle="Kobold VK7 Cordless Vacuum Cleaner"
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
                  />
                </Carousel>
              )}
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
                  spaceBelow="additional"
                  strongColor="green"
                  isHeadlineCentered
                >
                  <Typography component="h2">
                    <strong>Products</strong> for Thermomix® & Kobold.
                  </Typography>
                </Headline>
              </GridItem>
            </GridContainer>
            {mounted && (
              <Carousel
                layout={{ xs: 1.5, m: 3, l: 3 }}
                preventTabFocus
                equalHeight
              >
                <TeaserTile
                  title="Thermomix® products"
                  buttonText="Explore products"
                  image="/flagship/teaserTile/chp_thermomix_clear.png"
                  imageAlt="Thermomix TM7"
                  url="https://www.thermomix.com"
                />
                <TeaserTile
                  title="Kobold products"
                  buttonText="Explore products"
                  image="/flagship/teaserTile/chp_kobold_clear.png"
                  imageAlt="Kobold"
                  url="https://www.thermomix.com"
                />
                <TeaserTile
                  title="Vorwerk vouchers"
                  buttonText="Explore vouchers"
                  image="/flagship/teaserTile/chp_vouchers_clear.png"
                  imageAlt="Vouchers"
                  url="https://www.thermomix.com"
                />
              </Carousel>
            )}
          </div>
        </div>
      </section>

      <section className={styles.mainSectionContainer}>
        <div>
          <GridContainer>
            <GridItem columns={12}>
              <Headline
                spaceBelow="additional"
                strongColor="green"
                isHeadlineCentered
              >
                <Typography component="h2">
                  Current <strong>offers</strong>.
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <ContentBlock
            mediaAlignment="left"
            media={<img src="/flagship/images/vorwerk-content.png" alt="" />}
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
          media={<img src="/flagship/images/content-1.png" alt="" />}
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
