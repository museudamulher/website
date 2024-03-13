/* * */

import Document from '@/components/Document/Document';

/* * */

export default function Page({ params }) {
  return <Document slug={params.slug} />;
}
