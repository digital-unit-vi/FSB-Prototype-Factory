"use client";

import "@components/build-assets/style.css";
import Footer from "@components/shared/footer/footer";
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
        <Footer />
      </div>
    </ReactLenis>
  );
}
