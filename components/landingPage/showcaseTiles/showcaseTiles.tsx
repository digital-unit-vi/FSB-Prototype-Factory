import {
  GridContainer,
  GridItem,
  Headline,
  Typography,
} from "@vorwerk/fibre-react";
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
    dark: {
      image: string;
      link: string;
    };
    title: string;
  }[];
}

type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

const ShowcaseTiles: React.FC<ShowcaseTilesProps> = ({ tilesData }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [columnsConfig, setColumnsConfig] = useState<
    { start: number; end: number; columns: GridColumns }[]
  >([]);

  useEffect(() => {
    const numberOfTiles = tilesData.length;
    const columnsPerTileNumber = Math.max(1, Math.min(12, Math.floor(12 / numberOfTiles)));
    const columnsPerTile = columnsPerTileNumber as GridColumns;

    const newColumnsConfig = tilesData.map((_, index) => {
      const start = index * columnsPerTileNumber + 1;
      const end = start + columnsPerTileNumber;
      return { start, end, columns: columnsPerTile };
    });

    setColumnsConfig(newColumnsConfig);
  }, [tilesData]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={styles.mainContainer}>
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
