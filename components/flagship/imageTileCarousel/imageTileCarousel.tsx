import {
  Button,
  GridContainer,
  GridItem,
  Headline,
  Typography,
} from "@vorwerk/fibre-react";
import { FC } from "react";
import Carousel from "./carousel";
import styles from "./imageTileCarousel.module.scss";

interface ImageTileCarouselProps {
  images: {
    src: string;
    title: string;
  }[];
  screenSize: { width: number; height: number };
}

const ImageTileCarousel: FC<ImageTileCarouselProps> = ({
  images,
  screenSize,
}) => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.imageTileCarouselContainer}>
        <GridContainer>
          <GridItem columns={12}>
            <div className={styles.textBlock}>
              <div className={styles.overwrittenMargin}>
                <Headline spaceBelow={"default"} strongColor={"orange"}>
                  <Typography component={"h2"}>
                    Thousands of recipes –
                    <br />
                    <strong> Endless inspiration</strong>
                  </Typography>
                </Headline>
                <Typography
                  variant={
                    screenSize.width > 1268 ? "paragraph18" : "paragraph16"
                  }
                  fontWeight={"regular"}
                >
                  From a quick lunch for the home office to homemade sourdough
                  bread - Cookidoo® has the right recipes for you!
                </Typography>
              </div>
              <Button buttonStyle={"primary"} size={"large"}>
                Join Cookidoo for free
              </Button>
            </div>
          </GridItem>
        </GridContainer>
        <Carousel images={images} screenSize={screenSize} />
      </div>
    </div>
  );
};

export default ImageTileCarousel;
