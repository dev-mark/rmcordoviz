import React from "react";
import "../assets/styles/footer1.scss";
import { Link } from "react-router-dom";

// components
import Map from "./Map";

// assets
import RMClogo from "../assets/images/RMC.png";

// icons
import { ReactComponent as PhoneIcon } from "../assets/icons/phone-solid.svg";
import { ReactComponent as EmailIcon } from "../assets/icons/envelope-solid.svg";
import { ReactComponent as MarkerIcon } from "../assets/icons/map-marker.svg";

// bootstrap
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Footer1() {
  return (
    <div className="footer1  justify-content-center">
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
              <Link to="/about">About us</Link>
            </p>
            <p>
              <Link to="/coaching">Coaching</Link>
            </p>
            <p>
              <Link to="/health-and-wellness">Health and wellness</Link>
            </p>
            <p>
              <Link to="/contact">Let's talk</Link>
            </p>
          </Col>
          <Col xs={8} md={3} className="d-none d-sm-block">
            <h6>Get in touch</h6>
            <div className="text-left">
              <Row className="mb-1">
                <Col lg={1}>
                  <i>
                    <PhoneIcon className="contact-icons" />
                  </i>
                </Col>
                <Col>+1 877 690 9730</Col>
              </Row>
              <Row className="mb-1">
                <Col lg={1}>
                  <i>
                    <EmailIcon className="contact-icons" />
                  </i>
                </Col>
                <Col>rmcordoviz@outlook.com</Col>
              </Row>
              <Row className="mb-1">
                <Col lg={1}>
                  <i>
                    <MarkerIcon className="contact-icons" />
                  </i>
                </Col>
                <Col>600 Crowfoot Crescent, Calgary, AB T3G 0B4, Canada</Col>
              </Row>
            </div>
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
