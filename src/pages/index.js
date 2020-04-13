import React, { useState } from "react";
import "../assets/styles/index.scss";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

// icons
import ConsultantIcon from "../assets/icons/consultant.svg";
import DevelopmentIcon from "../assets/icons/code.svg";
import ProgressIcon from "../assets/icons/progress.svg";
import DigitalMarketing from "../assets/icons/social-media-marketing.svg";
import SEOIcon from "../assets/icons/search.svg";
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
      <Container fluid className="landing-banner">
        <Row noGutters className=" justify-content-center ">
          <div id="landing-color-overlay" />
          <Col xs={12} lg={9} className="landing-content-container">
            <div className="text-left  align-text-middle-left">
              <h6 className="text-white text-uppercase">
                We measure our success not on what we have tried, but what has
                succeeded.
              </h6>
              <h1 className="landing-header">
                <strong>WE SUCCEED WHEN OUR CLIENTS SUCCEED</strong>
              </h1>
              <h6 className="text-white mt-3 mb-4">RMCORDOVIZ INC</h6>
              {/* <p className="subtitle">
                At <strong>RMCordoviz Inc.</strong> Our methods focus on
                results. We measure our success not on what we have tried, but
                what has succeeded.
              </p> */}
              <Button className="pt-2 pb-2 landing-button gold-button">
                <Link to="/contact" className="text-black">
                  <i>
                    <PhoneVolumeIcon className="landing-button-icon" />
                  </i>
                  <strong>Let's Talk</strong>
                </Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="gold-background">
        <Row className=" justify-content-center">
          <h1 className="text-title">SERVICES</h1>
        </Row>

        <Row noGutters className="justify-content-center pb-5">
          <ServiceCategory
            title="Business Development"
            icon={ProgressIcon}
            category="Business Development"
          />

          <ServiceCategory
            title="Business Coaching and Consultancy"
            icon={ConsultantIcon}
            category="Business Coaching"
          />

          <ServiceCategory
            title="Digital Marketing"
            icon={DigitalMarketing}
            category="Digital Marketing"
          />
        </Row>
        <Row noGutters className="justify-content-center pb-5">
          {/* <ServiceCategory
            title="Social Media Management"
            icon={MarketingTeamIcon}
            category="coaching"
          /> */}

          <ServiceCategory
            title="Social Media Management, Ads Development and SEO"
            icon={SEOIcon}
            category="Social Media Management, Ads Development and SEO"
          />

          <ServiceCategory
            title="Software Development"
            icon={DevelopmentIcon}
            category="Software Development"
          />
        </Row>
      </Container>

      <Container className="text-center">
        <h1 className="text-title text-white">WHY CHOOSE US?</h1>
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

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className=" feedback-carousel gold-background"
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
