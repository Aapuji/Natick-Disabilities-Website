import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';
import Hero from './Hero'

const DEFAULT_DESC = 'Default Description';

const Layout = ({ children, title, desc, home }) => {
  return <>
    <Head>
      <title>{title}</title>

      <meta name="description" content={desc ? desc : DEFAULT_DESC} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={desc ? desc : DEFAULT_DESC} />
    </Head>
    <Navbar />
    { home ? <Hero /> : '' }
    <div>
      {children}
    </div>
    <Footer />
  </>;
}

export default Layout;