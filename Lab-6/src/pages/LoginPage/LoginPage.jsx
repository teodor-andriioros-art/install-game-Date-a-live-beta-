import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthCard from '../../components/AuthCard/AuthCard';
import Button from '../../components/Button/Button';
import FormError from '../../components/FormError/FormError';
import TextField from '../../components/TextField/TextField';
import {
  ArrowRight,
  EyeOffIcon,
  LockIcon,
  MailIcon,
} from '../../components/Icons';
import useAuth from '../../hooks/useAuth';
import styles from './LoginPage.module.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Введіть пошту та пароль');
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      navigate('/main');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthCard
      title="Вхід"
      hint="Увійдіть у свій акаунт, щоб отримати доступ до гри."
      footer={
        <>
          Ще немає акаунта? <Link to="/register">Зареєструватися</Link>{' '}
          <ArrowRight />
        </>
      }
    >
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          icon={<MailIcon />}
          type="email"
          placeholder="Ваша електронна пошта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          icon={<LockIcon />}
          trailingIcon={<EyeOffIcon />}
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <FormError message={error} />

        <div className={styles.submit}>
          <Button type="submit" block tech rounded large disabled={loading}>
            {loading ? 'Зачекайте...' : 'Увійти'}
          </Button>
        </div>
      </form>
    </AuthCard>
  );
}
