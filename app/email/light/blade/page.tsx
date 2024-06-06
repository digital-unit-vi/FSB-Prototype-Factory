import Avatar from "@components/email/avatar/avatar";
import Hero from "@components/email/hero/hero";
import ProductTile from "@components/email/productTile/productTile";
import Quotation from "@components/email/quotation/quotation";
import Table from "@components/email/table/Table";
import Button from "@components/shared/button/button";
import Heading from "@components/shared/heading/heading";
import Spacer from "@components/shared/spacer/spacer";
import TextBlock from "@components/shared/textBlock/textBlock";

// Assets
import HeroProductImg from "@public/shared/product/blade-hero.png";
import ProductTileProductImg from "@public/shared/product/blade-product.png";

import { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Blade Light",
};

export default function BladeLight() {
  return (
    <main>
      <Hero
        logoColor="green"
        productImage={HeroProductImg}
        backgroundColor="light"
      >
        <p className="heroPrimaryText">Thermomix® needs a</p>
        <p className="heroProminentText"> new mixing knife</p>
      </Hero>
      <section className={styles.mainContainer}>
        <Spacer size={64} />
        <TextBlock
          headline="Hello Maximilia-Charlotte,"
          p1="It looks like your beloved Thermomix® TM6 crashed a lot of ice and grated tons of Parmesan cheese. Its knife is three years old and has been used a lot. It would be best to replace the mixing knife as soon as possible to keep your Thermomix® running smoothly."
          p2="Check out the summary below to find out why it's vital to replace the Thermomix® knife."
        />
        <Spacer size={80} />
        <Heading>
          <p className="secondary">
            This is <span className="leading">what you did</span>
          </p>
          <p className="secondary">with your Thermomix®</p>
        </Heading>
        <Spacer size={40} />
        <Table />
        <Spacer size={24} />
        <Button type="center" href="#" />
        <Spacer size={80} />
        <Avatar />
        <Spacer size={80} />
        <Heading>
          <p className="secondary">
            User {""}
            <span className="leading">reviews</span>
          </p>
        </Heading>
        <Spacer size={40} />
        <Quotation>
          <p>
            “The exchange worked wonders. Now my 3 years old Thermomix is
            running like new again.”
          </p>
          <p>
            “A bit expensive but way better than third party spare parts I can
            tell.”
          </p>
          <p>
            “Top quality, great packaging... fast delivery... very satisfied.”
          </p>
        </Quotation>
        <Spacer size={80} sizeMedium={60} />
        <ProductTile
          productImage={ProductTileProductImg}
          title="Thermomix® Mixing Knife"
          subtitle="59,00 €"
        />
        <Spacer size={64} />
      </section>
    </main>
  );
}
