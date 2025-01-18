import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import "./Navigation.css";
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navigation = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" >
        <Container className="ms-auto">
          <Navbar.Brand href="/">Marvel Heros</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Offcanvas id="offcanvasnavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end" >
          <Offcanvas.Header closeButton >
            <Offcanvas.Title className="offcanvasNavbarlabel" >
             Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Home</Nav.Link>
          </Nav>
          </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      </> 
  );
};
export default Navigation;
