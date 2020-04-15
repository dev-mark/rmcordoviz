import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/index.scss";

// bootstrap
import Col from "react-bootstrap/Col";

function ServiceCategory(props) {
  return (
    <Col lg={3} md={4} className="category-container ">
      <Link
        to={{
          pathname: "/services",
          state: {
            category: props.category,
          },
        }}
      >
        <div className=" icon-container">
          <img src={props.icon} alt={props.title} height="180" width="180" />
        </div>
        <h3 className="text-capitalize">{props.title}</h3>
      </Link>
    </Col>
  );
}

export default ServiceCategory;
