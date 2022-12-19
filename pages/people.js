import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function People() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Natick Commission on Disability</title>
      </Head>
      <Navbar />
      <h1>People</h1>
    </div>
  );
}