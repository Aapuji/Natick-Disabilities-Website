import Layout from '../components/Layout';
import Section from '../components/Section';
import styles from '../styles/Home.module.css';
import utils from '../styles/utils.module.css';
import Link from 'next/link';
import * as Utils from '../utils/wp-utils';
import * as Backend from '../utils/backend.js';
import parse from 'html-react-parser';

export const WP_SERVER = process.env.WP_SERVER;

export default function Home({ posts, orderDesc }) {
  Utils.orderPageContent(orderDesc, posts.nodes);

  return <>
    <Layout title="Natick Commission on Disability" altText="... alt text goes here ..." hero>
      <main>
        {
          posts.nodes.map(
            post => {
              let { title, subtitle, contents } = Utils.getBasicSectionInfo(post);

              // console.log(contents);
          
              return <Section title={title} subtitle={subtitle} imgName={title} key={post.id}>
                {/* { contents.map((content, i) => Backend.evaluateElement(content, Backend.Category.Home)) } */}
                { contents.map((content, i) => parse(content)) }
              </Section>
            }
          )
        }
        <Section title="Hi" subtitle="Bye">
          <p>Hello World</p>
        </Section>
      </main>
    </Layout>
  </>;
}

export async function getStaticProps() {
  return await Backend.getBasicRequest('Home');
}
