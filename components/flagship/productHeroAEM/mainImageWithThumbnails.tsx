import { Thumb } from "@components/flagship/galleryModalCarousel/galleryModalCarouselThumbsButton";
import { MediaContainer } from "@vorwerk/fibre-react";
import { FC, useState } from "react";
import { GalleryItem } from "../gallery/gallery";
import styles from "./productHeroAEM.module.scss";

interface MainImageWithThumbnailsProps {
  images: GalleryItem[];
}

const MainImageWithThumbnails: FC<MainImageWithThumbnailsProps> = ({
  images,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onThumbClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className={styles.mediaContainer}>
      <div className={styles.stepper}>
        {images.map((item, index) => (
          <Thumb
            key={`${item.url} - ${index.toString()}`}
            onClick={() => {
              onThumbClick(index);
            }}
            selected={index === selectedIndex}
            item={item}
            isAEM
          />
        ))}
      </div>
      <div className={styles.mainImage}>
        <MediaContainer aspectRatio={"1/1"}>
          <img src={images[selectedIndex].url} alt={"Selected"} />
        </MediaContainer>
      </div>
    </div>
  );
};

export default MainImageWithThumbnails;
