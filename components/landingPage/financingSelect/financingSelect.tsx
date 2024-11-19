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
      setTimeout(() => setOpen(false), 300)
    } else {
      setOpen(true)
      setAnimationState('fadeIn')
    }
  }

  const handleSelectOption = (optionTitle: string) => {
    setSelectedOption(optionTitle)
  }

  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      if (
        isOpen &&
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [isOpen])

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
