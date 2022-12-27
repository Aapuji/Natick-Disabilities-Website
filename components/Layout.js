import Footer from './Footer';
import Navbar from './navbar';
import styles from '../styles/main.module.css'


export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <body className = {styles.body}>
      {children}
      </body>
      <Footer />
    </div>
  );
}