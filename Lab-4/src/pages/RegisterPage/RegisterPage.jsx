import { Link } from 'react-router-dom'
import AuthCard from '../../components/AuthCard/AuthCard'
import AgeSelect from '../../components/AgeSelect/AgeSelect'
import Button from '../../components/Button/Button'
import TextField from '../../components/TextField/TextField'
import { ArrowRight, EyeOffIcon, LockIcon, MailIcon } from '../../components/Icons'
import styles from './RegisterPage.module.css'

export default function RegisterPage() {
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
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <AgeSelect />

        <Button to="/main" block tech rounded>
          Увійти без реєстрації
        </Button>

        <div className={styles.mailTitle}>
          <MailIcon /> Реєстрація через пошту
        </div>

        <TextField icon={<MailIcon />} type="email" placeholder="Ваша електронна пошта" />
        <TextField
          icon={<LockIcon />}
          trailingIcon={<EyeOffIcon />}
          type="password"
          placeholder="Пароль"
        />

        <div className={styles.submit}>
          <Button type="submit" block tech rounded large>
            <MailIcon /> Зареєструватися
          </Button>
        </div>
      </form>
    </AuthCard>
  )
}
