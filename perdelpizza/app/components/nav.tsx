// Bismillahirahmanirahim

"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css'

import mmpage from '../kurumsal/page';

import Mseri from '../components/mseri';
function BasicExample() {
  return (
    <Navbar  expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand href="#home"> </Navbar.Brand>
        <Mseri/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Anasayfa</Nav.Link>
            <Nav.Link href="/kurumsal">Kurumsal</Nav.Link>
     
            <Nav.Link href="/hizmetler">Yemek Dünyası</Nav.Link>
            <Nav.Link href="/iletisim">İletişim</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;