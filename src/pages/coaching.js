import React from "react";
import "../assets/styles/coaching.scss";
import { Link } from "react-router-dom";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// images
import RossImage from "../assets/images/Ross.PNG";
import MelanieImage from "../assets/images/Melanie.PNG";

// components
import TeamMember from "../components/Team-Member";

function coaching() {
  return (
    <div>
      <div className=" coaching-banner">
        <div id="color-overlay">
          <div className="center-text-to-div">
            <h1 className="text-gold banner-title">
              <strong>COACHING</strong>
            </h1>
            {/* <p className="text-white subtitle">
              A coach can be the difference between making a thousands to
              millions
            </p> */}
          </div>
        </div>
      </div>
      <Row noGutters className=" justify-content-center">
        <Row noGutters>
          <Col>
            <h1 className="text-gold text-title">
              Are you ready to LEVEL UP?{" "}
            </h1>
          </Col>
        </Row>

        <Row noGutters className=" justify-content-center">
          <Col
            xs={11}
            md={10}
            lg={8}
            className=" text-white "
            id="coaching-text-content"
          >
            <p>
              Your business is moving but you are still struggling to get a
              break. Our one on one business coaching opportunity is for
              entrepreneurs who are just getting started or if you are needing
              that push to the next level…
            </p>
            <p className="text-left checklist">
              <Row className="mb-2">
                <Col xs={1} md={1} lg={1} className="text-warning">
                  •
                </Col>
                <Col>
                  <p>Are you content with your current revenue?</p>{" "}
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs={1} md={1} lg={1} className="text-warning">
                  •
                </Col>
                <Col>
                  <p>Do you have an exit plan?</p>{" "}
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs={1} md={1} lg={1} className="text-warning">
                  •
                </Col>
                <Col>
                  {" "}
                  <p>Are you on the road to the next level?</p>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col xs={1} md={1} lg={1} className="text-warning">
                  •
                </Col>
                <Col>
                  {" "}
                  <p>Is your vision clear?</p>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col xs={1} md={1} lg={1} className="text-warning">
                  •
                </Col>
                <Col>
                  <p>
                    Are you constantly choosing your business over your personal
                    life??
                  </p>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col xs={1} md={1} lg={1} className="text-warning">
                  •
                </Col>
                <Col>
                  <p>
                    Do you just need an adjustment to get yourself organized?
                  </p>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col xs={1} md={1} lg={1} className="text-warning">
                  •
                </Col>
                <Col>
                  <p>
                    Are you finally ready to invest and put away the rainy day
                    fund?
                  </p>
                </Col>
              </Row>
            </p>
            <p>
              If you answered yes to any of the questions above then it’s time
              to LEVEL UP 10x
              <p>
                <strong className="text-gold">
                  It’s time and you deserve it!
                </strong>
              </p>
            </p>
            <Button className="my-3 find-more-button gold-button">
              <Link to="/contact" className="text-black">
                <strong>Find out more</strong>
              </Link>
            </Button>
          </Col>
        </Row>
      </Row>

      <Row noGutters className=" justify-content-center ">
        <Container className="pr-0">
          <h1 className="text-warning text-title">Our Team</h1>
          <Row noGutters className=" justify-content-center">
            <TeamMember name="Ross Cordoviz" image={RossImage} />
            <TeamMember name="Melanie Cordoviz" image={MelanieImage} />
          </Row>
        </Container>
      </Row>
    </div>
  );
}

export default coaching;
