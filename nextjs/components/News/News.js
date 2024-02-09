import styles from './News.module.css';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { getDocuments } from 'outstatic/server';
import NewsArticle from '@/components/NewsArticle/NewsArticle';
import AppWrapper from '../AppWrapper/AppWrapper';
import ReturnButton from '../ReturnButton/ReturnButton';

/* * */

async function getAllArticles() {
  return getDocuments('articles', ['title', 'slug', 'coverImage']);
}

/* * */

export default async function News() {
  //

  //
  // A. Fetch data

  const allArticlesDatas = await getAllArticles();

  //
  // B. Render components

  return (
    <AppWrapper>
      <div className={styles.container}>
        <ReturnButton url="/" />
        <SectionTitle pt="Notícias" en="News" />
        <div className={styles.articlesGrid}>
          {allArticlesDatas.map((article) => (
            <NewsArticle key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </AppWrapper>
  );

  //
}
