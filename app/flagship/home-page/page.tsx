"use client";

import { useMetaTags } from "@utils/useMetaTags";
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
  Hero,
  SectionContainer,
  Typography,
} from "@vorwerk/fibre-react";
import styles from "./page.module.scss";

export default function VOWHomePage() {
  useMetaTags({
    title: "Home Page - Vorwerk One Website",
    description: "Home Page - Vorwerk One Website",
  });

  return (
    <>
      <Hero
        cta={
          <ButtonGroup alignment="center" layout="vertical">
            <Button size="medium" buttonStyle="primary">
              Try before buy
            </Button>
            <Button invertColors size="medium" buttonStyle="secondary">
              Order online now
            </Button>
          </ButtonGroup>
        }
        headline={
          <Headline
            strongColor="yellow"
            subline="The new Thermomix® TM7 takes cooking to the next level with smart tech and elegant design. "
          >
            <Typography component="h1">
              <span>
                <strong>Thermomix®</strong>
                <br />
                like never before.
              </span>
            </Typography>
          </Headline>
        }
        image={
          <img
            alt="Woman looking at the blue cake with edible eyes"
            src="/flagship/hero/hp_hero_background.jpg"
          />
        }
        video={
          <video autoPlay muted loop playsInline>
            <source src="/flagship/hero/hp_hero_video.mp4" type="video/mp4" />
          </video>
        }
      />
      <SectionContainer>
        <GridContainer>
          <GridItem columns={12}>
            <Headline
              spaceBelow="additional"
              strongColor="green"
              isHeadlineCentered
              subline="Vorwerk’s ecosystem is designed to support people in taking care of whatever they call home"
            >
              <Typography component="h2">
                <span>
                  Prepare yummy meals and deeply clean to protect
                  <strong> your beloved ones</strong>.
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
                subline="More than just a kitchen appliance, the Thermomix® TM7 is designed to bring your cooking experience to a whole new level."
                image="/flagship/categoryTile/hp_tm7.png"
                imageAlt="Thermomix® TM7"
                imageTitle="Thermomix® TM7"
                buttonText="Discover Thermomix®"
                backgroundVariant="solid"
                backgroundColorVariant="lightGrey"
                url="#"
              />
              <CategoryTile
                title="Cleaning with Kobold"
                subline="More than a cleaning device, the Kobold blends power, elegance, and precision for a flawlessly clean home."
                image="/flagship/categoryTile/hp_kobold.png"
                imageAlt="Kobold Upright Vacuum Cleaner"
                imageTitle="Kobold Upright Vacuum Cleaner"
                buttonText="Discover Kobold"
                backgroundVariant="solid"
                backgroundColorVariant="lightGrey"
                url="#"
              />
            </CategoryTileContainer>
          </GridItem>
        </GridContainer>
      </SectionContainer>
      <div className={styles.backgroundSection}>
        <SectionContainer>
          <GridContainer>
            <GridItem columns={12}>
              <Headline
                spaceBelow="additional"
                strongColor="purple"
                isHeadlineCentered
              >
                <Typography component="h2">
                  <span>
                    Thermomix® TM7 -<br />
                    the <strong>all-in-one</strong> kitchen genius.
                  </span>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <div className={`${styles.sectionContainer} ${styles.gap04}`}>
            <ContentBlock
              buttonGroup={
                <ButtonGroup>
                  <Button size="large" buttonStyle="primary">
                    Book a demo today
                  </Button>
                  <Button
                    size="large"
                    buttonStyle="tertiary"
                    icon={<CaretRight />}
                    iconPosition="right"
                  >
                    Order online now
                  </Button>
                </ButtonGroup>
              }
              mediaAlignment="left"
              media={
                <img
                  src="/flagship/mediaContainer/hp1.png"
                  alt="A woman and a young girl smile while using a touchscreen kitchen appliance together, in a modern kitchen setting."
                />
              }
              headline={
                <Headline spaceBelow="default">
                  <Typography component="h3" fontWeight="bold">
                    A professional chef at your fingertips!
                  </Typography>
                </Headline>
              }
              paragraph={
                <Typography fontWeight="regular" variant="paragraphAdaptive">
                  Thermomix® is the ultimate all-in-one appliance, with over 20
                  functions to make cooking faster and easier. From chopping to
                  sous-vide, it offers effortless precision. With Wi-Fi
                  connectivity and smart automation, it guides you through
                  recipes, saving time and effort. A true home cooking
                  revolution, empowering you to cook smarter and eat healthier
                  with one device.
                </Typography>
              }
            />
            <GridContainer>
              <GridItem columns={12}>
                <CategoryTileContainer>
                  <CategoryTile
                    title="Products, accessories, cookbooks and more"
                    subline="Everything to elevate  your cooking experience with Thermomix®"
                    image="/flagship/categoryTile/hp_tm7_parts.png"
                    imageAlt="Thermomix® TM7 accessories"
                    imageTitle="Thermomix® TM7 accessories"
                    buttonText="Explore catalogue"
                    backgroundVariant="solid"
                    backgroundColorVariant="white"
                    url="#"
                  />
                  <CategoryTile
                    title="Thousands of recipes - endless inspiration"
                    subline="Cookidoo® is your ultimate gateway to the culinary world."
                    image="/flagship/categoryTile/hp_cookidoo.png"
                    imageAlt="Cookidoo®"
                    imageTitle="Cookidoo®"
                    buttonText="Discover Cookidoo®"
                    backgroundVariant="solid"
                    backgroundColorVariant="white"
                    eyeCatcher={{
                      backgroundColor: "purple",
                      firstLine: "New recipes",
                      rotation: "none",
                      secondLine: "every week",
                      size: "small",
                    }}
                    url="#"
                  />
                </CategoryTileContainer>
              </GridItem>
            </GridContainer>
          </div>
        </SectionContainer>
      </div>
      <SectionContainer>
        <GridContainer>
          <GridItem columns={12}>
            <Headline
              spaceBelow="additional"
              strongColor="blue"
              isHeadlineCentered
            >
              <Typography component="h2">
                <span>
                  Kobold VK7s always
                  <br /> clean, <strong>always simple</strong>.
                </span>
              </Typography>
            </Headline>
          </GridItem>
        </GridContainer>
        <div className={`${styles.sectionContainer} ${styles.gap04}`}>
          <ContentBlock
            buttonGroup={
              <ButtonGroup>
                <Button size="large" buttonStyle="primary">
                  Book a demo today
                </Button>
                <Button
                  size="large"
                  buttonStyle="tertiary"
                  icon={<CaretRight />}
                  iconPosition="right"
                >
                  Order online now
                </Button>
              </ButtonGroup>
            }
            mediaAlignment="right"
            media={
              <img
                src="/flagship/mediaContainer/hp2.png"
                alt="A man vacuums the floor with a cordless stick vacuum while a woman prepares food at the counter in a modern, sunlit kitchen with large windows and wooden interiors."
              />
            }
            headline={
              <Headline spaceBelow="default">
                <Typography component="h3" fontWeight="bold">
                  Effortlessly powerful, exceptionally clean!
                </Typography>
              </Headline>
            }
            paragraph={
              <Typography fontWeight="regular" variant="paragraphAdaptive">
                Cleaning should feel easy—and with the Kobold VK7, it is.
                Designed to adapt to every surface, it delivers powerful,
                precise suction while advanced filtration helps keep your home
                fresher. Lightweight and ergonomic, it fits seamlessly into your
                routine, making every clean feel smoother and more natural. A
                smarter way to clean, so you can enjoy more of what matters.
              </Typography>
            }
          />
          <GridContainer>
            <GridItem columns={12}>
              <CategoryTileContainer>
                <CategoryTile
                  title="Discover the complete Kobold family"
                  subline="Smart tools for every surface. Clean deeper, faster, smarter."
                  image="/flagship/categoryTile/hp_kobold_parts.png"
                  imageAlt="Kobold Vacuum Cleaner family"
                  imageTitle="Kobold Vacuum Cleaner family"
                  buttonText="Explore catalogue"
                  backgroundVariant="solid"
                  backgroundColorVariant="lightGrey"
                  url="#"
                />
                <CategoryTile
                  title="Experience Kobold at the comfort of your home"
                  subline="Experience Kobold at the comfort of your home"
                  image="/flagship/categoryTile/hp_kobold_zoomed.png"
                  imageAlt="Kobold Upright Vacuum Cleaner"
                  imageTitle="Kobold Upright Vacuum Cleaner"
                  buttonText="Book a demo"
                  backgroundVariant="solid"
                  backgroundColorVariant="lightGrey"
                  url="#"
                />
              </CategoryTileContainer>
            </GridItem>
          </GridContainer>
        </div>
      </SectionContainer>
      <div className={styles.backgroundSection}>
        <SectionContainer>
          <GridContainer>
            <GridItem columns={12}>
              <Headline
                spaceBelow="additional"
                strongColor="green"
                isHeadlineCentered
              >
                <Typography component="h2">
                  <span>
                    Vorwerk Advisor,
                    <br />a unique opportunity to
                    <br />
                    <strong>join our sales force</strong>.
                  </span>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem columns={12}>
              <CategoryTileContainer>
                <CategoryTile
                  title="Become a Thermomix® advisor"
                  subline="Share demos, earn income, and enjoy flexible hours—all while inspiring others."
                  image="/flagship/categoryTile/hp_full_tm7.png"
                  imageAlt="Group of smiling adults in a kitchen enjoying red fruit desserts, with one woman operating a hp_tm7_parts."
                  imageTitle="A cheerful group of friends gather in a cozy kitchen, sharing laughter and enjoying freshly made berry desserts, while one of them interacts with a smart cooking device."
                  buttonText="Join the Thermomix® team"
                  backgroundVariant="image"
                  url="#"
                />
                <CategoryTile
                  title="Become a Kobold advisor"
                  subline="Share powerful cleaning solutions, earn income, and enjoy flexible hours—all while inspiring others."
                  image="/flagship/categoryTile/hp_full_kobold.png"
                  imageAlt="A man in a suit demonstrating a Kobold vacuum cleaner to a casually dressed couple in a bright living room, with confetti scattered on the floor."
                  imageTitle="In a sunlit living room, a man demonstrates the use of a Kobold vacuum cleaner to an impressed couple, efficiently cleaning up a colorful confetti mess on the floor."
                  buttonText="Join the Kobold team"
                  backgroundVariant="image"
                  url="#"
                />
              </CategoryTileContainer>
            </GridItem>
          </GridContainer>
        </SectionContainer>
      </div>
    </>
  );
}
