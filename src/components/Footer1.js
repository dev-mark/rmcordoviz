import React from "react";
import "../assets/styles/footer1.scss";
import { Link } from "react-router-dom";

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
        <Row>
          <Col className="debugger">
            <img id="footer1-RMClogo" src={RMClogo} alt="RMC Logo" />
            <p>Tell us more about your goals, so we can get you started.</p>
          </Col>
          <Col className="debugger">
            <h6>Quick Links</h6>
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
          <Col className="debugger">
            <h6>Get in touch</h6>
            <p>
              {" "}
              <img src={phoneSolid} height="15" width="15" alt="phone icon" />
              +1 877 690 9730
            </p>
            <p>
              {" "}
              <img
                src={envelopeSolid}
                height="15"
                width="15"
                alt="envelope icon"
              />
              rmcordoviz@outlook.com
            </p>
          </Col>
          <Col className="debugger">4</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer1;
