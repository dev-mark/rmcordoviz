import React from "react";
import "../assets/styles/footer2.scss";

// icons
import { ReactComponent as FacebookLogo } from "../assets/icons/facebook-logo.svg";
import { ReactComponent as TwitterLogo } from "../assets/icons/twitter-logo.svg";
import { ReactComponent as LinkedInLogo } from "../assets/icons/linkedin-logo.svg";
import { ReactComponent as InstagramLogo } from "../assets/icons/instagram-logo.svg";

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
              <div className="footer-socialMediaLogos">
                <a href="https://www.facebook.com/rmccordoviz/">
                  <FacebookLogo className="footer-social-media-logo" />
                </a>
                <a href="https://twitter.com/rmccordoviz">
                  <TwitterLogo className="footer-social-media-logo" />
                </a>
                <a href="https://www.linkedin.com/company/rmccordoviz/">
                  <LinkedInLogo className="footer-social-media-logo" />
                </a>
                <a href="https://www.instagram.com/rmcordoviz/">
                  <InstagramLogo className="footer-social-media-logo" />
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
