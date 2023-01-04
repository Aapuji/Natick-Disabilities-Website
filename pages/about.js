import Head from 'next/head';
import Layout from '../components/Layout';
import aboutStyles from '../styles/About.module.css';

export default function About() {
  return <>
    <Layout title="Natick Commission on Disability">
      <h1 className = {aboutStyles.miniAboutHeading}>What is The Natick Commission on Disability?</h1>
      <p  className = {aboutStyles.miniAbout}>As referenced in Chapter 40: Section 8J Disability Commission; powers and duties; members; terms Section 8J:</p>
      <p>A city which accepts the provisions of this section by vote of its city council, subject to the provisions of its charter, or a town which accepts the provisions of this section at an annual or special town meeting, may establish a commission on disability, hereinafter called the commission, to cause the full integration and participation of people with disabilities in such city or town. Such commission shall: </p>
      <ul>
        <li>
        Research local problems of people with disabilities
        </li>
        <li>
        Advise and assist municipal officials and employees in ensuring compliance with state and federal laws and regulations that affect people with disabilities
        </li>
        <li>
        Coordinate or carry out programs designed to meet the problems of people with disabilities in coordination with programs of the MA office on disability
        </li>
        <li>
        Review and make recommendations about policies, procedures, services, activities and facilities of departments, boards and agencies of said city or town as they affect people with disabilities
        </li>
        <li>
        Provide information, referrals, guidance and technical assistance to individuals, public agencies, businesses and organizations in all matters pertaining to disability
        </li>
        <li>
        Coordinate activities of other local groups organized for similar purposes
        </li>
      </ul>

    </Layout>
  </>;
}