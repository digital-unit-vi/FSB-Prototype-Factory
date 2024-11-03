"use client";

import KlarnaIcon from "@public/library/images/footer/svg/payment/Klarna.svg";
import MastercardIcon from "@public/library/images/footer/svg/payment/Mastercard.svg";
import PaypalIcon from "@public/library/images/footer/svg/payment/Paypal.svg";
import VisaIcon from "@public/library/images/footer/svg/payment/Visa.svg";
import VoucherIcon from "@public/library/images/footer/svg/payment/coupon.svg";
import InstallmentIcon from "@public/library/images/footer/svg/payment/factoring-euro.svg";
import InvoiceIcon from "@public/library/images/footer/svg/payment/invoice-euro.svg";
import DHLIcon from "@public/library/images/footer/svg/shipping/DHL.svg";
import DPDIcon from "@public/library/images/footer/svg/shipping/DPD.svg";
import Trusted1Icon from "@public/library/images/footer/svg/trusted/trusted1.svg";
import Trusted2Icon from "@public/library/images/footer/svg/trusted/trusted2.svg";
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
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname();

  // Don't render the default footer if on a specific page
  const showDefaultFooter = pathname !== "/landing-page/light/sensor-de";

  return (
    <>
      {children}
      {showDefaultFooter && (
        <footer>
          <FooterSection variant="spacingVertical">
            <FooterLinks>
              <FooterLinksBlock
                header={
                  <Typography variant="paragraph18" fontWeight="bold">
                    Get in touch
                  </Typography>
                }
                links={[
                  <Typography variant="paragraph16">
                    <Link href="#contact">Contact us</Link>
                  </Typography>,
                  <Typography variant="paragraph16">
                    <Link href="#support">Vorwerk Support Center</Link>
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
                    <Link href="#experience-live">Experience live</Link>
                  </Typography>,
                  <Typography variant="paragraph16">
                    <Link href="#vorwerk-stores">Vorwerk Stores</Link>
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
                  <Typography variant="paragraph16">
                    <Link href="#paymentmethods">Payment methods</Link>
                  </Typography>,
                  <Typography variant="paragraph16">
                    <Link href="#shipping-delivery">Shipping & delivery</Link>
                  </Typography>,
                  <Typography variant="paragraph16">
                    <Link href="#security">Security</Link>
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
                    Payment methods
                  </Typography>
                }
                logos={[
                  <FooterShopLogo caption="Mastercard" hasBackground={true}>
                    <Image
                      src={MastercardIcon as StaticImageData}
                      alt="Mastercard"
                    />
                  </FooterShopLogo>,
                  <FooterShopLogo caption="Visa" hasBackground={true}>
                    <Image src={VisaIcon as StaticImageData} alt="Visa" />
                  </FooterShopLogo>,
                  <FooterShopLogo caption="PayPal" hasBackground={true}>
                    <Image src={PaypalIcon as StaticImageData} alt="PayPal" />
                  </FooterShopLogo>,
                  <FooterShopLogo caption="Klarna">
                    <Image src={KlarnaIcon as StaticImageData} alt="Klarna" />
                  </FooterShopLogo>,
                  <FooterShopLogo caption="Installment" hasBackground={true}>
                    <Image
                      src={InstallmentIcon as StaticImageData}
                      alt="Installment"
                    />
                  </FooterShopLogo>,
                  <FooterShopLogo caption="Invoice" hasBackground={true}>
                    <Image src={InvoiceIcon as StaticImageData} alt="Invoice" />
                  </FooterShopLogo>,
                  <FooterShopLogo caption="Voucher" hasBackground={true}>
                    <Image src={VoucherIcon as StaticImageData} alt="Voucher" />
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
                  <FooterShopLogo caption="DHL">
                    <Image src={DHLIcon as StaticImageData} alt="DHL" />
                  </FooterShopLogo>,
                  <FooterShopLogo caption="DPD" hasBackground={true}>
                    <Image src={DPDIcon as StaticImageData} alt="DPD" />
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
                  <Image
                    src={Trusted1Icon as StaticImageData}
                    alt="Trusted 1"
                  />,
                  <Image
                    src={Trusted2Icon as StaticImageData}
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
                    <Link href="#about-us">About us</Link>
                  </Typography>
                </li>

                <li key="Press">
                  <Typography variant="paragraph12">
                    <Link href="#press">Press</Link>
                  </Typography>
                </li>
                <li key="Privacy">
                  <Typography variant="paragraph12">
                    <Link href="#privacy">Privacy</Link>
                  </Typography>
                </li>
                <li key="Imprint">
                  <Typography variant="paragraph12">
                    <Link href="#imprint">Imprint</Link>
                  </Typography>
                </li>
                <li key="Cookies">
                  <Typography variant="paragraph12">
                    <Link href="#cookies">Cookies</Link>
                  </Typography>
                </li>
                <li key="Terms of service">
                  <Typography variant="paragraph12">
                    <Link href="#terms">Terms of service</Link>
                  </Typography>
                </li>
                <li key="Cancellation">
                  <Typography variant="paragraph12">
                    <Link href="#cancellation">Cancellation</Link>
                  </Typography>
                </li>
                <li key="Disposal">
                  <Typography variant="paragraph12">
                    <Link href="#disposal">
                      Disposal of batteries & old devices
                    </Link>
                  </Typography>
                </li>
                <li key="Mandatory">
                  <Typography variant="paragraph12">
                    <Link href="#mandatory">Mandatory information</Link>
                  </Typography>
                </li>
              </ul>
            </FooterSmallLinks>
          </FooterSection>
        </footer>
      )}
    </>
  );
}
