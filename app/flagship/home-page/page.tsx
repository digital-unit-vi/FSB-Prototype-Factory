"use client";

import {
  AdvisorDropdown,
  AdvisorDropdownMenuItem,
  Button,
  ButtonGroup,
  ContentBlock,
  GridContainer,
  GridItem,
  Header,
  HeaderButton,
  Headline,
  Hero,
  Location,
  Menu,
  NavItem,
  Search,
  SectionSeparator,
  TapLight,
  Typography,
  User,
  Vorwerk,
} from "@components/build-assets/index.js";
import CategoryTiles from "@components/flagships/categoryTiles/categoryTiles";
import { Footer } from "@components/flagships/footer/footer";
import useScreenSize from "@utils/useScreenSize";
import Link from "next/link";
import styles from "./page.module.scss";

export default function FlagshipHomePage() {
  const screenSize = useScreenSize();

  return (
    <>
      <main className={styles.hp}>
        <Header
          advisor={
            <AdvisorDropdown
              buttonLabel="Advisor"
              buttonAriaLabel="Your advisors: Thermomix® advisor Lisa connected"
              buttonAvatars={[
                <img
                  alt=""
                  src="/library/images/avatars/avatar2.png"
                  key="1"
                />,
              ]}
            >
              <AdvisorDropdownMenuItem
                avatar={
                  <img alt="" src="/library/images/avatars/avatar2.png" />
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
                icon={<Search />}
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
          logo={<Vorwerk />}
          menu={
            <HeaderButton label="Menu">
              <Menu />
            </HeaderButton>
          }
          mobileAccountButton={
            <Button icon={<User />} size="large">
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
                  key="tm"
                  navItems={[
                    <NavItem
                      href="#"
                      label="Thermomix® TM6"
                      level={3}
                      key="tm-tm6"
                    />,
                    <NavItem
                      href="#"
                      label="Accessories"
                      level={3}
                      key="tm-accessories"
                    />,
                    <NavItem
                      href="#"
                      label="Specials"
                      level={3}
                      key="tm-specials"
                    />,
                    <NavItem
                      href="#"
                      label="Spare Parts"
                      level={3}
                      key="tm-parts"
                    />,
                    <NavItem
                      href="#"
                      label="Cooking books"
                      level={3}
                      key="tm-books"
                    />,
                    <NavItem
                      href="#"
                      label="Current offers"
                      level={3}
                      key="tm-offers"
                    />,
                  ]}
                />,
                <NavItem
                  href="#"
                  label="Kobold"
                  level={2}
                  key="kobold"
                  navItems={[
                    <NavItem
                      href="#"
                      label="Accessories"
                      level={3}
                      key="kobold-accessories"
                    />,
                    <NavItem
                      href="#"
                      label="Specials"
                      level={3}
                      key="kobold-specials"
                    />,
                    <NavItem
                      href="#"
                      label="Spare Parts"
                      level={3}
                      key="kobold-parts"
                    />,
                    <NavItem
                      href="#"
                      label="Current offers"
                      level={3}
                      key="tm-offers"
                    />,
                  ]}
                />,
                <NavItem
                  href="#"
                  label="Kobold Configurator"
                  level={2}
                  key="kobold-configurator"
                  navItems={[
                    <NavItem
                      href="#"
                      label="Configure vacuum cleaner"
                      level={3}
                      key="configurator-vacuum-cleaner"
                    />,
                    <NavItem
                      href="#"
                      label="Hard floor cleaning"
                      level={3}
                      key="configurator-hard-floor-cleaning"
                    />,
                    <NavItem
                      href="#"
                      label="Carpet cleaning"
                      level={3}
                      key="configurator-carpet-cleaning"
                    />,
                    <NavItem
                      href="#"
                      label="Upholstery & mattress cleaning"
                      level={3}
                      key="configurator-upholstery-mattress-cleaning"
                    />,
                    <NavItem
                      href="#"
                      label="Other fields of application"
                      level={3}
                      key="configurator-other-fields-of-application"
                    />,
                  ]}
                />,
                <NavItem
                  href="#"
                  label="E-shop"
                  level={2}
                  key="shop"
                  navItems={[
                    <NavItem
                      href="#"
                      label="Thermomix® products"
                      level={3}
                      key="eshop-thermomix-products"
                    />,
                    <NavItem
                      href="#"
                      label="Kobold products"
                      level={3}
                      key="eshop-kobold-products"
                    />,
                    <NavItem
                      href="#"
                      label="Vouchers"
                      level={3}
                      key="vouchers"
                    />,
                  ]}
                />,
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
                  label="column 1"
                  level={2}
                  key="col-1"
                  navItems={[
                    <NavItem
                      href="col1-1"
                      label="col1-1"
                      level={3}
                      key="col-1-1"
                    />,
                    <NavItem
                      href="col1-2"
                      label="col1-2"
                      level={3}
                      key="col-1-2"
                    />,
                    <NavItem
                      href="col1-3"
                      label="col1-3"
                      level={3}
                      key="col-1-3"
                    />,
                  ]}
                />,
                <NavItem href="#" label="column 2" level={2} key="col-2" />,
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
                  key="support"
                  label="column 1"
                  level={2}
                  navItems={[
                    <NavItem
                      href="col1-1"
                      label="col1-1"
                      level={3}
                      key="support-1-1"
                    />,
                    <NavItem
                      href="col1-2"
                      label="col1-2"
                      level={3}
                      key="support-1-2"
                    />,
                    <NavItem
                      href="col1-3"
                      label="col1-3"
                      level={3}
                      key="support-1-3"
                    />,
                  ]}
                />,
              ]}
            />,
            <NavItem key="Career" href="#" label="Career" level={1} />,
            <NavItem key="E-shop" href="#" label="E-shop" level={1} />,
          ]}
          backgroundType="blackGradient"
          stickyMode="normal"
        />
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
              <Headline strongColor="yellow" subline="Prepare the perfect meal">
                <Typography component="h1">
                  <span
                    dangerouslySetInnerHTML={{
                      __html:
                        "<strong>More time</strong><br/>doing the things<br/>you love",
                    }}
                  />
                </Typography>
              </Headline>
            }
            image={
              <img alt="Woman meditating" src="/flagship/hero/home-page.png" />
            }
          />
          <div className={styles.overlayIconWrapper}>
            {screenSize.width > 935 ? (
              <img
                src={"/flagship/hero/mouse.svg"}
                alt={"Scroll down"}
                className={styles.overlayIcon}
              />
            ) : (
              <TapLight />
            )}
            <div className={styles.overlayIconText}>
              <Typography variant="paragraph14" fontWeight="medium">
                <span>
                  {screenSize.width > 935 ? "Scroll down" : "Swipe up"}
                </span>
              </Typography>
            </div>
          </div>
        </div>
        <section className={styles.defaultSection}>
          <GridContainer>
            <GridItem columns={12} className={styles.textCentered}>
              <Headline spaceBelow="additional" strongColor="green">
                <Typography component="h2">
                  <span>
                    Thermomix® TM6
                    <br />
                    <strong>makes it possible</strong>
                  </span>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <div className={styles.contentAndCategoryContainer}>
            <ContentBlock
              buttonGroup={
                <ButtonGroup>
                  <Link href="#">
                    <Button size="large" buttonStyle="primary">
                      Book a demo
                    </Button>
                  </Link>
                  <Link href="#">
                    <Button size="large" buttonStyle="secondary">
                      Buy now
                    </Button>
                  </Link>
                </ButtonGroup>
              }
              mediaAlignment="left"
              media={
                <img
                  src="/flagship/images/couple-eating.png"
                  alt="Couple eating"
                />
              }
              headline={
                <Headline spaceBelow="default">
                  <Typography component="h3" fontWeight="bold">
                    Time to enjoy together!
                  </Typography>
                </Headline>
              }
              paragraph={
                <Typography
                  fontWeight="regular"
                  variant={
                    screenSize.width > 1267 ? "paragraph18" : "paragraph16"
                  }
                >
                  Discover the Thermomix® TM6 and see how it can help you
                  create showstopping dishes and delicious meals from scratch
                  whilst saving you time and money. For everyday inspiration,
                  choose from thousands of dishes on Cookidoo®, our very own
                  smart recipe platform.
                </Typography>
              }
            />
            <CategoryTiles
              categoryTilesData={[
                {
                  size: "large",
                  backgroundColor: "grey",
                  imageProps: {
                    src: "/flagship/hero/ds360-hero.png",
                    alt: "Thermomix DS360",
                  },
                  title: "Thermomix® TM6 starter pack",
                  button: {
                    label: "Explore the product",
                    size: screenSize.width > 935 ? "large" : "medium",
                  },
                },
                {
                  size: "large",
                  backgroundImageSrc: "/flagship/images/soup.png",
                  title: "Thousands of recipes – Endless inspiration",
                  button: {
                    label: "Join Cookidoo® for free",
                    size: screenSize.width > 935 ? "large" : "medium",
                  },
                },
              ]}
            />
          </div>
        </section>
        <section className={styles.prominentSection}>
          <div className={styles.headlineAndContentContainer}>
            <GridContainer>
              <GridItem
                columns={12}
                className={`${styles.textCentered} ${styles.overwrittenMargin}`}
              >
                <Headline spaceBelow="additional" strongColor="orange">
                  <Typography component="h2">
                    <span>
                      Kobold VK7s always
                      <br />
                      clean, <strong>always simple</strong>
                    </span>
                  </Typography>
                </Headline>
              </GridItem>
            </GridContainer>
            <div className={styles.contentAndCategoryContainer}>
              <ContentBlock
                mediaAlignment="right"
                media={
                  <img
                    src="/flagship/hero/home-page.png"
                    alt="Woman meditating"
                  />
                }
                headline={
                  <Headline spaceBelow="default">
                    <Typography component="h3" fontWeight="bold">
                      The cordless and flexible choice for your home
                    </Typography>
                  </Headline>
                }
                paragraph={
                  <Typography
                    fontWeight="regular"
                    variant={
                      screenSize.width > 1267 ? "paragraph18" : "paragraph16"
                    }
                  >
                    Whatever your home situation, the VB100 system brings the
                    grab and go flexibility you need. With this lightweight,
                    quiet, all-in-one solution, you can vacuum and mop
                    simultaneously…and that’s not all. Thanks to its broad range
                    of attachments, it also cleans carpets, hard floors and
                    mattresses thoroughly and efficiently.
                  </Typography>
                }
                buttonGroup={
                  <ButtonGroup>
                    <Link href="#">
                      <Button size="large" buttonStyle="primary">
                        Book a demo
                      </Button>
                    </Link>
                    <Link href="#">
                      <Button size="large" buttonStyle="secondary">
                        Buy now
                      </Button>
                    </Link>
                  </ButtonGroup>
                }
              />
              <CategoryTiles
                categoryTilesData={[
                  {
                    size: "large",
                    backgroundImageSrc: "/flagship/images/kobold-vk7.png",
                    title: "New Kobold VK7s – more powerful than ever",
                    button: {
                      label: "Explore the product",
                      size: screenSize.width > 935 ? "large" : "medium",
                    },
                  },
                  {
                    size: "large",
                    backgroundColor: "white",
                    imageProps: {
                      src: "/flagship/images/kobold.png",
                      alt: "Kobold",
                    },
                    title: "The Kobold evolution arrived. Put us to the test",
                    button: {
                      label: "Book a demo",
                      size: screenSize.width > 935 ? "large" : "medium",
                    },
                    eyeCatcherProps: {
                      firstLine: "Only until",
                      secondLine: "25.12.23",
                      backgroundColor: "purple",
                      size: "small",
                    },
                  },
                ]}
              />
            </div>
          </div>
        </section>
        <section className={styles.defaultSection}>
          <GridContainer>
            <GridItem columns={12} className={styles.textCentered}>
              <Headline spaceBelow="additional" strongColor="blue">
                <Typography component="h2">
                  <span>
                    Vorwerk Advisor,
                    <br />
                    a unique opportunity to
                    <br />
                    <strong> join our sales force</strong>
                  </span>
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <div className={styles.contentAndCategoryContainer}>
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
                    screenSize.width > 1267 ? "paragraph18" : "paragraph16"
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
            />
            <ContentBlock
              mediaAlignment="right"
              media={
                <img
                  src="/flagship/images/kobold-advisor.png"
                  alt="Kobold advisor"
                />
              }
              headline={
                <Headline spaceBelow="default">
                  <Typography component="h3" fontWeight="bold">
                    Turn your passion into a career with Kobold
                  </Typography>
                </Headline>
              }
              paragraph={
                <Typography
                  fontWeight="regular"
                  variant={
                    screenSize.width > 1267 ? "paragraph18" : "paragraph16"
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
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
