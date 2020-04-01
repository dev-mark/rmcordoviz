import React, { useState } from "react";
import "../assets/styles/home.scss";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

// icons
import marketingIcon from "../assets/icons/marketing.svg";
import consultantIcon from "../assets/icons/consultant.svg";
import codeIcon from "../assets/icons/code.svg";

// images
import oneOnOnePhoto from "../assets/images/one-one-talk.png";
import sharedExpertisePhoto from "../assets/images/shared-expertise.png";
import successManPhoto from "../assets/images/success-man.png";
import thumbsUpManPhoto from "../assets/images/thumbs-up-man.png";
import greatIdeaPhoto from "../assets/images/great-idea.png";
import businessSolutionPhoto from "../assets/images/business-solution.png";

const Index = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
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
          <Button className="bg-warning text-white pt-2 pb-2">Lets Talk</Button>
        </div>
      </div>

      <div className=" bg-warning services-container-landing-page">
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

      <div className=" ">
        <Container className="text-center">
          <h1 className="text-white my-5">Why Us?</h1>
          <Row className=" justify-content-center">
            <Col lg={3} className=" why-container text-left p-4 m-4">
              <h5>Personal Consultation</h5>
              <p>ONE ON ONE TALK</p>
              <img
                src={oneOnOnePhoto}
                alt="one on one"
                className=" why-images"
              />
            </Col>
            <Col lg={3} className=" why-container text-left p-4 m-4">
              <h5>Business Solution</h5>
              <p>FINDING SOLUTION</p>
              <img
                src={businessSolutionPhoto}
                alt="business solution"
                className=" why-images"
              />
            </Col>
            <Col lg={3} className=" why-container text-left p-4 m-4">
              <h5>Great Ideas</h5>
              <p>IDEAS THAT WILL BLOW YOUR MIND</p>
              <img
                src={greatIdeaPhoto}
                alt="great idea"
                className=" why-images"
              />
            </Col>
          </Row>
          <Row className=" justify-content-center mb-5">
            <Col lg={3} className=" why-container text-left p-4 m-4">
              <h5>Improved Business</h5>
              <p> BUSINESS TO WHOLE NEW LEVEL</p>
              <img
                src={thumbsUpManPhoto}
                alt="Thumbs up man"
                className=" why-images"
              />
            </Col>
            <Col lg={3} className=" why-container text-left p-4 m-4">
              <h5>Shared Expertise</h5>
              <p>LEARN FROM THE BEST</p>
              <img
                src={sharedExpertisePhoto}
                alt="shared expertise"
                className="why-images "
              />
            </Col>
            <Col lg={3} className=" why-container text-left p-4 m-4">
              <h5>Achieved Goals</h5>
              <p>CLOSE THE DEAL</p>
              <img
                src={successManPhoto}
                alt="Happy man"
                className=" why-images"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="debugger feedback-carousel bg-warning"
      >
        <Carousel.Item className="text-center">
          <h1>
            "Cras venenatis ante at eros mattis euismod. In ac purus vulputate,
            dignissim velit a, volutpat sem. Vivamus neque arcu, maximus vel
            nibh in, ultrices dapibus."
          </h1>
          <h4>- Abigail A. Dodson</h4>
        </Carousel.Item>
        <Carousel.Item className="text-center">
          <h1>
            "Aliquam fermentum libero libero, quis semper mauris volutpat non.
            Nulla maximus arcu sed mauris semper dapibus. Sed vel risus cursus,
            dignissim dolor ac, pharetra enim."
          </h1>
          <h4>- Hector G. Oneal</h4>
        </Carousel.Item>
        <Carousel.Item className="text-center">
          <h1>
            "In lacinia luctus odio id fermentum. Nulla convallis eros eleifend
            ex venenatis gravida. Nulla fringilla ullamcorper nisl quis
            eleifend. Suspendisse sed arcu ultricies, bibendum purus."
          </h1>
          <h4>- Harold P. Tabor </h4>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Index;
