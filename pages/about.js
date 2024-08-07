import Layout from '../components/Layout';
import styles from '../styles/About.module.css';
import Section from '../components/Section';
import Profile from '../components/Profile';
import * as Utils from '../utils/wp-utils';
import * as Backend from '../utils/backend';
import parse from 'html-react-parser';

/*

UNIFORM ORDER:

-> title (name)
-> p (sd)
-> p (term)
-> p (position)
-> img (profile)
-> p (blurb)
...

*/
export default function About({ posts, orderDesc, profileProps }) {
  Utils.orderPageContent(orderDesc, posts.nodes);

  const DEFAULT_PROFILE = '/default-profile.png';
  let members = [];  
  let profiles = [];

  Utils.orderPageContent(profileProps.orderDesc, profileProps.posts.nodes);

  for (const post of profileProps.posts.nodes) {
    Utils.handleProfilePost(post, members, profiles);
  }

  // let { members, profiles } = profileProps;

  return <>
    <Layout title="About" altText="... alt text goes here ..." hero>
      <main>
        <br />
        { 
          posts.nodes.map(
            post => {
              let { title, content } = Utils.getBasicSectionInfo(post);

              return <Section 
                title={title} 
                imgName={title} 
                key={post.id}
              >
                {/* { contents.map((content, i) => <p key={`${post.id}#${i}`}>{content}</p>) } */}
                {/* { contents.map((content, i) => parse(content)) } */}
                { parse(content) }
              </Section>;
            }
          )
        }
        <Section id="meetOurMembers" imgName="Meet our Members" title="Meet our Members">
          <br />
          <div id={styles.profiles}>
            {
              profiles.map((profile, i) => i % 2 == 0 ?
                <Profile 
                  name={profile.name} 
                  position={profile.position} 
                  desc={profile.desc} 
                  url={profile.image}
                  key={"PROFILE-" + i}
                /> :
                <Profile 
                  name={profile.name}
                  position={profile.position}
                  desc={profile.desc}
                  url={profile.image}
                  key={"PROFILE-" + i}
                  flipped
                />
              )
            }
          </div>
        </Section>
        <Section title="Member Roster" imgName="Member Roster">
          <br />
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Term Start Date</th>
                <th>Term No.</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {
                members.map((member, i) => 
                  <tr key={"TABLE-TR-" + member.key} className={i % 2 == 0 ? styles.evenRow : styles.oddRow}>
                    <td 
                      key={"TABLE-NAME-" + member.key}
                    >{member.name}</td>
                    <td 
                      key={"TABLE-DATE-" + member.key}
                    >{member.startDate}</td>
                    <td 
                      key={"TABLE-TERM-" + member.key}
                    >{member.term}</td>
                    <td 
                      key={"TABLE-POS-" + member.key}
                    >{member.position}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </Section>
      </main>
    </Layout>
  </>;
}

export async function getStaticProps() {
  let { props } = await Backend.getBasicRequest('About');

  // let members = [
  //   { key: 0, name: 'Amanda Hsiao', startDate: 'Jul 01, 2020', term: 2, position: 'Secretary' },
  //   { key: 1, name: 'Elaine B. Ostroff', startDate: 'Jul 01, 2020', term: 3, position: 'Vice-Chair/Commissioner' },
  //   { key: 2, name: 'Scott W. Landgren', startDate: 'Dec 15, 2021', term: 1, position: 'Commissioner' },
  //   { key: 3, name: 'Lori Zalt', startDate: 'Jul 01, 2021', term: 4, position: 'Chair/Commissioner' },
  //   { key: 4, name: 'Eric Gagnebin', startDate: 'Jul 01, 2021', term: 2, position: 'Commissioner' },
  //   { key: 5, name: 'Aaron M. Spelker', startDate: 'Jul 01, 2022', term: 2, position: 'Treasurer' },
  //   { key: 6, name: 'Susan B. Peters', startDate: 'Jul 01, 2022', term: 4, position: 'Commissioner' },
  // ];
  
  // let profiles = [
  //   { key: 0, name: 'Lori Zalt', position: 'Chairwoman', img: DEFAULT_PROFILE, desc: 'I have a Bachelors in Science Biology / Minor Psychology from Northeastern University 1985 - 1991. I also have an Associate degree in History of Fine arts / Massachusetts School of Arts 1987. I Worked in cardiovascular pulmonary research at Boston University School of Medicine under HIH grants clinical trials for cardiovascular studies 1994-2011. I am an educator of Service awareness to hospitals and corporate business for retail. I am board certified by national association of service dogs and animals in Michigan. I studied ADA compliance law and am a certified MOD of Massachusetts and ADA monitor of Massachusetts. My positions are as follows: member of of National association of deaf and hard hearing 2019 - present, Commissioner from June 2013 - June 2018, Chairwoman - June 2018 -present. I am an active supporter of disability rights and advocacy.' },
  //   { key: 1, name: 'Elaine Ostroff', position: 'Vice Chairwoman', img: DEFAULT_PROFILE, desc: 'Elaine Ostroff has been involved with Disability Rights since the 1960s. She became aware of the discrimination toward persons with disabilities when she began working with the Massachusetts Department of Mental Health and Developmental Services. It was an extraordinary time, as there was a developing awareness that persons with a range of developmental and emotional difficulties had potential, and could interact and grow. She was part of the statewide effort to support and engage staff so that they might participate in the positive work with both clients as well as parents.Ostroff was the Founding Director of the Institute for Human Centered Design. Her professional papers are archived at the Smithsonian Museum of American History. She also was awarded an Honorary Doctorate from Middlebury College in 2016.' },
  //   { key: 2, name: 'Amanda Hsiao', position: 'Secretary', img: DEFAULT_PROFILE, desc: 'Amanda Hsiao joined the Natick Commission on Disability in September 2019 and was appointed as Secretary in January 2020. Amanda and her family moved to Natick in 2014. Amanda has a professional and personal interest in promoting equity and inclusivity for people with disabilities in the Natick community, and elsewhere.' },
  //   { key: 3, name: 'Aaron Spelker, CFA', position: 'Treasurer', img: DEFAULT_PROFILE, desc: 'Aaron Spelker joined the Natick Commission on Disability in September 2019 and was appointed as Treasurer in January 2020. Aaron has lived in Natick for over 20 years and has 2 children in the Natick public school system. Aaron had a 20 year career in the investments and financial services industries concentrating on institutional investing, Aaron\'s work focused on providing investment advice to corporate sponsored retirement plans, including pension plans, 401(k) plans and 403(b) plans. Aaron was a small business owner having founded Marathon Retirement & Pension Consulting (Marathon RPC) and later acted as the Director of Qualified Plans at Boston Wealth Management. Throughout his career, he offered strategic and tactical asset allocation advice to small and mid-sized institutional plan sponsors. Aaron is a CFA Charterholder and an active member of the Boston Security Analysts Society.' },
  //   { key: 4, name: 'Susan Peters', position: 'Commissioner', img: DEFAULT_PROFILE, desc: 'I am a graduate of the University of Maine with a BS in Elementary and Resident of Natick for 29 years. I serve, and have served, on my condo\'s Board of Trustees for over 24 years. I serve on Encompass Hospital\'s Patient &amp; Family Advisory Committee (Formally Braintree Rehab Hospital). I am also currently a Peer Mentor, at Encompass Rehab Hospital, for any patient who has suffered a spinal cord injury. I currently serve on Natick\'s Council on Aging and Chair a subcommittee on Housing. I am serving on Natick\'s Commission on Disability because I want to bring awareness to the Natick community that Natick cares about its residents with disabilities. I suffered a spinal cord injury 40+ years ago, before many opportunities were available to people with mobility issues. It is important for residents to know that we exist and are a valuable resource for programs, education, and accessibility issues.' },
  //   { key: 5, name: 'Sergeant Lacerra', position: 'Admin Supervisor', img: DEFAULT_PROFILE, desc: 'Sergeant Scott Lacerra has been with the Natick Police Department since October of 2005.  During his 18-year career he has been assigned to the Patrol Division and Traffic Division.  Sergeant Lacerra is currently assigned as an administrative supervisor.  His duties include special event planning, roadwork safety supervision, traffic safety, and liaison to the Natick Labs and the Commission on Disability.  Sergeant Lacerra is a firearms and use of force instructor for the department as well as a certified motorcycle operator. When not working he enjoys spending time with his wife, Chrissy, and three children, Joshua, Nicholas, and Isabella.  Sergeant Lacerra understands the issues that people with disabilities face on a personal level as his middle son Nicholas has Down Syndrome.  Through his experience with his own family he is able to better help the Commission on Disability in Natick by merging two things he is passionate about, the community he works for and the rights of the disabled' },
  //   { key: 6, name: 'Paul Carew', position: 'Commissioner', img: DEFAULT_PROFILE, desc: 'I started with the COD Board 20 years ago as an appointment.  13 years ago I was hired by the Town of Natick as Veterans Director,  one duty is ADA Coordinator.  My work now is with Veterans and their family members.  I am Director of a two person department for the town.  I am married to Peggy with one daughter Katie who is 24 years old.  I love my work with the Commission on Disability.  It is a great group of Natick Residents, helping others in need.' },
  //   { key: 7, name: 'Jaslyne Agosto', position: 'Student Liason', img: DEFAULT_PROFILE, desc: 'Jaslyne is the student liaison for the Natick Commission on Disability. She was a Natick resident four years ago but moved because of her military family and now she is back because of the good school systems. Now she goes to Natick High School where she participates in after school activities such as the Natick High Theatre program. She gives her insight when attending committee meetings and plans to be a part of the Commission for as long as possible.' }
  // ];

  let profilesJson = await Backend.getRequestBoilerplate(`
    query ProfilePageQuery {
      posts(where: {categoryName: "About Page Profile Category"}) {
        nodes {
          title
          content
          id
          date
        }
      }
      categories(where: {name: "About Page Profile"}) {
        nodes {
          description
        }
      }
    }
  `);

  props.profileProps = {
    posts: profilesJson.data.posts,
    orderDesc: profilesJson.data.categories.nodes[0].description,
  };

  return { props: props };
}
