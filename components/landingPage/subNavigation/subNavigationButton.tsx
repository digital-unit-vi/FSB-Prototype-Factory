import styles from './subNavigation.module.scss'
import { Typography } from '@components/build-assets/libraryExport'
import { FC } from 'react'

interface SubNavigationButtonProps {
  item: string
  isActive: boolean
  onClick: () => void
}

const SubNavigationButton: FC<SubNavigationButtonProps> = ({
  item,
  isActive,
  onClick,
}) => (
  <button
    type="button"
    className={`${styles.subNavigationItem} ${isActive ? styles.active : ''}`}
    onClick={onClick}
  >
    <Typography variant="paragraph16" fontWeight="regular">
      {item}
    </Typography>
  </button>
)

export default SubNavigationButton
