"use client";

import BentoBoxTiles from "@components/es2025/aop/bentoBoxTiles/BentoBoxTiles";
import { Carousel } from "@components/es2025/aop/carousel/carousel";
import { DemoBanner } from "@components/es2025/aop/demoBanner/demoBanner";
import EventList from "@components/es2025/aop/eventList/eventList";
import Hero from "@components/es2025/aop/hero/hero";
import ProductGrid from "@components/es2025/aop/productGrid/productGrid";
import StickyBarAOP from "@components/es2025/aop/stickyBar/stickyBarAOP";
import HomePageHeader from "@components/es2025/header/header";
import useScreenSize from "@utils/useScreenSize";
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
      dates: ["12. May"],
      title: "Taco Night: Mexican Cooking Made Easy",
      url: "#",
    },
    {
      dates: ["24. May", "26. May"],
      title: "Veggie Festival: A Vegetarian Cooking Adventure",
      url: "#",
    },
    {
      dates: ["01. Jun"],
      title: "Antipasti Love: Small Bites, Big Flavor",
      url: "#",
    },
  ];

  const products = [
    {
      image: "/es2025/aop/cutter.png",
      title: "Thermomix® Vegetable Styler",
      price: "99 €",
      originalPrice: "129 €",
      discount: "25%",
    },
    {
      image: "/es2025/aop/bowl.png",
      title: "Thermomix® Bowl",
      price: "199 €",
    },
    {
      image: "/es2025/aop/sensor.png",
      title: "Thermomix® Sensor",
      price: "149 €",
    },
    {
      image: "/es2025/aop/flask.png",
      title: "FLSK Drinking Bottle Green",
      price: "47 €",
    },
    {
      image: "/es2025/aop/stoneware.png",
      title: 'Stoneware Shape "Betty Roaster"',
      price: "95 €",
    },
  ];

  const demoCarouselTiles = [
    {
      title: "We make an appointment",
      text: "Simply fill out the online contact form and I will get back to you shortly to arrange a demonstration with you.",
      src: "/es2025/aop/demoTile_image1.png",
    },
    {
      title: "I bring the Thermomix® experience at your place",
      text: "The cooking experience takes place at a location of your choice. Please let me know in advance what you would be particularly interested in during the cooking experience so that I can get the best out of the Thermomix® for you.",
      src: "/es2025/aop/demoTile_image2.png",
    },
    {
      title: "You are in control on what to do next!",
      text: "It's entirely up to you. If you are convinced after the cooking experience that the Thermomix® will make your life easier and more delicious, you can order it directly from me. And even after your purchase, I'm always on hand with valuable tips and tricks.",
      src: "/es2025/aop/demoTile_image3.png",
    },
  ];

  return (
    <>
      <main>
        <HomePageHeader />
        <Hero />
        <SectionContainer gap="gap04">
          <DemoBanner />
          <div>
            <GridContainer>
              <GridItem columns={10} start={2} end={12}>
                <Headline strongColor="green" spaceBelow="additional">
                  <Typography component="p" variant="h2">
                    <span style={{ display: "block", textAlign: "center" }}>
                      <strong>Why</strong> does a demo with me make all the
                      difference?
                    </span>
                  </Typography>
                </Headline>
              </GridItem>
            </GridContainer>
            <BentoBoxTiles
              tiles={[
                {
                  image: "/es2025/aop/pasta.png",
                  title: "In homemade I trust!",
                  text: "Why homemade? Because it tastes better and saves you money. I’d love to show you how easy it is.",
                },
                {
                  title: "I can work magic out of simple things!",
                  text: "I will show you how the TM7 works with Cookidoo to add a chef-like touch to even the simplest meals.",
                },
                {
                  image: "/es2025/aop/tacos.png",
                  title: "I open a window to the world!",
                  text: "A taste of Japan for dinner, and a taco from Mexico — all with my TM7, no travel required!",
                },
                {
                  title: "I celebrate uniqueness!",
                  text: "In a kitchen with a TM7 everyone is welcome, vegans, meat lovers, picky kids ans solo chefs alike.",
                },
              ]}
            />
          </div>
          <div>
            <GridContainer>
              <GridItem columns={10} start={2} end={12}>
                <Headline strongColor="green" spaceBelow="additional">
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
            <Carousel items={demoCarouselTiles} screenSize={useScreenSize()} />
          </div>
        </SectionContainer>
        <SectionContainer>
          <GridContainer>
            <GridItem columns={10} start={2} end={12}>
              <Headline strongColor="green" spaceBelow="additional">
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
          <ProductGrid products={products} />
        </SectionContainer>
        <SectionContainer>
          <GridContainer>
            <GridItem columns={10} start={2} end={12}>
              <Headline strongColor="green" spaceBelow="additional">
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
        <SectionContainer gap="gap04">
          <div>
            <GridContainer>
              <GridItem columns={10} start={2} end={12}>
                <Headline strongColor="green" spaceBelow="additional">
                  <Typography component="p" variant="h2">
                    <span style={{ display: "block", textAlign: "center" }}>
                      Let&apos;s spread the Thermomix®{" "}
                      <strong>passion!</strong>
                    </span>
                  </Typography>
                </Headline>
                <div data-scroll-marker="aop-sticky-change" />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem columns={12}>
                <video
                  controls
                  aria-label="Thermomix demo video"
                  poster="/es2025/aop/video-poster.png"
                >
                  <source
                    src="/es2025/aop/container_video.mp4"
                    type="video/mp4"
                  />
                  Your browser doesn&apos;t support embedded videos.
                </video>
              </GridItem>
            </GridContainer>
          </div>
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
        <div data-scroll-marker="footer" />
      </main>
      <StickyBarAOP />
    </>
  );
}
