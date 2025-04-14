"use client";

import HomePageHeader from "@components/homePage/header/header";
import Hero from "@components/homePage/hero/hero";
import {
  GridContainer,
  GridItem,
  Headline,
  SectionContainer,
  Typography,
} from "@vorwerk/fibre-react";

export default function HomePage() {
  return (
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
                gets better and better all by itself. Smart at heart, just like
                you.
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
                years of experience in the development of powerful hoovers with
                an ergonomic and elegant design. Whether for families, single
                households or allergy sufferers - with Kobold you will find the
                right product for every need.
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
                  <strong>Vorwerk</strong>
                  <br />
                  advisors
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
    </main>
  );
}
