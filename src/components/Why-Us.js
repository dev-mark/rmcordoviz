import React from "react";
import "../assets/styles/index.scss";

// bootstrap
import Col from "react-bootstrap/Col";

function WhyUs(props) {
  return (
    <Col lg={3} md={4} className=" why-container text-left p-4 m-4">
      <h5 className="text-capitalize">{props.title}</h5>
      <p className="text-uppercase ">{props.subtitle}</p>
      <img src={props.image} alt={props.title} className=" why-images" />
    </Col>
  );
}

export default WhyUs;
