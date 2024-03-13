'use client';

import Link from 'next/link';
import styles from './HomepageIntro.module.css';

/* * */

export default function HomepageIntro() {
  //

  //
  // A. Render components

  return (
    <div className={styles.container}>
      <div className={styles.titles}>
        <div className={styles.titlesPt}>
          <h1>Uma associação de Homens e Mulheres.</h1>
          <h1>Um museu de Género onde todos cabem.</h1>
          <h1>Porque excluir não faz o nosso género.</h1>
        </div>
        <div className={styles.titlesEn}>
          <h2>A not for profit association of men and women.</h2>
          <h2>A Gender museum where everyone fits.</h2>
          <h2>Because we are not about exclusion.</h2>
        </div>
      </div>
      <div className={styles.links}>
        <p className={styles.linkPt}>
          Pode consultar os Estatutos desta instituição e outros documentos <Link href="/documents">aqui</Link>.
        </p>
        <p className={styles.linkEn}>
          Our legal statutes and other documents can be found <Link href="/documents">here</Link>.
        </p>
      </div>
    </div>
  );

  //
}
