import Head from 'next/head';
import Layout from '/components/Layout';
import  Hyperlink from '/components/Hyperlink'
import styles from '/styles/Local.module.css'
import Dropdown from '/components/Dropdown';
import { useState } from 'react';
import Link  from  'next/link';
import Section from "/components/Section";

export default function Local() {
  return <Layout title="Local Information & Resources" altText="... alt text goes here ..." hero>
    <Section title="General Natick Resources">
      <h3><Link href="https://www.mwrta.com/senior-and-disabled">MetroWest Regional Transit Authority</Link></h3>
      <p>Provides information for seniors and disabled individuals about para-transit transportation routes and services within the Framingham/Natick service area.</p>
    </Section>
  </Layout>;
}

/*
export default function Local() {
  return <>
    <Layout title="Local Information & Resources" altText="... alt text goes here ..." hero>
      <h1 className={styles.localheading}>Links for Other Local Resources and Information</h1>
      <div className={styles.localsectioncontent}>
        <Hyperlink 
          url = "https://www.mwrta.com/senior-and-disabled"
          name = "MetroWest Regional Transit Authority"
          desc = "Provides information for seniors and disabled individuals about para-transit transportation routes and services within the Framingham/Natick service area."
        />
        <Hyperlink 
          url = "https://mwcil.org/"
          name = "MetroWest Center for Independent Living (MWCIL)"
          desc = "MetroWest Center for Independent Living provides an array of independent living services that enable people with disabilities to live in the community. The center was created by people with disabilities seeking full integration into society. We empower people with disabilities by teaching the practical skills and confidence to take control over their lives and become active members of the communities in which they live. We promote access and change within society while advocating for programs and services needed by people of all ages with a wide range of disabilities.  MWCIL is a consumer‑controlled, community‑based, cross‑disability, nonresidential private nonprofit agency."
        />
        <Hyperlink 
          url = "https://thearcofmass.org/about/"
          name = "ARC of Massachusetts"
          desc = "The mission of The Arc of Massachusetts is to enhance the lives of people with intellectual and developmental disabilities, including autism, and their families. We fulfill this through advocacy for community supports and services that foster social inclusion, self-determination, and equity across all aspects of society."
        />
        <Hyperlink 
          url = "https://www.charlesrivercenter.org/"
          name = "Charles River Center ARC"
          desc = "Providing support for people with intellectual and developmental disabilities, with centers in Natick and Needham."
        />
        <Hyperlink 
          url = "https://namimass.org/"
          name = "NAMI Massachusetts"
          desc = "The National Alliance on Mental Illness of Massachusetts (NAMI Massachusetts) is a nonprofit grassroots organization. Founded in 1982, we seek to improve the quality of life for people living with mental health conditions, their families, and their caregivers."
        />
        <Hyperlink 
          url = "https://www.tlcdeaf.org/"
          name = "The Learning Center for the Deaf"
          desc = "Located in Framingham, the mission of The Learning Center for the Deaf is to ensure that all deaf and hard of hearing children and adults thrive by having the knowledge, opportunity and power to design the future of their choice."
        />
        <Hyperlink 
          url = "https://www.autismalliance.org/"
          name = "Autism Alliance of MetroWest"
          desc = "Provides families with information, education and support, including programs and events that will aid those families, while increasing public awareness regarding autism. Communities served: Ashland, Dover, Framingham, Holliston, Hopkinton, Hudson, Marlborough, Natick, Northborough, Sherborn, Southborough. Sudbury, Wayland, Westborough."
        />
        <Hyperlink 
          url = "https://www.mabvi.org/about/"
          name = "Massachusetts Association for the Blind and Visually Impaired"
          desc = "The Massachusetts Association for the Blind and Visually Impaired (MABVI) provides vision rehabilitation and support services to 1,200-1,400 adults and elders each year. Programs include access to low vision clinics, peer empowerment support groups, 1:1 volunteer assistance, in-home vision rehabilitation, adjustment counseling/mental health supports, and access/assistive technology training, with an Assistive Technology Center located in Natick."
        />
        <Hyperlink 
          url = "https://mdsc.org/about-us/"
          name = "Mass Down Syndrome"
          desc = "The mission of the Massachusetts Down Syndrome Congress is to ensure individuals with Down syndrome in Massachusetts are valued, included, and given the opportunities to pursue fulfilling lives by providing information, networking opportunities, and advocacy for people with Down syndrome and their families, educators, health care professionals, and the community-at-large."
        />
        <Hyperlink 
          url = "https://www.dpcma.org/"
          name = "Disability Policy Consortium"
          desc = "Our mission is to ensure the voice of people with disabilities is heard on key issues, to support the health of our community through participatory research and expert policy analysis, to and empower grassroots disability leaders to transform their communities."
        />
      </div>
    </Layout>
  </>;
}
*/