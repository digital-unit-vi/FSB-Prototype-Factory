import {
  Typography,
  CaretUp,
  CaretDown,
  Info,
  Checkmark,
} from '@components/build-assets/libraryExport'
import { useState, useEffect, useRef } from 'react'
import styles from './financingSelect.module.scss'

interface FinancingSelectProps {
  primaryButtonLabel: {
    label: string
    subLine: string
  }
  items: {
    label: string
    description?: string
    descriptionInColor?: string
    info?: boolean
    slot?: string
  }[]
}
const FinancingSelect = ({
  primaryButtonLabel,
  items,
}: FinancingSelectProps) => {
  const [isOpen, setOpen] = useState(false)
  const [animationState, setAnimationState] = useState<
    'fadeIn' | 'fadeOut' | null
  >(null)
  const [selectedOption, setSelectedOption] = useState<string | null>()
  const selectRef = useRef<HTMLDivElement | null>(null)

  const handleToggle = () => {
    if (isOpen) {
      setAnimationState('fadeOut')
      setOpen(false)
    } else {
      setOpen(true)
      setAnimationState('fadeIn')
    }
  }

  const handleSelectOption = (optionTitle: string) => {
    setSelectedOption(optionTitle)
  }

  useEffect(() => {
    let touchStartX = 0
    let touchStartY = 0
    let isSwipe = false

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX
      touchStartY = e.touches[0].clientY
      isSwipe = false
    }

    const handleTouchMove = (e: TouchEvent) => {
      const deltaX = Math.abs(e.touches[0].clientX - touchStartX)
      const deltaY = Math.abs(e.touches[0].clientY - touchStartY)

      // Detect if the movement qualifies as a swipe
      if (deltaX > 10 || deltaY > 10) {
        isSwipe = true
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isSwipe) {
        // It's a tap, so check if it's outside the dropdown
        const target = e.target as Node
        if (
          isOpen &&
          selectRef.current &&
          !selectRef.current.contains(target)
        ) {
          setAnimationState('fadeOut')
          setOpen(false)
        }
      }
    }

    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as Node
      if (isOpen && selectRef.current && !selectRef.current.contains(target)) {
        setAnimationState('fadeOut')
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('touchstart', handleTouchStart)
    document.addEventListener('touchmove', handleTouchMove)
    document.addEventListener('touchend', handleTouchEnd)

    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isOpen, selectRef])

  return (
    <div className={styles.financingContainer} ref={selectRef}>
      <button
        type="button"
        className={`${styles.financingSelect} ${isOpen ? styles.isClicked : ''}`}
        onClick={handleToggle}
        id="dropdown-button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="dropdown-menu"
      >
        <div className={styles.buttonLabelWithIcon}>
          {selectedOption && (
            <div className={styles.checkMakerIcon}>
              <Checkmark />
            </div>
          )}
          <div className={styles.buttonLabel}>
            <Typography variant="paragraph16" fontWeight="bold">
              <span>{selectedOption || primaryButtonLabel.label}</span>
            </Typography>
            {!selectedOption && (
              <Typography variant="paragraph16" fontWeight="regular">
                {primaryButtonLabel.subLine}
              </Typography>
            )}
          </div>
        </div>

        <span className={styles.financingCaret}>
          {isOpen ? <CaretUp /> : <CaretDown />}
        </span>
      </button>
      <ul
        className={`${styles.dropdownMenu} ${
          animationState === 'fadeIn' ? styles.fadeIn : styles.fadeOut
        }`}
        id="dropdown-menu"
      >
        {items.map(item => (
          <li key={item.label} className={styles.dropdownMenuItem}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="financingOption"
                value={item.label}
                checked={selectedOption === item.label}
                onChange={() => handleSelectOption(item.label)}
                className={styles.radioInput}
              />
              <span className={styles.radioCustom}></span>
              <div className={styles.labelWrapper}>
                <div className={styles.textInfoContainer}>
                  <div>
                    <Typography variant="paragraph16" fontWeight="medium">
                      {item.label}
                    </Typography>
                    {item.description && (
                      <Typography variant="paragraph12" fontWeight="regular">
                        {item.description}{' '}
                        {item.descriptionInColor && (
                          <span style={{ color: '#00ac46' }}>
                            {item.descriptionInColor}
                          </span>
                        )}
                      </Typography>
                    )}
                  </div>
                  {item.info && (
                    <div className={styles.infoIcon}>
                      <Info />
                    </div>
                  )}
                </div>
                {item.slot && (
                  <div className={styles.badge}>
                    <Typography variant="paragraph14" fontWeight="medium">
                      {item.slot}
                    </Typography>
                  </div>
                )}
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FinancingSelect
