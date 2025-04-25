"use client";

import { Avatar } from "@components/shared/avatar/avatar";
import {
  Button,
  GridContainer,
  GridItem,
  Headline,
  Typography,
} from "@vorwerk/fibre-react";
import styles from "./hero.module.scss";

const Hero: React.FC = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.heroContainer}>
        <div className={styles.heroOverlay} />
        <div
          className={styles.heroBackground}
          style={{ backgroundImage: "url(/homePage/aop/hero_background.png)" }}
        />
        <div className={styles.heroContent}>
          <Avatar
            size={128}
            image="/homePage/avatar_button.png"
            text="Mary Cook"
          />
          <GridContainer>
            <GridItem columns={12}>
              <Headline>
                <Typography component="h3" fontWeight="bold">
                  Mary Cook
                </Typography>
              </Headline>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem columns={12}>
              <Typography component="p" className={styles.description}>
                I love showing how easy and fun cooking can be with the
                Thermomix.
              </Typography>
            </GridItem>
          </GridContainer>

          <Button
            buttonStyle="secondary"
            size="large"
            componentNode="a"
            url="#"
          >
            Contact Mary
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
