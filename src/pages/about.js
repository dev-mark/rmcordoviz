import React from "react";
import "../assets/styles/about.scss";
import { Link } from "react-router-dom";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

// images
import RossImage from "../assets/images/Ross.PNG";
import MelanieImage from "../assets/images/Melanie.PNG";
import RMCLogo from "../assets/images/RMC-logo.svg";
import Button from "react-bootstrap/Button";
import { ReactComponent as CheckIcon } from "../assets/icons/check-solid.svg";

function about() {
  return (
    <div>
      <div className=" about-us-banner">
        <div id="color-overlay">
          <div className="center-text-to-div">
            <h1 className="text-gold banner-title">
              <strong>ABOUT US</strong>
            </h1>
            {/* <p className="subtitle  text-white text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec.
            </p> */}
          </div>
        </div>
      </div>
      <Container className="mb-5">
        <Row className=" my-5">
          <Col lg={9} className=" ">
            <div className="about-us-content  text-left text-white ">
              <p className="">
                Have you ever found yourself on the brink of success or throwing
                in the towel?
              </p>
              <p className="">
                We all know that the road to success and failure can run the
                same path.
              </p>
              <h5 className="text-gold">We’ve been there.</h5>
              <p className="">
                At RMCordoviz Inc., we help shape your strongest suit to
                withstand fear and set you and your business on a journey
                towards Leadership and Success.
              </p>
              <h5 className="text-gold">Because we care.</h5>
              <p className="">
                We bring solutions and take your business to a whole new level.
                Our consultants are experts in providing all your business needs
                encompassing today’s e-commerce landscape and the realm of
                digital marketing.
              </p>
              <p className="">
                At RMCordoviz Inc., we share our expertise while providing the
                greatest collective ideas to improve your business and create
                concrete methods that will get you there.
              </p>
              <p className="">
                We bring out the best in you and your company through cutting
                edge solutions for :
              </p>
              <ul className="">
                <Row className="">
                  <Col lg={0.5} className="">
                    <CheckIcon className="gold-check-icon " />
                  </Col>
                  <Col className="">Business Development</Col>
                </Row>
                <Row>
                  <Col lg={0.5}>
                    <CheckIcon className="gold-check-icon" />
                  </Col>
                  <Col>Business Coaching and Consultancy</Col>
                </Row>
                <Row>
                  <Col lg={0.5}>
                    <CheckIcon className="gold-check-icon" />
                  </Col>
                  <Col>Digital Marketing</Col>
                </Row>
                <Row>
                  <Col lg={0.5}>
                    <CheckIcon className="gold-check-icon" />
                  </Col>
                  <Col>Social Media Management, Ads Development and SEO</Col>
                </Row>
                <Row>
                  <Col lg={0.5}>
                    <CheckIcon className="gold-check-icon" />
                  </Col>
                  <Col>Software Development</Col>
                </Row>
              </ul>
              <p className="">
                At RMCordoviz Inc Our methods focus on results. We measure our
                success not on what we have tried, but what has succeeded.
              </p>
              <h5 className="text-gold">
                We succeed when our clients succeed.
              </h5>
            </div>
          </Col>
          <Col lg={3} className="py-4">
            <Card>
              <Card.Header></Card.Header>
              <Card.Body>
                <Card.Img
                  variant="top"
                  className="rmc-logo-about "
                  src={RMCLogo}
                />
                <Card.Text>Learn what we do best.</Card.Text>
                {/* <Button className="gold-button"> Get in touch </Button> */}
                <Button className="pt-2 pb-2 landing-button gold-button">
                  <Link to="/contact" className="text-black">
                    <strong>Get in touch</strong>
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row noGutters className="mb-5  justify-content-center">
          <h1 className="text-title text-gold text-capitalize">
            Get to know Us
          </h1>
          <Col lg={11}>
            <Row noGutters className=" justify-content-center  row-container">
              <Col md={5} lg={5}>
                <img
                  src={RossImage}
                  className="team-member-image"
                  alt="Certified Consultant"
                />
              </Col>
              <Col
                md={7}
                lg={7}
                className="text-left gold-background  info-div "
              >
                <div className="mb-4">
                  <h3>
                    <strong>Ross Cordoviz</strong>
                  </h3>
                  {/* <small>Position</small> */}
                </div>

                <div className="mb-5">
                  <h6>
                    <strong>About Me</strong>
                  </h6>
                  <p>
                    I am a serial Entrepreneur that loves the thrill of the hunt
                    and close. I thrive under pressure helping businesses
                    achieve their greatest potential!
                  </p>
                </div>

                <div className="mb-5">
                  <h6>
                    <strong>What I do</strong>
                  </h6>
                  <p>
                    I will be the first to say that most companies fail because
                    of the vision. The vision is small or they get side tracked.
                    Are you one of those people? Did you lose site of your
                    “Why”? Whether you need me or another coach, the important
                    part is just make sure you have one.
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
                  alt="Certified Consultant"
                />
              </Col>
              <Col
                md={7}
                lg={7}
                className="text-left gold-background  info-div"
              >
                <div className="mb-4">
                  <h3>
                    <strong>Melanie Cordoviz</strong>
                  </h3>
                  {/* <small>Position</small> */}
                </div>

                <div className="mb-5">
                  <h6>
                    <strong>About Me</strong>
                  </h6>
                  <p>
                    For me, It’s about nurturing the business and it’s needs.
                    Most forget about this part. They close the deal and then
                    are done. Let’s keep going. Great leads are hard to find.
                    Closed deals means a relationship is there forever if you
                    just nurture it.
                  </p>
                </div>

                <div className="mb-5">
                  <h6>
                    <strong>How I started</strong>
                  </h6>
                  <p>
                    I decided it’s time to get out there and just do it. Like
                    Nike? lol really it’s about just getting up and saying “Yes
                    I can”
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
    </div>
  );
}

export default about;
