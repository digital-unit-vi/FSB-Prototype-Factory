'use client'

import {
  AdvisorDropdown,
  AdvisorDropdownMenuItem,
  AdvisorUnassigned,
  Austria,
  Button,
  ButtonGroup,
  Canada,
  ContentBlock,
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
  HeaderButton,
  Headline,
  Instagram,
  Ireland,
  Italy,
  LanguageSelector,
  Location,
  MediaContainer,
  Menu,
  Mexico,
  NavItem,
  NewsletterSubscription,
  Pinterest,
  Poland,
  Portugal,
  ProductStripe,
  Rezeptwelt,
  Search,
  SectionSeparator,
  ShoppingCart,
  Spain,
  Switzerland,
  Taiwan,
  Turkey,
  Typography,
  UK,
  USA,
  User,
  Vorwerk,
  Youtube,
} from '@components/build-assets/libraryExport'
import Link from 'next/link'
import styles from './page.module.scss'
import Rating from '@components/landingPage/rating/rating'
import List from '@components/landingPage/list/list'
import ImageGallery from '@components/landingPage/imageGallery/imageGallery'
import AdvisorTile from '@components/landingPage/advisorTile/advisorTile'
import useScreenSize from '@utils/useScreenSize'
import CategoryTiles from '@components/landingPage/categoryTiles/categoryTiles'
import CategoryTile from '@components/landingPage/categoryTile/categoryTile'
import GalleryModalCarousel from '@components/landingPage/galleryModalCarousel/galleryModalCarousel'
import ProductHeroAEM from '@components/landingPage/productHeroAEM/productHeroAEM'
import { GalleryItem } from '@components/landingPage/gallery/gallery'

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
]

const imagesCarousel = [
  <img
    key="image1"
    src="/landingPage/hero/ds360-hero.png"
    alt="Thermomix DS360"
  />,
  <img
    key="image2"
    src="/landingPage/carousel/pdp-2.png"
    alt="Thermomix right side"
  />,
  <img
    key="image3"
    src="/landingPage/carousel/pdp-3.png"
    alt="Thermomix back side"
  />,
  <img
    key="image4"
    src="/landingPage/carousel/pdp-4.png"
    alt="Thermomix left side"
  />,
]

const imagesForThumbnails: GalleryItem[] = [
  {
    type: 'image',
    url: '/landingPage/hero/ds360-hero.png',
    alt: 'DS360',
    title: 'DS360'
  },
  {
    type: 'image',
    url: '/landingPage/carousel/pdp-aem-2.png',
    alt: 'DS360 right side',
    title: 'DS360 right side'
  },
  {
    type: 'image',
    url: '/landingPage/carousel/pdp-aem-3.png',
    alt: 'DS360 left side',
    title: 'DS360 left side'
  },
  {
    type: 'image',
    url: '/landingPage/carousel/pdp-aem-4.png',
    alt: 'DS360 back side',
    title: 'DS360 back side'
  }
]

const categoryTilesAssets = [
  <CategoryTile
    size={'small'}
    backgroundColor={'grey'}
    imageProps={{
      src: '/library/images/thermomix-friend.png',
      alt: 'Thermomix Friend',
    }}
    title={'Thermomix Friend®'}
    key={'Thermomix Friend®'}
  />,
  <CategoryTile
    size={'small'}
    backgroundColor={'grey'}
    imageProps={{
      src: '/landingPage/categoryTile/accessories.png',
      alt: 'Accessories',
    }}
    title={'Accessories'}
    key={'Accessories'}
  />,
  <CategoryTile
    size={'small'}
    brandColor={'#23282A'}
    imageProps={{
      src: '/library/images/tm6.png',
      alt: 'TM6',
    }}
    title={'Special offers'}
    key={'TM6'}
  />,
]

export default function Home() {
  const screenSize = useScreenSize()

  return (
    <>
      <main className={styles.productDetailPageAem}>
        <div className={styles.headerAndHeroSection}>
          <Header
            advisor={
              <AdvisorDropdown buttonLabel="Advisor">
                <AdvisorDropdownMenuItem
                  avatar={
                    <img
                      alt="avatar"
                      src="library/images/avatars/avatar2.png"
                    />
                  }
                  href="#"
                  labels={
                    <>
                      <Typography
                        component="p"
                        fontWeight="medium"
                        variant="paragraph16"
                      >
                        Lisa Neureuther
                      </Typography>
                      <Typography
                        component="p"
                        fontWeight="medium"
                        variant="paragraph14"
                      >
                        Thermomix® Advisor
                      </Typography>
                    </>
                  }
                  type="advisor"
                />
                <AdvisorDropdownMenuItem
                  href="#"
                  icon={<AdvisorUnassigned />}
                  labels={
                    <Typography
                      component="p"
                      fontWeight="medium"
                      variant="paragraph16"
                    >
                      Kobold Advisor
                    </Typography>
                  }
                />
                <SectionSeparator />
                <AdvisorDropdownMenuItem
                  href="#"
                  icon={<Location />}
                  labels={
                    <Typography
                      component="p"
                      fontWeight="medium"
                      variant="paragraph16"
                    >
                      Find your Vorwerk store
                    </Typography>
                  }
                />
              </AdvisorDropdown>
            }
            cart={
              <HeaderButton count={2} label="Cart">
                <ShoppingCart />
              </HeaderButton>
            }
            logo={
              <Link href="/">
                <Vorwerk />
              </Link>
            }
            menu={
              <HeaderButton label="Menu">
                <Menu />
              </HeaderButton>
            }
            mobileAccountButton={
              <Button icon={<User />} size="large" type="transparent">
                Login
              </Button>
            }
            navigation={[
              <NavItem
                key="Products"
                href="#"
                label="Products"
                level={1}
                navItems={[
                  <NavItem
                    href="#"
                    label="Thermomix®"
                    level={2}
                    navItems={[
                      <NavItem href="#" label="Overview" level={3} />,
                      <NavItem href="#" label="Thermomix® TM6" level={3} />,
                      <NavItem href="#" label="Accessories" level={3} />,
                      <NavItem href="#" label="Specials" level={3} />,
                      <NavItem href="#" label="Spare Parts" level={3} />,
                      <NavItem href="#" label="Cookbooks" level={3} />,
                      <NavItem href="#" label="Current offers" level={3} />,
                    ]}
                  />,
                  <NavItem href="#" label="Kobold" level={2} />,
                  <NavItem href="#" label="E-shop" level={2} />,
                ]}
              />,
              <NavItem
                key="Product Demo"
                href="#"
                label="Product Demo"
                level={1}
              />,
              <NavItem
                key="Recipes and Ideas"
                href="#"
                label="Recipes and Ideas"
                level={1}
                navItems={[
                  <NavItem
                    href="#"
                    label="colunm 1"
                    level={2}
                    navItems={[
                      <NavItem href="col1-1" label="col1-1" level={3} />,
                      <NavItem href="col1-2" label="col1-2" level={3} />,
                      <NavItem href="col1-3" label="col1-3" level={3} />,
                    ]}
                  />,
                  <NavItem href="#" label="colunm 2" level={2} />,
                ]}
              />,
              <NavItem
                key="Support"
                href="#"
                label="Support"
                level={1}
                navItems={[
                  <NavItem
                    href="#"
                    label="colunm 1"
                    level={2}
                    navItems={[
                      <NavItem href="col1-1" label="col1-1" level={3} />,
                      <NavItem href="col1-2" label="col1-2" level={3} />,
                      <NavItem href="col1-3" label="col1-3" level={3} />,
                    ]}
                  />,
                ]}
              />,
              <NavItem key="Career" href="#" label="Career" level={1} />,
              <NavItem key="E-shop" href="#" label="E-shop" level={1} />,
            ]}
            search={
              <HeaderButton label="Search">
                <Search />
              </HeaderButton>
            }
            backgroundType="transparent"
            stickyMode="normal"
          />
          <ProductHeroAEM screenSize={screenSize} imagesForImageGallery={imagesCarousel} imagesForThumbnails={imagesForThumbnails} />
        </div>
        <section className={styles.prominentSection}>
          <GridContainer>
            <GridItem
              columns={12}
              className={`${styles.overwrittenMargin} ${styles.textCentered}`}
            >
              <Headline spaceBelow={'additional'} strongColor={'green'}>
                <Typography component={'h2'}>
                  The world’s
                  <br />
                  <strong> smartest kitchen</strong> – 
                  <br />
                   Thermomix® TM6
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <div className={styles.tilesContainer}>
            <GridContainer>
              <GridItem columns={12}>
                <ImageGallery
                  slides={categoryTilesAssets}
                  options={{ loop: false, align: 'start' }}
                  screenSizes={screenSize}
                  containerWidth={{
                    large: 704,
                    extraLarge: 1120,
                    extraExtraLarge: 1440,
                  }}
                  noControl={true}
                />
              </GridItem>
            </GridContainer>
            <div className={styles.overwrittenGap}>
              <CategoryTiles
                categoryTilesData={[
                  {
                    size: 'large',
                    backgroundColor: 'grey',
                    imageProps: {
                      src: '/landingPage/categoryTile/cooking-books.png',
                      alt: 'Cooking books',
                    },
                    title: 'Cooking books',
                    button: {
                      label: 'Explore more',
                      size: screenSize.width > 936 ? 'large' : 'medium',
                    },
                  },
                  {
                    size: 'large',
                    backgroundImageSrc: '/landingPage/categoryTile/soup.png',
                    title: 'Thousands of recipes – Endless inspiration',
                    button: {
                      label: 'Join Cookidoo® for free',
                      size: screenSize.width > 936 ? 'large' : 'medium',
                    },
                  },
                ]}
              />
            </div>
          </div>
        </section>
        <section className={`${styles.prominentSection} ${styles.sectionWithRadius}`}>
          <GridContainer>
            <GridItem
              columns={12}
              className={`${styles.overwrittenMargin} ${styles.textCentered}`}
            >
              <Headline spaceBelow={'additional'} strongColor={'green'}>
                <Typography component={'h2'}>
                  Introducing the
                  <br />
                  <strong> Thermomix® TM6</strong>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <div className={styles.overwrittenRowGap}>
          <GridContainer>
            <GridItem columns={12}>
              <MediaContainer aspectRatio={'16/9'}>
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  frameBorder="0"
                  height="315"
                  src="https://www.youtube.com/embed/VDjQvbJ-YRo?si=XmRtpNB3nJzt04CP"
                  title="YouTube video player"
                  width="560"
                />
              </MediaContainer>
            </GridItem>
            <GridItem columns={12} columnsL={8} startL={3} endL={11}>
                <div className={styles.textBlockContainer}>
                  <Typography variant={screenSize.width > 1267 ? 'paragraph18' : 'paragraph16'} fontWeight={"regular"}>
                  This all-in-one kitchen appliance embodies versatility with over
                20 different functions and modes, all in one sleek compact
                machine. From meal planning, to ingredient shopping, to cooking,
                the TM6 has your back so you can seamlessly create the perfect
                meal, every time.
                  </Typography>
                  <ButtonGroup>
                <Link href="#">
                  <Button size="large" type="primary">
                    Book a demo
                  </Button>
                </Link>
                <Link href="#">
                  <Button size="large" type="tertiary">
                    Learn more
                  </Button>
                </Link>
              </ButtonGroup>
                </div>
            </GridItem>
          </GridContainer>
          </div>
        </section>
        <section className={styles.prominentSection}>
          <GridContainer>
            <GridItem
              columns={12}
              className={`${styles.textCentered} ${styles.overwrittenMargin}`}
            >
              <Headline spaceBelow={'additional'} strongColor={'blue'}>
                <Typography component={'h2'}>
                  Vorwerk Advisor -
                  <br />
                  <strong> join our sales force</strong>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <ContentBlock
            mediaAlignment="left"
            media={
              <img
                src="/landingPage/contentBlock/thermomix-team.png"
                alt="Woman eating sushi"
              />
            }
            headline={
              <Headline spaceBelow="default">
                <Typography component="h3" fontWeight="bold">
                  Turn your passion into a career with Thermomix®
                </Typography>
              </Headline>
            }
            paragraph={
              <Typography
                fontWeight="regular"
                variant={
                  screenSize.width > 1267 ? 'paragraph18' : 'paragraph16'
                }
              >
                Whatever your home situation, the VB100 system brings the grab
                and go flexibility you need. With this lightweight, quiet,
                all-in-one solution, you can vacuum and mop simultaneously…and
                that’s not all. Thanks to its broad range of attachments, it
                also cleans carpets, hard floors and mattresses thoroughly and
                efficiently.
              </Typography>
            }
            buttonGroup={
              <ButtonGroup>
                <Link href="#">
                  <Button size="large" type="primary">
                    Join the Thermomix® team
                  </Button>
                </Link>
                <Link href="#">
                  <Button size="large" type="secondary">
                    Details
                  </Button>
                </Link>
              </ButtonGroup>
            }
          ></ContentBlock>
        </section>
      </main>
      <footer>
        <div className={styles.overwrittenProductStripeGap}>
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
                src="/library/images/footer/vr7.png"
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
        </div>
        <FooterSection variant="spacingVertical" borderBottom={true}>
          <NewsletterSubscription
            headline={
              <Headline
                children={
                  <Typography component="h2">
                    Stay {screenSize.width > 935 && <br />}
                    <strong>informed</strong>
                  </Typography>
                }
              />
            }
            button={
              <Button type="primary" size="large">
                Subscribe to newsletter
              </Button>
            }
          />
        </FooterSection>
        <FooterSection variant="spacingVertical">
          <FooterLinks>
            <FooterLinksBlock
              header={
                <Typography variant="paragraph18" fontWeight="bold">
                  Get in Touch
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
          <div className={styles.overwrittenFooterSocialLinks}>
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
              <div className={styles.overwrittenLanguageSelector}>
                <LanguageSelector
                  title={
                    <Typography variant="paragraph18" fontWeight="bold">
                      Country
                    </Typography>
                  }
                  buttonLabel="United Kingdom"
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
              </div>
            </FooterSocialLinks>
          </div>
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
  )
}
