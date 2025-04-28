"use client";

import AdvisorToggle from "@components/es2025/homePage/advisorToggle/advisorToggle";
import Carousel from "@components/es2025/homePage/carousel/carousel";
import CarouselTile from "@components/es2025/homePage/carousel/carouselTile";
import HomePageHeader from "@components/es2025/header/header";
import Hero from "@components/es2025/homePage/hero/hero";
import ImageCarousel from "@components/es2025/homePage/imageCarousel/imageCarousel";
import ProductAnimation from "@components/es2025/homePage/productAnimation/productAnimation";
import StickyBarPhase1 from "@components/es2025/homePage/stickyBar/stickyBarPhase1";
import StickyBarPhase2 from "@components/es2025/homePage/stickyBar/stickyBarPhase2";
import Spacer from "@components/shared/spacer/spacer";
import MediaContainerPhoto from "@public/es2025/homePage/media_container.png";
import {
  Button,
  ButtonGroup,
  GridContainer,
  GridItem,
  Headline,
  MediaContainer,
  SectionContainer,
  Typography,
} from "@vorwerk/fibre-react";
import Image from "next/image";
import { Footer } from "@components/es2025/footer/footer";

const thermomixAccessoryTiles = [
  <CarouselTile
    variant="background"
    title="Thermomix® promotions"
    backgroundImageUrl="/es2025/homePage/thermomix_tile_background.png"
    eyecatcherTextPrimary="45%"
    eyecatcherTextSecindary="Save"
    key={1}
  />,
  <CarouselTile
    variant="product"
    title="Thermomix® Bowl"
    price="199 €"
    note="incl. VAT & shipping"
    productImageUrl="/es2025/homePage/tm7_bowl.png"
    key={2}
  />,
  <CarouselTile
    variant="product"
    title="Thermomix® Sensor"
    price="149 €"
    note="incl. VAT & shipping"
    productImageUrl="/es2025/homePage/sensor.png"
    key={3}
  />,
];

const koboldAccessoryTiles = [
  <CarouselTile
    variant="background"
    title="Kobold promotions"
    backgroundImageUrl="/es2025/homePage/kobold_tile_background.png"
    eyecatcherTextPrimary="45%"
    eyecatcherTextSecindary="Save"
    key={1}
  />,
  <CarouselTile
    variant="product"
    title="Kobold BY7 Akku"
    price="149 €"
    note="incl. VAT & shipping"
    productImageUrl="/es2025/homePage/kobold_akku.png"
    eyecatcherTextPrimary="25%"
    eyecatcherTextSecindary="Save"
    key={2}
  />,
  <CarouselTile
    variant="product"
    title="Kobold EB7 electric brush"
    price="400 €"
    note="incl. VAT & shipping"
    productImageUrl="/es2025/homePage/kobold_brush.png"
    key={3}
  />,
];

export default function HomePageES() {
  return (
    <>
      <main>
        <HomePageHeader showBanner />
        <Hero />
        <SectionContainer>
          <GridContainer>
            <GridItem
              columns={10}
              start={2}
              end={12}
              columnsXL={8}
              startXL={3}
              endXL={11}
            >
              <Headline strongColor="green" spaceBelow="default">
                <Typography component="p" variant="h2">
                  <span style={{ display: "block", textAlign: "center" }}>
                    Your <strong>Thermomix®</strong>
                    <br />
                    journey starts here
                  </span>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem
              columns={10}
              start={2}
              end={12}
              columnsXL={8}
              startXL={3}
              endXL={11}
            >
              <Typography
                component="p"
                variant="paragraph18"
                fontWeight="regular"
              >
                <span style={{ display: "block", textAlign: "center" }}>
                  Experience firsthand the innovation and precision of the
                  Thermomix® TM7 as our advisors guide you through its
                  capabilities. Schedule your personal demonstration today and
                  revolutionise your kitchen experience!
                </span>
              </Typography>
            </GridItem>
          </GridContainer>
        </SectionContainer>
        <div data-scroll-marker="phase1-start" />
        <ProductAnimation />
        <SectionContainer>
          <GridContainer>
            <GridItem
              columns={10}
              start={2}
              end={12}
              columnsXL={8}
              startXL={3}
              endXL={11}
            >
              <Headline strongColor="green" spaceBelow="default">
                <Typography component="p" variant="h2">
                  <span style={{ display: "block", textAlign: "center" }}>
                    Thermomix®
                    <br />
                    <strong>promotions & accessories</strong>.
                  </span>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <Carousel buttonText="All Thermomix® products">
            {thermomixAccessoryTiles}
          </Carousel>
        </SectionContainer>
        <SectionContainer>
          <GridContainer>
            <GridItem
              columns={10}
              start={2}
              end={12}
              columnsXL={8}
              startXL={3}
              endXL={11}
            >
              <div data-scroll-marker="phase1-end" />
              <Headline strongColor="green" spaceBelow="default">
                <Typography component="p" variant="h2">
                  <span style={{ display: "block", textAlign: "center" }}>
                    <strong>Cookidoo®</strong>
                    <br />
                    elevates the TM7 experience to the next level!
                  </span>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem
              columns={10}
              start={2}
              end={12}
              columnsXL={8}
              startXL={3}
              endXL={11}
            >
              <Typography
                component="p"
                variant="paragraph18"
                fontWeight="regular"
              >
                <span style={{ display: "block", textAlign: "center" }}>
                  Use it to create healthy, delicious meals from scratch for you
                  and a table full of guests in no time. And the best part, TM7
                  gets better and better all by itself. Smart at heart, just
                  like you.
                </span>
              </Typography>
            </GridItem>
          </GridContainer>
        </SectionContainer>
        <SectionContainer>
          <ImageCarousel />
          <ButtonGroup alignment="center" layout="vertical">
            <Button size="large" buttonStyle="primary">
              Get 3 months of Cookidoo® for free!
            </Button>
          </ButtonGroup>
        </SectionContainer>
        <SectionContainer>
          <GridContainer>
            <GridItem
              columns={10}
              start={2}
              end={12}
              columnsXL={8}
              startXL={3}
              endXL={11}
            >
              <Headline strongColor="green" spaceBelow="default">
                <Typography component="p" variant="h2">
                  <span style={{ display: "block", textAlign: "center" }}>
                    <strong>Kobold</strong>
                    <br />
                    Always clean, always simple
                  </span>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem
              columns={10}
              start={2}
              end={12}
              columnsXL={8}
              startXL={3}
              endXL={11}
            >
              <Typography
                component="p"
                variant="paragraph18"
                fontWeight="regular"
              >
                <span style={{ display: "block", textAlign: "center" }}>
                  Kobold is the revolution in the household: It combines over 90
                  years of experience in the development of powerful hoovers
                  with an ergonomic and elegant design. Whether for families,
                  single households or allergy sufferers - with Kobold you will
                  find the right product for every need.
                </span>
              </Typography>
            </GridItem>
          </GridContainer>
        </SectionContainer>
        <div data-scroll-marker="phase2-start" />
        <ProductAnimation useStaticImage={true} text="VK7" />
        <SectionContainer>
          <GridContainer>
            <GridItem
              columns={10}
              start={2}
              end={12}
              columnsXL={8}
              startXL={3}
              endXL={11}
            >
              <Headline strongColor="green" spaceBelow="default">
                <Typography component="p" variant="h2">
                  <span style={{ display: "block", textAlign: "center" }}>
                    Kobold
                    <br />
                    <strong>promotions & accessories</strong>.
                  </span>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <Carousel buttonText="All Kobold products">
            {koboldAccessoryTiles}
          </Carousel>
        </SectionContainer>
        <SectionContainer>
          <GridContainer>
            <GridItem
              columns={10}
              start={2}
              end={12}
              columnsXL={8}
              startXL={3}
              endXL={11}
            >
              <div data-scroll-marker="phase2-content-change" />
              <Headline strongColor="green" spaceBelow="default">
                <Typography component="p" variant="h2">
                  <span style={{ display: "block", textAlign: "center" }}>
                    Turn a passion into an
                    <br />
                    <strong>exciting job</strong>
                  </span>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem columns={12}>
              <MediaContainer aspectRatio="3/2">
                <Image src={MediaContainerPhoto} alt="Advisors" />
              </MediaContainer>
              <Spacer size={32} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem
              columns={10}
              start={2}
              end={12}
              columnsXL={8}
              startXL={3}
              endXL={11}
            >
              <Typography
                component="p"
                variant="paragraph18"
                fontWeight="regular"
              >
                <span style={{ display: "block", textAlign: "center" }}>
                  We don&apos;t sell products - we create experiences that
                  inspire. We understand how important time is in everyday life.
                  And we value the highest quality. That&apos;s why our
                  professionals bring their personality to the table - and make
                  experiences possible - for you and your own success story.
                  Start your career at Vorwerk!
                </span>
              </Typography>
            </GridItem>
          </GridContainer>
        </SectionContainer>
        <SectionContainer>
          <GridContainer>
            <GridItem
              columns={10}
              start={2}
              end={12}
              columnsXL={8}
              startXL={3}
              endXL={11}
            >
              <Headline strongColor="green" spaceBelow="default">
                <Typography component="p" variant="h2">
                  <span style={{ display: "block", textAlign: "center" }}>
                    Your Vorwerk
                    <br />
                    <strong>advisors</strong>
                  </span>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem
              columns={10}
              start={2}
              end={12}
              columnsXL={8}
              startXL={3}
              endXL={11}
            >
              <Typography
                component="p"
                variant="paragraph18"
                fontWeight="regular"
              >
                <span style={{ display: "block", textAlign: "center" }}>
                  Vorwerk advisors are dedicated to offering tailored and
                  professional service to help you discover the perfect product
                  for your home. You’ll have the opportunity to try out our
                  products during a free, no-obligation demonstration, allowing
                  you to explore the Thermomix and Kobold features firsthand.
                </span>
              </Typography>
            </GridItem>
          </GridContainer>
        </SectionContainer>
        <AdvisorToggle />
        <div data-scroll-marker="footer" />
      </main>
      <StickyBarPhase1 />
      <StickyBarPhase2 />
      <Footer />
    </>
  );
}
