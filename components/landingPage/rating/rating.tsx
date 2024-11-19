import { Typography } from '@components/build-assets/libraryExport'
import { FC } from 'react'
import styles from './rating.module.scss'

interface RatingProps {
  rate: number
  counter: number
  iconSize: number
  iconColors: {
    full: string,
    empty: string
  }
  fontSize: number
  showCounter?: boolean
  showAmount?: boolean
}

const Rating: FC<RatingProps> = ({
  rate,
  counter,
  iconSize,
  iconColors,
  fontSize,
  showCounter = false,
  showAmount = false,
}) => {
  const fullStars = Math.floor(rate)
  const decimalPart = rate - fullStars
  const hasHalfStar = decimalPart > 0.25 && decimalPart <= 0.75
  const adjustedFullStars = decimalPart > 0.75 ? fullStars + 1 : fullStars
  const emptyStars = 5 - adjustedFullStars - (hasHalfStar ? 1 : 0)


  return (
    <div className={styles.ratingContainer} style={{'--full-star-color': iconColors?.full || '#23282A',
      '--empty-star-color': iconColors?.empty || 'rgb(196, 196, 196)'}}>
        <svg
          style={{ width: '0', height: '0' }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 0 0"
        >
          <defs>
            <linearGradient id={`half-gradient-${iconSize}`}>
            <stop offset="50%" stopColor="var(--full-star-color)" />
            <stop offset="50%" stopColor="var(--empty-star-color)" />
          </linearGradient>
            <symbol
              xmlns="http://www.w3.org/2000/svg"
              viewBox={`0 0 ${iconSize} ${iconSize}`}
              id="star"
            >
              <path d="M16 5.8L10.4 5L8 0L5.6 5L0 5.8L4.1 9.6L3 15.2L8 12.4L12.9 15.2L11.8 9.6L16 5.8Z" />
            </symbol>
          </defs>
        </svg>
      <div className={styles.ratingWrapper}>
        <div className={styles.starRating}>
            {Array.from({ length: adjustedFullStars }).map((_, index) => (
              <svg
                key={`full-${index}`}
                width={iconSize}
                height={iconSize}
                viewBox={`0 0 ${iconSize} ${iconSize}`}
                fill={iconColors.full}
              >
                <use href="#star" />
              </svg>
            ))}
            {hasHalfStar && (
              <svg
                key="half"
                width={iconSize}
                height={iconSize}
                viewBox={`0 0 ${iconSize} ${iconSize}`}
                fill={`url(#half-gradient-${iconSize})`}
              >
                <use href="#star" />
              </svg>
            )}
            {Array.from({ length: emptyStars }).map((_, index) => (
              <svg
                key={`empty-${index}`}
                width={iconSize}
                height={iconSize}
                viewBox={`0 0 ${iconSize} ${iconSize}`}
                fill={iconColors.empty}
              >
                <use href="#star" />
              </svg>
            ))}
        </div>
        <div className={styles.counterWrapper} style={{color: iconColors.full}}>
          {showAmount && (
            <Typography variant={`paragraph${fontSize}`} fontWeight="bold">
              <span>{rate}</span>
            </Typography>
          )}
          {showCounter && (
            <div className={styles.counter}>
              <Typography variant={`paragraph${fontSize}`}>
                <span>
                  {counter} {counter === 1 ? 'review' : 'reviews'}
                </span>
              </Typography>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Rating
