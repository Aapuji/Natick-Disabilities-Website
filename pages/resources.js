import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Resources.module.css'
import Dropdown from '../components/Dropdown';
import { useState } from 'react';

export default function Resources() {
  return <>
    <Layout title="Natick Commission on Disability">
      <Dropdown/>
    </Layout>
  </>;
}