import styles from './categoryTile.module.scss'
import {
  EyeCatcher,
  Typography,
  Button,
} from "@vorwerk/fibre-react"
import { ComponentProps, FC } from 'react'
import Link from 'next/link'
import { ButtonProps } from '@vorwerk/fibre-react/components/button/Button'

interface CategoryTileProps {
  layout?: 'vertical' | 'horizontal'
  size: 'small' | 'medium' | 'large' | '2/3'
  backgroundColor?: 'grey' | 'white'
  brandColor?: string
  backgroundImageSrc?: string
  imageProps?: { src: string; alt: string }
  title: string
  button?: { label: string; size: string; link?: string }
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
  const containerPadding =
    size === 'small' || (size === 'medium' && imageProps)
      ? 'padding-small'
      : 'padding-large'
  const bkgColor =
    backgroundColor === 'grey'
      ? '#F3F5F3'
      : backgroundColor === 'white'
        ? '#FFFFFF'
        : 'transparent'

  return (
    <div
      className={`${styles.categoryTile} ${styles[layout]} ${styles[containerPadding]} ${imageProps ? styles.productImage : ''} ${styles[size]}`}
      style={{
        backgroundColor: brandColor ?? bkgColor,
        background: backgroundImageSrc
          ? `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 49.98%, rgba(0, 0, 0, 0.40) 75.51%, rgba(0, 0, 0, 0.50) 100%), url(${backgroundImageSrc}) 50% / cover no-repeat`
          : undefined,
        color: backgroundImageSrc || brandColor ? '#FFFFFF' : '#23282A',
      }}
    >
      {eyeCatcherProps && layout === 'vertical' && (
        <div className={styles.eyeCatcher}>
          <EyeCatcher {...eyeCatcherProps} />
        </div>
      )}
      {(imageProps ?? layout === 'vertical') && (
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            {imageProps && (
              <img
                src={imageProps.src}
                alt={imageProps.alt}
                className={styles.image}
              />
            )}
          </div>
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <Typography
            component={
              size === 'large' || (size === 'medium' && backgroundImageSrc)
                ? 'h3'
                : 'h5'
            }
            fontWeight="bold"
          >
            {title}
          </Typography>
        </div>
        {button && (
          <Link href={button.link ?? '/'}>
            <Button size={button.size as ButtonProps['size']} buttonStyle="primary">
              {button.label}
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default CategoryTile