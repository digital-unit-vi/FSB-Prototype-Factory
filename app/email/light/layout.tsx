import Footer from "@components/shared/footer/footer";
import { ReactNode } from "react";
import styles from "./layout.module.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.childrenWrapper}>
        {children}
        <Footer />
      </div>
    </div>
  );
}
