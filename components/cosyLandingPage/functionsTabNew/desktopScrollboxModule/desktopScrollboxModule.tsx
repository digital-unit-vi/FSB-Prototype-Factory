"use client";

import { GridContainer, GridItem, Pause, Play } from "@vorwerk/fibre-react";
import classNames from "classnames";
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
        const playPromise = video.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              video.pause();
              video.currentTime = 0;
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    }
  };

  const setVideoRef = (element: HTMLVideoElement | null, index: number) => {
    videoRefs.current[index] = element;
  };

  const isPlaying = (index: number) => {
    return videoRefs.current[index]?.paused === false;
  };

  const pressPlay = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setListItems((prevItems) =>
              prevItems.map((item, i) => ({
                ...item,
                isPlaying: index === i,
              })),
            );
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };

  const pressPause = (index: number) => {
    videoRefs.current[index]?.pause();
    setListItems((prevItems) =>
      prevItems.map((item, i) => ({
        ...item,
        isPlaying: index !== i,
      })),
    );
  };

  useEffect(() => {
    const numberOfItems = listItems.length;
    const cssValue = String(numberOfItems * 100) + viewportUnit;
    setElementHeight(cssValue);

    setListItems((prevItems) =>
      prevItems.map((item, index) => ({
        ...item,
        scrollMin: index * (1 / numberOfItems),
        scrollMax: (index + 1) * (1 / numberOfItems),
        isActive: index === 0,
      })),
    );
  }, [listItems.length]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setListItems((prevItems) =>
      prevItems.map((item, index) => {
        const isActive = latest > item.scrollMin && latest <= item.scrollMax;

        if (item.isActive !== isActive && videoRefs.current.length > 0) {
          handlePauseAndResetAll();
        }

        if (isActive) {
          pressPlay(index);
        }

        return item.isActive !== isActive ? { ...item, isActive } : item;
      }),
    );
  });

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
                const x = useTransform(
                  scrollYProgress,
                  [index / listItems.length, (index + 1) / listItems.length],
                  ["-100%", "0%"],
                );

                const activeClassState = item.isActive
                  ? styles.active
                  : styles.inactive;

                return (
                  <li key={item.id} className={classNames(activeClassState)}>
                    <div className={styles.desktopScrollbox__title}>
                      <span>{item.text}</span>
                    </div>
                    <div className={styles.desktopScrollbox__progress}>
                      <motion.div style={{ x }} />
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
                    key={index}
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
                          ref={(element) => setVideoRef(element, index)}
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
