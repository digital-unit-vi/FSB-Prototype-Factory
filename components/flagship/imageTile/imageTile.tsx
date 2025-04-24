import { CSSProperties, FC } from 'react'
import { Typography } from '@vorwerk/fibre-react'
import styles from './imageTile.module.scss'

interface ImageTileProps {
  title: string
  style: CSSProperties
  screenSizeWidth: number
}

const setFontSize = (width: number) => {
  if (width > 1267) {
    return 'paragraph18'
  } else if (width > 739 && width < 1268) {
    return 'paragraph16'
  } else {
    return 'paragraph12'
  }
}

const ImageTile: FC<ImageTileProps> = ({ title, style, screenSizeWidth }) => {
  const fontSize = setFontSize(screenSizeWidth)
  return (
    <div className={styles.imageTile} style={style}>
      <Typography
        variant={fontSize}
        fontWeight={'bold'}
        className={styles.text}
      >
        {title}
      </Typography>
    </div>
  )
}

export default ImageTile