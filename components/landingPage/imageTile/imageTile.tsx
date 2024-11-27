import { FC } from 'react'
import { Typography } from '@components/build-assets/libraryExport'
import styles from './imageTile.module.scss'

interface ImageTileProps {
  imageSrc: string
  title: string
  aspectRatio: string
  width: number
}

const ImageTile: FC<ImageTileProps> = ({
  imageSrc,
  title,
  aspectRatio,
  width,
}) => {
  return (
    <div
      className={styles.imageTile}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.54) 100%), url(${imageSrc})`,
        aspectRatio: aspectRatio,
        width: `${width}px`,
      }}
    >
      <Typography
        variant={'paragraph12'}
        fontWeight={'bold'}
        className={styles.text}
      >
        {title}
      </Typography>
    </div>
  )
}

export default ImageTile
