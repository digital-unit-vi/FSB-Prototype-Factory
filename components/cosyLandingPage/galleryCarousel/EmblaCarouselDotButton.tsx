import classNames from "classnames";
import type { EmblaCarouselType } from "embla-carousel";
import {
  type PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import styles from "./galleryCarousel.module.scss";

interface UseDotButtonType {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
}

const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;

export const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return <span {...restProps}>{children}</span>;
};

export const DotButtons: React.FC<{
  emblaApi: EmblaCarouselType | undefined;
}> = ({ emblaApi }) => {
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const maxDots = 7;

  const renderDots = () => {
    const dots = [];
    let start = 0;
    let end = scrollSnaps.length;
    let dotSelected;
    let continueNext = undefined;
    let continuePrev = undefined;

    const dynamicBullets = scrollSnaps.length > maxDots;
    const canCenterBullets =
      selectedIndex >= Math.floor(maxDots / 2) &&
      selectedIndex <= scrollSnaps.length - Math.ceil(maxDots / 2)
    const isNearEndBullets =
      selectedIndex > scrollSnaps.length - Math.ceil(maxDots / 2)
    let smallDotsBeforeStart = false;
    let smallDotsBeforeEnd = false;

    if (dynamicBullets) {
      if (canCenterBullets) {
        start = selectedIndex - Math.floor(maxDots / 2);
        end = selectedIndex + Math.ceil(maxDots / 2);
      } else if (isNearEndBullets) {
        start = scrollSnaps.length - maxDots;
        end = scrollSnaps.length;
      } else {
        start = 0;
        end = maxDots;
      }

      smallDotsBeforeStart = Math.abs(0 - start) > 0;
      smallDotsBeforeEnd = Math.abs(scrollSnaps.length - end) > 0;
    }

    for (let i = 0; i < scrollSnaps.length; i++) {
      dotSelected = i === selectedIndex ? styles.swiper__dotSelected : "";

      continueNext = undefined;
      continuePrev = undefined;

      const smallClass =
        (i === start && smallDotsBeforeStart) ||
        (i === end - 1 && smallDotsBeforeEnd);

      const hiddenClass = i < Math.abs(0 - start) || i > Math.abs(0 - end) - 1;

      dots.push(
        <DotButton
          data-index={i}
          key={i}
          onClick={() => onDotButtonClick(i)}
          className={classNames(
            styles.swiper__dot,
            smallClass ? styles.swiper__dotsmall : "",
            hiddenClass ? styles.swiper__dothidden : "",
            dotSelected,
            continuePrev,
            continueNext,
          )}
        />,
      );
    }

    return dots;
  };

  return <div className={styles.swiper__dots}>{renderDots()}</div>;
};
