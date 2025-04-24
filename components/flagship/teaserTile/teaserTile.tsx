import styles from './teaserTile.module.scss'
import {
  Typography,
  Button,
  MediaContainer,
} from '@vorwerk/fibre-react'
import { FC } from 'react'

interface TeaserTileProps {
  title: string
  paragraph: string
  imageProps: {
    src: string
    alt: string
  }
  buttonLabel: string
  screenSizeWidth: number
}

const TeaserTile: FC<TeaserTileProps> = ({
  title,
  paragraph,
  imageProps,
  buttonLabel,
  screenSizeWidth
}) => {
  return (
    <div className={styles.teaserTileContainer}>
      <MediaContainer aspectRatio={'1/1'}>
        <img src={imageProps.src} alt={imageProps.alt} />
      </MediaContainer>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <Typography variant={screenSizeWidth > 1267 ? 'paragraph18' : 'paragraph16'} fontWeight={'bold'}>
            {title}
          </Typography>
          <Typography variant={screenSizeWidth > 1267 ? 'paragraph18' : 'paragraph16'} fontWeight={'regular'}>
            {paragraph}
          </Typography>
        </div>
        <Button buttonStyle={'tertiary'} size={screenSizeWidth > 1267 ? 'large' : 'medium'}>
          {buttonLabel}
        </Button>
      </div>
    </div>
  )
}

export default TeaserTile