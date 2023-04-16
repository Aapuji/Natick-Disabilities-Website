import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import Image from 'next/image'

const Footer = () => {
  return (
    <footer id={styles.footer} className={styles.footerContainer}>
      <div id = {styles.footerNav} className = {styles.large}>
            NAVIGATION
            <div id = {styles.footerLinks} className={styles.footerContainer}>
                <a href = "#" className = {styles.inline}>EMAIL</a>
                <a href = "#" className = {styles.inline}>PHONE</a>
                <a href = "#" className = {styles.inline}>LOCATION</a>
                <br />
            </div>
      </div>
      <div id={styles.footerSocials} className={styles.footerContainer}>
            <a href="#" id={styles.twitterIcon}><Image src="" alt="twitter-icon" /></a>
            <a href="#" id={styles.facebookIcon}><Image src="" alt="facebook-icon" /></a>
            <a href="#" id={styles.instagramIcon}><Image src="" alt="instagram-icon" /></a>
      </div>      
    </footer>
  );
};

export default Footer;