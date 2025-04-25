import { Headline, Typography } from "@vorwerk/fibre-react"
import styles from "./demoBanner.module.scss";

export const DemoBanner = () => {
  return (
    <div className={styles.bannerWrapper} style={{
      background: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.32) 59.62%, rgba(0, 0, 0, 0.12) 100%), url('/homePage/aop/category_tile.png')",
    }}>
      <Headline strongColor="white">
        <Typography variant="h1"><strong>Try</strong> before buy</Typography>
      </Headline>
    </div>
  )
}