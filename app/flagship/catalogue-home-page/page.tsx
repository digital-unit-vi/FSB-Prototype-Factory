'use client'

import {
  AdvisorDropdown,
  AdvisorDropdownMenuItem,
  AdvisorUnassigned,
  Austria,
  Button,
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
import ImageGallery from '@components/landingPage/imageGallery/imageGallery'
import useScreenSize from '@utils/useScreenSize'
import IMAGE_CHP_1 from '@public/landingPage/teaser/teaser-thermomix.png'
import IMAGE_CHP_2 from '@public/landingPage/teaser/teaser-kobold.png'
import IMAGE_CHP_3 from '@public/landingPage/teaser/teaser-voucher.png'
import CategoryTiles from '@components/landingPage/categoryTiles/categoryTiles'
import CategoryTile from '@components/landingPage/categoryTile/categoryTile'
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
  const categoryTilesAssets = [
    <ProductTileNew
      key={'Thermomix friend'}
      productImageSrc={'/library/images/thermomix-friend.png'}
      heading={'Thermomix Friend® with TM6 Mixtopf'}
      price={{
        price: '499,00 €',
      }}
      screenSizes={screenSize}
    />,
    <ProductTileNew
      key={'Knife cover'}
      productImageSrc={'/library/images/knife-cover.png'}
      heading={'Knife cover “Shaft” with peeler'}
      price={{
        price: '34,00 €',
      }}
      screenSizes={screenSize}
    />,
    <ProductTileNew
      key={'Blade cover'}
      productImageSrc={'/library/images/blade-cover.png'}
      heading={'Blade cover “Shaft”'}
      price={{
        price: '24,00 €',
        lowestPrice: '45,00 €',
      }}
      eyeCatcherProps={{
        firstLine: 'Save',
        secondLine: '45%',
        thirdLine: false,
        backgroundColor: 'purple',
        size: 'large',
      }}
      screenSizes={screenSize}
      slider={true}
    />,
  ]
  const productTileAssets = [
    <ProductTileNew
      key={'Kobold VR7'}
      productImageSrc={'/landingPage/productTile/kobold-vr7.png'}
      heading={'Kobold VR7 Vacuum Robot'}
      price={{
        price: '999,00 €',
      }}
      screenSizes={screenSize}
      color={'white'}
    />,
    <ProductTileNew
      key={'Kobold VC100'}
      productImageSrc={'/landingPage/productTile/kobold-vc100.png'}
      heading={'Kobold VC100 Handheld Vacuum Cleaner'}
      price={{
        price: '24,90 €',
        lowestPrice: '45,00 €',
      }}
      screenSizes={screenSize}
      color={'white'}
      eyeCatcherProps={{
        firstLine: 'Save',
        secondLine: '30%',
        thirdLine: false,
        backgroundColor: 'purple',
        size: 'large',
      }}
      slider={true}
    />,
    <ProductTileNew
      key={'Kobold VK7'}
      productImageSrc={'/landingPage/productTile/kobold-cordless-vacuum-cleaner.png'}
      heading={'Kobold VK7 Cordless Vacuum Cleaner'}
      price={{
        price: '979,00 €',
      }}
      screenSizes={screenSize}
      color={'white'}
    />,
  ]

  const teaserTileAssets = [IMAGE_CHP_1, IMAGE_CHP_2, IMAGE_CHP_3]

  return (
    <>
      <main className={styles.catalogueHomePage}>
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
          backgroundType="transparent"
          stickyMode="normal"
        />
        <GridContainer>
          <GridItem
            columns={12}
            className={`${styles.topHeadline} ${styles.textCentered}`}
          >
            <Headline strongColor={'green'}>
              <Typography component={'h1'}>
                Your <strong>perfect home</strong>
              </Typography>
            </Headline>
          </GridItem>
        </GridContainer>
        <div className={styles.overriddenGridCol}>
          <GridContainer>
            <GridItem columns={6}>
              <CategoryTile
                size={'small'}
                title={'Cooking with Thermomix®'}
                backgroundImageSrc={
                  '/landingPage/categoryTile/cooking-with-thermomix.png'
                }
              />
            </GridItem>
            <GridItem columns={6}>
              <CategoryTile
                size={'small'}
                title={'Cleaning with Kobold'}
                backgroundImageSrc={
                  '/landingPage/categoryTile/cleaning-with-kobold.png'
                }
              />
            </GridItem>
          </GridContainer>
        </div>
        <section className={styles.prominentSection}>
          <GridContainer>
            <GridItem
              columns={12}
              className={`${styles.textCentered} ${styles.overriddenMargin}`}
            >
              <Headline spaceBelow={'additional'} strongColor={'green'}>
                <Typography component={'h2'}>
                  Everything about <strong>cooking</strong>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <div className={styles.tilesContainer}>
            <div className={styles.categoryTilesContainer}>
              <GridContainer>
                <GridItem columns={12}>
                  <CategoryTile
                    size={'large'}
                    title={'Thermomix® TM6'}
                    backgroundImageSrc={
                      screenSize.width < 740
                        ? '/landingPage/categoryTile/thermomix-tm6-cropped.png'
                        : '/landingPage/categoryTile/thermomix-tm6.png'
                    }
                    button={{
                      label: 'Explore the product',
                      size: 'medium',
                    }}
                  />
                </GridItem>
              </GridContainer>
              <CategoryTiles
                categoryTilesData={[
                  {
                    size: 'large',
                    backgroundColor: 'grey',
                    imageProps: {
                      src: '/landingPage/categoryTile/tm-specials.png',
                      alt: 'Thermomix Specials',
                    },
                    title: 'Specials',
                    button: {
                      label: 'Explore more',
                      size: 'medium',
                    },
                  },
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
                      size: 'medium',
                    },
                  },
                ]}
              />
            </div>
            <div>
              <GridContainer>
                <GridItem
                  columns={12}
                  className={`${styles.textCentered} ${styles.overriddenMarginHeadline}`}
                >
                  <Headline spaceBelow={'default'} strongColor={'green'}>
                    <Typography component={'h3'}>
                      Our Thermomix® <strong>topseller</strong>
                    </Typography>
                  </Headline>
                </GridItem>
              </GridContainer>
              <div className={styles.tilesSliderContainer}>
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
                <GridContainer>
                  <GridItem columns={12}>
                    <Button type={'primary'} size={'medium'}>
                      All Thermomix® products
                    </Button>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
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
                  Everything about <strong>cleaning</strong>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <div className={styles.tilesContainer}>
            <div className={styles.categoryTilesContainer}>
              <GridContainer>
                <GridItem columns={12}>
                  <CategoryTile
                    size={'large'}
                    title={'Battery Vacuum Cleaner'}
                    backgroundImageSrc={
                      '/landingPage/categoryTile/battery-vacuum-cleaner.png'
                    }
                    button={{
                      size: 'medium',
                      label: 'Explore the product',
                    }}
                  />
                </GridItem>
              </GridContainer>
              <div
                className={`${styles.overriddenGridCol} ${styles.overriddenGridItemCol}`}
              >
                <GridContainer>
                  <GridItem columns={6}>
                    <CategoryTile
                      layout={'horizontal'}
                      size={'small'}
                      title={'Special offers'}
                      backgroundImageSrc={'/landingPage/teaser/teaser4.png'}
                    />
                  </GridItem>
                  <GridItem columns={6}>
                    <CategoryTile
                      layout={'horizontal'}
                      size={'small'}
                      title={'Upright Vacuum cleaner'}
                      backgroundImageSrc={
                        '/landingPage/categoryTile/upright-vacuum-cleaner.png'
                      }
                    />
                  </GridItem>
                  <GridItem columns={12}>
                    <CategoryTile
                      layout={'horizontal'}
                      size={'large'}
                      title={'Robot'}
                      backgroundImageSrc={'/landingPage/categoryTile/robot.png'}
                    />
                  </GridItem>
                </GridContainer>
              </div>
              <CategoryTiles
                categoryTilesData={[
                  {
                    size: 'large',
                    backgroundColor: 'white',
                    imageProps: {
                      src: '/landingPage/categoryTile/kobold-attachments.png',
                      alt: 'Kobold Attachments',
                    },
                    title: 'Attachments',
                    button: {
                      label: 'Explore more',
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
                  {
                    size: 'large',
                    backgroundColor: 'white',
                    imageProps: {
                      src: '/landingPage/categoryTile/kobold-accessories.png',
                      alt: 'Kobold Accessories',
                    },
                    title: 'Accessories',
                    button: {
                      label: 'Explore more',
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
            </div>
            <div>
              <GridContainer>
                <GridItem
                  columns={12}
                  className={`${styles.textCentered} ${styles.overriddenMarginHeadline}`}
                >
                  <Headline spaceBelow={'additional'} strongColor={'green'}>
                    <Typography component={'h3'}>
                      Our Kobold <strong>topseller</strong>
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
                      All Kobold products
                    </Button>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.prominentSection}>
          <GridContainer>
            <GridItem
              columns={12}
              className={`${styles.textCentered} ${styles.overriddenMargin}`}
            >
              <Headline spaceBelow={'additional'} strongColor={'green'}>
                <Typography component={'h2'}>
                  <strong>Products</strong> for Thermomix® & Kobold
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem columns={12}>
              <ImageGallery
                slides={teaserTileAssets}
                options={{ loop: false, align: 'start' }}
                screenSizes={screenSize}
                containerWidth={{
                  large: 704,
                  extraLarge: 1120,
                  extraExtraLarge: 1440,
                }}
                noControl={true}
                setHeight={true}
              />
            </GridItem>
          </GridContainer>
        </section>
        <section className={styles.sectionRadius}>
          <GridContainer>
            <GridItem
              columns={12}
              className={`${styles.textCentered} ${styles.overriddenMargin}`}
            >
              <Headline spaceBelow={'additional'} strongColor={'green'}>
                <Typography component={'h2'}>
                  Current <strong>offers</strong>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <div className={styles.tilesContainer}>
            <ContentBlock
              mediaAlignment={screenSize.width > 935 ? 'left' : undefined}
              media={
                <img src="/landingPage/contentBlock/vorwerk-content.png" />
              }
              headline={
                <Headline spaceBelow={'default'}>
                  <Typography component={'h3'} fontWeight={'bold'}>
                    Turbo vacuuming and mopping at the same time.
                  </Typography>
                </Headline>
              }
              paragraph={
                <Typography
                  variant={`paragraph${screenSize.width > 1267 ? '18' : '16'}`}
                  fontWeight={'regular'}
                >
                  Vorwerk presents the new Kobold VK7! In combination with the
                  SP7 squeegee, it becomes the best squeegee ever. Thanks to the
                  Boost function, you can clean with even more power and switch
                  between other attachments in a flash with just one click.
                  Vacuuming & mopping?
                </Typography>
              }
              buttonGroup={
                <Button type={'primary'} size={'large'}>
                  Kobold VK7 offers
                </Button>
              }
            />
            <ContentBlock
              mediaAlignment={screenSize.width > 935 ? 'right' : undefined}
              media={<img src="/landingPage/contentBlock/content-1.png" />}
              headline={
                <Headline spaceBelow={'default'}>
                  <Typography component={'h3'} fontWeight={'bold'}>
                    Only the best for you!
                  </Typography>
                </Headline>
              }
              paragraph={
                <Typography
                  variant={`paragraph${screenSize.width > 1267 ? '18' : '16'}`}
                  fontWeight={'regular'}
                >
                  Effortlessly eat fresh and delicious food all the time? You
                  can rely 100% on the Thermomix®. You can now enjoy the
                  carefree pleasure of cooking with an extended enjoyment
                  guarantee at a special price!
                </Typography>
              }
              buttonGroup={
                <Button type={'primary'} size={'large'}>
                  Join the Thermomix® team
                </Button>
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
