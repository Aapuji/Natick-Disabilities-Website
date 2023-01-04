import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className = {styles.wholeNav}>
      <div className = {styles.commissionLogo}>
        <Link className = {styles.styledLink} href = '/'>NCOD</Link>
      </div>
      <ul className = {styles.nav}>
          <li>
            <Link className={styles.styledLink} href='/'>Home</Link>
          </li>
          <li>
            <Link className = {styles.styledLink} href = '/about'>About</Link>
          </li>
          <li>
            <Link className = {styles.styledLink} href = '/info'>Information</Link>
          </li>
          <li>
            <Link className = {styles.styledLink} href = '/events'>Events</Link>
          </li>
          <li>
            <Link className = {styles.styledLink} href = '/people'>People</Link>
          </li>
      </ul>
    </nav>
  );
};

export default Navbar;

/*
const Navbar = () => {
  return (
    <nav className = {styles.mainNav}>
      <div>
        <Link href='/' passHref>
          <Link className= {styles.styledLink}>NOCD</Link>
        </Link>
      </div>
      <div>
        <Link href='/about' passHref>
          <Link className= {styles.styledLink}>About</Link>
        </Link>
        <Link href='/info' passHref>
          <Link className= {styles.styledLink}>Information</Link>
        </Link>
        <Link href='/events' passHref>
          <Link className= {styles.styledLink}>Events</Link>
        </Link>
        <Link href='/people' passHref>
          <Link className= {styles.styledLink}>People</Link>
        </Link>
      </div>
    </nav>
  );
};
*/

