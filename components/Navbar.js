import Link from 'next/link';
import styles from '../styles/main.module.css';


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

export default Navbar;