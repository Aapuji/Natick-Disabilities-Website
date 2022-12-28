import Head from 'next/head';
import styles from '../styles/main.module.css'

const People = () => {
  console.log('STYLES.BODY: ' + styles.body);
  return (
    <>
      <Head>
        <title>People</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className = {styles.body}>
        <div className= {styles.hero}>
          <h1 className= {styles.heading}>PEOPLE</h1>
        </div>
      </div>
    </>
  );
}

export default People;