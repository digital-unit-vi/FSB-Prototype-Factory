import Image from 'next/image'
import styles from './includedProductTile.module.scss'
import { Typography } from '@vorwerk/fibre-react'
import { FC } from 'react'

interface IncludedProductTileProps {
  imageProps: { src: string; alt: string }
  heading: string
  bundleName: string
  bundleImage: {src: string, alt: string}
}

const IncludedProductTile: FC<IncludedProductTileProps> = ({
  imageProps,
  heading,
  bundleName,
  bundleImage
}) => {
  return (
    <div className={styles.includedProductTile}>
        <div className={styles.includedProductTileImageWrapper}>
        <Image
              src={imageProps.src}
              alt={imageProps.alt}
                width={283}
                height={283}
                className={styles.includedImage}
            />
        </div>
      <div className={styles.infoContainer}>
          <Typography variant="paragraph16" fontWeight="regular">
            {heading}
          </Typography>
            <div className={styles.bundleProductTile}>
                <div className={styles.bundleImageWrapper}>
                <Image
                src={bundleImage.src}
                alt={bundleImage.alt}
                width={48}
                height={48}
                className={styles.bundleImage}
                />
                </div>
                <Typography variant="paragraph14" fontWeight="bold">
                    {bundleName}
                </Typography>
            </div>
      </div>
    </div>
  )
}

export default IncludedProductTile
