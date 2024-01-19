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

  console.log('Ongoing Events Props');
  console.log(ongoingEventProps);
  console.log('Past Events Props');
  console.log(pastEventProps);

  for (const post of ongoingEventProps.posts.nodes) {
    Utils.handleOngoingEventPost(post, ongoingEvents);
  }

  for (const post of pastEventProps.posts.nodes) {
    Utils.handlePastEventPost(post, pastEvents);
  }

  console.log('Ongoing Events ');
  console.log(ongoingEvents);
  console.log('Past Events ');
  console.log(pastEvents);

  return <>
    <Layout title="Events" altText="... alt text goes here ..." hero>
      <main>
        <Section 
          title="Ongoing and Upcoming Events"
          imgName="Ongoing and Upcoming Events"
        >
          <div className={styles.cards}>
            <CardPopup
              title = "NCOD Commission Meeting 3"
              date = "Jan 31"
              time = "9:30 PM"

              location = "NCOD Office"
              desc = "Nothing to see here..."
            />
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
            <CardPopup
              title = "NCOD Commission Meeting 3"
              date = "Jan 31"
              time = "9:30 PM"

              location = "NCOD Office"
              desc = "To all of those who are interested, this meeting will consost of brainstorming ideas for our events that are to be taking place this season. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Scelerisque eu ultrices vitae auctor eu. Elit pellentesque habitant morbi tristique senectus. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Tortor at auctor urna nunc id. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Tortor posuere ac ut consequat semper viverra nam libero justo. Pellentesque habitant morbi tristique senectus et. Egestas sed sed risus pretium quam vulputate. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Sit amet mauris commodo quis imperdiet massa. Enim tortor at auctor urna nunc id. Lorem sed risus ultricies tristique nulla aliquet. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Quis lectus nulla at volutpat diam ut. Fermentum iaculis eu non diam phasellus vestibulum. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Ut porttitor leo a diam sollicitudin tempor id. Luctus accumsan tortor posuere ac."
            />
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