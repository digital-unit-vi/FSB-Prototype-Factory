import {
  GridContainer,
  GridItem,
  Headline,
  Typography,
} from "@vorwerk/fibre-react";
import classNames from "classnames";
import styles from "./imageLayout.module.scss";

export interface ImageLayoutProps {
  bigImagePosLeft: boolean;
  images: {
    url: string;
    alt: string;
    title: string;
    description?: string;
  }[];
}

export const ImageLayout = ({
  bigImagePosLeft = false,
  images = [
    {
      url: "",
      alt: "",
      title: "",
      description: "",
    },
  ],
}: ImageLayoutProps) => {
  const numberOfImages = images.length;
  const classes = classNames(
    styles.imageLayoutWrap,
    styles["image-variant"],
    styles[setLayout(numberOfImages)],
    { [styles["big-left"]]: bigImagePosLeft }
  );

  return (
    <article className={styles.imageLayoutWrap}>
      {numberOfImages === 1 && (
        <div className={classes}>
          <div>
            <img
              src={images[0].url}
              alt={images[0].alt}
              title={images[0].title}
            />
            {images[0].description && (
              <GridContainer>
                <GridItem
                  columns={7}
                  start={3}
                  end={11}
                  className={styles.description}
                >
                  <Headline
                    strongColor="green"
                  >
                    <Typography component="intro">
                      {images[0].description}
                    </Typography>
                  </Headline>
                </GridItem>
              </GridContainer>
            )}
          </div>
        </div>
      )}

      {numberOfImages === 2 && (
        <div className={classes}>
          <div style={{ backgroundImage: `url(${images[0].url})` }} />
          <div>
            <img
              src={images[1].url}
              alt={images[1].alt}
              title={images[1].title}
            />
          </div>
        </div>
      )}

      {numberOfImages === 3 && (
        <div className={classes}>
          <div>
            <div
              className={styles.c1}
              style={{ backgroundImage: `url(${images[0].url})` }}
            />
            <div
              className={styles.c2}
              style={{ backgroundImage: `url(${images[1].url})` }}
            />
          </div>
          <div>
            <img
              src={images[2].url}
              alt={images[2].alt}
              title={images[2].title}
            />
          </div>
        </div>
      )}
    </article>
  );
};

const setLayout = (numberOfImages: number): string => {
  if (numberOfImages > 0 && numberOfImages <= 3) {
    return `layout--${String(numberOfImages)}`;
  }
  return "layout--1";
};
