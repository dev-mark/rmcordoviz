import React from "react";
import "../assets/styles/services.scss";

// bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// icons
import { ReactComponent as FacebookLogo } from "../assets/icons/facebook-logo.svg";
import { ReactComponent as TwitterLogo } from "../assets/icons/twitter-logo.svg";
import { ReactComponent as LinkedInLogo } from "../assets/icons/linkedin-logo.svg";
import { ReactComponent as InstagramLogo } from "../assets/icons/instagram-logo.svg";
import { ReactComponent as YoutubeLogo } from "../assets/icons/youtube-logo.svg";

function Marketing() {
  return (
    <div className="text-white">
      <div>
        <h1 className="text-gold mt-5 mb-5 text-title text-uppercase">
          Digital Marketing
        </h1>
      </div>
      <div className="services-text-content">
        <p>
          Today’s E-commerce is an ever-changing landscape driven by potential
          clients and prospects who now possess power at their fingertips
          through smart technology.
        </p>
        <p>
          RMCordoviz Inc. will lead as your guide in tracking and monitoring
          your campaigns, allowing you to adapt and drive toward better results.
        </p>
        <p>
          We recommend tactics that make sense to you, even if it means less
          money in our pockets. We find the most cost-effective measures to
          achieve your goal.
        </p>
      </div>
      {/* <Row className=" text-left text-white seo-checklist justify-content-center">
        <Col xs={12} lg={10} className=" ">
          <ul>
            <li className="">
              <i>
                <CheckIcon className="gold-check-icon" />
              </i>
              Target Market Business Analysis
            </li>
            <li>
              <i>
                <CheckIcon className="gold-check-icon" />
              </i>
              Keyword Research and Development
            </li>
            <li>
              <i>
                <CheckIcon className="gold-check-icon" />
              </i>
              Content Optimization and Submission
            </li>
            <li>
              <i>
                <CheckIcon className="gold-check-icon" />
              </i>
              Continuous Testing and Measuring
            </li>
          </ul>
        </Col>
      </Row> */}
      <div>
        <h5 className="text-gold text-title">Connect with us:</h5>
      </div>
      <Row noGutters className=" justify-content-center mb-5 mt-3">
        <Col
          xs={2}
          md={2}
          lg={1}
          xl={1}
          className="text-center justify-content-center"
        >
          <a href="https://www.facebook.com/rmccordoviz/">
            <div className="services-icon-container">
              <FacebookLogo className="services-icon" />
            </div>
          </a>
        </Col>
        <Col
          xs={2}
          md={2}
          lg={1}
          xl={1}
          className="   text-center justify-content-center"
        >
          <a href="https://twitter.com/rmccordoviz">
            <div className="services-icon-container">
              <TwitterLogo className="services-icon" />
            </div>
          </a>
        </Col>
        <Col
          xs={2}
          md={2}
          lg={1}
          xl={1}
          className="   text-center justify-content-center"
        >
          <a href="https://www.linkedin.com/company/rmccordoviz/">
            <div className="services-icon-container">
              <LinkedInLogo className="services-icon" />
            </div>
          </a>
        </Col>
        <Col
          xs={2}
          md={2}
          lg={1}
          xl={1}
          className="   text-center justify-content-center"
        >
          <a href="https://www.instagram.com/rmcordoviz/">
            <div className="services-icon-container">
              <InstagramLogo className="services-icon" />
            </div>
          </a>
        </Col>
        <Col
          xs={2}
          md={2}
          lg={1}
          xl={1}
          className="   text-center justify-content-center"
        >
          <a href="https://www.youtube.com/channel/UCh4v2Jl9swUryADUYsrgvdQ">
            <div className="services-icon-container">
              <YoutubeLogo className="services-icon" />
            </div>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default Marketing;
