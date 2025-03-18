"use client";

import { GridContainer, GridItem, Pause, Play } from "@vorwerk/fibre-react";
import classNames from "classnames";
import type { MotionValue } from "framer-motion";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ListItem } from "../functionsTab";
import styles from "./desktopScrollboxModule.module.scss";

interface ExtendedListItem extends ListItem {
  scrollMin: number;
  scrollMax: number;
  isActive: boolean;
  isPlaying?: boolean;
}

interface DesktopScrollboxModuleProps {
  items: ListItem[];
  darkMode?: boolean;
}

interface MotionProgressProps {
  scrollYProgress: MotionValue<number>;
  index: number;
  listItemsLength: number;
}

const MotionProgress = ({ scrollYProgress, index, listItemsLength }: MotionProgressProps) => {
  const x = useTransform(
    scrollYProgress,
    [index / listItemsLength, (index + 1) / listItemsLength],
    ["-100%", "0%"],
  );

  return (
    <motion.div style={{ x }} />
  );
};

export default function DesktopScrollboxModule({
  items = [],
  darkMode = false,
}: Readonly<DesktopScrollboxModuleProps>) {
  const [elementHeight, setElementHeight] = useState("0vh");
  const [listItems, setListItems] = useState<ExtendedListItem[]>(
    items.map((item) => ({
      ...item,
      scrollMin: 0,
      scrollMax: 0,
      isActive: false,
    })),
  );

  const viewportUnit = "vh";
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const handlePauseAndResetAll = () => {
    for (const video of videoRefs.current) {
      if (video) {
        video.play()
          .then(() => {
            video.pause();
            video.currentTime = 0;
          })
          .catch((error: unknown) => {
            handleVideoError(error, "handlePauseAndResetAll");

            video.pause();
            video.currentTime = 0;
          });
      }
    }
  };

  const handleVideoRef = (element: HTMLVideoElement | null, index: number) => {
    videoRefs.current[index] = element;
  };

  const isVideoPlaying = (index: number) => {
    return !videoRefs.current[index]?.paused;
  };

  const updatePlayingState = (index: number, isPlaying: boolean) => (item: ExtendedListItem, i: number) => ({
    ...item,
    isPlaying: index === i === isPlaying,
  });

  const updateScrollRanges = (numberOfItems: number) => (item: ExtendedListItem, index: number) => ({
    ...item,
    scrollMin: index * (1 / numberOfItems),
    scrollMax: (index + 1) * (1 / numberOfItems),
    isActive: index === 0,
  });

  const updateItemActiveState = (latest: number, index: number) => (item: ExtendedListItem) => {
    const isActive = latest > item.scrollMin && latest <= item.scrollMax;

    if (item.isActive !== isActive && videoRefs.current.length > 0) {
      handlePauseAndResetAll();
    }

    if (isActive) {
      handlePlayVideo(index);
    }

    return item.isActive !== isActive ? { ...item, isActive } : item;
  };

  const handlePlayVideo = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play()
        .then(() => {
          setListItems((prevItems) => prevItems.map(updatePlayingState(index, true)));
        })
        .catch((error: unknown) => {
          handleVideoError(error, "handlePlayVideo");

          setListItems((prevItems) => prevItems.map(updatePlayingState(index, false)));
        });
    }
  };

  const handlePauseVideo = (index: number) => {
    videoRefs.current[index]?.pause();
    setListItems((prevItems) => prevItems.map(updatePlayingState(index, false)));
  };

  const handleVideoError = (error: unknown, context: string) => {
    if (process.env.NODE_ENV === "development") {
      console.warn(`Video error in ${context}:`, error);
    }
  };

  const handleScrollProgress = (latest: number) => {
    setListItems((prevItems) =>
      prevItems.map((item, index) => updateItemActiveState(latest, index)(item))
    );
  };

  useEffect(() => {
    const numberOfItems = listItems.length;
    const cssValue = String(numberOfItems * 100) + viewportUnit;
    setElementHeight(cssValue);

    setListItems((prevItems) => prevItems.map(updateScrollRanges(numberOfItems)));
  }, [listItems.length]);

  useMotionValueEvent(scrollYProgress, "change", handleScrollProgress);

  return (
    <GridContainer>
      <GridItem columns={12}>
        <div ref={targetRef} style={{ height: elementHeight }}>
          <article
            className={classNames(
              styles.desktopScrollboxWrapper,
              darkMode ? styles.darkMode : "",
            )}
          >
            <ul className={styles.desktopScrollbox__list}>
              {listItems.map((item, index) => {
                const activeClassState = item.isActive
                  ? styles.active
                  : styles.inactive;

                return (
                  <li key={item.id} className={classNames(activeClassState)}>
                    <div className={styles.desktopScrollbox__title}>
                      <span>{item.text}</span>
                    </div>
                    <div className={styles.desktopScrollbox__progress}>
                      <MotionProgress
                        scrollYProgress={scrollYProgress}
                        index={index}
                        listItemsLength={listItems.length}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className={styles.desktopScrollbox__media}>
              {listItems.map((item, index) => {
                const activeClassState = item.isActive
                  ? styles.active
                  : styles.inactive;

                return (
                  <div
                    className={classNames(item.media.type, activeClassState)}
                    key={item.id || item.media.title}
                  >
                    {item.media.type === "image" && (
                      <img
                        src={typeof item.media.src === 'string' ? item.media.src : ''}
                        alt={item.media.alt}
                        title={item.media.title}
                      />
                    )}
                    {item.media.type === "video" && (
                      <div className={styles.videoContainer}>
                        <video
                          ref={(element) => handleVideoRef(element, index)}
                          preload={"metadata"}
                          controls={false}
                          playsInline={true}
                          muted={true}
                          loop={true}
                        >
                          {typeof item.media.src === 'string' ? (
                            <source src={item.media.src} />
                          ) : (
                            <>
                              <source src={item.media.src.webm} type="video/webm" />
                              <source src={item.media.src.mp4} type="video/mp4" />
                            </>
                          )}
                        </video>
                        {!isVideoPlaying(index) ? (
                          <button
                            type="button"
                            onClick={() => handlePlayVideo(index)}
                            aria-label="Play button"
                          >
                            <Play />
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handlePauseVideo(index)}
                            aria-label="Pause button"
                          >
                            <Pause />
                          </button>
                        )}
                      </div>
                    )}
                    {item.description && (
                      <p className={styles.description}>{item.description}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </GridItem>
    </GridContainer>
  );
}
