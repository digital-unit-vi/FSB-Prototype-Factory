"use client";

import {
  Austria,
  Button,
  ButtonGroup,
  Canada,
  China,
  ContentBlock,
  Czechia,
  DropdownItem,
  Facebook,
  FooterLinks,
  FooterLinksBlock,
  FooterSection,
  FooterSmallLinks,
  FooterSocialLinkBlock,
  FooterSocialLinks,
  France,
  Germany,
  Greece,
  GridContainer,
  GridItem,
  Header,
  Headline,
  Hero,
  Instagram,
  Ireland,
  Italy,
  LanguageSelector,
  Mexico,
  Pinterest,
  Poland,
  Portugal,
  ProductStripe,
  Rezeptwelt,
  Spain,
  Switzerland,
  Taiwan,
  Turkey,
  Typography,
  UK,
  USA,
  Vorwerk,
  Youtube,
} from "@components/build-assets/libraryExport";
import Spacer from "@components/shared/spacer/spacer";
import Link from "next/link";
import styles from "./page.module.scss";

const Languages = [
  <DropdownItem>
    <Canada />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Canada <span>(English)</span>
    </Typography>
  </DropdownItem>,

  <DropdownItem>
    <Canada />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Canada <span>(Français)</span>
    </Typography>
  </DropdownItem>,

  <DropdownItem>
    <Czechia />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Česko
    </Typography>
  </DropdownItem>,

  <DropdownItem>
    <China />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      中国大陆 (Thermomix)
    </Typography>
  </DropdownItem>,

  <DropdownItem>
    <China />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      中国大陆 (Kobold)
    </Typography>
  </DropdownItem>,

  <DropdownItem>
    <Germany />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Deutschland
    </Typography>
  </DropdownItem>,

  <DropdownItem>
    <Spain />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      España
    </Typography>
  </DropdownItem>,

  <DropdownItem>
    <France />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      France
    </Typography>
  </DropdownItem>,

  <DropdownItem>
    <Greece />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Ελλάδα
    </Typography>
  </DropdownItem>,

  <DropdownItem>
    <Ireland />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Ireland
    </Typography>
  </DropdownItem>,

  <DropdownItem>
    <Italy />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Italia
    </Typography>
  </DropdownItem>,

  <DropdownItem>
    <Mexico />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      México
    </Typography>
  </DropdownItem>,

  <DropdownItem>
    <Austria />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Österreich
    </Typography>
  </DropdownItem>,

  <DropdownItem>
    <Poland />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Polska
    </Typography>
  </DropdownItem>,

  <DropdownItem>
    <Portugal />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Portugal
    </Typography>
  </DropdownItem>,

  <DropdownItem>
    <Switzerland />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Schweiz <span>(Deutsch)</span>
    </Typography>
  </DropdownItem>,

  <DropdownItem>
    <Switzerland />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Suisse <span>(Français)</span>
    </Typography>
  </DropdownItem>,

  <DropdownItem>
    <Switzerland />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Svizzera <span>(Italiano)</span>
    </Typography>
  </DropdownItem>,

  <DropdownItem>
    <Taiwan />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      台灣
    </Typography>
  </DropdownItem>,

  <DropdownItem>
    <Turkey />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      Türkiye
    </Typography>
  </DropdownItem>,

  <DropdownItem>
    <USA />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      USA
    </Typography>
  </DropdownItem>,

  <DropdownItem>
    <UK />
    <Typography component="span" variant="paragraph16" fontWeight="regular">
      United Kingdom
    </Typography>
  </DropdownItem>,
];

export default function Home() {
  return (
    <>
      <main>
        <Header
          isLandingPage
          landingPageLogo={
            <a href="#">
              <Vorwerk />
            </a>
          }
        />
        <Hero
          cta={
            <ButtonGroup alignment="center" layout="vertical">
              <Link href="/ds360">
                <Button size="large" type="primary">
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
              <Headline
                spaceBelow="additional"
                strongColor="green"
                children={
                  <Typography component="h2">
                    <span>
                      Project supported by
                      <br />
                      <strong>FiBRE Single Blend</strong>
                    </span>
                  </Typography>
                }
              />
            </GridItem>
          </GridContainer>
          <ContentBlock
            buttonGroup={
              <>
                <ButtonGroup>
                  <Link href="/ds360">
                    <Button size="large" type="primary">
                      Go to the showcase
                    </Button>
                  </Link>
                </ButtonGroup>
              </>
            }
            headline={
              <Headline spaceBelow="default">
                <Typography component="h3" fontWeight="bold">
                  Direct Sales 360 (DS360) Projects
                </Typography>
              </Headline>
            }
            layout="inGrid"
            media={<img src="/landingPage/imageGallery/tm6-dinner.jpg" />}
            mediaAlignment="left"
            paragraph={
              <Typography fontWeight="regular" variant="paragraph18">
                DS360 is the Vorwerk project designed to enable its sales
                workforce to benefit from the latest technologies and be more
                effective in showcasing and selling the company’s premium
                devices, such as Thermomix.
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
            media={<img src="/landingPage/teaser/teaser.png" />}
            mediaAlignment="right"
            paragraph={
              <Typography fontWeight="regular" variant="paragraph18">
                The Experience Design Team supports the Vorwerk International
                Sales division in delivering digital touchpoints to the
                Company's markets (Work In Progress)
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
              <Headline
                spaceBelow="additional"
                strongColor="green"
                children={
                  <Typography component="h2">
                    <span>
                      <strong>FiBRE Single Blend</strong>
                      <br />
                      The source of countless nuances
                    </span>
                  </Typography>
                }
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem columns={12}>
              <Headline
                strongColor="green"
                children={
                  <>
                    <Typography component="h3" fontWeight="bold" spaceBelow>
                      <span>FiBRE Single Blend (FSB) in a nutshell</span>
                    </Typography>
                    <Typography spaceBelow>
                      <Spacer size={24} />
                      <span style={{ fontSize: "22px", lineHeight: "32px" }}>
                        FSB is the Vorwerk Design System meticulously crafted by
                        the Vorwerk International Experience Design Team (XDT).
                        Its primary goal is to empower the entire Vorwerk
                        community to envision, execute, and maintain digital
                        touchpoints that consistently embody the premium quality
                        of the company's physical devices, such as the
                        Thermomix.
                      </span>
                      <Spacer size={24} />
                    </Typography>
                  </>
                }
              />
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
              <img src="/landingPage/imageGallery/tm6-family-leisure.jpg" />
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
                project supports rapid prototyping loops, enabling the Company
                to mitigate risk by testing options with real users and real
                code!
                <br />
                <br />
                Lastly, the PF is a great tool for keeping everyone on the same
                page regarding UX and UI patterns across products and
                touchpoints.
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
            media={<img src="/landingPage/teaser/teaser2.jpeg" />}
            mediaAlignment="left"
            paragraph={
              <Typography fontWeight="regular" variant="paragraph18">
                The FEW project boldly ambitions to help developers, designers,
                product experts, and business stakeholders speak the same
                language and collaborate to build the Company’s digital
                products.
                <br />
                <br />
                Designed and built with industry standards, such as the
                Storybook platform, this collection of code-based atomic
                components offers a unique opportunity to facilitate the
                end-to-end product design process.
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
            media={<img src="/landingPage/teaser/teaser3.jpeg" />}
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
                project supports rapid prototyping loops, enabling the Company
                to mitigate risk by testing options with real users and real
                code!
                <br />
                <br />
                Lastly, the PF is a great tool for keeping everyone on the same
                page regarding UX and UI patterns across products and
                touchpoints.
              </Typography>
            }
          />
        </section>
        <ProductStripe
          logo={<Vorwerk />}
          text="For over 130 years, our products have impressed millions of families with their superior, innovative technology and their proverbial long service life."
          images={[
            <img
              src="/library/images/footer/product-stripe-1.png"
              alt="product stripe 1"
              key={1}
            />,
            <img
              src="/library/images/footer/product-stripe-2.png"
              alt="product stripe 2"
              key={2}
            />,
            <img
              src="/library/images/footer/product-stripe-3.png"
              alt="product stripe 3"
              key={3}
            />,
            <img
              src="/library/images/footer/product-stripe-4.png"
              alt="product stripe 4"
              key={4}
            />,
            <img
              src="/library/images/footer/product-stripe-5.png"
              alt="product stripe 5"
              key={5}
            />,
            <img
              src="/library/images/footer/product-stripe-6.png"
              alt="product stripe 6"
              key={6}
            />,
            <img
              src="/library/images/footer/product-stripe-7.png"
              alt="product stripe 7"
              key={7}
            />,
          ]}
        />
      </main>
      <footer>
        <FooterSection variant="spacingVertical" borderBottom={false}>
          <FooterLinks>
            <FooterLinksBlock
              header={
                <Typography variant="paragraph18" fontWeight="bold">
                  Get in touch
                </Typography>
              }
              links={[
                <Typography variant="paragraph16">
                  <a href="#contact">Contact us</a>
                </Typography>,
                <Typography variant="paragraph16">
                  <a href="#support">Vorwerk Support Center</a>
                </Typography>,
              ]}
            />
            <FooterLinksBlock
              header={
                <Typography variant="paragraph18" fontWeight="bold">
                  Services
                </Typography>
              }
              links={[
                <Typography variant="paragraph16">
                  <a href="#experience-live">Experience live</a>
                </Typography>,
                <Typography variant="paragraph16">
                  <a href="#vorwerk-stores">Vorwerk Stores</a>
                </Typography>,
              ]}
            />
            <FooterLinksBlock
              header={
                <Typography variant="paragraph18" fontWeight="bold">
                  Shopping
                </Typography>
              }
              links={[
                <Typography variant="paragraph16">
                  <a href="#paymentmethods">Payment methods</a>
                </Typography>,
                <Typography variant="paragraph16">
                  <a href="#shipping-delivery">Shipping & delivery</a>
                </Typography>,
                <Typography variant="paragraph16">
                  <a href="#security">Security</a>
                </Typography>,
              ]}
            />
          </FooterLinks>
        </FooterSection>
        <FooterSection variant="spacingBottom" borderBottom={true}>
          <FooterSocialLinks>
            <FooterSocialLinkBlock
              header={
                <Typography variant="paragraph18" fontWeight="bold">
                  Thermomix®
                </Typography>
              }
              links={[
                <a href="#facebook">
                  <Facebook />
                </a>,
                <a href="#instagram">
                  <Instagram />
                </a>,
                <a href="#pinterest">
                  <Pinterest />
                </a>,
                <a href="#youtube">
                  <Youtube />
                </a>,
                <a href="#receptwelt">
                  <Rezeptwelt />
                </a>,
              ]}
            />
            <FooterSocialLinkBlock
              header={
                <Typography variant="paragraph18" fontWeight="bold">
                  Kobold
                </Typography>
              }
              links={[
                <a href="#facebook">
                  <Facebook />
                </a>,
                <a href="#instagram">
                  <Instagram />
                </a>,
                <a href="#pinterest">
                  <Pinterest />
                </a>,
                <a href="#youtube">
                  <Youtube />
                </a>,
              ]}
            />
            <LanguageSelector
              title={
                <Typography variant="paragraph18" fontWeight="bold">
                  Country
                </Typography>
              }
              buttonLabel="United kingdom"
              modalTitle="Select your country"
              suggestedLabel="Suggested"
              suggestedLanguages={[
                <DropdownItem>
                  <Germany />
                  <Typography
                    component="span"
                    variant="paragraph16"
                    fontWeight="regular"
                  >
                    Deutschland
                  </Typography>
                </DropdownItem>,
              ]}
              languages={Languages}
            />
          </FooterSocialLinks>
        </FooterSection>
        <FooterSection>
          <FooterSmallLinks>
            <ul>
              <li>
                <Typography variant="paragraph12">© 2021 Vorwerk</Typography>
              </li>

              <li>
                <Typography variant="paragraph12">
                  <a href="#about-us">About us</a>
                </Typography>
              </li>

              <li>
                <Typography variant="paragraph12">
                  <a href="#press">Press</a>
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph12">
                  <a href="#privacy">Privacy</a>
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph12">
                  <a href="#imprint">Imprint</a>
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph12">
                  <a href="#cookies">Cookies</a>
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph12">
                  <a href="#terms">Terms of service</a>
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph12">
                  <a href="#cancellation">Cancellation</a>
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph12">
                  <a href="#disposal">Disposal of batteries & old devices</a>
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph12">
                  <a href="#mandatory">Mandatory information</a>
                </Typography>
              </li>
            </ul>
          </FooterSmallLinks>
        </FooterSection>
      </footer>
    </>
  );
}
