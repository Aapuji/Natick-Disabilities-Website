import Layout from '../components/Layout';
import Section from '../components/Section';
import styles from '../styles/Home.module.css';
import utils from '../styles/utils.module.css';
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
        }
      </main>
    </Layout>
  </>;
}

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