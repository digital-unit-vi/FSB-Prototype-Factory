import useEmblaCarousel from "embla-carousel-react";
import { DotButtons } from "../EmblaCarouselDotButton";
import styles from "./mobileCarousel.module.scss";

export interface MobileCarouselProps {
  mobileCarouselItems: {
    url: string;
    alt: string;
    title?: string;
    description?: string;
  }[];
}

export const MobileCarousel = ({
  mobileCarouselItems = [
    {
      url: "",
      alt: "",
      title: "",
    },
  ],
}: MobileCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div className={styles.mobileCarouselWrapper}>
      <div className={styles.swiper} ref={emblaRef}>
        <div className={styles.swiper__container}>
          {mobileCarouselItems.map((item, index) => (
            <div key={`${item.url}-${String(index)}`} className={styles.swiper__slide}>
              <img src={item.url} alt={item.alt} title={item.title} />
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
        {emblaApi && <DotButtons emblaApi={emblaApi} />}
      </div>
    </div>
  );
};
