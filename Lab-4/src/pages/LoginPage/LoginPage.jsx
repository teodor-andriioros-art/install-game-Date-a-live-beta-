import { Link } from 'react-router-dom'
import AuthCard from '../../components/AuthCard/AuthCard'
import Button from '../../components/Button/Button'
import TextField from '../../components/TextField/TextField'
import { ArrowRight, EyeOffIcon, LockIcon, MailIcon } from '../../components/Icons'
import styles from './LoginPage.module.css'

export default function LoginPage() {
  return (
    <AuthCard
      title="Вхід"
      hint="Увійдіть у свій акаунт, щоб отримати доступ до гри."
      footer={
        <>
          Ще немає акаунта? <Link to="/register">Зареєструватися</Link> <ArrowRight />
        </>
      }
    >
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <TextField icon={<MailIcon />} type="email" placeholder="Ваша електронна пошта" />
        <TextField
          icon={<LockIcon />}
          trailingIcon={<EyeOffIcon />}
          type="password"
          placeholder="Пароль"
        />

        <div className={styles.submit}>
          <Button type="submit" block tech rounded large>
            Увійти
          </Button>
        </div>
      </form>
    </AuthCard>
  )
}
