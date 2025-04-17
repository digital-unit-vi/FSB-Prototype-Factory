import { Button, Typography } from '@vorwerk/fibre-react'
import { FC, useState } from 'react'
import styles from './gallery.module.scss'
import GalleryModal from '../galleryModal/galleryModal'

interface ImageItem {
  type: 'image'
  url: string
  alt: string
  title: string
}

interface VideoItem {
  type: 'video'
  url: string
  poster: string
}

export type GalleryItem = ImageItem | VideoItem

interface GalleryImages {
  gallery: GalleryItem[]
}

const Gallery: FC<GalleryImages> = ({ gallery }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const images = gallery.filter(item => item.type === 'image')
  const videos = gallery.filter(item => item.type === 'video')
  return (
    <>
      <div className={styles.galleryContainer}>
        {gallery.map(media => {
          return media.type === 'image' ? (
            <img
              src={media.url}
              alt={media.alt}
              key={media.title}
              onClick={() => setModalOpen(true)}
            ></img>
          ) : (
            <video
              src={media.url}
              poster={media.poster}
              playsInline
              controls
              controlsList="nofullscreen"
              key={media.url}
            ></video>
          )
        })}
        <div className={styles.galleryInfo}>
          <Typography variant="paragraph16" fontWeight="regular">
            <span>{images.length} images</span>
          </Typography>
          <Typography variant="paragraph16" fontWeight="regular">
            <span>-</span>
          </Typography>
          <Typography variant="paragraph16" fontWeight="regular">
            <span>{videos.length} videos</span>
          </Typography>
          <Typography variant="paragraph16" fontWeight="regular">
            <span>-</span>
          </Typography>
          <Button type="tertiary" size="medium">
            Show all media
          </Button>
        </div>
      </div>
      {isModalOpen && (
        <GalleryModal
          images={images}
          videos={videos}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  )
}

export default Gallery
