import Head from 'next/head';
import Layout from '/components/Layout';
import Hyperlink from '/components/Hyperlink'
import styles from '/styles/Student.module.css'
import Dropdown from '/components/Dropdown';
import { useState } from 'react';
import Link  from  'next/link';
import Section from '/components/Section';
import parse from 'html-react-parser';
import * as Backend from '/utils/backend';
import * as Utils from '/utils/wp-utils';

//massadvocates inline ("resources")

// TODO: Make Links styled so that they look like links.

export default function Student({ posts, orderDesc }) {
  Utils.orderPageContent(orderDesc, posts.nodes);

  return <>
    <Layout title="Student Resources" altText="... alt text goes here ..." hero>
      {/* <Section title="General Resources" imgName="General Resources">
        <h3><Link href="https://www.northstarteens.org/">North Star: Self-Directed Learning for Teens</Link></h3>
        <p>North Star is not a school, but a hybrid with aspects of homeschooling and school, and does not offer diplomas, credits, or grades. Since 1996, we have provided an alternative to school where teens learn in the way that suits them best. </p>
        
        <h3><Link href="https://www.waypointadventure.org/">Waypoint Adventure</Link></h3>
        <p>Waypoint Adventure uses quality experiential and adventure-based education programs to transform the lives of individuals with disabilities. We work with school groups, social service organizations, families, and individuals to offer custom designed adventures that meet the goals and objectives of that group or person. These programs are not just about having fun outdoors; they are about positive individual and group development. They&apos;re about building social and character skills, forming teams, and transforming people&apos;s views of themselves and their abilities.</p>

        <h3><Link href="https://something.com">Partners for Youth with Disabilities</Link></h3>
        <p>PYD&apos;s goal is to create a world where young people with disabilities will be able to live with dignity and pride in who they are, and to lead self-determined lives filled with purpose. To make this happen, we build the skills and abilities of young people with disabilities, and increase the inclusivity of workplaces, organizations, and communities.</p>
      </Section> */}
      {
        posts.nodes.map(
          post => {
            let { title, content } = Utils.getBasicSectionInfo(post);

            return <Section title={title} imgName={title} key={post.id}>
              {/* { contents.map(content => parse(content)) } */}
              { parse(content) }
            </Section>
          }
        )
      }
    </Layout>
  </>;
}

export async function getStaticProps() {
  return await Backend.getBasicRequest('Student Resource');
}

/*
export default function Student() {
  return <>
    <Layout title="Student Resources" altText="... alt text goes here ..." hero>
      <h1 className={styles.studentheading}>Links for Student Resources</h1>
        <Hyperlink 
          url = "https://www.safekids.org/"
          name = "Safe Kids Worldwide"
        >
        <p>Safe Kids Worldwide is a global nonprofit dedicated to protecting kids from preventable injuries, the number one cause of death to children in the United States and a global epidemic around the world. Safe Kids works with more than 400 network members in the U.S. and partners in 33 countries to keep kids safe at home, on the road and at play. We educate families, raise awareness, create safer environments and advocate for improved laws to protect children.</p>
        </Hyperlink>

        <Hyperlink 
          url = "https://www.easterseals.com/ma/"
          name = "Easterseals Massachusetts"
        >
        <p>Our mission is to provide services to ensure children and adults with disabilities have equal opportunities to live, learn, work, and play. With an individualized approach to all services, we focus on the power of unlocking every person&apos;s full potential. Easterseals Massachusetts serves all regions of Massachusetts creating a thriving network for the Disability and Veteran communities.  Our therapists and specialists are experts in their field providing the most exceptional services in a wide range of settings.</p>
        </Hyperlink>

        <Hyperlink 
          url = "https://fcsn.org/"
          name = "Federation for Children with Special Needs"
        >
        <p>The Federation has multiple initiatives to support, educate, and empower families and professionals around the education, health and community needs of children. These programs promote family engagement in all communities throughout Massachusetts. Our language line and Outreach team can help families requiring language assistance.</p>
        </Hyperlink>

        <Hyperlink 
          url = "https://www.massfamilyties.org/"
          name = "Family TIES of Massachusetts"
        >
        <p>Provides information and referral services, emotional support, and training to parents of children and youth with special needs. Family TIES is a primary source for information about Early Intervention and maintains a complete listing of Early Intervention Programs in MA.</p>
        </Hyperlink>

        <Hyperlink 
          url = "https://www.massadvocates.org/"
          name = "Mass Advocates for Families"
        >
        <p>Helps families navigate the special education system and provides practical resources.</p>
        </Hyperlink>

        <Hyperlink 
          url = "https://www.bostonbar.org/app/uploads/2022/06/bbaguide_2011update_2.pdf"
          name = "The Parents’ How-to Guide to Children’s Mental Health Services in Massachusetts"
        >
        <p>Information about the kinds of behavioral health services available for children in Massachusetts, how to get those services, and how to pay for them. It also helps parents plan ahead for when their children “age out” of child services and health care payment programs.</p>
        </Hyperlink>

        <Hyperlink 
          url = "https://familyconnect.org/"
          name = "Family Connect"
        >
        <p>Resources for parents of children with visual impairments.</p>
        </Hyperlink>


        <Hyperlink 
          url = "https://thinkcollege.net/"
          name = "Think College, UMass Boston"
        >
        <p>Think College is dedicated to developing, expanding, and improving research and practice in inclusive higher education for students with intellectual disability.</p>
        </Hyperlink>

        <Hyperlink 
          url = "https://www.concordspedpac.org/Colleges-Disabilities.html"
          name = "Concord SEPAC resource page on Colleges for students with Disabilities"
        >
        <p>A compilation of resources, guides, and reviews of in-state and out-of-state colleges.</p>
        </Hyperlink>
      </div>
    </Layout>
  </>;
}
*/