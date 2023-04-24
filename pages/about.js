import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/About.module.css';
import Image from 'next/image';
import Section from '../components/Section';
import Profile from '../components/Profile'

const members = [
  { name: 'Amanda Hsiao', startDate: 'Jul 01, 2020', term: 2, position: 'Secretary' },
  { name: 'Elaine B. Ostroff', startDate: 'Jul 01, 2020', term: 3, position: 'Vice-Chair/Commissioner' },
  { name: 'Scott W. Landgren', startDate: 'Dec 15, 2021', term: 1, position: 'Commissioner' },
  { name: 'Lori Zalt', startDate: 'Jul 01, 2021', term: 4, position: 'Chair/Commissioner' },
  { name: 'Eric Gagnebin', startDate: 'Jul 01, 2021', term: 2, position: 'Commissioner' },
  { name: 'Aaron M. Spelker', startDate: 'Jul 01, 2022', term: 2, position: 'Treasurer' },
  { name: 'Susan B. Peters', startDate: 'Jul 01, 2022', term: 4, position: 'Commissioner' }
];


export default function About() {
  return <>
    <Layout title="About" altText="... alt text goes here ..." hero>
      <main>
        <Section id = "aboutTheCommission" imgName = "About the Commission" title = "About the Commission">
          <div className={styles.aboutcontent}>
            <div className={styles.purpose}>
              <div className={styles.headingBGM}>
                <h3>Background and Mission Statement</h3>
                <p className={styles.textBGM}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum neque egestas congue quisque. Ac tortor dignissim convallis aenean et. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Dolor morbi non arcu risus quis. Malesuada fames ac turpis egestas maecenas pharetra convallis. Parturient montes nascetur ridiculus mus. Felis imperdiet proin fermentum leo vel orci porta. Eu volutpat odio facilisis mauris sit amet massa vitae.</p>
              </div>
            </div>
            <div className={styles.purpose}>
              <div className={styles.headingHIS}>
                <h3>Our History</h3>
                <p className={styles.textBGM}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum neque egestas congue quisque. Ac tortor dignissim convallis aenean et. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Dolor morbi non arcu risus quis. Malesuada fames ac turpis egestas maecenas pharetra convallis. Parturient montes nascetur ridiculus mus. Felis imperdiet proin fermentum leo vel orci porta. Eu volutpat odio facilisis mauris sit amet massa vitae.</p>
              </div>
            </div>
          </div>
        </Section>
        <Section id = "meetTheCommission" imgName = "Meet the Commission" title = "Meet the Commission">
          <br />
        </Section>

        <div id = {styles.multiProfile}>
          <Profile
            name = "Lori Zalt (Chairwoman)"
            desc = "I have a Bachelors in Science Biology / Minor Psychology from Northeastern University 1985 - 1991. I also have an Associate degree in History of Fine arts / Massachusetts School of Arts 1987. I Worked in cardiovascular pulmonary research at Boston University School of Medicine under HIH grants clinical trials for cardiovascular studies 1994-2011. I am an educator of Service awareness to hospitals and corporate business for retail. I am board certified by national association of service dogs and animals in Michigan. I studied ADA compliance law and am a certified MOD of Massachusetts and ADA monitor of Massachusetts. My positions are as follows: member of of National association of deaf and hard hearing 2019 - present, Commissioner from June 2013 - June 2018, Chairwoman - June 2018 -present. I am an active supporter of disability rights and advocacy."
            url = '/../public/default-profile.png'
          />
          <Profile
            name = "Dev"
            desc = "Dev and Om created this website"
            url = '/../public/default-profile.png'
          />
          <Profile
            name = "Dev"
            desc = "Dev and Om created this website"
            url = '/../public/default-profile.png'
          />
        </div>

        {
          <table className={styles.table}>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Term Start Date</th>
                <th>Term No.</th>
                <th>Position</th>
              </tr>
              {
                members.map(member => <>
                  <tr>
                    <td>{member.name}</td>
                    <td>{member.startDate}</td>
                    <td>{member.term}</td>
                    <td>{member.position}</td>
                  </tr>
                </>)
              }
            </tbody>
          </table>
        }
      </main>
    </Layout>
  </>;
}