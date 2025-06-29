"use client";

import CategoryTile from "@components/flagship/categoryTile/categoryTile";
import {
  GridContainer,
  GridItem,
  Header,
  Headline,
  Typography,
  Vorwerk,
} from "@vorwerk/fibre-react";
import Link from "next/link";
import styles from "./page.module.scss";

export default function VOW() {
  return (
    <>
      <main>
        <Header
          isLandingPage
          landingPageLogo={
            <Vorwerk
              className={styles.vorwerkLogo}
              aria-label="Go to home page"
            />
          }
          backgroundType={"transparent"}
        />
        <section className={styles.prominentSection}>
          <GridContainer>
            <GridItem columns={12} className={styles.textCentered}>
              <Headline spaceBelow="default" strongColor="green">
                <Typography component="h2">
                  <span>
                    <strong>Flagship Screens</strong> -
                    <br />
                    Vorwerk One Website with CI/CD
                  </span>
                </Typography>
              </Headline>
            </GridItem>
            <GridItem
              columns={12}
              columnsL={6}
              columnsXL={4}
              className={styles.tiles}
            >
              <Link href={"/flagship/home-page"}>
                <CategoryTile
                  size={"small"}
                  imageProps={{
                    src: "/flagship/images/home-page.png",
                    alt: "Screen design",
                  }}
                  backgroundColor={"grey"}
                  title={"Home Page - AEM"}
                />
              </Link>
            </GridItem>
            <GridItem
              columns={12}
              columnsL={6}
              columnsXL={4}
              className={styles.tiles}
            >
              <Link href={"/flagship/product-detail-page"}>
                <CategoryTile
                  size={"small"}
                  imageProps={{
                    src: "/flagship/images/product-detail-page-sapc.png",
                    alt: "Screen design",
                  }}
                  backgroundColor={"grey"}
                  title={"Product Detail Page - SAPC"}
                />
              </Link>
            </GridItem>
            <GridItem
              columns={12}
              columnsL={6}
              columnsXL={4}
              className={styles.tiles}
            >
              <Link href={"/flagship/product-detail-page-aem"}>
                <CategoryTile
                  size={"small"}
                  imageProps={{
                    src: "/flagship/images/product-detail-page-aem.png",
                    alt: "Screen design",
                  }}
                  backgroundColor={"grey"}
                  title={"Product Detail Page - AEM"}
                />
              </Link>
            </GridItem>
            <GridItem
              columns={12}
              columnsL={6}
              columnsXL={4}
              className={styles.tiles}
            >
              <Link href={"/flagship/division-landing-page"}>
                <CategoryTile
                  size={"small"}
                  imageProps={{
                    src: "/flagship/images/division-landing-page.png",
                    alt: "Screen design",
                  }}
                  backgroundColor={"grey"}
                  title={"Division Landing Page - AEM"}
                />
              </Link>
            </GridItem>
            <GridItem
              columns={12}
              columnsL={6}
              columnsXL={4}
              className={styles.tiles}
            >
              <Link href={"/flagship/catalogue-home-page"}>
                <CategoryTile
                  size={"small"}
                  imageProps={{
                    src: "/flagship/images/catalogue-home-page.png",
                    alt: "Screen design",
                  }}
                  backgroundColor={"grey"}
                  title={"Catalogue Home Page - AEM"}
                />
              </Link>
            </GridItem>
            <GridItem
              columns={12}
              columnsL={6}
              columnsXL={4}
              className={styles.tiles}
            >
              <Link href={"/flagship/product-landing-page"}>
                <CategoryTile
                  size={"small"}
                  imageProps={{
                    src: "/flagship/images/product-landing-page.png",
                    alt: "Screen design",
                  }}
                  backgroundColor={"grey"}
                  title={"Product Landing Page - AEM"}
                />
              </Link>
            </GridItem>
            <GridItem
              columns={12}
              columnsL={6}
              columnsXL={4}
              className={styles.tiles}
            >
              <Link href={"/flagship/catalogue-division-landing-page"}>
                <CategoryTile
                  size={"small"}
                  imageProps={{
                    src: "/flagship/images/catalogue-division-landing-page.png",
                    alt: "Screen design",
                  }}
                  backgroundColor={"grey"}
                  title={"Catalogue Division Landing Page - SAPC"}
                />
              </Link>
            </GridItem>
            <GridItem
              columns={12}
              columnsL={6}
              columnsXL={4}
              className={styles.tiles}
            >
              <Link href={"/flagship/catalogue-division-section-page"}>
                <CategoryTile
                  size={"small"}
                  imageProps={{
                    src: "/flagship/images/catalogue-division-section-page.png",
                    alt: "Screen design",
                  }}
                  backgroundColor={"grey"}
                  title={"Catalogue Division Section Page - SAPC"}
                />
              </Link>
            </GridItem>
          </GridContainer>
        </section>
      </main>
    </>
  );
}
