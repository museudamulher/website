/* * */

import { getDocuments } from 'outstatic/server';
import styles from './HomepageLinks.module.css';
import LinkArticle from '@/components/LinkArticle/LinkArticle';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

/* * */

async function getAllLinks() {
  return getDocuments('links', ['slug', 'coverImage', 'title', 'description', 'externalUrl']);
}

/* * */

export default async function HomepageLinks() {
  //

  //
  // A. Fetch data

  const allLinksData = await getAllLinks();

  //
  // B. Render components

  return (
    <div className={styles.container}>
      <SectionTitle pt="Programas" en="Shows" />
      <div className={styles.articlesGrid}>
        {allLinksData.map((article) => (
          <LinkArticle key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );

  //
}
