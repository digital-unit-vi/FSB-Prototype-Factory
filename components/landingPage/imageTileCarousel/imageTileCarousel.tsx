import { ReactElement, FC } from 'react'
import {
  Button,
  GridContainer,
  GridItem,
  Headline,
  Typography,
} from '@components/build-assets/libraryExport'
import styles from './imageTileCarousel.module.scss'
import ImageTileProps from '../imageTile/imageTile'
import ImageGallery from '@components/landingPage/imageGallery/imageGallery'

interface ImageTileCarouselProps {
  slides?: ReactElement<typeof ImageTileProps>[]
  screenSize: {
    width: number
    height: number
  }
}

const ImageTileCarousel: FC<ImageTileCarouselProps> = ({
  slides,
  screenSize,
}) => {
  return (
    <div className={styles.backgroundContainer}>
      <GridContainer>
        <GridItem columns={12}>
          <div className={styles.imageTileCarouselContainer}>
            <div className={styles.textBlock}>
              <div className={styles.overwrittenMargin}>
                <Headline spaceBelow={'default'} strongColor={'orange'}>
                  <Typography component={'h2'}>
                    Thousands of recipes – <strong>Endless inspiration</strong>
                  </Typography>
                </Headline>
                <Typography variant={'paragraph16'} fontWeight={'regular'}>
                  From a quick lunch for the home office to homemade sourdough
                  bread - Cookidoo® has the right recipes for you!
                </Typography>
              </div>
              <Button type={'primary'} size={'large'}>
                Join Cookidoo for free
              </Button>
            </div>
            <ImageGallery
              slides={slides}
              options={{ startIndex: 1 }}
              noControl
              screenSizes={screenSize}
              imageTile
            />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default ImageTileCarousel
