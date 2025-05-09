import {
  Typography,
  CaretUp,
  CaretDown,
} from '@vorwerk/fibre-react'
import styles from './accordion.module.scss'
import { FC, useState } from 'react'

interface AccordionProps {
  items: {
    title: string
    content: JSX.Element
    additionalInfo?: JSX.Element
  }[]
}

const Accordion: FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [animationStates, setAnimationStates] = useState<Record<number, 'fadeIn' | 'fadeOut'>>({})

  const handleToggle = (index: number) => {
    if (openIndex === index) {
      setAnimationStates(prev => ({ ...prev, [index]: 'fadeOut' }))
      setTimeout(() => setOpenIndex(null), 300)
    } else {
      setOpenIndex(index)
      setAnimationStates(prev => ({ ...prev, [index]: 'fadeIn' }))
    }
  }

  return (
    <div className={styles.accordionContainer}>
      {items.map((item, index) => (
        <div key={item.title} className={styles.accordionWrapper}>
          <button
            className={`${styles.accordion} ${
              animationStates[index] === 'fadeIn' ? styles.clicked : ''
            }`}
            type="button"
            onClick={() => handleToggle(index)}
            aria-haspopup="true"
            aria-expanded={openIndex === index}
            aria-controls={`accordion-content-${index}`}
          >
            <span
              className={`${styles.accordionTitleAndInfo} ${
                item.additionalInfo && styles.accordionWithInfo
              }`}
            >
              <Typography variant="h4" fontWeight="bold">
                {item.title}
              </Typography>
              {item.additionalInfo}
            </span>
            <span className={styles.accordionCaret}>
              {animationStates[index] === 'fadeIn' ? (
                <CaretUp />
              ) : (
                <CaretDown />
              )}
            </span>
          </button>
          <div
            id={`accordion-content-${index}`}
            className={`${styles.accordionContent} ${
              animationStates[index] === 'fadeIn' ? styles.fadeIn : ''
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
