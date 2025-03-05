'use client';

import {
  GridContainer,
  GridItem,
  Headline,
  Typography,
} from "@vorwerk/fibre-react";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./showcaseTiles.module.scss";

interface TileVersion {
  image: string;
  link: string;
}

interface TileProps {
  light?: TileVersion;
  dark?: TileVersion;
  isDarkMode: boolean;
  title: string;
}

const Tile: React.FC<TileProps> = ({ light, dark, isDarkMode, title }) => {
  // Determine which version to show based on availability and mode
  const version = useMemo(() => {
    if (isDarkMode && dark) return dark;
    if (!isDarkMode && light) return light;
    // Fallback to whatever is available
    return dark ?? light;
  }, [light, dark, isDarkMode]);

  useEffect(() => {
    // Only preload images that exist on the client side
    if (typeof window !== 'undefined') {
      if (light) {
        const preloadLight = new Image();
        preloadLight.src = light.image;
      }
      if (dark) {
        const preloadDark = new Image();
        preloadDark.src = dark.image;
      }
    }
  }, [light, dark]);

  // Determine background color based on which version is being shown
  const isShowingDark = isDarkMode || (!light && dark);
  const backgroundColor = isShowingDark ? "#3f4447" : "#F3F5F3";
  const fontColor = isShowingDark ? "#fff" : "#23282A";

  if (!version) return null; // Safety check - shouldn't happen with proper props

  return (
    <Link
      href={version.link}
      className={styles.tile}
      style={{ backgroundColor, color: fontColor }}
    >
      <img src={version.image} alt="Product" className={styles.image} />
      <Headline
        spaceBelow="default"
        children={
          <Typography component="h5" fontWeight="bold">
            <span>{title}</span>
          </Typography>
        }
      />
    </Link>
  );
};

interface ShowcaseTilesProps {
  tilesData: {
    light?: TileVersion;
    dark?: TileVersion;
    title: string;
  }[];
}

// Export the component as a client component
const ShowcaseTiles: React.FC<ShowcaseTilesProps> = ({ tilesData }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check if we have both modes available for at least one tile
  const hasBothModes = useMemo(() => {
    return tilesData.some(tile => tile.light && tile.dark);
  }, [tilesData]);

  const columnsConfig = useMemo(() => {
    const numberOfTiles = tilesData.length;
    const columnsPerTile = 12 / numberOfTiles;
    return tilesData.map((_, index) => {
      const start = index * columnsPerTile + 1;
      const end = start + columnsPerTile;
      return { start, end, columns: columnsPerTile };
    });
  }, [tilesData]);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prevMode) => !prevMode);
  }, []);

  // Check if all tiles only have dark mode
  const onlyDarkMode = useMemo(() => {
    return tilesData.every(tile => tile.dark && !tile.light);
  }, [tilesData]);

  // Set initial dark mode state based on available modes
  useEffect(() => {
    if (onlyDarkMode) {
      setIsDarkMode(true);
    }
  }, [onlyDarkMode]);

  return (
    <div className={styles.mainContainer}>
      {/* Only show the switch if both modes are available */}
      {hasBothModes && (
        <GridContainer>
          <GridItem columns={12} className={styles.switchContainer}>
            <label className={styles.switchLabel}>
              <span className={styles.label}>Dark version</span>
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleDarkMode}
                className={styles.switchInput}
              />
              <span className={styles.switchSlider} />
            </label>
          </GridItem>
        </GridContainer>
      )}

      <div className={styles.schowcaseTilesContainer}>
        <GridContainer>
          {columnsConfig.map((config, index) => {
            const tile = tilesData[index];
            // Skip tiles that don't have at least one version
            if (!tile.light && !tile.dark) return null;

            return (
              <GridItem key={index} columns={config.columns as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}>
                <Tile
                  light={tile.light}
                  dark={tile.dark}
                  isDarkMode={isDarkMode}
                  title={tile.title}
                />
              </GridItem>
            );
          })}
        </GridContainer>
      </div>
    </div>
  );
};

export default ShowcaseTiles;