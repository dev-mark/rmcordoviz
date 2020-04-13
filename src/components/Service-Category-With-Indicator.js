import React from "react";
import "../assets/styles/services.scss";

// bootstrap
import Col from "react-bootstrap/Col";

function ServiceCategoryWithIndicator(props) {
  return (
    <Col
      xs={3}
      lg={3}
      className="mx-2  services-category-container"
      onClick={() => props.setSelected(props.title)}
    >
      <h3 className="text-gold text-capitalize my-4 service-category-title">
        {props.title}
      </h3>
      <div>
        <img
          src={props.icon}
          alt={props.title}
          className={`icon-component ${
            props.selected === props.title && "icon-component-selected"
          }`}
        />
        {/* <ConsultantIcon
          className={`icon-component ${
            selected === "coaching" && "icon-component-selected"
          }`} */}
        {/* /> */}
      </div>
      <hr
        className={`line-indicator ${
          props.selected === props.title && "selected-indicator"
        }`}
      />
    </Col>
  );
}

export default ServiceCategoryWithIndicator;
