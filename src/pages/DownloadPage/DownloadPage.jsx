import Button from '../../components/Button/Button'
import Panel from '../../components/Panel/Panel'
import SupportButton from '../../components/SupportButton/SupportButton'
import { DownloadIcon } from '../../components/Icons'
import styles from './DownloadPage.module.css'

export default function DownloadPage() {
  return (
    <main className={styles.page}>
      <Panel strong className={styles.logo}>
        <img src="/images/icon.jpg" alt="Date a Live: Betta" />
      </Panel>

      <div className={styles.buttons}>
        <Button>
          <DownloadIcon /> Download 1
        </Button>
        <Button>
          <DownloadIcon /> Download 2
        </Button>
      </div>

      <Panel strong className={styles.ad}>
        Реклама
      </Panel>

      <SupportButton />
    </main>
  )
}
