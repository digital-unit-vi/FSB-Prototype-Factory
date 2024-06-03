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
import CollageImg1 from "@public/email/collage/tm6dark1.png";
import CollageImg2 from "@public/email/collage/tm6dark2.png";
import CollageImg3 from "@public/email/collage/tm6dark3.png";
import TM6HeroAccessoriesDark from "@public/shared/product/tm6-hero-accessories-dark.png";
import TM6ProductDark from "@public/shared/product/tm6-product-dark.png";
import { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "TM6 Variant A Dark",
};

export default function TM6VarADark() {
  return (
    <main>
      <Hero
        logoColor="white"
        productImage={TM6HeroAccessoriesDark}
        dark
        backgroundColor="dark"
      >
        <p className="heroProminentTextMocha">
          The original <span className="heroPrimaryText">–</span>
        </p>
        <p className="heroPrimaryText">Thermomix® TM6</p>
      </Hero>
      <section className={styles.mainContainer}>
        <Spacer size={64} />
        <TextBlock
          dark
          headline="Hello Maximilia-Charlotte,"
          p1="do you love kitchen classics or do you like to try out the latest food trends? Do you pay particular attention to healthy, balanced food? No matter what your personal cooking preferences are - with Thermomix® you'll find the answer."
        />
        <Spacer size={32} />
        <Collage img1={CollageImg1} img2={CollageImg2} img3={CollageImg3} />
        <Spacer size={80} />
        <Heading dark oneLineOnMedium>
          <p className="secondary">One device. {""}</p>
          <p className="leadingTaupe">Endless possibilities</p>
        </Heading>
        <Spacer size={40} />
        <FeatureTiles>
          <FeatureTile
            icon="sous-vide"
            iconTheme="taupe"
            headline="Sous-Vide"
            paragraph="Ensures even cooking, moisture, & flavor retention."
            dark
          />
          <FeatureTile
            icon="slow-cooking"
            iconTheme="taupe"
            headline="Slow Cook"
            paragraph="Enjoy tenderised flavours by slow cooking."
            dark
          />
          <FeatureTile
            icon="temperature-high"
            iconTheme="taupe"
            headline="Sauté"
            paragraph="Savor the taste of perfection with the sauté function!"
            dark
          />
          <FeatureTile
            icon="peeling"
            iconTheme="taupe"
            headline="Peeler"
            paragraph="Peels potatoes effortlessly with precision for you."
            dark
          />
          <FeatureTile
            leading="+20"
            headline="new functions"
            paragraph="Explore all functions"
            wide
            dark
          />
        </FeatureTiles>
        <Spacer size={80} />
        <Heading dark>
          <p className="secondary">
            Thousands of recipes –{" "}
            <span className="leadingTaupe">Cookidoo® recipe platform</span>
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
        <Heading dark oneLineOnMedium>
          <p className="secondary">
            User {""}
            <span className="leadingTaupe">reviews</span>
          </p>
        </Heading>
        <Spacer size={40} />
        <Quotation dark>
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
          productImage={TM6ProductDark}
          title="Thermomix TM6® Sparkling Black"
          subtitle="1.499,00 €"
          dark
        />
        <Spacer size={64} />
      </section>
    </main>
  );
}
