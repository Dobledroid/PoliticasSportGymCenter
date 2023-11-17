import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { FaUser, FaShoppingCart } from 'react-icons/fa'; // Importa iconos de usuario y carrito

import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar variant="dark" expand="lg" className='Header fontGoogle'>
      <Container>
        <Navbar.Brand href="#" className="me-5"> 
          <img
            src="/images/logo_2.jpeg"
            height="30"
            className="d-inline-block align-top mx-1"
            alt="Logo"
          />
          Sport Gym Center
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#section1">Inicio</Nav.Link>
            <Nav.Link href="#section2">Tienda</Nav.Link>
            <Nav.Link href="#section3">Nosotros</Nav.Link>
            <Nav.Link href="#section4">Contacto</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="text" placeholder="Buscar" className="mr-2" />
          </Form>

          <div className="mx-2">
            <Link to="/mi-cuenta"> 
              <FaUser size={20} className="mx-2 icon-color"  />
            </Link>
            <Link to="/carrito"> 
              <FaShoppingCart size={20} className="mx-2 icon-color" />
            </Link>
          </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
