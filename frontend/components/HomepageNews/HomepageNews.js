import styles from './HomepageNews.module.css';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { getDocuments } from 'outstatic/server';
import NewsArticle from '@/components/NewsArticle/NewsArticle';
import Link from 'next/link';

/* * */

async function getAllArticles() {
  return getDocuments('articles', ['title', 'slug', 'coverImage']);
}

/* * */

export default async function HomepageNews() {
  //

  //
  // A. Fetch data

  const allArticlesData = await getAllArticles();

  //
  // B. Render components

  return (
    <div className={styles.container}>
      <Link href="/news">
        <SectionTitle pt="Notícias" en="News" />
      </Link>
      <div className={styles.articlesGrid}>
        {allArticlesData.map((article) => (
          <NewsArticle key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );

  //
}
