import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import './Header.css'

function Header() {
  return (
    <Navbar className='navbar-bg'  expand="lg" >
      <Container >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className='align-items-center'>
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="/our-story">Our Story</NavDropdown.Item>
              <NavDropdown.Item href="/our-team">Our Team</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/services">Services</Nav.Link>
            <Navbar.Brand href="/home" className='brand'>BS</Navbar.Brand>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/career">Career</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button >Book Demo</Button>
      </Container>
    </Navbar>
  );
}

export default Header;