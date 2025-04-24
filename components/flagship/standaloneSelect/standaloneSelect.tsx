import styles from './standaloneSelect.module.scss'
import {
  Typography,
  CaretDown,
  CaretUp,
} from '@vorwerk/fibre-react'
import { FC, JSX, useState } from 'react'

interface StandaloneSelectProps {
  icon: JSX.Element
  text: string
  items: string[]
  menuDirection?: 'down' | 'up'
}

const StandaloneSelect: FC<StandaloneSelectProps> = ({
  icon,
  text,
  items,
  menuDirection = 'down',
}) => {
  const [isOpen, setOpen] = useState(false)
  const [animationState, setAnimationState] = useState<
    'fadeIn' | 'fadeOut' | null
  >(null)

  const handleToggle = () => {
    if (isOpen) {
      setAnimationState('fadeOut')
      setTimeout(() => setOpen(false), 300)
    } else {
      setOpen(true)
      setAnimationState('fadeIn')
    }
  }

  return (
    <div className={styles.standaloneSelectWrapper}>
      <button
        className={styles.standaloneSelectContainer}
        type="button"
        onClick={handleToggle}
        id="dropdown-button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="dropdown-menu"
      >
        <div className={styles.selectContainer}>
          <div className={styles.select}>
            {icon}
            <Typography variant={'paragraph16'} fontWeight={'medium'}>
              {text}
            </Typography>
          </div>
          {isOpen ? <CaretUp /> : <CaretDown />}
        </div>
      </button>
      <ul
        className={`${styles.dropdownMenu} ${
          animationState === 'fadeIn' ? styles.fadeIn : styles.fadeOut
        } ${menuDirection === 'up' ? styles.upMenu : ''}`}
        id="dropdown-menu"
      >
        {items.map(item => (
          <li key={item} className={styles.dropdownMenuItem}>
            <Typography variant={'paragraph16'} fontWeight={'regular'}>
              {item}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StandaloneSelect