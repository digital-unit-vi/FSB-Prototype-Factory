"use client";

import "@components/build-assets/style.css";
import FooterLandingPage from "@components/landingPage/footer/footer";
import ReactLenis from "lenis/react";
import { ReactNode } from "react";
import styles from "./layout.module.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ReactLenis root>
      <div className={styles.layoutWrapper}>
        {children}
        <FooterLandingPage />
      </div>
    </ReactLenis>
  );
}
