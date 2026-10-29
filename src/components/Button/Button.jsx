import { Link } from 'react-router-dom'
import styles from './Button.module.css'

export default function Button({
  variant = 'outlineWhite',
  block,
  tech,
  rounded,
  large,
  to,
  type = 'button',
  children,
}) {
  let className = styles.btn + ' ' + styles[variant]

  if (block) {
    className = className + ' ' + styles.block
  }
  if (tech) {
    className = className + ' ' + styles.tech
  }
  if (rounded) {
    className = className + ' ' + styles.rounded
  }
  if (large) {
    className = className + ' ' + styles.large
  }

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={className}>
      {children}
    </button>
  )
}
