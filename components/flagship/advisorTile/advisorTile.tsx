import { Button, MediaContainer, Typography } from "@vorwerk/fibre-react";
import Link from "next/link";
import { FC } from "react";
import styles from "./advisorTile.module.scss";

interface AdvisorTileProps {
  imageSrc: string;
  text: string;
}

const AdvisorTile: FC<AdvisorTileProps> = ({ imageSrc, text }) => {
  return (
    <div className={styles.advisorTileContainer}>
      <MediaContainer aspectRatio={"1/1"}>
        <img src={imageSrc} alt={"Advisor"} />
      </MediaContainer>
      <div className={styles.advisorTileTextContainer}>
        <Typography variant={"paragraph16"} fontWeight={"bold"}>
          {text}
        </Typography>
        <Link href="#">
          <Button buttonStyle={"tertiary"}>
            <Typography variant={"paragraph16"}>Book a demo</Typography>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AdvisorTile;
