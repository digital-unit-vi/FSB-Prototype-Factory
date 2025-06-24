import {
  Austria,
  Canada,
  China,
  Czechia,
  DropdownItem,
  Facebook,
  FooterLinks,
  FooterLinksBlock,
  FooterMetaLinks,
  FooterSection,
  FooterSocialLinkBlock,
  FooterSocialLinks,
  France,
  Germany,
  Greece,
  Instagram,
  Ireland,
  Italy,
  LanguageSelector,
  Mexico,
  Pinterest,
  Poland,
  Portugal,
  ProductStripe,
  Rezeptwelt,
  Spain,
  Switzerland,
  Taiwan,
  Turkey,
  Typography,
  UK,
  USA,
  Youtube,
} from "@vorwerk/fibre-react";
import styles from "./footer.module.scss";

export const Footer = () => {
  const Languages = [
    <DropdownItem key="canada-en">
      <Canada />
      <Typography component="span" variant="paragraph16" fontWeight="regular">
        Canada <span>(English)</span>
      </Typography>
    </DropdownItem>,

    <DropdownItem key="canada=fr">
      <Canada />
      <Typography component="span" variant="paragraph16" fontWeight="regular">
        Canada <span>(Français)</span>
      </Typography>
    </DropdownItem>,

    <DropdownItem key="czechia">
      <Czechia />
      <Typography component="span" variant="paragraph16" fontWeight="regular">
        Česko
      </Typography>
    </DropdownItem>,

    <DropdownItem key="china-tm">
      <China />
      <Typography component="span" variant="paragraph16" fontWeight="regular">
        中国大陆 (Thermomix)
      </Typography>
    </DropdownItem>,

    <DropdownItem key="china-kobold">
      <China />
      <Typography component="span" variant="paragraph16" fontWeight="regular">
        中国大陆 (Kobold)
      </Typography>
    </DropdownItem>,

    <DropdownItem key="germany">
      <Germany />
      <Typography component="span" variant="paragraph16" fontWeight="regular">
        Deutschland
      </Typography>
    </DropdownItem>,

    <DropdownItem key="spain">
      <Spain />
      <Typography component="span" variant="paragraph16" fontWeight="regular">
        España
      </Typography>
    </DropdownItem>,

    <DropdownItem key="france">
      <France />
      <Typography component="span" variant="paragraph16" fontWeight="regular">
        France
      </Typography>
    </DropdownItem>,

    <DropdownItem key="greece">
      <Greece />
      <Typography component="span" variant="paragraph16" fontWeight="regular">
        Ελλάδα
      </Typography>
    </DropdownItem>,

    <DropdownItem key="irland">
      <Ireland />
      <Typography component="span" variant="paragraph16" fontWeight="regular">
        Ireland
      </Typography>
    </DropdownItem>,

    <DropdownItem key="italy">
      <Italy />
      <Typography component="span" variant="paragraph16" fontWeight="regular">
        Italia
      </Typography>
    </DropdownItem>,

    <DropdownItem key="mexico">
      <Mexico />
      <Typography component="span" variant="paragraph16" fontWeight="regular">
        México
      </Typography>
    </DropdownItem>,

    <DropdownItem key="austria">
      <Austria />
      <Typography component="span" variant="paragraph16" fontWeight="regular">
        Österreich
      </Typography>
    </DropdownItem>,

    <DropdownItem key="poland">
      <Poland />
      <Typography component="span" variant="paragraph16" fontWeight="regular">
        Polska
      </Typography>
    </DropdownItem>,

    <DropdownItem key="portugal">
      <Portugal />
      <Typography component="span" variant="paragraph16" fontWeight="regular">
        Portugal
      </Typography>
    </DropdownItem>,

    <DropdownItem key="switzerland-de">
      <Switzerland />
      <Typography component="span" variant="paragraph16" fontWeight="regular">
        Schweiz <span>(Deutsch)</span>
      </Typography>
    </DropdownItem>,

    <DropdownItem key="switzerland-fr">
      <Switzerland />
      <Typography component="span" variant="paragraph16" fontWeight="regular">
        Suisse <span>(Français)</span>
      </Typography>
    </DropdownItem>,

    <DropdownItem key="switzerland-it">
      <Switzerland />
      <Typography component="span" variant="paragraph16" fontWeight="regular">
        Svizzera <span>(Italiano)</span>
      </Typography>
    </DropdownItem>,

    <DropdownItem key="taiwan">
      <Taiwan />
      <Typography component="span" variant="paragraph16" fontWeight="regular">
        台灣
      </Typography>
    </DropdownItem>,

    <DropdownItem key="turkey">
      <Turkey />
      <Typography component="span" variant="paragraph16" fontWeight="regular">
        Türkiye
      </Typography>
    </DropdownItem>,

    <DropdownItem key="usa">
      <USA />
      <Typography component="span" variant="paragraph16" fontWeight="regular">
        USA
      </Typography>
    </DropdownItem>,

    <DropdownItem key="uk">
      <UK />
      <Typography component="span" variant="paragraph16" fontWeight="regular">
        United Kingdom
      </Typography>
    </DropdownItem>,
  ];

  return (
    <footer>
      <div className={styles.overwrittenProductStripeGap}>
        <ProductStripe
          text="For over 130 years, our products have impressed millions of families with their superior, innovative technology and their proverbial long service life."
          images={[
            <img
              src="/library/images/footer/product-stripe-1.png"
              alt="product stripe 1"
              key={1}
            />,
            <img
              src="/library/images/footer/product-stripe-2.png"
              alt="product stripe 2"
              key={2}
            />,
            <img
              src="/library/images/footer/product-stripe-3.png"
              alt="product stripe 3"
              key={3}
            />,
            <img
              src="/library/images/footer/product-stripe-4.png"
              alt="product stripe 4"
              key={4}
            />,
            <img
              src="/library/images/footer/product-stripe-5.png"
              alt="product stripe 5"
              key={5}
            />,
            <img
              src="/library/images/footer/product-stripe-6.png"
              alt="product stripe 6"
              key={6}
            />,
            <img
              src="/library/images/footer/product-stripe-7.png"
              alt="product stripe 7"
              key={7}
            />,
          ]}
        />
      </div>
      <FooterSection variant="spacingVertical">
        <FooterLinks>
          <FooterLinksBlock
            header={
              <Typography variant="paragraph18" fontWeight="bold">
                Get in Touch
              </Typography>
            }
            links={[
              <Typography variant="paragraph16" key="contact">
                <a href="#contact">Contact us</a>
              </Typography>,
              <Typography variant="paragraph16" key="support">
                <a href="#support">Vorwerk Support Center</a>
              </Typography>,
            ]}
          />
          <FooterLinksBlock
            header={
              <Typography variant="paragraph18" fontWeight="bold">
                Services
              </Typography>
            }
            links={[
              <Typography variant="paragraph16" key="experience-live">
                <a href="#experience-live">Experience live</a>
              </Typography>,
              <Typography variant="paragraph16" key="vorwerk-stores">
                <a href="#vorwerk-stores">Vorwerk Stores</a>
              </Typography>,
            ]}
          />
          <FooterLinksBlock
            header={
              <Typography variant="paragraph18" fontWeight="bold">
                Shopping
              </Typography>
            }
            links={[
              <Typography variant="paragraph16" key="payment-methods">
                <a href="#paymentmethods">Payment methods</a>
              </Typography>,
              <Typography variant="paragraph16" key="shipping">
                <a href="#shipping-delivery">Shipping & delivery</a>
              </Typography>,
              <Typography variant="paragraph16" key="security">
                <a href="#security">Security</a>
              </Typography>,
            ]}
          />
        </FooterLinks>
      </FooterSection>
      <FooterSection variant="spacingBottom" borderBottom={true}>
        <div className={styles.overwrittenFooterSocialLinks}>
          <FooterSocialLinks>
            <FooterSocialLinkBlock
              header={
                <Typography variant="paragraph18" fontWeight="bold">
                  Thermomix®
                </Typography>
              }
              links={[
                <a href="#facebook" key="tm-fb">
                  <Facebook />
                </a>,
                <a href="#instagram" key="tm-instagram">
                  <Instagram />
                </a>,
                <a href="#pinterest" key="tm-pinterest">
                  <Pinterest />
                </a>,
                <a href="#youtube" key="tm-youtube">
                  <Youtube />
                </a>,
                <a href="#receptwelt" key="tm-rezeptwelt">
                  <Rezeptwelt />
                </a>,
              ]}
            />
            <FooterSocialLinkBlock
              header={
                <Typography variant="paragraph18" fontWeight="bold">
                  Kobold
                </Typography>
              }
              links={[
                <a href="#facebook" key="kb-fb">
                  <Facebook />
                </a>,
                <a href="#instagram" key="kb-instagram">
                  <Instagram />
                </a>,
                <a href="#pinterest" key="kb-pinterest">
                  <Pinterest />
                </a>,
                <a href="#youtube" key="kb-youtube">
                  <Youtube />
                </a>,
              ]}
            />
            <div className={styles.overwrittenLanguageSelector}>
              <LanguageSelector
                title={
                  <Typography variant="paragraph18" fontWeight="bold">
                    Country
                  </Typography>
                }
                buttonLabel="United Kingdom"
                modalTitle="Select your country"
                suggestedLabel="Suggested"
                suggestedLanguages={[
                  <DropdownItem key="germany">
                    <Germany />
                    <Typography
                      component="span"
                      variant="paragraph16"
                      fontWeight="regular"
                    >
                      Deutschland
                    </Typography>
                  </DropdownItem>,
                ]}
                languages={Languages}
              />
            </div>
          </FooterSocialLinks>
        </div>
      </FooterSection>
      <FooterSection variant="spacingMetaLink">
        <FooterMetaLinks>
          <ul>
            <li>
              <Typography variant="paragraph12">© 2021 Vorwerk</Typography>
            </li>

            <li>
              <Typography variant="paragraph12">
                <a href="#about-us">About us</a>
              </Typography>
            </li>

            <li>
              <Typography variant="paragraph12">
                <a href="#press">Press</a>
              </Typography>
            </li>
            <li>
              <Typography variant="paragraph12">
                <a href="#privacy">Privacy</a>
              </Typography>
            </li>
            <li>
              <Typography variant="paragraph12">
                <a href="#imprint">Imprint</a>
              </Typography>
            </li>
            <li>
              <Typography variant="paragraph12">
                <a href="#cookies">Cookies</a>
              </Typography>
            </li>
            <li>
              <Typography variant="paragraph12">
                <a href="#terms">Terms of service</a>
              </Typography>
            </li>
            <li>
              <Typography variant="paragraph12">
                <a href="#cancellation">Cancellation</a>
              </Typography>
            </li>
            <li>
              <Typography variant="paragraph12">
                <a href="#disposal">Disposal of batteries & old devices</a>
              </Typography>
            </li>
            <li>
              <Typography variant="paragraph12">
                <a href="#mandatory">Mandatory information</a>
              </Typography>
            </li>
          </ul>
        </FooterMetaLinks>
      </FooterSection>
    </footer>
  );
};
