import styled from 'styled-components'
import Link from 'next/link'

const Nav = styled.nav`
  height = 80px;
  background: blue;
  text-align: center;
  
  `


const Navbar = () => {
  return (
    <Nav>
        <h1><Link href = "/index">Home </ Link></h1>
        <h1><Link href = "/about">About</Link></h1>
        <h1><Link href = "/info">Information</Link></h1>
        <h1><Link href = "/events">Events</Link></h1>
        <h1><Link href = "/people">People</Link></h1>
    </Nav>
  );
};

export default Navbar;