import styles from './breadcrumb.module.scss'
import { CaretRight, Typography } from '@components/build-assets/libraryExport'
import { FC } from 'react'

interface BreadcrumbProps {
  nodes: string[]
}

const Breadcrumb: FC<BreadcrumbProps> = ({ nodes }) => {
  return (
    <div className={styles.breadcrumbContainer}>
      {nodes.map((node, index) => (
        <>
          <div key={node} className={styles.breadcrumbItem}>
            <Typography variant={'paragraph14'} fontWeight={'regular'}>
              {node}
            </Typography>
          </div>
          {index < nodes.length - 1 && (
            <div className={styles.breadcrumbDivider}>
              <CaretRight />
            </div>
          )}
        </>
      ))}
    </div>
  )
}

export default Breadcrumb
