import Layout from '../components/Layout';
import Section from '../components/Section';
import styles from '../styles/Home.module.css';
import utils from '../styles/utils.module.css';
import Link from 'next/link';
import * as WPU from '../utils/wputils';
import parse from 'html-react-parser';

/* TODO: Add...



import * as WPU from '../utils/wputils';

const WP_SERVER = process.env.WP_SERVER;

export default function Home({ posts, orderDesc }) {

  console.log('BOTH', posts, '\n', orderDesc);

  WPU.orderPageContent(orderDesc, posts.nodes);

  return <>
    <Layout title="Natick Commission on Disability" home>
      <main id={styles.main}>
        <hr />
        {
*/

const WP_SERVER = process.env.WP_SERVER;

export default function Home({ posts, orderDesc }) {
  const testHTML = '<div><img class="a b" id="c" src="hello.jpg" /><h1>Bonjour</h1></div>';
  const HTML2 = '<h1>HELLO WORLD</h1>';
  // console.dir(parse(testHTML));
  // console.log(JSON.stringify(parse(testHTML)));

  console.log('POSTS: ', posts);

  return <>
    <Layout title="Natick Commission on Disability" altText="... alt text goes here ..." hero>
      <main>
        <Section id="emergencyInfo" imgName="Emergency Information" title="Emergency Information" subtitle="Get guidance and support.">
          {/* <br />
          <br /> */}
          <p className={styles.content}>Some hotlines for emergency contact. Disability Abuse Hotline: call 1-800-426-9009. Veteran aid and crisis number: call 1-800-273-8255. Police, EMTs: call 911. For more in-depth emergency information click <Link href="./resources" className={utils.inlineLink}>here</Link>.</p> 
        </Section>
        {/* <br /> */}
        <Section id="whatIsNCOD" imgName="What is Commission on Disability" title="What is the Commission on Disability?" subtitle="A brief overview of the commission and its values.">
          {/* <br />
          <br /> */}
          <p className={styles.content}>
            The Natick Commission on Disability (or NCOD) is a commission of the Town of Natick. It researches local problems concerning people with disabilities, advises and assists officials, recommends policies and services, provides information and guidance for individuals and agencies, and coordinates activitees with the community. To see some of the recent events, visit the <Link href="./events" className={utils.inlineLink}>events page</Link>. To read more about the commission, visit the <Link href="./about" className={utils.inlineLink}>about page</Link>.
          </p>
        </Section>
        {/* <Section id="recentEvents" imgName="Recent Events" title="Recent and Upcoming Events" subtitle="Stay up to date with the latest events.">

        </Section>  */}
        {/*
          posts.nodes.map(post => {
            let title = post.title;
            let subtitle = '';

            let contents = WPU.splitContent(post.content).map(WPU.removeP);
            
            console.log(contents);

            for (let i = 0; i < contents.length; i++) {
              let { annot, text } = WPU.removeAnnotation(contents[i]);

              if (annot == 'Subtitle') {
                subtitle = text;
                contents.splice(i, 1);
                break;
              }
              // if (contents[i].startsWith('Subtitle: ')) {
              //   subtitle = contents[i];
              //   contents.splice(i, 1);
              //   break;
              // }
            }
        
            return <Section title={title} subtitle={subtitle} imgName={title} key={post.id}>
              {contents.map((c, i) => <p key={`${post.id}#${i}`}>{c}</p>)}
              <br />
              <br />
            </Section>
          })
        */}
      </main>
    </Layout>
  </>;
}

/*
export async function getStaticProps() {
  const res = await fetch(WP_SERVER + '/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query HomePageQuery {
          posts(where: {categoryName: "Home Page Category"}) {
            nodes {
              title
              content
              id
              date
            }
          }
          categories(where: {name: "Home Page"}) {
            nodes {
              description
            }
          }
        }
      `,
    })
  });

  const json = await res.json();

  console.log(json);

  return {
    props: {
      posts: json.data.posts,
      orderDesc: json.data.categories.nodes[0].description
    }
  }
}
*/

// const removeTags = (content, tags) => content.replace( new RegExp(`</?${tags.map(tag => tag)} */?>`, 'g' ), '');
// const removeP = content => removeTags(content, ['p']); 

// const splitContent = content => content.split('\n').filter(el => el !== '');
