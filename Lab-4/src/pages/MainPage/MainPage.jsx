import Button from '../../components/Button/Button'
import Hero from '../../components/Hero/Hero'
import Panel from '../../components/Panel/Panel'
import PlatformList from '../../components/PlatformList/PlatformList'
import Stars from '../../components/Stars/Stars'
import SupportButton from '../../components/SupportButton/SupportButton'
import SystemRequirements from '../../components/SystemRequirements/SystemRequirements'
import { DownloadIcon } from '../../components/Icons'
import styles from './MainPage.module.css'

export default function MainPage() {
  return (
    <main className={styles.page}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <Hero />

          <Panel className={styles.description}>
            <h3 className={styles.descTitle}>Опис:</h3>
            <p className={styles.descText}>
              Date a Live: Betta — це захоплююча візуальна новела з елементами екшену та романтики,
              заснована на популярній серії. Ви опинитеся у світі, де існують духи, і ваша мета —
              врятувати світ, знаходячи підхід до кожної з них.
            </p>
          </Panel>
        </div>

        <aside className={styles.right}>
          <Panel className={styles.thumb}>
            <img src="/images/icon.jpg" alt="Date a Live: Betta" />
          </Panel>

          <Panel className={styles.rating}>
            <Stars />
          </Panel>

          <PlatformList />

          <div className={styles.download}>
            <Button to="/download" variant="red" block>
              <DownloadIcon /> Download
            </Button>
          </div>

          <SystemRequirements />
        </aside>
      </div>

      <SupportButton />
    </main>
  )
}
