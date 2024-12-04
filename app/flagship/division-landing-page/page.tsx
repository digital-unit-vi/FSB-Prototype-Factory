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
import ImageTileCarousel from '@components/landingPage/imageTileCarousel/imageTileCarousel'
import ImageGallery from '@components/landingPage/imageGallery/imageGallery'
import ImageTile from '@components/landingPage/imageTile/imageTile'
import TeaserTile from '@components/landingPage/teaserTile/teaserTile'

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
      <main className={styles.dlp}>
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
              <Headline strongColor="yellow">
                <Typography component="h1">
                  Thermomix®
                  <br />
                  <strong>Fast. Easy. Flawless.</strong>
                </Typography>
              </Headline>
            }
            image={
              <img
                alt="Food lifestyle"
                src="/landingPage/hero/thermomix-food-lifestyle.png"
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
        <section className={styles.prominentSection}>
          <GridContainer>
            <GridItem
              columns={12}
              className={`${styles.textCentered} ${styles.overwrittenMargin}`}
            >
              <Headline spaceBelow={'additional'} strongColor={'green'}>
                <Typography component={'h2'}>
                  The new
                  <br />
                  <strong> standard of cooking</strong>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <div className={styles.containerContentBlock}>
            <CategoryTiles
              categoryTilesData={[
                {
                  size: 'medium',
                  title: 'Thermomix® TM6',
                  layout: 'horizontal',
                  backgroundColor: 'grey',
                  imageProps: {
                    src: '/landingPage/categoryTile/thermomix.png',
                    alt: 'Thermomix',
                  },
                  button: {
                    label: 'Explore more',
                    size: 'small',
                  },
                },
                {
                  size: 'medium',
                  title: 'Accessories',
                  layout: 'horizontal',
                  backgroundColor: 'grey',
                  imageProps: {
                    src: '/landingPage/categoryTile/accessories.png',
                    alt: 'Thermomix accessories',
                  },
                  button: {
                    label: 'Explore more',
                    size: 'small',
                  },
                },
              ]}
            />
            <ContentBlock
              mediaAlignment={screenSize.width > 935 ? 'right' : undefined}
              media={
                <img
                  src="/landingPage/contentBlock/content-2.png"
                  alt="Dinner party"
                />
              }
              headline={
                <Headline spaceBelow={'default'}>
                  <Typography component={'h3'} fontWeight={'bold'}>
                    It's never been so easy
                  </Typography>
                </Headline>
              }
              paragraph={
                <Typography
                  variant={`paragraph${screenSize.width > 1267 ? '18' : '16'}`}
                  fontWeight={'regular'}
                >
                  Do you love kitchen classics or do you like to try out the
                  latest food trends? Do you pay particular attention to
                  healthy, balanced food? No matter what your personal cooking
                  preferences are - with Thermomix® you'll find the answer.
                  Simply
                </Typography>
              }
              buttonGroup={
                <ButtonGroup
                  layout={'horizontal'}
                  alignment={'left'}
                  sizing={'hug'}
                >
                  <Button type={'primary'} size={'large'}>
                    Book a demo
                  </Button>
                  <Button type={'secondary'} size={'large'}>
                    Details
                  </Button>
                </ButtonGroup>
              }
            />
            <CategoryTiles
              categoryTilesData={[
                {
                  size: 'large',
                  backgroundImageSrc:
                    '/landingPage/categoryTile/serving-chocolate-mousse-cropped.png',
                  title: 'Request Cooking Experience',
                  button: {
                    label: 'Book a demo',
                    size: 'medium',
                  },
                },
                {
                  size: 'large',
                  imageProps: {
                    src: '/landingPage/categoryTile/tm-specials.png',
                    alt: 'Thermomix specials',
                  },
                  backgroundColor: 'grey',
                  title: 'No gift idea yet? Discover the Thermomix® Specials',
                  button: {
                    label: 'Explore more',
                    size: 'medium',
                  },
                },
              ]}
            />
            <ContentBlock
              mediaAlignment={screenSize.width > 935 ? 'left' : undefined}
              media={
                <img
                  src="/landingPage/contentBlock/child-drinking.png"
                  alt="Child drinking milk"
                />
              }
              headline={
                <Headline spaceBelow={'default'}>
                  <Typography component={'h3'} fontWeight={'bold'}>
                    Done with love for the your beloved ones
                  </Typography>
                </Headline>
              }
              paragraph={
                <Typography
                  variant={`paragraph${screenSize.width > 1267 ? '18' : '16'}`}
                  fontWeight={'regular'}
                >
                  With delicious recipes and a little planning ahead, you can
                  not only save money and time, but also treat yourself and your
                  loved ones to freshly cooked and healthy food.
                </Typography>
              }
              buttonGroup={
                <Button type={'primary'} size={'large'}>
                  Explore the Thermomix®
                </Button>
              }
            />
          </div>
        </section>
        <ImageTileCarousel
          slides={[
            <ImageTile
              key={'image-1'}
              imageSrc={'/landingPage/imageTileCarousel/lasagne.png'}
              title={'Lasagne bolognese'}
              aspectRatio={'3/4'}
              width={104}
            />,
            <ImageTile
              key={'image-2'}
              imageSrc={'/landingPage/imageTileCarousel/dalgona-coffee.png'}
              title={'Dalgona Coffee'}
              aspectRatio={'1/1'}
              width={104}
            />,
            <ImageTile
              key={'image-3'}
              imageSrc={'/landingPage/imageTileCarousel/veggie-kebab.png'}
              title={'Vegetable kebab'}
              aspectRatio={'1/1'}
              width={224}
            />,
            <ImageTile
              key={'image-4'}
              imageSrc={'/landingPage/imageTileCarousel/red-salsa.png'}
              title={'Salsa roja'}
              aspectRatio={'4/3'}
              width={164}
            />,
            <ImageTile
              key={'image-5'}
              imageSrc={'/landingPage/carousel/result-10.jpg'}
              title={'Sourdough bread'}
              aspectRatio={'1/1'}
              width={164}
            />,
            <ImageTile
              key={'image-6'}
              imageSrc={
                '/landingPage/imageTileCarousel/orange-ginger-juice.png'
              }
              title={'Orange ginger juice'}
              aspectRatio={'1/1'}
              width={104}
            />,
          ]}
          screenSize={screenSize}
        />
        <section className={styles.prominentSection}>
          <GridContainer>
            <GridItem
              columns={12}
              className={`${styles.textCentered} ${styles.overwrittenMargin}`}
            >
              <Headline spaceBelow={'additional'} strongColor={'green'}>
                <Typography component={'h2'}>
                  One device –
                  <br />
                  <strong> Endless possibilities</strong>
                </Typography>
              </Headline>
              <div className={styles.containerVideoParagraph}>
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
                <Typography variant={'paragraph16'} fontWeight={'regular'}>
                  Due to a very rare occurrence of a problem when using the
                  Thermomix® TM6 measuring cup, we have released a new version
                  of the TM6 and TM5 software. In Cookidoo®, all recipes
                  involved have been updated so that they are available to you
                  in Guided Cooking with additional safety instructions. Your
                  Thermomix® device will guide you step by step during the
                  cooking process and instruct you on which cover to use for the
                  hole in your mixing bowl lid depending on your preparation or
                  selected cooking function.
                </Typography>
              </div>
            </GridItem>
          </GridContainer>
        </section>
        <ContentBlock
          layout={'fullWidth'}
          media={
            <img
              src="/landingPage/contentBlock/dinner-party.png"
              alt="Dinner party"
            />
          }
          headline={
            <Headline strongColor={'red'} spaceBelow={'default'}>
              <Typography component={'h3'} variant={"h2"}>
                Try the
                <br />
                Thermomix® –
                <br />
                <strong> Book a demo</strong>
              </Typography>
            </Headline>
          }
          paragraph={
            <Typography variant={'paragraph16'} fontWeight={'regular'}>
              Simply decide together with your personal contact whether you
              would like to experience the products live or online! We are
              flexible and well prepared and can fully respond to your wishes.
            </Typography>
          }
          buttonGroup={
            <Button type={'primary'} size={'large'}>
              Get in touch with an advisor
            </Button>
          }
        />
        <section className={styles.prominentSection}>
          <GridContainer>
            <GridItem
              columns={12}
              className={`${styles.textCentered} ${styles.overwrittenMargin}`}
            >
              <Headline spaceBelow={'additional'} strongColor={'purple'}>
                <Typography component={'h2'}>
                  <strong>Back in shape</strong>
                  <br />
                  with Thermomix®
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <CategoryTiles
            categoryTilesData={[
              {
                size: 'large',
                backgroundImageSrc:
                  '/landingPage/categoryTile/avocado-toast.png',
                title: 'The slightly different breakfast',
                button: {
                  label: 'Button',
                  size: 'medium',
                },
              },
              {
                size: 'large',
                backgroundImageSrc: '/landingPage/categoryTile/guacamole.png',
                title: 'Yes, you can!',
                button: {
                  label: 'Button',
                  size: 'medium',
                },
              },
            ]}
          />
        </section>
        <section
          className={styles.prominentSection}
          style={{ backgroundColor: '#F3F5F3' }}
        >
          <ContentBlock
            mediaAlignment={'right'}
            media={
              <img
                src="/landingPage/contentBlock/thermomix-with-knife-cover.png"
                alt="Thermomix with knife cover"
              />
            }
            headline={
              <Headline spaceBelow={'default'}>
                <Typography component={'h3'} fontWeight={'bold'}>
                  Operating and safety instructions
                </Typography>
              </Headline>
            }
            paragraph={
              <Typography variant={'paragraph16'} fontWeight={'regular'}>
                Due to a very rare occurrence of a problem when using the
                Thermomix® TM6 measuring cup, we have released a new version of
                the TM6 and TM5 software. In Cookidoo®, all recipes involved
                have been updated so that they are available to you in Guided
                Cooking with additional safety instructions. Your Thermomix®
                device will guide you step by step during the cooking process
                and instruct you on which cover to use for the hole in your
                mixing bowl lid depending on your preparation or selected
                cooking function.
              </Typography>
            }
            buttonGroup={
              <Button type={'primary'} size={'large'}>
                Learn more
              </Button>
            }
          />
        </section>
        <section className={styles.prominentSection}>
          <GridContainer>
            <GridItem
              columns={12}
              className={`${styles.textCentered} ${styles.overwrittenMargin}`}
            >
              <Headline spaceBelow={'additional'} strongColor={'green'}>
                <Typography component={'h2'}>
                  You may also
                  <br />
                  <strong>be interested in</strong>
                </Typography>
              </Headline>
              <ImageGallery
                slides={[
                  <TeaserTile
                    key={'tile1'}
                    title={'Our current Thermomix® offers'}
                    paragraph={
                      'Receive in addition to the Thermomix® TM6 including versatile accessories and the Thermomix® guarantee'
                    }
                    imageProps={{
                      src: '/landingPage/teaserTile/thermomix-black.png',
                      alt: 'Thermomix',
                    }}
                    buttonLabel={'Register Online'}
                  />,
                  <TeaserTile
                    key={'tile2'}
                    title={'Thermomix Friend®'}
                    paragraph={
                      'The accessory for your Thermomix® that provides even more cooking convenience and flexibility'
                    }
                    imageProps={{
                      src: '/landingPage/teaserTile/thermomix-friend.png',
                      alt: 'Thermomix Friend',
                    }}
                    buttonLabel={'Register Online'}
                  />,
                  <TeaserTile
                    key={'tile3'}
                    title={'Cooking shows in the Vorwerk Stores '}
                    paragraph={
                      'You would like to finally get to know Thermomix® TM6 in person?'
                    }
                    imageProps={{
                      src: '/landingPage/teaserTile/thermomix-cooking.png',
                      alt: 'Thermomix Cooking',
                    }}
                    buttonLabel={'Register Online'}
                  />,
                ]}
                screenSizes={screenSize}
                noControl
                imageTile
                options={{ loop: false }}
              />
            </GridItem>
          </GridContainer>
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
