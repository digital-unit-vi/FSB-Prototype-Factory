import {
  InteractiveIcon,
  Close,
  Typography,
} from '@components/build-assets/libraryExport'
import React, { FC, useState } from 'react'
import styles from './galleryModal.module.scss'
import { GalleryItem } from '@components/landingPage/gallery/gallery'
import GalleryModalCarousel from '@components/landingPage/galleryModalCarousel/galleryModalCarousel'

interface GalleryModalProps {
  images: GalleryItem[]
  videos: GalleryItem[]
  onClose: () => void
  isSmallOrMediumSize?: boolean
}

const GalleryModal: FC<GalleryModalProps> = ({
  images,
  videos,
  onClose,
  isSmallOrMediumSize,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredGallery =
    selectedCategory === 'images'
      ? images
      : selectedCategory === 'videos'
        ? videos
        : [...images, ...videos]

  return (
    <div className={styles.galleryModal}>
      <div className={styles.galleryModalContainer}>
        <div className={styles.galleryModalTop}>
          <div className={styles.galleryModalHeader}>
            <div className={styles.galleryModalHeaderContent}>
              <button
                className={selectedCategory === 'all' ? styles.active : ''}
                onClick={() => setSelectedCategory('all')}
              >
                <Typography variant={'paragraph16'} fontWeight={'medium'}>
                  All
                </Typography>
              </button>
              <button
                className={selectedCategory === 'images' ? styles.active : ''}
                onClick={() => setSelectedCategory('images')}
              >
                <Typography variant={'paragraph16'} fontWeight={'medium'}>
                  Images
                </Typography>
              </button>
              <button
                className={selectedCategory === 'videos' ? styles.active : ''}
                onClick={() => setSelectedCategory('videos')}
              >
                <Typography variant={'paragraph16'} fontWeight={'medium'}>
                  Videos
                </Typography>
              </button>
            </div>
          </div>
          <div className={styles.close}>
            <InteractiveIcon icon={<Close />} onClick={onClose} />
          </div>
        </div>
        <GalleryModalCarousel
          slides={filteredGallery}
          isSmallOrMediumSize={isSmallOrMediumSize}
        />
      </div>
    </div>
  )
}

export default GalleryModal
