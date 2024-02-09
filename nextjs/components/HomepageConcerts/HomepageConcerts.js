/* * */

import { getDocuments } from 'outstatic/server';
import styles from './HomepageConcerts.module.css';
import LinkArticle from '@/components/LinkArticle/LinkArticle';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

/* * */

async function getAllConcerts() {
  return getDocuments('concerts', ['slug', 'coverImage', 'title', 'description', 'externalUrl']);
}

/* * */

export default async function HomepageConcerts() {
  //

  //
  // A. Fetch data

  const allConcertsData = await getAllConcerts();

  //
  // B. Render components

  return (
    <div className={styles.container}>
      <SectionTitle pt="Concertos" en="Concerts" />
      <div className={styles.articlesGrid}>{allConcertsData && allConcertsData.map((article) => <LinkArticle key={article.slug} article={article} />)}</div>
    </div>
  );

  //
}
