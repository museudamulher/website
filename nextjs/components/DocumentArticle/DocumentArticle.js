/* * */

import Link from 'next/link';
import styles from './DocumentArticle.module.css';

/* * */

const mimaColors = ['--mima-red', '--mima-green', '--mima-blue', '--mima-purple'];

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* * */

export default async function DocumentArticle({ article }) {
  return (
    <Link className={styles.container} href={`/docs/${article.fileName}`} target={article.fileName ? '_blank' : '_self'}>
      <div className={styles.colorLine} style={{ backgroundColor: `var(${mimaColors[randomInteger(0, 3)]})` }} />
      <div className={styles.content}>
        <div className={styles.title}>{article.title}</div>
        {article.content && <div className={styles.description}>{article.content}</div>}
      </div>
    </Link>
  );
}
