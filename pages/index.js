import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import utils from '../styles/utils.module.css';

export default function Home() {
  return <>
    <Layout title="Natick Commission on Disability" home>
      <hr className={utils.blue}/>
      <main id={styles.main}>
        <section id="emergencyInfo">
          <div className={`${styles.sectionHeaderImg} ${utils.imgContainer}`}>  
            <Image
              //src = {bgImg} Will be like the header images in https://natickma.gov
              fill
              name="Emergency Information Title Image" 
              alt='/'
              style={{backgroundColor: 'green'}}
            /> 
          </div>
          <h1>Welcome to the Natick Commission on Disability!</h1>
          <h1>Emergency Information</h1>
        </section>
      </main>
    </Layout>
  </>;
}

/*





*/