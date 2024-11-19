import { Typography } from '@components/build-assets/libraryExport'
import { FC } from 'react'
import styles from './list.module.scss'

interface ListProps {
  items: string[]
  decoratorType: 'check' | 'dot' | 'number'
  size: 'small' | 'medium' | 'large'
}

const List: FC<ListProps> = ({ items, decoratorType, size }) => {
  const iconUrl = (() => {
    switch (decoratorType) {
      case 'check':
        return '/landingPage/list/check.svg'
      case 'dot':
        return '' //@todo
      case 'number':
        return ''
      default:
        return ''
    }
  })()

  //@todo Verify the size for small and large
  const sizeInPx = (() => {
    switch (size) {
      case 'small':
        return '24px'
      case 'medium':
        return '28px'
      case 'large':
        return '32px'
      default:
        return '20px'
    }
  })()

  return (
    <ul
      className={styles.list}
      style={{ listStyleType: decoratorType === 'number' ? 'decimal' : 'none' }}
    >
      {items.map((item, idx) => (
        <li key={idx}>
          <img
            src={iconUrl}
            alt="decorator list"
            style={{ width: sizeInPx }}
          ></img>
          <Typography variant="paragraph16">
            <span>{item}</span>
          </Typography>
        </li>
      ))}
    </ul>
  )
}

export default List
