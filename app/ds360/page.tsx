"use client";

import ShowcaseTiles from "@components/landingPage/showcaseTiles/showcaseTiles";
import {
  GridContainer,
  GridItem,
  Header,
  Headline,
  Hero,
  Typography,
  Vorwerk
} from "@vorwerk/fibre-react";
import Link from "next/link";
import styles from "./page.module.scss";

const tilesDataEmail = [
  {
    light: {
      image: "/shared/product/tm6-product-light.png",
      link: "/templates/email/light/tm6/var-a/index.html",
    },
    dark: {
      image: "/shared/product/tm6-product-dark.png",
      link: "/templates/email/dark/tm6/var-a/index.html",
    },
    title: "Main Device",
  },
  {
    light: {
      image: "/shared/product/sensor-product.png",
      link: "/templates/email/light/sensor/var-a/index.html",
    },
    dark: {
      image: "/shared/product/sensor-product.png",
      link: "/templates/email/dark/sensor/var-a/index.html",
    },
    title: "Main Accessory",
  },
  {
    light: {
      image: "/shared/product/blade-product.png",
      link: "/templates/email/light/blade/index.html",
    },
    dark: {
      image: "/shared/product/blade-product.png",
      link: "/templates/email/dark/blade/index.html",
    },
    title: "Basic Accessory",
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tilesDataMarketingEmail = [
  {
    light: {
      image: "/shared/product/tm6-product-light.png",
      link: "/templates/email/light/cookidooServiceMail/var-a/index.html",
    },
    title: "Service Mail - Var-A",
  },
  {
    light: {
      image: "/shared/product/tm6-product-light.png",
      link: "/templates/email/light/cookidooServiceMail/var-b/index.html",
    },
    title: "Service Mail - Var-B",
  },
  {
    light: {
      image: "/shared/product/tm6-product-light.png",
      link: "/templates/email/light/cookidooMarketingMail/reangeagement/index.html",
    },
    title: "Marketing Mail - Reangeagement",
  },
  {
    light: {
      image: "/shared/product/tm6-product-light.png",
      link: "/templates/email/light/cookidooMarketingMail/onboarding/index.html",
    },
    title: "Marketing Mail - Onboarding",
  },
];

const tilesDataLP = [
  {
    light: {
      image: "/shared/product/tm6-product-light.png",
      link: "/landing-page/light/tm6/var-a",
    },
    dark: {
      image: "/shared/product/tm6-product-dark.png",
      link: "/landing-page/dark/tm6/var-a",
    },
    title: "Main Device",
  },
  {
    light: {
      image: "/shared/product/sensor-product.png",
      link: "/landing-page/light/sensor",
    },
    dark: {
      image: "/shared/product/sensor-product.png",
      link: "/landing-page/dark/sensor",
    },
    title: "Main Accessory",
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tilesDataCoSy = [
  {
    dark: {
      image: "/cosy/cosy_square.png",
      link: "/landing-page/dark/tm7/",
    },
    title: "TM7",
  },
];

export default function Home() {
  return (
    <main>
      <Header
        isLandingPage
        landingPageLogo={
          <Link href="/">
            <Vorwerk className={styles.vorwerkLogo} />
          </Link>
        }
      />
      <div className={styles.hero}>
        <Hero
          backgroundColor="lightGrey"
          headline={
            <Headline
              strongColor="green"
              subline="The XDT designed three business cases for Email Templates and two business cases for Landing Page Templates, based on three design principles such as usability first, content curation and sustainability and on the new CI/CD and guidelines."
            >
              <Typography component="h1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: "<strong>DS360</strong><br />Templates",
                  }}
                />
              </Typography>
            </Headline>
          }
          image={
            <img alt="Thermomix" src="/landingPage/hero/ds360-hero.png" />
          }
          type="colorFill"
        />
      </div>
      <section className={styles.prominentSection}>
        <GridContainer>
          <GridItem columns={12} className={styles.textCentered}>
            <Headline
              spaceBelow="additional"
              strongColor="green"
            >
              <Typography component="h2">
                <span>
                  <strong>Email Template</strong> -
                  <br />
                  Three business cases available in light and dark version
                </span>
              </Typography>
            </Headline>
          </GridItem>
        </GridContainer>
        <ShowcaseTiles tilesData={tilesDataEmail} />
      </section>
      {/* <section className={styles.prominentSection}>
        <GridContainer>
          <GridItem columns={12} className={styles.textCentered}>
            <Headline
              spaceBelow="additional"
              strongColor="green"
            >
              <Typography component="h2">
                <span>
                  <strong>Marketing Email Template</strong>
                </span>
              </Typography>
            </Headline>
          </GridItem>
        </GridContainer>
        <ShowcaseTiles tilesData={tilesDataMarketingEmail} />
      </section> */}
      {/* <section className={styles.prominentSection}>
        <GridContainer>
          <GridItem columns={12} className={styles.textCentered}>
            <Headline
              spaceBelow="additional"
              strongColor="green"
            >
              <Typography component="h2">
                <span>
                  <strong>Landing Page Template TM7</strong>
                </span>
              </Typography>
            </Headline>
          </GridItem>
        </GridContainer>
        <ShowcaseTiles tilesData={tilesDataCoSy} />
      </section> */}
      <section className={styles.prominentSection}>
        <GridContainer>
          <GridItem columns={12} className={styles.textCentered}>
            <Headline
              spaceBelow="additional"
              strongColor="green"
            >
              <Typography component="h2">
                <span>
                  <strong>Landing Page Template</strong> -
                  <br />
                  Two business cases available in light and dark version
                </span>
              </Typography>
            </Headline>
          </GridItem>
        </GridContainer>
        <ShowcaseTiles tilesData={tilesDataLP} />
      </section>
    </main>
  );
}
