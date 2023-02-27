import Head from 'next/head';
import Layout from '/components/Layout';
import  Hyperlink from '/components/Hyperlink'
import styles from '/styles/Federal.module.css'
import Dropdown from '/components/Dropdown';
import { useState } from 'react';
import Link from 'next/link';



export default function Natick() {
  return <>
    <Layout title="Natick Commission on Disability">
      <h1 className={styles.federalheading}>Links for Federal Resources</h1>

      <h2 className={styles.federalsectionheading}>Laws, Regulations, and Rules</h2>
      <div className={styles.federalsectioncontent}>
        <Hyperlink 
          url = "https://www.something.com"
          name = "Town of Natick ADA Grievance Procedure"
          desc = "Something"
        />
        <Hyperlink 
          url = "https://www.something.com"
          name = "Natick Transition Plan"
          desc = "Something"
        />
      </div>

      <h2 className = {styles.federalsectionheading}>Agencies and Other Resources</h2>
      <div className={styles.federalsectioncontent}>
        <Hyperlink 
          url = "https://www.natickma.gov/396/Commission-on-Disability"
          name = "Commission on Disability"
          desc = "Natick’s COD promotes the inclusion of people with disabilities in all aspects of community life. For more information contact COD at (email address to come)"
        />
        <Hyperlink 
          url = "https://www.natickma.gov/1609/ADA-Coordinator"
          name = "ADA Coordinator"
          desc = "Natick’s ADA Coordinator is a local point of contact and resource if you have questions or concerns about the application of the ADA in Natick."
        />
        <Hyperlink 
          url = "https://www.natickma.gov/626/Council-on-Aging-Human-Services"
          name = "Council on Aging"
          desc = "The Council on Aging seeks to provide an array of activities, programs and services to meet the educational, social, health and wellness of elders, families and individuals with disabilities living in the community. Alone and in partnership with community organizations and other town departments, the Council on Aging focuses on empowering Natick residents of all incomes and abilities to make informed decisions, to remain actively engaged, and to maintain their health, vitality and independence."
        />
        <Hyperlink 
          url = "https://www.natickma.gov/591/Veterans-Services"
          name = "Veterans Services"
          desc = "Veterans Services is responsible for the needs of the veterans of Natick and their dependents. It assists in filing for Veterans Benefits Program, which is a state-run program, or filing for federal benefits, such as, Veterans Affairs (VA) service-connected or non-service-connected disabilities or compensation."
        />
        <Hyperlink 
          url = "https://www.sepacnatick.org/"
          name = "Special Education Parent Advisory Council (SEPAC)"
          desc = "The Natick Special Education Parent Advisory Council (SEPAC) is an all-volunteer organization of parents and caregivers of children receiving support services in the Natick public schools and private school settings. In the Natick school system, there are more than 800 children on Individualized Education Plans (IEP), and 504 plans. Whether your child is already receiving support, or you are trying to determine if your child needs services, we are here to provide a parent’s perspective and connections."
        />
      </div>
    </Layout>
  </>;
}