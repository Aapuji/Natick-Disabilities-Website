import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'


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