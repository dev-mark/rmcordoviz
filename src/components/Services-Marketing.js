import React from "react";
import "../assets/styles/services-marketing.scss";

// bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// icons
import { ReactComponent as FacebookLogo } from "../assets/icons/facebook-logo.svg";
import { ReactComponent as TwitterLogo } from "../assets/icons/twitter-logo.svg";
import { ReactComponent as LinkedInLogo } from "../assets/icons/linkedin-logo.svg";
import { ReactComponent as InstagramLogo } from "../assets/icons/instagram-logo.svg";
import { ReactComponent as CheckIcon } from "../assets/icons/check-solid.svg";

function Marketing() {
  return (
    <div className="">
      <div>
        <h1 className="text-warning mt-5 mb-5">STAND OUT.</h1>
      </div>
      <Row className=" marketing-content text-white justify-content-center">
        <Col lg={12} className="">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            et dolor vitae libero porttitor malesuada. Proin ultricies euismod
            volutpat. Donec venenatis, enim eget dictum efficitur, lacus leo
            imperdiet arcu, non vulputate est quam at dolor. Aenean vel blandit
            diam. Fusce et magna urna. Maecenas condimentum facilisis nunc,
            tempus consequat odio tincidunt quis. Vestibulum luctus nunc nec
            euismod ultrices. Pellentesque eu arcu ac odio imperdiet blandit.
            Morbi eu tempor enim. Nullam a consequat libero. Phasellus
            tincidunt, enim sed finibus auctor, lectus risus lacinia massa, ac
            mollis est ex eget ligula. Aliquam erat volutpat. Mauris arcu lorem,
            pharetra eget ornare vulputate, aliquam vel turpis.
          </p>

          <p>
            Phasellus a felis fringilla, volutpat ante a, ultrices libero. Nulla
            ac sollicitudin ipsum. Suspendisse non lectus dolor. Donec a elit
            lorem. Cras velit nisl, tristique vitae metus sit amet, dapibus
            ultrices elit. Etiam eget condimentum magna. Donec iaculis, libero
            quis lacinia tempor, ipsum felis consequat est, vel convallis.
          </p>
        </Col>
      </Row>
      <Row className=" text-left text-white seo-checklist justify-content-center">
        <Col lg={10} className=" ">
          <ul>
            <li className="">
              <i>
                <CheckIcon className="gold-check-icon" />
              </i>
              Target Market Business Analysis
            </li>
            <li>
              <i>
                <CheckIcon className="gold-check-icon" />
              </i>
              Keyword Research and Development
            </li>
            <li>
              <i>
                <CheckIcon className="gold-check-icon" />
              </i>
              Content Optimization and Submission
            </li>
            <li>
              <i>
                <CheckIcon className="gold-check-icon" />
              </i>
              Continuous Testing and Measuring
            </li>
          </ul>
        </Col>
      </Row>
      <div>
        <h5 className="text-warning mt-5 mb-5">Connect with us:</h5>
      </div>
      <Row className=" justify-content-center mb-5 mt-3">
        <Col lg={1} className="  text-center justify-content-center mx-1">
          <a href="https://www.facebook.com/rmccordoviz/">
            <div className="services-icon-container">
              <FacebookLogo className="services-icon" />
            </div>
          </a>
        </Col>
        <Col lg={1} className="   text-center justify-content-center">
          <a href="https://twitter.com/rmccordoviz">
            <div className="services-icon-container">
              <TwitterLogo className="services-icon" />
            </div>
          </a>
        </Col>
        <Col lg={1} className="   text-center justify-content-center">
          <a href="https://www.linkedin.com/company/rmccordoviz/">
            <div className="services-icon-container">
              <LinkedInLogo className="services-icon" />
            </div>
          </a>
        </Col>
        <Col lg={1} className="   text-center justify-content-center">
          <a href="https://www.instagram.com/rmcordoviz/">
            <div className="services-icon-container">
              <InstagramLogo className="services-icon" />
            </div>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default Marketing;
