import styles from './HomepageContacts.module.css';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

/* * */

export default function HomepageContacts() {
  return (
    <div className={styles.container}>
      <SectionTitle pt="Contactos" en="Contacts" />
      <div className={styles.titles}>
        <div className={styles.titlesPt}>
          <p>Envie-nos o seu contacto para o mantermos informado.</p>
          <p>Em alternativa, envie-nos um email para mima@museudamulher.com</p>
        </div>
        <div className={styles.titlesEn}>
          <p>Send us a message so we can keep you informed.</p>
          <p>Alternatively, send us an email to mima@museudamulher.com</p>
        </div>
      </div>
    </div>
  );
}
