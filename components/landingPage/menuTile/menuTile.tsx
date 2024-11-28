import Link from 'next/link'
import styles from './menuTile.module.scss'
import {
  Typography,
  MediaContainer,
} from '@components/build-assets/libraryExport'
import { FC } from 'react'

interface MenuTileProps {
  type: 'category' | 'cta'
  label?: string
  title?: string
  cta?: string
  imageProps?: {
    src: string
    alt: string
  }
}

const MenuTile: FC<MenuTileProps> = ({
  type,
  label,
  title,
  cta,
  imageProps,
}) => {
  return (
    <Link href="#" className={styles.menuTileLink}>
      <div
        className={`${styles.menuTileContainer} ${type === 'cta' ? styles.cta : ''}`}
      >
        {type === 'category' ? (
          <>
            <MediaContainer aspectRatio={'1/1'}>
              <img src={imageProps?.src} alt={imageProps?.alt} />
            </MediaContainer>
            <Typography
              className={styles.label}
              variant={'paragraph16'}
              fontWeight={'medium'}
            >
              {label}
            </Typography>
          </>
        ) : (
          <>
            <Typography component={'h3'} fontWeight={'bold'}>
              {title}
            </Typography>
            <Typography
              className={`${styles.label} ${styles.cta}`}
              variant={'paragraph16'}
              fontWeight={'medium'}
            >
              {cta}
            </Typography>
          </>
        )}
      </div>
    </Link>
  )
}

export default MenuTile
