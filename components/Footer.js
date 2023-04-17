import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import Image from 'next/image'

const Footer = () => {
  return (
    <footer id={styles.footer} className={styles.footerContainer}>
      <div className = {styles.linkContainer}>
        <div id = {styles.contactNav} className = {styles.large}>
              <div className = {styles.contactText}>Contact</div>
              <div id = {styles.footerLinks} className={styles.footerContainer}>
                  <a href = "mailto: natickcommissionondisability@gmail.com" className = {styles.contactInline}>natickcommissionondisability@gmail.com</a>
                  <a className = {styles.contactInline}>Ph: (508)-647-6400</a>
                  <a className = {styles.contactInline}>13 East Central Street Natick, MA 01760</a>
                  <br />
              </div>
        </div>
        <div id = {styles.navigationNav} className = {styles.large}>
              <div className = {styles.navigationText}>Navigation</div>
              <div id = {styles.footerLinks} className={styles.footerContainer}>
                  <Link className = {styles.inline} href = '/'>Home</Link>
                  <Link className = {styles.inline} href = '/about'>About</Link>
                  <Link className = {styles.inline} href = '/resources'>Resources</Link>
                  <Link className = {styles.inline} href = '/events'>Events</Link>
                  <br />
              </div>
        </div>
        <div id = {styles.accessibilityNav} className = {styles.large}>
              <div className = {styles.accessibilityText}>Accessibility</div>
              <div id = {styles.footerLinks} className={styles.footerContainer}>
                  <Link className = {styles.inline} href = '/'>Home</Link>
                  <Link className = {styles.inline} href = '/about'>About</Link>
                  <Link className = {styles.inline} href = '/resources'>Resources</Link>
                  <Link className = {styles.inline} href = '/events'>Events</Link>
                  <br />
              </div>
        </div>
        <div id = {styles.followNav} className = {styles.large}>
              <div className = {styles.followText}>Follow Natick</div>
              <div id = {styles.footerLinks} className={styles.footerContainer}>
                  <Link className = {styles.inline} href = '/'>Home</Link>
                  <Link className = {styles.inline} href = '/about'>About</Link>
                  <Link className = {styles.inline} href = '/resources'>Resources</Link>
                  <Link className = {styles.inline} href = '/events'>Events</Link>
                  <br />
              </div>
        </div>
      </div>
      <div id = {styles.creators} className = {styles.small}>Created by Devashish Das & Om Sharma 2023</div>
    </footer>
  );
};

export default Footer;
