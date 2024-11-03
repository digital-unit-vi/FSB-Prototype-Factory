"use client";

import ShowcaseTiles from "@components/landingPage/showcaseTiles/showcaseTiles";
import HeroCoverImg from "@public/landingPage/hero/ds360-hero.png";
import ProductStripe1Img from "@public/library/images/footer/product-stripe-1.png";
import ProductStripe2Img from "@public/library/images/footer/product-stripe-2.png";
import ProductStripe3Img from "@public/library/images/footer/product-stripe-3.png";
import ProductStripe4Img from "@public/library/images/footer/product-stripe-4.png";
import ProductStripe5Img from "@public/library/images/footer/product-stripe-5.png";
import ProductStripe6Img from "@public/library/images/footer/product-stripe-6.png";
import ProductStripe7Img from "@public/library/images/footer/product-stripe-7.png";
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
} from "@vorwerk/fibre-react";
import Image from "next/image";
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
            image={<Image src={HeroCoverImg} alt="DS360 hero" quality={90} />}
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
            <Image src={ProductStripe1Img} alt="product stripe 1" key={1} />,
            <Image src={ProductStripe2Img} alt="product stripe 2" key={2} />,
            <Image src={ProductStripe3Img} alt="product stripe 3" key={3} />,
            <Image src={ProductStripe4Img} alt="product stripe 4" key={4} />,
            <Image src={ProductStripe5Img} alt="product stripe 5" key={5} />,
            <Image src={ProductStripe6Img} alt="product stripe 6" key={6} />,
            <Image src={ProductStripe7Img} alt="product stripe 7" key={7} />,
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
                  <Link href="#contact">Contact us</Link>
                </Typography>,
                <Typography variant="paragraph16">
                  <Link href="#support">Vorwerk Support Center</Link>
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
                  <Link href="#experience-live">Experience live</Link>
                </Typography>,
                <Typography variant="paragraph16">
                  <Link href="#vorwerk-stores">Vorwerk Stores</Link>
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
                  <Link href="#paymentmethods">Payment methods</Link>
                </Typography>,
                <Typography variant="paragraph16">
                  <Link href="#shipping-delivery">Shipping & delivery</Link>
                </Typography>,
                <Typography variant="paragraph16">
                  <Link href="#security">Security</Link>
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
                <Link href="#facebook">
                  <Facebook />
                </Link>,
                <Link href="#instagram">
                  <Instagram />
                </Link>,
                <Link href="#pinterest">
                  <Pinterest />
                </Link>,
                <Link href="#youtube">
                  <Youtube />
                </Link>,
                <Link href="#receptwelt">
                  <Rezeptwelt />
                </Link>,
              ]}
            />
            <FooterSocialLinkBlock
              header={
                <Typography variant="paragraph18" fontWeight="bold">
                  Kobold
                </Typography>
              }
              links={[
                <Link href="#facebook">
                  <Facebook />
                </Link>,
                <Link href="#instagram">
                  <Instagram />
                </Link>,
                <Link href="#pinterest">
                  <Pinterest />
                </Link>,
                <Link href="#youtube">
                  <Youtube />
                </Link>,
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
                  <Link href="#about-us">About us</Link>
                </Typography>
              </li>

              <li>
                <Typography variant="paragraph12">
                  <Link href="#press">Press</Link>
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph12">
                  <Link href="#privacy">Privacy</Link>
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph12">
                  <Link href="#imprint">Imprint</Link>
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph12">
                  <Link href="#cookies">Cookies</Link>
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph12">
                  <Link href="#terms">Terms of service</Link>
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph12">
                  <Link href="#cancellation">Cancellation</Link>
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph12">
                  <Link href="#disposal">
                    Disposal of batteries & old devices
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph12">
                  <Link href="#mandatory">Mandatory information</Link>
                </Typography>
              </li>
            </ul>
          </FooterSmallLinks>
        </FooterSection>
      </footer>
    </>
  );
}
