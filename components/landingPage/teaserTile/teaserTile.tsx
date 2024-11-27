import styles from './teaserTile.module.scss'
import {
  Typography,
  Button,
  MediaContainer,
} from '@components/build-assets/libraryExport'
import { FC } from 'react'

interface TeaserTileProps {
  title: string
  paragraph: string
  imageProps: {
    src: string
    alt: string
  }
  buttonLabel: string
}

const TeaserTile: FC<TeaserTileProps> = ({
  title,
  paragraph,
  imageProps,
  buttonLabel,
}) => {
  return (
    <div className={styles.teaserTileContainer}>
      <MediaContainer aspectRatio={'1/1'}>
        <img src={imageProps.src} alt={imageProps.alt} />
      </MediaContainer>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <Typography variant={'paragraph16'} fontWeight={'bold'}>
            {title}
          </Typography>
          <Typography variant={'paragraph16'} fontWeight={'regular'}>
            {paragraph}
          </Typography>
        </div>
        <Button type={'tertiary'} size={'medium'}>
          {buttonLabel}
        </Button>
      </div>
    </div>
  )
}

export default TeaserTile
