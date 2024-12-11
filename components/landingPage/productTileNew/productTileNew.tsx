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
  color = 'grey',
  slider = false,
}: Readonly<{
  productImageSrc: string
  heading: string
  price: {
    price: string
    lowestPrice?: string
    delivery?: string
  }
  eyeCatcherProps: ComponentProps<typeof EyeCatcher>
  screenSizes: {
    width: number
    height: number
  }
  color?: 'grey' | 'white'
  slider?: boolean
}>) {
  const size =
    screenSizes.width > 1267
      ? 'large'
      : screenSizes.width > 935
        ? 'medium'
        : 'small'
  const headingFontSize =
    screenSizes.width > 1579 ? 18 : screenSizes.width > 935 ? 16 : 14
  return (
    <div
      className={styles.componentWrapper}
      style={{ backgroundColor: color === 'white' ? '#FFFFFF' : '#F3F5F3' }}
    >
      <div className={styles.imageWrapper}>
        {eyeCatcherProps && (
          <div
            className={`${styles.productTileEyeCatcher} ${slider ? styles.slider : ''}`}
          >
            <EyeCatcher {...eyeCatcherProps} />
          </div>
        )}
        <MediaContainer aspectRatio={'1/1'}>
          <img src={productImageSrc} alt="Product" />
        </MediaContainer>
      </div>
      <div className={styles.contentWrapper}>
        <Typography variant={`paragraph${headingFontSize}`} fontWeight={'bold'}>
          {heading}
        </Typography>
        <div className={styles.priceAndButton}>
          <Price
            size={size}
            price={price.price}
            lowestPrice={price.lowestPrice}
            vat="incl. VAT & shipping"
            delivery={price.delivery}
          />
          <Button type={'primary'} size={size} icon={<ShoppingCart />} />
        </div>
      </div>
    </div>
  )
}
