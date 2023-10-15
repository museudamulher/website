import Image from 'next/image';
import styles from './Article.module.css';
import AppWrapper from '@/components/AppWrapper/AppWrapper';
import ReturnButton from '@/components/ReturnButton/ReturnButton';
import { getDocumentBySlug } from 'outstatic/server';
import markdownToHtml from '@/services/markdownToHtml';

/* * */

const mimaColors = ['--mima-red', '--mima-green', '--mima-blue', '--mima-purple'];

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function getArticleBySlug(slug) {
  const post = getDocumentBySlug('articles', slug, ['title', 'publishedAt', 'slug', 'author', 'content', 'coverImage']);
  const content = await markdownToHtml(post.content || '');
  return { ...post, content };
}

/* * */

export default async function Article({ slug }) {
  //

  //
  // A. Fetch data

  const articleData = await getArticleBySlug(slug);

  //
  // B. Render components

  return (
    <AppWrapper>
      <div className={styles.container}>
        <ReturnButton url="/" />
        {articleData.coverImage && (
          <div className={styles.coverImage} style={{ backgroundColor: `var(${mimaColors[randomInteger(0, 3)]})` }}>
            <Image className={styles.title} src={articleData.coverImage} alt={articleData.title} fill sizes="100%" style={{ objectFit: 'cover' }} priority />
          </div>
        )}
        <div className={styles.title}>{articleData.title}</div>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: articleData.content }} />
      </div>
    </AppWrapper>
  );

  //
}
