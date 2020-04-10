import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RMClogo } from "../assets/images/RMC-logo.svg";

// bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

// icons
import { ReactComponent as DropIcon } from "../assets/icons/down-solid.svg";

const App = (props) => {
  const [location, setLocation] = useState("");
  const [navExpanded, setNavExpanded] = useState(false);

  useEffect(() => {
    setLocation(window.location.pathname);
    // eslint-disable-next-line
  }, [window.location.pathname]);

  return (
    <Navbar
      collapseOnSelect={true}
      expand="md"
      variant="dark"
      className="justify top-layer"
      expanded={navExpanded}
      onToggle={() => setNavExpanded(!navExpanded)}
    >
      <Container>
        <Navbar.Brand href="/">
          <RMClogo className="RMClogo d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="justify-content-end">
            <Nav.Link>
              <Link
                to="/"
                className={location === "/" && "selected-state"}
                onClick={() => {
                  setLocation("home");
                  setNavExpanded(false);
                }}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/about"
                className={location === "/about" && "selected-state"}
                onClick={() => {
                  setLocation("about");
                  setNavExpanded(false);
                }}
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/services"
                className={location === "/services" && "selected-state"}
                onClick={() => {
                  setLocation("services");
                  setNavExpanded(false);
                }}
              >
                Services
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/contact"
                className={location === "/contact" && "selected-state"}
                onClick={() => {
                  setLocation("contact");
                  setNavExpanded(false);
                }}
              >
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/coaching"
                className={location === "/coaching" && "selected-state"}
                onClick={() => {
                  setLocation("coaching");
                  setNavExpanded(false);
                }}
              >
                Coaching
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/health-and-wellness"
                className={
                  location === "/health-and-wellness" && "selected-state"
                }
                onClick={() => {
                  setLocation("health-and-wellness");
                  setNavExpanded(false);
                }}
              >
                Health and Wellness
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <NavDropdown
          title={<DropIcon className="drop-icon" />}
          id="basic-nav-dropdown"
          className="dropdown-menu-right"
        >
          <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Register</NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  );
};

export default App;
