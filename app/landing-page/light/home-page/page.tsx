"use client";

import ProductAnimation from "@components/cosyLandingPage/productAnimation/productAnimation";
import AdvisorToggle from "@components/es2025/homePage/advisorToggle/advisorToggle";
import SimpleImageCarousel from "@components/es2025/homePage/imageCarousel/simpleImageCarousel";
import StickyBarPhase1 from "@components/es2025/homePage/stickyBar/stickyBarPhase1";
import StickyBarPhase2 from "@components/es2025/homePage/stickyBar/stickyBarPhase2";
import HomePageHeader from "@components/homePage/header/header";
import Hero from "@components/homePage/hero/hero";
import Carousel from "@components/landingPage/carousel/carousel";
import Spacer from "@components/shared/spacer/spacer";
import {
  Button,
  ButtonGroup,
  GridContainer,
  GridItem,
  Headline,
  ImageCarousel,
  Link,
  MediaContainer,
  SectionContainer,
  Typography,
} from "@vorwerk/fibre-react";

export default function HomePage() {
  return (
    <>
      <main>
        <HomePageHeader />
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
        <div
          data-scroll-marker="phase1-start"
          style={{ height: "1px", opacity: 0 }}
        ></div>
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
              <div
                data-scroll-marker="phase1-end"
                style={{ height: "1px", opacity: 0 }}
              ></div>
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
            <Link href="/ds360">
              <Button size="large" buttonStyle="primary">
                Get 3 months of Cookidoo® for free!
              </Button>
            </Link>
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
        <div
          data-scroll-marker="phase2-start"
          style={{ height: "1px", opacity: 0 }}
        ></div>
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
              <div
                data-scroll-marker="phase2-content-change"
                style={{ height: "1px", opacity: 0 }}
              ></div>
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
        <SimpleImageCarousel images={BOTTOM_CAROUSEL_IMAGES} />
        <div
          data-scroll-marker="footer"
          style={{ height: "1px", opacity: 0 }}
        ></div>
      </main>
      <StickyBarPhase1 />
      <StickyBarPhase2 />
    </>
  );
}
