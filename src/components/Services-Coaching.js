import React from "react";
import "../assets/styles/services-coaching.scss";

// bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// images
import leadershipPhoto from "../assets/images/leadership.jpeg";
import executivePhoto from "../assets/images/executive-coaching.jpg";
import managementPhoto from "../assets/images/management-coaching.jpg";
import oneOnonePhoto from "../assets/images/one-on-one.jpeg";
import webinarsPhoto from "../assets/images/webinars.jpeg";
import workshopPhoto from "../assets/images/workshop.jpeg";

function Coaching() {
  return (
    <div className="text-white">
      <Row className=" justify-content-center mb-5 mt-4">
        <Col lg={3} className=" mr-3 ml-3">
          <Row className="coaching-image-holder  justify-content-center">
            <img src={leadershipPhoto} alt="leadership coaching" />
          </Row>
          <Row className="coaching-services-title-holder mt-3 mb-3 justify-content-center">
            <h5 className="text-warning coaching-services-title">LEADERSHIP</h5>
          </Row>
          <Row className="coaching-paragrapg-holder justify-content-center">
            <p>
              Etiam vel massa nec ipsum feugiat efficitur tincidunt quis nibh.
              Proin nisi nibh, vehicula eu lorem cursus, sollicitudin tincidunt
              orci.
            </p>
          </Row>
        </Col>
        <Col lg={3} className=" mr-3 ml-3">
          <Row className="coaching-image-holder  justify-content-center">
            <img src={managementPhoto} alt="management coaching" />
          </Row>
          <Row className="coaching-services-title-holder mt-3 mb-3 justify-content-center">
            <h5 className="text-warning coaching-services-title">
              MANAGEMENT COACHING
            </h5>
          </Row>
          <Row className="coaching-paragrapg-holder justify-content-center">
            <p>
              Nam vehicula pellentesque enim at venenatis. Proin consectetur
              dapibus quam non scelerisque. Pellentesque ornare erat ac nunc
              vulputate, ac lacinia.
            </p>
          </Row>
        </Col>
        <Col lg={3} className=" mr-3 ml-3">
          <Row className="coaching-image-holder  justify-content-center">
            <img src={executivePhoto} alt="executive coaching" />
          </Row>
          <Row className="coaching-services-title-holder mt-3 mb-3 justify-content-center">
            <h5 className="text-warning coaching-services-title">
              EXECUTIVE COACHING
            </h5>
          </Row>
          <Row className="coaching-paragrapg-holder justify-content-center">
            <p>
              Aenean tristique vehicula orci ut convallis. Morbi eget magna in
              velit pharetra egestas. Proin fermentum ex id purus rutrum
              consectetur.
            </p>
          </Row>
        </Col>
      </Row>
      <Row className=" justify-content-center mb-5">
        <Col lg={3} className=" mr-3 ml-3">
          <Row className="coaching-image-holder  justify-content-center">
            <img src={webinarsPhoto} alt="webinar coaching" />
          </Row>
          <Row className="coaching-services-title-holder mt-3 mb-3 justify-content-center">
            <h5 className="text-warning coaching-services-title">WEBINARS</h5>
          </Row>
          <Row className="coaching-paragrapg-holder justify-content-center">
            <p>
              Nam vehicula pellentesque enim at venenatis. Proin consectetur
              dapibus quam non scelerisque. Pellentesque ornare erat ac nunc
              vulputate, ac lacinia.
            </p>
          </Row>
        </Col>
        <Col lg={3} className=" mr-3 ml-3">
          <Row className="coaching-image-holder  justify-content-center">
            <img src={workshopPhoto} alt="workshop coaching" />
          </Row>
          <Row className="coaching-services-title-holder mt-3 mb-3 justify-content-center">
            <h5 className="text-warning coaching-services-title">WORKSHOPS</h5>
          </Row>
          <Row className="coaching-paragrapg-holder justify-content-center">
            <p>
              Aenean tristique vehicula orci ut convallis. Morbi eget magna in
              velit pharetra egestas. Proin fermentum ex id purus rutrum
              consectetur.
            </p>
          </Row>
        </Col>
        <Col lg={3} className=" mr-3 ml-3">
          <Row className="coaching-image-holder  justify-content-center">
            <img src={oneOnonePhoto} alt="one-on-one coaching" />
          </Row>
          <Row className="coaching-services-title-holder mt-3 mb-3 justify-content-center">
            <h5 className="text-warning coaching-services-title">ONE-ON-ONE</h5>
          </Row>
          <Row className="coaching-paragrapg-holder justify-content-center">
            <p>
              Etiam vel massa nec ipsum feugiat efficitur tincidunt quis nibh.
              Proin nisi nibh, vehicula eu lorem cursus, sollicitudin tincidunt
              orci.
            </p>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Coaching;
