import Collage from "@components/email/collage/collage";
import ContentBlock from "@components/email/contentBlock/contentBlock";
import FeatureTile from "@components/email/featureTile/featureTile";
import FeatureTiles from "@components/email/featureTiles/featureTiles";
import Hero from "@components/email/hero/hero";
import MediaContainer from "@components/email/mediaContainer/mediaContainer";
import ProductTile from "@components/email/productTile/productTile";
import Heading from "@components/shared/heading/heading";
import Spacer from "@components/shared/spacer/spacer";
import TextBlock from "@components/shared/textBlock/textBlock";

// Assets
import Collage2ImgBottomRight from "@public/email/collage/baguette.png";
import Collage2ImgTopLeft from "@public/email/collage/beef-wellington.png";
import Collage2ImgBottomLeft from "@public/email/collage/cake.png";
import Collage2ImgTopRight from "@public/email/collage/fish.png";
import SensorCleaning from "@public/email/sensor-cleaning.jpg";
import SensorIntegration from "@public/email/sensor-integration.jpg";
import HeroBackgroundImg from "@public/email/workshop/beetroot-carrot-salad.jpeg";
import Collage1ImgBottom from "@public/email/workshop/cutter-applications.jpeg";
import ProductTileProductImg from "@public/email/workshop/cutter-standalone-product.png";
import Collage1ImgTopLeft from "@public/email/workshop/cutter-tm5-cutting-board.jpeg";
import Collage1ImgTopRight from "@public/email/workshop/cutter-tm5-product.png";
import HeroProductImg from "@public/email/workshop/cutter-tm6-standalone-parts-product.png";
import MediaContainerImg from "@public/shared/product/sensor-parts-light.png";

import { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Cutter Health Seeker Light",
};

export default function CutterHealthSeekerLight() {
  return (
    <main>
      <Hero
        background={HeroBackgroundImg}
        logoColor="white"
        productImage={HeroProductImg}
        ctaText="Shop now"
      >
        <p className="heroPrimaryTextWhite">
          <span className="heroProminentTextOrange">Slice</span> Dice and Create
        </p>
        <p className="heroPrimaryTextWhite">
          <span className="heroProminentTextOrange">Healthy</span> Salads fast
        </p>
      </Hero>
      <section className={styles.mainContainer}>
        <Spacer size={64} />
        <TextBlock
          headline="Hello Laura,"
          p1="You have just finished your 99th salad with your TM6. Did you know that you could have saved time cooking with the new Thermomix Cutter? You could have saved 999 minutes to dedicate time to your favorite sports."
          p2="Discover a new way to elevate your culinary creations with our latest kitchen innovation. Our Thermomix Cutter makes it effortless to create healthy, delicious meals in no time."
        />
        <Spacer size={80} />
        <Heading oneLineOnMedium>
          <p className="secondary">The magic {""}</p>
          <p className="leading">inside</p>
        </Heading>
        <Spacer size={40} />
        <FeatureTiles>
          <FeatureTile
            icon="sous-vide"
            headline="Resists up to 275°C"
            paragraph="The sensors heat protection allows it to be used in 275°C hot environments."
          />
          <FeatureTile
            icon="bluetooth"
            headline="Bluetooth® 5.0 LE"
            paragraph="Allows to wirelessly connect it to your Thermomix® TM6 and smartphone."
          />
          <FeatureTile
            icon="battery"
            headline="Up to 24h battery life"
            paragraph="Once fully charged, the battery life of the sensor is up to a stunning 24 hours."
          />
          <FeatureTile
            icon="cleaning"
            headline="100% water resistent"
            paragraph="Due to full water resistance you don't need to worry about water damage."
          />
        </FeatureTiles>
        <Spacer size={104} sizeMedium={80} />
        <ProductTile
          productImage={ProductTileProductImg}
          title="Thermomix® Cutter"
          subtitle="119,00 €"
        />
        <Spacer size={80} />
        <TextBlock
          headline="Unleash new potentials"
          p1="Guaranteed success - the Thermomix® Sensor always keeps an eye on your home-made delicacies. Cakes, breads, meat or fish - the sensor lets you know when they are cooked to perfection. Smartly via app on your smartphone or directly on your TM6."
        />
        <Spacer size={32} sizeMedium={48} />
        <Collage
          imgTopLeft={Collage1ImgTopLeft}
          imgTopRight={Collage1ImgTopRight}
          imgBottom={Collage1ImgBottom}
        />
        <Spacer size={80} />
        <Heading>
          <p className="leading">Full control</p>
          <p className="secondary">in your kitchen</p>
        </Heading>
        <Spacer size={24} />
        <MediaContainer
          img={MediaContainerImg}
          alt="Sensor parts description"
        />
        <Spacer size={80} />
        <Heading>
          <p className="secondary">
            <span className="leading">Smart baking</span>, cooking,
          </p>
          <p className="secondary">sizzling, braising</p>
        </Heading>
        <Spacer size={40} />
        <ContentBlock
          img={SensorIntegration}
          headline="Seamless integration"
          text="Connected via bluetooth you’ll receive messages on your Thermomix® TM6 and smartphone via the Cooking Centre app."
          imageSide="right"
        />
        <Spacer size={56} sizeMedium={48} />
        <ContentBlock
          img={SensorCleaning}
          headline="Easy to clean"
          text="Clean with a little washing-up liquid under running water and dry it. Done. It’s that simple."
          imageSide="left"
        />
        <Spacer size={80} />
        <Heading>
          <p className="secondary">Discover thousands of</p>
          <p className="leading">sensor-ready recipes</p>
        </Heading>
        <Spacer size={40} />
        <Collage
          imgTopLeft={Collage2ImgTopLeft}
          imgTopRight={Collage2ImgTopRight}
          imgBottom={Collage2ImgBottomLeft}
          imgBottomRight={Collage2ImgBottomRight}
        />
        <Spacer size={104} sizeMedium={80} />
        <ProductTile
          productImage={ProductTileProductImg}
          title="Thermomix® Cutter"
          subtitle="119,00 €"
        />
        <Spacer size={64} />
      </section>
    </main>
  );
}
