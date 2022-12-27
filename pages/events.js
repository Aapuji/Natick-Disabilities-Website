import Head from 'next/head';
import styles from '../styles/main.module.css'

export default function Events() {
  return (
    <>
      <Head>
        <title>Events</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body className = {styles.body}>
      <div className= {styles.hero}>
        <h1 className= {styles.heading}>EVENTS</h1>
      </div>
      </body>
    </>
  );
}