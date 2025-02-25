import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import styles from "./layout.module.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname();

  const excludedFooterPaths = [
    "/landing-page/dark/tm7",
  ];

  const showDefaultFooter = !excludedFooterPaths.includes(pathname);

  return (
    <div className={styles.layoutWrapper}>
      {children}
    </div>
  );
}
