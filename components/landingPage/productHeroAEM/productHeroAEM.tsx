import {
  Button,
  Typography,
  GridContainer,
  GridItem,
} from '@vorwerk/fibre-react'
import { FC } from 'react'
import styles from './productHeroAEM.module.scss'
import MainImageWithThumbnails from './mainImageWithThumbnails'
import ImageGallery from '@components/landingPage/imageGallery/imageGallery'
import Rating from '@components/landingPage/rating/rating'
import List from '@components/landingPage/list/list'
import AdvisorTile from '@components/landingPage/advisorTile/advisorTile'
import { GalleryItem } from '@components/landingPage/gallery/gallery'

interface ProductHeroAEMProps {
  screenSize: {
    width: number
    height: number
  }
  imagesForImageGallery?: JSX.Element[]
  imagesForThumbnails?: GalleryItem[]
}

const ProductHeroAEM: FC<ProductHeroAEMProps> = ({
  screenSize,
  imagesForImageGallery,
  imagesForThumbnails,
}) => {
  return (
    <div className={styles.productHeroContainer}>
      <GridContainer>
        <GridItem columns={12} columnsL={7} columnsXL={8}>
          {screenSize.width > 935 && imagesForThumbnails ? (
            <MainImageWithThumbnails images={imagesForThumbnails} />
          ) : (
            <ImageGallery
              slides={imagesForImageGallery}
              imageMaxWidth={'280px'}
              options={{ loop: false }}
            />
          )}
        </GridItem>
        <GridItem columns={12} columnsL={5} columnsXL={4}>
          <div className={styles.productDetailsContainer}>
            <div className={styles.headingAndRating}>
              <Rating
                rate={5}
                counter={42}
                size={'large'}
                iconColors={{
                  full: '#23282A',
                  empty: 'rgb(196, 196, 196)',
                }}
                showCounter={true}
                showAmount={true}
              />
              <Typography component="h4" fontWeight="bold">
                <span>Thermomix® TM6</span>
              </Typography>
            </div>
            <List
              items={[
                'Delicious dishes prepared quickly and easily',
                'Thousands of recipes with guaranteed success directly on your device',
                'A real all-rounder: Numerous cooking functions and modes',
              ]}
              decoratorType="check"
              size="medium"
            />
            <AdvisorTile
              imageSrc={'/landingPage/contentBlock/kobold-advisor.png'}
              text={'Try the Thermomix® live for free'}
            />
            <div className={styles.containerPrice}>
              <Button type="primary" size="large">
                Add to cart — 1.399 €
              </Button>
              <div className={styles.additionalInfoPrice}>
                <Typography variant={'paragraph12'} fontWeight={'regular'}>
                  incl. 19% VAT
                </Typography>
                <Typography variant={'paragraph12'} fontWeight={'regular'}>
                  ·
                </Typography>
                <Typography variant={'paragraph12'} fontWeight={'regular'}>
                  free shipping
                </Typography>
                <Typography variant={'paragraph12'} fontWeight={'regular'}>
                  ·
                </Typography>
                <Typography variant={'paragraph12'} fontWeight={'regular'}>
                  delivery time 7-10 workdays
                </Typography>
              </div>
            </div>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default ProductHeroAEM
