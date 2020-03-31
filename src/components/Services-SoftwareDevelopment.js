import React from "react";
import "../assets/styles/services-development.scss";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// images
import webDev from "../assets/images/web-dev.jpeg";
import appDev from "../assets/images/app-dev.jpeg";

function SoftwareDevelopment() {
  return (
    <div className="text-white">
      <Row noGutters className=" justify-content-center mb-5 ">
        <Col lg={5} className=" ml-2 mr-2">
          <img
            src={webDev}
            alt="web development"
            className="development-image"
          />
        </Col>
        <Col lg={5} className=" ml-2 mr-2">
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
    </div>
  );
}

export default SoftwareDevelopment;
