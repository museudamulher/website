import styles from './HomepageNews.module.css';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { getDocuments } from 'outstatic/server';
import HomepageNewsArticle from '../HomepageNewsArticle/HomepageNewsArticle';

/* * */

async function getAllArticles() {
  return getDocuments('articles', ['title', 'slug', 'coverImage']);
}

/* * */

export default async function HomepageNews() {
  //

  //
  // A. Fetch data

  const allArticlesDatas = await getAllArticles();
  console.log(allArticlesDatas);

  //
  // B. Render components

  return (
    <div className={styles.container}>
      <SectionTitle pt="Notícias" en="News" />
      <div className={styles.articlesGrid}>
        {allArticlesDatas.map((article) => (
          <HomepageNewsArticle key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );

  //
}
