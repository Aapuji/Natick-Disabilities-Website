import Layout from '../components/Layout';
import styles from '../styles/Events.module.css'
import Card from '../components/Card';
import Section from '../components/Section';
import CardPopup from '../components/CardPopup';
import * as Backend from '../utils/backend';
import * as Utils from '../utils/wp-utils';

/* UNIFORM ORDER:

-> TITLE (name of event)
-> P (date)
-> P (time)
-> P (location)
-> P (desc)

*/

export default function Events({ ongoingEventProps, pastEventProps }) {
  let ongoingEvents = [];
  let pastEvents = [];

  Utils.orderPageContent(ongoingEventProps.orderDesc, ongoingEventProps.posts.nodes);
  Utils.orderPageContent(pastEventProps.orderDesc, pastEventProps.posts.nodes);

  for (const post of ongoingEventProps.posts.nodes) {
    Utils.handleOngoingEventPost(post, ongoingEvents);
  }

  for (const post of pastEventProps.posts.nodes) {
    Utils.handlePastEventPost(post, pastEvents);
  }

  return <>
    <Layout title="Events" altText="... alt text goes here ..." hero>
      <main>
        <Section 
          title="Ongoing and Upcoming Events"
          imgName="Ongoing and Upcoming Events"
        >
          <div className={styles.cards}>
            {
              ongoingEvents.map(
                event => <CardPopup
                  title={event.name}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  desc={event.desc}
                  key={"EVENT-ONG-" + event.key}
                />
              )
            }
          </div>
        </Section>
        <Section
          title="Notable Past Events"
          imgName="Notable Past Events"
        >
          <div className={styles.cards}>
            {
              pastEvents.map(
                event => <CardPopup 
                  title={event.name}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  desc={event.desc}
                  key={"EVENT-PAST-" + event.key}
                />
              )
            }
          </div>
        </Section>
      </main>
    </Layout>
  </>;
}

export async function getStaticProps() {
  let ongoingEventsJson = await Backend.getRequestBoilerplate(`
    query OngoingEventQuery {
      posts(where: {categoryName: "Ongoing Event Category"}) {
        nodes {
          title
          content
          id
          date
        }
      }
      categories(where: {name: "Ongoing Event"}) {
        nodes {
          description
        }
      }
    }
  `);

  let pastEventsJson = await Backend.getRequestBoilerplate(`
  query PastEventQuery {
    posts(where: {categoryName: "Past Event Category"}) {
      nodes {
        title
        content
        id
        date
      }
    }
    categories(where: {name: "Past Event"}) {
      nodes {
        description
      }
    }
  }
`);

  return {
    props: {
        ongoingEventProps: {
        posts: ongoingEventsJson.data.posts,
        orderDesc: ongoingEventsJson.data.categories.nodes[0].description
      },
      pastEventProps: {
        posts: pastEventsJson.data.posts,
        orderDesc: pastEventsJson.data.categories.nodes[0].description
      }
    }
  };
}