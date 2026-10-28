import Button from '../Button/Button'
import { ChevronLeft, ChevronRight, PlayIcon } from '../Icons'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <button type="button" className={`${styles.arrow} ${styles.left}`} aria-label="Попередній слайд">
        <ChevronLeft />
      </button>

      <div className={styles.content}>
        <h2 className={styles.title}>ГЕЙМПЛЕЙ</h2>
        <p className={styles.text}>
          Досліджуй світ, бийся, розвивайся. Поринь у захопливу історію та унікальний ігровий процес.
        </p>
        <Button to="/download" variant="outlineRed">
          <PlayIcon /> Download
        </Button>
      </div>

      <button type="button" className={`${styles.arrow} ${styles.right}`} aria-label="Наступний слайд">
        <ChevronRight />
      </button>
    </div>
  )
}
