import Layout from '../components/Layout';
import styles from '../styles/Events.module.css'
import Card from '../components/Card';

export default function Events() {
  return <>
    <Layout title="Events" altText="... alt text goes here ..." hero>
    <h1 className={styles.upcomingHeading}>Ongoing and Upcoming Events</h1>
    <div className={styles.cardscontainer}>
      <div className={styles.cards}>
        <Card
            name = "NCOD Commission Meeting 3"
            time = "January 31st | 9:30PM EST"
            location = "NCOD Office"
            desc = "To all of those who are interested, this meeting will consost of brainstorming ideas for our events that are to be taking place this season. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Scelerisque eu ultrices vitae auctor eu. Elit pellentesque habitant morbi tristique senectus. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Tortor at auctor urna nunc id. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Tortor posuere ac ut consequat semper viverra nam libero justo. Pellentesque habitant morbi tristique senectus et. Egestas sed sed risus pretium quam vulputate. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Sit amet mauris commodo quis imperdiet massa. Enim tortor at auctor urna nunc id. Lorem sed risus ultricies tristique nulla aliquet. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Quis lectus nulla at volutpat diam ut. Fermentum iaculis eu non diam phasellus vestibulum. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Ut porttitor leo a diam sollicitudin tempor id. Luctus accumsan tortor posuere ac."
          />
      </div>
      <div className={styles.cards}>
        <Card
            name = "picnic"
            location = "earth"
            desc = "lorem ipsum"
          />
      </div>
      <div className={styles.cards}>
        <Card
            name = "picnic"
            location = "earth"
            desc = "lorem ipsum"
          />
      </div>
      <h1 className={styles.pastHeading}>Notable Past Events</h1>
      <div className={styles.cards}>
        <Card
            name = "picnic"
            location = "earth"
            desc = "lorem ipsum"
          />
      </div>
      <div className={styles.cards}>
        <Card
            name = "picnic"
            location = "earth"
            desc = "lorem ipsum"
          />
      </div>
      <div className={styles.cards}>
        <Card
            name = "picnic"
            location = "earth"
            desc = "lorem ipsum"
          />
      </div>
    </div>
    </Layout>
  </>;
}