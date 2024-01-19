import Link from 'next/link';
import Layout from '/components/Layout';
import Section from '/components/Section';

export default function Federal({ posts, orderDesc }) {
  Utils.orderPageContent(orderDesc, posts.nodes);

  return <>
    <Layout title="Federal Resources" altText="... alt text goes here ..." hero>
      {/* <Section imgName="Laws and Regulations" title="Laws and Regulations">
        <h3><Link href="https://www.ada.gov/law-and-regs/title-ii-2010-regulations/">Title II of the Americans with Disabilities Act (“ADA”)</Link></h3>
        <p>Title II of the ADA relates to nondiscrimination on the basis of disability and in state and local government services. If you have questions about the ADA, call the U.S. Department of Justice ADA Information Line: 800-514-0301 (voice); 1-833-610-1264 (TTY).</p>
      </Section>
      <Section imgName="Agencies, Guides, and Other Resources">
        <h3><Link href="https://archive.ada.gov/taman2.htm">ADA Title II Technical Assistance Manual</Link></h3>
        <p>This technical assistance manual addresses the requirements of title II of the Americans with Disabilities Act, which applies to the operations of State and local governments.</p>
        
        <h3><Link href="https://www.hud.gov/program_offices/fair_housing_equal_opp/disability_main">HUD Fair Housing Guidance and FAQs</Link></h3>
        <p>Learn more about the many federal laws that help promote equal housing opportunity for individuals with disabilities.</p>
      </Section> */}
      {
        posts.nodes.map(
          post => {
            let { title, contents } = Utils.getBasicSectionInfo(post);

            return <Section title={title} imgName={title} key={post.id}>
              { contents.map(content => parse(content)) }
            </Section>
          }
        )
      }
    </Layout>
  </>;
}

export async function getStaticProps() {
  return await Backend.getBasicRequest('Federal Resource');
}

// export default function Federal() {
//   return <>
//     <Layout title="Federal Resources" altText="... alt text goes here ..." hero>
//       <Section imgName="Federal Resources" title="Federal Resources">
//         <h2 className={styles.federalsectionheading}>Laws, Regulations, and Rules</h2>
//         <div className={styles.federalsectioncontent}>
//           <Hyperlink 
//             url = "https://www.ada.gov/law-and-regs/title-ii-2010-regulations/"
//             name = "Title II of the Americans with Disabilities Act (“ADA”)"
//             desc = "Title II of the ADA relates to nondiscrimination on the basis of disability and in state and local government services. If you have questions about the ADA, call the U.S. Department of Justice ADA Information Line: 800-514-0301 (voice); 1-833-610-1264 (TTY)."
//           />
//           <Hyperlink 
//             url = "https://www.dol.gov/agencies/oasam/centers-offices/civil-rights-center/statutes/section-504-rehabilitation-act-of-1973"
//             name = "Section 504 of the Rehabilitation Act of 1973"
//             desc = "Section 504 forbids organizations and employers from excluding or denying individual with disabilities an equal opportunity to receive program benefits and services. It defines the rights of individuals with disabilities to participate in, and have access to, program benefits and services. For more information, see the fact sheet below."
//             descAsChild
//           >
//             <p>Section 504 forbids organizations and employers from excluding or denying individual with disabilities an equal opportunity to receive program benefits and services. It defines the rights of individuals with disabilities to participate in, and have access to, program benefits and services. For more information, see the fact sheet: <Link href="https://www.dol.gov/agencies/oasam/centers-offices/civil-rights-center/statutes/section-504-rehabilitation-act-of-1973">SECTION 504 FACT SHEET</Link></p>
//           </Hyperlink>
//           <Hyperlink 
//             url = "https://www.govinfo.gov/content/pkg/USCODE-2009-title42/html/USCODE-2009-title42-chap45-subchapI.htm"
//             name = "Fair Housing Amendments Act of 1988"
//             desc = "The Fair Housing Act (also known as Title VIII of the Civil Rights Act of 1968), was amended in 1988 to prohibit discrimination in the sale, rental, and financing of dwellings, and in other housing-related transactions, based on disability. Discrimination includes a failure to make a change, exception, or adjustment to a policy, practice, procedure, or service when such accommodation may be necessary for an individual with a disability to enjoy and use housing."
//           />
//           <Hyperlink 
//             url = "https://sites.ed.gov/idea/"
//             name = "Individuals with Disabilities Education Act (“IDEA”)"
//             desc = "The Individuals with Disabilities Education Act (IDEA) is a law that makes available a free appropriate public education to eligible children with disabilities throughout the nation and ensures special education and related services to those children."
//           />
//         </div>

//         <h2 className = {styles.federalsectionheading}>Agencies and Other Resources</h2>
//         <div className={styles.federalsectioncontent}>
//           <Hyperlink 
//             url = "https://archive.ada.gov/taman2.htm"
//             name = "ADA Title II Technical Assistance Manual"
//             desc = "This technical assistance manual addresses the requirements of title II of the Americans with Disabilities Act, which applies to the operations of State and local governments."
//           />
//           <Hyperlink 
//             url = "https://www.hud.gov/program_offices/fair_housing_equal_opp/disability_main"
//             name = "HUD Fair Housing Guidance and FAQs"
//             desc = "Learn more about the many federal laws that help promote equal housing opportunity for individuals with disabilities"
//           />
//         </div>
//       </Section>
//     </Layout>
//   </>;
// }