import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Resources.module.css';
import Dropdown from '../components/Dropdown';

export default function Resources() {
  return <>
    <Layout title="Resources" altText="... alt text goes here ..." hero>
      <Dropdown />
    </Layout>
  </>;
}