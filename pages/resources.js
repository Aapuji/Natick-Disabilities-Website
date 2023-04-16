import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Resources.module.css'
import Dropdown from '../components/Dropdown';
import { useState } from 'react';

export default function Resources() {
  return <>
    <Layout title="Resources" altText="... alt text goes here ..." hero>
      <Dropdown />
      <h4>THIS IS TO KEEP THE FOOTER FROM HITTING THE BOTTOM</h4>
      <h4>THIS IS TO KEEP THE FOOTER FROM HITTING THE BOTTOM</h4>
      <h4>THIS IS TO KEEP THE FOOTER FROM HITTING THE BOTTOM</h4>
      <h4>THIS IS TO KEEP THE FOOTER FROM HITTING THE BOTTOM</h4>
      <h4>THIS IS TO KEEP THE FOOTER FROM HITTING THE BOTTOM</h4>
      <h4>THIS IS TO KEEP THE FOOTER FROM HITTING THE BOTTOM</h4>
    </Layout>
  </>;
}