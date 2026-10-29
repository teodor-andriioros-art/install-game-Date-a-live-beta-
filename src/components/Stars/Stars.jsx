import styles from './Stars.module.css'

export default function Stars() {
  return (
    <div className={styles.stars}>
      <div>
        <span className={styles.full}>★</span>
        <span className={styles.full}>★</span>
        <span className={styles.full}>★</span>
        <span className={styles.full}>★</span>
        <span className={styles.half}>★</span>
      </div>
      <span className={styles.value}>4.5/5</span>
    </div>
  )
}
