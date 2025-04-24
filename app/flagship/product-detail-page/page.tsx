'use client'

import {
  Button,
  ButtonGroup,
  ContentBlock,
  GridContainer,
  GridItem,
  Headline,
  MediaContainer,
  Typography,
  DeliveryLight,
  CalendarLight,
  CheckmarkCircleLight,
  StickyProductBar,
} from '@vorwerk/fibre-react'
import Link from 'next/link'
import styles from './page.module.scss'
import { ComponentProps, useState, useRef, useEffect } from 'react'
import Rating from '@components/flagship/rating/rating'
import Gallery from '@components/flagship/gallery/gallery'
import List from '@components/flagship/list/list'
import ProductPurchaseOptions from '@components/flagship/price/productPurchaseOptions'
import TrustBanner from '@components/flagship/trustBanner/trustBanner'
import Accordion from '@components/flagship/accordion/accordion'
import ImageGallery from '@components/flagship/imageGallery/imageGallery'
import IncludedProductTile from '@components/flagship/includedProductTile/includedProductTile'
import File from '@components/flagship/file/file'
import ProductTile from '@components/flagship/productTile/productTile'
import useScreenSize from '@utils/useScreenSize'
import Specifications from '@components/flagship/accordion/specifications'

const galleryAsset: ComponentProps<typeof Gallery>['gallery'] = [
  {
    type: 'image',
    url: '/flagship/carousel/pdp-1.png',
    alt: 'Thermomix front side',
    title: 'Thermomix front side',
  },
  {
    type: 'image',
    url: '/flagship/carousel/pdp-2.png',
    alt: 'Thermomix right side',
    title: 'Thermomix right side',
  },
  {
    type: 'image',
    url: '/flagship/carousel/pdp-3.png',
    alt: 'Thermomix left side',
    title: 'Thermomix left side',
  },
  {
    type: 'image',
    url: '/flagship/carousel/pdp-4.png',
    alt: 'Thermomix back side',
    title: 'Thermomix back side',
  },
  {
    type: 'video',
    url: '/library/videos/thermomix.webm',
    poster: '/flagship/carousel/pdp-video.png',
  },
]

export default function Home() {
  const screenSize = useScreenSize()
  const productHeroContainerRef = useRef<HTMLDivElement | null>(null)
  const productDetailsContainerRef = useRef<HTMLDivElement | null>(null)
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
    <ProductTile
      key={'Thermomix friend'}
      productImageSrc={'/library/images/thermomix-friend.png'}
      heading={'Thermomix Friend® with TM6 Mixtopf'}
      price={{
        price: '1499,00 €',
      }}
      screenSizes={screenSize}
    />,
    <ProductTile
      key={'Knife cover'}
      productImageSrc={'/library/images/knife-cover.png'}
      heading={'Knife cover “Shaft” with peeler'}
      price={{
        price: '1499,00 €',
      }}
      screenSizes={screenSize}
    />,
    <ProductTile
      key={'Blade cover'}
      productImageSrc={'/library/images/blade-cover.png'}
      heading={'Blade cover “Shaft”'}
      price={{
        price: '24,90 €',
      }}
      eyeCatcherProps={{
        firstLine: 'Save',
        secondLine: '45%',
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
        <section
          className={`${styles.prominentSection} ${styles.additionalSectionPadding}`}
        >
          <GridContainer isOverlay={screenSize.width < 936}>
            <GridItem columns={12}>
              <GridContainer isOverlay={screenSize.width < 936}>
                <GridItem columns={12} columnsL={7} columnsXL={8}>
                  {screenSize.width > 935 ? (
                    <Gallery gallery={galleryAsset}></Gallery>
                  ) : (
                    <ImageGallery
                      slides={galleryAsset}
                      options={{ loop: false, align: 'start' }}
                      isModal
                      showCarouselInfo
                    ></ImageGallery>
                  )}
                </GridItem>
                <GridItem columns={12} columnsL={5} columnsXL={4}>
                  <div className={styles.productDetailsContainer}>
                    <div className={styles.productDetailsWrapper}>
                      <div className={styles.headingAndRating}>
                        <Typography component="h4" fontWeight="bold">
                          <span>Thermomix® TM6</span>
                        </Typography>
                        <Rating
                          rate={4.9}
                          counter={42}
                          size={"sapcVersion"}
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
                      price="1.399 €"
                      delivery={
                        <div className={styles.deliveryText}>
                          <Typography
                            variant="paragraph16"
                            fontWeight="regular"
                          >
                            <span>
                              Free delivery
                            </span>
                          </Typography>
                          <Typography variant={"paragraph16"} fontWeight={"medium"}>
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
            </GridItem>
          </GridContainer>
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
                      src: '/flagship/images/tm6-1.png',
                      alt: 'Thermomix TM6',
                    }}
                    heading={'Thermomix Friend® with TM6 Mixtopf'}
                    bundleName={'Bundle name'}
                    bundleImage={{
                      src: '/flagship/images/bowl-set.png',
                      alt: 'Bowl set',
                    }}
                  />,
                  <IncludedProductTile
                    key={'Varoma'}
                    imageProps={{
                      src: '/flagship/images/tm6-2.png',
                      alt: 'Thermomix TM6',
                    }}
                    heading={
                      'Steaming retaining flavors and nutrients while cooking'
                    }
                    bundleName={'Varoma® complete'}
                    bundleImage={{
                      src: '/flagship/images/varoma.png',
                      alt: 'Varoma',
                    }}
                  />,
                  <IncludedProductTile
                    key={'Butterfly whisk'}
                    imageProps={{
                      src: '/flagship/images/tm6-3.png',
                      alt: 'Thermomix TM6',
                    }}
                    heading={
                      'Mixes and whips ingredients with airy textures, like mousses and creams'
                    }
                    bundleName={'Butterfly whisk'}
                    bundleImage={{
                      src: '/flagship/images/butterfly-scoop.png',
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
                    variant={'paragraph18'}
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
                    variant={'paragraph18'}
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
                    variant={'paragraph18'}
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
                  {/* {productTilesGalleryAsset.map(productTile => productTile)} */}
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
                        {/* {productTilesGalleryAsset.map(
                          (productTile: typeof ProductTile) => productTile,
                        )} */}
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
                  src="/flagship/images/thermomix-team.png"
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
                    <Button size="large" buttonStyle="primary">
                      Join the Thermomix® team
                    </Button>
                  </Link>
                  <Link href="#">
                    <Button size="large" buttonStyle="secondary">
                      Details
                    </Button>
                  </Link>
                </ButtonGroup>
              }
            ></ContentBlock>
          </div>
        </section>
      </main>
      {screenSize.width < 936 && (
        <div className={styles.overwrittenZIndex}>
          <StickyProductBar
            image={<img src="/flagship/hero/ds360-hero.png" alt="Product" />}
            button={
              <Button buttonStyle={'primary'} size={'medium'}>
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
