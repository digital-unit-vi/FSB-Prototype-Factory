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
    <div className={styles.layoutWrapper}>
      {children}
    </div>
  );
}
