import Button from '../../components/Button/Button';
import FormError from '../../components/FormError/FormError';
import Hero from '../../components/Hero/Hero';
import Panel from '../../components/Panel/Panel';
import PlatformList from '../../components/PlatformList/PlatformList';
import Stars from '../../components/Stars/Stars';
import SupportButton from '../../components/SupportButton/SupportButton';
import SystemRequirements from '../../components/SystemRequirements/SystemRequirements';
import UserBar from '../../components/UserBar/UserBar';
import { DownloadIcon } from '../../components/Icons';
import useFetch from '../../hooks/useFetch';
import styles from './MainPage.module.css';

export default function MainPage() {
  const { data: game, loading, error } = useFetch('/game');

  return (
    <main className={styles.page}>
      <UserBar />

      <div className={styles.grid}>
        <div className={styles.left}>
          <Hero />

          <Panel className={styles.description}>
            <h3 className={styles.descTitle}>Опис:</h3>
            {loading && <p className={styles.descText}>Завантаження...</p>}
            <FormError message={error} />
            {game && <p className={styles.descText}>{game.description}</p>}
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

          <SystemRequirements
            cpu={game?.requirements.cpu}
            ram={game?.requirements.ram}
            disk={game?.requirements.disk}
          />
        </aside>
      </div>

      <SupportButton />
    </main>
  );
}
