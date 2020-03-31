import React from "react";
import "../assets/styles/services-marketing.scss";

// bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// icons
import checkIcon from "../assets/icons/check-solid.svg";
import facebookLogo from "../assets/icons/facebook-logo.svg";
import instagramLogo from "../assets/icons/instagram-logo.svg";
import twitterLogo from "../assets/icons/twitter-logo.svg";
import linkedinLogo from "../assets/icons/linkedin-logo.svg";

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
              <span>
                <img
                  className="icons-white"
                  src={checkIcon}
                  alt="Check Icon"
                  height="20"
                  width="20"
                />
              </span>
              Target Market Business Analysis
            </li>
            <li>
              <span>
                <img
                  className="icons-white"
                  src={checkIcon}
                  alt="Check Icon"
                  height="20"
                  width="20"
                />
              </span>
              Keyword Research and Development
            </li>
            <li>
              <span>
                <img
                  className="icons-white"
                  src={checkIcon}
                  alt="Check Icon"
                  height="20"
                  width="20"
                />
              </span>
              Content Optimization and Submission
            </li>
            <li>
              <span>
                <img
                  className="icons-white"
                  src={checkIcon}
                  alt="Check Icon"
                  height="20"
                  width="20"
                />
              </span>
              Continuous Testing and Measuring
            </li>
          </ul>
        </Col>
      </Row>
      <div>
        <h5 className="text-warning mt-5 mb-5">Connect with us:</h5>
      </div>
      <Row className=" justify-content-center mb-5 mt-3">
        <Col lg={2} className="  text-center justify-content-center">
          <div className="services-icon-container">
            <img
              className="icons-white"
              src={facebookLogo}
              alt="Facebook Icon"
              height="35"
              width="35"
            />
          </div>
        </Col>
        <Col lg={2} className="  text-center justify-content-center">
          <div className="services-icon-container">
            <img
              className="icons-white"
              src={twitterLogo}
              alt="Twitter Icon"
              height="35"
              width="35"
            />
          </div>
        </Col>
        <Col lg={2} className="  text-center justify-content-center">
          <div className="services-icon-container">
            <img
              className="icons-white"
              src={linkedinLogo}
              alt="Linkedin Icon"
              height="35"
              width="35"
            />
          </div>
        </Col>
        <Col lg={2} className="  text-center justify-content-center">
          <div className="services-icon-container">
            <img
              className="icons-white"
              src={instagramLogo}
              alt="Instagram Icon"
              height="35"
              width="35"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Marketing;
