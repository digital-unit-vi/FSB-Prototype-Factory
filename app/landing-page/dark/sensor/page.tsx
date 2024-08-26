import BentoBox from "@components/landingPage/bentoBox/bentoBox";
import Carousel from "@components/landingPage/carousel/carousel";
import Hero from "@components/landingPage/hero/hero";
import ImageGallery from "@components/landingPage/imageGallery/imageGallery";
import ProductAnimation2 from "@components/landingPage/productAnimation2/productAnimation";
import ProductTile from "@components/landingPage/productTile/productTile";
import UserReview from "@components/landingPage/userReview/userReview";
import Heading from "@components/shared/heading/heading";
import Spacer from "@components/shared/spacer/spacer";
import TextBlock from "@components/shared/textBlock/textBlock";
import ImageGalleryImg3 from "@public/email/collage/sensor-father-daughter.jpg";
import CarouselProductImg from "@public/landingPage/carousel/carousel-sensor.png";
import ImageGalleryImg8 from "@public/landingPage/imageGallery/sensor-app-juice.jpg";
import ImageGalleryImg5 from "@public/landingPage/imageGallery/sensor-grill.jpg";
import ImageGalleryImg1 from "@public/landingPage/imageGallery/sensor-loaf.jpg";
import ImageGalleryImg7 from "@public/landingPage/imageGallery/sensor-man-fish.jpg";
import ImageGalleryImg6 from "@public/landingPage/imageGallery/sensor-mother-daughter.jpg";
import ImageGalleryImg9 from "@public/landingPage/imageGallery/sensor-oven-cake.jpg";
import ImageGalleryImg2 from "@public/landingPage/imageGallery/sensor-pan.jpg";
import ImageGalleryImg4 from "@public/landingPage/imageGallery/sensor-tm6-cake.jpg";
import ProductTileProductImg from "@public/shared/product/sensor-product.png";
import { Metadata } from "next";
import { StaticImageData } from "next/image";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Sensor Variant Dark",
};

const IMAGE_GALLERY_SLIDES: StaticImageData[] = [
  ImageGalleryImg1,
  ImageGalleryImg2,
  ImageGalleryImg3,
  ImageGalleryImg4,
  ImageGalleryImg5,
  ImageGalleryImg6,
  ImageGalleryImg7,
  ImageGalleryImg8,
  ImageGalleryImg9,
];

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
        <Heading dark>
          <p className="secondary">
            Strive for excellent results when cooking in the oven, pan, or on
            the grill
          </p>
        </Heading>
        <Spacer size={96} />
        <ImageGallery slides={IMAGE_GALLERY_SLIDES} dark />
        <Spacer size={96} />
        <TextBlock
          headline="What is the\nThermomix® Sensor?"
          p1="With the Thermomix® Sensor, we are extending the guaranteed success of our Guided Cooking recipes to your cooker, oven and grill for the first time."
          p2="The Thermomix® Sensor is so much more than an ordinary food thermometer. 
          With the right core temperature, you can achieve perfect results with cakes, breads, meat or fish. Discover the new possibilities for limitless enjoyment!"
          dark
        />
        <Spacer size={96} />
        <Heading dark>
          <p className="heroPrimaryText">
            Thermomix® Sensor means {""}
            <span className="heroProminentTextMutedGreen">full control</span>
          </p>
        </Heading>
        <Spacer size={32} />
        <ProductAnimation2 />
        <Spacer size={96} />
        <BentoBox sensor dark />
        <Spacer size={96} />
        {/* <Placeholder text="FUNCTIONS" dark /> */}
        {/* <Spacer size={96} /> */}
        <Heading dark>
          <p className="secondary">Don&apos;t miss a single</p>
          <p className="leadingMutedGreen">cooking point</p>
        </Heading>
        <Spacer size={32} />
        <Heading dark>
          <p className="tertiary">
            Meat and fish cooked to perfection, light and fluffy cakes, crispy
            breads
          </p>
        </Heading>
        <Spacer size={16} />
        <Carousel productPicture={CarouselProductImg} />
        <Spacer size={96} />
        <UserReview
          ratingScore={4.5}
          noReviews={129}
          review1="I am totally thrilled, as I always had problems with my very basic oven, but with the sensor I don't always have to keep checking if it's ready."
          review2="It's great that you can read off all the values on the Thermomix. Very nice technical integration. Perfect for preparing roasts and cakes."
          review3="Finally no more stick test! Fun and makes cake baking easier."
          dark
        />
        <Spacer size={80} />
        <ProductTile
          productImage={ProductTileProductImg}
          title="Thermomix® Sensor"
          subtitle="149,00 €"
          dark
        />
      </section>
    </main>
  );
}
