import Article from '@/components/Article/Article';
import markdownToHtml from '@/services/markdownToHtml';
import { getDocumentBySlug } from 'outstatic/server';

/* * */

async function getArticle(slug) {
  const post = getDocumentBySlug('articles', slug, ['title', 'publishedAt', 'slug', 'author', 'content', 'coverImage']);
  const content = await markdownToHtml(post.content || '');
  return { ...post, content };
}

/* * */

export default async function Page({ params }) {
  //

  //
  // A. Fetch data

  const articleData = await getArticle(params.slug);

  //
  // B. Render components

  return <Article article={articleData} />;

  //
}
