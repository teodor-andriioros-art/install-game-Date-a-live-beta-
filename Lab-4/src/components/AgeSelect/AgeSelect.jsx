import { CalendarIcon } from '../Icons'
import styles from './AgeSelect.module.css'

const months = [
  'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
  'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень',
]
const days = Array.from({ length: 31 }, (_, i) => i + 1)
const years = Array.from({ length: 80 }, (_, i) => 2012 - i)

function Select({ label, options }) {
  return (
    <select className={styles.select} defaultValue="">
      <option value="" disabled>
        {label}
      </option>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  )
}

export default function AgeSelect() {
  return (
    <fieldset className={styles.age}>
      <legend className={styles.label}>
        <CalendarIcon /> Вік:
      </legend>
      <div className={styles.selects}>
        <Select label="День" options={days} />
        <Select label="Місяць" options={months} />
        <Select label="Рік" options={years} />
      </div>
    </fieldset>
  )
}
