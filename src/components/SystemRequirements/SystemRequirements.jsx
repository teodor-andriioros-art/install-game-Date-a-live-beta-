import { CpuIcon, DiskIcon, GearIcon, RamIcon } from '../Icons'
import Panel from '../Panel/Panel'
import styles from './SystemRequirements.module.css'

const rows = [
  { Icon: GearIcon, text: 'Мінімальні системні вимоги:' },
  { Icon: CpuIcon, text: '64-bit процесор (2 ядра, 2 ГГц)' },
  { Icon: RamIcon, text: 'RAM: 2 ГБ' },
  { Icon: DiskIcon, text: 'Місце на диску: 5 ГБ' },
]

export default function SystemRequirements() {
  return (
    <Panel className={styles.specs}>
      {rows.map(({ Icon, text }) => (
        <div key={text} className={styles.row}>
          <Icon />
          <span>{text}</span>
        </div>
      ))}
    </Panel>
  )
}
