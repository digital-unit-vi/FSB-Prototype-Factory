"use client";

import {
  FooterLinks,
  FooterLinksBlock,
  FooterSection,
  FooterShopLogo,
  FooterShopLogos,
  FooterShopLogosBlock,
  FooterSmallLinks,
  Typography,
} from "@vorwerk/fibre-react";
import { ReactNode } from "react";

export default function RootLayoutDE({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      {children}
      <footer>
        <FooterSection variant="spacingVertical">
          <FooterLinks>
            <FooterLinksBlock
              header={
                <Typography variant="paragraph18" fontWeight="bold">
                  Kontakt
                </Typography>
              }
              links={[
                <Typography variant="paragraph16">
                  <a href="#contact">Kontaktiere uns</a>
                </Typography>,
                <Typography variant="paragraph16">
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
                <Typography variant="paragraph16">
                  <a href="#experience-live">Live erleben</a>
                </Typography>,
                <Typography variant="paragraph16">
                  <a href="#vorwerk-stores">Vorwerk Stores</a>
                </Typography>,
              ]}
            />
            <FooterLinksBlock
              header={
                <Typography variant="paragraph18" fontWeight="bold">
                  Einkaufen
                </Typography>
              }
              links={[
                <Typography variant="paragraph16">
                  <a href="#paymentmethods">Zahlungsmöglichkeiten</a>
                </Typography>,
                <Typography variant="paragraph16">
                  <a href="#shipping-delivery">Versand & Lieferung</a>
                </Typography>,
                <Typography variant="paragraph16">
                  <a href="#security">Sicherheit</a>
                </Typography>,
              ]}
            />
          </FooterLinks>
        </FooterSection>
        <FooterSection variant="spacingBottom" borderBottom={true}>
          <FooterShopLogos>
            <FooterShopLogosBlock
              header={
                <Typography variant="paragraph18" fontWeight="bold">
                  Zahlungsmöglichkeiten
                </Typography>
              }
              logos={[
                <FooterShopLogo caption="Mastercard" hasBackground={true}>
                  <img
                    src="/library/images/footer/svg/payment/Mastercard.svg"
                    alt="Mastercard"
                  />
                </FooterShopLogo>,
                <FooterShopLogo caption="Visa" hasBackground={true}>
                  <img
                    src="/library/images/footer/svg/payment/Visa.svg"
                    alt="Visa"
                  />
                </FooterShopLogo>,
                <FooterShopLogo caption="PayPal" hasBackground={true}>
                  <img
                    src="/library/images/footer/svg/payment/Paypal.svg"
                    alt="PayPal"
                  />
                </FooterShopLogo>,
                <FooterShopLogo caption="Klarna">
                  <img
                    src="/library/images/footer/svg/payment/Klarna.svg"
                    alt="Klarna"
                  />
                </FooterShopLogo>,
                <FooterShopLogo caption="Ratenzahlung" hasBackground={true}>
                  <img
                    src="/library/images/footer/svg/payment/factoring-euro.svg"
                    alt="Ratenzahlung"
                  />
                </FooterShopLogo>,
                <FooterShopLogo caption="Rechnung" hasBackground={true}>
                  <img
                    src="/library/images/footer/svg/payment/invoice-euro.svg"
                    alt="Rechnung"
                  />
                </FooterShopLogo>,
                <FooterShopLogo caption="Voucher" hasBackground={true}>
                  <img
                    src="/library/images/footer/svg/payment/coupon.svg"
                    alt="Voucher"
                  />
                </FooterShopLogo>,
              ]}
            />
            <FooterShopLogosBlock
              header={
                <Typography variant="paragraph18" fontWeight="bold">
                  Versandmöglichkeiten
                </Typography>
              }
              logos={[
                <FooterShopLogo caption="DHL">
                  <img
                    src="/library/images/footer/svg/shipping/DHL.svg"
                    alt="DHL"
                  />
                </FooterShopLogo>,
                <FooterShopLogo caption="DPD" hasBackground={true}>
                  <img
                    src="/library/images/footer/svg/shipping/DPD.svg"
                    alt="DPD"
                  />
                </FooterShopLogo>,
              ]}
            />
            <FooterShopLogosBlock
              bigLogos={true}
              header={
                <Typography variant="paragraph18" fontWeight="bold">
                  Geprüfte Qualität
                </Typography>
              }
              logos={[
                <img
                  src="/library/images/footer/svg/trusted/trusted1.svg"
                  alt="Trusted 1"
                />,
                <img
                  src="/library/images/footer/svg/trusted/trusted2.svg"
                  alt="Trusted 2"
                />,
              ]}
            />
          </FooterShopLogos>
        </FooterSection>
        <FooterSection>
          <FooterSmallLinks>
            <ul>
              <li key="2021 Vorwerk">
                <Typography variant="paragraph12">© 2021 Vorwerk</Typography>
              </li>

              <li key="About us">
                <Typography variant="paragraph12">
                  <a href="#about-us">Über uns</a>
                </Typography>
              </li>

              <li key="Press">
                <Typography variant="paragraph12">
                  <a href="#press">Press</a>
                </Typography>
              </li>
              <li key="Privacy">
                <Typography variant="paragraph12">
                  <a href="#privacy">Datenschutz</a>
                </Typography>
              </li>
              <li key="Imprint">
                <Typography variant="paragraph12">
                  <a href="#imprint">Impressum</a>
                </Typography>
              </li>
              <li key="Cookies">
                <Typography variant="paragraph12">
                  <a href="#cookies">Cookies</a>
                </Typography>
              </li>
              <li key="Terms of service">
                <Typography variant="paragraph12">
                  <a href="#terms">AGB</a>
                </Typography>
              </li>
              <li key="Cancellation">
                <Typography variant="paragraph12">
                  <a href="#cancellation">Widerruf</a>
                </Typography>
              </li>
              <li key="Disposal">
                <Typography variant="paragraph12">
                  <a href="#disposal">Batterie- und Altgeräteentsorgung</a>
                </Typography>
              </li>
              <li key="Mandatory">
                <Typography variant="paragraph12">
                  <a href="#mandatory">Pflichtinformationen</a>
                </Typography>
              </li>
            </ul>
          </FooterSmallLinks>
        </FooterSection>
      </footer>
    </>
  );
}
