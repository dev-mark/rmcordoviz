import React from "react";
import "../assets/styles/zija.scss";

// bootstrap
import Col from "react-bootstrap/Col";

function SuccessStoryContainer(props) {
  //   const [link, image, name, description] = props;
  return (
    <Col lg={3} className=" mr-3 ml-3 success-story-container">
      <a href={props.link}>
        <div className="success-story-image-holder">
          <img
            className="success-story-image"
            src={props.image}
            alt="Success story"
            height="200"
            width="200"
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
