import React, { useState, useEffect } from "react";
import "../assets/styles/services.scss";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// icons
import { ReactComponent as MarketingIcon } from "../assets/icons/marketing.svg";
import { ReactComponent as ConsultantIcon } from "../assets/icons/consultant.svg";
import { ReactComponent as DevelopmentIcon } from "../assets/icons/code.svg";

// Components
import SoftwareDevelopment from "../components/Services-SoftwareDevelopment";
import Coaching from "../components/Services-Coaching";
import Marketing from "../components/Services-Marketing";

const Services = props => {
  const [selected, setSelected] = useState("marketing");

  useEffect(() => {
    if (props.location.state !== undefined) {
      setSelected(props.location.state.category);
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div className=" services-banner">
        <div id="color-overlay">
          <div className=" center-text-to-div">
            <h1 className="banner-title text-warning">
              <strong>SERVICES</strong>
            </h1>
            <p className="subtitle  text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec.
            </p>
          </div>
        </div>
      </div>
      <div className="services-category  text-center">
        <Container>
          <Row noGutters className="mt-4 justify-content-center">
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
                <ConsultantIcon
                  className={`icon-component ${selected === "coaching" &&
                    "icon-component-selected"}`}
                />
              </div>
              <hr
                className={`line-indicator ${selected === "coaching" &&
                  "selected-indicator"}`}
              />
            </Col>
            <Col
              lg={3}
              className=" category-container"
              onClick={() => setSelected("marketing")}
            >
              <div className=" icon-container">
                <MarketingIcon
                  className={`icon-component ${selected === "marketing" &&
                    "icon-component-selected"}`}
                />
              </div>
              <hr
                className={`line-indicator ${selected === "marketing" &&
                  "selected-indicator"}`}
              />
            </Col>
            <Col
              lg={3}
              className=" category-container"
              onClick={() => setSelected("development")}
            >
              <div className=" icon-container">
                <DevelopmentIcon
                  className={`icon-component ${selected === "development" &&
                    "icon-component-selected"}`}
                />
              </div>
              <hr
                className={`line-indicator ${selected === "development" &&
                  "selected-indicator"}`}
              />
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
