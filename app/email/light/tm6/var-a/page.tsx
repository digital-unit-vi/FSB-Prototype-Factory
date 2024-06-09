import Collage from "@components/email/collage/collage";
import FeatureTile from "@components/email/featureTile/featureTile";
import FeatureTiles from "@components/email/featureTiles/featureTiles";
import Hero from "@components/email/hero/hero";
import ProductTile from "@components/email/productTile/productTile";
import Quotation from "@components/email/quotation/quotation";
import Heading from "@components/shared/heading/heading";
import Spacer from "@components/shared/spacer/spacer";
import TextBlock from "@components/shared/textBlock/textBlock";

// Assets
import Collage2ImgBottomRight from "@public/email/collage/baguette.png";
import Collage2ImgTopLeft from "@public/email/collage/beef-wellington.png";
import Collage2ImgBottomLeft from "@public/email/collage/cake.png";
import Collage2ImgTopRight from "@public/email/collage/fish.png";
import Collage1ImgTopRight from "@public/email/collage/tm6light-app.png";
import Collage1ImgBottom from "@public/email/collage/tm6light-pasta.png";
import Collage1ImgTopLeft from "@public/email/collage/tm6light-women.png";
import HeroProductImg from "@public/shared/product/tm6-hero-accessories-light.png";
import ProductTileProductImg from "@public/shared/product/tm6-product-light.png";

import { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "TM6 Variant A Light",
};

export default function TM6VarALight() {
  return (
    <main>
      <Hero logoColor="green" productImage={HeroProductImg} background="light">
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
        <Collage
          imgTopLeft={Collage1ImgTopLeft}
          imgTopRight={Collage1ImgTopRight}
          imgBottom={Collage1ImgBottom}
        />
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
          <p className="secondary">Thousands of recipes –</p>
          <p className="leading">Cookidoo® recipe platform</p>
        </Heading>
        <Spacer size={40} />
        <Collage
          imgTopLeft={Collage2ImgTopLeft}
          imgTopRight={Collage2ImgTopRight}
          imgBottom={Collage2ImgBottomLeft}
          imgBottomRight={Collage2ImgBottomRight}
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
          productImage={ProductTileProductImg}
          title="Thermomix TM6®"
          subtitle="1.499,00 €"
        />
        <Spacer size={64} />
      </section>
    </main>
  );
}
