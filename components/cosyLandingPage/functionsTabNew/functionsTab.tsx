"use client";

import { useEffect, useState } from "react";
import DesktopScrollboxModule from "./desktopScrollboxModule/desktopScrollboxModule";
import styles from "./functionsTab.module.css";
import MobileScrollboxModule from "./mobileScrollboxModule/mobileScrollboxModule";

export interface ListItem {
  id: number;
  text: string;
  isActive: boolean;
  isFolded?: boolean;
  scrollMin?: number;
  scrollMax?: number;
  media: ListItemMedia;
  description: string;
}

interface ListItemMedia {
  type: "image" | "video";
  src:
    | string
    | {
        webm: string;
        mp4: string;
      };
  title?: string;
  alt?: string;
}

interface FunctionsTabProps {
  readonly items: ListItem[];
  readonly darkMode?: boolean;
}

const GlobalBreakpoints = {
  xs: "374px",
  m: "739px",
  l: "935px",
  xl: "1267px",
  xxl: "1579px",
};

export default function FunctionsTab({
  items = [],
  darkMode = false,
}: Readonly<FunctionsTabProps>) {
  const [breakpoints] = useState([
    Number.parseInt(GlobalBreakpoints.m.replace("px", "")),
  ]);
  const [mobileTab, setMobileTab] = useState(false);

  useEffect(() => {
    const isMobile = (): boolean => {
      const width = window.innerWidth;
      const breakpoint = breakpoints.find((bp) => width < bp);

      if (
        breakpoint &&
        String(breakpoint) === GlobalBreakpoints.m.replace("px", "")
      ) {
        return true;
      }

      return false;
    };

    const handleResize = () => {
      if (isMobile()) {
        setMobileTab(true);
      } else {
        setMobileTab(false);
      }
    };

    if (typeof window !== "undefined") {
      handleResize();

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [breakpoints]);

  return (
    <div className={styles.functionsTabWrapper}>
      {mobileTab ?
        <MobileScrollboxModule items={items} />
      : <DesktopScrollboxModule items={items} darkMode={darkMode} />}
    </div>
  );
}
