import { CpuIcon, DiskIcon, GearIcon, RamIcon } from '../Icons';
import Panel from '../Panel/Panel';
import styles from './SystemRequirements.module.css';

export default function SystemRequirements({
  cpu = '64-bit процесор (2 ядра, 2 ГГц)',
  ram = 'RAM: 2 ГБ',
  disk = 'Місце на диску: 5 ГБ',
}) {
  const rows = [
    { Icon: GearIcon, text: 'Мінімальні системні вимоги:' },
    { Icon: CpuIcon, text: cpu },
    { Icon: RamIcon, text: ram },
    { Icon: DiskIcon, text: disk },
  ];

  return (
    <Panel className={styles.specs}>
      {rows.map(({ Icon, text }) => (
        <div key={text} className={styles.row}>
          <Icon />
          <span>{text}</span>
        </div>
      ))}
    </Panel>
  );
}
