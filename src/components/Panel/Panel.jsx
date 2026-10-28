import styles from './Panel.module.css'

export default function Panel({ strong, className, children }) {
  let allClasses = styles.panel

  if (strong) {
    allClasses = allClasses + ' ' + styles.strong
  }
  if (className) {
    allClasses = allClasses + ' ' + className
  }

  return <div className={allClasses}>{children}</div>
}
