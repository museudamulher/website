/* * */

import styles from './Documents.module.css';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { getDocuments } from 'outstatic/server';
import AppWrapper from '@/components/AppWrapper/AppWrapper';
import ReturnButton from '@/components/ReturnButton/ReturnButton';
import DocumentArticle from '@/components/DocumentArticle/DocumentArticle';

/* * */

async function getAllDocuments() {
  return getDocuments('documents', ['title', 'slug', 'content', 'fileName']);
}

/* * */

export default async function Documents() {
  //

  //
  // A. Fetch data

  const allDocumentsDatas = await getAllDocuments();

  //
  // B. Render components

  return (
    <AppWrapper>
      <div className={styles.container}>
        <ReturnButton url="/" />
        <SectionTitle pt="Documentos" en="Documents" />
        <div className={styles.documentsGrid}>
          {allDocumentsDatas.map((document) => (
            <DocumentArticle key={document.slug} article={document} />
          ))}
        </div>
      </div>
    </AppWrapper>
  );

  //
}
