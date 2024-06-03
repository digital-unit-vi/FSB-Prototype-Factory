import BentoBox from "@components/landingPage/bentoBox/bentoBox";
import Carousel from "@components/landingPage/carousel/carousel";
import Hero from "@components/landingPage/hero/hero";
import ProductTile from "@components/landingPage/productTile/productTile";
import ScrollRow from "@components/landingPage/scrollRow/scrollRow";
import UserReview from "@components/landingPage/userReview/userReview";
import Heading from "@components/shared/heading/heading";
import Spacer from "@components/shared/spacer/spacer";
import CarouselProductImage from "@public/landingPage/carousel/carousel-tm6.png";
import ProductImage from "@public/shared/product/tm6-product-accessories-light.png";
import { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "TM6 Variant B Light",
};

export default function TM6VariantBLightLandingPage() {
  return (
    <main>
      <Hero
        video="dishes"
        productImage="tm6"
        tertiaryText="Thermomix® TM6"
        secondaryText="One device."
        primaryText="Endless possibilities"
      />
      <section className={styles.mainSection}>
        <Heading>
          <p className="secondary">
            Compact and versatile – the Thermomix® TM6 is cleaner, more
            powerful, and quieter.
          </p>
        </Heading>
        <Spacer size={96} />
        <BentoBox />
        <Spacer size={96} />
        <Heading>
          <p className="secondary">Tons of</p>
          <p className="leading">functions</p>
        </Heading>
        <Spacer size={32} />
        <Heading>
          <p className="tertiary">
            The Thermomix® TM6 replaces more than twenty appliances. Thanks to
            numerous built-in functions it can...
          </p>
        </Heading>
        <Spacer size={64} />
        <ScrollRow />
        <Spacer size={96} />
        {/* <Placeholder text="FUNCTIONS" /> */}
        {/* <Spacer size={96} /> */}
        {/* <Placeholder text="GALLERY" /> */}
        {/* <Spacer size={96} /> */}
        <Heading>
          <p className="secondary">New favorite recipes</p>
          <p className="leading">every day</p>
        </Heading>
        <Spacer size={32} />
        <Heading>
          <p className="tertiary">
            The Cookidoo® digital recipe portal is the key to your Thermomix®
            TM6, allowing you to cook dishes from all over the world. You can
            access Cookidoo® directly from your Thermomix® TM6 or plan your
            dishes on your smartphone.
          </p>
        </Heading>
        <Spacer size={16} />
        <Carousel productPicture={CarouselProductImage} />
        <Spacer size={48} />
        <UserReview
          ratingScore={4.6}
          noReviews={459}
          review1="The Thermomix TM6 has truly revolutionized my kitchen experience! From effortless meal prep to gourmet creations, it's a game-changer."
          review2="I'm amazed by the versatility of the Thermomix TM6. It simplifies cooking without compromising on taste or nutrition. Worth every penny!"
          review3="As a busy professional, the Thermomix TM6 is a lifesaver. It streamlines cooking, allowing me to enjoy delicious, homemade meals with minimal."
        />
        <Spacer size={80} />
        <ProductTile
          productImage={ProductImage}
          title="Thermomix® TM6"
          subtitle="1.499,00 €"
        />
        {/* <Teaser backgroundImage={TeaserBackground}>
          <p className="heroPrimaryTextWhite">
            Live product{" "}
            <span className="heroProminentTextWhite">experience</span>?
          </p>
        </Teaser> */}
      </section>
    </main>
  );
}
