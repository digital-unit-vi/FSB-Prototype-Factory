import Avatar from "@components/email/avatar/avatar";
import Hero from "@components/email/hero/hero";
import ProductTile from "@components/email/productTile/productTile";
import Quotation from "@components/email/quotation/quotation";
import Table from "@components/email/table/Table";
import Button from "@components/shared/button/button";
import Heading from "@components/shared/heading/heading";
import Spacer from "@components/shared/spacer/spacer";
import TextBlock from "@components/shared/textBlock/textBlock";
import BladeHero from "@public/shared/product/blade-hero.png";
import BladeProduct from "@public/shared/product/blade-product3.png";
import { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Blade Dark",
};

export default function BladeDark() {
  return (
    <main>
      <Hero
        logoColor="muted-green"
        productImage={BladeHero}
        backgroundColor="dark"
        dark
      >
        <p className="heroPrimaryText">Thermomix® needs a</p>
        <p className="heroProminentTextMutedGreen"> new mixing knife</p>
      </Hero>
      <section className={styles.mainContainer}>
        <Spacer size={64} />
        <TextBlock
          headline="Hello Maximilia-Charlotte,"
          p1="It looks like your beloved Thermomix® TM6 crashed a lot of ice and grated tons of Parmesan cheese. Its knife is three years old and has been used a lot. It would be best to replace the mixing knife as soon as possible to keep your Thermomix® running smoothly."
          p2="Check out the summary below to find out why it's vital to replace the Thermomix® knife."
          dark
        />
        <Spacer size={80} />
        <Heading dark>
          <p className="secondary">
            This is <span className="leadingMutedGreen">what you did</span>
          </p>
          <p className="secondary">with your Thermomix®</p>
        </Heading>
        <Spacer size={40} />
        <Table dark />
        <Spacer size={24} />
        <Button type="center" href="#" />
        <Spacer size={80} />
        <Avatar dark />
        <Spacer size={80} />
        <Heading dark>
          <p className="secondary">
            User {""}
            <span className="leadingMutedGreen">reviews</span>
          </p>
        </Heading>
        <Spacer size={40} />
        <Quotation dark>
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
          productImage={BladeProduct}
          title="Thermomix® Mixing Knife"
          subtitle="59,00 €"
          dark
        />
        <Spacer size={64} />
      </section>
    </main>
  );
}
