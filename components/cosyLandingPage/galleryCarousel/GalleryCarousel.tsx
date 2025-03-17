import { GridContainer, GridItem } from "@vorwerk/fibre-react";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { DesktopCarousel } from "./desktopCarousel/DesktopCarousel";
import styles from "./galleryCarousel.module.scss";
import type { ImageLayoutProps } from "./imageLayout/ImageLayout";
import {
  MobileCarousel,
  type MobileCarouselProps,
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
    Number.parseInt(GlobalBreakpoints.l.replace("px", "")),
  ]);
  const [mobileSlider, setMobileSlider] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const breakpoint = breakpoints.find((bp) => width < bp);

      if (breakpoint) {
        if (String(breakpoint) === GlobalBreakpoints.l.replace("px", "")) {
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

  const extractImages = (data: ImageLayoutProps[]): MobileCarouselProps[] => {
    let result: { url: string; alt: string; title?: string }[] = [];

    // Define image item type
    interface ImageItem {
      url: string;
      alt: string;
      title?: string;
      description?: string;
    }

    const processObject = (obj: Record<string, unknown>): void => {
      Object.entries(obj).forEach(([key, value]) => {
        if (key === "images" && Array.isArray(value)) {
          // Type assertion for the image array
          const imageItems = value as ImageItem[];
          result = result.concat(imageItems);
        } else if (value !== null && typeof value === "object") {
          // Process nested objects
          processObject(value as Record<string, unknown>);
        }
      });
    };

    // Process each slide
    data.forEach(slide => {
      processObject(slide as unknown as Record<string, unknown>);
    });

    return [{ mobileCarouselItems: result }];
  };

  if (!mobileSlides) {
    mobileSlides = extractImages(desktopSlides);
  }

  return (
    <div
      className={classNames(
        styles.galleryCarouselWrapper,
        darkMode ? styles.darkMode : "",
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
