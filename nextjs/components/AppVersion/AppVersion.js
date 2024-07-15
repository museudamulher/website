/* * */

import styles from './AppVersion.module.css';
import pjson from '../../package.json';

/* * */

export default function AppVersion() {
  return <p className={styles.container}>{pjson.version}</p>;
}
