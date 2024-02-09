import styles from './HomepageFuture.module.css';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

/* * */

export default function HomepageFuture() {
  return (
    <div className={styles.container}>
      <SectionTitle pt="Futuro" en="Future" />
      <div className={styles.titles}>
        <div className={styles.titlesPt}>
          <p>Vamos expor o passado e divulgar o presente.</p>
          <p>Construir um acervo feito de factos, não de mitos.</p>
          <p>Sempre com rigor e imaginação.</p>
        </div>
        <div className={styles.titlesEn}>
          <p>We will expose the past and promote the present.</p>
          <p>We will build a collection made of facts and not myths,</p>
          <p>always with accuracy and imagination.</p>
        </div>
      </div>
    </div>
  );
}
