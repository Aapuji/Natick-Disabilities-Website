import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Resources.module.css';
import Dropdown from '../components/Dropdown';
import Section from '../components/Section';

export default function Resources() {
  return <>
    <Layout title="Resources" altText="... alt text goes here ..." hero>
      <main>
        <Section id="resources" imgName="TODO">  
          <div className={styles.contentWrapper}>
            <div className={styles.contentLeft}>
              <h1 className={styles.header}>Why?</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum neque egestas congue quisque. Ac tortor dignissim convallis aenean et. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Dolor morbi non arcu risus quis. Malesuada fames ac turpis egestas maecenas pharetra convallis. Parturient montes nascetur ridiculus mus. Felis imperdiet proin fermentum leo vel orci porta. Eu volutpat odio facilisis mauris sit amet massa vitae.</p>
            </div>
            <div className={styles.contentRight}>
              <Dropdown />  
            </div>  
          </div>
        </Section>
      </main>
    </Layout>
  </>;
}