import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/navbar.scss";
import logo from "../assets/images/RMC.png";

// bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const App = () => {
  const [selected, setSelected] = useState("home");
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
              <Link
                to="/"
                className={selected === "home" && "selected-state"}
                onClick={() => setSelected("home")}
              >
                Home
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                to="/about"
                className={selected === "about" && "selected-state"}
                onClick={() => setSelected("about")}
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/services"
                className={selected === "services" && "selected-state"}
                onClick={() => setSelected("services")}
              >
                Services
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/contact"
                className={selected === "contact" && "selected-state"}
                onClick={() => setSelected("contact")}
              >
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/coaching"
                className={selected === "coaching" && "selected-state"}
                onClick={() => setSelected("coaching")}
              >
                Coaching
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/health-and-wellness"
                className={
                  selected === "health-and-wellness" && "selected-state"
                }
                onClick={() => setSelected("health-and-wellness")}
              >
                Health and Wellness
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default App;
