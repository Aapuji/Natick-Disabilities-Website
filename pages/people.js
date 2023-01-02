import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/main.module.css'

export default function People() {
  console.log('STYLES.BODY: ' + styles.body);
  return <>
    <Layout title="Natick Commission on Disability">
      <h1>People</h1>
      <h1>HELLO</h1>
    </Layout>
  </>;
}