import React, { useState } from "react";
import "../assets/styles/services.scss";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// icons
import marketingIcon from "../assets/icons/marketing.svg";
import consultantIcon from "../assets/icons/consultant.svg";
import codeIcon from "../assets/icons/code.svg";

// Components
import SoftwareDevelopment from "../components/Services-SoftwareDevelopment";
import Coaching from "../components/Services-Coaching";
import Marketing from "../components/Services-Marketing";

const Services = () => {
  const [selected, setSelected] = useState("coaching");

  return (
    <div>
      <div className=" services-banner">
        <div id="color-overlay">
          <div className=" center-text-to-div">
            <h1 className=" text-warning">
              <strong>SERVICES</strong>
            </h1>
            <p className="  text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec.
            </p>
          </div>
        </div>
      </div>
      <div className="services-category  text-center">
        <Container>
          <Row noGutters className=" justify-content-center">
            <Col lg={3} className=" category-title">
              <h3 className="text-warning">Coaching</h3>
            </Col>
            <Col lg={3} className=" category-title">
              <h3 className="text-warning">Marketing</h3>
            </Col>
            <Col lg={3} className=" category-title">
              <h3 className="text-warning">Software Development</h3>
            </Col>
          </Row>
          <Row noGutters className=" justify-content-center">
            <Col
              lg={3}
              className=" category-container"
              onClick={() => setSelected("coaching")}
            >
              <div className=" icon-container">
                <img
                  src={consultantIcon}
                  alt="consultant logo"
                  height="200"
                  width="200"
                />
              </div>
              <hr className="line-indicator" />
            </Col>
            <Col
              lg={3}
              className=" category-container"
              onClick={() => setSelected("marketing")}
            >
              <div className=" icon-container">
                <img
                  src={marketingIcon}
                  alt="marketing logo"
                  height="200"
                  width="200"
                />
              </div>
              <hr className="line-indicator" />
            </Col>
            <Col
              lg={3}
              className=" category-container"
              onClick={() => setSelected("development")}
            >
              <div className=" icon-container">
                <img
                  src={codeIcon}
                  alt="marketing logo"
                  height="200"
                  width="200"
                />
              </div>
              <hr className="line-indicator" />
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="">
        {selected === "coaching" && <Coaching />}
        {selected === "marketing" && <Marketing />}
        {selected === "development" && <SoftwareDevelopment />}
      </Container>
    </div>
  );
};

export default Services;
