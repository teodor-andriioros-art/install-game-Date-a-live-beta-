import styles from './FormError.module.css';

export default function FormError({ message }) {
  if (!message) {
    return null;
  }

  return <p className={styles.error}>{message}</p>;
}
