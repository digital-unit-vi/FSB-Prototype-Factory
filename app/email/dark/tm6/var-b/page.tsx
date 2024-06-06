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
import Collage1ImgTopRight from "@public/email/collage/tm6dark-cooking.png";
import Collage1ImgTopLeft from "@public/email/collage/tm6dark-couple.png";
import Collage1ImgBottom from "@public/email/collage/tm6dark-pears.png";
import HeroBackgroundImg from "@public/email/hero/tm6-hero-background.png";
import HeroProductImg from "@public/shared/product/tm6-hero-dark.png";
import ProductTileProductImg from "@public/shared/product/tm6-product-dark.png";

import { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "TM6 Variant B Dark",
};

export default function TM6VarBDark() {
  return (
    <main>
      <Hero
        backgroundImage={HeroBackgroundImg}
        logoColor="white"
        productImage={HeroProductImg}
        dark
      >
        <p className="heroProminentTextPeach">
          The original <span className="heroPrimaryTextWhite">–</span>
        </p>
        <p className="heroPrimaryTextWhite">Thermomix® TM6</p>
      </Hero>
      <section className={styles.mainContainer}>
        <Spacer size={64} />
        <TextBlock
          dark
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
          imgTopLeft={Collage2ImgTopLeft}
          imgTopRight={Collage2ImgTopRight}
          imgBottom={Collage2ImgBottomLeft}
          imgBottomRight={Collage2ImgBottomRight}
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
          productImage={ProductTileProductImg}
          title="Thermomix TM6® Sparkling Black"
          subtitle="1.499,00 €"
          dark
        />
        <Spacer size={64} />
      </section>
    </main>
  );
}
