import { useState, useRef, useEffect } from 'react'
import styles from './carousel.module.scss'
import { Typography } from '@vorwerk/fibre-react'

interface CarouselProps {
  items: {
    src: string
    title: string
    text: string
  }[],
  screenSize: { width: number; height: number }
}

const setDimensions = (width: number): { width: number; gap: number } => {
  return { width: width - 64, gap: 16 }
}

export const Carousel = ({ items, screenSize }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0) 
  const [containerWidth, setContainerWidth] = useState(0)
  const [isSliding, setIsSliding] = useState(false);
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
    let cumulativeWidth = -16;
    for (let i = 0; i < currentIndex; i++) {
      const distance = Math.abs(currentIndex - i)
      const scale = distance === 0 ? 1 : distance === 1 ? 0.6 : 0.4
      cumulativeWidth += mainImageWidth * scale + gap
    }

    // Negative offset to shift left and center the current image
    return -cumulativeWidth
  }

  const updateIndex = (newIndex: number) => {
    setIsSliding(true);

    if (newIndex < 0) {
      setCurrentIndex(items.length - 1);
    } else if (newIndex >= items.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(newIndex);
    }

    setTimeout(() => {
      setIsSliding(false); // Reset after slide animation ends
    }, 400);
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

    // setShowTextBlock(false)
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
        {items.map((item, index) => {
          const distance = Math.abs(currentIndex - index)

          const scale = distance === 0 ? 1 : distance === 1 ? 0.6 : 0.4

          return (
            <div className={styles.tileContainer} key={index}>
              <div className={styles.imageWrapper}>
                <div className={styles.image} style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.54) 100%), url(${item.src})`,
                  width: `${(mainImageWidth * scale).toString()}px`,
                  height: `${(mainImageWidth * scale).toString()}px`,
                  transition: 'width 0.5s ease, height 0.5s ease'}}
                />
              </div>
              <div className={styles.textBlockWrapper}>
                <div className={styles.step}>
                  <Typography variant='span' fontWeight='bold'>{(index + 1).toString()}</Typography>
                </div>
                <div className={`${styles.textBlock} ${isSliding || currentIndex !== index ? styles.hidden : ''}`}>
                  <Typography variant="h5" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography variant='paragraph12'>
                    {item.text}
                  </Typography>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}