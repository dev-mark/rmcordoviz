import React from "react";
import "../assets/styles/home.scss";

// bootstrap
import Col from "react-bootstrap/Col";

function ServiceCategory(props) {
  return (
    <Col lg={3} className=" category-container">
      <div className=" icon-container">
        {/* {...props.icon} */}
        <img src={props.icon} alt={props.title} height="200" width="200" />
      </div>
      <h3 className="text-capitalize">{props.title}</h3>
      <p>{props.description}</p>
    </Col>
  );
}

export default ServiceCategory;
