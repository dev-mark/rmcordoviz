import React from "react";
import "../assets/styles/coaching.scss";

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
      <div className="coaching-banner blur-background">
        <div id="color-overlay">
          <div className="center-text-to-div">
            <h1 className="text-warning banner-title">
              <strong>COACHING</strong>
            </h1>
            <p className="text-white subtitle">
              A coach can be the difference between making a thousands to
              millions
            </p>
          </div>
        </div>
      </div>
      <Row className=" justify-content-center coaching-content">
        {/* <Container> */}
        <h1 className="text-warning text-title">Are you ready to LEVEL UP? </h1>
        <Row noGutters className=" justify-content-center">
          <Col lg={8} className=" text-white mb-4" id="coaching-content-text">
            <p>
              Your business is moving but you are still struggling to get a
              break. Our one on one business coaching opportunity is for
              entrepreneurs who are just getting started or if you are needing
              that push to the next level…
            </p>
            <p className="text-left checklist">
              <li>
                <span className="text-warning">•</span> Are you content with
                your current revenue?
              </li>
              <li>
                <span className="text-warning">•</span> Do you have an exit
                plan?
              </li>
              <li>
                <span className="text-warning">•</span> Are you on the road to
                the next level?
              </li>
              <li>
                <span className="text-warning">•</span> Is your vision clear?
              </li>
              <li>
                <span className="text-warning">•</span> Are you constantly
                choosing your business over your personal life?
              </li>
              <li>
                <span className="text-warning">•</span> Do you just need an
                adjustment to get yourself organized?
              </li>
              <li>
                <span className="text-warning">•</span> are you finally ready to
                invest and put away the rainy day fund?
              </li>
            </p>
            <p>
              If you answered yes to any of the questions above then it’s time
              to LEVEL UP 10x
              <p>
                {" "}
                <strong className="text-warning">
                  {" "}
                  It’s time and you deserve it!
                </strong>
              </p>
            </p>
            <Button variant="warning" className="mt-3 find-more-button">
              <strong>Find out more</strong>
            </Button>
          </Col>
        </Row>
        {/* </Container> */}
      </Row>

      <Row className=" justify-content-center ">
        <Container>
          <h1 className="text-warning mt-5 mb-5">Our Team</h1>
          <Row className="justify-content-center">
            <TeamMember name="Ross Cordoviz" image={RossImage} />
            <TeamMember name="Melanie Cordoviz" image={MelanieImage} />
          </Row>
        </Container>
      </Row>
    </div>
  );
}

export default coaching;
