
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
        <h1 className= {styles.heading}>HOME</h1>
      </div>
      </body>
    </>
  );
}