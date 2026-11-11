import { CalendarIcon } from '../Icons';
import styles from './AgeSelect.module.css';

const months = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
];

const currentYear = new Date().getFullYear();

const dayOptions = Array.from({ length: 31 }, (_, i) => ({
  value: i + 1,
  label: i + 1,
}));
const monthOptions = months.map((name, i) => ({ value: i, label: name }));
const yearOptions = Array.from({ length: 80 }, (_, i) => ({
  value: currentYear - i,
  label: currentYear - i,
}));

function Select({ label, options, value, onChange }) {
  return (
    <select
      className={styles.select}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="" disabled>
        {label}
      </option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

export default function AgeSelect({ birth, onChange }) {
  return (
    <fieldset className={styles.age}>
      <legend className={styles.label}>
        <CalendarIcon /> Вік:
      </legend>
      <div className={styles.selects}>
        <Select
          label="День"
          options={dayOptions}
          value={birth.day}
          onChange={(v) => onChange('day', v)}
        />
        <Select
          label="Місяць"
          options={monthOptions}
          value={birth.month}
          onChange={(v) => onChange('month', v)}
        />
        <Select
          label="Рік"
          options={yearOptions}
          value={birth.year}
          onChange={(v) => onChange('year', v)}
        />
      </div>
    </fieldset>
  );
}
