import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Resources.module.css';
import Dropdown from '../components/Dropdown';
import Section from '../components/Section';

export default function Resources() {
  return <>
    <Layout title="Resources" altText="... alt text goes here ..." hero>
      <main>
        <Section id="resources" imgName="TODO">  
          <div className={styles.contentWrapper}>
            <div className={styles.contentLeft}>

            </div>
            <div className={styles.contentRight}>
              <Dropdown />  
            </div>  
          </div>
        </Section>
      </main>
    </Layout>
  </>;
}