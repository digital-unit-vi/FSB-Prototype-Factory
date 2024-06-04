import BatteryIcon from "@public/shared/featureIcons/battery";
import BluetoothIcon from "@public/shared/featureIcons/bluetooth";
import CleaningIcon from "@public/shared/featureIcons/cleaning";
import PeelingIcon from "@public/shared/featureIcons/peeling";
import SlowCookingIcon from "@public/shared/featureIcons/slowCooking";
import SousVideIcon from "@public/shared/featureIcons/sousVide";
import TemperatureHighIcon from "@public/shared/featureIcons/temperatureHigh";
import Link from "next/link";
import styles from "./featureTile.module.scss";

const ICON_MAPPING = {
  battery: BatteryIcon,
  bluetooth: BluetoothIcon,
  cleaning: CleaningIcon,
  peeling: PeelingIcon,
  "slow-cooking": SlowCookingIcon,
  "sous-vide": SousVideIcon,
  "temperature-high": TemperatureHighIcon,
};

export default function FeatureTile({
  icon,
  iconTheme = "light",
  headline,
  paragraph,
  leading,
  wide,
  dark,
  href = "#",
}: Readonly<{
  icon?: keyof typeof ICON_MAPPING;
  iconTheme?: "light" | "taupe";
  headline?: string;
  paragraph?: string;
  leading?: string;
  wide?: boolean;
  dark?: boolean;
  href?: string;
}>) {
  const IconComponent = ICON_MAPPING[icon ?? "battery"];

  return (
    <Link href={href} passHref className={styles.link}>
      {wide ? (
        <div className={`${dark ? styles.dark : ""} ${styles.containerWide}`}>
          <div className={styles.headlineWrapperWide}>
            <span className={styles.leadingWide}>{leading}</span>
            <span className={styles.headlineWide}>{headline}</span>
          </div>
          <span className={styles.textWide}>{paragraph}</span>
        </div>
      ) : (
        <div className={`${dark ? styles.dark : ""} ${styles.container}`}>
          {icon && (
            <div className={styles.iconWrapper}>
              <IconComponent
                className={`${styles.icon} ${styles[iconTheme]}`}
              />
            </div>
          )}
          <span className={styles.headline}>{headline}</span>
          <span className={styles.text}>{paragraph}</span>
        </div>
      )}
    </Link>
  );
}
