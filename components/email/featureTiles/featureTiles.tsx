import { ReactNode } from "react";
import styles from "./featureTiles.module.scss";

export default function FeatureTiles({
  children,
}: Readonly<{
  children: ReactNode[];
}>) {
  const numberOfChildren = children.length;

  return (
    <div
      className={`${styles.container} ${styles['container-' + String(numberOfChildren)]}`}
    >
      {children}
    </div>
  );
}
