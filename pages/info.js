import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Information() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Natick Commission on Disability</title>
      </Head>
      <Navbar />
      <h1>Information</h1>
    </div>
  );
}