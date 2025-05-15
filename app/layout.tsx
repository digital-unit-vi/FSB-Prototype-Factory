"use client";

import {
  Button,
  DropdownItem,
  Facebook,
  FooterLinks,
  FooterLinksBlock,
  FooterLogo,
  FooterSection,
  FooterShopLogo,
  FooterShopLogos,
  FooterShopLogosBlock,
  FooterSmallLinks,
  FooterSocialLinkBlock,
  FooterSocialLinks,
  Germany,
  Headline,
  Instagram,
  LanguageSelector,
  NewsletterSubscription,
  Pinterest,
  ProductStripe,
  Rezeptwelt,
  Typography,
  VorwerkWhite,
  Youtube,
} from "@vorwerk/fibre-react";
import "@vorwerk/fibre-react/main.css";
import { Languages } from "const";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { ReactNode, useMemo } from "react";
import "./globals.scss";
import { Providers } from "./providers";

const vorwerkFont = localFont({
  preload: true,
  fallback: ["Vorwerk", "system-ui", "arial"],
  adjustFontFallback: "Arial",
  display: "swap",
  src: [
    {
      path: "../public/fonts/Vorwerk-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Vorwerk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Vorwerk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Vorwerk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname();

  const themeClass = useMemo(() => {
    if (pathname.includes("/landing-page/dark")) {
      return "dark-theme";
    } else {
      return "light-theme";
    }
  }, [pathname]);

  const excludedFooterPaths = [
    "/landing-page/dark/tm7",
    "/es-2025",
    "/es-2025/aop",
  ];

  const showDefaultFooter = !excludedFooterPaths.includes(pathname);

  return (
    <html lang="en">
      <body className={`${vorwerkFont.className} ${themeClass}`}>
        <Providers>
          <main className={themeClass}>{children}</main>
          {showDefaultFooter && (
            <footer>
              <ProductStripe
                text="For over 130 years, our products have impressed millions of families with their superior, innovative technology and their proverbial long service life."
                images={[
                  <img
                    key="product-stripe-1"
                    src="/library/images/footer/product-stripe-1.png"
                    alt="product stripe 1"
                  />,
                  <img
                    key="product-stripe-2"
                    src="/library/images/footer/product-stripe-2.png"
                    alt="product stripe 2"
                  />,
                  <img
                    key="product-stripe-3"
                    src="/library/images/footer/product-stripe-3.png"
                    alt="product stripe 3"
                  />,
                  <img
                    key="product-stripe-4"
                    src="/library/images/footer/product-stripe-4.png"
                    alt="product stripe 4"
                  />,
                  <img
                    key="product-stripe-5"
                    src="/library/images/footer/product-stripe-5.png"
                    alt="product stripe 5"
                  />,
                  <img
                    key="product-stripe-6"
                    src="/library/images/footer/product-stripe-6.png"
                    alt="product stripe 6"
                  />,
                  <img
                    key="product-stripe-7"
                    src="/library/images/footer/product-stripe-7.png"
                    alt="product stripe 7"
                  />,
                ]}
              />
              <FooterSection variant="spacingVertical" color="light">
                <NewsletterSubscription
                  headline={
                    <Headline strongColor="anthracite">
                      <Typography component="h2">
                        Stay <strong>informed</strong>
                      </Typography>
                    </Headline>
                  }
                  button={
                    <Button buttonStyle="primary" size="large">
                      Subscribe to newsletter
                    </Button>
                  }
                />
              </FooterSection>
              <FooterSection variant="spacingLogo" borderBottom={true}>
                <FooterLogo logo={<VorwerkWhite size="medium" />} />
              </FooterSection>
              <FooterSection variant="spacingVertical">
                <FooterLinks>
                  <FooterLinksBlock
                    header={
                      <Typography variant="paragraph18" fontWeight="bold">
                        Get in touch
                      </Typography>
                    }
                    links={[
                      <Typography variant="paragraph16" key="contact-us">
                        <a href="#contact">Contact us</a>
                      </Typography>,
                      <Typography
                        variant="paragraph16"
                        key="vorwerk-support-center"
                      >
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
                      <Typography key="experience-live" variant="paragraph16">
                        <a href="#experience-live">Experience live</a>
                      </Typography>,
                      <Typography key="vorwerk-stores" variant="paragraph16">
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
                      <Typography
                        variant="paragraph16"
                        key="shipping-and-delivery"
                      >
                        <a href="#shipping-delivery">Shipping & delivery</a>
                      </Typography>,
                      <Typography variant="paragraph16" key="security">
                        <a href="#security">Security</a>
                      </Typography>,
                    ]}
                  />
                </FooterLinks>
              </FooterSection>
              <FooterSection>
                <FooterSocialLinks>
                  <FooterSocialLinkBlock
                    header={
                      <Typography variant="paragraph18" fontWeight="bold">
                        Follow Kobold
                      </Typography>
                    }
                    links={[
                      <a key="facebook" href="#facebook" aria-label="Facebook">
                        <Facebook />
                      </a>,
                      <a
                        key="instagram"
                        href="#instagram"
                        aria-label="Instagram"
                      >
                        <Instagram />
                      </a>,
                      <a
                        key="pinterest"
                        href="#pinterest"
                        aria-label="Pinterest"
                      >
                        <Pinterest />
                      </a>,
                      <a key="youtube" href="#youtube" aria-label="Youtube">
                        <Youtube />
                      </a>,
                    ]}
                  />
                  <FooterSocialLinkBlock
                    header={
                      <Typography variant="paragraph18" fontWeight="bold">
                        Follow Thermomix®
                      </Typography>
                    }
                    links={[
                      <a key="facebook" href="#facebook" aria-label="Facebook">
                        <Facebook />
                      </a>,
                      <a
                        key="instagram"
                        href="#instagram"
                        aria-label="Instagram"
                      >
                        <Instagram />
                      </a>,
                      <a
                        key="pinterest"
                        href="#pinterest"
                        aria-label="Pinterest"
                      >
                        <Pinterest />
                      </a>,
                      <a key="youtube" href="#youtube" aria-label="Youtube">
                        <Youtube />
                      </a>,
                      <a
                        key="rezeptwelt"
                        href="#receptwelt"
                        aria-label="Rezeptwelt"
                      >
                        <Rezeptwelt />
                      </a>,
                    ]}
                  />
                  <LanguageSelector
                    title={
                      <Typography variant="paragraph18" fontWeight="bold">
                        Country
                      </Typography>
                    }
                    buttonLabel="United kingdom"
                    modalTitle="Select your country"
                    suggestedLabel="Suggested"
                    suggestedLanguages={[
                      <DropdownItem key="suggested-language-de">
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
                </FooterSocialLinks>
              </FooterSection>
              <FooterSection borderBottom={true}>
                <FooterShopLogos>
                  <FooterShopLogosBlock
                    header={
                      <Typography variant="paragraph18" fontWeight="bold">
                        Payment methods
                      </Typography>
                    }
                    logos={[
                      <FooterShopLogo
                        key="apple-pay"
                        caption="Apple Pay"
                        hasBackground={true}
                      >
                        <img
                          src="/library/images/footer/svg/payment/ApplePay.svg"
                          alt="Apple Pay"
                        />
                      </FooterShopLogo>,
                      <FooterShopLogo
                        key="mastercard"
                        caption="Mastercard"
                        hasBackground={true}
                      >
                        <img
                          src="/library/images/footer/svg/payment/Mastercard.svg"
                          alt="Mastercard"
                        />
                      </FooterShopLogo>,
                      <FooterShopLogo
                        key="visa"
                        caption="Visa"
                        hasBackground={true}
                      >
                        <img
                          src="/library/images/footer/svg/payment/Visa.svg"
                          alt="Visa"
                        />
                      </FooterShopLogo>,
                      <FooterShopLogo
                        key="paypal"
                        caption="PayPal"
                        hasBackground={true}
                      >
                        <img
                          src="/library/images/footer/svg/payment/Paypal.svg"
                          alt="Paypal"
                        />
                      </FooterShopLogo>,
                      <FooterShopLogo key="klarna" caption="Klarna">
                        <img
                          src="/library/images/footer/svg/payment/Klarna.svg"
                          alt="Klarna"
                        />
                      </FooterShopLogo>,
                      <FooterShopLogo
                        key="installment"
                        caption="Installment"
                        hasBackground={true}
                      >
                        <img
                          src="/library/images/footer/svg/payment/factoring-euro.svg"
                          alt="Installment"
                        />
                      </FooterShopLogo>,
                      <FooterShopLogo
                        key="invoice"
                        caption="Invoice"
                        hasBackground={true}
                      >
                        <img
                          src="/library/images/footer/svg/payment/invoice-euro.svg"
                          alt="Invoice"
                        />
                      </FooterShopLogo>,
                      <FooterShopLogo
                        key="voucher"
                        caption="Voucher"
                        hasBackground={true}
                      >
                        <img
                          src="/library/images/footer/svg/payment/coupon.svg"
                          alt="Coupon"
                        />
                      </FooterShopLogo>,
                    ]}
                  />
                  <FooterShopLogosBlock
                    header={
                      <Typography variant="paragraph18" fontWeight="bold">
                        Shipping methods
                      </Typography>
                    }
                    logos={[
                      <FooterShopLogo key="dhl" caption="DHL">
                        <img
                          src="/library/images/footer/svg/shipping/DHL.svg"
                          alt=""
                        />
                      </FooterShopLogo>,
                      <FooterShopLogo
                        key="dpd"
                        caption="DPD"
                        hasBackground={true}
                      >
                        <img
                          src="/library/images/footer/svg/shipping/DPD.svg"
                          alt=""
                        />
                      </FooterShopLogo>,
                    ]}
                  />
                  <FooterShopLogosBlock
                    bigLogos={true}
                    header={
                      <Typography variant="paragraph18" fontWeight="bold">
                        Certified quality
                      </Typography>
                    }
                    logos={[
                      <img
                        key="trusted-logo-1"
                        src="/library/images/footer/svg/trusted/trusted1.svg"
                        alt="Trusted 1"
                      />,
                      <img
                        key="trusted-logo-2"
                        src="/library/images/footer/svg/trusted/trusted2.svg"
                        alt="Trusted 2"
                      />,
                    ]}
                  />
                </FooterShopLogos>
              </FooterSection>
              <FooterSection variant="spacingSmallLink">
                <FooterSmallLinks>
                  <ul>
                    <li key="about-us">
                      <Typography variant="paragraph12">
                        <a href="#about-us">About us</a>
                      </Typography>
                    </li>
                    <li key="press">
                      <Typography variant="paragraph12">
                        <a href="#press">Press</a>
                      </Typography>
                    </li>
                    <li key="privacy">
                      <Typography variant="paragraph12">
                        <a href="#privacy">Privacy</a>
                      </Typography>
                    </li>
                    <li key="imprint">
                      <Typography variant="paragraph12">
                        <a href="#imprint">Imprint</a>
                      </Typography>
                    </li>
                    <li key="cookies">
                      <Typography variant="paragraph12">
                        <a href="#cookies">Cookies</a>
                      </Typography>
                    </li>
                    <li key="terms">
                      <Typography variant="paragraph12">
                        <a href="#terms">Terms of service</a>
                      </Typography>
                    </li>
                    <li key="cancellation">
                      <Typography variant="paragraph12">
                        <a href="#cancellation">Cancellation</a>
                      </Typography>
                    </li>
                    <li key="disposal">
                      <Typography variant="paragraph12">
                        <a href="#disposal">
                          Disposal of batteries & old devices
                        </a>
                      </Typography>
                    </li>
                    <li key="mandatory">
                      <Typography variant="paragraph12">
                        <a href="#mandatory">Mandatory information</a>
                      </Typography>
                    </li>
                  </ul>
                </FooterSmallLinks>
              </FooterSection>
            </footer>
          )}
        </Providers>
      </body>
    </html>
  );
}
