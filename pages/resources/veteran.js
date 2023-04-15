import Head from 'next/head';
import Layout from '/components/Layout';
import  Hyperlink from '/components/Hyperlink'
import styles from '/styles/Veteran.module.css'
import Dropdown from '/components/Dropdown';
import { useState } from 'react';
import Link  from  'next/link';

//line 23: inline link for "We Created MassVeteran.com"

export default function Veteran() {
  return <>
    <Layout title="Natick Commission on Disability">
      <h1 className={styles.veteranheading}>Links for Other Local Resources and Information</h1>
      <div className={styles.veteransectioncontent}>
        <Hyperlink 
          url = "https://www.dav.org/"
          name = "Disabled American Veterans (DAV) – Natick Chapter 114"
          desc = "Disabled American Veterans is dedicated to empowering veterans to lead high-quality lives with respect and dignity by ensuring that veterans and their families can access the full range of benefits available to them; fighting for the interests of America’s injured heroes on Capitol Hill; and educating the public about the great sacrifices and needs of veterans transitioning back to civilian life."
        />
        <Hyperlink 
          url = "https://www.easterseals.com/ma/programs-and-services/military-veteran-services/"
          name = "Easterseals Massachusetts Military and Veteran Programs"
          desc = "Easterseals Massachusetts Military & Veteran programs strives to ensure that members of our military and Veteran community adjust back into our communities after their service. We created MassVeteran.com as a resource for Veterans to find information on various benefits, connect to resources in Massachusetts, register for activities and events, and explore other ways to get involved."
        />
      </div>
    </Layout>
  </>;
}