"use client";

import { Header } from "@components/flagship/header/header";
import {
  Facebook,
  FooterLinks,
  FooterLinksBlock,
  FooterLogo,
  FooterMetaLinks,
  FooterSection,
  FooterShopLogo,
  FooterShopLogos,
  FooterShopLogosBlock,
  FooterSocialLinkBlock,
  FooterSocialLinks,
  FooterTrustedLogo,
  Instagram,
  Pinterest,
  Rezeptwelt,
  Typography,
  VorwerkWhite,
  Youtube,
} from "@vorwerk/fibre-react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import "../globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const noHeaderPaths = ["/flagship"];
  const pathname = usePathname();

  return (
    <>
      {!noHeaderPaths.includes(pathname) && <Header />}
      {children}
      <footer>
        <FooterSection variant="spacingLogo" borderBottom>
          <FooterLogo logo={<VorwerkWhite size="medium" />} />
        </FooterSection>
        <FooterSection variant="spacingVertical">
          <FooterLinks>
            <FooterLinksBlock
              header={
                <Typography component="h6" fontWeight="bold" variant="h6">
                  Get in touch
                </Typography>
              }
              links={[
                <Typography variant="paragraph16" key="contact-us">
                  <a href="#contact">Contact us</a>
                </Typography>,
                <Typography variant="paragraph16" key="vorwerk-support-center">
                  <a href="#support">Vorwerk Support Center</a>
                </Typography>,
              ]}
            />
            <FooterLinksBlock
              header={
                <Typography component="h6" fontWeight="bold" variant="h6">
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
                <Typography component="h6" fontWeight="bold" variant="h6">
                  Shopping
                </Typography>
              }
              links={[
                <Typography variant="paragraph16" key="payment-methods">
                  <a href="#paymentmethods">Payment methods</a>
                </Typography>,
                <Typography variant="paragraph16" key="shipping-and-delivery">
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
                <Typography component="h6" fontWeight="bold" variant="h6">
                  Follow Kobold
                </Typography>
              }
              links={[
                <a aria-label="Facebook" href="#facebook" key="kobold-facebook">
                  <Facebook />
                </a>,
                <a
                  aria-label="Instagram"
                  href="#instagram"
                  key="kobold-instagram"
                >
                  <Instagram />
                </a>,
                <a
                  aria-label="Pinterest"
                  href="#pinterest"
                  key="kobold-pinterest"
                >
                  <Pinterest />
                </a>,
                <a aria-label="Youtube" href="#youtube" key="kobold-youtube">
                  <Youtube />
                </a>,
              ]}
            />
            <FooterSocialLinkBlock
              header={
                <Typography component="h6" fontWeight="bold" variant="h6">
                  Follow Thermomix®
                </Typography>
              }
              links={[
                <a
                  aria-label="Facebook"
                  href="#facebook"
                  key="thermomix-facebook"
                >
                  <Facebook />
                </a>,
                <a
                  aria-label="Instagram"
                  href="#instagram"
                  key="thermomix-instagram"
                >
                  <Instagram />
                </a>,
                <a
                  aria-label="Pinterest"
                  href="#pinterest"
                  key="thermomix-pinterest"
                >
                  <Pinterest />
                </a>,
                <a aria-label="Youtube" href="#youtube" key="thermomix-youtube">
                  <Youtube />
                </a>,
                <a
                  aria-label="Rezeptwelt"
                  href="#receptwelt"
                  key="thermomix-rezeptwelt"
                >
                  <Rezeptwelt />
                </a>,
              ]}
            />
          </FooterSocialLinks>
        </FooterSection>
        <FooterSection borderBottom>
          <FooterShopLogos>
            <FooterShopLogosBlock
              header={
                <Typography component="h6" fontWeight="bold" variant="h6">
                  Payment methods
                </Typography>
              }
              logos={[
                <FooterShopLogo
                  caption="Apple Pay"
                  hasBackground
                  link="/"
                  key="apple-pay"
                >
                  <img
                    alt=""
                    src="/library/images/footer/svg/payment/ApplePay.svg"
                  />
                </FooterShopLogo>,
                <FooterShopLogo
                  caption="Mastercard"
                  hasBackground
                  link="/"
                  key="mastercard"
                >
                  <img
                    alt=""
                    src="/library/images/footer/svg/payment/Mastercard.svg"
                  />
                </FooterShopLogo>,
                <FooterShopLogo
                  caption="Visa"
                  hasBackground
                  link="/"
                  key="visa"
                >
                  <img
                    alt=""
                    src="/library/images/footer/svg/payment/Visa.svg"
                  />
                </FooterShopLogo>,
                <FooterShopLogo
                  caption="PayPal"
                  hasBackground
                  link="/"
                  key="paypal"
                >
                  <img
                    alt=""
                    src="/library/images/footer/svg/payment/Paypal.svg"
                  />
                </FooterShopLogo>,
                <FooterShopLogo caption="Klarna" key="klarna">
                  <img
                    alt=""
                    src="/library/images/footer/svg/payment/Klarna.svg"
                    key="klarna"
                  />
                </FooterShopLogo>,
                <FooterShopLogo
                  caption="Installment"
                  hasBackground
                  key="installment"
                >
                  <img
                    alt=""
                    src="/library/images/footer/svg/payment/factoring-euro.svg"
                  />
                </FooterShopLogo>,
                <FooterShopLogo caption="Invoice" hasBackground key="invoice">
                  <img
                    alt=""
                    src="/library/images/footer/svg/payment/invoice-euro.svg"
                  />
                </FooterShopLogo>,
                <FooterShopLogo caption="Voucher" hasBackground key="voucher">
                  <img
                    alt=""
                    src="/library/images/footer/svg/payment/coupon.svg"
                  />
                </FooterShopLogo>,
              ]}
            />
            <FooterShopLogosBlock
              header={
                <Typography component="h6" fontWeight="bold" variant="h6">
                  Shipping methods
                </Typography>
              }
              logos={[
                <FooterShopLogo caption="DHL" key="dhl">
                  <img
                    alt=""
                    src="/library/images/footer/svg/shipping/DHL.svg"
                  />
                </FooterShopLogo>,
                <FooterShopLogo caption="DPD" hasBackground key="dpd">
                  <img
                    alt=""
                    src="/library/images/footer/svg/shipping/DPD.svg"
                  />
                </FooterShopLogo>,
              ]}
            />
            <FooterShopLogosBlock
              bigLogos
              header={
                <Typography component="h6" fontWeight="bold" variant="h6">
                  Certified quality
                </Typography>
              }
              logos={[
                <FooterTrustedLogo link="/" key="trusted1">
                  <img
                    alt="Trusted Logo 1"
                    src="/library/images/footer/svg/trusted/trusted1.svg"
                  />
                </FooterTrustedLogo>,
                <FooterTrustedLogo link="/" key="trusted2">
                  <img
                    alt="Trusted Logo 2"
                    src="/library/images/footer/svg/trusted/trusted2.svg"
                  />
                </FooterTrustedLogo>,
              ]}
            />
          </FooterShopLogos>
        </FooterSection>
        <FooterSection variant="spacingMetaLink">
          <FooterMetaLinks>
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
                  <a href="#disposal">Disposal of batteries & old devices</a>
                </Typography>
              </li>
              <li key="mandatory">
                <Typography variant="paragraph12">
                  <a href="#mandatory">Mandatory information</a>
                </Typography>
              </li>
            </ul>
          </FooterMetaLinks>
        </FooterSection>
      </footer>
    </>
  );
}
