"use client";

import Footer from "@components/shared/footer/footer";
import ReactLenis from "lenis/react";
import { Viewport } from "next";
import { ReactNode } from "react";
import styles from "./layout.module.scss";

export const viewport: Viewport = {
  themeColor: "#23282a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ReactLenis root>
      <div className={styles.layoutWrapper}>
        {children}
        <Footer />
      </div>
    </ReactLenis>
  );
}
