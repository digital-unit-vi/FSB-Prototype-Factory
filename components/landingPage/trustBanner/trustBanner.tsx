import { Typography } from '@components/build-assets/libraryExport'
import Link from 'next/link'
import styles from './trustBanner.module.scss'

interface TrustBannerProps {
  items: {
    text: string,
    icon: JSX.Element
  }[]
}
const TrustBanner = ({ items }: TrustBannerProps) => {
  return (
    <div className={styles.trustBannerContainer}>
        {items.map((item, idx) => (
                <div key={idx} className={styles.trustBannerItem}>
                    <div className={styles.trustBannerIcon}>
                    {item.icon}
                    </div>
                    <div className={styles.trustBannerText}>
                    <Typography variant="paragraph14" fontWeight="regular">
                    {item.text}
                    </Typography>
                    <Link href="#" style={{color: "#3F4447"}}>
                    <Typography variant="paragraph14" fontWeight="regular">
                        more
                        </Typography>
                    </Link>
                    </div>
                </div>
        ))}
    </div>
  )
}

export default TrustBanner
