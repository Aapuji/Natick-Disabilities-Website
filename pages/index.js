import Layout from '../components/Layout';
import Section from '../components/Section';
import styles from '../styles/Home.module.css';
import utils from '../styles/utils.module.css';

export default function Home() {
  return <>
    <Layout title="Natick Commission on Disability" home>
      <main id={styles.main}>
        <Section id="emergencyInfo" imgName="Emergency Information" title="Emergency Information">
        </Section>
      </main>
    </Layout>
  </>;
}
