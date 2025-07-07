import ImageGallery from "@components/flagship/imageGallery/imageGallery";
import { FC, useState } from "react";
import styles from "./subNavigation.module.scss";
import SubNavigationButton from "./subNavigationButton";

interface SubNavigationProps {
  items: string[];
  screenSizeWidth: number;
}

const SubNavigation: FC<SubNavigationProps> = ({ items, screenSizeWidth }) => {
  const [activeIndex, setActiveIndex] = useState("");

  const handleItemClick = (index: string) => {
    if (activeIndex === index) {
      setActiveIndex("");
      return;
    }
    setActiveIndex(index);
  };

  return (
    <>
      {screenSizeWidth < 936 ?
        <ImageGallery
          slides={items.map((item) => (
            <SubNavigationButton
              key={item}
              item={item}
              isActive={activeIndex === item}
              onClick={() => {
                handleItemClick(item);
              }}
            />
          ))}
          noControl
          imageTile
          options={{ loop: false }}
          overflow
        />
      : <div className={styles.subNavigationWrapper}>
          {items.map((item) => (
            <SubNavigationButton
              key={item}
              item={item}
              isActive={activeIndex === item}
              onClick={() => {
                handleItemClick(item);
              }}
            />
          ))}
        </div>
      }
    </>
  );
};

export default SubNavigation;
