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
import CollageBaguette from "@public/email/collage/baguette.png";
import CollageBeefWellington from "@public/email/collage/beef-wellington.png";
import CollageCake from "@public/email/collage/cake.png";
import CollageFish from "@public/email/collage/fish.png";
import Collage1 from "@public/email/collage/sensor1.jpg";
import Collage2 from "@public/email/collage/sensor2.jpg";
import Collage3 from "@public/email/collage/sensor3.jpg";
import SensorCleaning from "@public/email/sensor-cleaning.jpg";
import SensorIntegration from "@public/email/sensor-integration.jpg";
import SensorProduct from "@public/shared/product/sensor-front.png";
import SensorHero from "@public/shared/product/sensor-hero.png";
import SensorMediaContainer from "@public/shared/product/sensor-parts-light.png";
import { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Sensor Variant A Light",
};

export default function SensorVarALight() {
  return (
    <main>
      <Hero logoColor="green" productImage={SensorHero} backgroundColor="light">
        <p className="heroPrimaryText">Thermomix® Sensor</p>
        <p className="heroPrimaryText">
          means <span className="heroProminentText">full control</span>
        </p>
      </Hero>
      <section className={styles.mainContainer}>
        <Spacer size={64} />
        <TextBlock
          headline="Hello Maximilia-Charlotte,"
          p1="It seems you love baking cakes with your Thermomix® that leave your guests wanting more. The Thermomix® Sensor takes your baking game to the next level."
          p2="This ultimate tool reduces any risk during baking and enables you to serve the most delicious cakes with zero stress. Impress your guests easily and confidently, and let the Thermomix® Sensor do the rest!"
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
          productImage={SensorProduct}
          title="Thermomix® Sensor"
          subtitle="149,00 €"
        />
        <Spacer size={80} />
        <TextBlock
          headline="Unleash new potentials"
          p1="Guaranteed success - the Thermomix® Sensor always keeps an eye on your home-made delicacies. Cakes, breads, meat or fish - the sensor lets you know when they are cooked to perfection. Smartly via app on your smartphone or directly on your TM6."
        />
        <Spacer size={32} sizeMedium={48} />
        <Collage img1={Collage1} img2={Collage2} img3={Collage3} />
        <Spacer size={80} />
        <Heading>
          <p className="leading">Full control</p>
          <p className="secondary">in your kitchen</p>
        </Heading>
        <Spacer size={24} />
        <MediaContainer
          img={SensorMediaContainer}
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
          img1={CollageBeefWellington}
          img2={CollageFish}
          img3={CollageCake}
          img4={CollageBaguette}
        />
        <Spacer size={104} sizeMedium={80} />
        <ProductTile
          productImage={SensorProduct}
          title="Thermomix® Sensor"
          subtitle="149,00 €"
        />
        <Spacer size={64} />
      </section>
    </main>
  );
}
