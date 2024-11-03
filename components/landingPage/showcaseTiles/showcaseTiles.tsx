import {
  GridContainer,
  GridItem,
  Headline,
  Typography,
} from "@vorwerk/fibre-react";
import Image from "next/image";
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
      style={{ backgroundColor, color: fontColor, position: "relative" }}
    >
      <Image
        src={image}
        alt="Product"
        width={500}
        height={500}
        className={styles.image}
      />
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

const ShowcaseTiles: React.FC<ShowcaseTilesProps> = ({ tilesData }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [columnsConfig, setColumnsConfig] = useState<
    {
      start: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto";
      end: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto";
      columns: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    }[]
  >([]);

  useEffect(() => {
    const numberOfTiles = tilesData.length;
    const columnsPerTile = Math.floor(12 / numberOfTiles) as
      | 1
      | 2
      | 3
      | 4
      | 5
      | 6
      | 7
      | 8
      | 9
      | 10
      | 11
      | 12;

    const newColumnsConfig = tilesData.map((_, index) => {
      const start = (index * columnsPerTile + 1) as
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12
        | "auto";

      // Ensure `end` is calculated only if `start` is a number
      const end =
        typeof start === "number"
          ? ((start + columnsPerTile) as
              | 1
              | 2
              | 3
              | 4
              | 5
              | 6
              | 7
              | 8
              | 9
              | 10
              | 11
              | 12
              | "auto")
          : "auto";

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
            <span className={styles.switchSlider}></span>
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
