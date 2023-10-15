import Article from '@/components/Article/Article';

/* * */

export default function Page({ params }) {
  return <Article slug={params.slug} />;
}
