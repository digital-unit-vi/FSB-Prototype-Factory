'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './galleryModalCarouselThumbsButton'
import styles from './galleryModalCarousel.module.scss'
import { GalleryItem } from '@components/landingPage/gallery/gallery'
import {
  PrevButton,
  NextButton,
} from '@components/landingPage/imageGallery/imageGalleryArrowButtons'
import {
  Button,
  CaretLeft,
  CaretRight,
  MediaContainer,
  ZoomIn,
} from '@components/build-assets/libraryExport'

interface GalleryModalCarouselProps {
  slides: GalleryItem[]
  options?: EmblaOptionsType
  isSmallOrMediumSize?: boolean
}

const GalleryModalCarousel: React.FC<GalleryModalCarouselProps> = ({
  slides,
  options,
  isSmallOrMediumSize,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  const scrollPrev = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollPrev()
  }, [emblaMainApi])

  const scrollNext = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollNext()
  }, [emblaMainApi])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselWrapper}>
        {!isSmallOrMediumSize && (
          <PrevButton onClick={scrollPrev}>
            <CaretLeft />
          </PrevButton>
        )}
        <div className={styles.carouselViewport} ref={emblaMainRef}>
          <div className={styles.carouselContainer}>
            {slides.map((item, index) => (
              <div className={styles.carouselSlide} key={index}>
                {item.type === 'image' ? (
                  <div className={styles.imageWrapper}>
                    <MediaContainer aspectRatio={'1/1'}>
                      <img src={item.url} alt="Selected" />
                    </MediaContainer>
                    {isSmallOrMediumSize && (
                      <Button
                        type={'transparent'}
                        size={'medium'}
                        icon={<ZoomIn />}
                      />
                    )}
                  </div>
                ) : (
                  <video
                    src={item.url}
                    poster={item.poster}
                    playsInline
                    controls
                    controlsList="nofullscreen"
                    key={item.url}
                  ></video>
                )}
              </div>
            ))}
          </div>
        </div>
        {!isSmallOrMediumSize && (
          <NextButton onClick={scrollNext}>
            <CaretRight />
          </NextButton>
        )}
      </div>
      <div className={styles.carouselThumbsViewport} ref={emblaThumbsRef}>
        <div className={styles.carouselThumbsContainer}>
          {slides.map((item, index) => (
            <Thumb
              key={index}
              onClick={() => onThumbClick(index)}
              selected={index === selectedIndex}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default GalleryModalCarousel
