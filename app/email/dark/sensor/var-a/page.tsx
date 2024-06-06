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
import Collage1ImgBottom from "@public/email/collage/sensor-cakes.jpg";
import Collage1ImgTopLeft from "@public/email/collage/sensor-father-daughter.jpg";
import Collage1ImgTopRight from "@public/email/collage/sensor-standalone.jpg";
import SensorCleaning from "@public/email/sensor-cleaning.jpg";
import SensorIntegration from "@public/email/sensor-integration.jpg";
import ProductTileProductImg from "@public/shared/product/sensor-front.png";
import HeroProductImg from "@public/shared/product/sensor-hero.png";
import MediaContainerImg from "@public/shared/product/sensor-parts-dark.png";

import { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Sensor Variant A Dark",
};

export default function SensorVarADark() {
  return (
    <main>
      <Hero
        logoColor="white"
        productImage={HeroProductImg}
        backgroundColor="dark"
        dark
      >
        <p className="heroPrimaryText">Thermomix® Sensor</p>
        <p className="heroPrimaryText">
          means{" "}
          <span className="heroProminentTextMutedGreen">full control</span>
        </p>
      </Hero>
      <section className={styles.mainContainer}>
        <Spacer size={64} />
        <TextBlock
          headline="Hello Maximilia-Charlotte,"
          p1="It seems you love baking cakes with your Thermomix®  that leave your guests wanting more. The Thermomix® Sensor takes your baking game to the next level."
          p2="This ultimate tool reduces any risk during baking and enables you to serve the most delicious cakes with zero stress. Impress your guests easily and confidently, and let the Thermomix®  Sensor do the rest!"
          dark
        />
        <Spacer size={80} />
        <Heading dark oneLineOnMedium>
          <p className="secondary">The magic {""}</p>
          <p className="leadingMutedGreen">inside</p>
        </Heading>
        <Spacer size={40} />
        <FeatureTiles>
          <FeatureTile
            icon="sous-vide"
            headline="Resists up to 275°C"
            paragraph="The sensors heat protection allows it to be used in 275°C hot environments."
            dark
          />
          <FeatureTile
            icon="bluetooth"
            headline="Bluetooth® 5.0 LE"
            paragraph="Allows to wirelessly connect it to your Thermomix® TM6 and smartphone."
            dark
          />
          <FeatureTile
            icon="battery"
            headline="Up to 24h battery life"
            paragraph="Once fully charged, the battery life of the sensor is up to a stunning 24 hours."
            dark
          />
          <FeatureTile
            icon="cleaning"
            headline="100% water resistent"
            paragraph="Due to full water resistance you don't need to worry about water damage."
            dark
          />
        </FeatureTiles>
        <Spacer size={104} sizeMedium={80} />
        <ProductTile
          productImage={ProductTileProductImg}
          title="Thermomix® Sensor"
          subtitle="149,00 €"
          dark
        />
        <Spacer size={80} />
        <TextBlock
          headline="Unleash new potentials"
          p1="Guaranteed success - the Thermomix® Sensor always keeps an eye on your home-made delicacies. Cakes, breads, meat or fish - the sensor lets you know when they are cooked to perfection. Smartly via app on your smartphone or directly on your TM6."
          dark
        />
        <Spacer size={32} sizeMedium={48} />
        <Collage
          imgTopLeft={Collage1ImgTopLeft}
          imgTopRight={Collage1ImgTopRight}
          imgBottom={Collage1ImgBottom}
        />
        <Spacer size={80} />
        <Heading dark>
          <p className="leadingMutedGreen">Full control</p>
          <p className="secondary">in your kitchen</p>
        </Heading>
        <Spacer size={24} />
        <MediaContainer
          img={MediaContainerImg}
          alt="Sensor parts description"
        />
        <Spacer size={80} />
        <Heading dark>
          <p className="secondary">
            <span className="leadingMutedGreen">Smart baking</span>, cooking,
          </p>
          <p className="secondary">sizzling, braising</p>
        </Heading>
        <Spacer size={40} />
        <ContentBlock
          img={SensorIntegration}
          headline="Seamless integration"
          text="Connected via bluetooth you’ll receive messages on your Thermomix® TM6 and smartphone via the Cooking Centre app."
          dark
          imageSide="right"
        />
        <Spacer size={56} sizeMedium={48} />
        <ContentBlock
          img={SensorCleaning}
          headline="Easy to clean"
          text="Clean with a little washing-up liquid under running water and dry it. Done. It’s that simple."
          dark
          imageSide="left"
        />
        <Spacer size={80} />
        <Heading dark>
          <p className="secondary">Discover thousands of</p>
          <p className="leadingMutedGreen">sensor-ready recipes</p>
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
          title="Thermomix® Sensor"
          subtitle="149,00 €"
          dark
        />
        <Spacer size={64} />
      </section>
    </main>
  );
}
