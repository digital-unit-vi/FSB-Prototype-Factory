import styles from './breadcrumb.module.scss'
import { CaretRight, Typography } from '@components/build-assets/libraryExport'
import { FC, Fragment } from 'react'

interface BreadcrumbProps {
  nodes: string[]
}

const Breadcrumb: FC<BreadcrumbProps> = ({ nodes }) => {
  return (
    <div className={styles.breadcrumbContainer}>
      {nodes.map((node, index) => (
        <Fragment key={`${node}-${index}`}>
          <div className={styles.breadcrumbItem}>
            <Typography variant={'paragraph14'} fontWeight={'regular'}>
              {node}
            </Typography>
          </div>
          {index < nodes.length - 1 && (
            <div className={styles.breadcrumbDivider}>
              <CaretRight />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default Breadcrumb
