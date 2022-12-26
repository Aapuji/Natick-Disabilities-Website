
import Head from 'next/head';
import styles from '../styles/main.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className = {styles.hero}>
        <h1 className = {styles.heading}>Home</h1>
      </div>
    </>
  );
}