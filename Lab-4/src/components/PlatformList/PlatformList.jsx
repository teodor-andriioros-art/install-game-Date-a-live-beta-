import { AppleIcon, LinuxIcon, WindowsIcon } from '../Icons'
import Panel from '../Panel/Panel'
import styles from './PlatformList.module.css'

export default function PlatformList() {
  return (
    <Panel>
      <ul className={styles.list}>
        <li className={styles.item}>
          <WindowsIcon /> Windows
        </li>
        <li className={styles.item}>
          <LinuxIcon /> Linux
        </li>
        <li className={styles.item}>
          <AppleIcon /> Mac OS
        </li>
      </ul>
    </Panel>
  )
}
