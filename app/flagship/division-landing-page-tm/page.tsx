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
  Hero,
  ProductTile,
  Typography,
} from "@vorwerk/fibre-react";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";

export default function VOWDivisionLandingPageTM() {
  useMetaTags({
    title: "Division Landing Page - Thermomix - Vorwerk One Website",
    description: "Division Landing Page - Thermomix - Vorwerk One Website",
  });

  const [mounted, setMounted] = useState(false);

  const screenSize = useScreenSize();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main>
      <Hero
        cta={
          <ButtonGroup alignment="center" layout="vertical">
            <Button size="large" buttonStyle="primary">
              View Thermomix® TM7
            </Button>
          </ButtonGroup>
        }
        headline={
          <Headline
            strongColor="yellow"
            subline={
              <span>
                Meet the all-in-one kitchen revolution
                <br />— cooking to perfection with a touch.
              </span>
            }
          >
            <Typography component="h1">
              <span>
                <strong>Fast. Easy. Flawless.</strong>
                <br />
                Thermomix®.
              </span>
            </Typography>
          </Headline>
        }
        image={
          <img
            alt="A smiling man in a kitchen reaching for a bowl of freshly prepared food, held by a woman with short hair; a young woman watches and smiles in the background."
            src="/flagship/hero/dlp_hero_background_tm.jpg"
          />
        }
      />

      <section className={styles.mainSectionContainer}>
        <div>
          <GridContainer>
            <GridItem columns={12} columnsXL={8} startXL={3} endXL={11}>
              <Headline
                spaceBelow="additional"
                strongColor="green"
                isHeadlineCentered
                subline="Thermomix® is the ultimate all-in-one kitchen revolution—mixing, chopping, and cooking to perfection with just a touch. Effortless, smart, and undeniably stylish."
              >
                <Typography component="h2">
                  <span>
                    Culinary mastery {screenSize.width < 768 ? <br /> : ""}
                    <strong>at your home</strong>.
                  </span>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem columns={12}>
              <CategoryTileContainer>
                <CategoryTile
                  title="Thermomix® TM7"
                  subline="Effortless cooking with unmatched versatility—mix, chop, steam, and more with a single touch."
                  image="/flagship/mediaContainer/dlp_tm_tm7_front_transparent.png"
                  imageAlt="Thermomix® TM7"
                  imageTitle="Thermomix® TM7"
                  buttonText="Discover Thermomix®"
                  backgroundVariant="solid"
                  backgroundColorVariant="lightGrey"
                  url="#"
                />
                <CategoryTile
                  title="Thermomix® accessories"
                  subline="Elevate your culinary experience with tools designed to enhance precision, convenience, and creativity."
                  image="/flagship/categoryTile/hp_tm7_parts.png"
                  imageAlt="Thermomix® TM7 accessories"
                  imageTitle="Thermomix® TM7 accessories"
                  buttonText="View catalogue"
                  backgroundVariant="solid"
                  backgroundColorVariant="lightGrey"
                  url="#"
                />
              </CategoryTileContainer>
            </GridItem>
          </GridContainer>
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
                    <span>
                      The new {screenSize.width < 768 ? <br /> : ""}
                      <strong>Thermomix® TM7</strong>.
                    </span>
                  </Typography>
                </Headline>
              </GridItem>
            </GridContainer>
            <div className={`${styles.gap04} ${styles.sectionContainer}`}>
              <ContentBlock
                mediaAlignment="right"
                media={
                  <img
                    src="/flagship/mediaContainer/dlp_tm_tm7_front.png"
                    alt="Modern kitchen appliance, the Thermomix® with a touchscreen display showing recipe options, placed on a wooden table in a cozy, sunlit kitchen."
                  />
                }
                headline={
                  <Headline spaceBelow="default">
                    <Typography component="h3" fontWeight="bold">
                      Unleash your culinary genius
                    </Typography>
                  </Headline>
                }
                paragraph={
                  <Typography variant="paragraphAdaptive" fontWeight="regular">
                    The TM7 redefines cooking with cutting-edge innovation and
                    effortless style. Packed with advanced technology, this
                    all-in-one kitchen marvel combines precision cooking modes,
                    seamless connectivity, and smart features to transform your
                    kitchen experience.
                  </Typography>
                }
                buttonGroup={
                  <ButtonGroup
                    alignment="left"
                    layout="horizontal"
                    sizing="hug"
                  >
                    <Button buttonStyle="primary" size="large">
                      View Thermomix® TM7
                    </Button>
                    <Button
                      buttonStyle="tertiary"
                      size="large"
                      icon={<CaretRight />}
                      iconPosition="right"
                    >
                      Secondary action
                    </Button>
                  </ButtonGroup>
                }
              />
              <GridContainer>
                <GridItem columns={12}>
                  <CategoryTileContainer>
                    <CategoryTile
                      title="Cook with love, one hand at a time"
                      subline="You’ll be surprised how easy it is to operate the TM7 with one-hand!"
                      image="/flagship/categoryTile/dlp_man_with_child.png"
                      imageAlt="A man in a yellow hoodie holding a baby, opens the lid of TM7, in a modern kitchen"
                      imageTitle="A father cooking with his baby in a cozy, modern kitchen, using a TM7"
                      buttonText="Learn more"
                      backgroundVariant="image"
                      url="#"
                    />
                    <CategoryTile
                      title="Achieve your dream body with Thermomix®"
                      subline="Sustainable weight loss with Thermomix®’s flexible nutrition plan."
                      image="/flagship/categoryTile/dlp_woman_handstanding.png"
                      imageAlt="A woman in athletic wear performs a handstand against an orange wall, next to a floating cookbook titled 'The Thermomix Diet' featuring a bowl of fresh berries"
                      imageTitle="A fit woman strikes a handstand pose beside a cookbook promoting 'The Thermomix Diet'"
                      buttonText="Learn more"
                      backgroundVariant="image"
                      url="#"
                    />
                  </CategoryTileContainer>
                </GridItem>
              </GridContainer>
            </div>
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
                  strongColor="purple"
                  isHeadlineCentered
                >
                  <Typography component="h2">
                    <span>
                      <strong> Over 100,000 recipes</strong>
                      <br />
                      tailored to you.
                    </span>
                  </Typography>
                </Headline>
              </GridItem>
            </GridContainer>
            <ContentBlock
              layout="inGrid"
              mediaAlignment="right"
              media={
                <img
                  src="/flagship/mediaContainer/dlp_tm_cookidoo.png"
                  alt="Cookidoo® app"
                />
              }
              headline={
                <Headline spaceBelow="default">
                  <Typography component="h3" fontWeight="bold">
                    Let TM7 inspire your next culinary adventure
                  </Typography>
                </Headline>
              }
              paragraph={
                <Headline>
                  <Typography component="p" variant="paragraphAdaptive">
                    From the perfect risotto to beloved classics, let the new
                    TM7 inspire your next culinary adventure. Cookidoo® 3-month
                    free trial included.
                  </Typography>
                </Headline>
              }
              buttonGroup={
                <ButtonGroup>
                  <Button size="large" buttonStyle="primary">
                    Join Cookidoo for free
                  </Button>

                  <Button
                    size="large"
                    buttonStyle="tertiary"
                    icon={<CaretRight />}
                    iconPosition="right"
                  >
                    Learn more
                  </Button>
                </ButtonGroup>
              }
            />
          </div>
        </div>
      </section>

      <section className={styles.backgroundSection}>
        <div className={styles.mainSectionContainer}>
          <div className={`${styles.gap02} ${styles.sectionContainer}`}>
            <div>
              <GridContainer>
                <GridItem columns={12}>
                  <Headline
                    spaceBelow="additional"
                    strongColor="green"
                    isHeadlineCentered
                  >
                    <Typography component="h2">
                      Thermomix® <strong>accessories</strong>.
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
                      originalPrice: "27,90 €",
                      lowestPriceText: "Lowest price in the last 30 days:",
                      lowestPrice: "27,90 €",
                      showVat: true,
                      showDiscount: true,
                      vatText: "incl. VAT & shipping",
                      discount: "-10%",
                    }}
                    eyeCatcher={{
                      firstLine: "Save",
                      secondLine: "10%",
                      backgroundColor: "purple",
                      rotation: "none",
                      size: "large",
                    }}
                    showEyeCatcher
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
                All Thermomix® accessories
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </section>

      <section className={styles.mainSectionContainer}>
        <ContentBlock
          mediaAlignment="right"
          media={
            <img
              src="/flagship/mediaContainer/dlp_tm_tm7_front_transparent.png"
              alt="Front view of a Thermomix® kitchen appliance with a digital touchscreen display showing recipe suggestions, isolated on a black background."
            />
          }
          headline={
            <Headline spaceBelow="default">
              <Typography component="h3" fontWeight="bold">
                Operating and safety instructions
              </Typography>
            </Headline>
          }
          paragraph={
            <Typography variant="paragraphAdaptive" fontWeight="regular">
              Due to a very rare occurrence of a problem when using the
              Thermomix® TM6 measuring cup, we have released a new version of
              the TM6 and TM5 software. In Cookidoo®, all recipes involved have
              been updated so that they are available to you in Guided Cooking
              with additional safety instructions. Your Thermomix® device will
              guide you step by step during the cooking process and instruct you
              on which cover to use for the hole in your mixing bowl lid
              depending on your preparation or selected cooking function.
            </Typography>
          }
          buttonGroup={
            <ButtonGroup alignment="left" layout="horizontal" sizing="hug">
              <Button buttonStyle="primary" size="large">
                Learn more
              </Button>
            </ButtonGroup>
          }
        />
      </section>
    </main>
  );
}
