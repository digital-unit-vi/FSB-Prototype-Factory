import {
  GridContainer,
  GridItem,
  Headline,
  Typography,
} from "@vorwerk/fibre-react";
import { Parallax } from "react-scroll-parallax";
import styles from "./demoBanner.module.scss";

export const DemoBanner = () => {
  return (
    <div
      className={styles.bannerWrapper}
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.32) 59.62%, rgba(0, 0, 0, 0.12) 100%), url('/es2025/aop/category_tile.png')",
        backgroundSize: "cover",
      }}
    >
      <GridContainer>
        <GridItem columns={12}>
          <Parallax translateY={[-50, 50, "easeIn"]}>
            <Headline strongColor="white">
              <Typography variant="h1">
                <strong>Try</strong> before buy
              </Typography>
            </Headline>
          </Parallax>
          <div data-scroll-marker="aop-sticky-start" />
        </GridItem>
      </GridContainer>
    </div>
  );
};
