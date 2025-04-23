"use client";

import { GridContainer, GridItem, Typography } from "@vorwerk/fibre-react";
import styles from "./bentoBoxTiles.module.scss";

export interface BentoBoxTilesProps {
  tiles: TilesProps[];
}

interface TilesProps {
  image?: string;
  imageAlt?: string;
  title: string;
  text: string;
}

const BentoBoxTiles = ({ tiles }: BentoBoxTilesProps) => {
  return (
    <GridContainer>
      <GridItem columns={12}>
        <div className={styles.bentoBoxTiles}>
          {tiles.map((tile, index) => (
            <div
              key={`${tile.title}-${String(index)}`}
              className={styles.bentoBoxTile}
            >
              {tile.image && (
                <div className={styles.tileImageContainer}>
                  <img src={tile.image} alt={tile.imageAlt} />
                </div>
              )}
              <div className={styles.tileContent}>
                <Typography
                  className={styles.tileTitle}
                  component="p"
                  variant="h5"
                  fontWeight="bold"
                >
                  {tile.title}
                </Typography>
                <Typography
                  component="p"
                  variant="paragraph12"
                  fontWeight="regular"
                >
                  {tile.text}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </GridItem>
    </GridContainer>
  );
};

export default BentoBoxTiles;
