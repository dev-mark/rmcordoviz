import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/navbar.scss";
import logo from "../assets/images/RMC.png";

// bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

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
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="60"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
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
    </Navbar>
  );
};

export default App;
