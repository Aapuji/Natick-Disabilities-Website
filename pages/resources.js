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
              <h1 className={styles.header}>Why We Care</h1>
              <p>By clicking the dropdown to the right, you can view different categories of the resources we provide. The Natick Commission on Disability is an organization dedicated to serving the needs of people with disabilities, students, veterans, and others who face challenges related to physical or mental health conditions, age, socioeconomic status, or other marginalized identities. We recognize the unique obstacles and discrimination faced by these individuals and are committed to providing resources, support, and advocacy to improve their quality of life and ensure they have equal opportunities to participate in and contribute to their community. </p>
              <p>People with disabilities have a diverse range of needs and require different types of accommodations to fully participate in society. The Commission works to identify and address these needs by partnering with local businesses, government agencies, and community organizations to provide resources and promote accessibility.</p>
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