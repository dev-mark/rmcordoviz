import React from "react";
import "../assets/styles/home.scss";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// icons
import marketingIcon from "../assets/icons/marketing.svg";
import consultantIcon from "../assets/icons/consultant.svg";
import codeIcon from "../assets/icons/code.svg";

function index() {
  return (
    <div>
      <div className="landing-banner">
        <div className="center-text-to-div">
          <h3 className="text-white">RMCordoviz Inc.</h3>
          <h1 className="text-warning">
            <strong>Helping you achieve business success</strong>
          </h1>
          <p className="text-white">
            A coach can be the difference between making a thousands to millions
          </p>
        </div>
      </div>

      <div className="debugger bg-warning services-container-landing-page">
        <Container>
          <h1 className="mt-4 mb-4">Services</h1>
          <Row noGutters className=" justify-content-center">
            <Col lg={3} className=" category-container">
              <div className=" icon-container">
                <img
                  src={consultantIcon}
                  alt="consultant logo"
                  height="200"
                  width="200"
                />
              </div>
              <h3>Certified Consultant</h3>
              <p>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Praesent venenatis.
              </p>
            </Col>
            <Col lg={3} className=" category-container">
              <div className=" icon-container">
                <img
                  src={marketingIcon}
                  alt="marketing logo"
                  height="200"
                  width="200"
                />
              </div>
              <h3>Marketing</h3>
              <p>
                Nullam consequat urna at quam scelerisque vehicula. Morbi non
                nisi tempor, dapibus orci sit amet.
              </p>
            </Col>
            <Col lg={3} className=" category-container">
              <div className=" icon-container">
                <img
                  src={codeIcon}
                  alt="marketing logo"
                  height="200"
                  width="200"
                />
              </div>
              <h3>Web Development</h3>
              <p>
                Mauris malesuada sodales libero nec sodales. Donec interdum
                ligula ut neque hendrerit porttitor. Curabitur porttitor.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default index;
