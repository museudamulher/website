import styles from './HomepageHistory.module.css';
import Link from 'next/link';
import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import iawmLogo from '../../public/images/iawm.png';

/* * */

export default function HomepageHistory() {
  return (
    <div className={styles.container}>
      <SectionTitle pt="História" en="History" />
      <div className={styles.titles}>
        <div className={styles.titlesPt}>
          <p>Nasceu a 8 de Março de 2016.</p>
          <p>Faz parte de uma grande família espalhada pelo mundo.</p>
          <p>Por enquanto é o único a falar português.</p>
        </div>
        <div className={styles.titlesEn}>
          <p>Born on March 8 2016.</p>
          <p>We are part of a large family spread around the world.</p>
          <p>So far we are the only Portuguese speaking museum.</p>
        </div>
      </div>
      <Link className={styles.badge} href="https://iawm.international/about-us/womens-museums/museums-list/" target="_blank">
        <Image src={iawmLogo} alt="IAWM Logo" sizes="100vw" style={{ width: '100%', height: 'auto' }} priority />
      </Link>
    </div>
  );
}
