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
  DeliveryLight,
  CalendarLight,
  CheckmarkCircleLight,
  StickyProductBar,
} from '@components/build-assets/libraryExport'
import Link from 'next/link'
import styles from './page.module.scss'
import { ComponentProps, useState, useRef, useEffect } from 'react'
import Rating from '@components/landingPage/rating/rating'
import Gallery from '@components/landingPage/gallery/gallery'
import List from '@components/landingPage/list/list'
import ProductPurchaseOptions from '@components/landingPage/price/productPurchaseOptions'
import TrustBanner from '@components/landingPage/trustBanner/trustBanner'
import Accordion from '@components/landingPage/accordion/accordion'
import ImageGallery from '@components/landingPage/imageGallery/imageGallery'
import IncludedProductTile from '@components/landingPage/includedProductTile/includedProductTile'
import File from '@components/landingPage/file/file'
import ProductTileNew from '@components/landingPage/productTileNew/productTileNew'
import useScreenSize from '@utils/useScreenSize'
import Specifications from '@components/landingPage/accordion/specifications'

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

const galleryAsset: ComponentProps<typeof Gallery>['gallery'] = [
  {
    type: 'image',
    url: '/landingPage/carousel/pdp-1.png',
    alt: 'Thermomix front side',
    title: 'Thermomix front side',
  },
  {
    type: 'image',
    url: '/landingPage/carousel/pdp-2.png',
    alt: 'Thermomix right side',
    title: 'Thermomix right side',
  },
  {
    type: 'image',
    url: '/landingPage/carousel/pdp-3.png',
    alt: 'Thermomix left side',
    title: 'Thermomix left side',
  },
  {
    type: 'image',
    url: '/landingPage/carousel/pdp-4.png',
    alt: 'Thermomix back side',
    title: 'Thermomix back side',
  },
  {
    type: 'video',
    url: '/library/videos/thermomix.webm',
    poster: '/landingPage/carousel/pdp-video.png',
  },
]

export default function Home() {
  const screenSize = useScreenSize()
  const productHeroContainerRef = useRef<HTMLDivElement | null>(null)
  const productDetailsContainerRef = useRef<HTMLDivElement | null>(null)
  const [productDetailsContainerStyle, setProductDetailsContainerStyles] =
    useState({})
  const [isOpen, setOpen] = useState<boolean>(false)
  const [scrollTarget, setScrollTarget] = useState<number>(0)

  const handleFinancingSelectToggle = (isOpen: boolean) => {
    setOpen(isOpen)
  }
  const handleFinancingSelectScroll = (scrollTarget: number) => {
    setScrollTarget(scrollTarget)
  }

  const productTilesGalleryAsset: ComponentProps<
    typeof ImageGallery
  >['slides'] = [
    <ProductTileNew
      key={'Thermomix friend'}
      productImageSrc={'/library/images/thermomix-friend.png'}
      heading={'Thermomix Friend® with TM6 Mixtopf'}
      price={{
        price: '1499,00 €',
      }}
      screenSizes={screenSize}
    />,
    <ProductTileNew
      key={'Knife cover'}
      productImageSrc={'/library/images/knife-cover.png'}
      heading={'Knife cover “Shaft” with peeler'}
      price={{
        price: '1499,00 €',
      }}
      screenSizes={screenSize}
    />,
    <ProductTileNew
      key={'Blade cover'}
      productImageSrc={'/library/images/blade-cover.png'}
      heading={'Blade cover “Shaft”'}
      price={{
        price: '24,90 €',
      }}
      eyeCatcherProps={{
        firstLine: 'Save',
        secondLine: '45%',
        thirdLine: false,
        backgroundColor: 'purple',
        size: 'large',
      }}
      screenSizes={screenSize}
    />,
  ]

  useEffect(() => {
    const handleScrollOrResize = () => {
      if (screen.width < 1268) return
      const productHeroContainer = productHeroContainerRef.current
      const productDetailsContainer = productDetailsContainerRef.current

      if (!productHeroContainer || !productDetailsContainer) return

      const productHeroContainerRect =
        productHeroContainer.getBoundingClientRect()
      const productDetailsContainerRect =
        productDetailsContainer.getBoundingClientRect()
      const parentWidth =
        productDetailsContainer.parentElement?.getBoundingClientRect().width
      if (productHeroContainerRect.top <= 0) {
        setProductDetailsContainerStyles({
          position: 'sticky',
          top:
            productDetailsContainerRect.height > window.innerHeight && !isOpen
              ? ''
              : isOpen
                ? `${-scrollTarget}px`
                : 0,
          bottom:
            productDetailsContainerRect.height > window.innerHeight && !isOpen
              ? '0'
              : '',
          width: parentWidth ? `${parentWidth}px` : undefined,
        })
      } else if (productHeroContainerRect.top >= 0) {
        setProductDetailsContainerStyles({
          position: '',
          top: '',
          bottom: '',
        })
      }
    }

    window.addEventListener('scroll', handleScrollOrResize)

    const resizeObserver = new ResizeObserver(() => {
      handleScrollOrResize()
    })

    const productDetailsContainer = productDetailsContainerRef.current
    if (productDetailsContainer) {
      resizeObserver.observe(productDetailsContainer)
    }

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize)
      if (productDetailsContainer) {
        resizeObserver.unobserve(productDetailsContainer)
      }
      resizeObserver.disconnect()
    }
  }, [isOpen, scrollTarget])

  return (
    <>
      <main className={styles.pdp}>
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
        <section
          className={`${styles.prominentSection} ${styles.additionalSectionPadding}`}
        >
          <div className={styles.gridProductHero} ref={productHeroContainerRef}>
            <GridContainer isOverlay={screenSize.width < 936}>
              <GridItem
                columns={12}
                columnsL={7}
                columnsXL={8}
                className={styles.gridItem1}
              >
                {screenSize.width > 935 ? (
                  <Gallery gallery={galleryAsset} />
                ) : (
                  <ImageGallery
                    slides={galleryAsset}
                    options={{ loop: false, align: 'start' }}
                    isModal
                    showCarouselInfo
                  ></ImageGallery>
                )}
              </GridItem>
              <GridItem
                columns={12}
                columnsL={5}
                columnsXL={4}
                className={styles.gridItem2}
              >
                <div
                  className={styles.productDetailsContainer}
                  ref={productDetailsContainerRef}
                  style={productDetailsContainerStyle}
                >
                  <div className={styles.productDetailsWrapper}>
                    <div className={styles.headingAndRating}>
                      <Typography component="h4" fontWeight="bold">
                        <span>Thermomix® TM6</span>
                      </Typography>
                      <Rating
                        rate={4.9}
                        counter={42}
                        size={'sapcVersion'}
                        iconColors={{
                          full: '#23282A',
                          empty: 'rgb(196, 196, 196)',
                        }}
                        showCounter={true}
                        showAmount={true}
                      ></Rating>
                    </div>
                    <List
                      items={[
                        'Delicious dishes prepared quickly and easily',
                        'Thousands of recipes with guaranteed success directly on your device',
                        'A real all-rounder: Numerous cooking functions and modes',
                      ]}
                      decoratorType="check"
                      size="medium"
                    />
                    <ProductPurchaseOptions
                      onScroll={handleFinancingSelectScroll}
                      onToggle={handleFinancingSelectToggle}
                      price="1.399 €"
                      delivery={
                        <div className={styles.deliveryText}>
                          <Typography
                            variant="paragraph16"
                            fontWeight="regular"
                          >
                            <span>Free delivery</span>
                          </Typography>
                          <Typography
                            variant={'paragraph16'}
                            fontWeight={'medium'}
                          >
                            <span> Wednesday, 26.06. – Friday, 27.06.</span>
                          </Typography>
                        </div>
                      }
                    />
                    <TrustBanner
                      items={[
                        {
                          text: 'Free shipping for orders over $50',
                          icon: <DeliveryLight />,
                        },
                        {
                          text: '30 day satisfaction guarantee',
                          icon: <CalendarLight />,
                        },
                        {
                          text: '5 year warranty',
                          icon: <CheckmarkCircleLight />,
                        },
                      ]}
                    />
                  </div>
                </div>
              </GridItem>
              <GridItem
                columns={12}
                columnsL={7}
                columnsXL={8}
                className={styles.gridItem3}
              >
                <div className={styles.productDetailsContainer}>
                  <div className={styles.headingWithParagraph}>
                    <Typography component="h6" fontWeight="bold">
                      It has never been so easy and delicious
                    </Typography>
                    <Typography component="intro" fontWeight="regular">
                      The Thermomix® TM6 makes your life easier and adapts to
                      your individual dietary requirements. Do you love kitchen
                      classics, or do you like trying out current food trends?
                      Do you pay particular attention to healthy, balanced food
                      and also to your figure? No matter what your personal
                      cooking preferences are – you will find the answer with
                      Thermomix®.
                    </Typography>
                  </div>
                </div>
              </GridItem>
              <GridItem
                columns={12}
                columnsL={7}
                columnsXL={8}
                className={styles.gridItem4}
              >
                <div className={styles.productDetailsContainer}>
                  <Accordion
                    items={[
                      {
                        title: 'Product description',
                        content: <p>Lorem ipsum...</p>,
                      },
                      { title: 'Modes', content: <p>Lorem ipsum...</p> },
                      {
                        title: 'Specifications',
                        content:
                          screenSize.width > 1569 ? (
                            <Specifications />
                          ) : (
                            <p>Lorem ipsum...</p>
                          ),
                      },
                      {
                        title: 'Reviews',
                        additionalInfo: (
                          <Rating
                            rate={4.5}
                            counter={0}
                            size={'medium'}
                            iconColors={{ full: '#3F4447', empty: '#C4C4C4' }}
                            showAmount={true}
                          />
                        ),
                        content: <p>Lorem ipsum...</p>,
                      },
                    ]}
                  />
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </section>
        <section className={styles.prominentSection}>
          <GridContainer>
            <GridItem
              columns={12}
              className={`${styles.textCentered} ${styles.overwrittenMargin} ${styles.overwrittenGap}`}
            >
              <Headline spaceBelow={'additional'} strongColor={'green'}>
                <Typography component="h2">
                  <span>
                    What is <strong>included</strong>
                  </span>
                </Typography>
              </Headline>
            </GridItem>
            <GridItem columns={12}>
              <ImageGallery
                slides={[
                  <IncludedProductTile
                    key={'Bundle name'}
                    imageProps={{
                      src: '/landingPage/includedProductTile/tm6-1.png',
                      alt: 'Thermomix TM6',
                    }}
                    heading={'Thermomix Friend® with TM6 Mixtopf'}
                    bundleName={'Bundle name'}
                    bundleImage={{
                      src: '/landingPage/includedProductTile/bowl-set.png',
                      alt: 'Bowl set',
                    }}
                  />,
                  <IncludedProductTile
                    key={'Varoma'}
                    imageProps={{
                      src: '/landingPage/includedProductTile/tm6-2.png',
                      alt: 'Thermomix TM6',
                    }}
                    heading={
                      'Steaming retaining flavors and nutrients while cooking'
                    }
                    bundleName={'Varoma® complete'}
                    bundleImage={{
                      src: '/landingPage/includedProductTile/varoma.png',
                      alt: 'Varoma',
                    }}
                  />,
                  <IncludedProductTile
                    key={'Butterfly whisk'}
                    imageProps={{
                      src: '/landingPage/includedProductTile/tm6-3.png',
                      alt: 'Thermomix TM6',
                    }}
                    heading={
                      'Mixes and whips ingredients with airy textures, like mousses and creams'
                    }
                    bundleName={'Butterfly whisk'}
                    bundleImage={{
                      src: '/landingPage/includedProductTile/butterfly-scoop.png',
                      alt: 'Butterfly whisk',
                    }}
                  />,
                ]}
                options={{ loop: false, align: 'start' }}
                screenSizes={screenSize}
                containerWidth={{
                  large: 881,
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
              className={`${styles.textCentered} ${styles.overwrittenHeadline} ${styles.overwrittenMargin}`}
            >
              <Headline
                subline={
                  'From meal planning, to ingredient shopping, to cooking, the TM6 has your back so you can seamlessly create the perfect meal, every time.'
                }
                strongColor={'green'}
                spaceBelow={'additional'}
              >
                <Typography component={'h2'} fontWeight={'light'}>
                  <span>
                    Don’t just cook every day…
                    {screenSize.width > 739 && <br />}
                    <strong> create wow every day</strong>
                  </span>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <div className={styles.contentBlockContainer}>
            <div className={styles.contentBlockLeft}>
              <ContentBlock
                mediaAlignment={screenSize.width > 739 ? 'left' : undefined}
                media={
                  <video
                    controls
                    src="/library/videos/tm-1.mp4"
                    poster={'/library/videos/tm-1-placeholder.png'}
                  ></video>
                }
                headline={
                  <Headline spaceBelow={'default'}>
                    <Typography component={'h4'} fontWeight={'bold'}>
                      <span>Recipes with step-by-step instructions</span>
                    </Typography>
                  </Headline>
                }
                paragraph={
                  <Typography
                    variant={`paragraph${screenSize.width > 1267 ? '18' : '19'}`}
                    fontWeight={'regular'}
                  >
                    Prepare foolproof dishes with innovative step-by-step Guided
                    Cooking or access our Cookidoo platform for thousands of
                    recipes with manual or guided cooking.
                  </Typography>
                }
              />
            </div>
            <div className={styles.contentBlockRight}>
              <ContentBlock
                mediaAlignment={screenSize.width > 739 ? 'right' : undefined}
                media={
                  <video
                    controls
                    src="/library/videos/tm-1.mp4"
                    poster="/library/videos/tm-2-placeholder.png"
                  ></video>
                }
                headline={
                  <Headline spaceBelow={'default'}>
                    <Typography component={'h4'} fontWeight={'bold'}>
                      <span>Multi-purpose cooking device</span>
                    </Typography>
                  </Headline>
                }
                paragraph={
                  <Typography
                    variant={`paragraph${screenSize.width > 1267 ? '18' : '19'}`}
                    fontWeight={'regular'}
                  >
                    Thermomix® TM6 can blend, steam, whip, knead and so much
                    more! With exciting modes like High Temperature, Sous vide,
                    Slow Cooking and Fermentation, Thermomix® TM6 is a modern
                    culinary revolution.
                  </Typography>
                }
              />
            </div>
            <div className={styles.contentBlockLeft}>
              <ContentBlock
                mediaAlignment={screenSize.width > 739 ? 'left' : undefined}
                media={
                  <img
                    src="/library/images/content-block-1.png"
                    alt="Innovative technology"
                    style={{ aspectRatio: '16/9' }}
                  />
                }
                headline={
                  <Headline spaceBelow={'default'}>
                    <Typography component={'h4'} fontWeight={'bold'}>
                      <span>Innovative technology</span>
                    </Typography>
                  </Headline>
                }
                paragraph={
                  <Typography
                    variant={`paragraph${screenSize.width > 1267 ? '18' : '19'}`}
                    fontWeight={'regular'}
                  >
                    German engineering and outstanding quality Thermomix® TM6
                    is a leading device amongst kitchen appliances.
                  </Typography>
                }
              />
            </div>
          </div>
        </section>
        <section className={styles.prominentSection}>
          <GridContainer>
            <GridItem
              columns={12}
              className={`${styles.textCentered} ${styles.overwrittenMargin} ${styles.overwrittenGap} ${styles.overwrittenHeadline}`}
            >
              <Headline spaceBelow={'additional'}>
                <Typography component={'h2'}>Downloads</Typography>
              </Headline>
            </GridItem>
            <GridItem columns={12}>
              <div className={styles.filesContainer}>
                <File label={'Product manual'} sizeFormat={'PDF  1,7 MB'} />
                <File label={'Quickstart guide'} sizeFormat={'PDF  0,8 MB'} />
                <File
                  label={'Information obligation with some extra text'}
                  sizeFormat={'PDF  1,7 MB'}
                  subLine={screenSize.width > 739 && screenSize.width < 936}
                />
              </div>
            </GridItem>
          </GridContainer>
        </section>
        {screenSize.width < 1580 && (
          <>
            <section className={styles.prominentSection}>
              <GridContainer>
                <GridItem columns={12}>
                  <div
                    className={`${styles.awardsContainer} ${styles.textCentered}`}
                  >
                    <Headline spaceBelow={'additional'}>
                      <Typography component={'h2'}>Awards</Typography>
                    </Headline>
                    <div className={styles.awardsMediaContainer}>
                      <MediaContainer aspectRatio={'3/2'}>
                        <img
                          src="/library/images/design-award-1.png"
                          alt="Design award"
                        />
                      </MediaContainer>
                      <MediaContainer aspectRatio={'3/2'}>
                        <img
                          src="/library/images/design-award-2.png"
                          alt="Design award"
                        />
                      </MediaContainer>
                      <MediaContainer aspectRatio={'3/2'}>
                        <img
                          src="/library/images/design-award-3.png"
                          alt="Design award"
                        />
                      </MediaContainer>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
            </section>
            <section className={styles.sectionWithBiggerPadding}>
              <GridContainer
                isOverlay={screenSize.width > 935 && screenSize.width < 1268}
              >
                <GridItem columns={12} className={styles.textCentered}>
                  <div className={styles.overwrittenMargin}>
                    <Headline spaceBelow={'additional'} strongColor={'green'}>
                      <Typography component={'h2'}>
                        <strong>Matching</strong> products
                      </Typography>
                    </Headline>
                  </div>
                </GridItem>
              </GridContainer>
              {screenSize.width > 935 && screen.width < 1268 ? (
                <div className={styles.productTilesContainer}>
                  {productTilesGalleryAsset.map(
                    (productTile: typeof ProductTileNew) => productTile,
                  )}
                </div>
              ) : (
                <GridContainer>
                  <GridItem columns={12}>
                    {screenSize.width < 740 ? (
                      <ImageGallery
                        slides={productTilesGalleryAsset}
                        options={{ loop: false, align: 'start' }}
                        screenSizes={screenSize}
                        containerWidth={{
                          large: 522.5,
                          extraLarge: 1120,
                          extraExtraLarge: 1440,
                        }}
                      />
                    ) : (
                      <div className={styles.productTilesContainer}>
                        {productTilesGalleryAsset.map(
                          (productTile: typeof ProductTileNew) => productTile,
                        )}
                      </div>
                    )}
                  </GridItem>
                </GridContainer>
              )}
            </section>
          </>
        )}
        <section className={styles.defaultSection}>
          <GridContainer>
            <GridItem
              columns={12}
              className={`${styles.textCentered} ${styles.overwrittenMargin} ${styles.overwrittenHeadline}`}
            >
              <Headline spaceBelow={'additional'} strongColor={'blue'}>
                <Typography component={'h2'}>
                  Vorwerk Advisor,
                  <br />a unique opportunity to
                  {screenSize.width > 739 && <br />}
                  <strong> join our sales force</strong>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <div className={styles.overwrittenContentBlockWidth}>
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
          </div>
        </section>
      </main>
      <footer className={styles.additionalFooterMargin}>
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
      {screenSize.width < 936 && (
        <div className={styles.overwrittenZIndex}>
          <StickyProductBar
            image={<img src="/landingPage/hero/ds360-hero.png" alt="Product" />}
            button={
              <Button type={'primary'} size={'medium'}>
                Buy
              </Button>
            }
            title={'Thermomix® TM6'}
          />
        </div>
      )}
    </>
  )
}
