import Head from 'next/head';
import styles from '../styles/main.module.css'

export default function Info() {
  return (
    <>
      <Head>
        <title>Information</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <body className = {styles.body}>
      <div className= {styles.hero}>
        <h1 className= {styles.heading}>INFORMATION</h1>
      </div>
      </body> */}
    </>
  );
}