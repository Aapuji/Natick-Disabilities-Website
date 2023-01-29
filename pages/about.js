import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/About.module.css';
import Image from 'next/image';

export default function About() {
  return <>
    <Layout title="Natick Commission on Disability">
      <div className={styles.aboutcontent}>
        <h1>About the Commission</h1>
        <div className={styles.purpose}>
          <div className={styles.headingBGM}>
            <h3>Background and Mission Statement</h3>
            <p className={styles.textBGM}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum neque egestas congue quisque. Ac tortor dignissim convallis aenean et. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Dolor morbi non arcu risus quis. Malesuada fames ac turpis egestas maecenas pharetra convallis. Parturient montes nascetur ridiculus mus. Felis imperdiet proin fermentum leo vel orci porta. Eu volutpat odio facilisis mauris sit amet massa vitae.</p>
          </div>
          <div>
            <Image className = {styles.aboutImg} alt = ""></Image>
          </div>
        </div>

        <div className={styles.purpose}>
          <div className={styles.headingHIS}>
            <h3>Our History</h3>
            <p className={styles.textBGM}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum neque egestas congue quisque. Ac tortor dignissim convallis aenean et. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Dolor morbi non arcu risus quis. Malesuada fames ac turpis egestas maecenas pharetra convallis. Parturient montes nascetur ridiculus mus. Felis imperdiet proin fermentum leo vel orci porta. Eu volutpat odio facilisis mauris sit amet massa vitae.</p>
          </div>
          <div>
            <Image className = {styles.aboutImg} alt = ""></Image>
          </div>
        </div>


      </div>
    </Layout>
  </>;
}
//error: bg.jpg missing width property