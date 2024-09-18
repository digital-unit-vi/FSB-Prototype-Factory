import {
  GridContainer,
  GridItem,
  Headline,
  Typography,
} from "@components/build-assets/libraryExport";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./showcaseTiles.module.scss";

interface TileProps {
  light: {
    image: string;
    link: string;
  };
  dark: {
    image: string;
    link: string;
  };
  isDarkMode: boolean;
  title: string;
}

const Tile: React.FC<TileProps> = ({ light, dark, isDarkMode, title }) => {
  const { image, link } = isDarkMode ? dark : light;

  const backgroundColor = isDarkMode ? "#3f4447" : "#F3F5F3";
  const fontColor = isDarkMode ? "#fff" : "#23282A";

  return (
    <Link
      href={link}
      className={styles.tile}
      style={{ backgroundColor, color: fontColor }}
    >
      <img src={image} alt="Product" className={styles.image} />
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
    light: {
      image: string;
      link: string;
    };
    dark?: {
      image: string;
      link: string;
    };
    title: string;
  }[],
  isDarkModeEnable?: boolean;
}

const ShowcaseTiles: React.FC<ShowcaseTilesProps> = ({ tilesData, isDarkModeEnable }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [columnsConfig, setColumnsConfig] = useState<
    { start: number; end: number; columns: number }[]
  >([]);

  useEffect(() => {
    const numberOfTiles = tilesData.length;
    const columnsPerTile = 12 / numberOfTiles; // Calculates the number of columns each tile should span

    // Calculate start and end values for each tile
    const newColumnsConfig = tilesData.map((_, index) => {
      const start = index * columnsPerTile + 1; // Calculate start column based on index
      const end = start + columnsPerTile; // Calculate end column based on start and span
      return { start, end, columns: columnsPerTile };
    });

    setColumnsConfig(newColumnsConfig);
  }, [tilesData]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={styles.mainContainer}>
      {isDarkModeEnable && (
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
              <span className={styles.switchSlider}></span>
            </label>
          </GridItem>
        </GridContainer>
      )}
      
      <div className={styles.schowcaseTilesContainer}>
        <GridContainer>
          {columnsConfig.map((config, index) => (
            <GridItem key={index} columns={config.columns}>
              <Tile
                light={tilesData[index].light}
                dark={tilesData[index].dark}
                isDarkMode={isDarkMode}
                title={tilesData[index].title}
              />
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </div>
  );
};

export default ShowcaseTiles;
