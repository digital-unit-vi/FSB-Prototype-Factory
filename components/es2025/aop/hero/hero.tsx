"use client";

import { Avatar } from "@components/shared/avatar/avatar";
import {
  Button,
  GridContainer,
  GridItem,
  Headline,
  Location,
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
          style={{ backgroundImage: "url(/es2025/aop/hero_background.png)" }}
        />
        <div className={styles.heroContent}>
          <Avatar
            size={128}
            image="/es2025/avatar_button.png"
            text="Mary Cook"
          />
          <GridContainer>
            <GridItem columns={12}>
              <Typography component="p" variant="paragraph16" fontWeight="regular">Your Thermomix® Advisor</Typography>
              <Headline>
                <Typography component="h2" fontWeight="bold">
                  Mary Cook
                </Typography>
              </Headline>
              <div className={styles.location}>
                <Location width={20} height={20}/>
                <Typography variant="paragraph16" fontWeight="regular">00100 Somewhere</Typography>
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem columns={12}>
              <Typography component="p" className={styles.description}>
                “I love showing how easy and fun cooking can be with the Thermomix.”
              </Typography>
            </GridItem>
          </GridContainer>

          <Button
            buttonStyle="secondary"
            size="medium"
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
