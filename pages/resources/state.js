import Head from 'next/head';
import Layout from '/components/Layout';
import  Hyperlink from '/components/Hyperlink'
import styles from '/styles/State.module.css'
import Dropdown from '/components/Dropdown';

import { useState } from 'react';

export default function State() {
  return <>
    <Layout title="Natick Commission on Disability">
      <div className={styles.stateheading}>
        <h1>Links for Massachussetts State Resources</h1>
      </div>
      <div className={styles.statecontent}>
        <Hyperlink 
          url = "https://google.com"
          name = "Google"
          desc = "The company that stole billions of dollars from devs idea when he was a youngin"
        />
        <Hyperlink 
          url = "https://google.com"
          name = "Google"
          desc = "The company that stole billions of dollars from devs idea when he was a youngin"
        />
        <Hyperlink 
          url = "https://google.com"
          name = "Google"
          desc = "The company that stole billions of dollars from devs idea when he was a youngin"
        />
        <Hyperlink 
          url = "https://google.com"
          name = "Google"
          desc = "The company that stole billions of dollars from devs idea when he was a youngin"
        />
        <Hyperlink 
          url = "https://google.com"
          name = "Google"
          desc = "The company that stole billions of dollars from devs idea when he was a youngin"
        />
        <Hyperlink 
          url = "https://google.com"
          name = "Google"
          desc = "The company that stole billions of dollars from devs idea when he was a youngin"
        />
        <Hyperlink 
          url = "https://google.com"
          name = "Google"
          desc = "The company that stole billions of dollars from devs idea when he was a youngin"
        />
        <Hyperlink 
          url = "https://google.com"
          name = "Google"
          desc = "The company that stole billions of dollars from devs idea when he was a youngin"
        />  
      </div>
    </Layout>
  </>;
}