import { Typography } from '@components/build-assets/libraryExport'
import { FC } from 'react'
import styles from './list.module.scss'

interface ListProps {
  items: string[]
  decoratorType: 'check' | 'dot' | 'number'
  size: 'medium' | 'large'
}

const List: FC<ListProps> = ({ items, decoratorType, size }) => {
  const sizeInPx = (() => {
    switch (size) {
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
      className={`${styles.list} ${decoratorType === 'check' ? styles.checkList : ''}`}
      style={{
        listStyleType:
          decoratorType === 'number'
            ? 'decimal'
            : decoratorType === 'dot'
              ? 'disc'
              : 'none',
      }}
    >
      {items.map((item, idx) => (
        <li key={idx}>
          {decoratorType === 'check' && (
            <img
              src="/landingPage/list/check.svg"
              alt="decorator list"
              style={{ width: sizeInPx }}
            ></img>
          )}
          <Typography variant="paragraph16" fontWeight={'regular'}>
            <span>{item}</span>
          </Typography>
        </li>
      ))}
    </ul>
  )
}

export default List
