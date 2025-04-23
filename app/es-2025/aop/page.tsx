"use client";

import BentoBoxTiles from "@components/homePage/bentoBoxTiles/BentoBoxTiles";
import HomePageHeader from "@components/homePage/header/header";
import Hero from "@components/homePage/hero/hero";
import {
  GridContainer,
  GridItem,
  Headline,
  SectionContainer,
  Typography,
} from "@vorwerk/fibre-react";

export default function AOPES() {
  return (
    <>
      <main>
        <HomePageHeader />
        <Hero />
        <SectionContainer>
          <GridContainer>
            <GridItem columns={10} start={2} end={12}>
              <Headline strongColor="green" spaceBelow="default">
                <Typography component="p" variant="h2">
                  <span style={{ display: "block", textAlign: "center" }}>
                    <strong>Why</strong> a demo with me is important?
                  </span>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
        </SectionContainer>
        <SectionContainer>
          <BentoBoxTiles
            tiles={[
              {
                image: "/homePage/aop/pasta.png",
                title: "In homemade I trust!",
                text: "I will show you that homemade food not only tastes better but it is also a more sustainable choice.",
              },
              {
                title: "I can work magic out of simple things!",
                text: "I will show you how the TM7 works with Cookidoo to add a chef-like touch to even the simplest meals.",
              },
              {
                image: "/homePage/aop/macaroons.png",
                title: "I open a window to the world!",
                text: "With my TM7 I can cook a Japanese dinner with a Parisian dessert. No plane ticket is needed!",
              },
              {
                title: "I celebrate uniqueness!",
                text: "In a kitchen with a TM7 everyone is welcome, vegans, meat lovers, picky kids ans solo chefs alike.",
              },
            ]}
          />
        </SectionContainer>
        <SectionContainer>
          <GridContainer>
            <GridItem columns={10} start={2} end={12}>
              <Headline strongColor="green" spaceBelow="default">
                <Typography component="p" variant="h2">
                  <span style={{ display: "block", textAlign: "center" }}>
                    My top picks for Thermomix®
                    <br />
                    <strong>accessories & offers</strong>
                  </span>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
        </SectionContainer>
        <SectionContainer>
          <GridContainer>
            <GridItem columns={10} start={2} end={12}>
              <Headline strongColor="green" spaceBelow="default">
                <Typography component="p" variant="h2">
                  <span style={{ display: "block", textAlign: "center" }}>
                    My upcoming
                    <br />
                    <strong>events</strong>
                  </span>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
        </SectionContainer>
        <SectionContainer>
          <GridContainer>
            <GridItem columns={10} start={2} end={12}>
              <Headline strongColor="green" spaceBelow="default">
                <Typography component="p" variant="h2">
                  <span style={{ display: "block", textAlign: "center" }}>
                    Let&apos;s spread the Thermomix® <strong>passion!</strong>
                  </span>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
        </SectionContainer>
        <SectionContainer>
          <GridContainer>
            <GridItem columns={10} start={2} end={12}>
              <Typography
                component="p"
                variant="paragraph18"
                fontWeight="regular"
              >
                <span style={{ display: "block", textAlign: "center" }}>
                  Now&apos;s your chance to transform your love for delicious
                  food made with Thermomix® into an exciting career
                  opportunity. The Vorwerk talent team can&apos;t wait to meet
                  you!
                </span>
              </Typography>
            </GridItem>
          </GridContainer>
        </SectionContainer>
      </main>
    </>
  );
}
