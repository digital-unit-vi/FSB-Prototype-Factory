import React, { ReactNode } from "react";
import styles from "./heading.module.scss";

interface CustomProps {
  className?: string;
  children?: ReactNode;
}

export default function Heading({
  children,
  dark,
  oneLineOnMedium,
}: {
  children: ReactNode[] | ReactNode;
  dark?: boolean;
  oneLineOnMedium?: boolean;
}) {
  const renderChildren = (child: ReactNode): ReactNode => {
    if (React.isValidElement<CustomProps>(child)) {
      const { className, children: nestedChildren, ...rest } = child.props;

      const classNameStr = className ?? "";

      const processedChildren =
        nestedChildren && React.Children.count(nestedChildren)
          ? React.Children.map(nestedChildren, renderChildren)
          : null;

      return React.cloneElement(child, {
        ...rest,
        className: `${styles[classNameStr]}`,
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
