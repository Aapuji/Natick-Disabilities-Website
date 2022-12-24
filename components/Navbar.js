import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  height: 80px;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href='/' passHref>
          <StyledLink>NOCD</StyledLink>
        </Link>
      </div>
      <div>
        <Link href='/about' passHref>
          <StyledLink>About</StyledLink>
        </Link>
        <Link href='/info' passHref>
          <StyledLink>Information</StyledLink>
        </Link>
        <Link href='/events' passHref>
          <StyledLink>Events</StyledLink>
        </Link>
        <Link href='/people' passHref>
          <StyledLink>People</StyledLink>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;