import styles from './subNavigation.module.scss'
import { Typography } from '@components/build-assets/libraryExport'
import { FC, useState } from 'react'
import ImageGallery from '../imageGallery/imageGallery'

interface SubNavigationProps {
  items: string[]
}

const SubNavigation: FC<SubNavigationProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState('')

  const handleItemClick = (index: string) => {
    setActiveIndex(index)
  }

  return (
    <ImageGallery
      slides={items.map(item => (
        <button
          key={item}
          type="button"
          className={`${styles.subNavigationItem} ${activeIndex === item ? styles.active : ''}`}
          onClick={() => handleItemClick(item)}
        >
          <Typography variant={'paragraph16'} fontWeight={'regular'}>
            {item}
          </Typography>
        </button>
      ))}
      noControl
      imageTile
      options={{ loop: false }}
      overflow
    />
  )
}

export default SubNavigation
