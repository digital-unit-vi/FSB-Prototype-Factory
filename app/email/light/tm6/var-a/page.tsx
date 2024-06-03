import Collage from "@components/email/collage/collage";
import FeatureTile from "@components/email/featureTile/featureTile";
import FeatureTiles from "@components/email/featureTiles/featureTiles";
import Hero from "@components/email/hero/hero";
import ProductTile from "@components/email/productTile/productTile";
import Quotation from "@components/email/quotation/quotation";
import Heading from "@components/shared/heading/heading";
import Spacer from "@components/shared/spacer/spacer";
import TextBlock from "@components/shared/textBlock/textBlock";
import CollageBaguette from "@public/email/collage/baguette.png";
import CollageBeefWellington from "@public/email/collage/beef-wellington.png";
import CollageCake from "@public/email/collage/cake.png";
import CollageFish from "@public/email/collage/fish.png";
import CollageImg1 from "@public/email/collage/tm6light1.png";
import CollageImg2 from "@public/email/collage/tm6light2.png";
import CollageImg3 from "@public/email/collage/tm6light3.png";
import TM6HeroAccessoriesLight from "@public/shared/product/tm6-hero-accessories-light.png";
import TM6ProductLight from "@public/shared/product/tm6-product-light.png";
import { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "TM6 Variant A Light",
};

export default function TM6VarALight() {
  return (
    <main>
      <Hero
        logoColor="green"
        productImage={TM6HeroAccessoriesLight}
        backgroundColor="light"
      >
        <p className="heroProminentText">
          The original <span className="heroPrimaryText">–</span>
        </p>
        <p className="heroPrimaryText">Thermomix® TM6</p>
      </Hero>
      <section className={styles.mainContainer}>
        <Spacer size={64} />
        <TextBlock
          headline="Hello Maximilia-Charlotte,"
          p1="do you love kitchen classics or do you like to try out the latest food trends? Do you pay particular attention to healthy, balanced food? No matter what your personal cooking preferences are - with Thermomix® you'll find the answer."
        />
        <Spacer size={32} />
        <Collage img1={CollageImg1} img2={CollageImg2} img3={CollageImg3} />
        <Spacer size={80} />
        <Heading oneLineOnMedium>
          <p className="secondary">One device. {""}</p>
          <p className="leading">Endless possibilities</p>
        </Heading>
        <Spacer size={40} />
        <FeatureTiles>
          <FeatureTile
            icon="sous-vide"
            headline="Sous-Vide"
            paragraph="Ensures even cooking, moisture, & flavor retention."
          />
          <FeatureTile
            icon="slow-cooking"
            headline="Slow Cook"
            paragraph="Enjoy tenderised flavours by slow cooking."
          />
          <FeatureTile
            icon="temperature-high"
            headline="Sauté"
            paragraph="Savor the taste of perfection with the sauté function!"
          />
          <FeatureTile
            icon="peeling"
            headline="Peeler"
            paragraph="Peels potatoes effortlessly with precision for you."
          />
          <FeatureTile
            leading="+20"
            headline="new functions"
            paragraph="Explore all functions"
            wide
          />
        </FeatureTiles>
        <Spacer size={80} />
        <Heading>
          <p className="secondary">
            Thousands of recipes –{" "}
            <span className="leading">Cookidoo® recipe platform</span>
          </p>
        </Heading>
        <Spacer size={40} />
        <Collage
          img1={CollageBeefWellington}
          img2={CollageFish}
          img3={CollageCake}
          img4={CollageBaguette}
        />
        <Spacer size={80} />
        <Heading oneLineOnMedium>
          <p className="secondary">
            User {""}
            <span className="leading">reviews</span>
          </p>
        </Heading>
        <Spacer size={40} />
        <Quotation>
          <p>
            “The Thermomix TM6 has truly revolutionized my kitchen experience!
            From effortless meal prep to gourmet creations, it&apos;s a
            game-changer.”
          </p>
          <p>
            “As a busy professional, the Thermomix TM6 is a lifesaver. It
            streamlines cooking, allowing me to enjoy delicious, homemade meals
            with minimal effort.”
          </p>
          <p>
            “I&apos;m amazed by the versatility of the Thermomix TM6. It
            simplifies cooking without compromising on taste or nutrition. Worth
            every penny!”
          </p>
        </Quotation>
        <Spacer size={80} />
        <ProductTile
          productImage={TM6ProductLight}
          title="Thermomix TM6®"
          subtitle="1.499,00 €"
        />
        <Spacer size={64} />
      </section>
    </main>
  );
}
