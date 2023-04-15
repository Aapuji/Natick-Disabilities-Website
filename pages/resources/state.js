import Head from 'next/head';
import Layout from '/components/Layout';
import  Hyperlink from '/components/Hyperlink'
import styles from '/styles/State.module.css'
import Dropdown from '/components/Dropdown';
import { useState } from 'react';
import Link  from  'next/link';

//MassAccess (lines _-_) has links for "rental homes" and "home ownership" in the description
//LINE 118: To find accessible and affordable <Link> rental homes </Link> and home ownership opportunities in Massachusetts.


export default function State() {
  return <>
    <Layout title="Natick Commission on Disability">
      <h1 className={styles.stateheading}>Links for Massachussetts State Resources</h1>

      <h2 className={styles.statesectionheading}>Laws, Regulations, and Rules</h2>
      <div className={styles.statesectioncontent}>
        <Hyperlink 
          url = "https://www.mass.gov/fair-housing-law"
          name = "Massachusetts Fair Housing Law"
          desc = "State and federal law prohibit discrimination in the sale and rental of housing by property owners, landlords, property managers, mortgage lenders, and real estate agents. These fair housing laws make it unlawful to discriminate based on race, color, national origin, gender, gender identity, sexual orientation, disability, ancestry, genetic information, marital status, veteran or active military status, age, famillial status (i.e., children), and source of income (i.e., Section 8 voucher)."
        />
        <Hyperlink 
          url = "https://www.mass.gov/info-details/overview-of-housing-discrimination"
          name = "Massachusetts Commission Against Discrimination (Housing, Service Animals)"
          desc = "MCAD enforces the anti-discrimination laws of Massachusetts which protects you if are treated differently or unfairly based on your membership in a protected class by your landlord or condo association, and when you are seeking new housing."
        />
      </div>

      <h2 className = {styles.statesectionheading}>Agencies and Other Resources</h2>
      <div className={styles.statesectioncontent}>
        <Hyperlink
          url = "https://www.mass.gov/orgs/massachusetts-office-on-disability"
          name = "Massachusetts Office on Disability (MOD)"
          desc = "The Massachusetts Office on Disability (MOD) works to ensure that people with disabilities can equally participate in all aspects of life in Massachusetts. MOD serves as a resource to state agencies, municipalities, and members of the general public by providing information, guidance and training on matters concerning disability-related civil rights, equal access, and opportunity."
        />
        <Hyperlink
          url = "https://www.mass.gov/orgs/architectural-access-board"
          name = "Massachusetts Architectural Access Board (521 CMR)"
          desc = "The Architectural Access Board (AAB) develops and enforces regulations designed to make public buildings accessible to, functional for, and safe for use by persons with disabilities."
        />
        <Hyperlink
          url = "https://www.mass.gov/orgs/disabled-persons-protection-commission"
          name = "Disability Persons Protection Commission"
          desc = "DPPC protects adults with disabilities from the abusive acts or omissions of their caregivers through investigation oversight, public awareness, and prevention."
        />
        <Hyperlink
          url = "https://www.mass.gov/orgs/massachusetts-rehabilitation-commission"
          name = "Massachusetts Rehabilitation Commission (MRC)"
          desc = "The Massachusetts Rehabilitation Commission (MRC) provides services that break down barriers and empower people with disabilities to live life in their own terms. Our programs focus on training and employment, community living, and disability determination for federal benefit programs."
        />
        <Hyperlink
          url = "https://www.mass.gov/orgs/massachusetts-commission-against-discrimination"
          name = "Massachusetts Commission Against Discrimination"
          desc = "The MCAD is the independent state agency that enforces the Massachusetts anti-discrimination laws by investigating Discrimination Complaints to determine if the case may proceed to conciliation or a public hearing at the Commission. The MCAD also offers remedial and preventive training, and publishes resources online such as model policies, posters, and guides."
        />
        <Hyperlink
          url = "https://www.mass.gov/orgs/massachusetts-commission-for-the-blind"
          name = "Massachusetts Commission for the Blind (MCB)"
          desc = "MCB services individuals in Massachusetts who are legally blind by providing access to employment opportunities and social rehabilitation with the goal of increasing independence and self-determination."
        />
        <Hyperlink
          url = "https://www.mass.gov/orgs/massachusetts-commission-for-the-deaf-and-hard-of-hearing"
          name = "Massachusetts Commission for Deaf & Hard of Hearing (MCDHH)"
          desc = "MCDHH provides accessible communication, education, and advocacy to consumers and private and public entities so that programs, services, and opportunities throughout Massachusetts are fully accessible to persons who are deaf and hard of hearing."
        />
        <Hyperlink
          url = "https://www.mass.gov/orgs/department-of-developmental-services"
          name = "Massachusetts Department of Developmental Services"
          desc = "Provides supports for individuals with intellectual and developmental disabilities including Autism Spectrum Disorders."
        />
        <Hyperlink
          url = "https://www.mass.gov/orgs/massachusetts-department-of-mental-health"
          name = "Massachusetts Department of Mental Health"
          desc = "Provides access to services and supports to meet the mental health needs of individuals of all ages."
        />
        <Hyperlink
          url = "http://www.section8listmass.org"
          name = "Massachusetts – Section 8 Housing Choice Voucher Centralized Waiting List"
          desc = "The Section 8 housing choice voucher program assists very low-income families, the elderly, and the disabled to afford decent, safe, and sanitary housing in the private market."
        />
        <Hyperlink
          url = "https://www.mass.gov/topics/masshealth"
          name = "MassHealth"
          desc = "MassHealth is the Medicaid program for Massachusetts providing health benefits and assistance for those with low income."
        />
        <Hyperlink
          url = "https://www.dlc-ma.org/"
          name = "Disability Law Center"
          desc = "The Disability Law Center (DLC) is the Protection and Advocacy (P&A) agency for Massachusetts. DLC is a private, non-profit organization responsible for providing protection and advocacy for the rights of Massachusetts residents with disabilities."
        />
        <Hyperlink
          url = "https://www.mass.gov/how-to/apply-for-a-discounted-communications-service-through-the-lifeline-program"
          name = "Department of Telecommunications and Cable – Lifeline Program"
          desc = "Lifeline is a federal program that provides free or low-cost phone or internet service to low-income households through a monthly service discount of up to $9.25. Lifeline subscribers have the choice of applying their benefit discount to either (1) home phone service; (2) home internet service, where available, or (3) a wireless phone plan with data."
        />
        <Hyperlink
          url = "https://www.mass.gov/massachusetts-equipment-distribution-program-massedp"
          name = "Massachusetts Equipment Distribution Program"
          desc = "MassEDP offers specialized telephones, both wireline and wireless to residents who have permanent disabilities. You may be able to get these telephones for free or at reduced cost. Please note, for wireless devices MassEDP DOES NOT provide service plans."
        />
        <Hyperlink
          url = "https://www.massalternativefinance.org/"
          name = "Massachusetts Alternative Finance Program (Assistive Technology Loans)"
          desc = "The Massachusetts Alternative Finance Program improves the independence and quality of life of residents with disabilities through loan opportunities for acquiring assistive technology devices and services. Individuals with disabilities and family members are encouraged to apply."
        />
        <Hyperlink
          url = "https://www.mass.gov/home-modification-loan-program-hmlp"
          name = "Massachusetts Home Modification Loan Program (HMLP)"
          desc = "The Home Modification Loan Program provides no interest loans to modify the homes of adults and children with disabilities."
        />
        <Hyperlink
          url = "https://www.massaccesshousingregistry.org/"
          name = "MassAccess: The Accessible Housing Registry"
        />
        <Hyperlink
          url = "https://www.newenglandada.org/"
          name = "New England ADA Center"
          desc = "The New England ADA Center is one of 10 regional ADA Centers comprising the ADA National Network. Since 1991, the ADA National Network has provided information, guidance and training on the Americans with Disabilities Act (ADA), tailored to meet the needs of business, government and individuals at local, regional and national levels. New England ADA Center is a helpful resource supporting the ADA’s mission to “make it possible for everyone with a disability to live a life of freedom and equality.” For more information call 1-800-949-4232."
        />
        <Hyperlink
          url = "https://www.mass.gov/orgs/universal-access-program"
          name = "Universal Access Program"
          desc = "The Department of Conservation and Recreation’s Universal Access Program provides outdoor recreation opportunities in Massachusetts state parks for visitors of all abilities."
        />
      </div>
    </Layout>
  </>;
}