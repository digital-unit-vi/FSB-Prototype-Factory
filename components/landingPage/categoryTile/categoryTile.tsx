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
  backgroundColor?: string
  backgroundImageSrc?: string
  imageProps?: { src: string; alt: string }
  title: string
  button?: { label: string; size: string }
  eyeCatcherProps?: ComponentProps<typeof EyeCatcher>
}

const CategoryTile: FC<CategoryTileProps> = ({
  layout = 'vertical',
  backgroundColor,
  backgroundImageSrc,
  imageProps,
  title,
  button,
  eyeCatcherProps,
}) => {
  return (
    <div
      className={`${styles.categoryTile} ${styles[layout]} ${backgroundImageSrc ? styles.gradient : ''}`}
      style={{
        backgroundColor: backgroundColor ?? 'transparent',
        backgroundImage: backgroundImageSrc
          ? `linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.42) 65.01%, rgba(0, 0, 0, 0.4) 100%, rgba(0, 0, 0, 0.42) 100%), url(${backgroundImageSrc})`
          : undefined,
        color: backgroundImageSrc ? '#FFFFFF' : '#23282A',
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
          <Typography component="h3" fontWeight="bold">
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
