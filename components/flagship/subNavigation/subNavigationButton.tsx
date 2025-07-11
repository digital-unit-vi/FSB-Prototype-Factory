import { Typography } from "@vorwerk/fibre-react";
import { FC } from "react";
import styles from "./subNavigation.module.scss";

interface SubNavigationButtonProps {
  item: string;
  isActive: boolean;
  onClick: () => void;
}

const SubNavigationButton: FC<SubNavigationButtonProps> = ({
  item,
  isActive,
  onClick,
}) => (
  <button
    type="button"
    className={`${styles.subNavigationItem} ${isActive ? styles.active : ""}`}
    onClick={onClick}
  >
    <Typography variant="paragraph16" fontWeight="regular">
      {item}
    </Typography>
  </button>
);

export default SubNavigationButton;
