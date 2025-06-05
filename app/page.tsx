"use client";

import Spacer from "@components/shared/spacer/spacer";
import {
  Button,
  ButtonGroup,
  ContentBlock,
  GridContainer,
  GridItem,
  Header,
  Headline,
  Hero,
  Typography,
  Vorwerk,
} from "@vorwerk/fibre-react";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <Header
        isLandingPage
        landingPageLogo={<Vorwerk aria-label="Go to home page" />}
      />
      <Hero
        cta={
          <ButtonGroup alignment="center" layout="vertical">
            <Link href="/ds360">
              <Button size="large" buttonStyle="primary">
                Go to the showcase
              </Button>
            </Link>
          </ButtonGroup>
        }
        headline={
          <Headline
            strongColor="yellow"
            subline="A reliable reference for all teams to build delightful digital products"
          >
            <Typography component="h1">
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    "FiBRE Single Blend<br><strong>Prototype Factory</strong>",
                }}
              />
            </Typography>
          </Headline>
        }
        image={
          <img
            alt="Relaxing in the kitchen"
            src="/landingPage/hero/prototype-factory-hero-cover.jpeg"
          />
        }
        isLandingPage
      />
      <section className={styles.prominentSection}>
        <GridContainer>
          <GridItem
            columns={8}
            start={3}
            end={11}
            className={styles.textCentered}
          >
            <Headline spaceBelow="additional" strongColor="green">
              <Typography component="h2">
                <span>
                  Project supported by
                  <br />
                  <strong>FiBRE Single Blend</strong>
                </span>
              </Typography>
            </Headline>
          </GridItem>
        </GridContainer>
        <ContentBlock
          buttonGroup={
            <ButtonGroup>
              <Link href="/ds360">
                <Button size="large" buttonStyle="primary">
                  Go to the showcase
                </Button>
              </Link>
            </ButtonGroup>
          }
          headline={
            <Headline spaceBelow="default">
              <Typography component="h3" fontWeight="bold">
                Direct Sales 360 (DS360) Projects
              </Typography>
            </Headline>
          }
          layout="inGrid"
          media={
            <img
              src="/landingPage/imageGallery/tm6-dinner.jpg"
              alt="Family gathered for dinner; people sitting at the table"
            />
          }
          mediaAlignment="left"
          paragraph={
            <Typography fontWeight="regular" variant="paragraph18">
              DS360 is the Vorwerk project designed to enable its sales
              workforce to benefit from the latest technologies and be more
              effective in showcasing and selling the company’s premium devices,
              such as Thermomix.
              <br />
              <br />
              The Experience Design Team listed the flagship screens in this
              section to support teams envisioning and maintaining the DS360
              digital touchpoints.
            </Typography>
          }
        />
        <Spacer size={128} />
        <ContentBlock
          headline={
            <Headline spaceBelow="default">
              <Typography component="h3" fontWeight="bold">
                Sales Projects
              </Typography>
            </Headline>
          }
          media={
            <img
              src="/landingPage/teaser/teaser.png"
              alt="Smiling people in a bright kitchen enjoying a cooking demonstration."
            />
          }
          mediaAlignment="right"
          paragraph={
            <Typography fontWeight="regular" variant="paragraph18">
              The Experience Design Team supports the Vorwerk International
              Sales division in delivering digital touchpoints to the
              Company&apos;s markets (Work In Progress)
            </Typography>
          }
        />
      </section>
      <section className={styles.defaultSection}>
        <GridContainer>
          <GridItem
            columns={8}
            start={3}
            end={11}
            className={styles.textCentered}
          >
            <Headline spaceBelow="additional" strongColor="green">
              <Typography component="h2">
                <span>
                  <strong>FiBRE Single Blend</strong>
                  <br />
                  The source of countless nuances
                </span>
              </Typography>
            </Headline>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem columns={12}>
            <Headline strongColor="green">
              <>
                <Typography component="h3" fontWeight="bold" spaceBelow>
                  <span>FiBRE Single Blend (FSB) in a nutshell</span>
                </Typography>
                <Typography spaceBelow>
                  <Spacer size={24} />
                  <span style={{ fontSize: "22px", lineHeight: "32px" }}>
                    FSB is the Vorwerk Design System meticulously crafted by the
                    Vorwerk International Experience Design Team (XDT). Its
                    primary goal is to empower the entire Vorwerk community to
                    envision, execute, and maintain digital touchpoints that
                    consistently embody the premium quality of the
                    company&apos;s physical devices, such as the Thermomix.
                  </span>
                  <Spacer size={24} />
                </Typography>
              </>
            </Headline>
          </GridItem>
        </GridContainer>
        <ContentBlock
          headline={
            <Headline spaceBelow="default">
              <Typography component="h3" fontWeight="bold">
                FSB User Interface Kit (UI Kit)
              </Typography>
            </Headline>
          }
          media={
            <img
              src="/landingPage/imageGallery/tm6-family-leisure.jpg"
              alt="Father and children playing checkers and studying at a wooden kitchen table."
            />
          }
          mediaAlignment="right"
          paragraph={
            <Typography fontWeight="regular" variant="paragraph18">
              The PF aims to be a robust and reliable reference for all the
              teams committed to crafting delightful digital experiences for
              Vorwerk customers.
              <br />
              <br />
              Its primary purpose is to help developers understand how the
              Vorwerk digital touchpoints look and work. In addition, the FEW
              project supports rapid prototyping loops, enabling the Company to
              mitigate risk by testing options with real users and real code!
              <br />
              <br />
              Lastly, the PF is a great tool for keeping everyone on the same
              page regarding UX and UI patterns across products and touchpoints.
            </Typography>
          }
        />
        <Spacer size={128} />
        <ContentBlock
          headline={
            <Headline spaceBelow="default">
              <Typography component="h3" fontWeight="bold">
                FSB FrontEnd Workshop (FEW)
              </Typography>
            </Headline>
          }
          media={
            <img
              src="/landingPage/teaser/teaser2.jpeg"
              alt="Couple enjoying a homemade meal in a cozy kitchen."
            />
          }
          mediaAlignment="left"
          paragraph={
            <Typography fontWeight="regular" variant="paragraph18">
              The FEW project boldly ambitions to help developers, designers,
              product experts, and business stakeholders speak the same language
              and collaborate to build the Company’s digital products.
              <br />
              <br />
              Designed and built with industry standards, such as the Storybook
              platform, this collection of code-based atomic components offers a
              unique opportunity to facilitate the end-to-end product design
              process.
            </Typography>
          }
        />
        <Spacer size={128} />
        <ContentBlock
          headline={
            <Headline spaceBelow="default">
              <Typography component="h3" fontWeight="bold">
                FSB Prototype Factory (PF)
              </Typography>
            </Headline>
          }
          media={
            <img
              src="/landingPage/teaser/teaser3.jpeg"
              alt="Family enjoying homemade cake together."
            />
          }
          mediaAlignment="right"
          paragraph={
            <Typography fontWeight="regular" variant="paragraph18">
              The PF aims to be a robust and reliable reference for all the
              teams committed to crafting delightful digital experiences for
              Vorwerk customers.
              <br />
              <br />
              Its primary purpose is to help developers understand how the
              Vorwerk digital touchpoints look and work. In addition, the FEW
              project supports rapid prototyping loops, enabling the Company to
              mitigate risk by testing options with real users and real code!
              <br />
              <br />
              Lastly, the PF is a great tool for keeping everyone on the same
              page regarding UX and UI patterns across products and touchpoints.
            </Typography>
          }
        />
      </section>
    </main>
  );
}
