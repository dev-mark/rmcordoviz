import React from "react";
import "../assets/styles/about.scss";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// images
import RossImage from "../assets/images/Ross.PNG";
import MelanieImage from "../assets/images/Melanie.PNG";

function about() {
  return (
    <Container className="mb-5">
      <h1 className=" text-white banner-title">ABOUT US</h1>
      <Row noGutters className="mb-5  justify-content-center">
        <Col lg={11}>
          <Row noGutters className=" justify-content-center  row-container">
            <Col md={5} lg={5}>
              <img
                src={RossImage}
                className="team-member-image"
                alt="Ross Cordoviz"
              />
            </Col>
            <Col md={7} lg={7} className="text-left bg-warning  info-div">
              <div className="mb-4">
                <h3>
                  <strong>Ross Cordoviz</strong>
                </h3>
                <small>Position</small>
              </div>

              <div className="mb-5">
                <h6>
                  <strong>About Me</strong>
                </h6>
                <p>
                  I am a serial Entrepreneur that loves the thrill of the hunt
                  and close. I thrive under pressure helping businesses achieve
                  their greatest potential!
                </p>
              </div>

              <div className="mb-5">
                <h6>
                  <strong>What I do</strong>
                </h6>
                <p>
                  I will be the first to say that most companies fail because of
                  the vision. The vision is small or they get side tracked. Are
                  you one of those people? Did you lose site of your “Why”?
                  Whether you need me or another coach, the important part is
                  just make sure you have one.
                </p>
              </div>

              <div className="mb-5">
                <h6>
                  <strong>Closer</strong>
                </h6>
                <p>
                  I will show you to succeed with any business. It’s about you
                  and your story. Let’s talk!
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row noGutters className="mb-5  justify-content-center">
        <Col lg={11}>
          <Row noGutters className=" justify-content-center ">
            <Col md={5} lg={5}>
              <img
                src={MelanieImage}
                className="team-member-image"
                alt="Melanie Cordoviz"
              />
            </Col>
            <Col md={7} lg={7} className="text-left bg-warning  info-div">
              <div className="mb-4">
                <h3>
                  <strong>Melanie Cordoviz</strong>
                </h3>
                <small>Position</small>
              </div>

              <div className="mb-5">
                <h6>
                  <strong>About Me</strong>
                </h6>
                <p>
                  For me, It’s about nurturing the business and it’s needs. Most
                  forget about this part. They close the deal and then are done.
                  Let’s keep going. Great leads are hard to find. Closed deals
                  means a relationship is there forever if you just nurture it.
                </p>
              </div>

              <div className="mb-5">
                <h6>
                  <strong>How I started</strong>
                </h6>
                <p>
                  I decided it’s time to get out there and just do it. Like
                  Nike? lol really it’s about just getting up and saying “Yes I
                  can”
                </p>
              </div>

              <div className="mb-5">
                <h6>
                  <strong>Final</strong>
                </h6>
                <p>
                  We would like to lock arms with businesses that are tired of
                  being tired. Contact me today
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default about;
