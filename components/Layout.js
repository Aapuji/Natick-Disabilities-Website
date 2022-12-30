import Footer from './Footer';
import Navbar from './navbar';
import Hero from './Hero'
import styles from '../styles/main.module.css'


const Layout = ({ children }) => {
  return <>
    <Navbar />
      <div className = {styles.body}>
        {children}
      </div>
      <Hero />
    <Footer />
  </>;
}

export default Layout;