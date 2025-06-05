"use client";

import {
  GridContainer,
  GridItem,
  Pause,
  Play,
  Typography,
} from "@vorwerk/fibre-react";
import classNames from "classnames";
import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ListItem } from "../functionsTab";
import styles from "./mobileScrollboxModule.module.scss";

interface ExtendedListItem extends ListItem {
  scrollMin: number;
  scrollMax: number;
  isActive: boolean;
  isFolded: boolean;
  isPlaying?: boolean;
}

interface MobileScrollboxModuleProps {
  items: ListItem[];
}

interface MotionProgressProps {
  scrollYProgress: MotionValue<number>;
  index: number;
  listItemsLength: number;
}

const MotionProgress = ({
  scrollYProgress,
  index,
  listItemsLength,
}: MotionProgressProps) => {
  const y = useTransform(
    scrollYProgress,
    [index / listItemsLength, (index + 1) / listItemsLength],
    ["-100%", "0%"],
  );

  return <motion.div style={{ y }} />;
};

// Helper function to pause all videos except the current one
const pauseOtherVideos = (
  videoRefs: React.MutableRefObject<(HTMLVideoElement | null)[]>,
  currentIndex: number,
) => {
  videoRefs.current.forEach((v, i) => {
    if (i !== currentIndex && v) {
      v.pause();
      v.currentTime = 0;
    }
  });
};

// Helper function to update list items' playing state
const updatePlayingState = (prevItems: ExtendedListItem[], index: number) =>
  prevItems.map((item, i) => ({
    ...item,
    isPlaying: i === index,
  }));

export default function MobileScrollboxModule({
  items = [],
}: Readonly<MobileScrollboxModuleProps>) {
  const [listItems, setListItems] = useState<ExtendedListItem[]>(
    items.map((item) => ({
      ...item,
      scrollMin: 0,
      scrollMax: 0,
      isActive: false,
      isFolded: false,
    })),
  );
  const [initialVideoReady, setInitialVideoReady] = useState(false);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const setVideoRef = (element: HTMLVideoElement | null, index: number) => {
    videoRefs.current[index] = element;
    if (index === 0 && element && !initialVideoReady) {
      setInitialVideoReady(true);
    }
  };

  const isPlaying = (index: number) => {
    return !videoRefs.current[index]?.paused;
  };

  const pressPlay = useCallback((index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    video
      .play()
      .then(() => {
        pauseOtherVideos(videoRefs, index);
        setListItems((prevItems) => updatePlayingState(prevItems, index));
      })
      .catch((error: unknown) => {
        handleVideoError(error, "pressPlay");
      });
  }, []);

  const pressPause = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    video.pause();
    video.currentTime = 0;
    setListItems((prevItems) => updatePlayingState(prevItems, index));
  };

  const handleVideoError = (error: unknown, context: string) => {
    if (process.env.NODE_ENV === "development") {
      console.warn(`Video error in ${context}:`, error);
    }
  };

  useEffect(() => {
    const numberOfItems = listItems.length;
    setListItems((prevItems) =>
      prevItems.map((item, index) => ({
        ...item,
        scrollMin: index * (1 / numberOfItems),
        scrollMax: (index + 1) * (1 / numberOfItems),
        isActive: index === 0,
        isFolded: false,
      })),
    );
  }, [listItems.length]);

  useEffect(() => {
    if (initialVideoReady && listItems[0]?.isActive) {
      pressPlay(0);
    }
  }, [initialVideoReady, listItems, pressPlay]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setListItems((prevItems) =>
      prevItems.map((item, index) => {
        const newState = { ...item };

        if (latest > item.scrollMin && latest <= item.scrollMax) {
          newState.isActive = true;
          newState.isFolded = false;
          pressPlay(index);
        } else if (latest > item.scrollMax) {
          newState.isActive = false;
          newState.isFolded = true;
          pressPause(index);
        } else {
          newState.isActive = index === 0;
          newState.isFolded = false;
        }

        return newState;
      }),
    );
  });

  return (
    <GridContainer>
      <GridItem columns={12}>
        <div
          ref={targetRef}
          style={{ height: `${String(listItems.length * 100)}vh` }}
        >
          <article className={classNames(styles.mobileScrollboxWrapper)}>
            <ul className={styles.mobileScrollbox__list}>
              {listItems.map((item, index) => {
                let activeClassState = styles.inactive;

                if (item.isActive) {
                  activeClassState = styles.active;
                } else if (item.isFolded) {
                  activeClassState = styles.folded;
                }

                return (
                  <li key={item.id} className={classNames(activeClassState)}>
                    <div className={styles.mobileScrollbox__title}>
                      <span>{item.text}</span>
                    </div>
                    <div
                      className={classNames(
                        styles.mediaContainer,
                        item.media.type,
                      )}
                    >
                      <div className={styles.mobileScrollbox__progress}>
                        <MotionProgress
                          scrollYProgress={scrollYProgress}
                          index={index}
                          listItemsLength={listItems.length}
                        />
                      </div>
                      {item.media.type === "image" && (
                        <img
                          src={
                            typeof item.media.src === "string"
                              ? item.media.src
                              : ""
                          }
                          alt={item.media.alt}
                          title={item.media.title}
                        />
                      )}
                      {item.media.type === "video" && (
                        <div className={styles.videoContainer}>
                          <video
                            ref={(element) => setVideoRef(element, index)}
                            preload={"metadata"}
                            controls={false}
                            playsInline={true}
                            muted={true}
                            loop={true}
                          >
                            {typeof item.media.src === "string" ? (
                              <source src={item.media.src} />
                            ) : (
                              <>
                                <source
                                  src={item.media.src.webm}
                                  type="video/webm"
                                />
                                <source
                                  src={item.media.src.mp4}
                                  type="video/mp4"
                                />
                              </>
                            )}
                          </video>
                          {!isPlaying(index) ? (
                            <button
                              type="button"
                              onClick={() => pressPlay(index)}
                              aria-label="Play button"
                            >
                              <Play />
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => pressPause(index)}
                              aria-label="Pause button"
                            >
                              <Pause />
                            </button>
                          )}
                        </div>
                      )}
                      <Typography
                        component="p"
                        variant="paragraph16"
                        className={styles.description}
                      >
                        {item.description}
                      </Typography>
                    </div>
                  </li>
                );
              })}
            </ul>
          </article>
        </div>
      </GridItem>
    </GridContainer>
  );
}
