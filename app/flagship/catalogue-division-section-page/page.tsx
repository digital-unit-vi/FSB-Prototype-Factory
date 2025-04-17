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
  GalleryView,
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
  Sort,
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
  Filter,
  InteractiveIcon,
  ListView,
} from '@vorwerk/fibre-react'
import Link from 'next/link'
import styles from './page.module.scss'
import CategoryTiles from '@components/landingPage/categoryTiles/categoryTiles'
import useScreenSize from '@utils/useScreenSize'
import Breadcrumb from '@components/landingPage/breadcrumb/breadcrumb'
import SubNavigation from '@components/landingPage/subNavigation/subNavigation'
import StandaloneSelect from '@components/landingPage/standaloneSelect/standaloneSelect'
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
  const buttonSize =
    screenSize.width > 1267
      ? 'large'
      : screenSize.width > 935
        ? 'medium'
        : 'small'

  return (
    <>
      <main className={styles.cdsp}>
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
        <section className={styles.topHeadline}>
          <GridContainer>
            <GridItem columns={12}>
              <Breadcrumb nodes={['Product', 'Online-Shop', 'Thermomix®']} />
              <Headline>
                <Typography component={'h1'}>Specials</Typography>
              </Headline>
            </GridItem>
          </GridContainer>
        </section>
        <section className={styles.sectionWithPadding}>
          <GridContainer>
            <GridItem columns={12}>
              <SubNavigation
                items={[
                  'Storage',
                  'Baking & Preparing',
                  'Cutlery & Crockery',
                  'Kitchen utensils',
                  'Varoma® Rims',
                ]}
                screenSizeWidth={screenSize.width}
              />
            </GridItem>
          </GridContainer>
          <div className={styles.overwrittenGridItemCol}>
            <GridContainer>
              <GridItem columns={12}>
                <div className={styles.settingsContainer}>
                  <StandaloneSelect
                    icon={<Sort />}
                    text={'Relevance'}
                    items={[
                      'dropdownlistItem',
                      'dropdownlistItem',
                      'dropdownlistItem',
                    ]}
                  />
                  {screenSize.width > 739 && (
                    <div className={styles.viewContainer}>
                      <InteractiveIcon icon={<GalleryView />} />
                      <InteractiveIcon icon={<ListView />} disabled />
                    </div>
                  )}
                  <div className={styles.filter}>
                    <Button
                      type={'tertiary'}
                      size={'large'}
                      icon={<Filter />}
                      iconPosition={'left'}
                    >
                      <Typography variant={'paragraph16'} fontWeight={'medium'}>
                        Filter
                      </Typography>
                    </Button>
                  </div>
                </div>
              </GridItem>
              <GridItem columns={screenSize.width < 740 ? 12 : 8}>
                <ProductTileNew
                  productImageSrc={'/landingPage/productTile/stoneware.png'}
                  heading={'Stoneware Shape "Betty Roaster"'}
                  price={{
                    price: '1499,00 €',
                  }}
                  screenSizes={screenSize}
                  color={'grey'}
                />
              </GridItem>
              <GridItem columns={screenSize.width < 740 ? 12 : 4}>
                <ProductTileNew
                  productImageSrc={'/landingPage/productTile/earthenware.png'}
                  heading={'Earthenware mould'}
                  price={{
                    price: '1499,00 €',
                  }}
                  screenSizes={screenSize}
                  color={'grey'}
                />
              </GridItem>
              <GridItem columns={screenSize.width < 740 ? 12 : 4}>
                <ProductTileNew
                  productImageSrc={'/landingPage/productTile/stoneware-2.png'}
                  heading={'Stoneware Shape'}
                  price={{
                    price: '1499,00 €',
                  }}
                  screenSizes={screenSize}
                  color={'grey'}
                  eyeCatcherProps={{
                    firstLine: 'Save',
                    secondLine: '45%',
                    thirdLine: false,
                    backgroundColor: 'purple',
                    size: 'large',
                  }}
                />
              </GridItem>
              <GridItem columns={screenSize.width < 740 ? 12 : 4}>
                <ProductTileNew
                  productImageSrc={'/landingPage/productTile/stoneware-3.png'}
                  heading={'Stoneware Shape "Anna Casserole Dish"'}
                  price={{
                    price: '1499,00 €',
                  }}
                  screenSizes={screenSize}
                  color={'grey'}
                />
              </GridItem>
              <GridItem columns={screenSize.width < 740 ? 12 : 4}>
                <ProductTileNew
                  productImageSrc={'/landingPage/productTile/bowl.png'}
                  heading={'Bowl GOURMET, 500 ml (6 pcs.)'}
                  price={{
                    price: '1499,00 €',
                  }}
                  screenSizes={screenSize}
                  color={'grey'}
                />
              </GridItem>
              <GridItem columns={screenSize.width < 740 ? 12 : 4}>
                <ProductTileNew
                  productImageSrc={'/landingPage/productTile/serving-bowl.png'}
                  heading={`L'Econome by Starck" serving bowl 18cm, 1.3l rosé`}
                  price={{
                    price: '1499,00 €',
                  }}
                  screenSizes={screenSize}
                  color={'grey'}
                />
              </GridItem>
              <GridItem columns={screenSize.width < 740 ? 12 : 4}>
                <ProductTileNew
                  productImageSrc={
                    '/landingPage/productTile/drinking-bottle-silver.png'
                  }
                  heading={'FLSK Silver Drinking Bottle'}
                  price={{
                    price: '1499,00 €',
                  }}
                  screenSizes={screenSize}
                  color={'grey'}
                />
              </GridItem>
              <GridItem columns={screenSize.width < 740 ? 12 : 8}>
                <ProductTileNew
                  productImageSrc={
                    '/landingPage/productTile/drinking-bottle-green.png'
                  }
                  heading={'Stoneware Shape "Betty Roaster"'}
                  price={{
                    price: '1499,00 €',
                  }}
                  screenSizes={screenSize}
                  color={'grey'}
                />
              </GridItem>
              <GridItem columns={screenSize.width < 740 ? 12 : 4}>
                <ProductTileNew
                  productImageSrc={'/landingPage/productTile/earthenware.png'}
                  heading={'Earthenware mould "flat baking dish Ben”'}
                  price={{
                    price: '1499,00 €',
                  }}
                  screenSizes={screenSize}
                  color={'grey'}
                />
              </GridItem>
              <GridItem columns={screenSize.width < 740 ? 12 : 4}>
                <ProductTileNew
                  productImageSrc={'/landingPage/productTile/stoneware.png'}
                  heading={'Stoneware Shape "Betty Roaster"'}
                  price={{
                    price: '1499,00 €',
                  }}
                  screenSizes={screenSize}
                  color={'grey'}
                />
              </GridItem>
              <GridItem columns={screenSize.width < 740 ? 12 : 4}>
                <ProductTileNew
                  productImageSrc={'/landingPage/productTile/stoneware-2.png'}
                  heading={'Stoneware Shape "Pizza Stone Paul”'}
                  price={{
                    price: '1499,00 €',
                  }}
                  screenSizes={screenSize}
                  color={'grey'}
                  eyeCatcherProps={{
                    firstLine: 'Save',
                    secondLine: '45%',
                    thirdLine: false,
                    backgroundColor: 'purple',
                    size: 'large',
                  }}
                />
              </GridItem>
              <GridItem columns={screenSize.width < 740 ? 12 : 4}>
                <ProductTileNew
                  productImageSrc={'/landingPage/productTile/stoneware-3.png'}
                  heading={'Stoneware Shape "Anna Casserole Dish"'}
                  price={{
                    price: '1499,00 €',
                  }}
                  screenSizes={screenSize}
                  color={'grey'}
                />
              </GridItem>
            </GridContainer>
          </div>
          <GridContainer>
            <GridItem columns={12} className={styles.centeredButton}>
              <Button type={'primary'} size={'large'}>
                Load more
              </Button>
            </GridItem>
          </GridContainer>
        </section>
        <section className={styles.sectionRadius}>
          <GridContainer>
            <GridItem
              columns={12}
              className={`${styles.textCentered} ${styles.overwrittenMargin}`}
            >
              <Headline spaceBelow={'additional'} strongColor={'green'}>
                <Typography component={'h2'}>
                  <strong>Related</strong> categories
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <CategoryTiles
            categoryTilesData={[
              {
                layout: 'horizontal',
                size: 'medium',
                backgroundColor: 'white',
                title: 'Cooking books',
                imageProps: {
                  src: '/landingPage/categoryTile/cooking-books.png',
                  alt: 'Cooking books',
                },
                button: {
                  label: 'Explore more',
                  size: buttonSize,
                },
              },
              {
                layout: 'horizontal',
                size: 'medium',
                backgroundColor: 'white',
                title: 'Accessories',
                imageProps: {
                  src: '/landingPage/categoryTile/accessories.png',
                  alt: 'Accessories',
                },
                button: {
                  label: 'Explore more',
                  size: buttonSize,
                },
              },
            ]}
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
                title: 'Request a Cooking Experience',
                backgroundImageSrc:
                  '/landingPage/categoryTile/serving-chocolate-mousse-cropped.png',
                button: {
                  label: 'Book a demo',
                  size: screenSize.width < 936 ? 'medium' : 'large',
                },
              },
              {
                size: 'large',
                title: 'Experience in the Vorwerk Store',
                backgroundImageSrc:
                  '/landingPage/categoryTile/vorwerk-worker.png',
                button: {
                  label: 'Find a store',
                  size: screenSize.width < 936 ? 'medium' : 'large',
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
