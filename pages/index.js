import Layout from '../components/Layout';
import Section from '../components/Section';
import styles from '../styles/Home.module.css';
import utils from '../styles/utils.module.css';

const WP_SERVER = process.env.WP_SERVER;

export default function Home(/*{ posts }*/) {

  //console.log(posts);

  return <>
    <Layout title="Natick Commission on Disability" altText="... alt text goes here ..." hero>
      <main>
        <hr />
        <Section id="emergencyInfo" imgName="Emergency Information" title="Emergency Information" subtitle="Get guidance and support.">
          <br />
          <br />
        </Section>
        <br />
        <Section id="whatIsNCOD" imgName="What is Commission on Disability" title="What is the Commission on Disability?" subtitle="A brief overview of the commission and its values.">
          <br />
          <br />
        </Section>
        <Section id="recentEvents" imgName="Recent Events" title="Recent and Upcoming Events" subtitle="Stay up to date with the latest events.">

        </Section> 
        {/*
          posts.nodes.map(post => {
            let title = post.title;
            let subtitle = '';

            let contents = splitContent(post.content).map(removeP);
            
            console.log(contents);

            for (let i in contents) {
              if (contents[i].startsWith('Subtitle: ')) {
                subtitle = contents[i];
                contents.splice(i, 1);
                break;
              }
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
              date
              id
            }
          }
        }
      `,
    })
  });

  const json = await res.json();

  return {
    props: {
      posts: json.data.posts
    }
  }
}
*/

// const removeTags = (content, tags) => content.replace( new RegExp(`</?${tags.map(tag => tag)} */?>`, 'g' ), '');
// const removeP = content => removeTags(content, ['p']); 

// const splitContent = content => content.split('\n').filter(el => el !== '');
