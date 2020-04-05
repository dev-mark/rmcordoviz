import React from "react";
import "../assets/styles/coaching.scss";

// bootstrap
import Col from "react-bootstrap/Col";

function TeamMember(props) {
  return (
    <Col
      xs={10}
      md={4}
      lg={3}
      className="debugger text-white content-team-container  mx-3"
    >
      <img src={props.image} className="coaching-team-image" alt={props.name} />
      <h4 className="mt-4 mb-4 content-team-name">{props.name}</h4>
    </Col>
  );
}

export default TeamMember;
