"use client";

import ProductAnimation from "@components/landingPage/productAnimation/productAnimation";
import ScrollTriggerWatcher from "@components/landingPage/scrollTriggerWatcher/scrollTriggerWatcher";
import Spacer from "@components/shared/spacer/spacer";
import {
  BatteryLevel3Light,
  BentoBoxTiles,
  BluetoothLight,
  Button,
  ButtonGroup,
  CleaningLight,
  FunctionsTab,
  GalleryCarousel,
  GridContainer,
  GridItem,
  Header,
  Headline,
  Hero,
  ImageCarousel,
  ParallaxProductSection,
  ProductBlock,
  SectionContainer,
  SousVide,
  SousVideLight,
  Thermomix,
  TimerLight,
  Typography,
  UserReview,
  Vorwerk,
} from "@vorwerk/fibre-react";
import Link from "next/link";
import styles from "./page.module.scss";

export default function SensorLightLandingPageDE() {
  return (
    <main>
      <Header
        isLandingPage
        landingPageLogo={
          <Link href="/">
            <Thermomix size="small" />
          </Link>
        }
        logo={
          <Link href="/">
            <Vorwerk />
          </Link>
        }
      />
      <Hero
        cta={
          <ButtonGroup alignment="center" layout="vertical">
            <Button size="medium" buttonStyle="primary">
              Jetzt shoppen
            </Button>
          </ButtonGroup>
        }
        headline={
          <Headline eyebrowLine="Thermomix® Sensor" strongColor="white">
            <Typography component="h1">
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    "Verwandel<br> Schätzungen in<br><strong>Messungen</strong>",
                }}
              />
            </Typography>
          </Headline>
        }
        image={
          <img
            alt="Sensor"
            src="/landingPage/hero/sensor-hero-default-cover.png"
            style={{ display: "none" }}
          />
        }
        isLandingPage
        video={
          <video autoPlay muted playsInline loop>
            <source
              src="/landingPage/hero/sensor-hero-default.mp4"
              type="video/mp4"
            />
          </video>
        }
      />
      <ParallaxProductSection
        logoImage="/library/images/parallaxProductSection/logos.png"
        productImage="/landingPage/hero/sensor-hero-parallax.png"
        productImageAlt="Thermomix® Sensor"
      />
      <SectionContainer>
        <GridContainer>
          <GridItem
            columns={10}
            start={2}
            end={12}
            className={styles.textCentered}
          >
            <Headline
              children={
                <Typography component="h2">
                  <span>
                    Garantiert perfekte Ergebnisse im Ofen, in der Pfanne und
                    auf dem Grill
                  </span>
                </Typography>
              }
            />
          </GridItem>
        </GridContainer>
      </SectionContainer>
      <SectionContainer>
        <ScrollTriggerWatcher>
          <GalleryCarousel
            desktopSlides={[
              {
                bigImagePosLeft: false,
                images: [
                  {
                    url: "/landingPage/imageGallery/sensor-loaf.jpg",
                    alt: "Image 1",
                    title: "",
                  },
                  {
                    url: "/landingPage/imageGallery/sensor-pan.jpg",
                    alt: "Image 2",
                    title: "",
                  },
                  {
                    url: "/email/collage/sensor-father-daughter.jpg",
                    alt: "Image 3",
                    title: "",
                  },
                ],
              },
              {
                bigImagePosLeft: true,
                images: [
                  {
                    url: "/landingPage/imageGallery/sensor-tm6-cake.jpg",
                    alt: "Image 4",
                    title: "",
                  },
                  {
                    url: "/landingPage/imageGallery/sensor-grill.jpg",
                    alt: "Image 5",
                    title: "",
                  },
                  {
                    url: "/landingPage/imageGallery/sensor-mother-daughter.jpg",
                    alt: "Image 6",
                    title: "",
                  },
                ],
              },
              {
                bigImagePosLeft: false,
                images: [
                  {
                    url: "/landingPage/imageGallery/sensor-man-fish.jpg",
                    alt: "Image 7",
                    title: "",
                  },
                  {
                    url: "/landingPage/imageGallery/sensor-app-juice.jpg",
                    alt: "Image 8",
                    title: "",
                  },
                  {
                    url: "/landingPage/imageGallery/sensor-oven-cake.jpg",
                    alt: "Image 9",
                    title: "",
                  },
                ],
              },
            ]}
            mobileSlides={[
              {
                mobileCarouselItems: [
                  {
                    url: "/landingPage/imageGallery/sensor-loaf.jpg",
                    alt: "Image 1",
                    title: "",
                  },
                  {
                    url: "/landingPage/imageGallery/sensor-pan.jpg",
                    alt: "Image 2",
                    title: "",
                  },
                  {
                    url: "/email/collage/sensor-father-daughter.jpg",
                    alt: "Image 3",
                    title: "",
                  },
                  {
                    url: "/landingPage/imageGallery/sensor-tm6-cake.jpg",
                    alt: "Image 4",
                    title: "",
                  },
                  {
                    url: "/landingPage/imageGallery/sensor-grill.jpg",
                    alt: "Image 5",
                    title: "",
                  },
                  {
                    url: "/landingPage/imageGallery/sensor-mother-daughter.jpg",
                    alt: "Image 6",
                    title: "",
                  },
                  {
                    url: "/landingPage/imageGallery/sensor-man-fish.jpg",
                    alt: "Image 7",
                    title: "",
                  },
                  {
                    url: "/landingPage/imageGallery/sensor-app-juice.jpg",
                    alt: "Image 8",
                    title: "",
                  },
                  {
                    url: "/landingPage/imageGallery/sensor-oven-cake.jpg",
                    alt: "Image 9",
                    title: "",
                  },
                ],
              },
            ]}
          />
        </ScrollTriggerWatcher>
      </SectionContainer>
      <SectionContainer>
        <GridContainer>
          <GridItem columns={4}>
            <Headline
              children={
                <Typography component="h3" fontWeight="bold">
                  Was ist der
                  <br /> Thermomix® Sensor?
                </Typography>
              }
            />
          </GridItem>
          <GridItem columns={8}>
            <Typography component="intro">
              <span style={{ whiteSpace: "pre-line" }}>
                {`Mit dem Thermomix® Sensor bringen wir die Erfolgsgarantie unserer Guided-Cooking Rezepte erstmals auch auf Herd, Ofen und Grill.
                
                Der Thermomix® Sensor ist so viel mehr als ein gewöhnliches Speise-Thermometer. 
Mit der richtigen Kerntemperatur erzielst du perfekte Ergebnisse bei Kuchen, Brot, Fleisch oder Fisch. Entdecke die neuen Möglichkeiten für grenzenlosen Genuss!`}
              </span>
            </Typography>
          </GridItem>
        </GridContainer>
      </SectionContainer>
      <SectionContainer>
        <GridContainer>
          <GridItem
            columns={10}
            start={2}
            end={12}
            className={styles.textCentered}
          >
            <Headline
              children={
                <Typography component="h1">
                  <span>
                    Thermomix® Sensor heißt <strong>volle Kontrolle</strong>
                  </span>
                </Typography>
              }
              strongColor="green"
            />
          </GridItem>
        </GridContainer>
        <ProductAnimation />
        <Spacer size={48} sizeMedium={0} />
        <BentoBoxTiles
          tiles={[
            {
              bigTile: false,
              icon: <TimerLight />,
              image: "/landingPage/bento/bento-sensor-plate.png",
              imageBottom: false,
              text: "Geschmack, Konsistenz und perfekte Ergebnisse garantiert für alle Lebensmittel jenseits des Mixtopfs.",
              title: "Punktgenaue Perfektion",
            },
            {
              bigTile: false,
              icon: <SousVideLight />,
              image: "",
              imageBottom: false,
              text: "Der Hitzeschutz des Sensors erlaubt den Einsatz in bis zu 275°C heißen Umgebungen (220°C mit Halterung).",
              title: "Bis zu 275°C",
            },
            {
              bigTile: true,
              icon: <BluetoothLight />,
              image: "/landingPage/bento/bento-sensor-phone.png",
              imageBottom: true,
              text: "Ermöglicht die kabellose Verbindung mit deinem Thermomix® TM6 und Smartphone.",
              title: "Bluetooth®",
            },
            {
              bigTile: false,
              icon: <BatteryLevel3Light />,
              image: "",
              imageBottom: false,
              text: "Im Sinne der Nachhaltigkeit setzen wir auf wiederaufladbare und austauschbare AAA-Batterien.",
              title: "Bis zu 24h Akkulaufzeit",
            },
            {
              bigTile: false,
              icon: <CleaningLight />,
              image: "/landingPage/bento/bento-sensor-water.png",
              imageBottom: true,
              text: "Dank der Wasserbeständig-keit brauchst du dir keine Sorgen um Wasserschäden machen.",
              title: "100% wasser-beständig",
            },
          ]}
        />
        <Spacer size={96} sizeMedium={0} />
        <FunctionsTab
          items={[
            {
              id: 1,
              text: "Sensor und Ladestation",
              isActive: false,
              scrollMin: 0,
              scrollMax: 1,
              media: {
                type: "video",
                src: "/landingPage/stepByStep/sensor/01_take.mp4",
              },
              icon: <SousVide />,
              useIcon: false,
            },
            {
              id: 2,
              text: "Platziere den Sensor",
              isActive: false,
              scrollMin: 0,
              scrollMax: 1,
              media: {
                type: "video",
                src: "/landingPage/stepByStep/sensor/02_insert.mp4",
              },
              icon: <SousVide />,
              useIcon: false,
            },
            {
              id: 3,
              text: "Kochen mit dem Sensor",
              isActive: false,
              scrollMin: 0,
              scrollMax: 1,
              media: {
                type: "video",
                src: "/landingPage/stepByStep/sensor/03_cooking.mp4",
              },
              icon: <SousVide />,
              useIcon: false,
            },
            {
              id: 4,
              text: "Reinigung",
              isActive: false,
              scrollMin: 0,
              scrollMax: 1,
              media: {
                type: "video",
                src: "/landingPage/stepByStep/sensor/04_cleaning.mp4",
              },
              icon: <SousVide />,
              useIcon: false,
            },
          ]}
        />
        <Spacer size={96} sizeMedium={0} />
        <GridContainer>
          <GridItem
            columns={10}
            start={2}
            end={12}
            className={styles.textCentered}
          >
            <>
              <Headline
                spaceBelow={"default"}
                children={
                  <Typography component="h1">
                    <span>
                      Koche immer auf
                      <br />
                      <strong>den Punkt</strong>
                    </span>
                  </Typography>
                }
                strongColor="green"
              />
              <Typography component="intro">
                <span>
                  Perfekt zubereitetes Fleisch und Fisch, leichte und fluffige
                  Kuchen, knuspriges Brot
                </span>
              </Typography>
            </>
          </GridItem>
        </GridContainer>
        <Spacer size={16} sizeMedium={40} />
        <ImageCarousel
          eyecatcher={{
            backgroundColor: "green",
            firstLine: "Success",
            rotation: "5 degrees",
            secondLine: "guaranteed",
            thirdLine: "",
          }}
          productImage="/landingPage/carousel/carousel-sensor-4-3.png"
          productImageAlt="Thermomix® Sensor"
          images={[
            {
              url: "/library/images/image-carousel/image-carousel1.png",
              alt: "Image 1",
              title: "Image 1",
            },
            {
              url: "/library/images/image-carousel/image-carousel2.png",
              alt: "Image 2",
              title: "Image 2",
            },
            {
              url: "/library/images/image-carousel/image-carousel3.png",
              alt: "Image 3",
              title: "Image 3",
            },
            {
              url: "/library/images/image-carousel/image-carousel4.png",
              alt: "Image 4",
              title: "Image 4",
            },
            {
              url: "/library/images/image-carousel/image-carousel5.png",
              alt: "Image 5",
              title: "Image 5",
            },
            {
              url: "/library/images/image-carousel/image-carousel6.png",
              alt: "Image 6",
              title: "Image 6",
            },
            {
              url: "/library/images/image-carousel/image-carousel7.png",
              alt: "Image 7",
              title: "Image 7",
            },
            {
              url: "/library/images/image-carousel/image-carousel8.png",
              alt: "Image 8",
              title: "Image 8",
            },
          ]}
          showEyecatcher
        />
      </SectionContainer>
      <SectionContainer>
        <UserReview
          additionalText="42 Bewertungen"
          overallStars={4.5}
          reviewItems={[
            {
              stars: 5,
              reviewText:
                "Ich bin total begeistert, da ich  immer Probleme mit meinem sehr einfachen Backofen hatte, aber mit dem Sensor muss ich nicht immer nachsehen, ob er fertig ist.",
            },
            {
              stars: 4,
              reviewText:
                "Es ist toll, dass man alle Werte am Thermomix ablesen kann. Sehr schöne technische Integration. Perfekt für die Zubereitung von Braten und Torten. ",
            },
            {
              stars: 5,
              reviewText:
                "Endlich kein Stäbchentest mehr! Macht Spaß und erleichtert das Kuchenbacken.",
            },
          ]}
        />
        <Spacer size={32} sizeMedium={64} />
      </SectionContainer>
      <ProductBlock
        ctaText="Jetzt shoppen"
        headline="Thermomix® Sensor"
        image="/shared/product/sensor-product.png"
        imageAlt="Thermomix® Sensor"
        price="149,00 €"
      />
    </main>
  );
}
