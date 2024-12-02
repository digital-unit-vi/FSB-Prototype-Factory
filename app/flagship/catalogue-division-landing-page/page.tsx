'use client'

import {
  AdvisorDropdown,
  AdvisorDropdownMenuItem,
  AdvisorUnassigned,
  Austria,
  Button,
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
  HeaderButton,
  Headline,
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
import ImageGallery from '@components/landingPage/imageGallery/imageGallery'
import MenuTile from '@components/landingPage/menuTile/menuTile'
import ProductTileNew from '@components/landingPage/productTileNew/productTileNew'

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
  const productTileAssets = [
    <ProductTileNew
      key={'Baguette Sheet'}
      productImageSrc={'/landingPage/productTile/baguette-sheet.png'}
      heading={'Thermomix® Baguette Sheet'}
      price={{
        price: '19,00 €',
      }}
      screenSizes={screenSize}
      color={'grey'}
    />,
    <ProductTileNew
      key={'Pizza Cutter'}
      productImageSrc={'/landingPage/productTile/pizza-cutter.png'}
      heading={'Thermomix® Pizza Cutter'}
      price={{
        price: '19,90 €',
      }}
      screenSizes={screenSize}
      color={'grey'}
    />,
    <ProductTileNew
      key={'Dough Roll'}
      productImageSrc={'/landingPage/productTile/dough-roll.png'}
      heading={'Thermomix® Dough Roll'}
      price={{
        price: '25,00 €',
      }}
      screenSizes={screenSize}
      color={'grey'}
    />,
  ]

  return (
    <>
      <main className={styles.cdlp}>
        <Header
          advisor={
            <AdvisorDropdown buttonLabel="Advisor">
              <AdvisorDropdownMenuItem
                avatar={
                  <img alt="avatar" src="library/images/avatars/avatar2.png" />
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
          backgroundType="transparent"
          stickyMode="normal"
        />
        <section className={styles.topSection}>
          <GridContainer>
            <GridItem columns={12} className={styles.textCentered}>
              <Headline spaceBelow={'additional'} strongColor={'green'}>
                <Typography component={'h1'}>
                  Thermomix® <strong>shop</strong>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem columns={12}>
              <ImageGallery
                slides={[
                  <MenuTile
                    key={'menu1'}
                    type={'category'}
                    label={'Thermomix® TM6'}
                    imageProps={{
                      src: '/landingPage/menuTile/thermomix.png',
                      alt: 'Thermomix',
                    }}
                  />,
                  <MenuTile
                    key={'menu2'}
                    type={'category'}
                    label={'Cooking books'}
                    imageProps={{
                      src: '/landingPage/menuTile/cooking-books.png',
                      alt: 'Cooking books',
                    }}
                  />,
                  <MenuTile
                    key={'menu3'}
                    type={'category'}
                    label={'Specials'}
                    imageProps={{
                      src: '/library/images/thermomix-specials.png',
                      alt: 'Thermomix specials',
                    }}
                  />,
                  <MenuTile
                    key={'menu4'}
                    type={'category'}
                    label={'Accessories'}
                    imageProps={{
                      src: '/landingPage/menuTile/accessories.png',
                      alt: 'Thermomix accessories',
                    }}
                  />,
                  <MenuTile
                    key={'menu5'}
                    type={'cta'}
                    title={'Products for your device'}
                    cta={'Find now'}
                  />,
                ]}
                screenSizes={screenSize}
                noControl
                options={{ loop: false }}
                imageTile
                containerWidth={{
                  large: 734,
                  extraLarge: 1120,
                  extraExtraLarge: 1440,
                }}
                overflow
              />
            </GridItem>
          </GridContainer>
        </section>
        <section className={styles.prominentSection}>
          <GridContainer>
            <GridItem
              columns={12}
              className={`${styles.textCentered} ${styles.overriddenMargin}`}
            >
              <Headline spaceBelow={'additional'} strongColor={'green'}>
                <Typography component={'h2'}>
                  Our <strong>topsellers</strong>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <div className={styles.tilesSliderContainer}>
            <GridContainer>
              <GridItem columns={12}>
                <ImageGallery
                  slides={productTileAssets}
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
            <GridContainer>
              <GridItem columns={12}>
                <Button type={'primary'} size={'medium'}>
                  All new Thermomix® products
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </section>
        <section className={styles.sectionRadius}>
          <GridContainer>
            <GridItem
              columns={12}
              className={`${styles.textCentered} ${styles.overriddenMargin}`}
            >
              <Headline spaceBelow={'additional'} strongColor={'green'}>
                <Typography component={'h2'}>
                  Keep <strong>updated</strong>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <CategoryTiles
            categoryTilesData={[
              {
                size: 'large',
                title: 'Newest products',
                brandColor: '#734BA5',
                imageProps: {
                  src: '/landingPage/categoryTile/new-products.png',
                  alt: 'New products',
                },
                button: {
                  label: 'Explore more',
                  size: 'medium',
                },
              },
              {
                size: 'large',
                title: 'Current offers',
                backgroundImageSrc:
                  '/landingPage/categoryTile/thermomix-black-long.png',
                button: {
                  label: 'Button',
                  size: 'medium',
                },
                eyeCatcherProps: {
                  firstLine: 'Only until',
                  secondLine: '25.12.23',
                  thirdLine: false,
                  backgroundColor: 'purple',
                  size: 'small',
                },
              },
            ]}
          />
        </section>
        <section className={styles.prominentSection}>
          <GridContainer>
            <GridItem
              columns={12}
              className={`${styles.textCentered} ${styles.overriddenMargin}`}
            >
              <Headline spaceBelow={'additional'} strongColor={'green'}>
                <Typography component={'h2'}>
                  <strong>New</strong> products
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <div className={styles.tilesSliderContainer}>
            <GridContainer>
              <GridItem columns={12}>
                <ImageGallery
                  slides={productTileAssets}
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
            <GridContainer>
              <GridItem columns={12}>
                <Button type={'primary'} size={'medium'}>
                  All new Thermomix® products
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </section>
        <section className={styles.sectionRadius}>
          <GridContainer>
            <GridItem
              columns={12}
              className={`${styles.textCentered} ${styles.overriddenMargin}`}
            >
              <Headline spaceBelow={'additional'} strongColor={'green'}>
                <Typography component={'h2'}>
                  Interested in
                  <br />
                  Thermomix® <strong>products?</strong>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <CategoryTiles
            categoryTilesData={[
              {
                size: 'large',
                title: 'Lorem ipsum dolor sit amet consetetur',
                backgroundImageSrc:
                  '/landingPage/categoryTile/serving-chocolate-mousse-cropped.png',
                button: {
                  label: 'Book a demo',
                  size: 'medium',
                },
              },
              {
                size: 'large',
                title: 'Experience in the Vorwerk Store',
                backgroundImageSrc:
                  '/landingPage/categoryTile/vorwerk-worker.png',
                button: {
                  label: 'Find a store',
                  size: 'medium',
                },
              },
            ]}
          />
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
