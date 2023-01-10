import Layout from '../components/Layout';
import Section from '../components/Section';
import styles from '../styles/Home.module.css';
import utils from '../styles/utils.module.css';

export default function Home() {
  return <>
    <Layout title="Natick Commission on Disability" home>
      <main id={styles.main}>
        <hr />
        <Section id="emergencyInfo" imgName="Emergency Information" title="Emergency Information" subtitle="Get guidance and support.">
          <br />
          <br />
        </Section>
        <br />
        <Section id="whatIsNCOD" imgName="What is Commission on Disability" title="What is the Commission on Disability?" subtitle="A brief overview of the commission and its values.">
          <br />
          <br />
        </Section>
        <Section id="recentEvents" imgName="Recent Events" title="Recent and Upcoming Events" subtitle="Stay up to date with the latest events.">

        </Section>
      </main>
    </Layout>
  </>;
}
