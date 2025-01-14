import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="ms-auto">
          <Navbar.Brand href="#">navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </> 
  );
};
export default Navigation;
