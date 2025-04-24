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
  Typography
} from '@vorwerk/fibre-react'
import Link from 'next/link'
import styles from './page.module.scss'
import CategoryTiles from '@components/flagship/categoryTiles/categoryTiles'
import useScreenSize from '@utils/useScreenSize'
import ImageGallery from '@components/flagship/imageGallery/imageGallery'
import CategoryTile from '@components/flagship/categoryTile/categoryTile'

export default function Home() {
  const screenSize = useScreenSize()

  return (
    <main className={styles.plp}>
      <div className={styles.hero}>
        <Hero
          cta={
            <ButtonGroup alignment="center" layout="vertical">
              <Button size="large" buttonStyle="primary">
                Book a Cooking Experience
              </Button>
              <Button size="large" buttonStyle="tertiary">
                Learn more
              </Button>
            </ButtonGroup>
          }
          headline={
            <Headline strongColor="green" subline={'Starting from 1.499 €'}>
              <Typography component="h1">
                Mealtimes
                <br />
                <strong>Reimagined</strong>
              </Typography>
            </Headline>
          }
          image={
            <img alt="Thermomix" src="/flagship/hero/ds360-hero.png" />
          }
          type={'colorFill'}
          backgroundColor={'green'}
        />
        {screenSize.width > 935 && (
          <div className={styles.overlayIconWrapper}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.2 31.3333V16.6667C31.2 12.6166 27.9764 9.33333 24 9.33333C20.0236 9.33333 16.8 12.6166 16.8 16.6667V31.3333C16.8 35.3834 20.0236 38.6667 24 38.6667C27.9764 38.6667 31.2 35.3834 31.2 31.3333ZM24 7.5C19.0294 7.5 15 11.6041 15 16.6667V31.3333C15 36.3959 19.0294 40.5 24 40.5C28.9706 40.5 33 36.3959 33 31.3333V16.6667C33 11.6041 28.9706 7.5 24 7.5Z"
                fill="#23282A"
              />
              <rect
                x="22"
                y="16"
                width="4"
                height="4"
                rx="2"
                fill="#23282A"
              />
            </svg>
            <div className={styles.overlayIconText}>
              <Typography variant="paragraph14" fontWeight="medium">
                <span>Scroll down</span>
              </Typography>
            </div>
          </div>
        )}
      </div>
      <section className={styles.prominentSection}>
        <GridContainer>
          <GridItem
            columns={12}
            className={`${styles.textCentered} ${styles.overwrittenMargin}`}
          >
            <Headline strongColor={'green'} spaceBelow={'additional'}>
              <Typography component={'h2'}>
                The world’s
                {screenSize.width < 740 && <br />}
                <strong> smartest kitchen</strong> –
                {screenSize.width > 739 && <br />}
                <span> Thermomix® TM6</span>
              </Typography>
            </Headline>
          </GridItem>
        </GridContainer>
        <div className={styles.tilesContainer}>
          <GridContainer>
            <GridItem>
              <ImageGallery
                slides={[
                  <CategoryTile
                    key={'tile1'}
                    size={'small'}
                    backgroundColor={'grey'}
                    imageProps={{
                      src: '/flagship/images/thermomix.png',
                      alt: 'Thermomix',
                    }}
                    title={'Thermomix® TM6'}
                  />,
                  <CategoryTile
                    key={'tile2'}
                    size={'small'}
                    backgroundColor={'grey'}
                    imageProps={{
                      src: '/flagship/images/accessories.png',
                      alt: 'Thermomix accessories',
                    }}
                    title={'Accessories'}
                  />,
                  <CategoryTile
                    key={'tile3'}
                    size={'small'}
                    brandColor={'#23282A'}
                    imageProps={{
                      src: '/library/images/tm6.png',
                      alt: 'Thermomix',
                    }}
                    title={'Special offers'}
                  />,
                ]}
                options={{ loop: false, align: 'start' }}
                screenSizes={screenSize}
                containerWidth={{
                  large: 704,
                  extraLarge: 1120,
                  extraExtraLarge: 1440,
                }}
                noControl
              />
            </GridItem>
          </GridContainer>
          <CategoryTiles
            categoryTilesData={[
              {
                size: 'large',
                backgroundColor: 'grey',
                imageProps: {
                  src: '/flagship/images/cooking-books.png',
                  alt: 'Cooking books',
                },
                title: 'Cooking books',
                button: {
                  label: 'Explore more',
                  size: screenSize.width > 936 ? 'large' : 'medium',
                },
                eyeCatcherProps: {
                  firstLine: 'Only until',
                  secondLine: '25.12.23',
                  backgroundColor: 'purple',
                  size: 'small',
                },
              },
              {
                size: 'large',
                backgroundImageSrc: '/flagship/images/soup.png',
                title: 'Thousands of recipes – Endless inspiration',
                button: {
                  label: 'Join Cookidoo® for free',
                  size: screenSize.width > 936 ? 'large' : 'medium',
                },
              },
            ]}
          />
        </div>
      </section>
      <section
        className={`${styles.prominentSection} ${styles.sectionWithRadius}`}
      >
        <GridContainer>
          <GridItem
            columns={12}
            className={`${styles.textCentered} ${styles.overwrittenMargin} ${styles.overwrittenHeadline}`}
          >
            <Headline strongColor={'green'} spaceBelow={'additional'}>
              <Typography component={'h2'}>
                Introducing the
                <br />
                <strong>Thermomix® TM6</strong>
              </Typography>
            </Headline>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem columns={12}>
            <div className={styles.videoWithTextBlock}>
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
              <div className={styles.textBlock}>
                <Typography
                  fontWeight="regular"
                  variant={
                    screenSize.width > 1267 ? 'paragraph18' : 'paragraph16'
                  }
                >
                  This all-in-one kitchen appliance embodies versatility with
                  over 20 different functions and modes, all in one sleek
                  compact machine. From meal planning, to ingredient shopping,
                  to cooking, the TM6 has your back so you can seamlessly
                  create the perfect meal, every time.
                </Typography>
                <ButtonGroup>
                  <Link href="#">
                    <Button size="large" buttonStyle="primary">
                      Book a demo
                    </Button>
                  </Link>
                  <Link href="#">
                    <Button size="large" buttonStyle="tertiary">
                      Learn more
                    </Button>
                  </Link>
                </ButtonGroup>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </section>
      <section className={styles.prominentSection}>
        <GridContainer>
          <GridItem
            columns={12}
            className={`${styles.textCentered} ${styles.overwrittenMargin} ${styles.overwrittenHeadline}`}
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
                  Button
                </Button>
              </Link>
            </ButtonGroup>
          }
        ></ContentBlock>
      </section>
    </main>
  )
}
