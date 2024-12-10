'use client'

import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image, { StaticImageData } from 'next/image'
import React, {
  useCallback,
  useEffect,
  useRef,
  ReactNode,
  useState,
} from 'react'
import styles from './imageGallery.module.scss'
import { DotButton, useDotButton } from './imageGalleryDotButton'
import { PrevButton, NextButton } from './imageGalleryArrowButtons'
import {
  CaretLeft,
  CaretRight,
  Typography,
} from '@components/build-assets/libraryExport'
import GalleryModal from '../galleryModal/galleryModal'
import { GalleryItem } from '../gallery/gallery'

const TWEEN_FACTOR_BASE = 0.2

interface PropType {
  slides: StaticImageData | ReactNode | GalleryItem[]
  dark?: boolean
  options?: EmblaOptionsType
  screenSizes?: {
    width: number
    height: number
  }
  containerWidth?: {
    large: number
    extraLarge: number
    extraExtraLarge: number
  }
  isModal?: boolean
  showCarouselInfo?: boolean
  imageMaxWidth?: string
  noControl?: boolean
  setHeight?: boolean
  imageTile?: boolean
  overflow?: boolean
}

const OPTIONS: EmblaOptionsType = {
  loop: true,
}

function renderSlide(
  slide: StaticImageData | ReactNode | GalleryItem,
  index?: number,
  setModal?: () => void,
) {
  if (slide instanceof Object && slide !== null) {
    if ('src' in slide) {
      return (
        <Image
          className={`${styles.imageGallerySlideImg} ${styles.imageGalleryParallaxImg}`}
          src={slide}
          alt={`Image gallery img${index}`}
        />
      )
    } else {
      if (slide.type === 'image') {
        return (
          <div
            className={styles.image}
            style={{
              background: `url(${slide.url}) 50% / contain no-repeat #F3F5F3`,
            }}
            key={slide.title}
            onClick={setModal}
          ></div>
        )
      } else if (slide.type === 'video') {
        return (
          <video
            src={slide.url}
            poster={slide.poster}
            playsInline
            controls
            controlsList="nofullscreen"
            key={slide.url}
          ></video>
        )
      } else {
        return slide
      }
    }
  }
}

const ImageGallery: React.FC<PropType> = ({
  slides,
  dark,
  options,
  screenSizes,
  containerWidth,
  isModal,
  showCarouselInfo,
  imageMaxWidth,
  noControl,
  setHeight = false,
  imageTile = false,
  overflow = false
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options ?? OPTIONS)
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])
  const galleryRef = useRef<HTMLDivElement>(null)
  const [isModalOpen, setModalOpen] = useState(false)
  let images: any[] = []
  let videos: any[] = []
  if (
    isModal &&
    Array.isArray(slides) &&
    slides.every(slide => typeof slide === 'object' && slide.type)
  ) {
    images = slides.filter(item => item.type === 'image')
    videos = slides.filter(item => item.type === 'video')
  }

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map(slideNode => {
      return slideNode.querySelector(`.${styles.imageGalleryParallaxLayer}`)!
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenParallax = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach(slideIndex => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach(loopItem => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const translate = diffToTarget * (-1 * tweenFactor.current) * 100
          const tweenNode = tweenNodes.current[slideIndex]
          if (!options) {
            tweenNode.style.transform = `translateX(${translate}%)`
          }
        })
      })
    },
    [],
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenParallax(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax)
  }, [emblaApi, setTweenFactor, setTweenNodes, tweenParallax])

  const fullWidth =
    screenSizes &&
    containerWidth &&
    (screenSizes.width > 1579
      ? containerWidth.extraExtraLarge
      : screenSizes.width > 1267
        ? containerWidth.extraLarge
        : containerWidth.large)
  const gap =
    screenSizes &&
    (screenSizes.width > 1579
      ? 40
      : screenSizes.width > 1267
        ? 32
        : screenSizes.width > 935
          ? 24
          : 16)
  const slideMaxWidth =
    imageMaxWidth ??
    (fullWidth &&
      gap &&
      Math.round((fullWidth - gap * (slides.length - 1)) / slides.length))
  if (galleryRef.current) {
    const slideSpacing = gap && `${gap / 10}rem`
    if (slideSpacing) {
      galleryRef.current.style.setProperty('--slide-spacing', slideSpacing)
    }
  }

  return (
    <>
      <div
        className={`${styles.imageGallery} ${
          dark ? styles.imageGalleryDark : ''
        } ${(isModal ?? imageMaxWidth) && styles.overriddenImageGallery}`}
        ref={galleryRef}
        style={{ maxWidth: imageTile ? '100%' : '' }}
      >
        <div
          className={styles.imageGalleryViewport}
          ref={emblaRef}
          style={{
            maxWidth: imageMaxWidth ?? '100%',
            overflow: overflow ? 'clip' : 'hidden',
            overflowClipMargin: overflow ? '16px' : '',
          }}
        >
          <div
            className={
              screenSizes?.width && screenSizes?.width > 1267
                ? styles.overriddenImageGalleryContainer
                : styles.imageGalleryContainer
            }
          >
            {slides.map(
              (
                slide: StaticImageData | ReactNode | GalleryItem,
                index: number,
              ) => (
                <div
                  className={
                    fullWidth && screenSizes?.width && screenSizes?.width > 1267
                      ? styles.overriddenImageGallerySlide
                      : styles.imageGallerySlide
                  }
                  key={index}
                  style={{
                    maxWidth:
                      slideMaxWidth ?? (imageTile ? 'fit-content' : '100%'),
                    height: (setHeight && slideMaxWidth) ?? '100%',
                  }}
                >
                  <div
                    className={styles.imageGalleryParallax}
                    style={{ height: !fullWidth && '100%' }}
                  >
                    <div
                      className={`${styles.imageGalleryParallaxLayer} ${setHeight ? styles.overwriteMaxWidth : ''}`}
                      style={{
                        justifyContent: !fullWidth && 'center',
                        height: (fullWidth || imageMaxWidth) && '100%',
                      }}
                    >
                      {renderSlide(slide, index, () => setModalOpen(true))}
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
          {showCarouselInfo && (
            <div className={styles.carouselInfo}>
              <div className={styles.carouselInfoContent}>
                {images.length > 0 && (
                  <Typography variant={'paragraph14'} fontWeight={'regular'}>
                    {`${images.length} image${images.length > 1 ? 's' : ''}`}
                  </Typography>
                )}
                {images.length > 0 && videos.length > 0 && (
                  <Typography variant={'paragraph14'} fontWeight={'regular'}>
                    -
                  </Typography>
                )}
                {videos.length > 0 && (
                  <Typography variant={'paragraph14'} fontWeight={'regular'}>
                    {`${videos.length} video${videos.length > 1 ? 's' : ''}`}
                  </Typography>
                )}
              </div>
            </div>
          )}
        </div>
        {!noControl && (
          <div className={styles.imageGalleryControls}>
            <div className={styles.imageGalleryDots}>
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={`${styles.imageGalleryDot} ${
                    index === selectedIndex
                      ? styles.imageGalleryDotSelected
                      : ''
                  }`}
                />
              ))}
            </div>
            {screenSizes?.width && screenSizes?.width > 935 && (
              <div className={styles.imageGalleryArrows}>
                <PrevButton onClick={scrollPrev}>
                  <CaretLeft />
                </PrevButton>
                <NextButton onClick={scrollNext}>
                  <CaretRight />
                </NextButton>
              </div>
            )}
          </div>
        )}
      </div>
      {isModalOpen && isModal && (
        <GalleryModal
          images={images}
          videos={videos}
          onClose={() => setModalOpen(false)}
          isSmallOrMediumSize
        />
      )}
    </>
  )
}

export default ImageGallery
