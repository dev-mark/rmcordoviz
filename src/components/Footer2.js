import React from "react";
// import { Link } from "react-router-dom";
import "../assets/styles/footer2.scss";

// icons
import facebookLogo from "../assets/icons/facebook-logo.svg";
import twitterLogo from "../assets/icons/twitter-logo.svg";
import linkedInLogo from "../assets/icons/linkedin-logo.svg";
import instagramLogo from "../assets/icons/instagram-logo.svg";

// bootstrap
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Footer() {
  return (
    <div>
      <div className="footer justify-content-center">
        <Container>
          <Row>
            <Col className="footer-text">
              <p>
                <span>Copyright © 2018</span>
                <span>|</span>
                <span>RMCordoviz Consulting</span>
                <span>|</span>
                <span>Marketing</span>
                <span>|</span>
                <span>Software Development</span>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <div className="footer-socialMediaLogos">
                <a href="https://www.facebook.com/rmccordoviz/">
                  <img
                    className="icons-white"
                    src={facebookLogo}
                    height="20"
                    width="20"
                    alt="facebook logo"
                  />
                </a>
                <a href="https://twitter.com/rmccordoviz">
                  <img
                    className="icons-white"
                    src={twitterLogo}
                    height="20"
                    width="20"
                    alt="twitter logo"
                  />
                </a>
                <a href="https://www.linkedin.com/company/rmccordoviz/">
                  <img
                    className="icons-white"
                    src={linkedInLogo}
                    height="20"
                    width="20"
                    alt="linkedIn logo"
                  />
                </a>
                <a href="https://www.instagram.com/rmcordoviz/">
                  <img
                    className="icons-white"
                    src={instagramLogo}
                    height="20"
                    width="20"
                    alt="instagram logo"
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
