import Link from 'next/link';
import Layout from '/components/Layout';
import Hyperlink from '/components/Hyperlink';
import Section from '/components/Section';

import * as Backend from '../../backend';

// import styles from '/styles/Emergency.module.css';

export default function Emergency() {
  return <>
    <Layout title="Emergency Resources" altText="... alt text goes here ..." hero>
      <Section imgName="Emergency Resources" title="Emergency Resources">
        <p>dev</p>
      </Section>
    </Layout>
  </>;
}

export async function getStaticProps() {
  return await Backend.getBasicRequest('Emergency');
}