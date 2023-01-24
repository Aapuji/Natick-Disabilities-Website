import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Resources.module.css'
import Dropdown from '../components/Dropdown';
import { useState } from 'react';

export default function Info() {
  const [selected, setSelected] = useState("")
  return <>
    <Layout title="Natick Commission on Disability">
      <Dropdown selected = {selected} setSelected = {setSelected} className = {styles.dropdownResources} />

      
    </Layout>
  </>;
}