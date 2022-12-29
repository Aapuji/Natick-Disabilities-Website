import Footer from './Footer';
import Navbar from './navbar';
import styles from '../styles/main.module.css'


const Layout = ({ children }) => {
  return <>
    <Navbar />
      <div className = {styles.body}>
        {children}
      </div>
    <Footer />
  </>;
}

export default Layout;