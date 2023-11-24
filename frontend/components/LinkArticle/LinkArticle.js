/* * */

import Image from 'next/image';
import styles from './LinkArticle.module.css';
import Link from 'next/link';

/* * */

const mimaColors = ['--mima-red', '--mima-green', '--mima-blue', '--mima-purple'];

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* * */

export default async function LinkArticle({ article }) {
  return (
    <Link className={styles.container} href={article.externalUrl} target="_blank">
      <div className={styles.coverImage} style={{ backgroundColor: `var(${mimaColors[randomInteger(0, 3)]})` }}>
        {article.coverImage && <Image className={styles.title} src={article.coverImage} alt={article.title} fill sizes="100%" style={{ objectFit: 'cover' }} priority />}
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{article.title}</div>
        <div className={styles.description}>{article.description}</div>
      </div>
    </Link>
  );
}
