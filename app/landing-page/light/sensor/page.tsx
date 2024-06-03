import BentoBox from "@components/landingPage/bentoBox/bentoBox";
import Carousel from "@components/landingPage/carousel/carousel";
import Hero from "@components/landingPage/hero/hero";
import ProductAnimation from "@components/landingPage/productAnimation/productAnimation";
import ProductTile from "@components/landingPage/productTile/productTile";
import UserReview from "@components/landingPage/userReview/userReview";
import Heading from "@components/shared/heading/heading";
import Spacer from "@components/shared/spacer/spacer";
import TextBlock from "@components/shared/textBlock/textBlock";
import CarouselProductImage from "@public/landingPage/carousel/carousel-sensor.png";
import ProductImage from "@public/shared/product/sensor-front.png";
import { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Sensor Variant Light",
};

export default function SensorLightLandingPage() {
  return (
    <main>
      <Hero
        video="sensor"
        productImage="sensor"
        tertiaryText="Thermomix® Sensor"
        secondaryText="Turn a guess"
        primaryText="into success"
      />
      <section className={styles.mainSection}>
        <Heading>
          <p className="secondary">
            Strive for excellent results when cooking in the oven, pan, or on
            the grill
          </p>
        </Heading>
        <Spacer size={96} />
        {/* <Placeholder text="GALLERY" /> */}
        {/* <Spacer size={96} /> */}
        <TextBlock
          headline="What is the\nThermomix® Sensor?"
          p1="With the Thermomix® Sensor, we are extending the guaranteed success of our Guided Cooking recipes to your cooker, oven and grill for the first time."
          p2="The Thermomix® Sensor is so much more than an ordinary food thermometer. 
          With the right core temperature, you can achieve perfect results with cakes, breads, meat or fish. Discover the new possibilities for limitless enjoyment!"
        />
        <Spacer size={96} />
        <Heading>
          <p className="heroPrimaryText">
            Thermomix® Sensor means{" "}
            <span className="heroProminentText">full control</span>
          </p>
        </Heading>
        <Spacer size={32} />
        <ProductAnimation />
        <Spacer size={96} />
        <BentoBox sensor />
        <Spacer size={96} />
        {/* <Placeholder text="FUNCTIONS" /> */}
        {/* <Spacer size={96} /> */}
        <Heading>
          <p className="secondary">Don&apos;t miss a single</p>
          <p className="leading">cooking point</p>
        </Heading>
        <Spacer size={32} />
        <Heading>
          <p className="tertiary">
            Meat and fish cooked to perfection, light and fluffy cakes, crispy
            breads
          </p>
        </Heading>
        <Spacer size={16} />
        <Carousel productPicture={CarouselProductImage} />
        <Spacer size={96} />
        <UserReview
          ratingScore={4.5}
          noReviews={129}
          review1="I am totally thrilled, as I always had problems with my very basic oven, but with the sensor I don't always have to keep checking if it's ready."
          review2="It's great that you can read off all the values on the Thermomix. Very nice technical integration. Perfect for preparing roasts and cakes."
          review3="Finally no more stick test! Fun and makes cake baking easier."
        />
        <Spacer size={80} />
        <ProductTile
          productImage={ProductImage}
          title="Thermomix® Sensor"
          subtitle="149,00 €"
        />
      </section>
    </main>
  );
}
