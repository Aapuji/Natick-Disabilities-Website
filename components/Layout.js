import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';
import Hero from './Hero'
import styles from '../styles/Footer.module.css';

const DEFAULT_DESC = 'Default Description';

const Layout = ({ children, title, desc, altText, heroImg, hero }) => {
  return <>
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc ? desc : DEFAULT_DESC} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={desc ? desc : DEFAULT_DESC} />
      </Head>
      { hero ? <Hero title={title ?? "Natick Commission on Disability"} img={heroImg} altText={altText} /> : <></> }
      {children}
      <Footer />
    </div>
  </>;
}

export default Layout;