import React from "react";

// components
import Map from "./Map";

// icons
import { ReactComponent as RMClogo } from "../assets/images/RMC-logo.svg";
import { ReactComponent as PhoneIcon } from "../assets/icons/phone-solid.svg";
import { ReactComponent as EmailIcon } from "../assets/icons/envelope-solid.svg";
import { ReactComponent as MarkerIcon } from "../assets/icons/map-marker.svg";
import { ReactComponent as FacebookLogo } from "../assets/icons/facebook-logo.svg";
import { ReactComponent as TwitterLogo } from "../assets/icons/twitter-logo.svg";
import { ReactComponent as LinkedInLogo } from "../assets/icons/linkedin-logo.svg";
import { ReactComponent as InstagramLogo } from "../assets/icons/instagram-logo.svg";
import { ReactComponent as YoutubeLogo } from "../assets/icons/youtube-logo.svg";

// bootstrap
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Footer() {
  const BASE_URL = window.location.origin;
  return (
    <div className="footer1  justify-content-center">
      <Container>
        <Row noGutters className="justify-content-center">
          <Col xs={8} md={4} lg={3}>
            <RMClogo id="footer1-RMClogo" />
            <p className="d-none d-sm-block">
              Tell us more about your goals, so we can get you started.
            </p>
          </Col>
          <Col xs={8} md={4} lg={3}>
            <h6 className="d-none d-sm-block">Quick Links</h6>
            <p>
              <a href={`${BASE_URL}/about`}>About us</a>
            </p>
            <p>
              <a href={`${BASE_URL}/coaching`}>Coaching</a>
            </p>
            <p>
              <a href={`${BASE_URL}/health-and-wellness`}>
                Health and wellness
              </a>
            </p>
            <p>
              <a href={`${BASE_URL}/contact`}>Let's talk</a>
            </p>
          </Col>
          <Col xs={8} md={4} lg={3} className="d-none d-sm-block">
            <h6>Get in touch</h6>
            <div className="text-left">
              <Row className="mb-1">
                <Col xs={1} md={1} lg={1}>
                  <i>
                    <PhoneIcon className="contact-icons" />
                  </i>
                </Col>
                <Col>
                  <p>+1 877 690 9730</p>
                </Col>
              </Row>
              <Row noGutters className="mb-1">
                <Col xs={1} md={1} lg={1}>
                  <i>
                    <EmailIcon className="contact-icons" />
                  </i>
                </Col>
                <Col>
                  <p>ross@rmcordoviz.com</p>
                </Col>
              </Row>
              <Row noGutters className="mb-1">
                <Col xs={1} md={1} lg={1}>
                  <i>
                    <MarkerIcon className="contact-icons" />
                  </i>
                </Col>
                <Col className="text-capitalize">
                  <p>
                    6671S Las Vegas Blvd. Building D, Las Vegas, Nevada, 89119
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={8} md={3} lg={3} className="d-none d-lg-block">
            <Map height="200px" width="100%" />
          </Col>
        </Row>
      </Container>
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
                <a href="https://www.youtube.com/channel/UCh4v2Jl9swUryADUYsrgvdQ">
                  <YoutubeLogo className="footer-social-media-logo" />
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
