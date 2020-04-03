import React, { useState } from "react";
import "../assets/styles/home.scss";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

// icons
import MarketingIcon from "../assets/icons/marketing.svg";
import ConsultantIcon from "../assets/icons/consultant.svg";
import DevelopmentIcon from "../assets/icons/code.svg";
import { ReactComponent as PhoneVolumeIcon } from "../assets/icons/phone-volume-solid.svg";

// images
import oneOnOnePhoto from "../assets/images/one-one-talk.png";
import sharedExpertisePhoto from "../assets/images/shared-expertise.png";
import successManPhoto from "../assets/images/success-man.png";
import thumbsUpManPhoto from "../assets/images/thumbs-up-man.png";
import greatIdeaPhoto from "../assets/images/great-idea.png";
import businessSolutionPhoto from "../assets/images/business-solution.png";

// components
import ServiceCategory from "../components/Service-Category";
import WhyUs from "../components/Why-Us";
import CustomerStatement from "../components/Customer-Statement";

const Index = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <div className="">
        <Row noGutters className=" justify-content-center landing-banner">
          <div id="landing-color-overlay">
            <Col lg={12} className="debugger content-container-1">
              <Row
                noGutters
                className=" jsutify-content-center landing-page-content-container"
              >
                <Col lg={10} className="">
                  <div className="text-left  vertical-center">
                    <h5 className="text-white">RMCORDOVIZ INC.</h5>
                    <h1 className="text-warning landing-header">
                      <strong>HELPING YOU ACHIEVE BUSINESS SUCCESS</strong>
                    </h1>
                    <p className="subtitle mb-5">
                      A coach can be the difference between making a thousands
                      to millions
                    </p>
                    <Button className="bg-warning  pt-2 pb-2 landing-button">
                      <Link to="/contact" className="black-link">
                        <i>
                          <PhoneVolumeIcon className="landing-button-icon" />
                        </i>
                        <strong>Let's Talk</strong>
                      </Link>
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </div>
        </Row>
      </div>

      <div className=" bg-warning services-container-landing-page">
        <Container className=" bg-warning">
          <Row className=" justify-content-center">
            <h1 className="text-title">SERVICES</h1>
          </Row>

          <Row noGutters className="justify-content-center pb-5">
            <ServiceCategory
              title="Certified Consultant"
              icon={ConsultantIcon}
              description="Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Praesent venenatis."
              category="coaching"
            />

            <ServiceCategory
              title="Marketing"
              icon={MarketingIcon}
              description="Nullam consequat urna at quam scelerisque vehicula. Morbi non
              nisi tempor, dapibus orci sit amet."
              category="marketing"
            />

            <ServiceCategory
              title="Software Development"
              icon={DevelopmentIcon}
              description=" Mauris malesuada sodales libero nec sodales. Donec interdum
              ligula ut neque hendrerit porttitor. Curabitur porttitor."
              category="development"
            />
          </Row>
        </Container>
      </div>

      <div>
        <Container className="text-center">
          <Row className=" justify-content-center">
            <h1 className="text-title text-white">WHY CHOOSE US?</h1>
          </Row>
          <Row className=" justify-content-center">
            <WhyUs
              title="Personal Consultation"
              subtitle="ONE ON ONE TALK"
              image={oneOnOnePhoto}
            />

            <WhyUs
              title="Business Solution"
              subtitle="FINDING SOLUTION"
              image={businessSolutionPhoto}
            />

            <WhyUs
              title="Great Ideas"
              subtitle="IDEAS THAT WILL BLOW YOUR MIND"
              image={greatIdeaPhoto}
            />
          </Row>
          <Row className=" justify-content-center mb-5">
            <WhyUs
              title="Improved Business"
              subtitle="BUSINESS TO WHOLE NEW LEVEL"
              image={thumbsUpManPhoto}
            />

            <WhyUs
              title="Shared Expertise"
              subtitle="LEARN FROM THE BEST"
              image={sharedExpertisePhoto}
            />

            <WhyUs
              title="Achieved Goals"
              subtitle="CLOSE THE DEAL"
              image={successManPhoto}
            />
          </Row>
        </Container>
      </div>

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className=" feedback-carousel bg-warning"
      >
        <Carousel.Item>
          <CustomerStatement
            name="Abigail A. Dodson"
            feedback="Cras venenatis ante at eros mattis euismod. In ac purus vulputate,
            dignissim velit a, volutpat sem. Vivamus neque arcu, maximus vel
            nibh in, ultrices dapibus."
          />
        </Carousel.Item>

        <Carousel.Item>
          <CustomerStatement
            name="Hector G. Oneal"
            feedback="Aliquam fermentum libero libero, quis semper mauris volutpat non.
          Nulla maximus arcu sed mauris semper dapibus. Sed vel risus cursus,
          dignissim dolor ac, pharetra enim."
          />
        </Carousel.Item>

        <Carousel.Item>
          <CustomerStatement
            name="Harold P. Tabor"
            feedback="In lacinia luctus odio id fermentum. Nulla convallis eros eleifend
          ex venenatis gravida. Nulla fringilla ullamcorper nisl quis
          eleifend. Suspendisse sed arcu ultricies, bibendum purus."
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Index;
