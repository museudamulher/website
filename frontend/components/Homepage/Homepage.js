import styles from './Homepage.module.css';
import AppWrapper from '@/components/AppWrapper/AppWrapper';
import HomepageLogo from '@/components/HomepageLogo/HomepageLogo';
import HomepageIntro from '@/components/HomepageIntro/HomepageIntro';
import HomepageNews from '@/components/HomepageNews/HomepageNews';
import HomepageLinks from '@/components/HomepageLinks/HomepageLinks';
import HomepageHistory from '@/components/HomepageHistory/HomepageHistory';
import HomepageFuture from '@/components/HomepageFuture/HomepageFuture';
import HomepageContacts from '@/components/HomepageContacts/HomepageContacts';

/* * */

export default function Homepage() {
  //

  //
  // A. Render components

  return (
    <AppWrapper>
      <div className={styles.container}>
        <HomepageLogo />
        <HomepageIntro />
        <HomepageNews />
        <HomepageLinks />
        <HomepageHistory />
        <HomepageFuture />
        <HomepageContacts />
      </div>
    </AppWrapper>
  );

  //
}
