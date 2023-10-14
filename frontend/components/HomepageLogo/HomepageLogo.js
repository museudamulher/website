import Image from 'next/image';
import styles from './HomepageLogo.module.css';
import mimaLogo from '../../public/images/mima-logo.svg';

export default function HomepageLogo() {
  return (
    <div className={styles.container}>
      <Image src={mimaLogo} alt="MIMA Logo" sizes="100vw" style={{ width: '100%', height: 'auto' }} priority />
    </div>
  );
}
