"use client";

import {
  FooterLinks,
  FooterLinksBlock,
  FooterSection,
  Typography,
} from "@vorwerk/fibre-react";
import Link from "next/link";
import { ReactNode } from "react";
import "../../../globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      {children}
      <footer>
        <FooterSection variant="spacingVertical" borderBottom={true}>
          <FooterLinks>
            <FooterLinksBlock
              header={
                <Typography variant="paragraph18" fontWeight="bold">
                  Get in touch
                </Typography>
              }
              links={[
                <Typography variant="paragraph16" key="press-kit">
                  <Link href="#press-kit">Explore our press kit</Link>
                </Typography>,
                <Typography variant="paragraph16" key="customer-service">
                  <Link href="#customer-service">Customer Service</Link>
                </Typography>,
              ]}
            />
            <FooterLinksBlock
              header={
                <Typography variant="paragraph18" fontWeight="bold">
                  Orders & Delivery
                </Typography>
              }
              links={[
                <Typography variant="paragraph16" key="pre-order">
                  <Link href="#pre-order">Pre-order now</Link>
                </Typography>,
                <Typography variant="paragraph16" key="track-delivery">
                  <Link href="#track-delivery">Track your delivery</Link>
                </Typography>,
              ]}
            />
            <FooterLinksBlock
              header={
                <Typography variant="paragraph18" fontWeight="bold">
                  Experience the new TM7
                </Typography>
              }
              links={[
                <Typography variant="paragraph16" key="ar">
                  <Link href="#ar">See it in AR</Link>
                </Typography>,
              ]}
            />
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterLinks>
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
                  <Link href="#terms">Terms of Service</Link>
                </Typography>
              </li>
              <li key="Mandatory">
                <Typography variant="paragraph12">
                  <Link href="#mandatory">Mandatory information</Link>
                </Typography>
              </li>
            </ul>
          </FooterLinks>
        </FooterSection>
      </footer>
    </>
  );
}
