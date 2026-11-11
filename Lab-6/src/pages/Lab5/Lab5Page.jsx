import Button from '../../components/Button/Button';
import Hero from '../../components/Hero/Hero';
import styles from './Lab5Page.module.css';

export default function Lab5Page() {
  return (
    <main className={styles.page}>
      <Hero />
      <Button to="/main" block>
        На головну
      </Button>
    </main>
  );
}
