"use client";

import { FunctionsTab as FunctionsTabLib } from "@components/build-assets/libraryExport";
import BatteryIcon from "@public/shared/featureIcons/battery";
import React from "react";
import styles from "./functionsTab.module.scss";

const items: {
  id: number;
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: (props: any) => React.ReactSVGElement;
  isActive: boolean;
  scrollMin: number;
  scrollMax: number;
  media: {
    type: string;
    src: string;
    alt: string;
    title: string;
  };
}[] = [
  {
    id: 1,
    text: "1. Sensor and charging station",
    icon: BatteryIcon,
    isActive: false,
    scrollMin: 0,
    scrollMax: 1,
    media: {
      type: "video",
      src: "/landingPage/stepByStep/sensor/01_take.mp4",
      alt: "Sensor and charging station",
      title: "Sensor and charging station",
    },
  },
  {
    id: 2,
    text: "2. Place the sensor",
    icon: BatteryIcon,
    isActive: false,
    scrollMin: 0,
    scrollMax: 1,
    media: {
      type: "video",
      src: "/landingPage/stepByStep/sensor/02_insert.mp4",
      alt: "Place the sensor",
      title: "Place the sensor",
    },
  },
  {
    id: 3,
    text: "3. Cooking with the sensor",
    icon: BatteryIcon,
    isActive: false,
    scrollMin: 0,
    scrollMax: 1,
    media: {
      type: "video",
      src: "/landingPage/stepByStep/sensor/03_cooking.mp4",
      alt: "Cooking with the sensor",
      title: "Cooking with the sensor",
    },
  },
  {
    id: 4,
    text: "4. Cleaning",
    icon: BatteryIcon,
    isActive: false,
    scrollMin: 0,
    scrollMax: 1,
    media: {
      type: "video",
      src: "/landingPage/stepByStep/sensor/04_cleaning.mp4",
      alt: "Cleaning",
      title: "Cleaning",
    },
  },
];

const FunctionsTab = () => {
  return (
    <div className={styles.functionsTabWrapper}>
      <FunctionsTabLib items={items} />
    </div>
  );
};

export default FunctionsTab;
