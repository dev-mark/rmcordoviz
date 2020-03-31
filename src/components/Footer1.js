import React from "react";
import "../assets/styles/footer1.scss";
import { Link } from "react-router-dom";

// components
import Map from "./Map";

// assets
import RMClogo from "../assets/images/RMC.png";

// icons
import phoneSolid from "../assets/icons/phone-solid.svg";
import envelopeSolid from "../assets/icons/envelope-solid.svg";

// bootstrap
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Footer1() {
  return (
    <div className="footer1 debugger justify-content-center">
      <Container>
        <Row noGutters className="justify-content-center">
          <Col xs={8} md={3}>
            <img id="footer1-RMClogo" src={RMClogo} alt="RMC Logo" />
            <p className="d-none d-sm-block">
              Tell us more about your goals, so we can get you started.
            </p>
          </Col>
          <Col xs={8} md={3}>
            <h6 className="d-none d-sm-block">Quick Links</h6>
            <p>
              <Link>About us</Link>
            </p>
            <p>
              <Link>Coaching</Link>
            </p>
            <p>
              <Link>Health and wellness</Link>
            </p>
            <p>
              <Link>Let's talk</Link>
            </p>
          </Col>
          <Col xs={8} md={3} className="d-none d-sm-block">
            <h6>Get in touch</h6>
            <p>
              {" "}
              <img
                className="icons-white"
                src={phoneSolid}
                height="15"
                width="15"
                alt="phone icon"
              />
              +1 877 690 9730
            </p>
            <p>
              {" "}
              <img
                className="icons-white"
                src={envelopeSolid}
                height="15"
                width="15"
                alt="envelope icon"
              />
              rmcordoviz@outlook.com
            </p>
          </Col>
          <Col xs={8} md={3}>
            <div style={{ height: "200px" }}>
              <Map
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB7F3Mt64XDAJ6EeXCRxh0H28vD2lZoYh4`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer1;
