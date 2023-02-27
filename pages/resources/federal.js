import Head from 'next/head';
import Layout from '/components/Layout';
import  Hyperlink from '/components/Hyperlink'
import styles from '/styles/Federal.module.css'
import Dropdown from '/components/Dropdown';
import { useState } from 'react';
import Link from 'next/link';



export default function Federal() {
  return <>
    <Layout title="Natick Commission on Disability">
      <h1 className={styles.federalheading}>Links for Federal Resources</h1>

      <h2 className={styles.federalsectionheading}>Laws, Regulations, and Rules</h2>
      <div className={styles.federalsectioncontent}>
        <Hyperlink 
          url = "https://www.ada.gov/law-and-regs/title-ii-2010-regulations/"
          name = "Title II of the Americans with Disabilities Act (“ADA”)"
          desc = "Title II of the ADA relates to nondiscrimination on the basis of disability and in state and local government services. If you have questions about the ADA, call the U.S. Department of Justice ADA Information Line: 800-514-0301 (voice); 1-833-610-1264 (TTY)."
        />
        <Hyperlink 
          url = "https://www.dol.gov/agencies/oasam/centers-offices/civil-rights-center/statutes/section-504-rehabilitation-act-of-1973"
          name = "Section 504 of the Rehabilitation Act of 1973"
          desc = "Section 504 forbids organizations and employers from excluding or denying individual with disabilities an equal opportunity to receive program benefits and services. It defines the rights of individuals with disabilities to participate in, and have access to, program benefits and services. For more information, see the fact sheet below."
        />
        <Link className = {styles.factsheet} href="https://www.dol.gov/agencies/oasam/centers-offices/civil-rights-center/statutes/section-504-rehabilitation-act-of-1973">SECTION 504 FACT SHEET</Link>
        <Hyperlink 
          url = "https://www.govinfo.gov/content/pkg/USCODE-2009-title42/html/USCODE-2009-title42-chap45-subchapI.htm"
          name = "Fair Housing Amendments Act of 1988"
          desc = "The Fair Housing Act (also known as Title VIII of the Civil Rights Act of 1968), was amended in 1988 to prohibit discrimination in the sale, rental, and financing of dwellings, and in other housing-related transactions, based on disability. Discrimination includes a failure to make a change, exception, or adjustment to a policy, practice, procedure, or service when such accommodation may be necessary for an individual with a disability to enjoy and use housing."
        />
        <Hyperlink 
          url = "https://sites.ed.gov/idea/"
          name = "Individuals with Disabilities Education Act (“IDEA”)"
          desc = "The Individuals with Disabilities Education Act (IDEA) is a law that makes available a free appropriate public education to eligible children with disabilities throughout the nation and ensures special education and related services to those children."
        />
      </div>

      <h2 className = {styles.federalsectionheading}>Agencies and Other Resources</h2>
      <div className={styles.federalsectioncontent}>
        <Hyperlink 
          url = "https://archive.ada.gov/taman2.htm"
          name = "ADA Title II Technical Assistance Manual"
          desc = "This technical assistance manual addresses the requirements of title II of the Americans with Disabilities Act, which applies to the operations of State and local governments."
        />
        <Hyperlink 
          url = "https://www.hud.gov/program_offices/fair_housing_equal_opp/disability_main"
          name = "HUD Fair Housing Guidance and FAQs"
          desc = "Learn more about the many federal laws that help promote equal housing opportunity for individuals with disabilities"
        />
      </div>
    </Layout>
  </>;
}