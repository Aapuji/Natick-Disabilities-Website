
import Head from 'next/head';
import styles from '../styles/main.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body className = {styles.body}>
      <div className= {styles.hero}>
        <p className= {styles.headingHome}>Welcome to the Official Natick Commission on Disability Website</p>
      </div>
      </body>
    </>
  );
}