import { ReactNode } from "react";
import styles from "./quotation.module.scss";

export default function Quotation({
  children,
  dark,
}: {
  children: ReactNode[];
  dark?: boolean;
}) {
  return (
    <div className={`${styles.wrapper} ${dark ? styles.dark : ""}`}>
      {children}
    </div>
  );
}
