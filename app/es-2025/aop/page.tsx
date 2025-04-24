"use client";

import BentoBoxTiles from "@components/es2025/aop/bentoBoxTiles/BentoBoxTiles";
import EventList from "@components/es2025/aop/eventList/eventList";
import Hero from "@components/es2025/aop/hero/hero";
import HomePageHeader from "@components/es2025/homePage/header/header";
import {
  GridContainer,
  GridItem,
  Headline,
  SectionContainer,
  Typography,
} from "@vorwerk/fibre-react";

export default function AOPES() {
  const events = [
    {
      dates: ["21. Mar"],
      title: "Cours de cuisine Grandes Tablées",
      url: "#", // Replace with actual URL
    },
    {
      dates: ["30. Mar", "04. Apr"],
      title: "The Future of Food Writing",
      url: "#", // Replace with actual URL
    },
    {
      dates: ["21. Apr"],
      title: "Cooking class",
      url: "#", // Replace with actual URL
    },
  ];

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
                    <strong>Why</strong> does a demo with me make all the
                    difference?
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
                text: "Why homemade? Because it tastes better and saves you money. I’d love to show you how easy it is.",
              },
              {
                title: "I can work magic out of simple things!",
                text: "I will show you how the TM7 works with Cookidoo to add a chef-like touch to even the simplest meals.",
              },
              {
                image: "/homePage/aop/tacos.png",
                title: "I open a window to the world!",
                text: "A taste of Japan for dinner, and a taco from Mexico — all with my TM7, no travel required!",
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
                    <strong>How</strong> does
                    <br />
                    my demo work?
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
          <GridContainer>
            <GridItem columns={10} start={2} end={12}>
              <EventList events={events} />
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
            <GridItem>
              <video
                controls
                preload="metadata"
                aria-label="Thermomix demo video"
              >
                <source
                  src="/homePage/aop/container_video.mp4"
                  type="video/mp4"
                />
                Your browser doesn&apos;t support embedded videos.
              </video>
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
                  Ready to turn your love for the Thermomix® into something
                  even bigger? Join us — the Vorwerk talent team is excited to
                  meet you!
                </span>
              </Typography>
            </GridItem>
          </GridContainer>
        </SectionContainer>
      </main>
    </>
  );
}
