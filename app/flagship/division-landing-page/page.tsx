'use client'

import {
  Button,
  ButtonGroup,
  ContentBlock,
  GridContainer,
  GridItem,
  Headline,
  Hero,
  MediaContainer,
  TapLight,
  Typography
} from '@vorwerk/fibre-react'
import styles from './page.module.scss'
import CategoryTiles from '@components/flagship/categoryTiles/categoryTiles'
import useScreenSize from '@utils/useScreenSize'
import ImageTileCarousel from '@components/flagship/imageTileCarousel/imageTileCarousel'
import ImageGallery from '@components/flagship/imageGallery/imageGallery'
import TeaserTile from '@components/flagship/teaserTile/teaserTile'

export default function Home() {
  const screenSize = useScreenSize()
  const teaserTiles = [
    <TeaserTile
      key={'tile1'}
      title={'Our current Thermomix® offers'}
      paragraph={
        'Receive in addition to the Thermomix® TM6 including versatile accessories and the Thermomix® guarantee'
      }
      imageProps={{
        src: '/flagship/images/thermomix-black.png',
        alt: 'Thermomix',
      }}
      buttonLabel={'Register Online'}
      screenSizeWidth={screenSize.width}
    />,
    <TeaserTile
      key={'tile2'}
      title={'Thermomix Friend®'}
      paragraph={
        'The accessory for your Thermomix® that provides even more cooking convenience and flexibility'
      }
      imageProps={{
        src: '/flagship/images/thermomix-friend.png',
        alt: 'Thermomix Friend',
      }}
      buttonLabel={'Register Online'}
      screenSizeWidth={screenSize.width}
    />,
    <TeaserTile
      key={'tile3'}
      title={'Cooking shows in the Vorwerk Stores '}
      paragraph={
        'You would like to finally get to know Thermomix® TM6 in person?'
      }
      imageProps={{
        src: '/flagship/images/thermomix-cooking.png',
        alt: 'Thermomix Cooking',
      }}
      buttonLabel={'Register Online'}
      screenSizeWidth={screenSize.width}
    />,
  ]

  return (
    <main className={styles.dlp}>
      <div className={styles.hero}>
        <Hero
          cta={
            <ButtonGroup alignment="center" layout="vertical">
              <Button invertColors size="medium" buttonStyle="primary">
                Book a Cooking Experience
              </Button>
              <Button invertColors size="medium" buttonStyle="tertiary">
                Learn more
              </Button>
            </ButtonGroup>
          }
          headline={
            <Headline
              strongColor="yellow"
              subline="Meet Your Kitchen Assistant"
            >
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
              src="/flagship/hero/thermomix-food-lifestyle.png"
            />
          }
        />
        <div className={styles.overlayIconWrapper}>
          {screenSize.width > 935 ? (
            <img
              src={'/flagship/hero/mouse.svg'}
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
                  src: '/flagship/images/thermomix.png',
                  alt: 'Thermomix',
                },
                button: {
                  label: 'Explore more',
                  size: screenSize.width > 935 ? 'large' : 'small',
                },
              },
              {
                size: 'medium',
                title: 'Accessories',
                layout: 'horizontal',
                backgroundColor: 'grey',
                imageProps: {
                  src: '/flagship/images/accessories.png',
                  alt: 'Thermomix accessories',
                },
                button: {
                  label: 'Explore more',
                  size: screenSize.width > 935 ? 'large' : 'small',
                },
              },
            ]}
          />
          <ContentBlock
            mediaAlignment={screenSize.width > 935 ? 'right' : undefined}
            media={
              <img
                src="/flagship/images/content-2.png"
                alt="Dinner party"
              />
            }
            headline={
              <Headline spaceBelow={'default'}>
                <Typography component={'h3'} fontWeight={'bold'}>
                  It&apos;s never been so easy
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
                preferences are - with Thermomix® you&apos;ll find the answer.
                Simply
              </Typography>
            }
            buttonGroup={
              <ButtonGroup
                layout={'horizontal'}
                alignment={'left'}
                sizing={'hug'}
              >
                <Button buttonStyle={'primary'} size={'large'}>
                  Book a demo
                </Button>
                <Button buttonStyle={'secondary'} size={'large'}>
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
                  '/flagship/images/serving-chocolate-mousse-cropped.png',
                title: 'Request Cooking Experience',
                button: {
                  label: 'Book a demo',
                  size: screenSize.width > 935 ? 'large' : 'medium',
                },
              },
              {
                size: 'large',
                imageProps: {
                  src: '/flagship/images/tm-specials.png',
                  alt: 'Thermomix specials',
                },
                backgroundColor: 'grey',
                title: 'No gift idea yet? Discover the Thermomix® Specials',
                button: {
                  label: 'Explore more',
                  size: screenSize.width > 935 ? 'large' : 'medium',
                },
              },
            ]}
          />
          <ContentBlock
            mediaAlignment={screenSize.width > 935 ? 'left' : undefined}
            media={
              <img
                src="/flagship/images/child-drinking.png"
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
              <Button buttonStyle={'primary'} size={'large'}>
                Explore the Thermomix®
              </Button>
            }
          />
        </div>
      </section>
      <ImageTileCarousel
        images={[
          {
            src: '/flagship/carousel/lasagne.png',
            title: 'Lasagne bolognese',
          },
          {
            src: '/flagship/carousel/dalgona-coffee.png',
            title: 'Dalgona Coffee',
          },
          {
            src: '/flagship/carousel/veggie-kebab.png',
            title: 'Vegetable kebab',
          },
          {
            src: '/flagship/carousel/red-salsa.png',
            title: 'Salsa roja',
          },
          {
            src: '/flagship/carousel/result-10.jpg',
            title: 'Sourdough bread',
          },
          {
            src: '/flagship/carousel/orange-ginger-juice.png',
            title: 'Orange ginger juice',
          },
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
                  height="315"
                  src="https://www.youtube.com/embed/VDjQvbJ-YRo?si=XmRtpNB3nJzt04CP"
                  title="YouTube video player"
                  width="560"
                />
              </MediaContainer>
              <Typography
                variant={
                  screenSize.width > 1267 ? 'paragraph18' : 'paragraph16'
                }
                fontWeight={'regular'}
              >
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
            src="/flagship/images/dinner-party.png"
            alt="Dinner party"
          />
        }
        headline={
          <Headline strongColor={'red'} spaceBelow={'default'}>
            <Typography component={'h3'} variant={'h2'}>
              Try the
              {screenSize.width < 740 && <br />}
              <span> Thermomix® –</span>
              <br />
              <strong> Book a demo</strong>
            </Typography>
          </Headline>
        }
        paragraph={
          <Typography
            variant={screenSize.width > 1267 ? 'paragraph18' : 'paragraph16'}
            fontWeight={'regular'}
          >
            Simply decide together with your personal contact whether you
            would like to experience the products live or online! We are
            flexible and well prepared and can fully respond to your wishes.
          </Typography>
        }
        buttonGroup={
          <Button buttonStyle={'primary'} size={'large'}>
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
                '/flagship/images/avocado-toast.png',
              title: 'The slightly different breakfast',
              button: {
                label: 'Explore the recipe',
                size: 'medium',
              },
            },
            {
              size: 'large',
              backgroundImageSrc: '/flagship/images/guacamole.png',
              title: 'Yes, you can!',
              button: {
                label: 'Explore the recipe',
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
              src="/flagship/images/thermomix-with-knife-cover.png"
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
            <Typography
              variant={
                screenSize.width > 1267 ? 'paragraph18' : 'paragraph16'
              }
              fontWeight={'regular'}
            >
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
            <Button buttonStyle={'primary'} size={'large'}>
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
          </GridItem>
          {screenSize.width > 739 ? (
            teaserTiles.map(teaser => (
              <GridItem columns={4} key={teaser.key}>
                {teaser}
              </GridItem>
            ))
          ) : (
            <GridItem>
              <ImageGallery
                slides={teaserTiles}
                screenSizes={screenSize}
                noControl
                imageTile
                options={{ loop: false }}
              />
            </GridItem>
          )}
        </GridContainer>
      </section>
    </main>
  )
}
