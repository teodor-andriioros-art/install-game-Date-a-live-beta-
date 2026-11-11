import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthCard from '../../components/AuthCard/AuthCard';
import AgeSelect from '../../components/AgeSelect/AgeSelect';
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
import { getAge } from '../../utils/age';
import styles from './RegisterPage.module.css';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register, loginAsGuest } = useAuth();

  const [birth, setBirth] = useState({ day: '', month: '', year: '' });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleBirthChange(field, value) {
    setBirth({ ...birth, [field]: value });
  }

  function handleGuest() {
    const age = getAge(birth.day, birth.month, birth.year);

    if (age === null) {
      setError('Вкажіть коректну дату народження');
      return;
    }
    if (age < 18) {
      setError('Доступ до гри дозволено лише з 18 років');
      return;
    }

    loginAsGuest();
    navigate('/main');
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!email.includes('@')) {
      setError('Введіть коректну електронну пошту');
      return;
    }
    if (password.length < 6) {
      setError('Пароль має містити щонайменше 6 символів');
      return;
    }

    setLoading(true);
    try {
      await register(email, password);
      navigate('/main');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthCard
      title="Реєстрація"
      hint="Будь ласка, підтвердіть свій вік або зареєструйтесь через пошту, щоб отримати доступ до гри."
      footer={
        <>
          Вже маєте акаунт? <Link to="/login">Увійти</Link> <ArrowRight />
        </>
      }
    >
      <form className={styles.form} onSubmit={handleSubmit}>
        <AgeSelect birth={birth} onChange={handleBirthChange} />

        <Button onClick={handleGuest} block tech rounded>
          Увійти без реєстрації
        </Button>

        <div className={styles.mailTitle}>
          <MailIcon /> Реєстрація через пошту
        </div>

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
            <MailIcon /> {loading ? 'Зачекайте...' : 'Зареєструватися'}
          </Button>
        </div>
      </form>
    </AuthCard>
  );
}
