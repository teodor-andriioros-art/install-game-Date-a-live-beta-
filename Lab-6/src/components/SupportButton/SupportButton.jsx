import { SupportIcon } from '../Icons'
import styles from './SupportButton.module.css'

export default function SupportButton() {
  return (
    <button type="button" className={styles.support}>
      <SupportIcon className={styles.icon} />
      <span className={styles.divider} />
      <span>Підтримати автора</span>
    </button>
  )
}
