import { Typography } from "@vorwerk/fibre-react";
import { FC } from "react";
import styles from "./accordion.module.scss";

const Specifications: FC = () => {
  return (
    <div className={styles.specificationsContainer}>
      <div className={styles.table}>
        <Typography component={"h6"} fontWeight={"bold"}>
          General
        </Typography>
        <div className={styles.column}>
          <Typography variant={"paragraph18"} fontWeight={"regular"}>
            Article number: TM60081
          </Typography>
          <div className={styles.dataItem}>
            <Typography variant={"paragraph18"} fontWeight={"bold"}>
              Basic device
            </Typography>
            <Typography variant={"paragraph18"} fontWeight={"regular"}>
              H x W x D: 34,1 x 32,6 x 32,6 cm
            </Typography>
            <Typography variant={"paragraph18"} fontWeight={"regular"}>
              Weight: 7,95 kg
            </Typography>
          </div>
          <div className={styles.dataItem}>
            <Typography variant={"paragraph18"} fontWeight={"bold"}>
              Varoma®
            </Typography>
            <Typography variant={"paragraph18"} fontWeight={"regular"}>
              H x W x D: 13,1 x 38,3 x 27,5 cm
            </Typography>
            <Typography variant={"paragraph18"} fontWeight={"regular"}>
              Weight: 0,80 kg
            </Typography>
          </div>
        </div>
      </div>
      <div className={styles.table}>
        <Typography component={"h6"} fontWeight={"bold"}>
          Motor
        </Typography>
        <div className={styles.column}>
          <div className={styles.dataItem}>
            <Typography variant={"paragraph18"} fontWeight={"regular"}>
              Maintenance-free Vorwerk reluctance motor, 500 W rated power
            </Typography>
            <Typography variant={"paragraph18"} fontWeight={"regular"}>
              Infinitely variable speed setting from 100-10700 rpm (gentle
              stirring level: 40 rpm)
            </Typography>
            <Typography variant={"paragraph18"} fontWeight={"regular"}>
              Special speed level (interval mode) for &ldquo;kneading
              dough&rdquo; mode
            </Typography>
            <Typography variant={"paragraph18"} fontWeight={"regular"}>
              Protected against overload by electronic motor protection
            </Typography>
            <Typography variant={"paragraph18"} fontWeight={"regular"}>
              Standby consumption: 0 W
            </Typography>
          </div>
        </div>
      </div>
      <div className={styles.table}>
        <Typography component={"h6"} fontWeight={"bold"}>
          Heating
        </Typography>
        <div className={styles.column}>
          <div className={styles.dataItem}>
            <Typography variant={"paragraph18"} fontWeight={"regular"}>
              Power consumption 1000 W
            </Typography>
            <Typography variant={"paragraph18"} fontWeight={"regular"}>
              Protected against overheating
            </Typography>
          </div>
        </div>
      </div>
      <div className={styles.table}>
        <Typography component={"h6"} fontWeight={"bold"}>
          Integrated scales
        </Typography>
        <div className={styles.column}>
          <div className={styles.dataItem}>
            <Typography variant={"paragraph18"} fontWeight={"regular"}>
              Measuring range 1 to 3000 g
            </Typography>
            <Typography variant={"paragraph18"} fontWeight={"regular"}>
              Measuring range -1 to -3000 g
            </Typography>
          </div>
        </div>
      </div>
      <div className={styles.table}>
        <Typography component={"h6"} fontWeight={"bold"}>
          Mixing bowl
        </Typography>
        <div className={styles.column}>
          <div className={styles.dataItem}>
            <Typography variant={"paragraph18"} fontWeight={"regular"}>
              Maximum filling quantity: 2,2 l
            </Typography>
            <Typography variant={"paragraph18"} fontWeight={"regular"}>
              with integrated heating and temperature sensor
            </Typography>
          </div>
        </div>
      </div>
      <div className={styles.table}>
        <Typography component={"h6"} fontWeight={"bold"}>
          Connected load
        </Typography>
        <div className={styles.column}>
          <div className={styles.dataItem}>
            <Typography variant={"paragraph18"} fontWeight={"regular"}>
              Alternating voltage: 220-240 V 50/60 Hz (automatic changeover)
            </Typography>
            <Typography variant={"paragraph18"} fontWeight={"regular"}>
              Max. Power consumption: 1500 W
            </Typography>
            <Typography variant={"paragraph18"} fontWeight={"regular"}>
              Length of the connecting cable: 1 m, extendable
            </Typography>
          </div>
        </div>
      </div>
      <div className={styles.table}>
        <Typography component={"h6"} fontWeight={"bold"}>
          WLAN connectivity
        </Typography>
        <div className={styles.column}>
          <div className={styles.dataItem}>
            <Typography variant={"paragraph18"} fontWeight={"regular"}>
              {`2,4 GHz: 100mW (< 20 dBm)`}
            </Typography>
            <Typography variant={"paragraph18"} fontWeight={"regular"}>
              {`5 GHz:100mW (< 20 dBm)`}
            </Typography>
          </div>
        </div>
      </div>
      <div className={styles.table}>
        <Typography component={"h6"} fontWeight={"bold"}>
          Bluetooth® connectivity
        </Typography>
        <div className={styles.column}>
          <div className={styles.dataItem}>
            <Typography variant={"paragraph18"} fontWeight={"regular"}>
              {`2,4 GHz: < 0 dBm`}
            </Typography>
            <Typography variant={"paragraph18"} fontWeight={"regular"}>
              Bluetooth® 4.2 Low Energy
            </Typography>
          </div>
        </div>
      </div>
      <div className={styles.table}>
        <Typography component={"h6"} fontWeight={"bold"}>
          Materials
        </Typography>
        <div className={styles.column}>
          <div className={styles.dataItem}>
            <Typography variant={"paragraph18"} fontWeight={"regular"}>
              Housing: High-quality plastic
            </Typography>
            <Typography variant={"paragraph18"} fontWeight={"regular"}>
              Mixing bowl: Stainless steel
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
