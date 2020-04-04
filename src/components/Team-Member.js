import React from "react";
import "../assets/styles/coaching.scss";

// bootstrap
import Col from "react-bootstrap/Col";

function TeamMember(props) {
  return (
    <Col lg={3} className="  p-3 mx-3 mb-5 text-white content-team-container">
      <img src={props.image} className="coaching-team-image" alt={props.name} />
      <h4 className="mt-4 mb-4 content-team-name">{props.name}</h4>
    </Col>
  );
}

export default TeamMember;
