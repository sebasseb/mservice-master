import React , {useState } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../css/Navbar.css'
import Logo from '../img/master-logo.webp'


/* 
Auto Hide when scroll down

var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-80px";
      }
      prevScrollpos = currentScrollPos;
    }*/

const NewNavbar = () => {
  const [expanded, setExpanded] = useState(false);


  
  return (
    <>
      <Navbar id="navbar" expand="lg" expanded={expanded}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className="w-75" src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto  ">
              <Nav.Link as={Link} to="/" id="sec" onClick={() => setExpanded(false)}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/nosotros" id="sec" onClick={() => setExpanded(false)}>
                Nosotros
              </Nav.Link>

              <NavDropdown title="Servicios" id="sec" >
                <NavDropdown.Item
                  as={Link}
                  to="/mantencion-industrial"
                  id="sec"
                  onClick={() => setExpanded(false)}
                >
                  Mantención Industrial
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/tratamiento-pisos" id="sec" onClick={() => setExpanded(false)}>
                  Tratamiento de Pisos
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/vidrios-vertical" id="sec" onClick={() => setExpanded(false)}>
                  Limpieza de Vidrios en Vertical
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item as={Link} to="/estacionamientos" id="sec" onClick={() => setExpanded(false)}>
                  Limpieza Estacionamientos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/fumigacion" id="sec" onClick={() => setExpanded(false)}>
                  Fumigación
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/control-plagas" id="sec" onClick={() => setExpanded(false)}>
                  Control de Plagas
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contacto" id="sec" onClick={() => setExpanded(false)}>
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NewNavbar