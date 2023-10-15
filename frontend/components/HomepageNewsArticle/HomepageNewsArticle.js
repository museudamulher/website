import Image from 'next/image';
import styles from './HomepageNewsArticle.module.css';
import Link from 'next/link';

/* * */

export default async function HomepageNewsArticle({ article }) {
  return (
    <Link href={`/news/${article.slug}`} className={styles.container}>
      <div className={styles.coverImage}>
        <Image className={styles.title} src={article.coverImage} alt={article.title} fill sizes="100%" style={{ objectFit: 'cover' }} priority />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{article.title}</div>
      </div>
    </Link>
  );
}
