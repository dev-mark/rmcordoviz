import React from "react";
import "../assets/styles/services-development.scss";

// bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// images
import webDev from "../assets/images/web-dev.jpeg";
import appDev from "../assets/images/app-dev.jpeg";
import sample1 from "../assets/images/sample1.jpeg";
import sample2 from "../assets/images/sample2.jpeg";
import sample3 from "../assets/images/sample3.jpeg";
import sample4 from "../assets/images/sample4.jpeg";

function SoftwareDevelopment() {
  return (
    <div className="text-white">
      <Row noGutters className=" justify-content-center mb-5 ">
        <Col lg={5} className=" mr-4">
          <img
            src={webDev}
            alt="web development"
            className="development-image"
          />
        </Col>
        <Col lg={5} className="mr-4">
          <div className="text-left text-white  development-text-container">
            <h3 className="text-warning mt-4 mb-3">Web Development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              dictum posuere nulla, vel sodales sapien congue vitae. Cras quis
              turpis fringilla est luctus pulvinar a ac tortor. Nam quis enim
              ex. Pellentesque sodales convallis sapien quis porta. Aenean
              gravida rutrum sem, non sodales lorem auctor vitae. Proin rhoncus,
              risus sagittis ornare facilisis, ex purus tempor ex, eget
              fermentum lacus augue ut tellus. Fusce at ipsum sagittis, feugiat
              ipsum id, ornare ante. Ut dictum lorem eget leo tincidunt
              dignissim. Suspendisse augue mauris, commodo ac dapibus sed,
              tempus id risus. Aliquam at congue tortor. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
          </div>
        </Col>
      </Row>
      <Row noGutters className=" justify-content-center mb-5">
        <Col lg={5} className=" ml-2 mr-2">
          <div className="text-left text-white  development-text-container">
            <h3 className="text-warning mt-4 mb-3">App Development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              dictum posuere nulla, vel sodales sapien congue vitae. Cras quis
              turpis fringilla est luctus pulvinar a ac tortor. Nam quis enim
              ex. Pellentesque sodales convallis sapien quis porta. Aenean
              gravida rutrum sem, non sodales lorem auctor vitae. Proin rhoncus,
              risus sagittis ornare facilisis, ex purus tempor ex, eget
              fermentum lacus augue ut tellus. Fusce at ipsum sagittis, feugiat
              ipsum id, ornare ante. Ut dictum lorem eget leo tincidunt
              dignissim. Suspendisse augue mauris, commodo ac dapibus sed,
              tempus id risus. Aliquam at congue tortor. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
          </div>
        </Col>
        <Col lg={5} className=" ml-2 mr-2">
          <img
            src={appDev}
            alt="app development"
            className="development-image"
          />
        </Col>
      </Row>
      <Row className=" justify-content-center mb-5 mt-3">
        <Col lg={3} className="  text-center justify-content-center">
          <div className=" sample-website-images-container">
            <img
              className="sample-website-images"
              src={sample1}
              alt="sample1"
              height="35"
              width="35"
            />
          </div>
        </Col>
        <Col lg={3} className="  text-center justify-content-center">
          <div className=" sample-website-images-container">
            <img
              className="sample-website-images"
              src={sample2}
              alt="sample2"
              height="35"
              width="35"
            />
          </div>
        </Col>
        <Col lg={3} className="  text-center justify-content-center">
          <div className=" sample-website-images-container">
            <img
              className="sample-website-images"
              src={sample3}
              alt="sample3"
              height="35"
              width="35"
            />
          </div>
        </Col>
        <Col lg={3} className="  text-center justify-content-center">
          <div className=" sample-website-images-container">
            <img
              className="sample-website-images"
              src={sample4}
              alt="sample4"
              height="35"
              width="35"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SoftwareDevelopment;
