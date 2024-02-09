import Link from 'next/link';
import styles from './ReturnButton.module.css';
import { IconArrowBackUp } from '@tabler/icons-react';

/* * */

export default async function ReturnButton({ url }) {
  return (
    <Link href={url} className={styles.container}>
      <IconArrowBackUp size={18} />
      Voltar / Return
    </Link>
  );
}
