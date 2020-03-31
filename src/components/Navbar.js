import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/navbar.scss";
import logo from "../assets/images/RMC.png";

// bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Navbar collapseOnSelect expand="md" variant="dark" className="justify">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="60"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/services">Services</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/coaching">Coaching</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/health-and-wellness">Health and Wellness</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
