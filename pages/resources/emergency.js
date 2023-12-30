import Layout from '/components/Layout';
import Section from '/components/Section';
import parse from 'html-react-parser';

import * as Backend from '/utils/backend';
import * as Utils from '/utils/wp-utils';

export default function Emergency({ posts, orderDesc  }) {
  Utils.orderPageContent(orderDesc, posts.nodes);

  return <Layout title="Emergency Resources" altText="... alt text goes here ..." hero>
      <Section imgName="Emergency Resources" title="Emergency Resources">
        <p>dev</p>
      </Section>
      {
        posts.nodes.map(
          post => {
            let { title, contents } = Utils.getBasicSectionInfo(post);

            return <Section title={title} imgName={title} key={post.id}>
              { contents.map(content => parse(content)) }
            </Section>
          }
        )
      }
    </Layout>;
}

export async function getStaticProps() {
  return await Backend.getBasicRequest('Emergency Resource');
}