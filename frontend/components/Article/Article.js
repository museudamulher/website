import Image from 'next/image';
import styles from './Article.module.css';
import AppWrapper from '@/components/AppWrapper/AppWrapper';
import ReturnButton from '@/components/ReturnButton/ReturnButton';

/* * */

const mimaColors = ['--mima-red', '--mima-green', '--mima-blue', '--mima-purple'];

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* * */

export default async function Article({ article }) {
  return (
    <AppWrapper>
      <div className={styles.container}>
        <ReturnButton url="/" />
        {article.coverImage && (
          <div className={styles.coverImage} style={{ backgroundColor: `var(${mimaColors[randomInteger(0, 3)]})` }}>
            <Image className={styles.title} src={article.coverImage} alt={article.title} fill sizes="100%" style={{ objectFit: 'cover' }} priority />
          </div>
        )}
        <div className={styles.title}>{article.title}</div>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
    </AppWrapper>
  );
}
