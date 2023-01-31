import 'normalize.css/normalize.css'; 
import '../styles/globals.css';
import '../styles/main.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;