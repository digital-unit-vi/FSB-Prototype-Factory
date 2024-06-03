import BlendIcon from "@public/landingPage/scrollRow/blend";
import DoughIcon from "@public/landingPage/scrollRow/dough";
import FermentationIcon from "@public/landingPage/scrollRow/fermentation";
import HighTemperatureIcon from "@public/landingPage/scrollRow/highTemperature";
import PeelingIcon from "@public/landingPage/scrollRow/peeling";
import PreparationTimeIcon from "@public/landingPage/scrollRow/preparationTime";
import SlowCookingIcon from "@public/landingPage/scrollRow/slowCooking";
import SousVideIcon from "@public/landingPage/scrollRow/sousVide";
import Marquee from "react-fast-marquee";
import styles from "./scrollRow.module.scss";

const ScrollRow = ({ dark }: { dark?: boolean }) => {
  return (
    <div className={`${styles.scrollRowContainer} ${dark ? styles.dark : ""}`}>
      <Marquee autoFill speed={45}>
        <div className={styles.iconWrapper}>
          <PreparationTimeIcon className={styles.icon} />
          <p className={styles.iconText}>Chop</p>
        </div>
        <div className={styles.iconWrapper}>
          <DoughIcon className={styles.icon} />
          <p className={styles.iconText}>Knead</p>
        </div>
        <div className={styles.iconWrapper}>
          <SousVideIcon className={styles.icon} />
          <p className={styles.iconText}>Sous-vide</p>
        </div>
        <div className={styles.iconWrapper}>
          <HighTemperatureIcon className={styles.icon} />
          <p className={styles.iconText}>Sauté</p>
        </div>
        <div className={styles.iconWrapper}>
          <BlendIcon className={styles.icon} />
          <p className={styles.iconText}>Blend</p>
        </div>
        <div className={styles.iconWrapper}>
          <PeelingIcon className={styles.icon} />
          <p className={styles.iconText}>Peeler</p>
        </div>
        <div className={styles.iconWrapper}>
          <FermentationIcon className={styles.icon} />
          <p className={styles.iconText}>Fermentation</p>
        </div>
        <div className={styles.iconWrapper}>
          <SlowCookingIcon className={styles.icon} />
          <p className={styles.iconText}>Slow Cook</p>
        </div>
      </Marquee>
    </div>
  );
};

export default ScrollRow;
