import React, { ReactNode } from "react";
import styles from "./heading.module.scss";

export default function Heading({
  children,
  dark,
  oneLineOnMedium,
}: {
  children: ReactNode[] | ReactNode;
  dark?: boolean;
  oneLineOnMedium?: boolean;
}) {
  const renderChildren = (child: React.ReactNode): React.ReactNode => {
    if (React.isValidElement(child)) {
      const { className, children: nestedChildren, ...rest } = child.props;

      // If the child has nested children, recursively render them
      const processedChildren =
        nestedChildren && React.Children.count(nestedChildren)
          ? React.Children.map(nestedChildren, renderChildren)
          : null;

      // Clone the child with additional className if it exists
      return React.cloneElement(child, {
        ...rest,
        className: `${styles[className]}`,
        children: processedChildren,
      });
    }
    return child;
  };

  return (
    <div
      className={`${styles.container} ${dark ? styles.dark : ""} ${
        oneLineOnMedium ? styles.oneLine : ""
      }`}
    >
      {React.Children.map(children, renderChildren)}
    </div>
  );
}
