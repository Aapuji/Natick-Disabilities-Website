import Layout from '../components/Layout';
// TODO: Use and Import Reset.CSS 
import '../styles/globals.css';
import '../styles/main.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;