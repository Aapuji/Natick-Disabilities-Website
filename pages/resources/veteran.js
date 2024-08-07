import Layout from '/components/Layout';
import Section from '/components/Section';
import Link from 'next/link';
import parse from 'html-react-parser';
import * as Backend from '/utils/backend';
import * as Utils from '/utils/wp-utils';

//line 23: inline link for "We Created MassVeteran.com"

export default function Veteran({ posts, orderDesc }) {
  Utils.orderPageContent(orderDesc, posts.nodes);

  return <Layout title="Veteran Resources" altText="... alt text goes here ..." hero>
    {/* <Section title="General Resources" imgName="General Resources">
      <h3><Link href="https://www.dav.org/">Disabled American Veterans (DAV) - Natick Chapter 114</Link></h3>
      <p>Disabled American Veterans is dedicated to empowering veterans to lead high-quality lives with respect and dignity by ensuring that veterans and their families can access the full range of benefits available to them; fighting for the interests of America&apos;s injured heroes on Capitol Hill; and educating the public about the great sacrifices and needs of veterans transitioning back to civilian life.</p>

      <h3><Link href="https://www.easterseals.com/ma/programs-and-services/military-veteran-services/">Easterseals Massachusetts Military and Veteran Programs</Link></h3>
      <p>Easterseals Massachusetts Military & Veteran programs strives to ensure that members of our military and Veteran community adjust back into our communities after their service. We created MassVeteran.com as a resource for Veterans to find information on various benefits, connect to resources in Massachusetts, register for activities and events, and explore other ways to get involved.</p>
    </Section> */}
    {
      posts.nodes.map(
        post => {
          let { title, content } = Utils.getBasicSectionInfo(post);

          return <Section title={title} imgName={title} key={post.id}>
            { parse(content) }
          </Section>
        }
      )
    } 
  </Layout>
}

export async function getStaticProps() {
  return await Backend.getBasicRequest('Veteran Resource');
}

/*
export default function Veteran() {
  return <>
    <Layout title="Veteran Resources" altText="... alt text goes here ..." hero>
      <h1 className={styles.veteranheading}>Links for Veteran Resources</h1>
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
*/