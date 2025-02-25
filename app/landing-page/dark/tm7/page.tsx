"use client";

import BentoBoxTiles from "@components/cosyLandingPage/bentoBoxTiles/BentoBoxTiles";
import FunctionsTab from "@components/cosyLandingPage/functionsTabNew/functionsTab";
import GalleryCarousel from "@components/cosyLandingPage/galleryCarousel/GalleryCarousel";
import Hero from "@components/cosyLandingPage/hero/hero";
import ProductAnimation from "@components/cosyLandingPage/productAnimation/productAnimation";
import ProductBlock from "@components/cosyLandingPage/productBlock/ProductBlock";
import StickyProductBar from "@components/cosyLandingPage/stickyProductBar/StickyProductBar";
import FacebookIcon from "@public/cosy/socialIcons/facebookIcon";
import FacebookMessengerIcon from "@public/cosy/socialIcons/facebookMessengerIcon";
import SocialMediaShare from "@public/cosy/socialIcons/socialShareIcon";
import TelegramIcon from "@public/cosy/socialIcons/telegramIcon";
import WhatsappIcon from "@public/cosy/socialIcons/whatsappIcon";
import XIcon from "@public/cosy/socialIcons/xIcon";
import useScreenSize from "@utils/useScreenSize";
import {
  FooterSocialLinkBlock,
  GridContainer,
  GridItem,
  Headline,
  ImageCarousel,
  MediaContainer,
  SectionContainer,
  Typography,
} from "@vorwerk/fibre-react";
import styles from "./page.module.scss";

export default function TM7Page() {
  const screenSize = useScreenSize();
  const isDesktop = screenSize.width >= 1268;

  return (
    <>
      <main className={styles.tm7Page}>
        <Hero />
        <SectionContainer>
          <GridContainer>
            <GridItem
              columns={10}
              start={2}
              end={12}
              columnsXL={8}
              startXL={3}
              endXL={11}
              className={styles.textCentered}
            >
              <Headline
                strongColor="green"
                spaceBelow="default"
                children={
                  <Typography component="p" variant="h2">
                    <span>
                      Share your love.
                      <br />
                      Like <strong>never before</strong>.
                    </span>
                  </Typography>
                }
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem
              columns={10}
              start={2}
              end={12}
              columnsXL={8}
              startXL={3}
              endXL={11}
              className={styles.textCentered}
            >
              <Typography component="intro">
                <span>
                  The all-new TM7 takes cooking to the next level with smart
                  tech and elegant design.
                </span>
              </Typography>
            </GridItem>
          </GridContainer>
        </SectionContainer>
        <SectionContainer>
          <FunctionsTab
            darkMode
            items={[
              {
                id: 1,
                text: "Designed like never before.",
                isActive: true,
                scrollMin: 0,
                scrollMax: 1,
                media: {
                  type: "video",
                  src: "/cosy/cosy_step1.mp4",
                },
                description:
                  "A sleek base, and a heat-insulated bowl that keeps it cool while making your kitchen look even more beautiful.",
              },
              {
                id: 2,
                text: "Smart like never before.",
                isActive: false,
                scrollMin: 0,
                scrollMax: 1,
                media: {
                  type: "video",
                  src: "/cosy/cosy_step2.mp4",
                },
                description:
                  "A stunning 10-inch multi-touch display that makes manual and Guided Cooking a completely new experience.",
              },
              {
                id: 3,
                text: "Silent like never before.",
                isActive: false,
                scrollMin: 0,
                scrollMax: 1,
                media: {
                  type: "video",
                  src: "/cosy/cosy_step1.mp4",
                },
                description:
                  "So silent, you'll wonder if it's even on. Feel the power without the noise.",
              },
              {
                id: 4,
                text: "Easy like never before.",
                isActive: false,
                scrollMin: 0,
                scrollMax: 1,
                media: {
                  type: "video",
                  src: "/cosy/cosy_step4.mp4",
                },
                description:
                  "The Open Cooking mode for delicate ingredients with no mixing knife rotation.",
              },
            ]}
          />
        </SectionContainer>
        <SectionContainer>
          <GridContainer>
            <GridItem
              columns={10}
              start={2}
              end={12}
              columnsXL={8}
              startXL={3}
              endXL={11}
              className={styles.textCentered}
            >
              <Headline
                strongColor="green"
                children={
                  <Typography component="p" variant="h2">
                    <span>
                      Engineered for
                      <br />
                      <strong>culinary excellence</strong>.
                    </span>
                  </Typography>
                }
              />
            </GridItem>
          </GridContainer>
          <ProductAnimation />
          <GridContainer>
            <GridItem columns={12} className={styles.textCentered}>
              {isDesktop ? (
                <>
                  <Typography component="intro">
                    Redesigned Varoma® for more space.
                  </Typography>
                  <Typography component="intro">
                    Heat insulated for safe touch.
                  </Typography>
                  <Typography component="intro">
                    Compact base with an expansive display.
                  </Typography>
                </>
              ) : (
                <>
                  <Typography component="p" variant="paragraph16">
                    Redesigned Varoma® for more space.
                  </Typography>
                  <Typography component="p" variant="paragraph16">
                    Heat insulated for safe touch.
                  </Typography>
                  <Typography component="p" variant="paragraph16">
                    Compact base with an expansive display.
                  </Typography>
                </>
              )}
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
                strongColor="green"
                spaceBelow="additional"
                children={
                  <Typography component="p" variant="h2">
                    <span>
                      Discover what the <br />
                      <strong>all-new TM7</strong> can do for you.
                    </span>
                  </Typography>
                }
              />
            </GridItem>
          </GridContainer>
          <GalleryCarousel
            darkMode
            desktopSlides={[
              {
                bigImagePosLeft: false,
                images: [
                  {
                    url: "/cosy/gallery-carousel-1.jpg",
                    alt: "Image 1",
                    title: "",
                    description:
                      "Save time: Cook entire meals with multi-level cooking while Guided Cooking and automated modes do the work. Scale recipes instantly.",
                  },
                ],
              },
              {
                bigImagePosLeft: false,
                images: [
                  {
                    url: "/cosy/gallery-carousel-2.jpg",
                    alt: "Image 2",
                    title: "",
                    description:
                      "Save space: One elegant device replaces dozens of appliances and takes less space than a microwave.",
                  },
                ],
              },
              {
                bigImagePosLeft: false,
                images: [
                  {
                    url: "/cosy/gallery-carousel-3.jpg",
                    alt: "Image 3",
                    title: "",
                    description:
                      "Save money: Create restaurant-quality meals at home for a fraction of the cost.",
                  },
                ],
              },
              {
                bigImagePosLeft: false,
                images: [
                  {
                    url: "/cosy/gallery-carousel-4.jpg",
                    alt: "Image 4",
                    title: "",
                    description:
                      "Eat healthily: Transform everyday ingredients into nutritious, delicious meals everyone will love.",
                  },
                ],
              },
            ]}
            mobileSlides={[
              {
                mobileCarouselItems: [
                  {
                    url: "/cosy/gallery-carousel-1.jpg",
                    alt: "Image 1",
                    title: "",
                    description:
                      "Save time: Cook entire meals with multi-level cooking while Guided Cooking and automated modes do the work. Scale recipes instantly.",
                  },
                  {
                    url: "/cosy/gallery-carousel-2.jpg",
                    alt: "Image 2",
                    title: "",
                    description:
                      "Save space: One elegant device replaces dozens of appliances and takes less space than a microwave.",
                  },
                  {
                    url: "/cosy/gallery-carousel-3.jpg",
                    alt: "Image 3",
                    title: "",
                    description:
                      "Save money: Create restaurant-quality meals at home for a fraction of the cost.",
                  },
                  {
                    url: "/cosy/gallery-carousel-4.jpg",
                    alt: "Image 4",
                    title: "",
                    description:
                      "Eat healthily: Transform everyday ingredients into nutritious, delicious meals everyone will love.",
                  },
                ],
              },
            ]}
          />
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
                strongColor="green"
                spaceBelow="additional"
                children={
                  <Typography component="p" variant="h2">
                    <span>
                      Meet the
                      <strong> all-new TM7</strong>.
                    </span>
                  </Typography>
                }
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem columns={12}>
              <MediaContainer aspectRatio="16/9">
                <video
                  controls
                  preload="auto"
                  poster="/cosy/hero-video-model-background.png"
                >
                  <source src="/cosy/hero-video-model.mp4" type="video/mp4" />
                </video>
              </MediaContainer>
            </GridItem>
          </GridContainer>
        </SectionContainer>
        <SectionContainer gap="gap01">
          <div>
            <GridContainer>
              <GridItem
                columns={10}
                start={2}
                end={12}
                className={styles.textCentered}
              >
                <Headline
                  strongColor="green"
                  spaceBelow="default"
                  children={
                    <Typography component="p" variant="h2">
                      {isDesktop ? (
                        <span>
                          Explore <strong>over 1000,000 recipes</strong>
                          <br /> tailored to you.
                        </span>
                      ) : (
                        <span>
                          Explore <strong>over 1000,000 recipes</strong>{" "}
                          tailored to you.
                        </span>
                      )}
                    </Typography>
                  }
                />
              </GridItem>
            </GridContainer>
            <ImageCarousel
              productImage="/cosy/image-gallery-product.png"
              productImageAlt="TM7 front side"
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
              showEyecatcher={false}
            />
          </div>
          <GridContainer>
            <GridItem
              columns={10}
              start={2}
              end={12}
              columnsXL={8}
              startXL={3}
              endXL={11}
              className={styles.textCentered}
            >
              {isDesktop ? (
                <Typography component="intro">
                  From the perfect risotto to beloved classics, let Thermomix®
                  inspire your next culinary adventure.
                </Typography>
              ) : (
                <Typography component="p" variant="paragraph16">
                  From the perfect risotto to beloved classics, let Thermomix®
                  inspire your next culinary adventure.
                </Typography>
              )}
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
                strongColor="green"
                spaceBelow="additional"
                children={
                  <Typography component="p" variant="h2">
                    <span>
                      Designed to <br />
                      <strong>deliver more</strong>.
                    </span>
                  </Typography>
                }
              />
            </GridItem>
          </GridContainer>
          <BentoBoxTiles
            darkMode
            tiles={[
              {
                bigTile: false,
                image: "/cosy/bento-tray.png",
                imageBottom: true,
                text: "Perfect results every time you cook.",
                title: "100%",
                titleSecondary: "success guaranteed",
              },
              {
                bigTile: false,
                image: "",
                imageBottom: false,
                text: "Replaces 20+ kitchen appliances.",
                title: "1",
                titleSecondary: "elegant device",
              },
              {
                bigTile: true,
                image: "/cosy/bento-device.png",
                imageBottom: false,
                text: "at your fingertips.",
                title: "100,000+",
                titleSecondary: "guided recipes",
              },
              {
                bigTile: false,
                image: "",
                imageBottom: false,
                text: "for endless possibilities.",
                title: "20+",
                titleSecondary: "cooking modes",
              },
              {
                bigTile: false,
                image: "/cosy/bento-varoma-2.png",
                imageBottom: false,
                text: "for complete meals.",
                title: "40%",
                titleSecondary: "increased steaming space",
              },
            ]}
          />
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
                strongColor="green"
                spaceBelow="additional"
                children={
                  <Typography component="p" variant="h2">
                    <span>
                      What's
                      <strong> included</strong>.
                    </span>
                  </Typography>
                }
              />
            </GridItem>
          </GridContainer>
          <GalleryCarousel
            darkMode
            desktopSlides={[
              {
                bigImagePosLeft: false,
                images: [
                  {
                    url: "/cosy/image_gallery_1_xxl3.png",
                    alt: "Image 1",
                    title: "",
                  },
                ],
              },
              {
                bigImagePosLeft: false,
                images: [
                  {
                    url: "/cosy/image_gallery_2_xxl3.png",
                    alt: "Image 1",
                    title: "",
                  },
                ],
              },
            ]}
            mobileSlides={[
              {
                mobileCarouselItems: [
                  {
                    url: "/cosy/image_gallery_1_xs.png",
                    alt: "Image 1",
                    title: "",
                  },
                  {
                    url: "/cosy/image_gallery_2_xs.png",
                    alt: "Image 2",
                    title: "",
                  },
                ],
              },
            ]}
          />
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
                strongColor="green"
                children={
                  <Typography component="p" variant="h2">
                    <span>
                      Be among the first to
                      <br />
                      <strong>own the all-new TM7</strong>.
                    </span>
                  </Typography>
                }
              />
            </GridItem>
          </GridContainer>
          <ProductBlock
            darkMode
            ctaText="Pre-order now"
            headline="The all-new Thermomix® TM7."
            image="/cosy/1-1_assets_light-on.png"
            imageAlt="Thermomix Thermomix® TM7."
            price="1.499 €"
          />
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
                strongColor="green"
                spaceBelow="default"
                children={
                  <Typography component="p" variant="h2">
                    <span>
                      Share your love of the
                      <br />
                      TM7 like <strong>never before</strong>.
                    </span>
                  </Typography>
                }
              />
            </GridItem>
          </GridContainer>
          <section className={styles.footerSocialLinkBlock}>
            <FooterSocialLinkBlock
              links={[
                <a href="#share" aria-label="Share">
                  <SocialMediaShare />
                </a>,
                <a href="#facebook" aria-label="Facebook">
                  <FacebookIcon />
                </a>,
                <a href="#facebookMessenger" aria-label="Facebook Messenger">
                  <FacebookMessengerIcon />
                </a>,
                <a href="#telegram" aria-label="Telegram">
                  <TelegramIcon />
                </a>,
                <a href="#x" aria-label="X">
                  <XIcon />
                </a>,
                <a href="#whatsapp" aria-label="WhatsApp">
                  <WhatsappIcon />
                </a>,
              ]}
            />
          </section>
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
                spaceBelow="additional"
                strongColor="green"
                children={
                  <Typography component="p" variant="h2">
                    <span>
                      Questions about TM7
                      <br />
                      <strong>explained</strong>.
                    </span>
                  </Typography>
                }
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem
              columns={10}
              start={2}
              end={12}
              columnsXL={8}
              startXL={3}
              endXL={11}
              className={styles.textWhite}
            >
              <div className={styles.questionSection}>
                <div>
                  <Headline
                    spaceBelow="default"
                    strongColor="green"
                    children={
                      <Typography component="p" variant="h4" fontWeight="bold">
                        <span>When will I receive my TM7?</span>
                      </Typography>
                    }
                  />
                  <Typography
                    component="p"
                    variant={isDesktop ? "paragraph18" : "paragraph16"}
                    spaceBelow
                  >
                    <span>
                      Initial deliveries start 7 April 2025. High demand means
                      delivery times may vary. Order now to secure your spot in
                      the first wave.
                    </span>
                  </Typography>
                </div>
                <div>
                  <Headline
                    spaceBelow="default"
                    strongColor="green"
                    children={
                      <Typography component="p" variant="h4" fontWeight="bold">
                        <span>When can I expect delivery?</span>
                      </Typography>
                    }
                  />
                  <Typography
                    component="p"
                    variant={isDesktop ? "paragraph18" : "paragraph16"}
                    spaceBelow
                  >
                    <span>
                      You can track the delivery status for your TM7 after your
                      order has been confirmed. Your order confirmation email
                      contains a link that takes you to a webpage where you can
                      check your delivery time.
                    </span>
                  </Typography>
                </div>
                <div>
                  <Headline
                    spaceBelow="default"
                    strongColor="green"
                    children={
                      <Typography component="p" variant="h4" fontWeight="bold">
                        <span>How does the pre-order process work?</span>
                      </Typography>
                    }
                  />
                  <Typography
                    component="p"
                    variant={isDesktop ? "paragraph18" : "paragraph16"}
                    spaceBelow
                  >
                    <span>
                      Current Thermomix owners can contact their advisor
                      directly to place a pre-order. New customers can pre-order
                      online, and a local advisor will contact you to complete
                      your purchase.
                    </span>
                  </Typography>
                </div>
                <div>
                  <Headline
                    spaceBelow="default"
                    strongColor="green"
                    children={
                      <Typography component="p" variant="h4" fontWeight="bold">
                        <span>Why pre-order now?</span>
                      </Typography>
                    }
                  />
                  <Typography
                    component="p"
                    variant={isDesktop ? "paragraph18" : "paragraph16"}
                    spaceBelow
                  >
                    <span>
                      Secure priority delivery and be among the first to
                      experience the future of cooking. Limited spots available
                      for delivery on April 7.
                    </span>
                  </Typography>
                </div>
                <div>
                  <Headline
                    spaceBelow="default"
                    strongColor="green"
                    children={
                      <Typography component="p" variant="h4" fontWeight="bold">
                        <span>How can I purchase a TM7?</span>
                      </Typography>
                    }
                  />
                  <Typography
                    component="p"
                    variant={isDesktop ? "paragraph18" : "paragraph16"}
                    spaceBelow
                  >
                    <span>
                      Simply click 'Pre-order now' and fill out the form. Our
                      advisors will be in touch with you shortly to discuss
                      further details.
                    </span>
                  </Typography>
                </div>
                <div>
                  <Headline
                    spaceBelow="default"
                    strongColor="green"
                    children={
                      <Typography component="p" variant="h4" fontWeight="bold">
                        <span>What makes TM7 different from TM6?</span>
                      </Typography>
                    }
                  />
                  <Typography
                    component="p"
                    variant={isDesktop ? "paragraph18" : "paragraph16"}
                    spaceBelow
                  >
                    <span>
                      Experience whisper-quiet operation, open cooking freedom,
                      and a stunning 10" display with TM7, plus 40% more
                      steaming space compared to TM6.
                    </span>
                  </Typography>
                </div>
                <div>
                  <Headline
                    spaceBelow="default"
                    strongColor="green"
                    children={
                      <Typography component="p" variant="h4" fontWeight="bold">
                        <span>What payment methods are accepted for TM7?</span>
                      </Typography>
                    }
                  />
                  <Typography
                    component="p"
                    variant={isDesktop ? "paragraph18" : "paragraph16"}
                  >
                    <span>
                      We accept payment via direct bank transfer. Your advisor
                      will give you all the details regarding payment while
                      securing your TM7 pre-order.
                    </span>
                  </Typography>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </SectionContainer>
      </main>
      <div style={{ position: "relative", zIndex: 200 }}>
        <StickyProductBar />
      </div>
    </>
  );
}
