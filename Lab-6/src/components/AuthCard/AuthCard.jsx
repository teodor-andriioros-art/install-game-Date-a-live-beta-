import { UserIcon } from '../Icons'
import Panel from '../Panel/Panel'
import styles from './AuthCard.module.css'

export default function AuthCard({ title, hint, footer, children }) {
  return (
    <div className={styles.wrapper}>
      <Panel strong className={styles.siteTitle}>
        <h1>Date a Live Betta 1.0</h1>
      </Panel>

      <Panel strong className={styles.card}>
        <div className={styles.head}>
          <UserIcon className={styles.user} />
          <span className={styles.divider} />
          <h2>{title}</h2>
        </div>

        {hint && <p className={styles.hint}>{hint}</p>}

        {children}

        {footer && <p className={styles.footer}>{footer}</p>}
      </Panel>
    </div>
  )
}
