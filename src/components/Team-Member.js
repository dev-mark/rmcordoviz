import React from "react";
import "../assets/styles/coaching.scss";

// bootstrap
import Col from "react-bootstrap/Col";

function TeamMember(props) {
  return (
    <Col lg={4} className=" ml-4 mr-4 mb-5 text-white content-team-container">
      <img
        src={props.image}
        className="coaching-team-image p-4"
        alt={props.name}
      />
      <h4 className="mt-4 mb-4 content-team-name">{props.name}</h4>
    </Col>
  );
}

export default TeamMember;
