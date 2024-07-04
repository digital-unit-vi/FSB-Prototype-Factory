import { ReactNode } from "react";
import styles from "./componentWrapper.module.scss";

export default function ComponentWrapper({
  children,
  textCenter = false,
}: Readonly<{
  children: ReactNode | ReactNode[];
  textCenter?: boolean;
}>) {
  return (
    <div
      className={`${styles.wrapper} ${
        textCenter ? styles.wrapperCenterText : ""
      }`}
    >
      {children}
    </div>
  );
}
