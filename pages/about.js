import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Natick Commission on Disability</title>
      </Head>
      <Navbar />
      <h1>About</h1>
    </div>
  );
}
