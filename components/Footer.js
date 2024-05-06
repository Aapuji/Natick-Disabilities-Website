import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import Image from 'next/image'

const Footer = () => {
  return <footer id={styles.footer} className={styles.footerContainer}>
    <div id={styles.contentContainer} className={styles.linkContainer}>
      <div id={styles.contactNav} className={styles.large}>
            <div className={styles.contactText}>Contact</div>
            <div className={`${styles.footerContainer} ${styles.footerLinks}`}>
              <Link href="mailto:NCOD@natickma.org" className={styles.inline}>
                NCOD@natickma.org
              </Link>
              <a className={styles.contactInline}>13 East Central Street Natick, MA 01760</a>
              <a className={styles.contactInline}>Ph: 508-647-6400</a>
              <Link href="https://natickma.granicus.com/boards/forms/265/apply/" className={styles.inline}>
                Apply
              </Link>
            </div>
      </div>
      <div id={styles.navigationNav} className={styles.large}>
            <div className={styles.navigationText}>Navigation</div>
            <div className={`${styles.footerContainer} ${styles.footerLinks}`}>
              <Link className={styles.inline} href='/'>Home</Link>
              <Link className={styles.inline} href='/about'>About</Link>
              <Link className={styles.inline} href='/resources'>Resources</Link>
              <Link className={styles.inline} href='/events'>Events</Link>
            </div>
      </div>
      <div id={styles.accessibilityNav} className={styles.large}>
            <div className={styles.accessibilityText}>Accessibility</div>
            <div className={`${styles.footerContainer} ${styles.footerLinks}`}>
              <Link className={styles.inline} href="https://www.natickma.gov/accessibility#">Natick Accessibility</Link>
            </div>
      </div>
      <div id={styles.followNav} className={styles.large}>
            <div className={styles.followText}>Follow Natick</div>
            <div className={`${styles.footerContainer} ${styles.footerLinks}`}>
              <Link className={styles.inline} href='https://www.facebook.com/TownOfNatick'>Facebook</Link>
              <Link className={styles.inline} href='https://twitter.com/town_of_natick'>Twitter</Link>
            </div>
      </div>
      <div id={styles.emergencyNav} className={styles.large}>
            <div className={styles.emergencyText}>Emergency</div>
            <div className={`${styles.footerContainer} ${styles.footerLinks}`}>
              <Link className={styles.inline} href='/resources/emergency'>Emergency Information Page</Link>
              <a className={styles.contactInline}>Disability Abuse Hotline: 1-800-426-9009</a>
              <a className={styles.contactInline}>Veterans Crisis Line: 1-800-273-8255</a>
            </div>
      </div>
    </div>
    <div id={styles.creators} className={styles.small}>Created by Devashish Das & Om Sharma &copy;&thinsp;2024</div>
  </footer>;
};

export default Footer;
