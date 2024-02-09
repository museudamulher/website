/* * */

import styles from './SectionTitle.module.css';

/* * */

export default function SectionTitle({ pt = '', en = '' }) {
  return (
    <h3 className={styles.title}>
      <span className={styles.pt}>{pt}</span> / {en}
    </h3>
  );
}
