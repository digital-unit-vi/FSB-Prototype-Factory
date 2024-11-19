import {
  Button,
  MediaContainer,
  Price,
  Typography,
  ShoppingCart,
  EyeCatcher,
} from '@components/build-assets/libraryExport'
import { ComponentProps } from 'react'
import styles from './productTileNew.module.scss'

export default function ProductTileNew({
  productImageSrc,
  heading,
  price,
  eyeCatcherProps,
  screenSizes,
}: Readonly<{
  productImageSrc: string
  heading: string
  price: string
  eyeCatcherProps: ComponentProps<typeof EyeCatcher>
  screenSizes: {
    width: number
    height: number
  }
}>) {
  const size =
    screenSizes.width > 1267
      ? 'large'
      : screenSizes.width > 935
        ? 'medium'
        : 'small'

  return (
    <div className={styles.componentWrapper}>
      <div className={styles.imageWrapper}>
        {eyeCatcherProps && (
          <div className={styles.productTileEyeCatcher}>
            <EyeCatcher {...eyeCatcherProps} />
          </div>
        )}
        <MediaContainer aspectRatio={'1/1'}>
          <img src={productImageSrc} alt="Product" />
        </MediaContainer>
      </div>
      <div className={styles.contentWrapper}>
        <Typography
          variant={`paragraph${screenSizes.width > 1267 ? 16 : 14}`}
          fontWeight={'bold'}
        >
          {heading}
        </Typography>
        <div className={styles.priceAndButton}>
          <Price size={size} price={price} vat="incl. VAT & shipping" />
          <Button type={'primary'} size={size} icon={<ShoppingCart />} />
        </div>
      </div>
    </div>
  )
}
