'use client'

import React from 'react'
import { GalleryItem } from '../gallery/gallery'
import styles from './galleryModalCarousel.module.scss'

interface ThumbProps {
  selected: boolean
  item: GalleryItem
  onClick: () => void
  isAEM?: boolean
}

export const Thumb: React.FC<ThumbProps> = props => {
  const { selected, item, onClick, isAEM = false } = props

  return (
    <div
      className={`${styles.thumbsSlide} ${selected ? styles.selected : ''} ${isAEM ? styles.aem : ''}`}
    >
      <button
        onClick={onClick}
        type="button"
        className={styles.thumbsSlideImage}
      >
        {item.type === 'image' ? (
          <img src={item.url} alt="Product" />
        ) : (
          <video
            src={item.url}
            poster={item.poster}
            playsInline
            controls
            controlsList="nofullscreen"
            key={item.url}
          ></video>
        )}
      </button>
    </div>
  )
}