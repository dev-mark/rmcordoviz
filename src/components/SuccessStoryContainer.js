import React from "react";
import "../assets/styles/zija.scss";

// bootstrap
import Col from "react-bootstrap/Col";

function SuccessStoryContainer(props) {
  return (
    <Col md={3} lg={3} className="mb-3  mr-3 ml-3 success-story-container">
      <a href={props.link}>
        <div className="success-story-image-holder">
          <img
            className="success-story-image"
            src={props.image}
            alt="Success story from zija"
          />
          <h3 className=" text-left success-story-title">{props.name}</h3>
          <hr />
          <p className="text-left pl-2">{props.description}</p>
        </div>
      </a>
    </Col>
  );
}

export default SuccessStoryContainer;
