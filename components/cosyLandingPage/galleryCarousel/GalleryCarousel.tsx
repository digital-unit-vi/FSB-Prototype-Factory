import { GridContainer, GridItem } from "@vorwerk/fibre-react";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { DesktopCarousel } from "./desktopCarousel/DesktopCarousel";
import styles from "./galleryCarousel.module.scss";
import { ImageLayoutProps } from "./imageLayout/ImageLayout";
import {
  MobileCarousel,
  MobileCarouselProps,
} from "./mobileCarousel/MobileCarousel";

const GlobalBreakpoints = {
  xs: "374px",
  m: "739px",
  l: "935px",
  xl: "1267px",
  xxl: "1579px",
};

export interface GalleryCarouselProps {
  desktopSlides: ImageLayoutProps[];
  mobileSlides?: MobileCarouselProps[];
  darkMode?: boolean;
}

const GalleryCarousel = ({
  desktopSlides,
  mobileSlides,
  darkMode = false,
}: GalleryCarouselProps) => {
  const [breakpoints] = useState([
    parseInt(GlobalBreakpoints.l.replace("px", "")),
  ]);
  const [mobileSlider, setMobileSlider] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const breakpoint = breakpoints.find((bp) => width < bp);

      if (breakpoint) {
        if (breakpoint.toString() === GlobalBreakpoints.l.replace("px", "")) {
          setMobileSlider(true);
        }
      } else {
        setMobileSlider(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoints]);

  const extractImages = (data: any): MobileCarouselProps[] => {
    let result: { url: string; alt: string; title?: string }[] = [];

    const searchImages = (obj: any) => {
      for (const key in obj) {
        if (key === "images" && Array.isArray(obj[key])) {
          result = result.concat(obj[key]);
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
          searchImages(obj[key]);
        }
      }
    };

    searchImages(data);
    return [{ mobileCarouselItems: result }];
  };

  if (!mobileSlides) {
    mobileSlides = extractImages(desktopSlides);
  }

  return (
    <div
      className={classNames(
        styles.galleryCarouselWrapper,
        darkMode ? styles.darkMode : ""
      )}
    >
      {mobileSlider ? (
        <MobileCarousel
          mobileCarouselItems={mobileSlides[0].mobileCarouselItems}
        />
      ) : (
        <GridContainer>
          <GridItem columns={12}>
            <DesktopCarousel slides={desktopSlides} darkMode={darkMode} />
          </GridItem>
        </GridContainer>
      )}
    </div>
  );
};

export default GalleryCarousel;
