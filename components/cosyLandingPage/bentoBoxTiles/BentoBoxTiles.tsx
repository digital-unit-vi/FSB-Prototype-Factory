"use client";

import { GridContainer, GridItem, Typography } from "@vorwerk/fibre-react";
import styles from "./bentoBoxTiles.module.scss";

export interface BentoBoxTilesProps {
  tiles: TilesProps[];
  darkMode?: boolean;
}

interface TilesProps {
  image?: string;
  imageAlt?: string;
  title: string;
  titleSecondary: string;
  text: string;
  imageBottom?: boolean;
  bigTile?: boolean;
}

const BentoBoxTiles = ({ tiles, darkMode }: BentoBoxTilesProps) => {
  return (
    <GridContainer>
      <GridItem columns={12}>
        <div
          className={`${styles.bentoBoxTiles} ${
            darkMode ? styles.darkModeEnabled : ""
          }`}
        >
          {tiles.map((tile, index) => (
            <div
              key={`${tile.title}-${String(index)}`}
              className={`${styles.bentoBoxTile} ${
                tile.bigTile ? styles.tileBig : ""
              }`}
            >
              {tile.image && (
                <div
                  className={`${styles.tileImageContainer} ${
                    tile.imageBottom ? styles.tileImageBottom : ""
                  }`}
                >
                  <img src={tile.image} alt={tile.imageAlt} />
                </div>
              )}
              <div className={styles.tileContent}>
                <Typography
                  className={styles.tileTitle}
                  component="p"
                  variant="h1"
                  fontWeight="bold"
                >
                  {tile.title}
                </Typography>
                <Typography
                  className={styles.tileTitleSecondary}
                  component="p"
                  variant="h4"
                  fontWeight="bold"
                >
                  {tile.titleSecondary}
                </Typography>
                <div className={styles.tileText}>{tile.text}</div>
              </div>
            </div>
          ))}
        </div>
      </GridItem>
    </GridContainer>
  );
};

export default BentoBoxTiles;
