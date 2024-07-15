/* * */

import AppVersion from '../AppVersion/AppVersion';
import styles from './AppWrapper.module.css';

/* * */

export default function AppWrapper({ children }) {
  return (
  		<div className={styles.container}>
			{children}
			<AppVersion />
		</div>
	);
}
