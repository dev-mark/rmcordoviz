import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/home.scss";

// bootstrap
import Col from "react-bootstrap/Col";

function ServiceCategory(props) {
  return (
    <Col lg={3} className="category-container ">
      <Link
        to={{
          pathname: "/services",
          state: {
            category: props.category
          }
        }}
      >
        <div className=" icon-container">
          <img src={props.icon} alt={props.title} height="160" width="160" />
        </div>
        <h3 className="text-capitalize">{props.title}</h3>
        <p>{props.description}</p>
      </Link>
    </Col>
  );
}

export default ServiceCategory;
