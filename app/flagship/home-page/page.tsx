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
  Hero,
  Instagram,
  Ireland,
  Italy,
  LanguageSelector,
  Location,
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
  TapLight,
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
import CategoryTiles from '@components/landingPage/categoryTiles/categoryTiles'
import useScreenSize from '@utils/useScreenSize'

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

export default function Home() {
  const screenSize = useScreenSize()

  return (
    <>
      <main className={styles.hp}>
        <Header
          advisor={
            <AdvisorDropdown buttonLabel="Advisor">
              <AdvisorDropdownMenuItem
                avatar={
                  <img alt="avatar" src="/library/images/avatars/avatar2.png" />
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
          landingPageLogo={
            <Link href="/">
              <Vorwerk className={styles.vorwerkLogo} />
            </Link>
          }
          backgroundType="blackGradient"
          stickyMode="normal"
        />
        <div className={styles.hero}>
          <Hero
            cta={
              <ButtonGroup alignment="center" layout="vertical">
                <Button invertColors size="medium" type="primary">
                  Book a Cooking Experience
                </Button>
                <Button invertColors size="medium" type="tertiary">
                  Learn more
                </Button>
              </ButtonGroup>
            }
            headline={
              <Headline strongColor="yellow" subline="Prepare the perfect meal">
                <Typography component="h1">
                  <span
                    dangerouslySetInnerHTML={{
                      __html:
                        '<strong>More time</strong><br/>doing the things<br/>you love',
                    }}
                  />
                </Typography>
              </Headline>
            }
            image={
              <img
                alt="Woman meditating"
                src="/landingPage/hero/hero-home-page.png"
              />
            }
          />
          <div className={styles.overlayIconWrapper}>
            {screenSize.width > 935 ? (
              <img
                src={'/landingPage/hero/mouse.svg'}
                alt={'Scroll down'}
                className={styles.overlayIcon}
              />
            ) : (
              <TapLight />
            )}
            <div className={styles.overlayIconText}>
              <Typography variant="paragraph14" fontWeight="medium">
                <span>
                  {screenSize.width > 935 ? 'Scroll down' : 'Swipe up'}
                </span>
              </Typography>
            </div>
          </div>
        </div>
        <section className={styles.defaultSection}>
          <GridContainer>
            <GridItem columns={12} className={styles.textCentered}>
              <Headline
                spaceBelow="additional"
                strongColor="green"
                children={
                  <Typography component="h2">
                    <span>
                      Thermomix® TM6
                      <br />
                      <strong>makes it possible</strong>
                    </span>
                  </Typography>
                }
              />
            </GridItem>
          </GridContainer>
          <div className={styles.contentAndCategoryContainer}>
            <ContentBlock
              buttonGroup={
                <ButtonGroup>
                  <Link href="#">
                    <Button size="large" type="primary">
                      Book a demo
                    </Button>
                  </Link>
                  <Link href="#">
                    <Button size="large" type="secondary">
                      Buy now
                    </Button>
                  </Link>
                </ButtonGroup>
              }
              mediaAlignment="left"
              media={
                <img
                  src="/landingPage/contentBlock/couple-eating.png"
                  alt="Couple eating"
                />
              }
              headline={
                <Headline spaceBelow="default">
                  <Typography component="h3" fontWeight="bold">
                    Time to enjoy together!
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
                  Discover the Thermomix® TM6 and see how it can help you
                  create showstopping dishes and delicious meals from scratch
                  whilst saving you time and money. For everyday inspiration,
                  choose from thousands of dishes on Cookidoo®, our very own
                  smart recipe platform.
                </Typography>
              }
            />
            <CategoryTiles
              categoryTilesData={[
                {
                  size: 'large',
                  backgroundColor: 'grey',
                  imageProps: {
                    src: '/landingPage/hero/ds360-hero.png',
                    alt: 'Thermomix DS360',
                  },
                  title: 'Thermomix® TM6 starter pack',
                  button: {
                    label: 'Explore the product',
                    size: screenSize.width > 935 ? 'large' : 'medium',
                  },
                },
                {
                  size: 'large',
                  backgroundImageSrc: '/landingPage/categoryTile/soup.png',
                  title: 'Thousands of recipes – Endless inspiration',
                  button: {
                    label: 'Join Cookidoo® for free',
                    size: screenSize.width > 935 ? 'large' : 'medium',
                  },
                },
              ]}
            />
          </div>
        </section>
        <section className={styles.prominentSection}>
          <div className={styles.headlineAndContentContainer}>
            <GridContainer>
              <GridItem
                columns={12}
                className={`${styles.textCentered} ${styles.overwrittenMargin}`}
              >
                <Headline
                  spaceBelow="additional"
                  strongColor="orange"
                  children={
                    <Typography component="h2">
                      <span>
                        Kobold VK7s always
                        <br />
                        clean, <strong>always simple</strong>
                      </span>
                    </Typography>
                  }
                />
              </GridItem>
            </GridContainer>
            <div className={styles.contentAndCategoryContainer}>
              <ContentBlock
                mediaAlignment="right"
                media={
                  <img
                    src="/landingPage/hero/hero-home-page.png"
                    alt="Woman meditating"
                  />
                }
                headline={
                  <Headline spaceBelow="default">
                    <Typography component="h3" fontWeight="bold">
                      The cordless and flexible choice for your home
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
                    Whatever your home situation, the VB100 system brings the
                    grab and go flexibility you need. With this lightweight,
                    quiet, all-in-one solution, you can vacuum and mop
                    simultaneously…and that’s not all. Thanks to its broad range
                    of attachments, it also cleans carpets, hard floors and
                    mattresses thoroughly and efficiently.
                  </Typography>
                }
                buttonGroup={
                  <ButtonGroup>
                    <Link href="#">
                      <Button size="large" type="primary">
                        Book a demo
                      </Button>
                    </Link>
                    <Link href="#">
                      <Button size="large" type="secondary">
                        Buy now
                      </Button>
                    </Link>
                  </ButtonGroup>
                }
              />
              <CategoryTiles
                categoryTilesData={[
                  {
                    size: 'large',
                    backgroundImageSrc:
                      '/landingPage/categoryTile/kobold-vk7.png',
                    title: 'New Kobold VK7s – more powerful than ever',
                    button: {
                      label: 'Explore the product',
                      size: screenSize.width > 935 ? 'large' : 'medium',
                    },
                  },
                  {
                    size: 'large',
                    backgroundColor: 'white',
                    imageProps: {
                      src: '/landingPage/categoryTile/kobold.png',
                      alt: 'Kobold',
                    },
                    title: 'The Kobold evolution arrived. Put us to the test',
                    button: {
                      label: 'Book a demo',
                      size: screenSize.width > 935 ? 'large' : 'medium',
                    },
                    eyeCatcherProps: {
                      firstLine: 'Only until',
                      secondLine: '25.12.23',
                      backgroundColor: 'purple',
                      size: 'small',
                    },
                  },
                ]}
              />
            </div>
          </div>
        </section>
        <section className={styles.defaultSection}>
          <GridContainer>
            <GridItem columns={12} className={styles.textCentered}>
              <Headline
                spaceBelow="additional"
                strongColor="blue"
                children={
                  <Typography component="h2">
                    <span>
                      Vorwerk Advisor,
                      <br />
                      a unique opportunity to
                      <br />
                      <strong> join our sales force</strong>
                    </span>
                  </Typography>
                }
              />
            </GridItem>
          </GridContainer>
          <div className={styles.contentAndCategoryContainer}>
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
            />
            <ContentBlock
              mediaAlignment="right"
              media={
                <img
                  src="/landingPage/contentBlock/kobold-advisor.png"
                  alt="Kobold advisor"
                />
              }
              headline={
                <Headline spaceBelow="default">
                  <Typography component="h3" fontWeight="bold">
                    Turn your passion into a career with Kobold
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
            />
          </div>
        </section>
      </main>
      <footer>
        <div className={styles.overriddenProductStripeGap}>
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
          <div className={styles.overriddenFooterSocialLinks}>
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
              <div className={styles.overriddenLanguageSelector}>
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
