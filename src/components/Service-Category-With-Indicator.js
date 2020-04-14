import React from "react";
import "../assets/styles/services.scss";

function ServiceCategoryWithIndicator(props) {
  return (
    <div
      // xs={3}
      // lg={3}
      className="mx-2  services-category-container  debugger"
      onClick={() => props.setSelected(props.title)}
    >
      <div>
        <img
          src={props.icon}
          alt={props.title}
          className={`icon-component ${
            props.selected === props.title && "icon-component-selected"
          }`}
        />{" "}
        <h5
          className={`text-gold text-capitalize my-4 service-category-title text-center ${
            props.selected === props.title && "text-white"
          }`}
        >
          {props.title}
        </h5>
      </div>

      {/* <hr
        className={`line-indicator ${
          props.selected === props.title && "selected-indicator"
        }`} */}
      {/* /> */}
    </div>
  );
}

export default ServiceCategoryWithIndicator;
