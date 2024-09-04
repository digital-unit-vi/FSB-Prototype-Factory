"use client";

import {
  Austria,
  Canada,
  China,
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
import ShowcaseTiles from "@components/landingPage/showcaseTiles/showcaseTiles";
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

const tilesData = [
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

const tilesData2 = [
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

export default function Home() {
  return (
    <>
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
                children={
                  <Typography component="h2">
                    <span>
                      <strong>Email Template</strong> -
                      <br />
                      Three business cases available in light and dark version
                    </span>
                  </Typography>
                }
              />
            </GridItem>
          </GridContainer>
          <ShowcaseTiles tilesData={tilesData} />
        </section>
        <section className={styles.prominentSection}>
          <GridContainer>
            <GridItem columns={12} className={styles.textCentered}>
              <Headline
                spaceBelow="additional"
                strongColor="green"
                children={
                  <Typography component="h2">
                    <span>
                      <strong>Landing Page Template</strong> -
                      <br />
                      Two business cases available in light and dark version
                    </span>
                  </Typography>
                }
              />
            </GridItem>
          </GridContainer>
          <ShowcaseTiles tilesData={tilesData2} />
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
