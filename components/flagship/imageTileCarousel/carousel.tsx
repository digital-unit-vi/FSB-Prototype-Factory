import { FC, useState, useRef, useEffect } from 'react'
import ImageTile from '../imageTile/imageTile'
import styles from './imageTileCarousel.module.scss'

interface CarouselProps {
  images: {
    src: string
    title: string
  }[]
  screenSize: { width: number; height: number }
}

const setDimensions = (width: number): { width: number; gap: number } => {
  if (width < 740) {
    return { width: 224, gap: 16 }
  } else if (width >= 740 && width <= 935) {
    return { width: 280, gap: 20 }
  } else if (width >= 936 && width <= 1267) {
    return { width: 386, gap: 24 }
  } else if (width >= 1268 && width <= 1580) {
    return { width: 448, gap: 32 }
  } else {
    return { width: 520, gap: 40 }
  }
}

const Carousel: FC<CarouselProps> = ({ images, screenSize }) => {
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(images.length / 2) - 1,
  ) // Start with middle image
  const [containerWidth, setContainerWidth] = useState(0)
  const carouselContainerRef = useRef<HTMLDivElement | null>(null);
  const startX = useRef(0)
  const endX = useRef(0)
  const dimensions = setDimensions(screenSize.width)
  const mainImageWidth = dimensions.width
  const gap = dimensions.gap

  useEffect(() => {
    const updateContainerWidth = () => {
      if (carouselContainerRef.current) {
        setContainerWidth(carouselContainerRef.current.offsetWidth)
      }
    }

    updateContainerWidth()
    window.addEventListener('resize', updateContainerWidth)
    return () => window.removeEventListener('resize', updateContainerWidth)
  }, [screenSize])

  const calculateOffset = () => {
    // Prevent calculation when width is not available
    if (containerWidth === 0) return 0

    // Calculate cumulative width up to the currentIndex
    let cumulativeWidth = 0
    for (let i = 0; i < currentIndex; i++) {
      const distance = Math.abs(currentIndex - i)
      const scale = distance === 0 ? 1 : distance === 1 ? 0.6 : 0.4
      cumulativeWidth += mainImageWidth * scale + gap
    }

    const currentImageScale = 1 // Current image is always full size
    const currentImageWidth = mainImageWidth * currentImageScale

    // Calculate the center of the container and the offset
    const center = containerWidth / 2
    const offset = cumulativeWidth + currentImageWidth / 2 - center

    // Negative offset to shift left and center the current image
    return -offset
  }

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      setCurrentIndex(images.length - 1)
    } else if (newIndex >= images.length) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(newIndex)
    }
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    endX.current = e.changedTouches[0].clientX
    handleSwipe()
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    startX.current = e.clientX
  }

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    endX.current = e.clientX
    handleSwipe()
  }

  const handleSwipe = () => {
    const deltaX = endX.current - startX.current
    if (deltaX > 50) {
      // Swipe right
      updateIndex(currentIndex - 1)
    } else if (deltaX < -50) {
      // Swipe left
      updateIndex(currentIndex + 1)
    }
  }

  return (
    <div
      className={styles.carouselContainer}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      ref={carouselContainerRef}
    >
      <div
        className={styles.carouselInner}
        style={{
          transform: `translateX(${calculateOffset().toString()}px)`,
          transition: 'transform 0.5s ease',
        }}
      >
        {images.map((image, index) => {
          const distance = Math.abs(currentIndex - index)

          const scale = distance === 0 ? 1 : distance === 1 ? 0.6 : 0.4

          return (
            <ImageTile
              key={index}
              title={image.title}
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.54) 100%), url(${image.src})`,
                width: `${(mainImageWidth * scale).toString()}px`,
                height: `${(mainImageWidth * scale).toString()}px`,
                transition: 'width 0.5s ease, height 0.5s ease',
              }}
              screenSizeWidth={screenSize.width}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Carousel