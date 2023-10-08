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
              <h1 className={styles.header}>How to Use</h1>
              <p>This page features a menu with which you can choose different resource pages which will display useful links and other information related to those categories. Click the dropdown and then choose the category you want to see.</p>
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