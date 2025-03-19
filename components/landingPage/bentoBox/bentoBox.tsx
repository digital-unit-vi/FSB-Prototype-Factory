"use client";

import BentoItem from "@components/landingPage/bentoItem/bentoItem";
import { useGSAP } from "@gsap/react";
import BentoBluetooth from "@public/landingPage/bento/bento-bluetooth.png";
import BentoDisplaySettings from "@public/landingPage/bento/bento-display-settings.png";
import BentoMotor from "@public/landingPage/bento/bento-motor.png";
import BentoSensorPhone from "@public/landingPage/bento/bento-sensor-phone.png";
import BentoSensorPlate from "@public/landingPage/bento/bento-sensor-plate.png";
import BentoSensorWater from "@public/landingPage/bento/bento-sensor-water.png";
import BatteryIcon from "@public/shared/featureIcons/battery";
import BluetoothIcon from "@public/shared/featureIcons/bluetooth";
import CleaningIcon from "@public/shared/featureIcons/cleaning";
import DisplaySettingsIcon from "@public/shared/featureIcons/displaySettings";
import MotorIcon from "@public/shared/featureIcons/motor";
import SlowCookingIcon from "@public/shared/featureIcons/slowCooking";
import SousVideIcon from "@public/shared/featureIcons/sousVide";
import TemperatureIcon from "@public/shared/featureIcons/temperatureHigh";
import WifiIcon from "@public/shared/featureIcons/wifi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import styles from "./bentoBox.module.scss";

export default function BentoBox({
  sensor,
  dark = false,
}: Readonly<{
  sensor?: boolean;
  dark?: boolean;
}>) {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
  });

  useGSAP(
    () => {
      const targets = document.querySelectorAll("[data-item='bentoItem']");
      const tweens: gsap.TweenTarget[] = gsap.utils.toArray(targets);

      tweens.forEach((target, index) => {
        gsap.fromTo(
          target,
          {
            y: 35,
            scale: 0.9,
          },
          {
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: targets[index],
              start: "top-=20 bottom",
              end: "bottom top",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: container }
  );

  return (
    <div className={styles.bentoBox} ref={container}>
      {sensor ?
        <>
          <BentoItem
            title="Pinpoint perfection"
            description="Guaranteed taste, consistency and perfect results for all foods beyond the mixing bowl."
            icon={SlowCookingIcon}
            imageSrc={BentoSensorPlate}
            imageAlt="time"
            variant="imageTopSensor"
            dark={dark}
            data-item="bentoItem"
          />

          <BentoItem
            title="Up to 24h battery life"
            description="For the sake of sustainability we rely on rechargeable and replaceable AAA batteries."
            icon={BatteryIcon}
            variant="noImage"
            dark={dark}
            data-item="bentoItem"
          />

          <BentoItem
            title="Up to 275°C"
            description="The sensors heat protection allows it to be used in 275°C hot environments (220°C with holder)."
            icon={SousVideIcon}
            variant="noImage"
            dark={dark}
            data-item="bentoItem"
          />

          <BentoItem
            title="100% water resistent"
            description="Due to full water resistance you don't need to worry about water damage."
            icon={CleaningIcon}
            imageSrc={BentoSensorWater}
            imageAlt="Water Resistance"
            variant="imageBottomSensor"
            dark={dark}
            data-item="bentoItem"
          />

          <BentoItem
            title="Bluetooth®"
            description="Allows to wirelessly connect it to your Thermomix® TM6 and smartphone."
            icon={BluetoothIcon}
            imageSrc={BentoSensorPhone}
            imageAlt="Bluetooth"
            variant="horizontal"
            dark={dark}
            data-item="bentoItem"
          />
        </>
      : <>
          <BentoItem
            title="6.8-inch touch screen"
            description="Great recipes require a greater display so we increased it further."
            icon={DisplaySettingsIcon}
            imageSrc={BentoDisplaySettings}
            imageAlt="Touch Screen"
            variant="imageTop"
            dark={dark}
            data-item="bentoItem"
          />

          <BentoItem
            title="Wifi"
            description="Allows to access thousands of recipes and to receive free updates over the air."
            icon={WifiIcon}
            variant="noImage"
            dark={dark}
            data-item="bentoItem"
          />

          <BentoItem
            title="Up to 160°C"
            description="It's getting hot! TM6 allows for the first time to conjure up roasted flavours."
            icon={TemperatureIcon}
            variant="noImage"
            dark={dark}
            data-item="bentoItem"
          />

          <BentoItem
            title="Durable motor"
            description="Reluctance motor which allows a long time, maintenance-free operation like no other."
            icon={MotorIcon}
            imageSrc={BentoMotor}
            imageAlt="Motor"
            variant="imageBottom"
            dark={dark}
            data-item="bentoItem"
          />

          <BentoItem
            title="Bluetooth®"
            description="Allows to connect neat gadgets like Thermomix® Sensor to improve the experience further."
            icon={BluetoothIcon}
            imageSrc={BentoBluetooth}
            imageAlt="Bluetooth"
            variant="horizontal"
            dark={dark}
            data-item="bentoItem"
          />
        </>
      }
    </div>
  );
}
