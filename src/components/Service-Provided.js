import React from "react";
import "../assets/styles/services.scss";

// bootstrap
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ServiceProvided(props) {
  return (
    <Col md={4} lg={3} className=" mr-3 ml-3">
      <Row className="coaching-image-holder  justify-content-center">
        <img src={props.image} alt={props.serviceTitle} />
      </Row>
      <Row className="coaching-services-title-holder mt-3 mb-3 justify-content-center">
        <h5 className="text-gold coaching-services-title text-uppercase">
          {props.serviceTitle}
        </h5>
      </Row>
      <Row className="coaching-paragrapg-holder justify-content-center">
        <p>{props.serviceDescription}</p>
      </Row>
    </Col>
  );
}

export default ServiceProvided;
