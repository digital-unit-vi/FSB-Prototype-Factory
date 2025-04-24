import { Typography, Download } from '@vorwerk/fibre-react'
import styles from './file.module.scss'

interface FileProps {
  label: string
  sizeFormat: string
  subLine?: boolean
}
const File = ({ label, sizeFormat, subLine }: FileProps) => {
  return (
    <button
      type="button"
      className={styles.fileButton}
      aria-label={`Download the file ${label}`}
    >
      <div className={styles.fileButtonLabel}>
        <Typography variant={'paragraph16'} fontWeight="medium">
          {label} {subLine && <br />}
          <span
            style={{ color: '#707375', fontWeight: '400' }}
          >{`(${sizeFormat})`}</span>
        </Typography>
      </div>
      <Download />
    </button>
  )
}

export default File