import Image from 'next/image'
import styles from './categoryTile.module.scss'
import {
  EyeCatcher,
  Typography,
  Button,
} from '@components/build-assets/libraryExport'
import { ComponentProps, FC } from 'react'
import Link from 'next/link'

interface CategoryTileProps {
  layout?: 'vertical' | 'horizontal'
  size: 'small' | 'large'
  backgroundColor?: 'grey' | 'white'
  brandColor?: string
  backgroundImageSrc?: string
  imageProps?: { src: string; alt: string }
  title: string
  button?: { label: string; size: string }
  eyeCatcherProps?: ComponentProps<typeof EyeCatcher>
}

const CategoryTile: FC<CategoryTileProps> = ({
  layout = 'vertical',
  size,
  backgroundColor,
  brandColor,
  backgroundImageSrc,
  imageProps,
  title,
  button,
  eyeCatcherProps,
}) => {
  const containerPadding = size === 'large' ? 'padding-large' : 'padding-small'
  const bkgColor =
    backgroundColor === 'grey'
      ? '#F3F5F3'
      : backgroundColor === 'white'
        ? '#FFFFFF'
        : 'transparent'

  return (
    <div
      className={`${styles.categoryTile} ${styles[layout]} ${backgroundImageSrc ? styles.gradient : ''} ${styles[containerPadding]}`}
      style={{
        backgroundColor: brandColor ?? bkgColor,
        backgroundImage: backgroundImageSrc
          ? `linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.42) 65.01%, rgba(0, 0, 0, 0.4) 100%, rgba(0, 0, 0, 0.42) 100%), url(${backgroundImageSrc})`
          : undefined,
        color: backgroundImageSrc || brandColor ? '#FFFFFF' : '#23282A',
      }}
    >
      {eyeCatcherProps && layout === 'vertical' && (
        <div className={styles.eyeCatcher}>
          <EyeCatcher {...eyeCatcherProps} />
        </div>
      )}
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          {imageProps && (
            <Image
              src={imageProps.src}
              alt={imageProps.alt}
              fill="fill"
              className={styles.image}
            />
          )}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <Typography
            component={size === 'large' ? 'h3' : 'h5'}
            fontWeight="bold"
          >
            {title}
          </Typography>
        </div>
        {button && (
          <Link href="/">
            <Button size={button.size} type="primary">
              {button.label}
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default CategoryTile
