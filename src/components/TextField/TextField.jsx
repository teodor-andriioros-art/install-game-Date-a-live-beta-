import styles from './TextField.module.css'

export default function TextField({ icon, trailingIcon, ...inputProps }) {
  return (
    <label className={styles.field}>
      {icon}
      <input className={styles.input} {...inputProps} />
      {trailingIcon && <span className={styles.trailing}>{trailingIcon}</span>}
    </label>
  )
}
